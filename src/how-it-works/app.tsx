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
import { MetropolisMark, SiteFooter, SiteNav } from "../components/chrome";

/**
 * How It Works — deliberately FIVE sections plus hero and CTA.
 *
 * This page previously ran to twelve and repeated itself: two competing
 * taxonomies for the same components, and an "operating loop" section restating
 * the capability grid above it. Length was costing comprehension, not adding
 * depth. Before adding a section, check whether it belongs inside one of the
 * five.
 *
 * "What it is built from" describes the shared PLATFORM. Keep it in step with
 * what the platform actually contains — per AGENTS.md, check the board and the
 * vault before changing a capability claim here, and describe components
 * FUNCTIONALLY. Internal codenames belong only in the gated investor hub.
 */
export function HowItWorksApp(): React.JSX.Element {
  return (
    <ThemeProvider brand={metropolisBrand}>
      <MarketingShell
        brandMark={<MetropolisMark />}
        actions={<SiteNav links={[
          { label: "Home", href: "index.html" },
          { label: "Consulting", href: "consulting.html", variant: "muted" },
            { label: "Notes", href: "blog.html", variant: "muted" },
          { label: "Experts", href: "experts.html" },
          { label: "Private materials", href: "investors.html", variant: "button" },
        ]} />}
        footer={<SiteFooter />}
      >
        <MarketingHero
          align="left"
          eyebrow="How Metropolis works"
          title="The founder leads. AI-native teams execute."
          subtitle="Metropolis is a venture studio operated by hierarchical teams of specialized AI agents. The founder sets strategy, allocates resources, and makes the consequential decisions; the system turns that direction into coordinated work."
          actions={
            <Button asChild variant="outline">
              <a href="#operating-model">See what it is built from</a>
            </Button>
          }
        />

        <MarketingSection
          id="lineage"
          align="left"
          eyebrow="Where this comes from"
          title="An evolution of the platform-VC thesis, for the AI generation."
          lead="a16z argued in 2011 that software would eat the world, then built an in-house platform of experts—talent, recruiting, marketing, business development—to give its portfolio an advantage capital alone could not. Both ideas change shape when that platform can be software. The personal computer amplified one person's ability to work; Metropolis aims to amplify a founder's ability to lead an institution."
        >
          <FeatureGrid
            minColumnWidth={280}
            items={[
              {
                eyebrow: "Investment thesis → build thesis",
                title: "Build the companies, don't pick them",
                description:
                  "A venture firm forms a view about where value will be created and funds the teams creating it. Metropolis commits its own resources and builds there instead. The cost of creating software has collapsed; the constraint is now getting it through an organization.",
              },
              {
                eyebrow: "Eating the world → composing the company",
                title: "The org chart is what software eats next",
                description:
                  "Software disrupted industries from the outside, but the disrupting company still ran on people, meetings, and handoffs. Governed agent workflows can now perform and coordinate the functions of the company itself.",
                tone: "brand",
              },
              {
                eyebrow: "Platform of experts → agents on a knowledge graph",
                title: "The shared advantage compounds",
                description:
                  "A platform staffed by people scales by hiring, and its knowledge lives in individual heads. Implemented as agents over an explicit knowledge base, methods, decisions, and lessons accumulate through use. The machinery itself is not the moat—what compounds on top of it is.",
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection
          id="operating-model"
          align="left"
          eyebrow="What it is built from"
          title="A company's machinery, built once and inherited."
          lead="Two layers run on the same platform. An operating system that decides and executes work, and the business systems any company needs but none should rebuild from scratch."
        >
          <FeatureGrid
            minColumnWidth={260}
            items={[
              {
                eyebrow: "Knowledge",
                title: "A shared base that grounds every decision",
                description:
                  "Research, decisions, methods, and plans accumulate in a common base that specialists retrieve from before they act. New knowledge enters through a human-reviewed proposal—merge, split, or supersede—never silently, and never outside the boundary of the business that owns it.",
              },
              {
                eyebrow: "Planning",
                title: "Explicit workflows, not one-shot prompts",
                description:
                  "Work moves through config-driven workflow graphs with defined inputs, outputs, and review gates. One of the first reads the studio's own code and produces a grounded account of what each part does and how it connects—the studio explaining itself to itself.",
                tone: "brand",
              },
              {
                eyebrow: "Execution",
                title: "A hierarchy of agents that delivers the work",
                description:
                  "Coordinating agents translate goals into bounded work, delegate to specialists, monitor progress, review results, and escalate when human judgment is required. A local fleet runs this today; a hosted layer with live session visibility is next.",
              },
              {
                eyebrow: "Business systems",
                title: "Customers, money, and measurement",
                description:
                  "Customer and lead records with traceable lifecycle and outreach history, where consequential outbound action needs human approval. Product events stored at volume, turned into canonical metrics, experiments, and signals. Payments and billing state. One canonical customer identity correlating all of them.",
                tone: "soft",
              },
              {
                eyebrow: "Model training",
                title: "From a training table to a served model",
                description:
                  "A company supplies a tabular training set and declarative model configuration; the platform validates it, trains and honestly evaluates candidate models, versions the resulting artifact with its lineage, and serves predictions through a stable interface. Domain-specific feature engineering stays with the company.",
              },
              {
                eyebrow: "Portfolio companies",
                title: "The same machinery at a narrower scope",
                description:
                  "A portfolio company runs this system for one business instead of the whole studio—the same knowledge discipline, the same planning workflows, the same execution model, the same business systems—while keeping its own market, product, and private context.",
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="Interchangeable parts"
          title="Start with the work—not the job title."
          lead="A conventional role is a historical bundle of responsibilities. Metropolis decomposes that bundle into explicit capabilities with their own knowledge, tools, permissions, evaluations, workflows, and authority boundaries, instead of asking one synthetic employee to imitate a title. Reusable machinery is leverage, not judgment—real markets still need people who know what outsiders miss, which is why Metropolis works with domain experts to build that knowledge into the system."
        >
          <FeatureGrid
            minColumnWidth={260}
            items={[
              {
                eyebrow: "Understand",
                title: "Research and analyze",
                description:
                  "Assemble evidence, build institutional context, identify uncertainty, and challenge assumptions.",
              },
              {
                eyebrow: "Decide",
                title: "Model and recommend",
                description:
                  "Prepare scenarios and tradeoffs, define authority boundaries, and return consequential choices for human judgment.",
              },
              {
                eyebrow: "Operate",
                title: "Execute, evaluate, and learn",
                description:
                  "Run bounded work, test its quality, surface exceptions, and feed evidence back into the institution.",
                tone: "soft",
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="Founder governance"
          title="Autonomy concentrates human attention where it matters most."
          lead="The founder sets objectives and strategy, chooses where to act, allocates capital and attention, defines the quality bar, and remains responsible for consequential decisions. The system executes between those decisions without making responsibility disappear."
        >
          <FeatureGrid
            minColumnWidth={300}
            items={[
              {
                eyebrow: "Human gate one",
                title: "Plan approval",
                description:
                  "Before consequential work begins, the founder reviews the direction, scope, dependencies, and tradeoffs—or asks for another iteration.",
              },
              {
                eyebrow: "Human gate two",
                title: "Delivery and decision approval",
                description:
                  "Material product changes, strategic decisions, and sensitive or irreversible actions return to the founder for judgment.",
                tone: "soft",
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="Where it is going"
          title="The studio is its own first customer."
          lead="Metropolis is not designing an operating model in the abstract and asking a future company to trust it—it is building the studio by using the studio to build itself. Engineering is the first working team: agents plan, build, review, and deliver software under founder governance. Product and planning follow, then the remaining business functions, each leaving behind reusable responsibilities, workflows, evaluations, and knowledge. The shared business systems are being proven against the first portfolio company now, and the same machinery goes to outside companies through consulting—the fastest way to find out where it holds up against businesses Metropolis did not build."
        >
          <Button asChild variant="outline">
            <a href="consulting.html">How consulting engagements work →</a>
          </Button>
        </MarketingSection>

        <CallToAction
          tone="brand"
          eyebrow="The destination"
          title="Reinvent the company—not just its tools."
          description="One working team, expanding one governed capability at a time, into a company-creation institution whose organization, workflows, and knowledge improve through everything it builds."
          actions={
            <>
              <Button asChild variant="secondary">
                <a href="index.html">Return home</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href="experts.html">Share your expertise</a>
              </Button>
            </>
          }
        />
      </MarketingShell>
    </ThemeProvider>
  );
}
