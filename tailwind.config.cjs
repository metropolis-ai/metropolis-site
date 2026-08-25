/**
 * Tailwind config — deliberately tiny, exactly like a polis app's. It extends
 * the shared polis preset (colour scale mapped to the CSS variables the
 * <ThemeProvider> injects, radius rhythm, typography, animation) and points
 * `content` at this site plus the kit source it composes. All design decisions
 * live in the preset + metropolis's brand tokens; the site adds nothing bespoke.
 *
 * The preset and the kit source both come from the polis git dependency under
 * node_modules/polis (see AGENTS.md > "Consuming polis").
 */
const preset = require("./node_modules/polis/libs/ui-kit/tailwind-preset.cjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset],
  content: [
    "./index.html",
    "./how-it-works.html",
    "./consulting.html",
    "./experts.html",
    "./investors.html",
    // The public blog is generated static HTML (scripts/build-blog.mjs) whose
    // utility classes exist ONLY in those files — Tailwind must scan them or the
    // blog ships unstyled. They are generated before vite build, so they exist
    // by the time PostCSS runs.
    "./blog.html",
    "./blog/**/*.html",
    "./src/**/*.{ts,tsx}",
    "./node_modules/polis/libs/ui-kit/src/**/*.{ts,tsx}",
    "./node_modules/polis/libs/marketing-site-kit/src/**/*.{ts,tsx}",
  ],
};
