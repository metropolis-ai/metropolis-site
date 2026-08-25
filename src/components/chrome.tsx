import * as React from "react";

/**
 * Shared marketing chrome: the metropolis wordmark, the responsive site nav, and
 * the footer, passed into the kit's <MarketingShell>.
 */
export function MetropolisMark(): React.JSX.Element {
  return (
    <a
      href="index.html"
      className="font-heading text-lg font-bold tracking-tight text-foreground no-underline"
    >
      metropolis
    </a>
  );
}

export interface SiteNavLink {
  label: string;
  href: string;
  /** Matches the kit's MarketingNavLink weights. */
  variant?: "link" | "muted" | "button";
}

/** Inline (desktop) link styling — mirrors the kit's own navLinkClass. */
function inlineLinkClass(variant: SiteNavLink["variant"]): string {
  switch (variant) {
    case "button":
      return "inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90";
    case "muted":
      return "text-sm text-muted-foreground transition-colors hover:text-foreground";
    default:
      return "text-sm font-medium text-foreground/80 transition-colors hover:text-foreground";
  }
}

/**
 * The site's header navigation, responsive.
 *
 * WHY THIS EXISTS INSTEAD OF THE KIT'S `navLinks`. MarketingShell renders its
 * navLinks as a bare `flex` row with no wrap and no mobile treatment, and
 * MarketingNavLink is only {label, href, variant} — there is no className or
 * breakpoint seam, so links cannot be collapsed responsively from this repo. At
 * phone widths that overflowed: "How it works" wrapped onto three lines,
 * "Private materials" was clipped, and the page scrolled horizontally. So the
 * shell gets this component through its `actions` slot instead, with navLinks
 * left unset.
 *
 * WHY <details> AND NOT REACT STATE. The public blog pages are generated static
 * HTML with deliberately zero script tags (see scripts/build-blog.mjs), and they
 * carry this same header. A <details>/<summary> disclosure gives a real toggle
 * with no JavaScript, keyboard support, and screen-reader expanded/collapsed
 * state for free — so one markup shape works on both the React pages and the
 * static ones, and there is no hydration behaviour to keep in sync. If you
 * change this, change the copy of it in scripts/build-blog.mjs too.
 *
 * The breakpoint is `md` (768px), not `sm`: four links plus the wordmark are
 * still tight in the 640–768px band.
 */
export function SiteNav({ links }: { links: SiteNavLink[] }): React.JSX.Element {
  return (
    <>
      <div className="hidden items-center gap-4 md:flex md:gap-6">
        {links.map((link) => (
          <a
            key={`${link.label}:${link.href}`}
            href={link.href}
            className={inlineLinkClass(link.variant)}
          >
            {link.label}
          </a>
        ))}
      </div>

      <details className="relative md:hidden">
        <summary
          aria-label="Open menu"
          className="flex cursor-pointer list-none items-center rounded-md p-2 text-foreground transition-colors hover:bg-muted [&::-webkit-details-marker]:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </summary>
        <div className="absolute right-0 top-full z-40 mt-2 flex w-56 flex-col gap-1 rounded-xl border border-border bg-background p-2 shadow-lg">
          {links.map((link) => (
            <a
              key={`${link.label}:${link.href}`}
              href={link.href}
              className={
                link.variant === "button"
                  ? "rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
                  : "rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </details>
    </>
  );
}

export function SiteFooter({
  contactHref = "experts.html",
}: {
  contactHref?: string;
}): React.JSX.Element {
  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
      <span>metropolis · one operating system, many companies</span>
      {/* "notes" is also in the header nav; kept here as a secondary path. */}
      <span className="flex items-center gap-4">
        <a href="blog.html" className="text-muted-foreground hover:text-foreground">
          notes
        </a>
        <a href={contactHref} className="text-muted-foreground hover:text-foreground">
          get in touch
        </a>
      </span>
    </div>
  );
}
