#!/usr/bin/env node

const assert = require('assert');
const crypto = require('crypto');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const buildScript = path.join(repoRoot, 'build.cjs');
const realMode = process.argv.includes('--real');

function sha256(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

function runBuild(cwd, output, passphrase) {
  const env = { ...process.env, METROPOLIS_ENCRYPT_OUTPUT: output };
  if (passphrase !== undefined) env.METROPOLIS_PASSPHRASE = passphrase;
  return spawnSync(process.execPath, [buildScript], {
    cwd,
    env,
    encoding: 'utf8',
  });
}

function readBundle(file) {
  const source = fs.readFileSync(file, 'utf8');
  const prefix = 'window.__ENC=';
  assert(source.startsWith(prefix) && source.endsWith(';\n'), 'unexpected bundle wrapper');
  return JSON.parse(source.slice(prefix.length, -2));
}

function decrypt(payload, passphrase) {
  const salt = Buffer.from(payload.salt, 'base64');
  const iv = Buffer.from(payload.iv, 'base64');
  const encryptedWithTag = Buffer.from(payload.ct, 'base64');
  const tag = encryptedWithTag.subarray(encryptedWithTag.length - 16);
  const ciphertext = encryptedWithTag.subarray(0, encryptedWithTag.length - 16);
  const key = crypto.pbkdf2Sync(passphrase, salt, payload.iter || 150000, 32, 'sha256');
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
}

function findBusinessPlan(nodes) {
  for (const node of nodes) {
    if (node.title === 'Thesis') return node;
    if (node.children) {
      const found = findBusinessPlan(node.children);
      if (found) return found;
    }
  }
  return undefined;
}

function verifyBundle(file, passphrase, expectedPlan) {
  const bundle = readBundle(file);
  assert(bundle.nav, 'encrypted navigation is missing');
  const nav = JSON.parse(decrypt(bundle.nav, passphrase).toString('utf8'));
  const planNode = findBusinessPlan(nav);
  assert(planNode && planNode.doc === true, 'required Thesis is absent from navigation');
  assert(bundle[planNode.id], 'required Thesis blob is missing');
  assert(decrypt(bundle[planNode.id], passphrase).equals(expectedPlan), 'Thesis round trip failed');
  assert.throws(() => decrypt(bundle.nav, `${passphrase}:incorrect`), 'wrong passphrase unexpectedly decrypted navigation');
}

function loadLocalPassphrase() {
  if (process.env.METROPOLIS_PASSPHRASE) return process.env.METROPOLIS_PASSPHRASE;
  const envPath = path.join(repoRoot, '.env');
  if (!fs.existsSync(envPath)) return undefined;
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*METROPOLIS_PASSPHRASE\s*=\s*(.*?)\s*$/);
    if (match && match[1]) return match[1];
  }
  return undefined;
}

function validateSyntheticContract() {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'metropolis-encryption-contract-'));
  try {
    const destination = path.join(tempDir, 'existing.enc.js');
    const baseline = Buffer.from('preservation baseline\n');
    fs.writeFileSync(destination, baseline);

    const missingResult = runBuild(tempDir, destination, 'validation-only-passphrase');
    assert.notStrictEqual(missingResult.status, 0, 'missing required source exited successfully');
    assert.match(missingResult.stderr, /MISSING REQUIRED SOURCE: plan\.src\.html/);
    assert(fs.readFileSync(destination).equals(baseline), 'destination changed after required-source failure');

    const expectedPlan = Buffer.from('<!doctype html><title>Validation fixture</title>');
    fs.writeFileSync(path.join(tempDir, 'plan.src.html'), expectedPlan, { mode: 0o600 });
    const successfulDestination = path.join(tempDir, 'controlled', 'docs.enc.js');
    const successResult = runBuild(tempDir, successfulDestination, 'validation-only-passphrase');
    assert.strictEqual(successResult.status, 0, 'controlled encryption failed');
    verifyBundle(successfulDestination, 'validation-only-passphrase', expectedPlan);

    console.log('PASS missing required source exits nonzero');
    console.log('PASS failed build preserves destination byte-for-byte');
    console.log('PASS controlled temporary encryption succeeds');
    console.log('PASS correct passphrase decrypts navigation and Thesis');
    console.log('PASS incorrect passphrase fails AES-GCM authentication');
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function validateRecoveredSources() {
  const source = path.join(repoRoot, 'plan.src.html');
  const committedBundle = path.join(repoRoot, 'public', 'docs.enc.js');
  const passphrase = loadLocalPassphrase();
  assert(fs.existsSync(source) && fs.statSync(source).size > 0, 'required plan.src.html is absent or empty');
  assert(passphrase, 'METROPOLIS_PASSPHRASE is absent or empty');

  const baseline = sha256(committedBundle);
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'metropolis-recovered-build-'));
  try {
    const protectedFailure = runBuild(tempDir, committedBundle, 'validation-only-passphrase');
    assert.notStrictEqual(protectedFailure.status, 0, 'protected missing-source check exited successfully');
    assert.strictEqual(sha256(committedBundle), baseline, 'committed bundle changed after required-source failure');

    const destination = path.join(tempDir, 'docs.enc.js');
    const result = runBuild(repoRoot, destination);
    assert.strictEqual(result.status, 0, 'controlled recovered-source encryption failed');
    verifyBundle(destination, passphrase, fs.readFileSync(source));
    assert.strictEqual(sha256(committedBundle), baseline, 'committed encrypted bundle changed');

    console.log('PASS required-source failure leaves committed public/docs.enc.js byte-identical');
    console.log('PASS recovered source encrypts to a temporary destination');
    console.log('PASS recovered passphrase decrypts navigation and Thesis');
    console.log('PASS incorrect passphrase fails AES-GCM authentication');
    console.log('PASS committed public/docs.enc.js remains byte-identical');
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

validateSyntheticContract();
if (realMode) validateRecoveredSources();
