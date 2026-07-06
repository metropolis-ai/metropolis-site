import * as React from "react";
import {
  Button,
  ThemeProvider,
} from "@polis/ui-kit";
import {
  CallToAction,
  FeatureGrid,
  HighlightBanner,
  MarketingHero,
  MarketingSection,
  MarketingShell,
} from "@polis/marketing-site-kit";
import { metropolisBrand } from "../brand";
import { ContactForm } from "../components/contact-form";
import { MetropolisMark, SiteFooter } from "../components/chrome";

/** The four steps of the repeatable planning loop. */
const LOOP = [
  {
    eyebrow: "1 · Discover",
    title: "Discover",
    description:
      "Elicit real criteria — self-discovery, not a search box — while researching the domain live.",
  },
  {
    eyebrow: "2 · Plan",
    title: "Plan",
    description:
      "Crawl first-party sources, match with explanations, assemble a revisable plan.",
  },
  {
    eyebrow: "3 · Execute",
    title: "Execute",
    description:
      "One click, with your approval: book it, order it, apply — reliably, and reversibly.",
  },
  {
    eyebrow: "4 · Track",
    title: "Track",
    description:
      "Receipts, confirmations, status — a living record that feeds the next decision.",
  },
];

/** The planning-space portfolio. */
const SPACES = [
  {
    title: "Job hunt",
    description: "find the role that truly fits",
    badge: "Building now",
    tone: "soft" as const,
  },
  { title: "Travel", description: "plan & book the whole trip", badge: "Next up" },
  {
    title: "Weddings & events",
    description: "venue, vendors, the timeline",
    badge: "Planned",
  },
  {
    title: "Home improvement",
    description: "materials, contractors, permits",
    badge: "Planned",
  },
  {
    title: "Software projects",
    description: "agents that build & ship",
    badge: "Planned",
  },
  {
    title: "Senior care",
    description: "find & arrange the right care",
    badge: "Planned",
  },
  {
    title: "Relocation",
    description: "movers, housing, the switchover",
    badge: "Planned",
  },
  {
    title: "Any planning space",
    description: "the platform isn't limited to this list",
    badge: "Domain-agnostic",
    tone: "brand" as const,
  },
];

export function LandingApp(): React.JSX.Element {
  return (
    <ThemeProvider brand={metropolisBrand}>
      <MarketingShell
        brandMark={<MetropolisMark />}
        navLinks={[
          { label: "Thesis", href: "#thesis", variant: "muted" },
          { label: "Spaces", href: "#spaces", variant: "muted" },
          { label: "For experts", href: "experts.html" },
          { label: "For investors", href: "investors.html", variant: "button" },
        ]}
        footer={<SiteFooter contactHref="experts.html" />}
      >
        <MarketingHero
          align="left"
          eyebrow="A house of planning-space verticals"
          title={
            <>
              Planning is the same everywhere.
              <br />
              Only the expertise differs.
            </>
          }
          subtitle={
            <>
              Every big decision — a job hunt, a vacation, a wedding, a remodel —
              runs the same loop: <b>discover what you want → build a plan →
              execute it → keep the receipts</b>. Metropolis builds one platform
              that runs the loop, and drops a domain expert into each space.{" "}
              <span className="text-foreground">One engine. Many cities.</span>
            </>
          }
          actions={
            <>
              <Button asChild>
                <a href="investors.html">Read the plan (investors)</a>
              </Button>
              <Button asChild variant="outline">
                <a href="experts.html">Operate a city (experts)</a>
              </Button>
            </>
          }
        />

        <HighlightBanner eyebrow="The idea" tone="brand">
          The hard part of any planning app — durable multi-step workflows,
          memory, criteria discovery, first-party research, approval-gated
          execution — is the <em>same in every domain</em>. What changes is the{" "}
          <b>domain knowledge</b>. So we built the planning engine once, and bring
          in a real domain expert to make each space genuinely great — which means
          we can stand up a planning app for almost <b>any</b> high-stakes
          decision.
        </HighlightBanner>

        <MarketingSection
          align="left"
          eyebrow="The repeatable loop"
          title="Discover → Plan → Execute → Track"
          lead="Backed by always-on research into the vault, and a shared design system so every city is beautiful by default."
        >
          <FeatureGrid items={LOOP} minColumnWidth={210} />
        </MarketingSection>

        <MarketingSection
          id="spaces"
          align="left"
          eyebrow="Planning spaces"
          title="Planning is the same everywhere — only the domain changes"
          lead="The same engine can power any high-stakes planning decision. Here's where we're headed — each becomes its own product as it launches."
        >
          <FeatureGrid items={SPACES} minColumnWidth={220} />
          <p className="mt-5 text-sm text-muted-foreground">
            Want a space we haven't listed — or want to build one with us?{" "}
            <a href="experts.html" className="text-primary hover:underline">
              Tell us.
            </a>
          </p>
        </MarketingSection>

        <MarketingSection align="left">
          <FeatureGrid
            minColumnWidth={260}
            items={[
              {
                eyebrow: "For investors",
                title: "The business plan →",
                description:
                  "The full thesis, planning-space portfolio, team model, illustrative economics, and capital plan — behind a simple access gate.",
                href: "investors.html",
              },
              {
                eyebrow: "For experts",
                title: "Operate a city →",
                description:
                  "Each city is run by one domain expert who owns its knowledge, execution playbooks, and P&L. If you're the best in your space, let's talk.",
                href: "experts.html",
              },
            ]}
          />
        </MarketingSection>

        <CallToAction
          tone="muted"
          eyebrow="Get notified"
          title="Be first when your space launches"
          description="Tell us which planning space you'd use and we'll let you know the moment it's live. No spam."
          actions={
            <ContactForm
              subject="Metropolis — notify list"
              submitLabel="Notify me"
              twoColumn
              fields={[
                { name: "email", label: "you@email.com", type: "email", required: true },
                { name: "space", label: "Which space would you use? (optional)" },
              ]}
            />
          }
        />
      </MarketingShell>
    </ThemeProvider>
  );
}
