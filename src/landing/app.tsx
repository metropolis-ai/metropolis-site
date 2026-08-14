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
import { MetropolisMark, SiteFooter } from "../components/chrome";

export function LandingApp(): React.JSX.Element {
  return (
    <ThemeProvider brand={metropolisBrand}>
      <MarketingShell
        brandMark={<MetropolisMark />}
        navLinks={[
          { label: "Thesis", href: "#thesis", variant: "muted" },
          { label: "How it works", href: "how-it-works.html", variant: "muted" },
          { label: "Work with us", href: "experts.html" },
          {
            label: "Private materials",
            href: "investors.html",
            variant: "button",
          },
        ]}
        footer={<SiteFooter contactHref="#contact" />}
      >
        <MarketingHero
          align="left"
          eyebrow="AI-native venture studio"
          title="The studio itself becomes software."
          subtitle={
            <>
              Metropolis is building a venture studio as an operating system: a
              solo founder leads specialized agents, business capabilities,
              knowledge, and governed workflows across a future portfolio of
              independently valuable companies.
            </>
          }
          actions={
            <>
              <Button asChild>
                <a href="investors.html">Private materials</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#thesis">Read the thesis</a>
              </Button>
            </>
          }
        />

        <MarketingSection
          align="left"
          eyebrow="Why Metropolis"
          title="When I don’t know something, I build a system to figure it out."
          lead="Metropolis began while I was exploring ideas for AI-native startups. The ideas differed, but each required much of the same machinery: specialized agents and infrastructure for researching markets, making plans, building products, and operating companies. I didn’t know which individual startup was worth building, so I began building the system that could find out."
        >
          <FeatureGrid
            minColumnWidth={300}
            items={[
              {
                eyebrow: "The experience",
                title: "Hard workflows can become systems.",
                description:
                  "Before Metropolis, I spent more than five years building Amazon FSx at AWS. For three of those years, I led a team I founded to automate the service’s expansion across AWS Regions, Availability Zones, and cells—work that reinforced my conviction that even extraordinarily difficult human workflows can be understood, encoded, and automated.",
              },
              {
                eyebrow: "The conviction",
                title: "A company is what it knows and how it operates.",
                description:
                  "AI has moved the boundary of what can be automated. I believe much of a modern company’s durable value lives in its data and schemas, its workflow definitions, and the knowledge its team has accumulated by operating it. Metropolis is being built to make those assets explicit, executable, and able to improve through use.",
                tone: "soft",
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection
          id="thesis"
          align="left"
          eyebrow="From studio to system"
          title="Company-building capabilities should not be recreated from zero."
          lead="Venture studios began by sharing human expertise, services, capital, and playbooks. AI-native studios give smaller teams more leverage. Metropolis takes the next step: implement the functions of the studio itself as software."
        >
          <FeatureGrid
            minColumnWidth={250}
            items={[
              {
                eyebrow: "Traditional studio",
                title: "Share people and playbooks",
                description:
                  "A central team supplies expertise, services, capital, and operating support to many new companies.",
              },
              {
                eyebrow: "AI-native studio",
                title: "Give a smaller team agent leverage",
                description:
                  "Agents and automation change how quickly a human studio team can build and support AI-native products.",
              },
              {
                eyebrow: "Metropolis",
                title: "Build the studio as a system",
                description:
                  "Agent-executed business capabilities become reusable parts, initially directed by one founder.",
                tone: "brand",
              },
            ]}
          />
        </MarketingSection>

        <HighlightBanner eyebrow="The operating model" tone="brand">
          <b>The founder leads. AI-native teams execute.</b> Metropolis connects
          specialized agents, governed workflows, and institutional knowledge
          so one founder can lead more company—not merely complete more tasks.
        </HighlightBanner>

        <MarketingSection
          align="left"
          eyebrow="How it works"
          title="Build the organization around the work—not inherited job titles."
          lead="Metropolis decomposes business functions into explicit responsibilities, workflows, knowledge, tools, evaluations, permissions, and human decision gates. The result is an institution designed for AI from the beginning."
        >
          <Button asChild variant="outline">
            <a href="how-it-works.html">Explore the operating model →</a>
          </Button>
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="One operating system · many companies"
          title="Build the company-building machinery once—then keep improving it."
          lead="Portfolio companies remain distinct, but appropriate agents, workflows, infrastructure, evaluation methods, and operating knowledge can give each one a more capable starting point. Metropolis is testing how much of that foundation can be shared without flattening what makes each company valuable."
        >
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {["Company A", "Company B", "Company C"].map((company) => (
                <div
                  key={company}
                  className="rounded-t-[2rem] border border-border bg-card px-5 py-7 text-center shadow-sm"
                >
                  <p className="font-heading text-xl font-semibold text-foreground">
                    {company}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    distinct market and expertise
                  </p>
                </div>
              ))}
            </div>
            <div className="my-3 flex items-center gap-4" aria-hidden="true">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                visible products above · shared framework below
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="rounded-[2rem] border border-primary/20 bg-primary px-6 py-10 text-center text-primary-foreground shadow-lg">
              <p className="font-heading text-2xl font-semibold">
                The Metropolis operating system
              </p>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-primary-foreground/80 sm:text-base">
                Interchangeable business capabilities, governed workflows,
                knowledge, evaluation, and an expanding library of reusable
                parts.
              </p>
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-center text-sm text-muted-foreground">
              The companies are conceptual. Shared capabilities and
              company-private context remain distinct; cross-company reuse is
              the thesis Metropolis is working to prove.
            </p>
          </div>
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="Starting inside Metropolis"
          title="The studio is the first proof environment."
          lead="The founder currently uses AI agents and structured workflows to plan and deliver Metropolis’s software work. The broader studio operating system, portfolio-wide reuse, and differentiated economics remain the thesis—not claims of completed capability today."
        />

        <MarketingSection
          align="left"
          eyebrow="Ways in"
          title="Go deeper—or bring a perspective we need."
        >
          <FeatureGrid
            minColumnWidth={280}
            items={[
              {
                eyebrow: "The operating model",
                title: "See how Metropolis works →",
                description:
                  "Follow the hierarchy, workflow, knowledge, and founder-decision systems from strategic direction to reviewed delivery.",
                href: "how-it-works.html",
              },
              {
                eyebrow: "Potential investors and trusted mentors",
                title: "Private materials →",
                description:
                  "Read the private thesis and, as they are completed, deeper materials on the capability, knowledge, operating, and evidence systems.",
                href: "investors.html",
              },
              {
                eyebrow: "Domain experts and future leaders",
                title: "Share what you know →",
                description:
                  "Challenge the thesis, introduce a domain, or explore future leadership when a real company earns it.",
                href: "experts.html",
              },
            ]}
          />
        </MarketingSection>

        <CallToAction
          tone="muted"
          eyebrow="Start a conversation"
          title="What capability or market should Metropolis understand?"
          description="Share a perspective, problem, or domain. Your note is an input to our research—not a promise that a company already exists or will be launched."
          actions={
            <div id="contact">
              <ContactForm
                subject="Metropolis — public site interest"
                submitLabel="Share your perspective"
                twoColumn
                fields={[
                  {
                    name: "email",
                    label: "you@email.com",
                    type: "email",
                    required: true,
                  },
                  {
                    name: "perspective",
                    label: "Capability, market, or problem (optional)",
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
