/*
 * verify-links.mjs — fail the build if any internal link in dist/ is broken.
 *
 * Usage:  node scripts/verify-links.mjs     (run by `pnpm build`, after clean-urls)
 *
 * This exists because switching to extensionless URLs rewrote every internal
 * link on the site, and a wrong one fails silently: the page still builds, still
 * deploys, and only 404s for a visitor. So every href is resolved against the
 * built output and the build fails if one does not exist.
 *
 * It also enforces the rule that makes directory URLs work at all: internal
 * links must be ROOT-ABSOLUTE. A relative "experts/" on a page served at
 * /consulting/ resolves to /consulting/experts/, which is not a page.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(root, "dist");

/** Every .html file under dist/, recursively. */
function htmlFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) htmlFiles(abs, out);
    else if (entry.name.endsWith(".html")) out.push(abs);
  }
  return out;
}

/** Does a URL path resolve to something in dist/? */
function resolves(urlPath) {
  const clean = urlPath.split("#")[0].split("?")[0];
  const rel = decodeURIComponent(clean.replace(/^\//, ""));
  const abs = path.join(DIST, rel);
  if (rel === "" || clean.endsWith("/")) {
    return fs.existsSync(path.join(abs, "index.html"));
  }
  return fs.existsSync(abs) || fs.existsSync(`${abs}.html`);
}

const problems = [];
const files = htmlFiles(DIST);

for (const file of files) {
  const rel = path.relative(DIST, file);
  // Redirect stubs intentionally point at the new URL; they are checked too,
  // but they are not expected to contain a nav.
  const html = fs.readFileSync(file, "utf8");
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = m[1];
    if (/^(https?:|mailto:|data:|#|\/\/)/.test(url)) continue; // external or in-page
    if (!url.startsWith("/")) {
      problems.push(`${rel}: RELATIVE internal link "${url}" — must be root-absolute`);
      continue;
    }
    if (!resolves(url)) problems.push(`${rel}: BROKEN link "${url}"`);
  }
}

// Every page a visitor can reach should also actually exist at its clean URL.
for (const expected of ["", "how-it-works", "consulting", "experts", "investors", "blog"]) {
  const target = path.join(DIST, expected, "index.html");
  if (!fs.existsSync(target)) problems.push(`missing clean URL: /${expected}${expected ? "/" : ""}`);
}

if (problems.length) {
  console.error(`verify-links: ${problems.length} problem(s):`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log(`verify-links: checked ${files.length} page(s), all internal links resolve.`);
