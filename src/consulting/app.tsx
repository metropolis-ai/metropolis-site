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
          eyebrow="Metropolis Consulting · the first company built on polis"
          title="Technical leadership, with a platform behind it."
          subtitle="For seed and Series A teams looking to supplement their technical leadership. You get a fractional CTO for a bounded engagement, and polis doing the heavy lifting behind them. Think airCFO, for your technology."
          actions={
            <>
              <Button asChild>
                <a href="#contact">Start a conversation</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/blog/why-consulting-first/">Why we start with consulting</a>
              </Button>
            </>
          }
        />

        <MarketingSection
          align="left"
          eyebrow="What you get"
          title="Built for us, delivered for you."
          lead="Every service started as something we needed to build Metropolis. Take one, or all of them, and go as far as you want: advice, a build, or a system we run for you."
        >
          <FeatureGrid
            minColumnWidth={280}
            items={[
              {
                eyebrow: "Plan, build and operate",
                title: "Turn a problem into shipped software",
                description:
                  "We turn a problem or an opportunity into a plan, build it inside your own codebase, and release it. If you want, we keep running and maintaining it. You get a project plan, working software, and someone to run it.",
                tone: "brand",
              },
              {
                eyebrow: "Architecture and security review",
                title: "Know what you actually have",
                description:
                  "We map your systems, model the threats, and check whether you are ready to operate at the next stage. You get architecture maps, a threat model, a readiness review, and a ranked list of fixes.",
              },
              {
                eyebrow: "AI spend visibility",
                title: "See what your AI costs, and where",
                description:
                  "We show you what you spend on Claude, Codex and other models, and which work it pays for. You get a usage dashboard and recommendations, once or on a recurring basis.",
                tone: "soft",
              },
            ]}
          />
          <p className="mt-6 max-w-3xl text-muted-foreground">
            Software delivery and its governance carry the most operating
            history behind them: it is how Metropolis builds polis every day. The
            other services are newer, and we are building them out through
            our first engagements.
          </p>
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="How an engagement runs"
          title="About six weeks, and a person accountable throughout."
          lead="AI does the work. A person makes the consequential calls, and reviews every document before you see it."
        >
          <FeatureGrid
            minColumnWidth={260}
            items={[
              {
                eyebrow: "Weeks 1–2",
                title: "Understand and plan",
                description:
                  "We learn the problem and your requirements, review what you have today, document the architecture and security picture, and agree on a plan.",
              },
              {
                eyebrow: "Weeks 3–4",
                title: "Build and release",
                description:
                  "The work gets built, tested and released inside your own repository, under your review.",
              },
              {
                eyebrow: "Weeks 5–6",
                title: "Measure and hand off",
                description:
                  "We measure the results, update the documentation, and either hand everything over or keep running it for you.",
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="The obvious question"
          title="Why not just use Lovable?"
          lead="Tools like Lovable, Base44 and Perplexity are great for trying an idea quickly and cheaply, and we would tell you to start there. They are tools you drive yourself, built for starting new apps on their own stack. We work inside the system you already have, and a person is accountable for the result. Start on a tool. Come to us when you want to own and grow what you have built."
        />

        <MarketingSection
          align="left"
          eyebrow="Your code stays yours"
          title="What's yours stays yours."
          lead="Every engagement runs in its own isolated polis deployment, on a dedicated server, never shared with another client. Access is scoped to the engagement and revoked at the end. Nothing leaves your environment without our approval, and what we carry forward to other work is method, how a kind of problem gets solved, never your code, data, or strategy. An NDA spells all of this out before we start."
        />


        <CallToAction
          tone="brand"
          eyebrow="Start a conversation"
          title="What are you trying to build?"
          description="Tell us what you're working on and what's in the way. We'll get back to you with how we'd approach it."
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
