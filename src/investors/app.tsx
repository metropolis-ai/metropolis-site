import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ThemeProvider,
} from "@polis/ui-kit";
import {
  FeatureGrid,
  GatedHub,
  HighlightBanner,
  MarketingHero,
  MarketingSection,
  useGatedHub,
} from "@polis/marketing-site-kit";
import { metropolisBrand } from "../brand";
import { ContactForm } from "../components/contact-form";
import { MetropolisMark } from "../components/chrome";
import { createMetropolisGatedHubSource } from "./gated-hub-source";

/** The "request access" aside beside the gate, for investors without a passphrase. */
function RequestAccessAside(): React.JSX.Element {
  return (
    <Card>
      <CardHeader>
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          Investor? Let's connect
        </div>
        <CardTitle>Share your interest</CardTitle>
        <CardDescription>
          Don't have a passphrase? Tell us a little about you and we'll follow up
          — and send access if it's a fit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ContactForm
          subject="Metropolis — investor interest"
          submitLabel="Share interest"
          fields={[
            { name: "name", label: "Your name", required: true },
            { name: "email", label: "you@email.com", type: "email", required: true },
            { name: "firm", label: "Firm / fund (optional)" },
            { name: "about", label: "A little about you and your interest", textarea: true },
          ]}
        />
      </CardContent>
    </Card>
  );
}

export function InvestorsApp(): React.JSX.Element {
  // The source (decrypt/auth seam) must be stable across renders.
  const source = React.useMemo(() => createMetropolisGatedHubSource(), []);
  const controls = useGatedHub(source, {
    failureMessage: "Incorrect passphrase. Try again.",
  });
  const unlocked = controls.status === "unlocked";

  return (
    <ThemeProvider brand={metropolisBrand}>
      {!unlocked ? (
        <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
            <MetropolisMark />
            <a
              href="index.html"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              ← Home
            </a>
          </div>
        </header>
      ) : null}

      {!unlocked ? (
        <>
          <MarketingHero
            align="left"
            eyebrow="The thesis"
            title="An AI-native venture studio building a portfolio of companies on one shared engine."
            subtitle="metropolis is an AI-native venture studio — we build AI-native companies on a shared corporate center (market research, product, finance, engineering, recruiting, marketing), and the pieces are reusable, so the same engine that builds one company builds the next. Our first proof is metropolis itself: we're building the studio with the studio."
          />

          <MarketingSection
            align="left"
            eyebrow="How it works"
            title="One engine, a portfolio, and humans governing the work"
          >
            <FeatureGrid
              minColumnWidth={240}
              items={[
                {
                  title: "The corporate center",
                  description:
                    "An AI-native back office (market research, product/design, financial modeling, engineering ideation, recruiting, marketing) every portfolio company inherits out of the box.",
                },
                {
                  title: "Dogfood #1 — metropolis itself",
                  tone: "brand",
                  description:
                    "We plan, staff, and build the studio using its own corporate center. It even recruits its own team. If it can build us, it can build the portfolio.",
                },
                {
                  title: "First external vertical — artemis (job hunt)",
                  description:
                    "The first planning space we're entering, chosen because the hiring industry is broken. A domain expert governs it.",
                },
                {
                  title: "The operating model",
                  tone: "soft",
                  description:
                    "Humans are heads of business units: they plan and govern while AI does the planning and, increasingly, the execution. Supervised autonomy.",
                },
              ]}
            />
          </MarketingSection>

          <HighlightBanner eyebrow="The bigger picture" tone="muted">
            The corporate center isn't specific to planning. The same machinery
            can stand up an entirely different portfolio — infrastructure for
            building AI-native companies, the way the last era rented out
            infrastructure for building web ones.
          </HighlightBanner>
        </>
      ) : null}

      <div className={unlocked ? "" : "mx-auto w-full max-w-4xl px-6 py-4"}>
        <GatedHub
          {...controls}
          className={unlocked ? "h-[100dvh]" : undefined}
          brandMark={
            <span>
              metropolis <span className="text-muted-foreground">· investor materials</span>
            </span>
          }
          gateAside={!unlocked ? <RequestAccessAside /> : undefined}
          copy={{
            eyebrow: "For investors",
            title: "Investor materials",
            description:
              "Enter the access passphrase to open the full plan, economics, and platform references. Don't have one? Share your interest in the form beside this and we'll be in touch.",
            passphrasePlaceholder: "Access passphrase",
            unlockLabel: "Unlock",
            lockLabel: "Lock",
            note: "Everything is encrypted; it decrypts in your browser only with the correct passphrase. Figures are illustrative placeholders pending a full financial model.",
            emptyTitle: "Select a document",
            emptyMessage: "Pick a document from the list to open it.",
            draftMessage: "Draft in progress — this reference is coming soon.",
          }}
        />
      </div>
    </ThemeProvider>
  );
}
