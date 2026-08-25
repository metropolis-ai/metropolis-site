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
                <a href="/investors/">Private materials</a>
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
          title="When I don’t know something, I build a system to figure it out. When I want something to scale, I build a system for that too."
          lead="Metropolis began while I was exploring ideas for AI-native startups. The ideas differed, but each required much of the same machinery: specialized agents and infrastructure for researching markets, making plans, building products, and operating companies. I didn’t know which individual startup was worth building, so I built the system that could find out—and built it to run more than one company, because doing this once was never the point."
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
          lead="Venture studios began by sharing human expertise, services, capital, and playbooks. AI-native studios give smaller teams more leverage. Metropolis takes the next step: implement the functions of the studio itself as software, so a founder can lead more of an institution rather than merely complete more tasks."
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
                Agents, governed workflows, knowledge, and evaluation—plus the
                business systems a company needs but should not rebuild:
                customer records and lifecycle, product events and analytics,
                payments and billing, identity, and model training.
              </p>
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-center text-sm text-muted-foreground">
              Company A, B, and C are illustrative. Everything below the line is
              built once and inherited; each company's market, product, and
              private context stays its own.
            </p>
          </div>
          <HighlightBanner eyebrow="The lineage" tone="muted">
            <b>An evolution of the platform-VC idea, for the AI generation.</b>{" "}
            a16z argued in 2011 that software would eat the world, then built an
            in-house platform of experts to give its portfolio an advantage its
            capital alone could not. Metropolis takes both ideas a step further:
            software that composes the company itself, and a platform of experts
            implemented as agents operating on knowledge that compounds with
            use.{" "}
            <a href="/how-it-works/" className="font-semibold underline">
              Read the full argument →
            </a>
          </HighlightBanner>
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="Two ways Metropolis works"
          title="A studio that builds its own companies—and a consulting practice that builds for others."
          lead="The same machinery serves both. The studio is where it is proven; consulting is where it meets companies we did not build, which is the fastest way to find out where it genuinely holds up."
        >
          <FeatureGrid
            minColumnWidth={300}
            items={[
              {
                eyebrow: "The studio",
                title: "Build and operate our own portfolio",
                description:
                  "Identify where AI changes what is worth building, then plan, build, and operate companies using shared agents, infrastructure, knowledge, and governed workflows. The first portfolio company is in build now.",
                tone: "brand",
              },
              {
                eyebrow: "Consulting",
                title: "AI transformation, scalability, and custom builds →",
                description:
                  "Engagements with companies we did not found: re-express a function that will not scale as governed agent workflows on the platform, or have an AI-native system built directly. Open now.",
                href: "/consulting/",
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="Evidence so far"
          title="Metropolis is built by Metropolis."
          lead="Engineering is the first working team: agents plan, build, review, and deliver Metropolis’s own software under founder governance. The shared business systems are being proven against the first portfolio company now, and consulting takes the same machinery to companies Metropolis did not build."
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
                href: "/how-it-works/",
              },
              {
                eyebrow: "Companies with a function that will not scale",
                title: "Work with us →",
                description:
                  "AI transformation and scalability on the platform, or a custom AI-native build. Engagements are open now.",
                href: "/consulting/",
              },
              {
                eyebrow: "Potential investors and trusted mentors",
                title: "Private materials →",
                description:
                  "Read the private thesis and, as they are completed, deeper materials on the capability, knowledge, operating, and evidence systems.",
                href: "/investors/",
              },
              {
                eyebrow: "Domain experts and future leaders",
                title: "Share what you know →",
                description:
                  "Challenge the thesis, introduce a domain, or explore future leadership when a real company earns it.",
                href: "/experts/",
              },
            ]}
          />
        </MarketingSection>

        <CallToAction
          tone="muted"
          eyebrow="Start a conversation"
          title="What capability or market should Metropolis understand?"
          description="Share a perspective, problem, or domain worth understanding. It becomes an input to our research."
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
