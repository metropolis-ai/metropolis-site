import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// Vite build for the metropolis marketing site: a static multi-page app
// (landing + how it works + consulting + experts + gated investor hub) served from GitHub Pages at
// gometropolis.ai. "vite build" emits a fully static dist/ (HTML/CSS/JS plus the
// public/ assets, including the untouched encrypted docs.enc.js, CNAME, and
// .nojekyll).
//
// polis is consumed as SOURCE (a SHA-pinned git dependency): the @metropolis-ai/*
// aliases resolve to the checked-out lib source under node_modules/polis/libs,
// mirroring how the acme app and the artemis planning space consume it. See
// AGENTS.md > "Consuming polis" for why this is the current path and its edges.
const here = dirname(fileURLToPath(import.meta.url));
const lib = (p: string): string => resolve(here, "node_modules/polis/libs", p);

// The PUBLIC blog is emitted as real static HTML (one file per post) by
// scripts/build-blog.mjs, which `pnpm dev`/`pnpm build` run first — see that
// file for why it is static rather than a React page. Those generated pages are
// picked up here as ordinary MPA inputs so they go through Vite/Tailwind and
// share the site's CSS bundle. Empty/absent until the generator has run.
const blogInputs = (): Record<string, string> => {
  const inputs: Record<string, string> = {};
  const indexPath = resolve(here, "blog.html");
  if (existsSync(indexPath)) inputs.blog = indexPath;
  const dir = resolve(here, "blog");
  if (existsSync(dir)) {
    for (const file of readdirSync(dir)) {
      if (file.endsWith(".html")) {
        inputs[`blog-${file.replace(/\.html$/, "")}`] = resolve(dir, file);
      }
    }
  }
  return inputs;
};

export default defineConfig({
  root: here,
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@metropolis-ai/marketing-site-kit": lib("marketing-site-kit/src/index.ts"),
      "@metropolis-ai/ui-kit": lib("ui-kit/src/index.ts"),
      "@metropolis-ai/sdk": lib("sdk/src/index.ts"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(here, "index.html"),
        howItWorks: resolve(here, "how-it-works.html"),
        consulting: resolve(here, "consulting.html"),
        experts: resolve(here, "experts.html"),
        investors: resolve(here, "investors.html"),
        ...blogInputs(),
      },
    },
  },
});
