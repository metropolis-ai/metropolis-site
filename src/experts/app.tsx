import * as React from "react";
import { ThemeProvider } from "@metropolis-ai/ui-kit";
import {
  CallToAction,
  FeatureGrid,
  MarketingHero,
  MarketingSection,
  MarketingShell,
} from "@metropolis-ai/marketing-site-kit";
import { metropolisBrand } from "../brand";
import { ContactForm } from "../components/contact-form";
import { MetropolisMark, SiteFooter, SiteNav } from "../components/chrome";

export function ExpertsApp(): React.JSX.Element {
  return (
    <ThemeProvider brand={metropolisBrand}>
      <MarketingShell
        brandMark={<MetropolisMark />}
        actions={<SiteNav links={[
          { label: "Home", href: "/" },
          { label: "How it works", href: "/how-it-works/", variant: "muted" },
          { label: "Consulting", href: "/consulting/", variant: "muted" },
            { label: "Notes", href: "/blog/", variant: "muted" },
          {
            label: "Private materials",
            href: "/investors/",
            variant: "button",
          },
        ]} />}
        footer={<SiteFooter contactHref="#contact" />}
      >
        <MarketingHero
          align="left"
          eyebrow="Domain experts and future leaders"
          title="Bring the expertise a shared system cannot invent."
          subtitle="Metropolis is exploring how reusable business capabilities can support distinct companies. The shared operating system is only one layer; each market still requires real domain judgment, evidence, and operating knowledge."
        />

        <MarketingSection
          align="left"
          eyebrow="Why domain expertise matters"
          title="Interchangeable capabilities do not make companies interchangeable."
          lead="A company’s market, customers, regulation, workflows, integrations, and operating context remain its own. Metropolis aims to share appropriate capabilities while preserving the expertise and private knowledge that make each company valuable."
        >
          <FeatureGrid
            minColumnWidth={260}
            items={[
              {
                title: "Challenge the thesis",
                description:
                  "Tell us where a supposedly reusable function breaks against the realities of your field.",
              },
              {
                title: "Introduce a market",
                description:
                  "Share a costly, fragmented, or poorly served problem where better planning and operation could matter.",
              },
              {
                title: "Explore future leadership",
                description:
                  "When a real company has customers and domain needs that justify dedicated human leadership, the right person may help guide it.",
                tone: "soft",
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="The relationship"
          title="AI-native teams execute. People lead where judgment matters."
          lead="Metropolis is not recruiting operators into existing portfolio companies today. Interest is exploratory: a way to build relationships with people whose expertise could shape research, challenge assumptions, or eventually help lead a company that earns the need."
        />

        <CallToAction
          tone="brand"
          eyebrow="Start a conversation"
          title="What do you know that Metropolis should understand?"
          description="Tell us about your domain, the operating knowledge outsiders usually miss, and how you might want to participate."
          actions={
            <div id="contact">
              <ContactForm
                subject="Metropolis — domain expertise"
                submitLabel="Share your perspective →"
                tone="onBrand"
                twoColumn
                fields={[
                  { name: "name", label: "Your name", required: true },
                  {
                    name: "email",
                    label: "you@email.com",
                    type: "email",
                    required: true,
                  },
                  {
                    name: "domain",
                    label: "Your domain or market",
                    full: true,
                  },
                  {
                    name: "about",
                    label:
                      "What does your field know that a generic system would miss?",
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
