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
          eyebrow="For domain experts"
          title="Operate a planning space you already know cold."
          subtitle="You bring deep expertise in your domain. Metropolis gives you the platform, the tools, and a team behind you — you stay the human judgment governing the space as it runs."
        />

        <MarketingSection
          align="left"
          eyebrow="Two ways in"
          title="Steward a space that exists — or lead one that doesn't"
        >
          <FeatureGrid
            minColumnWidth={260}
            items={[
              {
                title: "Join the expert team",
                description: (
                  <Bullets
                    items={[
                      "Operate an existing planning space as its governing steward",
                      "You bring domain judgment; the platform + team bring the engine",
                      "Take customer expert calls, feed the platform, curate the vault",
                    ]}
                  />
                ),
              },
              {
                title: "Lead a new domain initiative",
                tone: "brand",
                description: (
                  <Bullets
                    items={[
                      "Partner with us to launch a space that doesn't exist yet",
                      "A more founder-like role: a direct line to the platform team, shaping the initial domain product from scratch",
                      "Define the domain, the playbooks, and what the space becomes",
                    ]}
                  />
                ),
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection align="left">
          <FeatureGrid
            minColumnWidth={240}
            items={[
              {
                title: "What you'd do",
                description: (
                  <Bullets
                    items={[
                      "Operate your planning space — human governance on top of the automation",
                      "Take expert calls with customers when their decisions need a specialist",
                      "Feed what you learn back into the platform and your space's domain-specific extensions",
                      "Help curate the knowledge vault that makes the space smarter over time",
                    ]}
                  />
                ),
              },
              {
                title: "What the platform brings",
                description: (
                  <Bullets
                    items={[
                      "The planning engine — workflows, memory, research, execution",
                      "Domain-specific extensions built to your spec",
                      "A platform team behind you (design, growth, engineering)",
                      "A shared knowledge vault as your space's compounding memory",
                      "Beautiful-by-default product surfaces",
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
                      "Deep expertise in a high-stakes planning domain",
                      "Wants to shape a product and steward it — comfortable being the expert customers talk to",
                      "Or a builder who wants to lead a brand-new domain initiative with us",
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
          title="Talk → Build your space together → Operate & shape the platform"
        >
          <FeatureGrid
            minColumnWidth={200}
            items={[
              {
                eyebrow: "1 · Talk",
                title: "Talk",
                description:
                  "We talk through your domain to sharpen the product and find the right steward for the space.",
              },
              {
                eyebrow: "2 · Build your space together",
                title: "Build your space together",
                description:
                  "You encode your expertise into the vault and shape the domain-specific extensions and playbooks.",
              },
              {
                eyebrow: "3 · Operate & shape the platform",
                title: "Operate & shape the platform",
                description:
                  "You govern the space as it runs — taking expert calls and feeding what you learn back into the platform.",
              },
            ]}
          />
        </MarketingSection>

        <CallToAction
          tone="brand"
          eyebrow="Apply"
          title="Want to steward a planning space?"
          description="Tell us your domain and whether you'd join the expert team or lead a new initiative. We read every note."
          actions={
            <div id="apply">
              <ContactForm
                subject="Stewarding a Metropolis planning space"
                submitLabel="Share your interest →"
                tone="onBrand"
                twoColumn
                fields={[
                  { name: "name", label: "Your name", required: true },
                  { name: "email", label: "you@email.com", type: "email", required: true },
                  {
                    name: "space",
                    label: "Your domain — and join the expert team or lead a new initiative?",
                    full: true,
                  },
                  {
                    name: "about",
                    label:
                      "Your expertise in the domain — and what you'd want to build",
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
