# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge:
build, test, release, architecture, and sharp-edge notes that should travel with
the code.

- Add durable project-specific notes here as they are discovered through real work.

## Architecture

- The site is a **React + Vite multi-page app** composed from
  **`@metropolis-ai/marketing-site-kit`** (the reusable brand-tokened marketing kit) and
  themed with **metropolis's brand tokens** (`src/brand.ts` — deep indigo, Spectral
  serif; the same identity as `projects/metropolis/src/config`'s `metropolisBrand`).
  It is **not** hand-built HTML anymore.
- Three page entries at the repo root (URLs unchanged): `index.html` (landing),
  `experts.html`, `investors.html`. Each mounts a React root from
  `src/<page>/main.tsx` → `app.tsx`, wrapped in the kit's `<ThemeProvider brand>`.
  Section content is composed from kit components (`MarketingShell`,
  `MarketingHero`, `HighlightBanner`, `MarketingSection`, `FeatureGrid`,
  `CallToAction`, `GatedHub`). The kit carries zero domain copy — all copy lives
  here in `app.tsx`. Public-facing copy should track the institutional frame,
  message hierarchy, and language guardrails in `docs/positioning.md` — the
  source of truth for how Metropolis describes itself.
- **Static output is preserved.** `pnpm build` (`vite build`) emits a fully static
  `dist/` (HTML/CSS/JS + everything in `public/`). `public/` holds the committed
  static assets served verbatim: `docs.enc.js` (the encrypted hub bundle), `CNAME`
  (`gometropolis.ai`), and `.nojekyll`.
- Contact forms are a React port of the old `forms.js`
  (`src/components/contact-form.tsx`): they POST to the same Formspree endpoint,
  so no contact email ever appears in the public source.

## Consuming polis (read before touching deps)

- polis is consumed as **SOURCE**, via a **SHA-pinned git dependency**
  (`polis` in `package.json`, `git+https://…/polis.git#<sha>`), exactly like the
  artemis planning space. `@metropolis-ai/*` resolves to the checked-out lib source under
  `node_modules/polis/libs/*/src`:
  - Vite: aliases in `vite.config.ts`.
  - TypeScript: `paths` in `tsconfig.json`.
  - Tailwind: `tailwind.config.cjs` extends the preset from
    `node_modules/polis/libs/ui-kit/tailwind-preset.cjs` and globs the kit source
    for classes; `src/styles.css` imports `…/ui-kit/styles/globals.css`.
- **Bump polis** = change the `#<sha>` in `package.json` and re-`pnpm install`.
- Sharp edges (all polis-side gaps; this repo works around them cleanly):
  1. **polis is a PRIVATE repo, and pnpm resolves the git dep to the SSH form**
     (`git@github.com:metropolis-ai/polis.git` — see the `version:` key in
     `pnpm-lock.yaml`), so `pnpm install` clones over SSH and fails with
     `git@github.com: Permission denied` wherever there's no SSH key / no repo
     access. Two contexts:
     - **Local keyless env:** force HTTPS via env-scoped git config (touches no
       files) — only works where the ambient git already has HTTPS creds for the
       private repo (e.g. a `gh`-authenticated machine):
       `GIT_CONFIG_COUNT=2 GIT_CONFIG_KEY_0=url.https://github.com/.insteadOf GIT_CONFIG_VALUE_0=git@github.com: GIT_CONFIG_KEY_1=url.https://github.com/.insteadOf GIT_CONFIG_VALUE_1=ssh://git@github.com/`.
     - **CI (GitHub Actions):** the default `GITHUB_TOKEN` has NO access to the
       separate private `metropolis-ai/polis` repo. Organization policy disables
       deploy keys, so the workflow uses the private
       **metropolis-ai-polis-reader GitHub App**, installed only on polis with
       read-only Contents permission. `actions/create-github-app-token@v3` mints a
       short-lived token from repository variable **`POLIS_APP_CLIENT_ID`** and
       secret **`POLIS_APP_PRIVATE_KEY`**, scoped to the `polis` repository. A
       polis-only git URL rewrite sends both the lockfile's SSH URL and the package
       spec's HTTPS URL through authenticated HTTPS; metropolis-site's own
       `actions/checkout` stays on its default token. If install fails with
       `Repository not found`, verify the App remains installed on polis and both
       credential settings are present.
  2. **polis ships a heavy server-only dependency tree** (temporal/nestjs/prisma)
     that this marketing site never imports. `package.json`'s
     `pnpm.neverBuiltDependencies` skips their build scripts (no `prisma generate`,
     no native temporal download) so install stays fast. Vite never traverses
     those libs (we only import `marketing-site-kit`/`ui-kit`/`sdk`).
- The proper fix belongs to polis (publish real per-lib packages with `exports` +
  emitted `dist`). When it does, the aliases/preset paths and these workarounds go
  away and this repo just imports built packages.

## The gated investor hub (load-bearing — preserved through the migration)

- The passphrase gate is **unchanged client-side AES-256-GCM**. `build.cjs` walks a
  doc `TREE`, encrypts each node's git-ignored `*.src.*` plaintext **plus the nav
  tree** (PBKDF2-SHA256 150k, AES-GCM, tag appended) into
  **`public/docs.enc.js`** (`window.__ENC = {…}`). Without the passphrase and the
  `*.src.*` files, `docs.enc.js` **cannot be rebuilt and must not be touched**.
- The decrypt/auth is wired into the kit's pluggable **`GatedHubSource`** seam in
  `src/investors/gated-hub-source.ts`: `unlock(passphrase)` decrypts the `nav`
  blob (a wrong passphrase fails AES-GCM auth → the gate stays locked with an
  error), and `loadDoc(node)` decrypts one doc on demand and returns it as trusted
  HTML for the kit's **sandboxed iframe**. Markdown docs are rendered with `marked`
  and wrapped in `DOC_CSS`; html docs pass through verbatim. This is the ONLY place
  the passphrase or plaintext exists, in-browser.
- Doc typography lives in **`src/investors/doc-css.ts`** (`DOC_CSS`), injected into
  the iframe via `srcDoc`. The site's `styles.css` does **not** reach inside the
  sandboxed iframe — any doc typography/overflow fix goes in `DOC_CSS`.
- `sync-doc.cjs` (the `/sync-to-site` skill) is unchanged: it writes
  `resource-<slug>.src.md` at the repo root; then `node build.cjs` re-encrypts into
  `public/docs.enc.js`.
- `build.cjs` now fails closed for active tree nodes marked `required: true`
  (currently `plan.src.html`): it validates every required source before opening
  an output and writes successful bundles atomically. Set
  `METROPOLIS_ENCRYPT_OUTPUT` to build somewhere other than the committed
  `public/docs.enc.js`. Run `pnpm validate:encryption` for the synthetic contract
  and `pnpm validate:encryption:real` for an in-memory round trip using the local,
  git-ignored source and passphrase; neither validation prints private content.

## Working on the hub without the passphrase

- To exercise the **unlocked** hub locally, build a throwaway `docs.enc.js` with a
  **known** passphrase using build.cjs's exact crypto (PBKDF2 150k + AES-256-GCM,
  auth tag appended; nav is an array of `{id,title,doc,fmt,children}`), copy the
  built `dist/` somewhere, swap in that fixture bundle, and serve it (localhost is
  a secure context, so Web Crypto works). **Never commit a fixture bundle** — the
  committed `public/docs.enc.js` is the real one.

## Deploy

- GitHub Pages, custom domain **`gometropolis.ai`** (in `public/CNAME`), unchanged.
- Because the served artifact is now produced by `vite build`, deployment moved
  from "deploy from branch root" (legacy) to a **GitHub Actions** build+publish
  workflow (`.github/workflows/deploy.yml`): on push to `main` it runs
  `pnpm build` and publishes `dist/` to Pages.
- **Prerequisite GitHub App:** the build clones the private
  `metropolis-ai/polis` dependency using the read-only
  `metropolis-ai-polis-reader` App. The repository must have
  **`POLIS_APP_CLIENT_ID`** as an Actions variable and
  **`POLIS_APP_PRIVATE_KEY`** as an Actions secret. See "Consuming polis" sharp
  edge #1.
- **Pages source flip is automated.** The workflow's `actions/configure-pages@v5`
  step runs with `enablement: true`, which sets the repo's Pages build type to
  "workflow" via the API (using the `pages: write` permission), replacing the
  legacy branch-root source — no manual Settings → Pages step is required. If token
  perms ever block it, run once:
  `gh api -X PUT repos/metropolis-ai/metropolis-site/pages -f build_type=workflow`.
  (Alternative deploy model, if CI is undesirable: commit the built `dist/` to a
  `/docs` folder and point legacy Pages at it — messier, rebuild-on-every-edit.)

## Commands

- `pnpm install` — installs deps incl. polis (git dep). See sharp edge #1 for
  keyless envs.
- `pnpm dev` — Vite dev server (all three pages).
- `pnpm build` — static `dist/` (what CI deploys).
- `node build.cjs` (or `pnpm encrypt`) — re-encrypt the hub into
  `public/docs.enc.js` (reads the passphrase from `.env`).
- **The Node CLI helpers use the `.cjs` extension on purpose.** `package.json`
  has `"type": "module"`, but `build.cjs` and `sync-doc.cjs` are written in
  CommonJS (`require(...)`). The `.cjs` extension forces Node to run them as
  CommonJS regardless of `type`. Don't rename them back to `.js` (that
  re-breaks them with `ReferenceError: require is not defined in ES module
  scope`); if you ever convert them to ESM `import`, only then may they be
  `.js`/`.mjs`.

## Layout / kit conventions

- Responsive behaviour (nav, hero, section rhythm, feature-grid columns) comes from
  the kit + brand tokens; the site sets almost no bespoke CSS. Field inputs in
  `contact-form.tsx` use `text-base` (16px) on purpose so iOS Safari doesn't zoom
  on focus.
- The unlocked `GatedHub` uses the kit's responsive hub layout: a persistent
  fixed-width sidebar at `md+` and a controlled off-canvas document drawer below
  `md`. `InvestorsApp` owns `mobileNavOpen` and passes
  `onMobileNavOpenChange`; keep that wiring when changing the hub composition.
