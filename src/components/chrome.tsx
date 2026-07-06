import * as React from "react";

/**
 * Shared marketing chrome: the metropolis wordmark and footer, passed into the
 * kit's <MarketingShell> so the header/footer read exactly as the hand-built
 * site did ("metropolis" wordmark; "one engine, many cities" colophon).
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

export function SiteFooter({
  contactHref = "experts.html",
}: {
  contactHref?: string;
}): React.JSX.Element {
  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
      <span>metropolis · one engine, many cities</span>
      <a href={contactHref} className="text-muted-foreground hover:text-foreground">
        get in touch
      </a>
    </div>
  );
}
