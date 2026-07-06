# metropolis-site

The company-level marketing site for **metropolis** — a house of AI planning-space
verticals. Its job is narrow: pitch **investors** on the platform thesis (and host
the business plan), and help **source expert operators** and attract employees. It
is *not* any single city's product site.

It is composed from **`@polis/marketing-site-kit`** (the reusable, brand-tokened
polis marketing kit) and themed with metropolis's own brand tokens — a React +
Vite app that builds to a **fully static** site, still deployed on **GitHub
Pages** at **gometropolis.ai**.

> Agents: read [`AGENTS.md`](./AGENTS.md) first — it covers the build, the polis
> consumption path and its sharp edges, and the load-bearing investor-hub
> encryption.

## Pages

| File | Access | Purpose |
| --- | --- | --- |
| `index.html` | public | Landing — thesis, the loop, the portfolio, CTAs |
| `experts.html` | public | The operator role; how experts join and run a city |
| `investors.html` | **gated** | Passphrase gate → decrypts and shows the business plan + platform references |

Each is a Vite entry that mounts a React app from `src/<page>/`, composed from the
kit's section components and wrapped in the kit's `<ThemeProvider>` with
metropolis's brand tokens (`src/brand.ts`).

## The gated hub

GitHub Pages serves everything publicly, so the investor docs are **encrypted
client-side** (AES-256-GCM, passphrase-derived key) — the gating is unchanged by
the migration, only re-wired behind the kit's pluggable gated-hub seam.

- `*.src.md` / `*.src.html` — the plaintext docs. **Git-ignored; never committed.**
- `build.js` — walks the doc `TREE`, encrypts each doc + the nav tree into
  `public/docs.enc.js` (the only thing that ships). Reads the passphrase from a
  git-ignored `.env` (`METROPOLIS_PASSPHRASE=…`).
- `src/investors/gated-hub-source.ts` — derives the key (PBKDF2-SHA256, 150k) and
  decrypts in the browser (Web Crypto), rendering each doc in a **sandboxed**
  iframe. This is the kit's `GatedHubSource`, so the kit itself never learns how
  gating works.

Client-side gating is *soft* (it obscures, it isn't Fort Knox) — fine for an MVP.
Share the passphrase with investors out-of-band; rotate it by editing `.env` and
re-running `node build.js`.

## Develop

```bash
pnpm install         # installs deps incl. polis (SHA-pinned git dep); see AGENTS.md for keyless-env note
pnpm dev             # Vite dev server for all three pages
pnpm build           # emits the static site into dist/
node build.js        # re-encrypt the hub into public/docs.enc.js (after editing a *.src.* doc)
```

Web Crypto needs a secure context, so preview over `localhost` (Vite dev, or a
static server on `dist/`) — not `file://`.

## Deploy

`.github/workflows/deploy.yml` builds the site and publishes `dist/` to GitHub
Pages on every push to `main`. The custom domain (`public/CNAME`) is unchanged.

> One-time: set repo **Settings → Pages → Source = "GitHub Actions"** so Pages
> serves the built artifact instead of the old branch root. See AGENTS.md > Deploy.

## Contact forms

`src/components/contact-form.tsx` POSTs to a Formspree endpoint that forwards to a
private inbox — so **no contact email is ever exposed in the public source**.
