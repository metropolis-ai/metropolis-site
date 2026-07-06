import * as React from "react";
import { ThemeProvider } from "@polis/ui-kit";
import {
  CallToAction,
  FeatureGrid,
  MarketingHero,
  MarketingSection,
  MarketingShell,
} from "@polis/marketing-site-kit";
import { metropolisBrand } from "../brand";
import { ContactForm } from "../components/contact-form";
import { MetropolisMark, SiteFooter } from "../components/chrome";

/** A bulleted list rendered inside a feature card's description slot. */
function Bullets({ items }: { items: string[] }): React.JSX.Element {
  return (
    <ul className="mt-1 list-disc space-y-1.5 pl-5 leading-relaxed">
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  );
}

export function ExpertsApp(): React.JSX.Element {
  return (
    <ThemeProvider brand={metropolisBrand}>
      <MarketingShell
        brandMark={<MetropolisMark />}
        navLinks={[
          { label: "Home", href: "index.html" },
          { label: "Spaces", href: "index.html#spaces", variant: "muted" },
          { label: "For investors", href: "investors.html", variant: "button" },
        ]}
        footer={<SiteFooter contactHref="#apply" />}
      >
        <MarketingHero
          align="left"
          eyebrow="For experts & operators"
          title="Run a city. Own your space."
          subtitle="Metropolis is a platform that turns deep domain expertise into a product. We handle the engine — workflows, memory, research, execution, design. You bring the expertise, shape the product, and operate the city as its own business with real ownership."
        />

        <MarketingSection align="left">
          <FeatureGrid
            minColumnWidth={240}
            items={[
              {
                title: "What you own",
                description: (
                  <Bullets
                    items={[
                      "The domain knowledge encoded into the vault",
                      "The execution playbooks (what we book / do, and how)",
                      "The city's roadmap and quality bar",
                      "The city's P&L and growth",
                    ]}
                  />
                ),
              },
              {
                title: "What the platform brings",
                description: (
                  <Bullets
                    items={[
                      "Durable, approval-gated execution",
                      "Criteria discovery, first-party crawling, matching",
                      "Continuous research into the knowledge vault",
                      "A shared design system — beautiful by default",
                      "A central team for design, growth, and platform",
                    ]}
                  />
                ),
              },
              {
                title: "Who we're looking for",
                tone: "soft",
                description: (
                  <Bullets
                    items={[
                      "The person others in your field call for advice",
                      "Travel advisors, wedding & event planners, GCs / designers, recruiters, care managers, admissions counselors, and beyond",
                      "Excited to turn how you work into how thousands get helped",
                    ]}
                  />
                ),
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="How it works"
          title="From interview to operator"
        >
          <FeatureGrid
            minColumnWidth={200}
            items={[
              {
                eyebrow: "1 · Talk",
                title: "Talk",
                description:
                  "We interview many experts per space to sharpen the product and find the right operator.",
              },
              {
                eyebrow: "2 · Build together",
                title: "Build together",
                description:
                  "You encode your expertise into the vault and design the execution playbooks.",
              },
              {
                eyebrow: "3 · Launch & grow",
                title: "Launch & grow",
                description:
                  "We take it to market together — you operate the city and grow it.",
              },
            ]}
          />
        </MarketingSection>

        <CallToAction
          tone="brand"
          eyebrow="Apply"
          title="Think you could run a city?"
          description="Tell us your space and why you're the best in it. We read every note."
          actions={
            <div id="apply">
              <ContactForm
                subject="Operating a Metropolis city"
                submitLabel="Share your interest →"
                tone="onBrand"
                twoColumn
                fields={[
                  { name: "name", label: "Your name", required: true },
                  { name: "email", label: "you@email.com", type: "email", required: true },
                  {
                    name: "space",
                    label: "Your space / domain (e.g. travel, weddings, recruiting)",
                    full: true,
                  },
                  {
                    name: "about",
                    label:
                      "Why you're the best in your space — and what you'd want to build",
                    textarea: true,
                    full: true,
                  },
                ]}
              />
            </div>
          }
        />
      </MarketingShell>
    </ThemeProvider>
  );
}
