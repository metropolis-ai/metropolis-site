/*
 * build-blog.mjs — generate the PUBLIC blog as real static HTML.
 *
 * Usage:  node scripts/build-blog.mjs      (run by `pnpm dev` and `pnpm build`)
 *
 * WHY STATIC HTML AND NOT A REACT PAGE. The public blog exists to earn search
 * traffic for the consulting practice, so each post has to be a crawlable
 * document with its own title/meta/OG tags — not an empty #root a crawler has
 * to execute JavaScript to fill. So this emits one plain HTML file per post,
 * content inlined, no React and no client JS at all.
 *
 *   sources   content/blog/<slug>.md   (committed; YAML-ish frontmatter)
 *   output    blog.html                (index)      -- git-ignored
 *             blog/<slug>.html         (one a post) -- git-ignored
 *
 * The generated files are picked up by vite.config.ts as additional MPA inputs,
 * so they go through Vite/Tailwind normally and share the site's CSS bundle.
 * This must therefore run BEFORE `vite build` (see package.json's `build`).
 *
 * THEMING. <ThemeProvider> injects the brand tokens as inline CSS variables at
 * RUNTIME, which a React-free page never gets. Rather than hardcode a copy of
 * the palette (which would silently drift from src/brand.ts), we resolve the
 * real tokens at build time through Vite's own module runner — same resolver,
 * same aliases, same brand file the React pages use.
 *
 * NOTE ON THE OTHER BLOG. There are two, on purpose. This one is public and
 * written for prospective consulting clients. The INVESTOR blog is private and
 * lives behind the passphrase gate in build.cjs's TREE — different audience,
 * different candour. Do not cross-post between them without thinking about it.
 */
import { createServer } from "vite";
import { marked } from "marked";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const SRC_DIR = path.join(root, "content/blog");
const OUT_DIR = path.join(root, "blog");
const SITE = "https://gometropolis.ai";

const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );

/** Parse the `---` frontmatter block into a flat object, plus the body. */
function parsePost(raw, slug) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const meta = {};
  let body = raw;
  if (m) {
    for (const line of m[1].split("\n")) {
      const kv = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
      if (kv) meta[kv[1]] = kv[2].trim().replace(/^['"]|['"]$/g, "");
    }
    body = raw.slice(m[0].length);
  }
  if (!meta.title) throw new Error(`content/blog/${slug}.md is missing a "title:" in its frontmatter`);
  if (!meta.date) throw new Error(`content/blog/${slug}.md is missing a "date:" in its frontmatter`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date)) {
    throw new Error(`content/blog/${slug}.md has date "${meta.date}"; expected YYYY-MM-DD`);
  }
  return { ...meta, slug, body, draft: meta.draft === "true" };
}

/** Human-readable date without touching Date parsing rules. */
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function prettyDate(iso) {
  const [y, m, d] = iso.split("-");
  return `${MONTHS[Number(m) - 1]} ${Number(d)}, ${y}`;
}

/** Resolve the real brand tokens through Vite (same resolver the app uses). */
async function resolveBrandTheme() {
  const server = await createServer({
    configFile: path.join(root, "vite.config.ts"),
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "silent",
  });
  try {
    const sdk = await server.ssrLoadModule("@metropolis-ai/sdk");
    const { metropolisBrand } = await server.ssrLoadModule("/src/brand.ts");
    const theme = sdk.resolveTheme(metropolisBrand);
    return { theme, cssVars: sdk.themeToCssVars(theme, "light") };
  } finally {
    await server.close();
  }
}

/* --- chrome, mirroring MarketingShell/SiteFooter so the blog matches the site --- */

// Mirrors the React pages' nav, minus a self-link (these ARE the notes pages).
const NAV = [
  { label: "Home", href: "/index.html", variant: "link" },
  { label: "How it works", href: "/how-it-works.html", variant: "muted" },
  { label: "Consulting", href: "/consulting.html", variant: "muted" },
  { label: "Experts", href: "/experts.html", variant: "link" },
  { label: "Private materials", href: "/investors.html", variant: "button" },
];

const navClass = (v) =>
  v === "button"
    ? "inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
    : v === "muted"
      ? "text-sm text-muted-foreground transition-colors hover:text-foreground"
      : "text-sm font-medium text-foreground/80 transition-colors hover:text-foreground";

/**
 * The responsive header, mirroring <SiteNav> in src/components/chrome.tsx —
 * inline links at md+, a <details> hamburger below it. It is a <details> rather
 * than a scripted toggle precisely so THESE pages keep working: they ship zero
 * script tags on purpose. Keep the two copies in step.
 */
const HAMBURGER_SVG =
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">' +
  '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';

const dropdownLinkClass = (v) =>
  v === "button"
    ? "rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
    : "rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground";

const header = () => `
<header class="sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div class="mx-auto w-full max-w-6xl px-6 flex h-16 items-center justify-between gap-4">
    <a href="/index.html" class="font-heading text-lg font-bold tracking-tight text-foreground no-underline">metropolis</a>
    <div class="flex items-center">
      <div class="hidden items-center gap-4 md:flex md:gap-6">
        ${NAV.map((l) => `<a href="${l.href}" class="${navClass(l.variant)}">${esc(l.label)}</a>`).join("\n        ")}
      </div>
      <details class="relative md:hidden">
        <summary aria-label="Open menu" class="flex cursor-pointer list-none items-center rounded-md p-2 text-foreground transition-colors hover:bg-muted [&amp;::-webkit-details-marker]:hidden">${HAMBURGER_SVG}</summary>
        <div class="absolute right-0 top-full z-40 mt-2 flex w-56 flex-col gap-1 rounded-xl border border-border bg-background p-2 shadow-lg">
          ${NAV.map((l) => `<a href="${l.href}" class="${dropdownLinkClass(l.variant)}">${esc(l.label)}</a>`).join("\n          ")}
        </div>
      </details>
    </div>
  </div>
</header>`;

const footer = () => `
<footer class="border-t py-8 text-sm text-muted-foreground">
  <div class="mx-auto w-full max-w-6xl px-6">
    <div class="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
      <span>metropolis · one operating system, many companies</span>
      <span class="flex items-center gap-4">
        <a href="/blog.html" class="text-muted-foreground hover:text-foreground">notes</a>
        <a href="/consulting.html" class="text-muted-foreground hover:text-foreground">get in touch</a>
      </span>
    </div>
  </div>
</footer>`;

/**
 * Typography for rendered markdown. The markdown becomes bare <h2>/<p>/<ul>
 * with no Tailwind classes on it, so body styling has to be real CSS. It is
 * written against the theme's own CSS variables so it stays on-brand rather
 * than hardcoding another palette.
 */
const ARTICLE_CSS = `
.post-body{line-height:1.75;color:hsl(var(--foreground)/0.85);font-size:1.05rem}
.post-body>*+*{margin-top:1.1em}
.post-body h2{font-family:var(--font-heading,inherit);font-size:1.6rem;font-weight:600;line-height:1.25;margin-top:2.2em;color:hsl(var(--foreground))}
.post-body h3{font-family:var(--font-heading,inherit);font-size:1.25rem;font-weight:600;margin-top:1.8em;color:hsl(var(--foreground))}
.post-body strong{color:hsl(var(--foreground));font-weight:600}
.post-body a{color:hsl(var(--primary));text-decoration:underline;text-underline-offset:2px}
.post-body ul,.post-body ol{padding-left:1.4em}
.post-body li+li{margin-top:.4em}
.post-body ul{list-style:disc}.post-body ol{list-style:decimal}
.post-body blockquote{border-left:3px solid hsl(var(--primary)/0.5);padding:.4em 1.1em;color:hsl(var(--muted-foreground));font-style:italic}
.post-body code{background:hsl(var(--muted));border-radius:5px;padding:.1em .4em;font-size:.9em}
.post-body pre{background:hsl(var(--muted));border:1px solid hsl(var(--border));border-radius:10px;padding:14px 16px;overflow-x:auto}
.post-body pre code{background:none;padding:0}
.post-body hr{border:0;border-top:1px solid hsl(var(--border));margin:2.5em 0}
.post-body img{max-width:100%;height:auto;border-radius:10px}
.post-body table{border-collapse:collapse;width:100%;display:block;overflow-x:auto;font-size:.95rem}
.post-body th,.post-body td{text-align:left;padding:8px 11px;border-bottom:1px solid hsl(var(--border))}
.post-body p,.post-body li,.post-body h2,.post-body h3{overflow-wrap:anywhere}
`;

/** The shared document skeleton: head, themed wrapper, chrome, content. */
function page({ title, description, canonical, theme, cssVars, body }) {
  const style =
    Object.entries(cssVars)
      .map(([k, v]) => `${k}:${v}`)
      .join(";") + `;font-size:calc(1rem * ${theme.fontScale})`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(canonical)}">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(canonical)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏛️</text></svg>">
${theme.fontImportUrl ? `<link rel="stylesheet" href="${esc(theme.fontImportUrl)}">` : ""}
<link rel="stylesheet" href="/src/styles.css">
<style>${ARTICLE_CSS}</style>
</head>
<body>
<div data-color-scheme="light" style="${esc(style)}" class="min-h-screen bg-background font-sans text-foreground antialiased flex flex-col">
${header()}
<main class="flex-1">
${body}
</main>
${footer()}
</div>
</body>
</html>
`;
}

function postPage(post, ctx) {
  const canonical = `${SITE}/blog/${post.slug}.html`;
  const body = `
<article class="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
  <a href="/blog.html" class="text-sm text-muted-foreground transition-colors hover:text-foreground">← All posts</a>
  <p class="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-primary">${esc(prettyDate(post.date))}</p>
  <h1 class="mt-3 font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">${esc(post.title)}</h1>
  ${post.summary ? `<p class="mt-5 text-lg text-muted-foreground">${esc(post.summary)}</p>` : ""}
  <hr class="my-10 border-border">
  <div class="post-body">
${marked.parse(post.body)}
  </div>
</article>
<section class="border-t bg-muted/40">
  <div class="mx-auto w-full max-w-3xl px-6 py-14 text-center">
    <p class="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Work with us</p>
    <h2 class="mt-3 font-heading text-2xl font-semibold">Have a function that will not scale?</h2>
    <p class="mx-auto mt-3 max-w-xl text-muted-foreground">Metropolis takes on AI transformation and custom build engagements. If the platform is the wrong answer for your problem, we will say so.</p>
    <a href="/consulting.html" class="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">See how consulting works</a>
  </div>
</section>`;
  return page({
    title: `${post.title} — Metropolis`,
    description: post.summary || post.title,
    canonical,
    body,
    ...ctx,
  });
}

function indexPage(posts, ctx) {
  const list = posts.length
    ? posts
        .map(
          (p) => `
    <li class="border-t border-border py-8 first:border-t-0 first:pt-0">
      <a href="/blog/${esc(p.slug)}.html" class="group block no-underline">
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-primary">${esc(prettyDate(p.date))}</p>
        <h2 class="mt-2 font-heading text-2xl font-semibold leading-snug tracking-tight text-foreground group-hover:text-primary sm:text-3xl">${esc(p.title)}</h2>
        ${p.summary ? `<p class="mt-3 text-muted-foreground">${esc(p.summary)}</p>` : ""}
        <span class="mt-3 inline-block text-sm font-medium text-primary">Read →</span>
      </a>
    </li>`,
        )
        .join("")
    : `<li class="py-8 text-muted-foreground">No posts yet.</li>`;
  const body = `
<div class="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
  <p class="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Notes from the studio</p>
  <h1 class="mt-3 font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">What we are building, and what we are learning.</h1>
  <p class="mt-5 text-lg text-muted-foreground">Metropolis builds companies using agents, governed workflows, and institutional knowledge—and takes on outside engagements doing the same. These are notes on how that actually works in practice.</p>
  <ul class="mt-14">${list}
  </ul>
</div>`;
  return page({
    title: "Notes from the studio — Metropolis",
    description:
      "Notes on building and operating companies with AI agents, governed workflows, and institutional knowledge—from the Metropolis studio and its consulting engagements.",
    canonical: `${SITE}/blog.html`,
    body,
    ...ctx,
  });
}

/* --- run --- */

fs.mkdirSync(SRC_DIR, { recursive: true });
const files = fs
  .readdirSync(SRC_DIR)
  .filter((f) => f.endsWith(".md"))
  .sort();

const posts = files
  .map((f) => parsePost(fs.readFileSync(path.join(SRC_DIR, f), "utf8"), f.replace(/\.md$/, "")))
  .filter((p) => !p.draft)
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

const ctx = await resolveBrandTheme();

// Rebuild the output directory from scratch so a deleted/renamed post cannot
// leave a stale page behind (the dir is git-ignored build output).
fs.rmSync(OUT_DIR, { recursive: true, force: true });
fs.mkdirSync(OUT_DIR, { recursive: true });

for (const post of posts) {
  fs.writeFileSync(path.join(OUT_DIR, `${post.slug}.html`), postPage(post, ctx));
}
fs.writeFileSync(path.join(root, "blog.html"), indexPage(posts, ctx));

console.log(
  `blog: generated blog.html + ${posts.length} post page(s)` +
    (files.length - posts.length ? ` (${files.length - posts.length} draft(s) skipped)` : ""),
);
