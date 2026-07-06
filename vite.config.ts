import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// Vite build for the metropolis marketing site: a static multi-page app
// (landing + experts + gated investor hub) served from GitHub Pages at
// gometropolis.ai. "vite build" emits a fully static dist/ (HTML/CSS/JS plus the
// public/ assets, including the untouched encrypted docs.enc.js, CNAME, and
// .nojekyll).
//
// polis is consumed as SOURCE (a SHA-pinned git dependency): the @polis/*
// aliases resolve to the checked-out lib source under node_modules/polis/libs,
// mirroring how the acme app and the artemis planning space consume it. See
// AGENTS.md > "Consuming polis" for why this is the current path and its edges.
const here = dirname(fileURLToPath(import.meta.url));
const lib = (p: string): string => resolve(here, "node_modules/polis/libs", p);

export default defineConfig({
  root: here,
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@polis/marketing-site-kit": lib("marketing-site-kit/src/index.ts"),
      "@polis/ui-kit": lib("ui-kit/src/index.ts"),
      "@polis/sdk": lib("sdk/src/index.ts"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(here, "index.html"),
        experts: resolve(here, "experts.html"),
        investors: resolve(here, "investors.html"),
      },
    },
  },
});
