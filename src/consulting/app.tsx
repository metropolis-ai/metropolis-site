import * as React from "react";
import { Button, ThemeProvider } from "@metropolis-ai/ui-kit";
import {
  CallToAction,
  FeatureGrid,
  HighlightBanner,
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
          { label: "How it works", href: "/how-it-works/", variant: "muted" },
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
          title="The machinery we build for ourselves, pointed at your company."
          subtitle="Metropolis builds and operates its own portfolio companies. It also takes on outside engagements: AI transformation and scalability work built on the same platform, or a custom system when the platform is not the right fit."
          actions={
            <>
              <Button asChild>
                <a href="#contact">Start a conversation</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/blog/">Read how we work</a>
              </Button>
            </>
          }
        />

        <MarketingSection
          align="left"
          eyebrow="Two ways to engage"
          title="Adopt the platform, or have something built on it."
          lead="Both start the same way—decomposing the work you actually do into explicit capabilities, workflows, knowledge, and decision gates—and diverge in what you end up owning."
        >
          <FeatureGrid
            minColumnWidth={320}
            items={[
              {
                eyebrow: "Transformation and scalability",
                title: "Run your functions on the platform",
                description:
                  "Take a function that is bottlenecked on human throughput and re-express it as governed agent workflows: explicit inputs and outputs, retrieval from a knowledge base that is yours, evaluation on real cases, and human decision gates where judgment belongs. The goal is a function that scales without proportionally scaling headcount—and that gets better as it runs.",
                tone: "brand",
              },
              {
                eyebrow: "Custom builds",
                title: "Have an AI-native system built",
                description:
                  "When the platform is not the right shape for the problem, we build the system directly—same operating discipline, same governance, no obligation to adopt our stack. You own the result. This is the engagement type closest to what Metropolis does for itself every day.",
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="How an engagement runs"
          title="Start with the work, not the org chart."
          lead="A conventional role is a historical bundle of responsibilities. We start by taking that bundle apart, because a capability with defined inputs, tools, evaluation, and authority boundaries is something a system can actually operate—and something you can measure."
        >
          <FeatureGrid
            minColumnWidth={260}
            items={[
              {
                eyebrow: "One",
                title: "Decompose and instrument",
                description:
                  "Map the function as it really runs today, find where throughput and quality are actually lost, and agree what a good outcome looks like in measurable terms before anything is built.",
              },
              {
                eyebrow: "Two",
                title: "Build the governed workflow",
                description:
                  "Stand up the workflow with explicit steps, retrieval grounded in your own knowledge, evaluation on real cases, and human gates on consequential decisions—so autonomy expands only where the evidence supports it.",
                tone: "soft",
              },
              {
                eyebrow: "Three",
                title: "Hand over ownership",
                description:
                  "Your team operates it, extends it, and keeps the knowledge it accumulates. An engagement that leaves you dependent on us has failed on its own terms.",
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="Why this is credible"
          title="We are the first customer."
          lead="Metropolis runs its own software delivery this way: agents plan, build, review, and deliver under founder governance, with the same knowledge discipline and decision gates we would bring to your company. The consulting practice is not a separate offering invented for clients—it is the studio's own machinery, and every engagement improves it."
        >
          <HighlightBanner eyebrow="Scope" tone="muted">
            AI-native software delivery and the governance around it is where we
            have the most operating history. Other business functions are
            earlier. We will tell you which category your problem falls into
            before you commit to anything.
          </HighlightBanner>
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="Your knowledge stays yours"
          title="Shared machinery, bounded context."
          lead="Metropolis reuses capabilities across its own portfolio, and that boundary is enforced rather than promised: your data, strategy, customer context, and domain knowledge remain bounded to your engagement. What we carry forward is method—how a class of problem is decomposed and governed—never your private context."
        />

        <CallToAction
          tone="brand"
          eyebrow="Start a conversation"
          title="What is the function that will not scale?"
          description="Tell us what you are trying to change and what is in the way. If the platform is the wrong answer, we will say so."
          actions={
            <div id="contact">
              <ContactForm
                subject="Metropolis — consulting inquiry"
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
