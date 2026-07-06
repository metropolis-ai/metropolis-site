import type { BrandTokens } from "@polis/ui-kit";

/**
 * Metropolis's brand tokens — the SAME identity as the metropolis planning space
 * (`projects/metropolis/src/config` → `metropolisBrand`): the mother city, deep
 * indigo with a stately Spectral serif. Supplied to the kit's <ThemeProvider>,
 * from which the whole marketing site derives a coherent, on-brand theme with
 * near-zero config — polis's "beautiful by default" promise.
 *
 * NOTE ON THE PRIMARY VALUE: the token contract wants an HSL *triplet*
 * ("H S% L%", no `hsl()` wrapper) — that's the shadcn convention the preset reads
 * as `hsl(var(--primary))`, and it's what `resolveTheme` parses to derive the
 * accent/muted/border tints. The space config writes `"hsl(243 47% 34%)"` (with
 * the wrapper), which would double-wrap to `hsl(hsl(...))` and defeat derivation;
 * here we use the same colour in the contract's triplet form so the theme
 * actually renders on-brand. Same indigo, correctly plumbed.
 */
export const metropolisBrand: BrandTokens = {
  name: "Metropolis",
  tagline: "one engine, many cities",
  primary: "243 47% 34%", // deep indigo / the mother city
  fontFamily: "'Spectral', ui-serif, Georgia, 'Times New Roman', serif",
  headingFamily: "'Spectral', ui-serif, Georgia, 'Times New Roman', serif",
  fontImportUrl:
    "https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap",
};
