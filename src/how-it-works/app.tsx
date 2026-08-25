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
import { MetropolisMark, SiteFooter } from "../components/chrome";

export function HowItWorksApp(): React.JSX.Element {
  return (
    <ThemeProvider brand={metropolisBrand}>
      <MarketingShell
        brandMark={<MetropolisMark />}
        navLinks={[
          { label: "Home", href: "index.html" },
          { label: "Consulting", href: "consulting.html", variant: "muted" },
          { label: "Experts", href: "experts.html" },
          { label: "Private materials", href: "investors.html", variant: "button" },
        ]}
        footer={<SiteFooter />}
      >
        <MarketingHero
          align="left"
          eyebrow="How Metropolis works"
          title="The founder leads. AI-native teams execute."
          subtitle="Metropolis is building a venture studio operated by hierarchical teams of specialized AI agents. The founder sets strategy, allocates resources, and makes consequential decisions; the system turns that direction into coordinated work."
          actions={
            <Button asChild variant="outline">
              <a href="#operating-model">Explore the operating model</a>
            </Button>
          }
        />

        <MarketingSection
          id="lineage"
          align="left"
          eyebrow="Where this comes from"
          title="An evolution of the platform-VC thesis, for the AI generation."
          lead="Metropolis did not invent the idea that a shared platform can make a portfolio of companies more valuable. a16z made that argument and built a firm around it. Three of its ideas are worth taking seriously—and each one changes shape when the platform can be operated by software rather than staffed by people."
        >
          <FeatureGrid
            minColumnWidth={300}
            items={[
              {
                eyebrow: "Investment thesis → build thesis",
                title: "Stop picking the winners. Build them.",
                description:
                  "A venture firm starts from an investment thesis: form a view about where value will be created, then find and fund the teams creating it. Metropolis starts from a build thesis and commits its own resources to building there. The reason this is now plausible is that the cost of creating software has collapsed—a16z's own 2026 analysis argues the binding constraint has moved from cost-of-creation to diffusion across an organization. A studio organized to be that diffusion is a different instrument than one organized to fund it.",
              },
              {
                eyebrow: "Eating the world → composing the company",
                title: "Software stopped arriving from outside the company.",
                description:
                  "Andreessen's 2011 argument was that software companies would disrupt every industry from the outside in. That happened—but the company doing the disrupting still ran on people, meetings, and handoffs. The AI-generation sequel is that software no longer only builds the product a company sells; governed agent workflows can perform and coordinate the functions of the company itself. The thing being eaten next is the org chart.",
                tone: "brand",
              },
              {
                eyebrow: "A platform of experts → agents on a knowledge graph",
                title: "The shared advantage becomes software that compounds.",
                description:
                  "a16z's structural innovation as a firm was an in-house platform—talent, recruiting, marketing, business development—shared across the portfolio, giving founders an advantage capital alone could not. That platform is staffed by people, so it scales by hiring and its knowledge lives in individual heads. Metropolis implements the same idea as agents operating on an explicit, connected knowledge base: methods, decisions, evidence, and lessons that accumulate through use instead of walking out the door.",
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="Where domain experts fit"
          title="The platform does not replace the expert. It is how the expert scales."
          lead="Reusable machinery is leverage, not judgment. Real markets still require people who know what outsiders miss—which is precisely why Metropolis wants them. The difference from a staffed platform is what happens to that judgment afterward: it is captured as explicit knowledge the system retrieves from, evaluates against, and improves, rather than remaining tacit in the person who supplied it."
        >
          <HighlightBanner eyebrow="The honest objection" tone="muted">
            <b>Reusable machinery is not, by itself, a moat.</b> A
            well-capitalized competitor can copy shared agent infrastructure
            and governed workflows without harming itself, which is the test a
            durable advantage has to pass. If Metropolis earns one, it will not
            be the scaffolding—it will be the accumulated, company-specific
            domain knowledge and operating history built on top of it, and the
            evidence that it works. That is a claim still being tested, stated
            here as a claim.
          </HighlightBanner>
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="A new organizational design"
          title="The personal computer changed how people worked. AI can change the company itself."
          lead="Personal computers amplified individual work while companies retained familiar roles, departments, handoffs, and management structures. Metropolis asks what should remain when software can increasingly perform and coordinate the work—not just assist the person doing it."
        >
          <HighlightBanner eyebrow="The ambition" tone="brand">
            The personal computer amplified an individual’s ability to work.
            Metropolis aims to amplify a founder’s ability to lead an institution.
          </HighlightBanner>
        </MarketingSection>

        <MarketingSection
          id="operating-model"
          align="left"
          eyebrow="One system · three connected graphs"
          title="Responsibility, process, and knowledge move together."
          lead="A useful AI workforce needs an organization that assigns responsibility, a process that coordinates work, and institutional knowledge that prevents every task from beginning at zero."
        >
          <FeatureGrid
            minColumnWidth={270}
            items={[
              {
                eyebrow: "Organization",
                title: "A hierarchy of responsibility",
                description:
                  "Coordinating agents translate goals into bounded work, delegate to specialists, monitor progress, review results, and escalate when human judgment is required.",
              },
              {
                eyebrow: "Process",
                title: "Workflow graphs that improve through use",
                description:
                  "Research, planning, execution, evaluation, review, and delivery become observable steps. Evidence and founder feedback improve them under explicit governance.",
                tone: "brand",
              },
              {
                eyebrow: "Knowledge",
                title: "A common knowledge vector graph",
                description:
                  "Research, decisions, methods, plans, and lessons remain connected and retrievable, while company-private context stays bounded to the business that owns it.",
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection
          id="components"
          align="left"
          eyebrow="What it is built from"
          title="Knowledge, planning, execution, and portfolio companies are one system at different scopes."
          lead="Broken into components, the studio has four moving parts. Each is real today in some working form; none is finished. The gap between what exists and what remains is stated plainly rather than smoothed over."
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
                  "Work moves through config-driven workflow graphs with defined inputs, outputs, and review gates. One of the first was built to read the studio's own code and produce a grounded account of what each part does and how it connects—the studio explaining itself to itself, with any correction routed through the same human gate as every other change.",
                tone: "brand",
              },
              {
                eyebrow: "Execution",
                title: "A local fleet today; a hosted layer next",
                description:
                  "Vetted, founder-approved work is carried out by an agent fleet running today. Viewing any session live, seeing aggregate activity across everything in flight, and removing dependence on one machine is the direction of travel—not yet built.",
              },
              {
                eyebrow: "Portfolio companies",
                title: "The same machinery at a narrower scope",
                description:
                  "A portfolio company runs this system for one business instead of the whole studio—the same knowledge discipline, the same planning workflows, the same execution model. Each keeps its own market, product, and private context. None operates publicly yet.",
                tone: "soft",
              },
            ]}
          />
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="Interchangeable parts"
          title="Start with the work—not the job title."
          lead="A conventional role is a historical bundle of responsibilities. Metropolis decomposes that bundle into explicit capabilities with their own knowledge, tools, permissions, evaluations, workflows, and authority boundaries instead of asking one synthetic employee to imitate the title."
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
          lead="The founder sets objectives and strategy, chooses where to act, allocates capital and attention, maintains situational awareness, defines the quality bar, and remains responsible for consequential decisions. The system executes between those decisions without making responsibility disappear."
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
          eyebrow="The operating loop"
          title="Understand. Decide. Execute. Evaluate. Learn."
          lead="A business function identifies an opportunity. The system captures and prioritizes it, coordinates specialists through an explicit workflow, and produces a reviewable result. The founder decides at the relevant gate; the evidence and feedback improve what the institution knows and can do next."
        />

        <MarketingSection
          align="left"
          eyebrow="Working from the inside out"
          title="The studio is the first proof environment."
          lead="Engineering development is the first working team: agents plan, build, review, and deliver software under founder governance. Product and planning are beginning to emerge next. Research, finance, design, operations, and other functions remain the direction of travel—not claims of completed capability."
        >
          <HighlightBanner eyebrow="Built recursively" tone="muted">
            Metropolis is not designing an operating model in the abstract and
            asking a future company to trust it. It is building the studio by
            using the studio to build itself.
          </HighlightBanner>
        </MarketingSection>

        <MarketingSection
          align="left"
          eyebrow="Where it is going"
          title="Build the institution one governed capability at a time."
          lead="Each new function should leave behind more than a completed task: reusable responsibilities, workflows, evaluations, knowledge, tools, and authority boundaries. The sequence follows real institutional need rather than a predetermined department roadmap."
        >
          <FeatureGrid
            minColumnWidth={300}
            items={[
              {
                title: "Financials belong to a finance capability",
                description:
                  "Metropolis will publish a financial model when a real finance capability can produce, challenge, maintain, and own it using evidence the institution has earned—not as a one-time set of presentation assumptions.",
              },
              {
                title: "Capabilities can compound across companies",
                description:
                  "Portfolio companies keep their own market, strategy, customers, product, and private context while inheriting appropriate machinery already proven inside the studio.",
                tone: "brand",
              },
            ]}
          />
        </MarketingSection>

        <CallToAction
          tone="brand"
          eyebrow="The destination"
          title="Reinvent the company—not just its tools."
          description="Metropolis begins with one working team and expands one governed capability at a time, building a company-creation institution whose organization, workflows, and knowledge improve through everything it builds."
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
