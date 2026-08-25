/*
 * clean-urls.mjs — turn dist/ into directory-index form so URLs have no ".html".
 *
 * Usage:  node scripts/clean-urls.mjs      (run by `pnpm build`, LAST)
 *
 *   dist/consulting.html            ->  dist/consulting/index.html      -> /consulting/
 *   dist/blog.html                  ->  dist/blog/index.html            -> /blog/
 *   dist/blog/<slug>.html           ->  dist/blog/<slug>/index.html     -> /blog/<slug>/
 *   dist/index.html                     (stays; it is already the root)
 *
 * WHY THIS SHAPE. GitHub Pages does not strip ".html" for you — that is a
 * Netlify/Cloudflare feature. What it does do natively is serve <dir>/index.html
 * for a directory request and redirect /consulting to /consulting/. So emitting
 * directory indexes is the whole trick; no server config and no router.
 *
 * REDIRECT STUBS. Each moved page also leaves a tiny stub at its OLD path
 * (dist/consulting.html) that redirects to the new one. The captain confirmed no
 * ".html" links were shared with anyone, but the site has been live for weeks so
 * search engines have indexed those paths, and a stub costs a few hundred bytes.
 * Each stub carries a canonical link to the new URL so the redirect consolidates
 * rather than splitting ranking. Delete them once the old URLs stop appearing in
 * logs or search results.
 *
 * INTERNAL LINKS MUST BE ROOT-ABSOLUTE. A page served at /consulting/ that links
 * to a relative "experts.html" would resolve to /consulting/experts.html. All
 * internal links in src/ and scripts/build-blog.mjs are therefore written as
 * "/experts/" style. verify-links.mjs enforces this.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(root, "dist");

/** Pages to convert. `index.html` is deliberately absent — it is already root. */
const TOP_LEVEL = [
  "how-it-works.html",
  "consulting.html",
  "experts.html",
  "investors.html",
  "blog.html",
];

const stub = (to, title) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="refresh" content="0; url=${to}">
<link rel="canonical" href="${to}">
<meta name="robots" content="noindex">
<title>${title}</title>
</head>
<body><p>This page moved to <a href="${to}">${to}</a>.</p></body>
</html>
`;

let moved = 0;

/** Move <dir>/<name>.html to <dir>/<name>/index.html, leaving a redirect stub. */
function toDirectoryIndex(relFile) {
  const abs = path.join(DIST, relFile);
  if (!fs.existsSync(abs)) throw new Error(`expected ${relFile} in dist/ — did vite build run?`);
  const slug = relFile.replace(/\.html$/, "");
  const dir = path.join(DIST, slug);
  const html = fs.readFileSync(abs, "utf8");

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);

  const url = `/${slug}/`;
  fs.writeFileSync(abs, stub(url, "Moved"));
  moved++;
  console.log(`clean-urls: ${relFile.padEnd(34)} -> ${slug}/index.html  (+stub)`);
}

for (const file of TOP_LEVEL) toDirectoryIndex(file);

// Blog posts live one level down and are generated, so discover them rather
// than listing them. Skip index.html, which blog.html just became.
const blogDir = path.join(DIST, "blog");
if (fs.existsSync(blogDir)) {
  for (const entry of fs.readdirSync(blogDir)) {
    if (entry.endsWith(".html") && entry !== "index.html") {
      toDirectoryIndex(path.join("blog", entry));
    }
  }
}

console.log(`clean-urls: ${moved} page(s) now serve at extensionless URLs.`);
