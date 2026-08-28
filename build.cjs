#!/usr/bin/env node
/*
 * build.cjs — encrypt the gated investor hub (nav tree + documents).
 *
 * Usage:  node build.cjs            (reads passphrase from .env)
 *   (or)  node build.cjs "passphrase"
 *
 * Walks TREE, encrypts each node's `src` (plaintext *.src.html, NOT committed)
 * plus the nav tree itself, into a single committed `public/docs.enc.js`:
 *     window.__ENC = { nav:{…}, n3:{…}, … }   // AES-256-GCM payloads, opaque keys
 *
 * Output lives in `public/` so Vite copies it verbatim into the built static
 * site at `/docs.enc.js`; `investors.html` loads it and decrypts in-browser.
 * The plaintext `*.src.*` inputs still live (git-ignored) at the repo root.
 *
 * The nav (titles + structure) is encrypted too, so the internal system names
 * never appear in the public source. investors.html decrypts `nav` on unlock,
 * renders the sidebar, and decrypts a node's doc when it's opened. Node ids are
 * opaque (n0, n1, …); titles live only inside the encrypted nav.
 */
const fs = require('fs');
const crypto = require('crypto');

// The gated hub. `src` = a plaintext file to encrypt (git-ignored). A source is
// required only when `required: true` is explicit; nodes without a source may
// intentionally render as draft placeholders.
//
// THE BLOG LIVES BEHIND THE GATE, not on a public page. Posts are written for
// investors and trusted advisors, so they get the same passphrase gate as every
// other private doc — there is no public blog surface and no RSS.
//
// To publish a post:
//   1. Write the plaintext as `resource-post-<slug>.src.md` at the repo root
//      (git-ignored by the `*.src.md` rule), either by hand or via
//      `node sync-doc.cjs <vault-node.md> --slug post-<slug>` to pull it from an
//      ailexandria node. Note sync-doc.cjs hardcodes the `resource-` prefix.
//   2. Add a node to the `Blog` children below, NEWEST FIRST:
//        { title: '2026-08-25 — Why the studio is the first customer',
//          src: 'resource-post-why-the-studio-is-the-first-customer.src.md' }
//   3. Run `node build.cjs` to re-encrypt `public/docs.enc.js`, and commit it.
// A child with no `src` renders as a "draft" placeholder rather than failing, so
// the section can carry a coming-soon row before the first post exists.
const TREE = [
  { title: 'Thesis', src: 'plan.src.html', required: true },
  { title: 'Blog', children: [
    { title: '2026-08-31 — polis V1', src: 'resource-post-polis-v1.src.md' },
  ]},
  /* Resource tree hidden 2026-07-07 until these docs are re-reviewed and refreshed.
     Restore by deleting the comment wrapper: the opening marker above, closing marker below.
  { title: 'How it works', children: [
    { title: 'ailexandria — knowledge & memory vault', src: 'resource-ailexandria.src.html' },
    { title: 'polis — the planning engine', src: 'resource-polis.src.html', children: [
      { title: 'Platform architecture', children: [
        { title: 'Platform API', src: 'resource-platform-api.src.html' },
        { title: 'Worker', src: 'resource-worker.src.html' },
        { title: 'Temporal — durable orchestration', src: 'resource-temporal.src.html' },
        { title: 'Generic resource abstraction', src: 'resource-resource-abstraction.src.html' },
        { title: 'UI kits / design system', src: 'resource-ui-kits.src.html' },
      ]},
      { title: 'Config versioning / control plane', src: 'resource-control-plane.src.md' },
    ]},
    { title: 'Planning spaces', src: 'resource-planning-spaces.src.html', children: [
      { title: 'artemis — first space (job hunt)', src: 'resource-artemis.src.html' },
      { title: 'acme — testing / reference app', src: 'resource-acme.src.html' },
    ]},
  ]},
  { title: 'Market research', children: [
    { title: 'Positioning — the "million websites" answer', src: 'resource-metropolis-market-positioning.src.md' },
    { title: 'Competition: ailexandria', src: 'resource-ailexandria-competitive-landscape.src.md' },
    { title: 'Competition: polis', src: 'resource-polis-competitive-landscape.src.md' },
    { title: 'Competition: artemis', src: 'resource-artemis-competitive-landscape.src.md' },
  ]},
  */
];

// Load a local .env (git-ignored) so the passphrase is never typed or printed.
if (fs.existsSync('.env')) {
  for (const line of fs.readFileSync('.env', 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (m && process.env[m[1]] === undefined) process.env[m[1]] = m[2];
  }
}
const ITER = 150000;
const pass = process.argv[2] || process.env.METROPOLIS_PASSPHRASE;
if (!pass) { console.error('Provide a passphrase: node build.cjs "<passphrase>"  (or set it in .env)'); process.exit(1); }
const outputPath = process.env.METROPOLIS_ENCRYPT_OUTPUT || 'public/docs.enc.js';

function findMissingRequiredSources(nodes, missing = []) {
  for (const node of nodes) {
    if (node.required && (!node.src || !fs.existsSync(node.src))) {
      missing.push({ title: node.title, src: node.src });
    }
    if (node.children) findMissingRequiredSources(node.children, missing);
  }
  return missing;
}

const missingRequired = findMissingRequiredSources(TREE);
if (missingRequired.length > 0) {
  for (const node of missingRequired) {
    console.error(`MISSING REQUIRED SOURCE: ${node.src || '(no source configured)'} (${node.title})`);
  }
  console.error(`Encryption aborted before writing ${outputPath}.`);
  process.exit(1);
}

function encrypt(buf) {
  const salt = crypto.randomBytes(16), iv = crypto.randomBytes(12);
  const key = crypto.pbkdf2Sync(pass, salt, ITER, 32, 'sha256');
  const c = crypto.createCipheriv('aes-256-gcm', key, iv);
  const ct = Buffer.concat([c.update(buf), c.final()]);
  const payload = Buffer.concat([ct, c.getAuthTag()]); // WebCrypto wants the tag appended
  return { iter: ITER, salt: salt.toString('base64'), iv: iv.toString('base64'), ct: payload.toString('base64') };
}

const ENC = {};
let counter = 0;
function walk(nodes) {
  return nodes.map(n => {
    const id = 'n' + (counter++);
    const out = { id, title: n.title };
    if (n.src) {
      if (fs.existsSync(n.src)) { ENC[id] = encrypt(fs.readFileSync(n.src)); out.doc = true; out.fmt = n.src.endsWith('.src.md') ? 'md' : 'html'; console.log(`  encrypted ${n.src} -> ${id} (${out.fmt})`); }
      else console.error(`  MISSING ${n.src} — "${n.title}" will render as a placeholder`);
    }
    if (n.children) out.children = walk(n.children);
    return out;
  });
}

const nav = walk(TREE);
ENC['nav'] = encrypt(Buffer.from(JSON.stringify(nav), 'utf8'));
const outputDir = require('path').dirname(outputPath);
const temporaryOutput = `${outputPath}.tmp-${process.pid}`;
fs.mkdirSync(outputDir, { recursive: true });
try {
  fs.writeFileSync(temporaryOutput, 'window.__ENC=' + JSON.stringify(ENC) + ';\n', { flag: 'wx' });
  fs.renameSync(temporaryOutput, outputPath);
} finally {
  if (fs.existsSync(temporaryOutput)) fs.unlinkSync(temporaryOutput);
}
console.log(`Wrote ${outputPath} (${Object.keys(ENC).length} encrypted blobs). Keep plaintext sources local.`);
