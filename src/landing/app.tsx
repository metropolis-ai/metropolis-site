import * as React from "react";
import { Button, ThemeProvider } from "@metropolis-ai/ui-kit";
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

export function LandingApp(): React.JSX.Element {
  return (
    <ThemeProvider brand={metropolisBrand}>
      <MarketingShell
        brandMark={<MetropolisMark />}
        actions={<SiteNav links={[
          { label: "How it works", href: "/how-it-works/", variant: "muted" },
          { label: "Consulting", href: "/consulting/", variant: "muted" },
            { label: "Blog", href: "/blog/", variant: "muted" },
          { label: "Experts", href: "/experts/" },
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
          eyebrow="AI-native venture studio"
          title="Doing the hard work once, for a portfolio of companies."
          subtitle={
            <>
              A model. Some tools. A chat window. But that’s just the tip.
              Underneath is everything it takes to run a real business. We built
              that part. It’s called polis. It’s a compounding platform: it builds
              itself to serve Metropolis, and we reuse its building blocks for our
              portfolio companies, which can ask for more. We use them to help build
              yours, too. And we partner with the investors and
              franchise networks behind them. You bring the market. We bring
              everything else.
            </>
          }
          actions={
            <>
              <Button asChild>
                <a href="/consulting/">Work with us</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">Partner with us</a>
              </Button>
            </>
          }
        />

        <section className="border-b">
          <figure className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
            <a
              href="/agent-iceberg.jpg"
              className="block overflow-hidden rounded-2xl border border-border shadow-lg"
            >
              <img
                src="/agent-iceberg.jpg"
                width={1376}
                height={768}
                className="block h-auto w-full"
                alt="An iceberg in three layers. The tip above the water, labeled what you see: LLM, RAG, and tool use. The first layer below the water, any agent: orchestration (multi-step workflows, parallelism, multiple models), trust (guardrails, PII protection, audit and access control), integration (secure connections to existing systems), reliability (model failover, model migrations), testing and release (user simulation, regression testing, staged rollouts), and reporting (analytics, conversation review). A line marks where agent platforms stop. The deeper, wider layer, the company, many agents, one business: knowledge (compounding knowledge, private to each company), planning (research, plans, decisions), governance (human approval for what matters), customers (CRM and customer lifecycle, customer identity), money (payments and billing, bookkeeping), measurement (product analytics, experiments), models (custom model training and serving), apps (web, admin, and mobile apps), and domains (voice, messaging, more as needed). A bracket labeled polis spans both hidden layers: both layers, provided."
              />
            </a>
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              Inspired by Sierra’s agent iceberg. Open the image to read every
              label.
            </figcaption>
          </figure>
        </section>

        <MarketingSection
          align="left"
          eyebrow="Who we work with"
          title="Built for the networks behind companies, and the companies themselves."
        >
          <FeatureGrid
            minColumnWidth={280}
            items={[
              {
                eyebrow: "Venture capital and private equity",
                title: "Investors",
                description:
                  "Your portfolio companies get products from our portfolio, custom builds, or consulting. And our studio builds companies in positions nobody has taken yet, companies you'd want to back.",
                href: "#contact",
              },
              {
                eyebrow: "Franchise systems",
                title: "Franchise networks",
                description:
                  "We solve a problem alongside a few of your locations. Then one of our portfolio companies brings that product to every franchisee.",
                href: "#contact",
              },
              {
                eyebrow: "Startups and businesses",
                title: "Companies and founders",
                description:
                  "Need something built? If one of our portfolio companies already sells it, we'll point you there. If not, we'll build it and keep it maintained. Bring an idea and the expertise behind it, and you can start an AI-native company without hiring a team first. We'll build it with you or for you, whichever fits.",
                href: "/consulting/",
                tone: "soft",
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection align="left" eyebrow="From the blog" title="What we think, in writing.">
          <FeatureGrid
            minColumnWidth={280}
            items={[
              {
                title: "AI isn't a genie →",
                description:
                  "If you think AI has been oversold, you're right. An LLM is a language tool, and it delivers when it is used for the right job with the right system around it.",
                href: "/blog/not-a-genie/",
              },
              {
                title: "Capital isn't enough →",
                description:
                  "Andreessen Horowitz built a platform of experts because money alone doesn't build a company. Would a firm founded today build that platform out of people?",
                href: "/blog/capital-isnt-enough/",
              },
              {
                title: "The studio is the first customer →",
                description:
                  "Metropolis builds its own software with the same agent workflows it brings to other companies.",
                href: "/blog/the-studio-is-the-first-customer/",
              },
            ]}
          />
        </MarketingSection>

        <CallToAction
          tone="muted"
          eyebrow="Start a conversation"
          title="Tell us what you're working on."
          description="Consulting, a partnership for your portfolio or franchise network, or an investment conversation. Tell us which, and we'll get back to you."
          actions={
            <div id="contact">
              <ContactForm
                subject="Metropolis: homepage inquiry"
                submitLabel="Send"
                twoColumn
                fields={[
                  {
                    name: "email",
                    label: "you@email.com",
                    type: "email",
                    required: true,
                  },
                  {
                    name: "interest",
                    label: "What brings you here?",
                    required: true,
                    options: ["Consulting", "Partnership", "Investment", "Something else"],
                  },
                  {
                    name: "message",
                    label: "What are you working on? (optional)",
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
