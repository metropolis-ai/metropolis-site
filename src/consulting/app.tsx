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

export function ConsultingApp(): React.JSX.Element {
  return (
    <ThemeProvider brand={metropolisBrand}>
      <MarketingShell
        brandMark={<MetropolisMark />}
        actions={<SiteNav links={[
          { label: "Home", href: "/" },
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
          eyebrow="Consulting"
          title="Bring us a hard problem."
          subtitle="A person on our team works it with you, and we solve it the way that fits best: a product from one of our portfolio companies, a system we build and maintain for you, or advice drawn from what we have learned building companies with AI."
          actions={
            <>
              <Button asChild>
                <a href="#contact">Start a conversation</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/blog/">Read the blog</a>
              </Button>
            </>
          }
        />

        <MarketingSection
          align="left"
          eyebrow="Three ways to work with us"
          title="Three ways we solve it."
          lead="Every engagement starts with understanding your problem and agreeing on what a good outcome looks like. Then we pick the path that fits, and someone from Metropolis stays with you until you get there."
        >
          <FeatureGrid
            minColumnWidth={280}
            items={[
              {
                eyebrow: "If it already exists",
                title: "Use a portfolio company's product",
                description:
                  "If one of our portfolio companies already solves your problem, that is usually the fastest and least expensive path. You get a product that is already built, already running, and improving for every company that uses it.",
                tone: "brand",
              },
              {
                eyebrow: "If it doesn't exist yet",
                title: "Have it built and run for you",
                description:
                  "We build an AI-native system for your problem, then run and maintain it, so it keeps getting better without your team having to carry it. If what we build becomes a product other companies need, you become a founding customer, with terms to match.",
              },
              {
                eyebrow: "If you need direction",
                title: "Get advice",
                description:
                  "Sometimes what you need is a clear decision about what to build, what to buy, and where AI fits. We give you that advice, drawn from what we have learned building our own companies.",
                tone: "soft",
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="Your knowledge stays yours"
          title="What's yours stays yours."
          lead="Your data, strategy, customers, and domain knowledge stay within your engagement, and our systems enforce that boundary. What we carry forward to other work is method, how a kind of problem gets solved, never your private information. That holds even when something we build for you becomes a product other companies use."
        />

        <CallToAction
          tone="brand"
          eyebrow="Start a conversation"
          title="What's the hard problem?"
          description="Tell us what you're trying to change and what's in the way. We'll get back to you with the path we'd take."
          actions={
            <div id="contact">
              <ContactForm
                subject="Metropolis: consulting inquiry"
                submitLabel="Start a conversation →"
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
                    name: "company",
                    label: "Company or organization",
                    full: true,
                  },
                  {
                    name: "goal",
                    label:
                      "What are you trying to do, and what is currently in the way?",
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
