/*
 * prerender.mjs — bake real HTML into the built React pages.
 *
 * Usage:  node scripts/prerender.mjs      (run by `pnpm build`, AFTER vite build)
 *
 * THE PROBLEM. Every React page shipped as an empty SPA shell
 * (`<div id="root"></div>`) with all copy injected client-side. A plain fetch —
 * curl, most crawlers, link-preview readers — saw only <title> and one meta
 * description. Verified live: the consulting page, which exists to generate
 * leads, was invisible to search.
 *
 * THE APPROACH. After `vite build`, render each page component to HTML with
 * react-dom/server and inject it into the built dist file in place of the empty
 * root div. The JS bundle is left untouched, so the page still hydrates and
 * stays fully interactive (contact forms, the gated hub).
 *
 * WHY SSR AND NOT A HEADLESS-BROWSER SNAPSHOT (which the board issue
 * recommended). A snapshot needs puppeteer/playwright, i.e. a ~150MB Chrome
 * download in CI on top of an already-fragile private-dependency install.
 * react-dom/server is already present via react-dom, so this costs nothing. The
 * refactor risk the issue worried about did not materialise: all five page
 * components render server-side unchanged. Nothing here required a component to
 * become "server-compatible" — ThemeProvider already guards `window`, and no
 * initial markup depends on an effect.
 *
 * THE HARD CARVE-OUT — read before adding a page. The investor hub's content is
 * deliberately encrypted (public/docs.enc.js) and decrypted only in-browser
 * after the passphrase is entered. Prerendering decrypted material would flatten
 * confidential content into crawlable HTML and defeat the gate.
 *
 * That cannot happen here, structurally: no passphrase exists at build time, so
 * `unlock()` is never called and InvestorsApp renders its LOCKED gate and
 * nothing else. Only the public landing shell is baked. `assertNoGatedLeak`
 * below enforces this anyway and fails the build rather than publishing a page
 * that somehow carried gated content.
 *
 * The public blog is NOT handled here — it is generated as static HTML from the
 * start by scripts/build-blog.mjs and has no root div to fill.
 */
import { createServer } from "vite";
import React from "react";
import { renderToString } from "react-dom/server";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(root, "dist");
const ROOT_DIV = '<div id="root"></div>';

/** Public pages only. Anything behind the passphrase gate must never appear. */
const PAGES = [
  { file: "index.html", entry: "/src/landing/app.tsx", export: "LandingApp" },
  { file: "how-it-works.html", entry: "/src/how-it-works/app.tsx", export: "HowItWorksApp" },
  { file: "consulting.html", entry: "/src/consulting/app.tsx", export: "ConsultingApp" },
  { file: "experts.html", entry: "/src/experts/app.tsx", export: "ExpertsApp" },
  // The investors LANDING SHELL only — the locked gate. See the carve-out above.
  { file: "investors.html", entry: "/src/investors/app.tsx", export: "InvestorsApp", gated: true },
];

/**
 * Refuse to publish a prerendered page carrying anything that should only exist
 * after a successful in-browser unlock. Belt-and-braces: without a passphrase
 * the decrypt path is never reached, so this should be unreachable.
 */
function assertNoGatedLeak(file, html) {
  const markers = [
    "__ENC", // the encrypted payload object
    "gated-hub-doc-frame", // the decrypted-document iframe
  ];
  for (const marker of markers) {
    if (html.includes(marker)) {
      throw new Error(
        `GATED CONTENT LEAK: prerendered ${file} contains "${marker}". ` +
          `Refusing to write a page that may expose material from behind the passphrase gate.`,
      );
    }
  }
}

const server = await createServer({
  configFile: path.join(root, "vite.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "silent",
});

let count = 0;
try {
  for (const page of PAGES) {
    const outPath = path.join(DIST, page.file);
    if (!fs.existsSync(outPath)) {
      throw new Error(`${page.file} not found in dist/ — run vite build before prerendering.`);
    }
    const shell = fs.readFileSync(outPath, "utf8");
    if (!shell.includes(ROOT_DIV)) {
      throw new Error(
        `${page.file} has no empty ${ROOT_DIV} to fill. Either it was already ` +
          `prerendered, or its HTML shell changed and this script needs updating.`,
      );
    }

    const mod = await server.ssrLoadModule(page.entry);
    const Component = mod[page.export];
    if (!Component) throw new Error(`${page.entry} does not export ${page.export}`);

    const rendered = renderToString(React.createElement(Component));
    // A near-empty render means the component silently failed to produce copy;
    // publishing that would replace a broken page with a differently broken one.
    if (rendered.length < 1000) {
      throw new Error(`${page.file} rendered only ${rendered.length} bytes — refusing to publish.`);
    }
    assertNoGatedLeak(page.file, rendered);

    fs.writeFileSync(outPath, shell.replace(ROOT_DIV, `<div id="root">${rendered}</div>`));
    console.log(
      `prerender: ${page.file.padEnd(18)} ${String(rendered.length).padStart(6)} bytes` +
        (page.gated ? "  (locked gate shell only)" : ""),
    );
    count++;
  }
} finally {
  await server.close();
}

console.log(`prerender: baked real HTML into ${count} page(s).`);
