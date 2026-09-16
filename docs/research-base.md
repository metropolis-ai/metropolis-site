# Research base

This is the citable evidence base the public thesis (`docs/positioning.md`) and
its downstream copy should argue from. It exists so the next document that
extends the thesis — a deeper investor narrative, a "why now" section, a
defensibility argument — starts from sources already found and read, instead
of re-finding them. Every claim below was read directly (via fetch, not
inferred from a search snippet) before being cited here.

Each source is landed in the `metropolis` ailexandria vault namespace as a
`reference`/source node (see "Vault landing" at the end) so it is queryable
alongside the rest of the studio's research, not just readable in this file.

## How to use this

Positioning's three claims (`docs/positioning.md`, "The three claims") are:

1. The machinery of company-building can be reused.
2. AI changes the economics of build versus buy.
3. Knowledge and operating capability can compound across a portfolio.

The sources below are organized against those three claims, plus the
counter-positioning frame the captain flagged as worth building on. For each
claim, evidence is split into **support** and **complicate/counter** — the
second column is not decoration. Public copy should be able to state the
strongest objection to itself and answer it, not just cite the sources that
agree.

---

## The seed source (verified 2026-08-28)

**Parker McKee, ["Counter-positioning moat: how vertical AI apps can kill
incumbents"](https://www.linkedin.com/pulse/counter-positioning-moat-how-vertical-ai-apps-can-kill-parker-mckee-ppdye/)
(LinkedIn).** Flagged by the captain on 2026-07-31. This entry previously read
"not locatable, not verified" and carried an instruction not to cite it.
**That block was resolved on 2026-08-28 by direct fetch of the article.** It is
citable.

Author credibility, confirmed earlier and unchanged: Parker McKee is at [Pillar
VC](https://www.pillar.vc/team/parker-mckee/), an active investor in AI-powered
apps and vertical AI, and joined Pillar in 2018.

**The argument.** Vertical AI application companies can outcompete the
foundation model labs because their incentives are opposed. Labs earn revenue by
maximizing token consumption; application companies profit by minimizing tokens
while still delivering the outcome. Every efficiency (smaller models, caching,
targeted fine-tuning) flows to application margin rather than lab revenue. In
McKee's words, the lab "cannot easily follow the application company into a
vertical, outcome-based business model without working against the economics of
its existing volume business."

**The three-part play.** (1) Win customers on product performance. (2)
Accumulate private, non-portable customer context. (3) Convert those learnings
into structural cost advantages. The worked example is customer service, where
predicting likely questions and pre-caching answers cuts speculative generation
from many responses to two while holding accuracy.

**The durability test.** A durable moat needs private context that is not
portable, structural economics favouring the challenger, and incompatibility
with the incumbent's model. Temporary advantages are non-proprietary data (which
eventually enters public training corpora) and features an incumbent can simply
copy.

**Relevance to Metropolis, and it cuts both ways.** It supports the
knowledge-compaction claim directly: reading curated knowledge instead of
re-deriving context lowers cost per answer, which is exactly McKee's
structural-economics criterion. It also indicts any claim resting on reusable
machinery alone, since machinery copies without self-harm. See "The
counter-positioning frame" below, and `docs/private-thesis.md` section "Why the
shared layer is defensible" for the worked answer.

**Follow-up:** the ailexandria node `source-mckee-linkedin-counter-positioning-unverified`
still carries the stale unverified status and should be re-landed as verified.

---

## Lineage sources — the ideas the thesis positions itself against

These are **not evidence for the three claims** and should not be counted as
such. They are the prior arguments Metropolis says it is an evolution of, cited
so the public "lineage" copy (homepage banner, How It Works § "Where this comes
from") describes them accurately instead of from memory. Their job is framing;
the claims still have to be carried by the evidence below.

**Marc Andreessen, ["Why Software Is Eating the
World"](https://a16z.com/why-software-is-eating-the-world/), The Wall Street
Journal, 2011-08-20** (a16z hosts the reprint). Verified by direct fetch:
author, venue, and date confirmed. The thesis in its own words — "Software is
eating the world" — with the operative prediction being that "many more
industries [will] be disrupted by software, with new world-beating Silicon
Valley companies doing the disruption."

Relevance, stated precisely so the copy does not overreach: Andreessen's
argument is about software companies disrupting industries **from the
outside**. It says nothing about the internal operation of the disrupting
company, which in 2011 still ran on people, meetings, and handoffs. Metropolis's
"evolution" claim is therefore a genuine extension rather than a restatement:
the next thing software composes is the company itself. Note this is a framing
claim, not an evidenced one — no source here demonstrates that agent-run
business functions outperform human ones at scale.

**a16z's platform model.** The firm's second structural idea — an in-house
operating platform (talent, recruiting, marketing, business development) shared
across the portfolio as a differentiator beyond capital — is described in the
public copy as the thing Metropolis reimplements as agents over a compounding
knowledge base. **Status: not separately sourced here.** It is widely known and
uncontroversial, but if public copy ever makes a specific factual claim about
how a16z's platform is staffed, sized, or performs, that claim needs its own
verified source first. Today's copy stays at the level of the general model.

**James Everingham (Guild AI), ["The AI control plane for
agents"](https://linearb.io/dev-interrupted/podcast/james-everingham-guild-ai-control-plane-agents),
Dev Interrupted podcast (LinearB).** Verified by direct fetch 2026-08-28. This
is the source for "control plane" as established industry vocabulary rather
than a Metropolis coinage. Everingham defines it as centralized infrastructure
that lets an organization govern, audit, and scale agent workflows, set against
what he calls "single player mode," where engineers run agents independently and
"people just give it access to everything and suddenly there's passwords and
security keys and malware being installed." The capabilities he names are access
controls, auditability, per-agent cost visibility, and configurable guardrails.

Relevance: it grounds the control-plane half of the thesis in an outside
definition, and his warning that vendor-owned solutions "will probably lock you
in and limit you more to their solutions" is independent support for the
build-in-house argument used in the public FAQ. **Note the limit, which
complicates rather than supports:** he expects most organizations to combine
tooling rather than build everything internally. This source therefore backs
owning the control plane to avoid lock-in; it does not back a general claim that
building the whole operating layer in-house is correct for everyone.

**A caution that applies to all lineage copy.** Positioning against a
well-known thesis borrows credibility cheaply. Every lineage claim on the site
should still answer "and what is the reason to believe the evolution works?"
from the evidence sections below — the counter-positioning section in
particular, which is the reason the shared machinery cannot be called the moat.

---

## Claim 1 — the machinery of company-building can be reused

### Support

**Bessemer Venture Partners (Kent Bennett, Byron Deeter, Mike Droesch et
al.), ["Part I: The Future of AI Is
Vertical"](https://www.bvp.com/atlas/part-i-the-future-of-ai-is-vertical),
BVP Atlas, 2024-09-03.** Argues vertical AI addresses markets legacy SaaS
never reached because it automates language-intensive professional work
directly (legal, healthcare, accounting, finance), and projects vertical AI's
market cap will be "at least 10x" legacy vertical SaaS. Relevant because it's
the strongest independent case for *why planning-adjacent, knowledge-intensive
verticals* are the right place to point reusable machinery — not general
validation that reuse itself is a moat.

### Complicate / counter

**Matthew Burris, ["The Fatal Flaws in the Venture Studio
Model"](https://newsletter.venturestudioforum.org/p/the-fatal-flaws-in-the-venture-studio),
Venture Studio Forum newsletter, 2026.** Identifies nine structural tensions
in the studio model, all rooted in one problem: a studio must satisfy studio
investors, staff, entrepreneurs, and follow-on capital simultaneously, and
those interests pull apart. The sharpest data point: Fractal (a well-known
studio) ran "approximately one company per week with a staff of around 100,"
which worked out to roughly two FTEs of support per portfolio company —
i.e., "reusable machinery" does not automatically mean *sufficient* machinery
per company. This is a direct challenge to Claim 1: reuse lowers the cost of
starting something, it does not by itself prove each company gets enough
attention to become independently valuable.

**Maksim Malyy & Max Pog, ["Big Venture Studio Research 2024
(BVSR'24)"](https://inniches.com/big-venture-studio-research), inniches.com,
2024-12-17.** Independent, PitchBook-sourced study (2,246 cleaned deals, 38
studio-backed deals from 23 studios in the exit sample) — not
studio-industry self-reported. Findings *cut against* the "studio model =
outperformance" assumption that's easy to import uncritically: studios showed
a 24% exit rate vs. 38% for traditional pre-seed VC, and traditional VC
outperformed studios on both time-to-result and exit rate. Studios did beat
accelerators and founder-first VC. Net: the studio operating form is not, on
this evidence, a proven outperformer — reuse has to earn its advantage
company by company, not by citing the studio label. (Contrast this with
studio-industry self-reported statistics circulating elsewhere, e.g. GSSN's
own figures — those are marketing from an interested party and were
deliberately not used here; BVSR'24 is the more rigorous number to cite.)

---

## Claim 2 — AI changes the economics of build versus buy

### Support

**Anish Acharya (a16z), ["Notes on AI Apps in
2026"](https://a16z.com/notes-on-ai-apps-in-2026/), a16z.com, 2026-01-08.**
"We've figured out how to make code cheap, but it hasn't yet diffused across
the enterprise." Argues the constraint has shifted from cost-of-creation to
organizational diffusion — every team can become a software team because the
economic floor for building has dropped.

### Complicate / counter

The same piece is also the sharpest caution against overclaiming Claim 2:
Acharya frames the shift as **opportunity abundance** (more software gets
built with the same resources) rather than **headcount reduction** — he does
not argue AI is cutting the cost of *operating* a company, only of *creating*
software inside one. That distinction matters for the build-thesis language
in `docs/positioning.md`: "AI reduces the cost and time required to create
and operate companies" conflates two different claims (cheaper to build
software vs. cheaper to run a company) that the best available source treats
as separate. Downstream copy should keep them separate too, or cite evidence
for the operating-cost half specifically, which this brief does not yet have.

---

## Claim 3 — knowledge and operating capability can compound across a portfolio

### Support and counter (same source — read it in full before citing this claim)

**Martin Casado & Peter Lauten (a16z), ["The Empty Promise of Data
Moats"](https://a16z.com/the-empty-promise-of-data-moats/), a16z.com,
2019-05-09.** This is the single most load-bearing source for Claim 3, and it
cuts both ways. Core argument: data/knowledge accumulation alone rarely
creates a durable moat — most "data network effects" are actually "data scale
effects" with diminishing, not compounding, returns. But it also specifies
the conditions under which knowledge *does* compound into real defensibility:
domain-specific data where quality gains are large per unit of data (their
example: a cancer screen going from 80% to 85% accurate is a large product
difference), structurally proprietary access, and — most relevant to
Metropolis — **verticalization plus embedded expertise**: startups that "wade
through complex markets" and embed the learning into the product *and* the
sales process earn defensibility from accumulated domain knowledge, not
generic tooling.

Applied directly: `docs/positioning.md`'s Claim 3 ("knowledge and operating
capability can compound") is the *right shape* of claim per this source, but
only if what compounds is company-specific domain knowledge embedded in
product and workflow — not the shared scaffolding itself (the planning-space
tooling, the agent hierarchy). The scaffolding is closer to what this source
calls a "data scale effect": useful, not defensible on its own.

---

## The counter-positioning frame — strongest counter-argument to the thesis

This is the section the task exists to surface: the strongest objection to
Metropolis's thesis, written down rather than avoided.

**Antoine Buteau, ["Seven Powers in the AI Era Series #4: Counter-Positioning:
The AI Move Incumbents Cannot Copy
Cheaply"](https://www.antoinebuteau.com/seven-powers-in-the-ai-era-series-4-counter-positioning-the-ai-move-incumbents-cannot-copy-cheaply/),
2026-05-12.** Applies Hamilton Helmer's "7 Powers" counter-positioning
framework to AI-era startups. Core test, quoted directly because the exact
wording matters:

> "If the incumbent can copy you by adding a feature, cutting price, or buying
> the same model, you are not counter-positioned. You are early."

Defensibility under this frame comes specifically from forcing an incumbent
into **self-harm** if it copies you — margin compression, channel conflict,
cannibalized revenue — not from being faster, cheaper, or more AI-native.
Examples given: outcome-based pricing an incumbent can't match without
destroying its per-seat revenue; automating a human-intensive workflow an
incumbent can't match without gutting its own services margin.

**Applied to Metropolis's thesis, this is a real problem, not a rhetorical
one.** Claim 1 (reusable machinery) and Claim 3 (compounding knowledge) are,
by this test, exactly the kind of advantage that is *not* durable: reusable
agent infrastructure, shared workflows, and shared tooling are things a
well-capitalized competitor — another studio, a PE firm, an incumbent —
can copy without incurring any self-harm at all. There is no legacy revenue
line a traditional PE firm cannibalizes by adopting AI-native tooling; if
anything, doing so helps them. Copying Metropolis's machinery costs a
competitor nothing structurally.

That means the moat, if one exists, cannot be "we built good reusable
machinery" — per Buteau's test that is being early, not being defended, and
per the a16z data-moats piece it is closer to a scale effect than a network
effect. The defensible version of the thesis has to locate the moat
somewhere an incumbent *would* be harmed by copying it: most plausibly, in
the accumulated, portfolio-company-specific domain knowledge and operating
history (the a16z "verticalization + embedded expertise" condition), not in
the shared scaffolding that produces it. `docs/positioning.md` already
gestures at this distinction ("the advantage is not an architecture by
itself; it is the maintained knowledge, demonstrated capability, and
operating experience accumulated through repeated use") — this research base
is the evidence that the distinction is load-bearing, not optional phrasing.
Downstream copy should keep making it explicitly, and should not describe
the shared machinery itself as the moat (positioning's own language
guardrails already say this — this is the outside evidence for why).

---

## Claim 4: AI-native companies operate more efficiently

Added 2026-09-16 to fill the gap noted under Claim 2: the evidence there
covers the cost of building software, not the cost of operating a company.
Every source below was fetched and read directly on 2026-09-16. Read the
counter section before citing the support section; on this claim the two
halves are close to evenly weighted.

The short version: there is good evidence that AI-native companies reach
revenue faster with fewer people, and good controlled evidence that AI raises
output in specific, well-defined work. There is not yet evidence that
AI-native companies are more profitable, more durable, or better run overall,
and the economy-wide productivity signal is still close to zero.

### Support

**Erik Brynjolfsson, Danielle Li & Lindsey Raymond, ["Generative AI at
Work"](https://www.nber.org/papers/w31161), NBER Working Paper 31161,
2023-04 (revised 2023-10), published in The Quarterly Journal of Economics
140(2), 2025.** The strongest independent evidence here: peer-reviewed,
field data rather than a survey. Studies the staggered rollout of a GPT-based
assistant to 5,179 customer support agents at one firm. Issues resolved per
hour rose 14% on average, 34% for novice and low-skilled workers, with minimal
impact on experienced, highly skilled workers. Customer sentiment and employee
retention also improved. Relevant because it is causal evidence that AI raises
the output of a real operating function, not just of software creation. Limits
to carry into copy: one firm, one function, an assistive tool with a human in
the loop, and gains concentrated in less experienced staff. It supports "AI
makes operating work more productive"; it does not show a company run mostly
by agents.

**Lauren Thomas (Stripe), ["Inside the growth of the top AI companies on
Stripe"](https://stripe.com/blog/inside-the-growth-of-the-top-ai-companies-on-stripe),
stripe.com, 2025-06-30.** Payments data, not a survey: "the top 100 AI
companies on Stripe achieved annualized revenues of $1 million in a median
period of just 11.5 months, about 4 months ahead of the fastest-growing SaaS
companies" at the height of the subscription boom. AI companies founded
2020 to 2023 reached revenue milestones about three times faster than those
founded before 2020. Relevant because it is observed revenue rather than
self-report, and supports "faster time to revenue." Caveats: it is the top 100
by revenue, so it describes winners, not the typical AI company. It says
nothing about headcount or cost. The fuller methodology sits in Stripe's
"Indexing the AI economy" report, which was not read here. Stripe sells
payments to these companies and benefits from the AI growth story, so treat it
as data from an interested party, if a credible one.

**Bessemer Venture Partners (Kent Bennett, Talia Goldberg, Janelle Teng Wade,
Sameer Dholakia, Mike Droesch et al.), ["The State of AI
2025"](https://www.bvp.com/atlas/the-state-of-ai-2025), BVP Atlas,
2025-08-13.** The only source found with a direct revenue per employee
comparison. Built from "20 high-growth, durable AI startups across our
portfolio and beyond," split into two archetypes. "Supernovas" (ten companies
surveyed) averaged about $40M ARR in their first year of commercialization,
about $125M in the second, and "$1.13M ARR/FTE, which is 4-5x above a typical
SaaS benchmark," but with gross margins around 25% and "often negative."
"Shooting Stars" averaged about $3M ARR in year one, about $12M in year two,
60% gross margins, and about $164K ARR per FTE. Relevant because it is the
nearest thing to evidence for "fewer people per dollar of revenue." The caveats
are load-bearing, and Bessemer states them itself: the Supernova numbers come
from ten hand-picked outliers, the revenue "may appear vulnerable" because fast
adoption can reflect low switching costs, margins are thin, and "we haven't
seen five years of data yet." The "typical SaaS benchmark" is not specified.
The more representative archetype, Shooting Stars, has revenue per employee in
normal SaaS territory. Bessemer is a VC with money in the category, so this is
an interested party's data. It supports "the best AI-native companies do more
with far fewer people." It does not support "AI-native companies generally run
4-5x leaner."

### Complicate / counter

**Aditya Challapally, Chris Pease & Ramesh Raskar (MIT Project NANDA), ["The
GenAI Divide: State of AI in Business
2025"](https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf),
2025-07 (the copy read here is a PDF hosted by mlq.ai, labelled v0.1 and
"Preliminary Findings").** The source of the widely repeated "95% of AI pilots
fail" figure. Its words: "95% of organizations are getting zero return" despite
$30 to 40 billion in enterprise GenAI investment, and "only 5% of custom
enterprise AI tools reach production." Method: a review of 300+ public AI
initiatives, 52 organization interviews, and 153 survey responses from senior
leaders at four conferences, January to June 2025. Success means deployment
beyond pilot with measurable KPIs, assessed six months post-pilot. The authors'
own limitations are significant: figures are "directionally accurate based on
individual interviews rather than official company reporting," success
definitions vary across organizations, selection bias is possible, and the
six-month window "may be insufficient," potentially understating success. So
the 95% is a soft number and should not be repeated as a hard fact in either
direction.

Relevant because it is the most-cited evidence that AI is not paying off in
enterprises, and a skeptic will raise it. It also contains three findings that
bear on Metropolis directly, and they cut in the thesis's favor. The failure
cause it names is "learning": most systems "do not retain feedback, adapt to
context, or improve over time," which is the problem a maintained knowledge
base is meant to address. Externally partnered deployments reached production
about 67% of the time versus about 33% for internal builds (self-reported, and
the authors warn the correlation may not be causal), which supports the
consulting offer. And the clearest ROI came from back-office work that replaced
outsourcing and agency spend, "without material workforce reduction." The
fair public framing is that the report shows AI transplanted into existing
enterprises mostly stalls, not that AI does not work. That is an argument for
AI-native operating design, but it is an inference, not something the report
measured.

**[Superseded as the current METR citation; see Freshness update below.]**
**METR, ["Measuring the Impact of Early-2025 AI on Experienced Open-Source
Developer
Productivity"](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/),
2025-07-10, and the follow-up ["We are Changing our Developer Productivity
Experiment Design"](https://metr.org/blog/2026-02-24-uplift-update/),
2026-02-24.** A randomized controlled trial: 16 experienced developers, 246
real issues in large, mature open-source repositories. With AI tools allowed,
tasks took 19% longer, while the developers themselves estimated AI had made
them faster. METR now labels that result historical. The February 2026 rerun
estimated a speedup of -18% (CI -38% to +9%) for returning developers and -4%
(CI -15% to +9%) for newly recruited ones, but METR calls its own data "only
very weak evidence" because 30% to 50% of developers declined to do some tasks
without AI, which biases the estimate downward; it describes the figure as a
lower bound and is redesigning the study. Relevant because it is the best
controlled evidence that perceived AI productivity can exceed measured
productivity, especially for experts on complex work. It is also a caution
against citing it as "AI makes people slower," since METR itself no longer
stands behind that as a current finding.

**Anders Humlum & Emilie Vestergaard, ["Still Waters, Rapid Currents: Early
Labor Market Transformation under Generative
AI"](https://www.nber.org/papers/w33777), NBER Working Paper 33777, 2025-05
(revised 2026-03; previously circulated as "Large Language Models, Small Labor
Market Effects").** Links Danish adoption surveys to administrative earnings
and hours records. Workers report real benefits, and most employers in exposed
occupations have adopted chatbots, yet the paper estimates "precise null
effects on earnings and recorded hours at both the worker and workplace
levels, ruling out effects larger than 2% two years after the launch of
ChatGPT." The authors find the measured effects are "an order of magnitude
smaller" than the time savings workers report, and 85% of users say they
reallocate saved time to other tasks. Not peer reviewed. Relevant because it
is the strongest independent evidence that bolting chatbots onto existing jobs
has not yet produced measurable economic gains at the workplace level. As with
NANDA, the defensible reading for Metropolis is that tools added to an
unchanged organization reorganize tasks rather than cut cost; the paper does
not study companies designed around AI from the start.

### The bubble objection

The skeptic's "isn't AI a bubble?" is really two questions, and the evidence
answers them differently. Is investment and valuation running ahead of
returns? Possibly, and credible investors say so. Is the technology and its
adoption real? Yes, on independent data. Copy should concede the first and
argue from the second, rather than deny that a bubble exists.

**Howard Marks (Oaktree Capital), ["Is It a
Bubble?"](https://www.oaktreecapital.com/insights/memo/is-it-a-bubble),
Oaktree memo, 2025-12-09.** Written by the investor known for his January 2000
"bubble.com" memo, which makes him a credible and non-promotional voice here.
Draws on Hobart and Huber's distinction between ordinary mean-reversion
bubbles and "inflection bubbles," which fund the installation of a real
technology and destroy investor wealth in the process: "The railroads were a
bubble and they transformed America. Electricity was a bubble, and it
transformed America." His verdict refuses a label, "virtually no one can say
for sure," while noting that if the enthusiasm does not produce a bubble "that
will be a first." Evidence he cites for real demand: Anthropic's revenue
growth, Cursor going from $1M revenue in 2023 to $100M in 2024, and roughly
one billion AI users. His worries are debt-financed infrastructure, circular
deals, off-balance-sheet vehicles, and whether chips last long enough to repay
the debt that bought them. Relevant because it gives copy an honest answer:
the financial cycle may well overshoot, and that is a question about
infrastructure investors' returns, not about whether a company that uses AI
to operate gets the benefit. Railway users did well even when railway
investors did not. That last sentence is our analogy built on his; it is not
his claim.

**Jeffrey S. Allen (Federal Reserve Board), ["Monitoring AI Adoption in the
U.S.
Economy"](https://www.federalreserve.gov/econres/notes/feds-notes/monitoring-ai-adoption-in-the-u-s-economy-20260403.html),
FEDS Notes, 2026-04-03.** Independent, non-promotional adoption data,
reconciling three surveys. About 18% of firms had adopted AI as of year-end
2025 (Census Business Trends and Outlook Survey). About 41% of individuals
report work-related generative AI use (Real-Time Population Survey). About 78%
of the labor force works at firms that have adopted AI (Survey of Business
Uncertainty, employment-weighted, November 2025). Relevant because it shows
adoption is real and broad, and it explains why headline adoption numbers
vary so widely: firm counts, worker counts, and employment-weighted counts
measure different things. It makes no productivity claim and says so, so it
answers "is anyone actually using this?" and nothing more.

The Stripe payments data above also belongs here: real customer revenue
arriving faster than in the SaaS boom is the kind of evidence a pure
speculative bubble lacks.

### Freshness update 2026-09-16

Why this exists: the captain's view is that LLMs became genuinely useful for
real work around December 2025, so evidence gathered on 2023 to early 2025
models reads as stale. This pass looked for December 2025 to September 2026
evidence. Older entries above are kept; where one is superseded for public
copy, it says so here.

**Ivan Yotzov, Jose Maria Barrero, Nicholas Bloom, Philip Bunn, Steven J. Davis
et al.,
["Firm Data on AI"](https://www.nber.org/papers/w34836), NBER Working Paper
34836, 2026-02 (revised 2026-03).** Surveys of nearly 6,000 senior executives
in the US, UK, Germany, and Australia. 69% of firms actively use AI, but over the past three
years "nine-in-ten" executives reported no impact on employment or
productivity. They expect a 1.4% productivity gain and a 0.7% employment
reduction over the next three years. Relevant because it is the freshest large,
independent firm-level measure, and it agrees with Humlum and Vestergaard:
adoption is broad, measured impact is still small. Survey of executives'
perceptions, not measured output. **Use alongside Humlum and Vestergaard; it
is the fresher headline.**

**METR, ["Measuring the Self-Reported Impact of Early-2026 AI on Technical
Worker Productivity"](https://metr.org/blog/2026-05-11-ai-usage-survey/),
2026-05-11.** 349 technical workers (software engineers, researchers,
academics, founders) surveyed February to April 2026. Median self-reported
value increase from AI of 1.4 to 2x, median speed increase 3x; respondents
put March 2025 at 1.3x and forecast 2.5x for March 2027. METR's own caveat is
the point: "survey results are not necessarily grounded in reality," its 2025
trial found people "overestimated AI's effect on their time spent on tasks by
40 percentage points on average," and survey estimates "have tended to be
greater than those from field experiments." Relevant because it is the
freshest METR data and shows the perceived jump since early 2025, while METR
itself warns against taking it at face value. **Supersedes the July 2025 METR
trial as the current METR citation, together with the February 2026 update
already listed above. Do not use "19% slower" in current copy.**

**Guillermo Cruces, Diego Fernández Meijide, Sebastian Galiani, Ramiro H.
Gálvez & María Lombardi, ["Does Generative AI Narrow Education-Based
Productivity Gaps? Evidence from a Randomized
Experiment"](https://www.nber.org/papers/w34851), NBER Working Paper 34851,
2026-02 (revised 2026-05).** A randomized experiment with 1,174 adults aged
25 to 45 on an incentivized, workplace-style business problem. "AI increases
performance for all participants, with substantially larger gains for
lower-education individuals," closing "about three-quarters" of the education
gap. When AI was removed, treated participants did no worse than controls, so
the gains "are not purely driven by delegation." Relevant as the freshest
randomized evidence, and it replicates the 2023 pattern (biggest gains for
less experienced people) with newer tools. Online experiment, not a firm, and
the abstract does not name the model used. **Cite next to Brynjolfsson et al.
as the current randomized result; it does not replace the field study.**

**Joshua S. Gans, ["Artificial Jagged Intelligence: When AI Benchmarks
Misstate Deployment Value"](https://www.nber.org/papers/w34712), NBER Working
Paper 34712, 2026-01 (revised 2026-06).** A theory paper, not data. Because AI
performance is uneven across tasks, "a system that looks reliable on average
can fail on the tasks a given workflow uses most," and "deployment loss exceeds
benchmark loss exactly when the tasks an organisation uses most are those the
system handles worst." Relevant as a current, rigorous framing of why
benchmark progress does not guarantee results in a specific business.

**Bubble objection: Bank for International Settlements, ["Annual Economic
Report 2026, Chapter I: Progress and
peril"](https://www.bis.org/publications/aer-2026/progress-peril),
2026-06-28.** The central banks' bank, independent and not promotional. "The
five largest hyperscalers are set to spend over a trillion US dollars on
AI-related capital expenditure from 2025 through 2026," and these commitments
are "outpacing earnings and the free cash flow of these firms, leading some to
issue debt." It draws the same analogies Marks did, from a more cautious
institution: canal mania, railway mania, 1920s electrification, and the
dot-com boom "all shared one common trait: a genuine technological
breakthrough that attracted capital in excess of what commercial returns could
ultimately justify," and those episodes ended "with an eventual reversal in
investment, inducing economy-wide recessions." On productivity: task-level
studies show "large efficiency gains, often to the tune of between 20 and 50%
in time savings," while "aggregate productivity growth estimates tend to be
more conservative at less than 1% over a long horizon." Relevant because it is
the most authoritative 2026 statement of exactly the post's position: the
technology is real, the investment cycle may overshoot, and the benefit at the
task level is much larger than at the level of the whole economy. **Use this
as the lead bubble source; keep Marks as the investor voice.**

Checked, nothing newer found: no updated Stripe or Bessemer revenue-efficiency
benchmark was verified in this pass, so the 2025 figures stand with their
caveats. Stanford AI Index 2026 (Claim 6) is already current.

### What this evidence supports in public copy, and what it does not

Supported, with the caveats above:

- AI measurably raises productivity in defined operating work such as customer
  support (Brynjolfsson et al.).
- The leading AI-native companies reach revenue faster than the fastest SaaS
  companies did (Stripe), and the best of them generate far more revenue per
  employee (Bessemer, outliers only).
- Adding AI tools to an unchanged organization mostly fails to show up in
  returns, earnings, or hours (NANDA, Humlum and Vestergaard). This is the
  honest setup for an argument that the company has to be designed around AI.
- AI adoption is real and broad even if investment runs ahead of returns
  (Fed note, Marks).

Not supported by anything found:

- That AI-native companies are generally more profitable, cheaper to run, or
  more durable than conventionally staffed ones. Bessemer's standout cohort has
  thin or negative gross margins, and no source measures operating cost or
  long-run survival.
- Any specific multiple ("4-5x leaner," "10x more efficient") applied to
  AI-native companies in general.
- That agent-run business functions outperform human-run ones at scale. The
  controlled evidence is about humans assisted by AI.
- That AI is not a bubble. The credible position is that it may be one
  financially while the technology is durable.
- "95% of AI projects fail" as a hard statistic, or "AI makes developers 19%
  slower" as a current finding.

---

## Claim 5: AI projects stall from how AI is used, not whether it works

Added 2026-09-16. The argument this section tests: AI is a language tool, not
a genie. Companies and startups that use only the tip of the iceberg (prompts,
off-the-shelf agents, paying for tokens) get expensive and highly variable
results. Startups already fail at a high base rate, so a tip-only AI startup
carries compounded risk. Every source below was fetched and read on
2026-09-16 unless marked otherwise. Gartner's own pages, HBS pages, McKinsey,
Carta, and SSRN refused automated fetches (HTTP 403); where a source was read
through a reputable reprint instead, that is stated.

The short version: the evidence supports "AI performs well inside its
capability boundary and badly outside it," "agent output is inconsistent,"
and "costs and unclear value are the stated reasons projects get cancelled."
Startup base rates are well documented. **No source measures whether startups
that use AI shallowly fail more often than ones that build deeper, so the
compounded-risk argument is our inference, not evidence.**

### Support: startup base rates

**U.S. Bureau of Labor Statistics, Business Employment Dynamics, ["Table 7.
Survival of private sector establishments by opening
year"](https://www.bls.gov/bdm/us_age_naics_00_table7.txt), all private
industries, data through March 2025.** Independent government data. Of
establishments opened in the year to March 2015, 79.6% survived one year,
50.2% survived five years, and 34.7% survived ten years. The March 2020
cohort's five-year survival was 51.4%; the March 2024 cohort's one-year
survival was 77.9%. Relevant because it is the most defensible base rate: about
half of new businesses are gone within five years and about two thirds within
ten. Caveats: it counts employer establishments (locations with payroll), not
firms and not venture-backed startups, and a closed location is not always a
failed company.

**Shikhar Ghosh (Harvard Business School), as reported in John Cook,
["Hard truth: Report says 75% of VC-backed startups
fail"](https://www.geekwire.com/2012/hard-truth-report-75-percent-startups-fail/),
GeekWire, 2012-09-21, summarizing a Wall Street Journal report that week.**
Read secondhand: the HBS and WSJ pages could not be fetched. "As many as 75
percent of venture-backed companies never return cash to investors, with 30 to
40 percent of those liquidating assets where investors lose all of their
money," based on "more than 2,000 venture-backed companies that raised at
least $1 million from 2004 to 2010." Relevant because it is the standard
independent figure for venture-backed failure, and the definition matters:
"never return cash to investors" is much broader than shutting down. It is old
data and unpublished research reported through the press, so cite it as "as
many as three in four venture-backed companies never return investors' cash,"
not as "75% of startups die."

**SimpleClosure, ["The 2025 Startup Shutdown: More Capital, Later Stages, and
the First AI
Reckoning"](https://finance.yahoo.com/news/2025-startup-shutdown-more-capital-140000985.html),
Business Wire press release, 2025-12-23.** The only data found on AI startup
shutdowns specifically. Based on "SimpleClosure's annual analysis of hundreds
of wind-downs" on its own platform. AI represents "nearly 16% of closures," and
"AI wrappers and application-layer tools built quickly on commoditized models,
without deep defensive moats, are facing the sharpest correction."
"Infrastructure and developer tool companies fail less frequently, but when
they do, they have raised roughly twice the capital of their wrapper
counterparts." Relevant because it is the closest thing to evidence that thin
AI companies fail disproportionately. The limits are severe: SimpleClosure
sells shutdown services and this is a press release, the sample is its own
customers, no failure rate or denominator is given (16% of closures says
nothing about whether AI companies close more often than others), and
"wrapper" is not defined. Treat it as an interested party's directional
observation, not a measured rate.

### Support: variability, cost, and cancelled projects

**Gartner, "Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled
by End of 2027," press release 2025-06-25, read as reported by Reuters
([via Yahoo
Finance](https://finance.yahoo.com/news/over-40-agentic-ai-projects-100510683.html)),
because [Gartner's
page](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027)
refused the fetch.** Over 40% of agentic AI projects will be cancelled by the
end of 2027 because of escalating costs, unclear business value, or inadequate
risk controls. Anushree Verma, Senior Director Analyst: "Most agentic AI
projects right now are early stage experiments or proofs of concept that are
mostly driven by hype and are often misapplied." Gartner also estimates only
about 130 of the thousands of vendors selling "agentic AI" are real, the rest
being "agent washing." The same release predicts at least 15% of day-to-day
work decisions will be made autonomously by agentic AI by 2028, and 33% of
enterprise software applications will include it. Relevant because an
independent analyst names misapplication and cost as the failure modes, while
still expecting agents to matter. Caveats: it is a prediction, not a
measurement, and Gartner sells advisory services on exactly this problem.

**Gartner, "Gartner Predicts 30% of Generative AI Projects Will Be Abandoned
After Proof of Concept By End of 2025," 2024-07-29, read as reported by [THE
Journal](https://thejournal.com/articles/2024/08/06/gartner-30-of-gen-ai-projects-will-be-abandoned.aspx),
2024-08-06.** At least 30% of GenAI projects abandoned after proof of concept
because of "poor data quality, inadequate risk controls, escalating costs or
unclear business value." Rita Sallam: executives "are impatient to see returns
on GenAI investments, yet organizations are struggling to prove and realize
value." Deployment costs cited at $5 million to $20 million. Same caveats as
above. Search results summarize a later Gartner article as saying at least 50%
were in fact abandoned; that page could not be fetched, so do not cite the 50%
figure.

**Shunyu Yao, Noah Shinn, Pedram Razavi & Karthik Narasimhan, ["τ-bench: A
Benchmark for Tool-Agent-User Interaction in Real-World
Domains"](https://arxiv.org/abs/2406.12045), arXiv, 2024-06-17** (authors
from Sierra, which sells customer service agents). Introduces pass^k, the
chance an agent succeeds on the same task in all of k attempts. "Even
state-of-the-art function calling agents (like gpt-4o) succeed on <50% of the
tasks, and are quite inconsistent (pass^8 <25% in retail)." Relevant because it
is the cleanest measured evidence of "highly variable results": an agent that
sometimes succeeds is not one you can run a business function on. Caveat: the
models tested are from 2024 and newer models score higher, so cite the
inconsistency finding and the metric, not the specific percentages as current.

**Horace He (Thinking Machines Lab), ["Defeating Nondeterminism in LLM
Inference"](https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/),
2025-09-10.** Running the same prompt 1,000 times at temperature 0 (the
setting meant to be deterministic) on Qwen3-235B produced 80 unique
completions. The cause is that inference servers batch requests
nondeterministically with load, and it is fixable: with batch-invariant
kernels, all 1,000 completions were identical, at a performance cost.
Relevant because it shows variability is partly a property of how inference is
run, not only of the model, which supports the argument that the layer under
the prompt determines reliability. Thinking Machines is an AI lab with a stake
in the fix.

**Dev Interrupted (LinearB's podcast), the episode the captain remembers.**
LinearB's sitemap lists 341 episode pages. All were fetched and searched for
"control plane," cost, and variability language. No single episode states the
whole argument ("large spend, highly variable results, therefore a control
plane"), so the memory is most likely a blend of two:

- **["How to see in the dark factory | LaunchDarkly's Cameron
  Etezadi"](https://linearb.io/dev-interrupted/podcast/launchdarkly-cameron-etezadi-dark-factory-agent-runtime-frameworks),
  2026-07-14, host Andrew Zigler, guest Cameron Etezadi (CTO, LaunchDarkly).**
  The closest match on cost plus variability. On spend: "the amount of tokens I
  spend on testing versus actually writing, borderline obscene." On
  variability: "same question twice, I get two different answers from the same
  model," and "people are looking for solutions that bring them back to a
  deterministic outcome in a, in a probabilistic world, and that comes from
  guardrails and from controlling agents." Outputs "can change even though the
  code hasn't changed," and "things that tested perfectly in the lab" no longer
  work perfectly in production. The host frames the fix as "a runtime layer for
  the agents" and says "now you have a control plane for that." Etezadi also
  gives a positive worked example: a rewrite he would have pitched as eight
  engineers for a year, which he estimates at a conservative $5 million over
  two years, done by two engineers in one quarter while spending "about the
  equivalent of their salary in tokens." That is his own anecdote, not audited.
- **["Your engineers need an AI control plane, not more tools | Guild.ai's
  James
  Everingham"](https://linearb.io/dev-interrupted/podcast/james-everingham-guild-ai-control-plane-agents),
  2026-03-10, host Andrew Zigler, guest James Everingham (CEO, Guild.ai).**
  Already cited above under "Lineage sources." The closest match on the phrase
  "control plane": "you need a control plane to, to be able to manage these,"
  defined as infrastructure "that allows you to govern these things," so you
  can "understand what these agents are doing in your infrastructure instead of
  just give them access to everything and let them yolo it," including being
  able "to understand the costs of what each of these are doing." The host
  names "runaway costs" among the risks. Variability of results is not a theme.

Both guests sell the product they recommend (LaunchDarkly AgentControl is in
the show notes; Guild.ai is a control plane), and LinearB sells engineering
productivity tooling. These are practitioner opinions from interested parties,
useful as vocabulary and as quotes, not as evidence.

### Support: structured use beats ad hoc use

**Fabrizio Dell'Acqua, Edward McFowland III, Ethan Mollick, Hila
Lifshitz-Assaf, Katherine Kellogg, Saran Rajendran, Lisa Krayer, François
Candelon & Karim R. Lakhani, "Navigating the Jagged Technological Frontier,"
Organization Science, 2026 (DOI 10.1287/orsc.2025.21838; HBS working paper
2023), read through co-author [Karim Lakhani, "Discovering AI's jagged
frontier, and what we've learned
since"](https://professorkl.substack.com/p/discovering-ais-jagged-frontier-and),
2026-03-16,** because the journal and HBS pages refused the fetch. A
randomized experiment with 758 BCG consultants. On tasks inside AI's
capability frontier, consultants with GPT-4 completed 12.2% more tasks, 25.1%
faster, "with average scores rising roughly 30% above the control group"
(43% for lower-skilled workers). On a task deliberately outside the frontier,
"participants with AI access were 19 percentage points less likely to produce
a correct recommendation than those without it." Lakhani's conclusion since:
"workflow designs that require independent human analysis before AI
consultation, parallel validation mechanisms, or separation between
AI-assisted drafting and final judgment may be necessary." Note the quality
figure: early press, including the 2023 Harvard Crimson write-up, reported
"40%"; the author now writes "roughly 30%," so use the lower number.
Relevant because it is the strongest controlled evidence for "a language tool,
not a genie": the same tool helps a lot or actively hurts depending on whether
the task fits it, and the recommended remedy is structure, not better
prompting.

MIT NANDA's "GenAI Divide" (see Claim 4) also belongs here: it attributes
stalled pilots to systems that "do not retain feedback, adapt to context, or
improve over time," not to model quality.

### Complicate / counter

**No source tests the compounded-risk claim.** Base rates are real (BLS,
Ghosh) and one interested party says thin AI companies are shutting down
visibly (SimpleClosure), but nothing compares failure rates of shallow versus
deep AI use, and risks do not simply multiply: a startup's base failure rate
already includes most reasons a tip-only product would fail. Public copy can
say startups fail often and that thin AI products are easy to copy; it should
not say tip-only AI startups are measurably more likely to fail.

**Thin products have been among the biggest winners.** The fastest growers in
Claim 4 (Stripe's top 100; Bessemer's Supernovas, which Bessemer itself says
face "thin wrapper" concerns) include companies built on top of third-party
models. Tip-of-the-iceberg usage has produced some of the fastest revenue
growth on record. Depth may predict durability, but that is not demonstrated,
and Bessemer's own caveat is that "we haven't seen five years of data yet."

**The stated reasons for failure are not all about usage.** Gartner lists
"unclear business value" alongside cost and risk controls, and NANDA's
authors say their success figures are soft. Some projects stall because the
use case was wrong, which a better control plane does not fix.

**Depth has its own failure mode.** NANDA found external partnerships reached
deployment about twice as often as internal builds (self-reported, possibly not
causal). Building deep infrastructure in-house is not automatically the
structured path; for many companies, buying it is. Everingham, above, also
expects most organizations to combine tooling rather than build everything.

**Some variability is being engineered away below the application.** Thinking
Machines shows determinism is achievable at the inference layer, and METR's
2026 update (Claim 4) suggests tools improved quickly. Part of today's
variability argument may date fast.

**Not cited, and why.** CB Insights' "top reasons startups fail" is built from
founders' self-reported postmortems and was not needed given BLS and Ghosh.
Carta's shutdown data and McKinsey's "The state of AI in 2025" (whose widely
quoted finding is that high performers are about three times as likely to
redesign workflows) both refused the fetch and were not verified, so neither is
cited here. The McKinsey finding would directly support this claim and is worth
reading manually before public use.

### Freshness update 2026-09-16

**KPMG, ["AI Investment and Agent Deployment Hold Steady Amid Growing Focus on
Pragmatism"](https://kpmg.com/us/en/media/news/q2-ai-pulse-2026.html), AI
Quarterly Pulse Survey Q2 2026, press release 2026-06-24.** 204 US C-suite and
business leaders at companies with $1 billion or more in revenue, surveyed April
28 to May 25, 2026. AI agent deployment held at 53% (55% the previous quarter),
while organizations orchestrating multiple agents across workflows doubled from
9% to 18%. "Only 26% of organizations report full, real-time visibility into AI
operating costs." Employee resistance rose to 20% from 5%, driven by trust and
ethical concerns (53%) and worries about added workload or complexity (51%).
KPMG's leader: "good governance is what ties scale, performance and value
together." Relevant because it is the freshest data on agents in production and
directly supports two Claim 5 points: cost visibility is missing for most
companies, and governance is where value comes from. Interested party: KPMG
sells AI transformation and governance consulting; small sample.

**NBER "Firm Data on AI" (2026-02, see the Claim 4 freshness update).** Nine in
ten executives reported no productivity or employment impact from AI over the
past three years. The freshest independent counterpart to NANDA's soft "95%"
figure. **Prefer it to NANDA's 95% in public copy.**

Checked, nothing newer found:

- **MIT NANDA:** no 2026 follow-up to "The GenAI Divide" was found. The July
  2025 report remains the source and is increasingly dated; recent articles
  still recirculate its 95% figure.
- **Gartner:** 2026 agentic AI predictions and surveys are widely reported, but
  gartner.com refused every fetch, so none are cited. The June 2025 prediction
  (read through Reuters) stands, labelled as a prediction.
- **Forrester:** its Predictions 2026 post (Betsy Summers, 2025-11-12) says "We
  expect half of AI-attributed layoffs to be quietly reversed, with jobs
  returning offshore or at lower wages." It is a prediction, not a measurement.
  A widely repeated "55% of employers regret AI layoffs" figure attributed to
  Forrester does not appear in that post and was not verified; do not cite it.

### What this evidence supports in public copy, and what it does not

Supported:

- "Most new businesses do not last: about half close within five years" (BLS).
  "As many as three in four venture-backed companies never return investors'
  cash" (Ghosh, secondhand, 2004 to 2010 data).
- "AI is a powerful tool inside its limits and makes work worse outside them"
  (Dell'Acqua et al.).
- "AI agents are inconsistent: the same agent on the same task can succeed and
  then fail" (τ-bench, He).
- "Analysts expect many agent projects to be cancelled for cost, unclear value,
  and weak controls, and describe most as misapplied" (Gartner, as a
  prediction).
- "Getting reliable results takes structure: validation, separation of drafting
  from judgment, and control over what agents do" (Lakhani; the podcast guests
  as practitioner voices, flagged as vendors).

Not supported:

- That tip-only AI startups fail at a higher rate, or that their risk
  "compounds" with the base rate. This is our inference.
- That AI is not failing anywhere, or that every failure is a usage problem.
- "95%" or "50%" abandonment figures as hard numbers.
- That building deep infrastructure yourself is the reliable path for most
  companies.

---

## Claim 6: AI is a tool with real strengths, oversold limits, and real public skepticism

Added 2026-09-16 for the blog post "Not a genie," written for AI skeptics. The
argument: AI is a language tool, not a genie; it is genuinely good at some
things and bad at others; marketing set expectations it cannot meet; and it
should be used responsibly. Every source below was fetched and read on
2026-09-16. Where a primary page refused the fetch, the section says what was
read instead. This section does not repeat Claim 4 and 5 sources (NBER customer
support, METR, the jagged frontier study, NANDA, Gartner's cancellation
predictions); cite those alongside it.

The short version: skepticism is the majority position in the US and is
rising, and it is shared in part by AI experts on the specific point of
inaccurate output. Overpromising is documented in regulator actions and in
measured tests of vendor claims. The capability picture is sharply uneven. The
evidence also cuts against pure skepticism: capabilities are improving fast,
global sentiment is warming even as US sentiment cools, and the energy picture
is significant but smaller than it is often presented.

### Support: the public is skeptical, and the gap with experts is wide

**Pew Research Center, ["How the US Public and AI Experts View Artificial
Intelligence"](https://www.pewresearch.org/internet/2025/04/03/how-the-us-public-and-ai-experts-view-artificial-intelligence/),
2025-04-03.** Two surveys: 5,410 US adults (August 12 to 18, 2024) and 1,013
AI experts (August 14 to October 31, 2024), the experts drawn from authors and
presenters at 21 AI conferences. 51% of the public is more concerned than
excited about AI in daily life, versus 15% of experts; 47% of experts are more
excited than concerned, versus 11% of the public. 56% of experts expect AI to
have a positive impact on the US over 20 years, versus 17% of the public. The
common ground matters most for this post: 66% of adults and 70% of experts are
highly concerned about inaccurate information from AI, and 55% of adults and
57% of experts want more control over how AI is used in their lives. Relevant
because it lets the post say that skeptics and experts agree on the core
problem, accuracy, even while they disagree on almost everything else.

**[Superseded for the current number by Pew 2026-08-18; see Freshness update
below.]** **Michelle Faverio & Emma Kikuchi (Pew Research Center), ["What the data says
about Americans' views of artificial
intelligence"](https://www.pewresearch.org/short-reads/2026/03/12/key-findings-about-how-americans-view-artificial-intelligence/),
2026-03-12.** The trend line. In a June 2025 survey, 50% of US adults were more
concerned than excited, 10% more excited than concerned, and 38% equally both.
When Pew first asked in 2021, 37% were more concerned than excited. Only 44% have
at least some trust that the US will regulate AI well (March 2025). Relevant
because it shows concern rising for four years, not a passing reaction.

**Julie Ray (Gallup), ["Americans Cool Toward
AI"](https://news.gallup.com/poll/712751/americans-cool-toward.aspx),
2026-07-28.** The most recent data found. Gallup Panel web survey of 3,270 US
adults, May 4 to 11, 2026, probability-based, margin of error ±2.4 points. The
share saying AI does more harm than good rose from 31% in 2025 to 39% in 2026,
close to 2023's 40%, reversing two years of warming. Among 18 to 29 year olds it
rose from 36% to 47%. 27% trust businesses "a lot" or "some" to use AI
responsibly, down from 31% in 2025. 79% expect AI to reduce US jobs over the
next decade, up from 73%. Relevant because it is the strongest current evidence
that skepticism is growing, including among the young people who use AI most.

**Stanford HAI, ["The 2026 AI Index Report: Public
Opinion"](https://hai.stanford.edu/ai-index/2026-ai-index-report/public-opinion),
2026-04.** Global view. The share saying AI products offer more benefits than
drawbacks rose from 55% in 2024 to 59% in 2025, while the share saying AI
products make them nervous rose to 52%. The US reported the lowest trust in its
own government to regulate AI responsibly of any country surveyed, at 31%.
Relevant because it shows optimism and anxiety rising together, which fits a
"both things are true" post better than either camp's framing. The chapter
highlights page does not name the underlying surveys; read the full chapter
before quoting specific country figures.

### Support: marketing set expectations the product could not meet

**US Securities and Exchange Commission, ["SEC Charges Two Investment Advisers
with Making False and Misleading Statements About Their Use of Artificial
Intelligence"](https://www.sec.gov/newsroom/press-releases/2024-36),
2024-03-18.** The first "AI washing" enforcement actions. Delphia and Global
Predictions paid $225,000 and $175,000 in penalties. Global Predictions called
itself the "first regulated AI financial advisor" offering "Expert AI-driven
forecasts." Chair Gary Gensler: "Investment advisers should not mislead the
public by saying they are using an AI model when they are not. Such AI washing
hurts investors." Relevant because a regulator, not a critic, established that
AI marketing claims were false.

**US Federal Trade Commission, ["FTC Announces Crackdown on Deceptive AI
Claims and
Schemes"](https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes),
2024-09-25.** "Operation AI Comply," five cases. The headline one is DoNotPay,
which claimed its service could replace "the $200-billion-dollar legal
industry" without testing whether its "AI lawyer" performed at the level of a
human lawyer. Three others promised AI-powered online stores would earn
consumers large incomes. Chair Lina Khan: "Using AI tools to trick, mislead, or
defraud people is illegal." Relevant because the DoNotPay case is the cleanest
public example of the genie pitch: a claim that AI replaces a profession,
made without evidence.

**Varun Magesh, Faiz Surani, Matthew Dahl, Mirac Suzgun, Christopher D. Manning
& Daniel E. Ho (Stanford), ["Hallucination-Free? Assessing the Reliability of
Leading AI Legal Research Tools"](https://arxiv.org/abs/2405.20362), arXiv
2024-05-30; published in the Journal of Empirical Legal Studies, 2025.** The
first preregistered test of vendor claims. Providers had described their
systems as "eliminating" hallucinations or guaranteeing "hallucination-free"
citations. The tools from LexisNexis (Lexis+ AI) and Thomson Reuters (Westlaw
AI-Assisted Research, Ask Practical Law AI) "each hallucinate between 17% and 33%
of the time," although less than general-purpose GPT-4. "The providers' claims
are overstated." Relevant twice over: it is a measured gap between marketing
and performance from paid professional products, and it shows that grounding a
model in real documents helps but does not solve the problem.

**Klarna, ["Klarna AI assistant handles two-thirds of customer service chats in
its first
month"](https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/),
press release, 2024-02-27, and Kristen Doerer, ["Klarna changes its AI tune and
again recruits humans for customer
service"](https://www.customerexperiencedive.com/news/klarna-reinvests-human-talent-customer-service-AI-chatbot/747586/),
CX Dive, 2025-05-09, reporting a Bloomberg interview.** The best-known public
walk-back. In 2024 Klarna said its assistant did "the equivalent work of 700
full-time agents," was "on par with human agents" on customer satisfaction, and
would drive "$40 million USD in profit improvement." In 2025 its CEO, Sebastian
Siemiatkowski, told Bloomberg: "As cost unfortunately seems to have been a too
predominant evaluation factor when organizing this, what you end up having is
lower quality," and "Really investing in the quality of the human support is
the way of the future for us." Relevant because it is an executive's own
account of overreach. The fair telling includes the rest: a Klarna spokesperson
said the assistant "still handles two-thirds of all customer inquiries." The
lesson is not that AI failed; it is that a cost-first replacement pitch
overreached and the company settled on a split between AI and humans. Both
Klarna statements are company claims, not audited figures.

### Support: genuinely good at some things, bad at others

**Stanford HAI, ["The 2026 AI Index Report: Technical
Performance"](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance),
2026-04.** The strongest independent synthesis of capability. Highlights, as
stated on the chapter page:

- Strong: Gemini Deep Think scored gold (35 points) at the 2025 International
  Mathematical Olympiad. Models show "performance ranging from 60 to 90% in
  evaluations in tax, mortgage processing, corporate finance, and legal
  reasoning." On OSWorld, a test of computer tasks, agent accuracy "rose from
  roughly 12% to 66.3%, within 6 percentage points of human performance."
- Weak: agents "still fail roughly one in three attempts on structured
  benchmarks." "On ClockBench, the top model read analog clocks correctly 50.6%
  of the time, compared with 90.1% for humans." "Robots succeed in only 12% of
  real household tasks."
- The measuring stick itself is shaky: benchmarks face "growing reliability and
  gaming concerns, with error rates up to 42% on widely used evaluations," with
  invalid question rates "ranging from 2% on MMLU Math to 42% on GSM8K."

Relevant because it gives the post concrete, memorable examples of the uneven
profile (Olympiad gold, but cannot reliably read a clock) from a neutral
academic source, and a caution that headline benchmark scores overstate
certainty in both directions.

**European Broadcasting Union and BBC, ["Largest study of its kind shows AI
assistants misrepresent news content 45% of the
time"](https://www.ebu.ch/news/2025/10/ai-s-systemic-distortion-of-news-is-consistent-across-languages-and-territories-international-study-by-public-service-broadcaste),
2025-10-22.** Hallucination and distortion in real everyday use rather than on
a benchmark. 22 public service media organizations in 18 countries and 14
languages evaluated more than 3,000 answers about the news from ChatGPT,
Copilot, Gemini, and Perplexity. 45% had at least one significant issue; 31%
had serious sourcing problems; 20% had major accuracy issues. Gemini had
significant issues in 76% of responses. Compared with the BBC's February 2025
study there were "some improvements but still high levels of errors."
Relevant because this is the use skeptics actually see: asking a chatbot what
happened. Caveat: news organizations have a commercial interest in how AI uses
their content, although the method (journalists scoring answers against
criteria) is transparent.

### Support: responsible use has practical, established frameworks

**NIST, ["AI Risk Management
Framework"](https://www.nist.gov/itl/ai-risk-management-framework), AI RMF 1.0
released 2023-01-26; Generative AI Profile (NIST AI 600-1) released
2024-07-26.** A US government framework "intended for voluntary use," organized
around four functions: Govern, Map, Measure, and Manage. The Generative AI
Profile helps organizations "identify unique risks posed by generative AI and
proposes actions" to manage them. Relevant because it lets the post point to
a free, neutral, practical standard for "use it responsibly" instead of
inventing one.

**ISO/IEC, ["ISO/IEC 42001:2023, Artificial intelligence, Management
system"](https://www.iso.org/standard/42001), published 2023-12** (read through
a text proxy because iso.org refused the direct fetch). "The world's first AI
management system standard," specifying "requirements for establishing,
implementing, maintaining, and continually improving an Artificial Intelligence
Management System" for organizations "providing or utilizing AI-based products
or services." Relevant because it shows responsible use has become an
auditable management discipline, like information security, not just a
slogan. ISO sells the standard.

**International Energy Agency, ["Energy and
AI"](https://www.iea.org/reports/energy-and-ai), World Energy Outlook Special
Report, 2025-04** (read from the IEA's published PDF; the web pages refused the
fetch). The credible number on energy. "Data centres accounted for around 1.5%
of the world's electricity consumption in 2024, or 415 terawatt-hours (TWh)."
Consumption "is set to more than double to around 945 TWh by 2030. This is
slightly more than Japan's total electricity consumption today. AI is the most
important driver of this growth." Data centre emissions "remain below 1.5% of
the total energy sector emissions" in the period, but data centres "are among
the fastest growing sources of emissions." And: "The widespread adoption of
existing AI applications could lead to emissions reductions that are far larger
than emissions from data centres, but also far smaller than what is needed to
address climate change." Relevant because it lets the post take the energy
concern seriously with a real number, without inflating or dismissing it.

### Complicate / counter

**Capability is moving fast, so "bad at" lists date quickly.** The same AI
Index chapter reports agent accuracy on OSWorld rising from about 12% to 66.3%
and Olympiad gold one year after silver. A post that lists what AI cannot do
risks being wrong within a year. Frame weaknesses as a pattern (uneven,
unreliable at the edges) rather than a fixed list.

**Skepticism is not universal.** Globally, more people see benefits than
drawbacks and that share is rising (AI Index). The strong skepticism numbers
are American (Pew, Gallup). A post for "skeptics of all backgrounds" should
not imply the whole world has turned against AI.

**The experts are not neutral either.** Pew's expert sample is people who
present at AI conferences; their optimism partly reflects their work. It is
fair to cite the gap, not to treat either side as the correct baseline.

**The enforcement cases are small and mostly about fraud.** The SEC penalties
totaled $400,000; most FTC cases were get-rich-quick schemes using the word AI.
They show that AI claims can be false and actionable. They do not show that
mainstream AI companies' marketing has been found deceptive, and the post
should not imply that.

**Overpromised products still delivered something.** The legal research tools
hallucinated less than general-purpose GPT-4; Klarna's assistant still handles
two thirds of inquiries. The honest pattern is "less than promised, more than
nothing," which is the post's thesis, but it cuts against any line suggesting
the products did not work.

**Hallucination rates vary widely by task and are not one number.** 17% to 33%
in legal research and 45% with a significant issue in news answers come from
different tasks, definitions, and years. Neither is "the hallucination rate of
AI." Quote each with its context.

**Energy concern can be overstated too.** The IEA puts data centres at about
1.5% of global electricity in 2024, and finds AI applications could cut more
emissions than data centres produce. Both the "AI is boiling the oceans" and
"energy is a non-issue" framings are unsupported.

**Not verified, not cited.** Gartner's placement of generative AI in the
"Trough of Disillusionment" on its 2025 Hype Cycle is widely reported, but
Gartner's pages refused every fetch, so it is not cited here. Edelman, Ipsos,
and YouGov primary reports were not read in this pass.

### Freshness update 2026-09-16

**Public sentiment: Colleen McClain & Eugenie Park (Pew Research Center),
["Young US adults are increasingly wary of AI, concerned it will take
jobs"](https://www.pewresearch.org/short-reads/2026/08/18/young-adults-in-the-us-are-increasingly-wary-of-ai-concerned-it-will-take-jobs/),
2026-08-18.** 3,488 US adults, June 22 to 28, 2026. "52% of Americans say they
are more concerned than excited about the increased use of AI in daily life,
up from 37% in 2021"; 9% are more excited than concerned. "For the first time,
a majority of adults under 30 (55%) now say they're more concerned than
excited." 71% expect fewer US jobs over two decades, up from 64% in 2024.
**Supersedes the Pew 2026-03-12 short read (June 2025 data) for the current
number; it agrees with Gallup's May 2026 finding of rising skepticism among
the young.**

**Hype vs reality, enforcement: US Federal Trade Commission, ["Air AI and its
Owners will be Banned from Marketing Business Opportunities to Settle FTC
Charges"](https://www.ftc.gov/news-events/news/press-releases/2026/03/air-ai-its-owners-will-be-banned-marketing-business-opportunities-settle-ftc-charges-company-misled),
2026-03-24,** and **["FTC Finalizes Orders with Cox Media Group, Two Other
Firms Settling Charges They Deceived Customers About 'Active Listening'
AI-Powered Marketing
Service"](https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-finalizes-orders-cox-media-group-two-other-firms-settling-charges-they-deceived-customers-about),
2026-08-27.** Air AI: an $18 million judgment, largely suspended for inability
to pay, over allegedly deceptive claims to entrepreneurs and small businesses
about earnings potential and the performance of its services. Cox Media Group and two firms: $930,000 for marketing an
"AI-powered service that could target localized ads based on conversations
captured from consumers' smart devices"; in the FTC's words, "the marketing
service wasn't based on voice data." Relevant because the FTC has kept acting
on false AI claims through 2026, including against an established media
company. **Use these as the current enforcement examples; keep the 2024 SEC and
FTC actions as the origin of "AI washing."** No new 2026 SEC AI washing action
was verified in this pass; law-firm commentary reports that the SEC named AI
claims an examination priority for 2026, but the SEC's own document was not
read.

**Hype vs reality, measured harm: Damien Charlotin (Sciences Po), ["AI
Hallucination Cases"](https://www.damiencharlotin.com/hallucinations/)
database, read 2026-09-16.** Tracks court and tribunal decisions that found a
party relied on AI-hallucinated content, mostly fabricated citations. It lists
**2,041 cases** as of the fetch, the most recent decided 2026-09-15. Relevant
because it is a live, public count of AI errors reaching courts, despite the
legal tools' marketing. Caveats: it counts decisions that were caught and
reported, not an error rate, and a growing count partly reflects growing use.
**Use for "hallucinations still reach courts, over 2,000 recorded cases"; keep
the Stanford 17% to 33% study as the measured rate.**

**Walk-backs:** see the Claim 7 freshness update (Duolingo, April 2026; Meta,
April 2026). No 2026 update from Klarna was verified.

**Hallucination in news:** no new 2026 edition of the EBU and BBC study was
found. A 2026-04-06 Dataconomy article reports the same October 2025 figures
(45%, 31%, 20%, Gemini 76%), so do not describe the finding as a 2026 study.

Checked, nothing newer verified: Gartner's 2026 Hype Cycle placement (blocked),
Edelman Trust Barometer 2026 and KPMG and University of Melbourne trust study
(not read).

### What this evidence supports in public copy, and what it does not

Supported:

- "Most Americans are more worried than excited about AI, and that worry has
  grown since 2021" (Pew). "The share who think AI does more harm than good
  jumped this year, especially among young adults" (Gallup, 2026).
- "Even AI experts share the public's top worry: inaccurate information" (Pew).
- "Regulators have already acted against companies that overstated what their
  AI did" (SEC, FTC).
- "Legal AI tools marketed as hallucination-free got things wrong 17% to 33% of
  the time in an independent test" (Stanford).
- "One well-known company that replaced support staff with AI later said the
  result was lower quality and rehired people, while keeping AI for most
  chats" (Klarna, company statements).
- "AI can win a gold medal at the Math Olympiad and still struggle to read an
  analog clock" (AI Index).
- "In a study across 18 countries, 45% of AI answers about the news had a
  significant problem" (EBU and BBC, 2025).
- "Data centres used about 1.5% of the world's electricity in 2024, and that is
  set to roughly double by 2030, with AI the biggest driver" (IEA).
- "Responsible use is not vague: NIST and ISO publish practical frameworks for
  it" (NIST AI RMF, ISO/IEC 42001).

Not supported:

- That AI "doesn't work" or is mostly hype. The same sources document real,
  fast-improving capability.
- A single "AI hallucination rate."
- That mainstream AI labs have been found to engage in deceptive marketing.
- That the public worldwide is turning against AI; that is a US finding.
- That AI's energy use is either catastrophic or negligible.
- That generative AI is "in the trough of disillusionment" as a sourced
  analyst finding, until Gartner's report is read directly.

---

## Claim 7: The right tool for the problem

Added 2026-09-16 for the "Not a genie" post. Two arguments. First, large
language models are one tool inside a much older and broader discipline, and
for many problems (predictions on business tables, finding the right document)
other methods are more accurate, faster, or cheaper. Second, "just use AI"
mandates from leadership assume a chatbot already has the context and the
skill to do the job, and workers report that it often does not work that way.
Every source below was fetched and read on 2026-09-16 unless marked otherwise.

The short version: the evidence is strong that tree-based models remain the
default for typical tabular prediction and that retrieval is far cheaper than
making a model read everything. It is also clear that the gap is narrowing:
tabular foundation models now beat tuned trees on small datasets, and
long-context models beat retrieval on accuracy when cost is no object. On
mandates, the memos are public and the survey evidence of a gap between
executive expectations and worker experience is consistent, but most of it
comes from interested parties.

### Support: machine learning is a broad discipline that predates the chatbot

**Michael I. Jordan & Tom M. Mitchell, ["Machine learning: Trends,
perspectives, and prospects"](https://pubmed.ncbi.nlm.nih.gov/26185243/),
Science 349(6245):255-260, 2015-07-17.** A review in Science by two senior figures in
the field, seven years before ChatGPT. "Machine learning addresses the
question of how to build computers that improve automatically through
experience." Its adoption "can be found throughout science, technology and
commerce, leading to more evidence-based decision-making across many walks of
life, including health care, manufacturing, education, financial modeling,
policing, and marketing." Relevant because it lets the post say, from a
neutral and prestigious source, that AI did not begin with chatbots.

**OpenAI, ["Introducing ChatGPT"](https://openai.com/index/chatgpt/), released
2022-11-30** (the page does not display its date; the date is confirmed by
Wikipedia's ChatGPT article, fetched the same day). The start of mainstream
attention to large language models. The launch post itself warned: "ChatGPT
sometimes writes plausible-sounding but incorrect or nonsensical answers."
Relevant twice: it dates the boom, and it shows the limitation skeptics care
about was stated by the maker on day one.

### Support: tabular business data favors other models

**Léo Grinsztajn, Edouard Oyallon & Gaël Varoquaux, ["Why do tree-based models
still outperform deep learning on typical tabular
data?"](https://proceedings.neurips.cc/paper_files/paper/2022/hash/0378c7692da36807bdec87ab043cdadc-Abstract-Datasets_and_Benchmarks.html),
NeurIPS 2022, Datasets and Benchmarks Track.** 45 datasets and 20,000 compute
hours of hyperparameter search per learner. "Results show that tree-based
models remain state-of-the-art on medium-sized data (~10K samples) even without
accounting for their superior speed." Relevant because spreadsheets and
database tables (customers, transactions, inventory) are what most business
predictions run on, and this is the standard reference that decision-tree
methods such as XGBoost still win there. Note it compares against deep
learning in general, not against chatbots specifically.

**Stefan Hegselmann, Alejandro Buendia, Hunter Lang, Monica Agrawal, Xiaoyi
Jiang & David Sontag, ["TabLLM: Few-shot Classification of Tabular Data with
Large Language Models"](https://arxiv.org/abs/2210.10723), arXiv 2022-10,
revised 2023-03 (AISTATS 2023).** The key study of turning table rows into
text and asking a language model to classify them. The method is "competitive
with strong traditional baselines like gradient-boosted trees, especially in
the very-few-shot setting," and in the few-shot setting the authors fine-tune
the model rather than just prompting it. Relevant because the language model's
advantage is specifically when there are almost no labelled examples, where its
general knowledge substitutes for data.

**Carlos Huertas, ["Gradient Boosting Trees and Large Language Models for
Tabular Data Few-Shot Learning"](https://arxiv.org/abs/2411.04324), arXiv,
2024-11-06.** Replicates public TabLLM-style benchmarks with better-configured
gradient boosting. Per the abstract, language models "excel with 8 or fewer
samples," while gradient boosted trees "remain competitive with larger
datasets at lower computational cost"; the approach placed first in a machine
learning competition. Single-author preprint, not peer reviewed. Relevant
because it pins the crossover low: once a business has more than a handful of
labelled examples, the older tool is competitive and cheaper.

**Ishaan Gangwani & Aayam Bansal, ["Light-Weight Benchmarks Reveal the Hidden
Hardware Cost of Zero-Shot Tabular Foundation
Models"](https://arxiv.org/abs/2512.00888), arXiv, 2025-11-30 (revised
2025-12-16).** On four public datasets and one NVIDIA T4 GPU, tuned tree
ensembles "equal or surpass" two tabular foundation models "on three datasets
while completing full-test batches in <= 0.40 s and <= 150 MB RAM." Where a
foundation model won (Higgs), it "requires roughly 40,000 times more latency
(960 s) and 9 GB VRAM." Small, recent, not peer reviewed, and about tabular
foundation models rather than chatbots. Relevant as the only measured latency
and hardware comparison found. **No credible source was found measuring the
cost of calling a general-purpose LLM API per prediction against a trained
small model; that comparison remains our arithmetic, not a citation.**

### Support: retrieval is cheaper than making a model read everything

**Nelson F. Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua,
Fabio Petroni & Percy Liang, ["Lost in the Middle: How Language Models Use Long
Contexts"](https://arxiv.org/abs/2307.03172), Transactions of the ACL, 2023.**
"Performance can degrade significantly when changing the position of relevant
information." Performance "is often highest when relevant information occurs
at the beginning or end of the input context, and significantly degrades when
models must access relevant information in the middle of long contexts, even
for explicitly long-context models." Relevant because it is the standard
evidence that pasting everything into a prompt is not the same as the model
reading it carefully. Caveat: tested on 2023 models; see the counter section.

**Zhuowan Li, Cheng Li, Mingyang Zhang, Qiaozhu Mei & Michael Bendersky
(Google DeepMind and University of Michigan), ["Retrieval Augmented Generation
or Long-Context LLMs? A Comprehensive Study and Hybrid
Approach"](https://arxiv.org/abs/2407.16833), EMNLP 2024 Industry Track.** The
best head-to-head found, and it cuts both ways. "When resourced sufficiently,
LC [long-context] consistently outperforms RAG in terms of average
performance. However, RAG's significantly lower cost remains a distinct
advantage," because retrieval "significantly decreases the input length to
LLMs, leading to reduced costs, as LLM API pricing is typically based on the
number of input tokens." The two approaches gave identical predictions "for
over 60% of queries." Routing only the hard queries to long context kept
performance comparable while cutting cost "by 65% for Gemini-1.5-Pro and 39%
for GPT-4O." Relevant because it supports the practical claim precisely:
retrieval is the cheaper default, and reading everything is a premium you pay
for a minority of questions.

**Nandan Thakur, Nils Reimers, Andreas Rücklé, Abhishek Srivastava & Iryna
Gurevych, ["BEIR: A Heterogenous Benchmark for Zero-shot Evaluation of
Information Retrieval Models"](https://arxiv.org/abs/2104.08663), NeurIPS
2021 Datasets and Benchmarks Track.** 18 datasets, 10 retrieval systems. "BM25
is a robust baseline," and re-ranking and late-interaction models achieve the
best zero-shot results "at high computational costs," while dense (embedding)
retrievers are efficient but generalize less well to new domains. Relevant
because it shows search is its own mature discipline, and that the older
keyword method (BM25) still holds up. It supports "use the
right search tool," not "embeddings always win."

**Niklas Muennighoff, Nouamane Tazi, Loïc Magne & Nils Reimers, ["MTEB:
Massive Text Embedding Benchmark"](https://arxiv.org/abs/2210.07316), arXiv
2022-10-13 (revised 2023-03-19).** 8 embedding tasks, 58 datasets, 112 languages, 33
models. "No particular text embedding method dominates across all tasks."
Relevant because it is the standard embedding benchmark and a caution that the
right embedding model depends on the task.

**Anthropic, ["Introducing Contextual
Retrieval"](https://www.anthropic.com/news/contextual-retrieval), anthropic.com
(the fetched text shows no date).**
Interested party (it sells the model used in the method), cited for practice,
not proof. Combining embeddings with BM25 keyword search, plus added context
per chunk, "can reduce the number of failed retrievals by 49% and, when
combined with reranking, by 67%." It notes embedding models "can miss crucial
exact matches" such as an error code, which keyword search catches. It also
says: "If your knowledge base is smaller than 200,000 tokens (about 500 pages
of material), you can just include the entire knowledge base in the prompt."
Relevant because even a model vendor recommends hybrid search for large
collections, and it draws the line where retrieval stops being necessary.

### Support: "just use AI" mandates and the context gap

**Tobi Lütke (Shopify), memo "Reflexive AI usage is now a baseline expectation
at Shopify," dated 2025-03-20 and posted by Lütke on X on 2025-04-07, read as
reported by [BetaKit](https://betakit.com/shopify-ceo-tobi-lutke-tells-employees-to-prove-ai-cant-do-the-job-before-asking-for-resources/),
2025-04-07** (X blocked the direct fetch; BetaKit discloses its majority owner
is the family office of two former Shopify leaders). "Using AI effectively is
now a fundamental expectation of everyone at Shopify." "Teams must demonstrate
why they cannot get what they want done using AI" before asking for more
headcount and resources, and AI usage questions go into performance and peer
reviews. "Frankly, I don't think it's feasible to opt out of learning the skill
of applying AI in your craft." Lütke said earlier encouragement to "tinker"
was "too much of a suggestion." A reprint quoted by Patrick McGuinness's
newsletter confirms the memo also says "Learning to use AI well is an unobvious
skill" and "Learning is self-directed." Widely circulated versions also contain
the line "Learning to prompt and load context is important," but it could not be
verified against a fetched copy, so do not quote it until checked. Relevant
because it is the defining public "use AI by default" mandate, and even it
concedes that using AI well is a learned skill, left largely to employees.

**[Walk-back superseded by Duolingo 2026-04-13; see Freshness update below.]**
**Luis von Ahn (Duolingo), "AI-first" memo, 2025-04-28, and walk-back, read
as reported by Jessica Coacci, [Fortune via Yahoo
Finance](https://finance.yahoo.com/news/duolingo-ceo-admits-controversial-ai-172247813.html),
2025-08-18, citing a New York Times interview.** The memo said Duolingo would
"gradually stop using contractors to do work that AI can handle" and add
headcount only if "a team cannot automate more of their work." After public
backlash, von Ahn: "This was on me. I did not give enough context. We've never
laid off any full-time employees. We don't plan to," and "What will probably
happen is that one person will be able to accomplish more, rather than having
fewer people." Relevant because it shows a leader walking back the framing of
an AI mandate within months. Fair telling: the reduction of contractors did
happen, and the walk-back is about framing, not about abandoning AI.

**[Dated, do not lead with it; see Freshness update below.]** **Upwork
Research Institute, ["Upwork Study Finds Employee Workloads Rising
Despite Increased C-Suite Investment in Artificial
Intelligence"](https://investors.upwork.com/news-releases/news-release-details/upwork-study-finds-employee-workloads-rising-despite-increased-c),
press release, 2024-07-23.** Survey by Walr for Upwork and Workplace
Intelligence, April 16 to May 5, 2024: 2,500 respondents in the US, UK,
Australia, and Canada (1,250 C-suite, 625 full-time employees, 625
freelancers). 96% of C-suite leaders expect AI to raise productivity, yet "77%
of employees using AI say these tools have added to their workload," and 47%
"say they have no idea how to achieve the productivity gains their employers
expect." 39% of companies mandate AI tools and 46% encourage them. Employees
report more time "reviewing or moderating AI-generated content" (39%), and 40%
"feel their company is asking too much of them when it comes to AI." Relevant
because it directly documents the mandate gap. Heavy caveat: Upwork sells
freelance talent as the answer to this problem, and the employee subsample is
only 625 people.

**Luona Lin & Kim Parker (Pew Research Center), ["U.S. Workers Are More
Worried Than Hopeful About Future AI Use in the
Workplace"](https://www.pewresearch.org/social-trends/2025/02/25/u-s-workers-are-more-worried-than-hopeful-about-future-ai-use-in-the-workplace/),
2025-02-25.** Independent. 5,273 employed US adults, October 7 to 13, 2024.
52% of workers are worried about future AI use in the workplace and 36%
hopeful. About one in ten used AI chatbots daily or a few times a week. Of
those who used chatbots for work, "four-in-ten" found them extremely or very
helpful for speed, but a smaller share, 29%, for quality. Relevant as a
neutral check on vendor surveys: at the time, most workers barely used
chatbots, and users rated speed benefits above quality benefits.

**[Superseded by Gallup 2026-07-20; see Freshness update below.]** **Gallup
workplace AI survey, Q4 2025, read as reported by Carolyn Crist, [HR
Dive](https://www.hrdive.com/news/workplace-ai-use-increased-workers-dont-know-employer-strategy/808441/),
2025-12-22** (Gallup's own page was not fetched). More than 23,000 US
workers. 45% used AI at work at least a few times a year, 10% daily. Only 37%
said their employer had implemented AI to improve productivity, efficiency,
and quality; 40% said it had not; 23% did not know. Gallup: "This gap suggests
that a portion of employees used personal AI tools or otherwise used AI without
awareness of their organization's AI strategy." Relevant because it shows
individual use running ahead of any organizational plan, which is where the
missing context comes from.

### Complicate / counter

**Tabular foundation models now beat tuned trees on small data.** Noah
Hollmann, Samuel Müller, Lennart Purucker, Arjun Krishnakumar, Max Körfer, Shi
Bin Hoo, Robin Tibor Schirrmeister & Frank Hutter, ["Accurate predictions on
small data with a tabular foundation
model"](https://www.nature.com/articles/s41586-024-08328-6), Nature, published
2025-01-08 (read through a text proxy; Nature redirected the direct fetch).
TabPFN "yields dominant performance for datasets with up to 10,000 samples and
500 features," and its default, "taking 2.8 s on average for classification
and 4.8 s for regression, outperforms all baselines, even when tuning them for
4 h." The authors add that the results "should not be taken as evidence that
TabPFN scales well beyond the 10,000 samples and 500 features considered here,"
and that for larger datasets, gradient boosting methods remain the choice. Two
implications for the post: "trees always win on tables" is now false for small
tables, and the model that beats them is a purpose-built tabular transformer,
not a chatbot. It supports "the right tool for the problem" but kills any
claim that deep learning cannot do tabular data. The latency study above shows
the hardware cost can be much higher.

**Long context beats retrieval on accuracy.** Li et al. find long-context
models "consistently" outperform retrieval "when resourced sufficiently," and
Liu et al. tested 2023 models. Anthropic says collections under about 500
pages can simply go in the prompt. The honest line is that retrieval is
cheaper and usually good enough, not that it is more accurate.

**Pure vector search is not the answer either.** BEIR finds keyword search
(BM25) a robust baseline that dense embeddings do not always beat on new
domains; MTEB finds no embedding method dominates; Anthropic's best results
combine embeddings, keyword search, and reranking. The post should say
"search tools," not "embeddings," as the alternative to reading everything.

**Language models do win in some tabular cases.** With 8 or fewer labelled
examples, LLM methods can beat trees (TabLLM, Huertas), because general
knowledge substitutes for data.

**Mandates are not obviously wrong.** Both memos pair the mandate with
learning and experimentation, and nothing found shows either company was
harmed by its mandate.
BCG's "AI at Work 2025" is widely reported to find regular use rises sharply
with at least five hours of training and with leadership support; BCG's site
could not be fetched, so it is not cited. The evidence supports "mandates
without training and context underperform," not "mandates fail."

**The workload survey is the weakest link.** The 77% figure comes from a
company that sells an alternative to the workers being surveyed, from 625
employees, and from 2024. Prefer Pew and Gallup for public copy and use
Upwork only with attribution.

### Freshness update 2026-09-16

**Duolingo reverses its AI performance mandate: Jacqueline Munis, ["'I'm not
going to force you': Duolingo CEO backs off from evaluating employees on their
AI
usage"](https://fortune.com/2026/04/13/duolingo-ceo-luis-von-ahn-ai-usage-requirement-employee-performance-evaluations/),
Fortune, 2026-04-13,** reporting von Ahn on the Silicon Valley Girl podcast.
"It felt like rather than being held accountable for the actual outcome, we're
trying to just push something that in some cases did not fit." And: "the most
important thing in your performance is that you are doing whatever your job is
as well as possible. A lot of times AI can help you with that. But if it can't,
I'm not going to force you to do that." Relevant because the CEO behind the
best-known "AI-first" memo publicly dropped AI usage as a performance measure,
in words that match the post's argument almost exactly. **Supersedes the
August 2025 walk-back as the current Duolingo citation.**

**Meta's token leaderboard: Jacqueline Munis, ["Meta killed employee AI token
dashboard"](https://fortune.com/2026/04/09/meta-killed-employee-ai-token-dashboard/),
Fortune, 2026-04-09,** citing The Information, Business Insider, and the New
York Times. Meta's chief people officer had made "AI-driven impact" a "core
expectation" in 2026 performance reviews. An employee-built leaderboard,
"Claudeonomics," ranked the top 250 token users with titles such as "Token
Legend"; over 30 days usage exceeded 60 trillion tokens, and some employees ran
AI agents for hours to raise their numbers. The employee took it down after its
data was shared externally; Meta said it "did not request this action."
Relevant because it is the clearest case of an AI mandate measuring usage
instead of outcomes, and of people gaming the measure. Caveat: secondhand
reporting of internal events. Search results also report that Meta later told
engineers token counts would not be used to evaluate impact, but that report
(The Information, paywalled) was not read, so do not cite it yet.

**Gallup, Andy Kemp, ["Organizational AI Adoption Jumps Six
Points"](https://www.gallup.com/workplace/712736/organizational-adoption-jumps-six-points.aspx),
2026-07-20.** 22,573 employed US adults, May 6 to 20, 2026, margin of error
±0.9 points. 47% say their organization has integrated AI tools (up from 41% in
Q1 2026); 20% are unsure whether it has. 52% use AI in their role, 30%
frequently, 15% daily. Employees using AI for 7 or more purposes report
productivity improvement at twice the rate (90%) of those using it for 1 or 2
(45%). Relevant because it is the freshest large independent workplace data:
use keeps rising, one in five still does not know whether their employer has
adopted AI, and value tracks how broadly and skillfully people use it.
**Supersedes the Q4 2025 Gallup figures (via HR Dive) above.**

**Microsoft, ["2026 Work Trend Index: Agents, human agency, and the
opportunity for every
organization"](https://www.microsoft.com/en-us/worklab/work-trend-index/agents-human-agency-and-the-opportunity-for-every-organization),
2026-05-05.** Survey by Edelman Data x Intelligence of 20,000 knowledge workers
who use AI, in 10 markets, February 18 to April 7, 2026. "Organizational
factors like culture, manager support, and talent practices account for more
than 2x the reported AI impact of individual factors" (67% versus 32%). Only 26%
of AI users say their leadership is clearly and consistently aligned on AI.
Relevant because it supports the post's point that individual prompting is not
the lever; the organization is. Heavy caveat: Microsoft sells Copilot and the
survey covers only people already using AI. **Use with attribution; it is
fresher than Upwork 2024, which should no longer lead.**

**KPMG Q2 2026 (see the Claim 5 freshness update).** Employee resistance to AI
rose from 5% to 20% in one quarter, with 51% of those leaders citing worries
about increased workload or complexity. Interested party, 204 leaders.

**Superseded for public copy:** Upwork's July 2024 "77% say AI added to their
workload" should not lead a 2026 post; cite it only as early evidence. The Pew
worker survey (October 2024) predates current tools; a Pew 2025-10-06 short
read on worker AI use exists but was not read in this pass. Shopify's April
2025 memo remains the defining mandate text; no 2026 Shopify revision was
found.

Checked, nothing newer verified: BCG AI at Work 2026 (bcg.com blocked),
Atlassian and Slack workforce reports (not read).

### Additional source: decades of institutional investment in AI (added 2026-09-16)

**Christopher R. Moran, Joe Burton & George Christou, ["The US Intelligence
Community, Global Security, and AI: From Secret Intelligence to Smart
Spying"](https://academic.oup.com/jogss/article/8/2/ogad005/7128314), Journal
of Global Security Studies 8(2), published 2023-04-18.** Peer reviewed and
based on declassified intelligence records. The abstract says the US
intelligence community "has been fascinated by AI for decades," and the
article documents that "in December 1982, at CIA headquarters in Langley,"
the agency held "the first in what would become an annual AI symposium,
featuring some 500 participants from government, industry, and academia."
It notes that "since the early 1980s" the community has worked with the tech
industry on AI, "providing R&D funding but also staging annual symposia." The
authors also argue that talk of an AI-driven "intelligence revolution is
premature," which fits the post's measured tone. Relevant because it is a
credible, dated record that serious institutions invested in AI long before
the chatbot era.

**Citation rule:** cite only the general finding of decades of investment and
long-running collaboration (for example, the 1982 symposium). Do not cite the
article for ECHELON, surveillance programs, or other intelligence-collection
specifics; that framing reads as conspiratorial and is outside the argument.
As of 2026-09-16 the captain has decided this history material will not go in
the "Not a genie" post; it is recorded here for future use.

### What this evidence supports in public copy, and what it does not

Supported:

- "Machine learning was already driving decisions in health care,
  manufacturing, education, finance, and marketing years before chatbots"
  (Jordan and Mitchell, 2015).
- "ChatGPT launched on November 30, 2022, and its own launch post warned it
  could write plausible-sounding but wrong answers" (OpenAI).
- "For predictions on typical business tables, decision-tree models remain the
  standard, faster and usually as or more accurate" (Grinsztajn et al.), with
  the caveat that newer purpose-built tabular models now beat them on small
  datasets (TabPFN).
- "Language models tend to miss information buried in the middle of long
  inputs" (Liu et al., 2023 models).
- "Searching first and reading only what matters is much cheaper than making a
  model read everything, and gives the same answer most of the time" (Li et
  al.).
- "Good search combines keyword and semantic methods" (BEIR, Anthropic).
- "Some CEOs now require staff to prove AI cannot do a job before hiring"
  (Shopify, Duolingo memos).
- "Executives expect AI to boost productivity; many workers say it added
  work and they were not shown how" (Upwork, attributed as its survey).
- "AI use at work is running ahead of company plans for it" (Gallup via HR
  Dive).

Not supported:

- That LLMs are bad at all tabular or numeric problems, or that deep learning
  cannot handle tables.
- A specific cost multiple for an LLM API call versus a trained model per
  prediction.
- That retrieval is more accurate than long-context reading.
- That vector search alone beats keyword search.
- That AI mandates fail, or that Shopify or Duolingo suffered for theirs.
- The Shopify line "Learning to prompt and load context is important" until
  it is checked against the original memo.

---

## Claim 8: Capital isn't enough, and the platform can be software

Added 2026-09-16 for the blog post "Capital isn't enough," written for VC and
PE investors and founders. The argument: venture capital alone does not make
startups succeed; a16z built a platform of in-house experts to give portfolio
companies more than money; Metropolis takes the idea further by building the
platform as software (shared agents, workflows, knowledge, and business
systems every portfolio company inherits), with people filling the gaps that
need judgment. Every source below was fetched and read on 2026-09-16 unless
marked otherwise. Freshest evidence is listed first within each subsection;
foundational sources are older by nature and say so.

This extends, and does not repeat, "Lineage sources" above (Andreessen 2011 is
already verified there, and the a16z platform model was marked "not separately
sourced") and Claim 1 (BVP vertical AI, Burris on studio flaws, BVSR'24 studio
exit rates).

The short version: there is causal evidence that active investor involvement
improves startup outcomes, and correlational evidence that firms with larger
platform teams earn higher returns. VCs themselves rank picking companies above
helping them. People-based platforms are expensive and were among the first
things cut in the 2023 downturn. There is fresh evidence that AI is shrinking
teams and that at least one major VC is building AI-run operating companies,
but **no evidence yet that a software platform shared across a portfolio
outperforms a human platform team. That remains the thesis, not a finding.**

### Support: the platform model, from a16z's own mouth

**a16z, ["About"](https://a16z.com/about/), a16z.com, read 2026-09-16
(AUM stated as of 2026-04-30).** Interested party describing itself. "In 2009,
Marc Andreessen and Ben Horowitz built a16z on a single conviction: software
would eat the world," and "a16z pioneered the platform model: the largest team
of operators in venture, from marketing and talent to legal and policy,
dedicated to helping founders at every stage." Over $100 billion under
management. Relevant as the firm's current, official statement of the model
the post builds on. (The quote above replaces an em dash in the original with
a colon.)

**Ben Horowitz, ["New Funds, New Era"](https://a16z.com/new-funds-new-era/),
a16z.com, 2024-04-16.** Horowitz recalls the start as "a $300M fund and 2
General Partners" in 2009, and argues founder success depends on "a great
investor with the right help, the right networking, and the right expertise,"
which is why the firm now runs separate funds "each with its own team of experts
and capabilities." Relevant because it is the founder's own statement that
capital alone is not the product.

**Michael Ovitz and Ben Horowitz, ["a16z Podcast: New Upstarts in an Old
Industry"](https://a16z.com/podcast/a16z-podcast-new-upstarts-in-an-old-industry/),
a16z.com, 2018-09-25.** Horowitz on what a16z took from Creative Artists
Agency: "The first was this concept of a network. So, you know, a firm
shouldn't be just a group of independent people who all had their own isolated
networks," with "people who were dedicated to vertical parts of the network."
Relevant because it is the primary source for the platform model's origin: a
team of specialists shared across clients, which is the structure Metropolis
proposes to rebuild in software.

**Foundational, contemporaneous: Sarah Lacy, ["Details on Marc Andreessen's New
Fund"](https://techcrunch.com/2009/07/05/details-on-marc-andreessen%E2%80%99s-new-fund-plus-five-other-interesting-things-he-said/),
TechCrunch, 2009-07-05.** Launch coverage: a $300 million fund, checks from
$50,000 to $50 million, two general partners, targeting the roughly 15 companies
a year that reach $100 million or more in revenue. The article does not quote
Andreessen describing a services platform. **No primary 2009 a16z document
describing the expert platform was found;** the model is documented in a16z's
later statements (above) and in secondary accounts such as Alisha Green,
["10 Years Later, How Has Andreessen Horowitz Changed Silicon
Valley?"](https://worth.com/a-decade-later-how-has-andreessen-horowitz-changed-silicon-valley/),
Worth, 2019-08-01, which reports the CAA inspiration and quotes PagerDuty's
co-founder that a16z helped with "executive recruiting, both with their brand
name ... and with hands-on expertise." Public copy should say a16z "built" or
"pioneered" the platform model, not that it launched in 2009 with a full
platform team.

"Software Is Eating the World" (2011) is already verified in "Lineage sources."

### Support: investor involvement beyond capital changes outcomes

**Foundational: Shai Bernstein, Xavier Giroud & Richard R. Townsend, ["The
Impact of Venture Capital Monitoring"](http://www.columbia.edu/~xg2285/VC.pdf),
Journal of Finance 71(4):1591-1622, 2016-08** (read from the authors' PDF).
The best causal evidence. "We show that venture capitalists' (VCs) on-site
involvement with their portfolio companies leads to an increase in both
innovation and the likelihood of a successful exit." Selection is ruled out
using new airline routes that cut VCs' travel time to existing portfolio
companies; almost 90% of surveyed VCs say direct flights increase their
interaction with portfolio companies. Relevant because it shows involvement,
not just money or picking, causes better outcomes. Limit: it measures
partner attention, not a platform team.

**Foundational: Paul Gompers, Will Gornall, Steven N. Kaplan & Ilya A.
Strebulaev, "How Do Venture Capitalists Make Decisions?", Journal of Financial
Economics 135(1):169-190, 2020, read through the authors' summary on the
[Harvard Law School Forum on Corporate
Governance](http://corpgov.law.harvard.edu/2019/08/20/how-do-venture-capitalists-make-decisions/),
2019-08-20.** Survey of almost 900 VCs. Post-investment, VCs report providing
"strategic guidance (87%), connecting investors (72%), connecting customers
(69%), operational guidance (65%), hiring board members (58%), and hiring
employees (46%)." Post-investment value-added was rated important by 84% and
most important by 27%. Relevant because nearly all VCs say they help beyond
capital. See the counter section for the other half of this finding.

**VC Platform Global Community with Scale Venture Partners, ["The Power of
Platform: How VC Platform Teams Contribute to Outsized Fund
Returns"](https://powerof.vcplatform.com/), 2023.** 850 VC firms' team
composition from 2000 to 2022, returns for 754 funds from PitchBook and
Preqin. "Significant Platform" means platform staff are 10% or more of core
team headcount. For 2010 to 2019 vintages, "Firms with Significant Platform
produce 1,100 basis point improvements in Net IRR and 0.5x TVPI compared to
firms with No Platform" (33.2% versus 22.2% net IRR; 2.8x versus 2.3x TVPI).
52.8% of firms now have moderate or significant platform teams, versus about
26% in 2000. Relevant as the only large dataset linking platform teams to fund
returns. Heavy caveats: it is published by the platform profession's own trade
body, and the report itself says it shows correlation, not causation; firms
that can afford big platform teams are also the established, best-performing
brands. Note that search summaries misquote this as "1,160 basis points"; the
report says 1,100. No 2025 or 2026 update was found.

### Support: AI is shrinking the team a company needs (fresh)

**ICONIQ, ["2026 State of AI Report: The Builder's
Economy"](https://www.iconiq.com/growth/reports/state-of-ai-2026), 2026-07.**
About 300 executives at software companies building AI products, Q2 2026.
33% expect smaller teams over the next 12 to 24 months and 45% plan a
different mix of roles, with customer support and G&A showing the largest
planned decreases. Internal AI spending is projected to rise from 11% of revenue
in 2025 to 16% in 2026. And, against over-reading it: "almost half of
companies say their agents still need a human to step in on at least 30% of
tasks." Interested party (growth investor). Relevant because it supports both
halves of the Metropolis model: shared machinery shrinks the team, and people
still fill gaps.

**ICONIQ, ["Leaner, Smarter, Flatter: Inside the Modern GTM
Organization"](https://www.iconiq.com/growth/reports/gtm-org-structure-ai-2026),
2026.** 150+ B2B software go-to-market leaders. "High adopters generate roughly
2x Net New ARR per GTM FTE ($640K vs. $370K)." Example: "rather than hiring 10
CSMs to cover 2,000 new accounts, one company hired 2 engineers to build an AI
CSM." Same interested party; correlation between AI adoption and productivity,
not proof AI caused it.

**Peter Walker & Hamza Shad (Carta, with Solo Founders), ["Solo Founders Report
2025"](https://carta.com/data/solo-founders-report/), 2025-12-09.** Carta data
on tens of thousands of US companies. The share of new startups with a solo
founder rose from 23.7% in 2019 to 36.3% in H1 2025. Walker: "This trend
reflects technology lowering the cost of company creation." But solo-led
companies were 30% of 2024 startups and received only 14.7% of cash raised in
priced equity rounds. Relevant because it shows AI-era company creation is
getting cheaper, while capital still flows to teams.

**Hyunso Kim, Hyo Kang & Jaeyong Song, ["Generative AI Fuels Solo
Entrepreneurship, but Teams Still Lead at the
Top"](https://arxiv.org/abs/2605.10291), arXiv, 2026-05-11.** 160,000+ Product
Hunt launches. Entry rose sharply after ChatGPT, "driven disproportionately by
solo entrepreneurs," but "much of this growth reflects low-commitment,
experimental entry," and "team-based ventures are increasingly dominant in the
top tiers." Not peer reviewed. Relevant as fresh, independent evidence that AI
lowers the cost of starting while strong outcomes still require more than one
person, which fits "software carries the load, people supply judgment."

### Support: investors building AI-run operating companies (fresh)

**Marc Bhargava & Kate Bender (General Catalyst), ["The Future of
Services"](https://www.generalcatalyst.com/stories/the-future-of-services),
2025-08-28.** Interested party describing its own strategy. US service
industries "generate $6T+ annually," versus a roughly $370 billion software
market. General Catalyst finds AI technologists and industry experts, then
"provide[s] capital and expertise to acquire and operate businesses in that
sector," aiming to "double profit margins, often targeting 30-40% margins." It
says it has "committed billions of dollars into forming and scaling teams."
**Dennis Schaal, ["Amex GBT to Be Acquired by General Catalyst-Backed Long Lake
for $6.3 Billion"](https://skift.com/2026/05/04/amex-gbt-acquired-general-catalyst-long-lake-6-3-billion/),
Skift, 2026-05-04,** confirms the largest deal to date: Long Lake, "a private
equity firm backed by tech and travel investors General Catalyst and Alpha
Wave," agreed to buy American Express Global Business Travel for "$6.3 billion
in cash." Skift adds: "Long Lake will have to prove its mettle." Relevant
because a top venture firm is already treating AI plus shared operating
capability as the source of returns, which is the closest existing analogue to
Metropolis's model and speaks directly to PE readers. Caveat: margin claims are
targets, not results.

**AI inside venture firms and studios:** no credible, independent 2026 data
was found on venture firms or studios using AI agents to support portfolios.
What exists is vendor content and opinion pieces. Do not cite a statistic here.

### Case studies: the a16z platform in action

Framing note from the captain (2026-09-16): the post is not a sales pitch. It
explains the a16z model, says it makes sense, and asks whether a16z would build
its expert network out of people if it were founded today. The case studies
below should illustrate the model fairly, not oversell it. **No verified case
was found with a measured business outcome (a named deal closed, revenue won,
or a named executive placed) attributable to the platform.** The examples
show the platform doing the work, as reported by founders and executives,
which is as far as the evidence goes.

**1. Enterprise customer access: Actifio and the Executive Briefing Center.**
Mike Troiano, ["What's So Special About Andreessen
Horowitz?"](https://medium.com/swlh/whats-so-special-about-andreessen-horowitz-85416438a414),
Medium (The Startup), 2016-04-30, written from inside a portfolio company: "a16z
has been an investor in my company, Actifio, for a few years now." He writes
that he "was at their Executive Briefing Center to meet with a prospective
customer we hadn't been able to get to after months of focused sales and
marketing effort. A Dow component company, whose CIO and entire technology
management team showed up." Attendees "had been hand-picked based on vertical
targeting and 'wish lists' we had provided in advance." His conclusion about
a16z's platform: "They are doing it for us," and "there is simply no other way
we could have made this happen." Concrete action taken: Actifio "relocated a
dedicated, full-time inside sales person to Palo Alto to act as a day-to-day
liaison, to an investor." Caveats: a first-person, favourable account; the
customer is unnamed and no closed deal is reported. (Quote punctuation adjusted
to remove dashes.) a16z describes the center itself, as an interested party,
on its ["Briefings"](https://a16z.com/briefings/) page: it "brings corporate
executives and government leaders together with the most talented
entrepreneurs and technology companies," without published numbers or
outcomes.

**2. Executive recruiting: PagerDuty.** Alisha Green, ["10 Years Later, How
Has Andreessen Horowitz Changed Silicon
Valley?"](https://worth.com/a-decade-later-how-has-andreessen-horowitz-changed-silicon-valley/),
Worth, 2019-08-01. PagerDuty co-founder Alex Solomon: "They helped a lot in
terms of executive recruiting, both with their brand name, executives want to
work at an Andreessen-backed company, and with hands-on expertise." (Dashes in
the original replaced with commas.) Relevant because it names both halves of
what a platform provides: the firm's brand and the specialists' work. Caveats:
no named hire is given; this is the founder's recollection in a feature
article. Okta co-founder Frederic Kerrest, in the same piece, said Okta chose
a16z for "long-term partners who had experience building large, enterprise
software companies," which is about partner experience, not the platform.

**3. Policy and regulatory support: Coinbase.** a16z led Coinbase's $25 million
Series B ([TechCrunch](https://techcrunch.com/2013/12/12/coinbase-raises-25m-from-andreessen-horowitz-to-build-its-bitcoin-wallet-and-merchant-services/),
2013-12-12). After the SEC charged Coinbase in June 2023 with operating as an
unregistered exchange, broker, and clearing agency, a16z and Paradigm filed a
joint amicus brief supporting Coinbase, arguing that "the SEC's regulatory
overreach, coupled with the unpredictability and arbitrariness of its actions,
threatens the development of blockchain technology in the United States"
(Sarah Wynn, [The Block](https://www.theblock.co/post/244562/paradigm-a16z-file-brief-supporting-coinbase-in-battle-with-sec),
2023-08-11). Relevant because it shows a platform capability, legal and policy
work, that almost no startup could fund alone, deployed for a portfolio
company. Caveats: the brief also served a16z's own interests across its crypto
portfolio, and this pass did not verify the case's outcome or attribute any
result to the brief.

**How to use these in the post.** Each case is a function a16z staffs with
people: enterprise introductions, executive search, and policy. That makes them
good illustrations for the post's question. The first two depend on
relationships and judgment (who to invite, who to hire), which supports the
post's point that people fill gaps needing judgment; the logistics around them
(targeting, wish lists, scheduling, research, drafting) are the kind of work a
software platform could carry. That division is our argument, not something
these sources say.

**Not verified, do not use:** specific executives a16z's talent team placed
(no named placement found in a fetchable source); a Forbes 2011 Q&A with
a16z's talent lead (blocked); crypto startup school or bio platform outcomes
(not researched in this pass).

### Complicate / counter

**VCs themselves rank picking above helping.** In Gompers et al., deal
selection was rated important by 86% and most important by 49%, versus 27%
for post-investment value-added; and 96% named the management team as
important to success. The strongest academic evidence says the main thing a VC
does is choose, which a platform, human or software, does not replace.

**People-based platforms were among the first cuts.** Sarah McBride, ["Sequoia
Cuts Seven Talent Staffers on Heels of Partner
Shakeup"](https://finance.yahoo.com/news/sequoia-cuts-seven-talent-staffers-212407134.html),
Bloomberg via Yahoo Finance, 2023-07-24: Sequoia eliminated seven positions,
"one-third" of the talent team that "handles recruiting services for startups,"
amid broader retrenchment. Relevant to the post's argument in both directions:
human platforms are costly and cyclical (support for software), but even
Sequoia judged some of that help expendable (counter to "platform is
essential"). Older than the preferred window; no fresher credible data on
platform team cuts was found.

**Platform returns may be selection, not help.** The Power of Platform report
disclaims causation, and Bernstein et al. measure partner involvement, not
platform services. There is no study showing platform services themselves
cause better outcomes.

**Capital still goes to teams, and AI entry is mostly low quality.** Carta:
solo founders get less than half their share of priced-round cash. Kim, Kang
and Song: AI-driven solo launches rarely reach the top. "AI replaces the team"
is not supported; "AI shrinks the team" is.

**Agents still need people.** ICONIQ 2026: nearly half of companies say agents
need human intervention on at least 30% of tasks. A software platform with no
people would fail the same test.

**Studios: no newer independent evidence.** BVSR'24 (Claim 1) remains the most
rigorous: studios exit less often than traditional pre-seed VC. The
favourable figures circulating in 2026 (for example, studio IRRs of 53%) trace
back to GSSN's 2022 self-reported data, flagged in "Sources not used." No 2025
or 2026 independent studio performance study was verified.

**Not found or not verified:** a credible 2025 to 2026 founder survey rating
platform services (a widely shared "61% of founders rate VC value-add below
average" figure comes from a marketing blog with no traceable method, so it is
not cited); The Information's "Why VC's Platform Teams Are on the Chopping
Block" (paywalled); the Business Horizons article "Venture studios beyond the
hype" (2025, blocked).

### What this evidence supports in public copy, and what it does not

Supported:

- "a16z pioneered the platform model: a team of operators, from marketing and
  talent to legal and policy, dedicated to helping founders" (a16z, its own
  description).
- "Ben Horowitz borrowed the idea from Hollywood's Creative Artists Agency: a
  firm should be a network of specialists, not a set of individuals with their
  own contacts" (a16z podcast, 2018).
- "Rigorous research shows that when investors are more involved, startups
  innovate more and exit successfully more often" (Bernstein, Giroud and
  Townsend, Journal of Finance 2016).
- "Firms with large platform teams have earned higher returns, though no one
  has shown the platform is the cause" (Power of Platform, 2023).
- "Human platform teams are expensive; in 2023 Sequoia cut a third of its
  talent team" (Bloomberg).
- "AI is shrinking teams: a third of AI software companies expect smaller teams
  within two years, yet half say their agents still need a human on at least
  30% of tasks" (ICONIQ 2026, attributed).
- "More than a third of new startups now have a single founder, up from under a
  quarter in 2019, but the money still mostly goes to teams" (Carta, December
  2025).
- "Major investors are already buying services businesses to run them with AI;
  a General Catalyst-backed company agreed to buy Amex GBT for $6.3 billion"
  (General Catalyst; Skift).

Not supported:

- That capital does not matter, or that services matter more than capital.
  VCs rank selection first.
- That platform teams cause higher returns.
- That a software platform outperforms a human platform team, or that any
  AI-native studio has proven outcomes. This is the Metropolis thesis.
- That a16z launched in 2009 with its full platform team; it started with two
  general partners and built the platform over time.
- That founders broadly rate VC value-add poorly (no credible survey found).
- That studios outperform traditional VC.
- That AI lets one person replace a team for top outcomes.

### a16z in its own words (added 2026-09-16)

Added after the captain's review of the first draft: the a16z section did not
explain what "more than money" concretely means, and the earlier pass leaned on
independent studies and thin anecdotes instead of a16z's own extensive material.
Every source below was fetched and read in full on 2026-09-16. Quotes are
exact. **Interested party** marks a16z's own publications and people; the post
explains the model in a16z's terms, so that is fine, but copy should attribute
their numbers to them ("a16z says"). Where a quoted original used a dash, the
quote below is trimmed to avoid it rather than altered.

This subsection updates two findings above. "Case studies" said no named
placement or measured outcome was found; the Databricks, Applied Intuition,
Cursor, Deel and NationBuilder items below close most of that gap, with the
caveats given for each.

#### What "more than money" concretely means

Built from the sources below, the model has five parts:

1. **Owned, shared networks.** Relationships belong to the firm, not to
   individual partners, and specialist staff build them full time:
   corporate buyers, executives, engineers, press, government.
2. **Operating teams that do the network-facing work.** Recruiting
   (executive and technical), enterprise go-to-market (the Executive Briefing
   Center), marketing and media, policy and legal, finance. Partners keep
   strategy and board work.
3. **Paid for by forgoing partner pay.** Management fees that other firms pay
   out to partners fund the staff.
4. **The purpose: keep technical founders in the CEO seat.** The platform
   stands in for the network and experience a first-time CEO lacks.
5. **Brand as borrowed legitimacy.** Customers, candidates and governments
   take a young company more seriously because a16z backs it.

#### The origin: why they built it (primary and founding-era)

**Marc Andreessen, ["Introducing our new venture capital firm Andreessen
Horowitz"](http://blog.pmarca.com/2009/07/introducing-our-new-venture-capital-firm-andreessen-horowitz.html),
blog.pmarca.com, 2009-07-05** (read via the Internet Archive's copy).
Interested party; the founding announcement. It does not describe a big
services platform yet, but it does state the premise: "Our job as venture
capitalists is primarily to support entrepreneurs by helping them build great
companies around their ideas." On staffing: "Ben and I will be the only General
Partners in the firm, at least to start ... We will also build a professional
staff to support us in our efforts and to help our portfolio companies in
various ways." On the founder as CEO: "We cannot guarantee that a founder can
be a great CEO, but we can help that founder develop the skills necessary to
reach his or her full CEO potential." Relevant because it is the earliest
primary statement, and it supersedes the note above that no primary 2009
document was found. It confirms the platform was an intent in 2009, not a
launched team.

**Ben Horowitz, ["Why We Prefer Founding
CEOs"](https://a16z.com/why-we-prefer-founding-ceos/), a16z.com,
2010-04-28.** Interested party. Horowitz calls the preference for founding CEOs
"the most controversial component of our investment strategy," and admits the
cost: "We almost never meet a founder who has these skills at the time they
found the company." That gap is the problem the platform exists to close.

**Dean Takahashi, ["Ben Horowitz on how to be an uber investor and breed
technical CEOs"](https://venturebeat.com/business/ben-horowitz-on-how-to-be-an-uber-investor-and-breed-technical-ceos),
VentureBeat, 2011-10-18** (read through a page summary; the full page did not
render for direct reading, so treat the wording as likely but confirm before
publishing). Horowitz: "We wanted to design a venture firm to help technical
founders become CEOs rather than replace them."

**Scott Kupor on [The Full Ratchet, episode
192](https://fullratchet.net/192-secrets-of-sand-hill-road-scott-kupor/),
2019-08-23** (transcript on the page). Interested party: Kupor was a16z's first
employee and author of *Secrets of Sand Hill Road*. This is the clearest
statement of the design logic found, and it stands in for the book (no
readable excerpt of the book was found). "If you're a young CEO, you probably
don't know a bunch of customers who could buy your product. So could we
basically use the brand of Andreessen Horowitz to build relationships with all
the most important customers and business development partners ... thing
number two was we said, Okay, you probably don't know executives, you don't
know CFOs and heads of sales ... came up with basically a set of what we call
operating teams." On the division of labour: "we have this 100 person
operating team that kind of sits, you know, alongside the GPs," so the
partner does not need "to necessarily know who are the 10 best CFO
candidates," and "could we disaggregate the job of the GP, such that a lot of
those kinds of, you know, network facing functions ... can be handled by the
operating teams." (Transcript typos "GPS" and "candidate outs" corrected to
"GPs" and "candidates".) Relevant because "disaggregate the job of the GP" is
exactly the part of the model the post asks whether software could now carry.

**Tad Friend, ["Tomorrow's Advance
Man"](https://www.newyorker.com/magazine/2015/05/18/tomorrows-advance-man),
The New Yorker, issue of 2015-05-18 (online 2015-05-10).** Independent
long-form, though Newcomer (below) reports a16z's communications chief chose to
cooperate with it. The best single description of the model: "Most venture
firms operate as a guild; each partner works with his own companies, and a
small shared staff helps with business development and recruiting. A16z
introduced a new model: the venture company. Its general partners make about
three hundred thousand dollars a year, far less than the industry standard of
at least a million dollars, and the savings pays for sixty-five specialists in
executive talent, tech talent, market development, corporate development, and
marketing. A16z maintains a network of twenty thousand contacts and brings two
thousand established companies a year to its executive briefing center to meet
its startups (which has produced a pipeline of deals worth three billion
dollars)." Andreessen: "We give our founders the networking superpower,
hyper-accelerating someone into a fully functional C.E.O. in five years." On
CAA, Ovitz "told me that he'd advised them to distinguish themselves by
treating the entrepreneur as a client: 'Take the long view of your platform,
rather than a transactional one. Call everyone a partner, offer services the
others don't, and help people who aren't your clients. Disrupt to
differentiate by becoming a dream-execution machine.'" Also relevant: the
motive was personal. Their own VC at Loudcloud, Benchmark, was "a five-partner
boutique with no back-office specialists to provide the services they'd
craved," and Horowitz says, "We were always the anti-Benchmark."

**Connie Guglielmo and Tomio Geron, ["Andreessen, Horowitz: Capital's New Bad
Boys"](https://www.forbes.com/forbes/2012/0521/feature-midas-list-ben-horowitz-marc-andreesen-silicon-valley-vc-capital-bad-boys.html),
Forbes, 2012-05-02** (May 21, 2012 issue). Independent. Andreessen: "We are a
partnership, but we operate like a company: quantitative, process-oriented,
specialized experts in different areas, leverage through the professional
staff." Ovitz on why they needed services: "If they were going to go
head-to-head with these long-established folks, they knew they needed to do
something different. Otherwise, their money is the same as anyone else's."
Forbes on what they copied from CAA: Ovitz moved agency work "from one of a
single agent handling all aspects of a client's business to a full team of
specialists." **This is the closest verified founding-era statement of
"capital is a commodity."** No a16z source was found using that exact phrase;
the phrase circulates from others (the Acquired podcast hosts, 2019, and a
Seedstars TechCrunch column, 2021), so do not attribute it to a16z.

**Ben Horowitz with Michael Ovitz, a16z Podcast, 2018-09-25** (already cited
above; re-read for this pass). Adds, beyond the network quote: "To take a long
view or a transactional view of a relationship, that came from CAA. A lot of
the idea of the platform was to have the luxury to take a long view of our
relationship." And Ovitz's list of what the service model offers a founder:
"budget help, you can get marketing help, you can get PR help, you can get
advice about how to operate your business."

#### The platform in numbers, over time (all a16z-sourced unless noted)

These are a16z's own figures, relayed by the firm or by reporters, and none
is audited. They are the numbers to use, attributed.

- **2011, recruiting and customers.** Leena Rao, ["Andreessen Horowitz Closes
  $1.5 Billion New
  Fund"](https://techcrunch.com/2012/01/31/andreessen-horowitz-closes-1-5-billion-in-new-funding/),
  TechCrunch, 2012-01-31, reporting Horowitz's own disclosure: in 2011 the firm
  "hosted over 600 portfolio presentations to corporate customers and
  partners," producing "more than 3,000 introductions between portfolio
  companies and prospective Fortune 500/Global 2000 senior executives"; it had
  relationships with "over 4,000 engineers, designers and product managers,"
  made "more than 1,300 introductions to portfolio companies, resulting in 130
  hires"; and "added over 550 executives to its network in 2011 and made more
  than 300 executive introductions." (Horowitz's original blog post was not
  located; these are TechCrunch's paraphrase of it.)
- **Early 2012, staff and pace.** Forbes 2012 (above): "Forty-five people at
  the firm work full-time to help its startups find talent, customers and
  marketing solutions. The operation is funded with the management fees that
  most other firms pay out to their general partners." Network of "1,000
  executives and 5,000 engineers, designers and product managers." "In the
  first quarter of 2012 there were 88 briefings, 265 portfolio presentations
  and 1,625 introductions."
- **2015.** New Yorker (above): 65 specialists, 20,000 contacts, 2,000
  established companies a year through the briefing center, $3 billion
  pipeline.
- **2017, the Executive Briefing Center.** Scott Kupor, ["The EBC in
  NYC"](https://a16z.com/the-ebc-in-nyc/), a16z.com, 2017-05-10. Interested
  party. "Most of our team members are not investors, but rather operators who
  spend all of their time building external relationships with important
  partners and connecting our portfolio companies into those partners." "Since
  first opening the doors of our Executive Briefing Center here in Menlo Park,
  we've had more than 12,000 briefings and events, which has resulted in more
  than $3.5 billion in sales pipeline for our portfolio companies." The idea:
  "make it easy for large companies and government organizations to access
  innovative, early-stage technologies by hosting a set of meetings for them
  with a targeted cross-section of our portfolio companies." Note "pipeline" is
  not closed revenue.
- **2019.** Kupor: a "100 person operating team" (above).
- **2022.** Eric Newcomer and Jessica Mathews, ["Inside Andreessen Horowitz's
  grand plans to scale its venture capital firm into a behemoth and conquer the
  globe"](https://fortune.com/longform/andreessen-horowitz-beyond-silicon-valley/),
  Fortune, December 2022/January 2023 issue. Independent. Payroll "now numbers
  more than 500 people compared with 240 in July 2021" (all staff, not only
  platform).
- **2026.** a16z's ["About"](https://a16z.com/about/) page still gives no
  platform headcount, only "the largest team of operators in venture." Packy
  McCormick (below) puts total staff at "more than 600 employees."
  David George and Raghu Raghuram, ["Expanding the a16z Growth Fund and
  Platform"](https://a16z.com/expanding-the-a16z-growth-fund-and-platform/),
  a16z.com, 2026-08-31, interested party: "In our 7+ years running a16z Growth,
  we've helped over 100 companies through these transitions," and "Our GTM team
  connects portfolio companies with new customers; Talent has built one of the
  world's best executive and technical talent networks; Global efforts unlock
  international relationships for capital, partnerships, and customers; and New
  Media helps our founders and companies brand build." Their close: "We know it
  takes both capital and operational know-how to win."
- **2026, media.** Erik Torenberg and others, ["New Media, One Year
  In"](https://a16z.com/what-is-new-media-in-2026/), a16z.com, 2026-06-18.
  Interested party. Describes New Media as "'go-direct as a service' for
  startups": in-house video and editorial, owned channels ("a daily email
  newsletter with a quarter million subscribers"), a "portco services" team, and
  talent fellowships. It restates the founding bet: "a venture firm should be
  built like a network (or like CAA) rather than a collection of solo
  investors." It also claims "startups gain tens of millions of dollars in
  contract value," with no named company or figure; do not cite that claim.
  Notably for Metropolis, it describes its network as "a little sprinkle of
  software and AI" on top of people.

#### Named examples where the platform, not the money, made the difference

**The most detailed founder testimony comes from one source with a disclosed
conflict:** Packy McCormick, ["a16z: The Power
Brokers"](https://www.notboring.co/p/a16z-the-power-brokers), Not Boring,
2026-01-09, republished by a16z on its own
[a16z.news](https://www.a16z.news/p/the-power-brokers). McCormick discloses he
was "an advisor to a16z crypto" for over two years, that "Marc Andreessen and
Chris Dixon are LPs in not boring capital," and that a16z's Erik Torenberg
picked the founders he interviewed. Treat these quotes as real statements by
named founders, selected by a friendly writer. Where possible each example is
paired with independent reporting.

**1. Databricks: a Microsoft partnership opened by Horowitz (strongest,
independently confirmed).** Kenrick Cai, ["The Accidental
Billionaire"](https://images.forbes.com/APP_062021/F0621.FEADatabricks.html),
Forbes, June 2021 issue (web version dated 2021-05-26), independent: Horowitz
"sent a recommendation letter to Microsoft CEO Satya Nadella ... Nadella
responded instantly. 'He cc'd a bunch of these super high-up Microsoft
employees, and suddenly they were extremely eager to do a close partnership
with us,' says Ghodsi, who had tried in vain to get in touch with the Microsoft
chief for years." Result: "The two companies collaborated to integrate
Databricks directly into Azure ... Microsoft's sales force now touts 'Azure
Databricks' when pitching to prospective clients, and in 2019 the Redmond giant
invested in Ghodsi's company." Jordan Novet, ["Microsoft used to scare
start-ups but is now an 'outstandingly good partner,' says Silicon Valley
investor Ben Horowitz"](https://www.cnbc.com/2019/02/04/microsoft-invests-in-databricks-funding-at-2point7-billion-valuation.html),
CNBC, 2019-02-05, independently confirms: "The relationship between Databricks
and Microsoft dates to 2016, when Horowitz sent an email about the company to
Nadella." McCormick adds Ghodsi's version (other VCs' introductions got
"buried in executive assistant loops") and his overall verdict: "I don't think
Databricks would be around today if it wasn't for a16z." Caveat: this was a
co-founder's personal relationship, not a platform team. It is "more than
money" but illustrates the network, not the staffed operation. McCormick also
writes that Databricks "credits the EBC with 50% of its early sales," but that
is his paraphrase with no quote or source; do not cite it as a fact.

**2. Cursor: 200 CTO introductions in a year (a16z's go-to-market team).**
McCormick, quoting Cursor COO Jordan Topoleski: "The platform team introduced
us to nearly 200 CTOs at key target customers during our first year working
together. They held daily standups with us, came by our office late at night,
and had a dedicated team focused on organizing strategic meetings for us. As we
scaled our footprint in financial services, they once scheduled 34 c-suite
meetings in a single week at their office for us. They've felt like an
extension of our GTM team." Caveat: no closed deals are named; no independent
confirmation found. It is the clearest current description of what the
enterprise platform actually does day to day.

**3. Applied Intuition: its first defense customer and its President
(briefings and talent).** McCormick, quoting CEO Qasar Younis: "Our first
defense customer came through an EBC (Executive Business Center) kind of thing
that they do," and "A number of our early employees, including the President of
our company, came through a16z. Our number two in finance came from a16z."
Caveat: the customer and the President are not named in the piece; not
independently confirmed.

**4. Deel: a CFO and two board members, and cover in a PR crisis (talent and
communications).** McCormick, quoting CEO Alex Bouaziz: a16z's executive
talent partner "has felt like a part of our talent acquisition team," and when
hiring the CFO (named in the piece as Joe Kauffman), "Ben and Anish helped me
close him. Anish was texting him. Ben was texting him." Later, a16z "helped us
hire two of our three independent board members," named as Francis deSouza and
Todd Ford: "They helped source, go through deep diligence, reference check,
make intros." Caveat: founder testimony via the conflicted source; the hires
themselves are public, a16z's role in them is not independently confirmed.

**Older, independent, and smaller: NationBuilder's sales chief.** Forbes 2012
(above): "'I thought [the business services] was hype at first, but it really
works,' says Joe Green ... who hired his sales chief for his startup
NationBuilder thanks to Andreessen Horowitz recruiters, before he had even
signed his term sheet." (A dash in the original is replaced with a comma.)
Useful because it is independent and names a placement, though not the person.

Also usable as colour, all via McCormick: Flock Safety's Garrett Langley on
the New Media team during a PR problem ("They are in our Slack now. They are in
our positioning/branding docs."); Fei-Fei Li of World Labs on a launch video
(also quoted in a16z's New Media post); Astro Mechanica's Ian Brooke on
introductions to "the Air Force Rapid Capabilities Office." And McCormick
reports the working style every founder described as "clearly inspired by
CAA: they stay out of your way and let you run the company, until you ask for
something, at which point, they SWARM."

#### What a16z says the platform is worth, and the counter-case

**The claim.** Horowitz, 2024 (cited above): "A great investor with the right
help, the right networking, and the right expertise at the right time can be
the difference between success and failure." a16z Growth, 2026: "it takes both
capital and operational know-how to win." McCormick's back-of-envelope, not
a16z's: Databricks alone may have "paid back every dollar a16z has invested in
its platform since inception." That is speculation; do not present it as a
finding.

**The economics, stated by a16z.** McCormick quotes a16z general partner David
Haber: Marc and Ben "didn't need to take salaries. Instead, they'd play the
long game and invest management fees into the platform ... instead of paying
people more money and bonuses, like many funds do, we choose to invest in the
firm." Consistent with Forbes 2012 and the New Yorker 2015 on partner pay.

**Criticism and doubt, independent sources:**

- **Tried before, with mixed results.** Forbes 2012: Mohr Davidow and Charles
  River Ventures (CRVelocity, 2000) ran similar staff programs; "The results
  were mixed at both firms," per George Zachary, who worked at both. An
  anonymous rival VC: "When you go to the doctor's office, you want to see the
  doctor, not the physician's assistant."
- **Seen by rivals as marketing.** New Yorker 2015: top firms copied the
  services "even if they privately believed that a16z's services were simply a
  marketing tool."
- **The original plan did not work as designed.** New Yorker 2015: the early
  strategy of seeding 80 startups and helping them all without board seats
  "had flaws"; LP Horsley Bridge's Elizabeth Obershaw: "Our list of cons was
  that we didn't think their original model would work at all."
- **Scale versus attention.** Fortune 2022: "Some startup founders wonder
  whether a firm with so many large investments can provide the kind of
  hand-holding a young business needs," though two current founders told
  Fortune the team was attentive. Fortune also reports critics accuse the firm
  of "stacking fees," with an estimated $500 million a year in management fees,
  which is the other side of "fees fund the platform."
- **Media machine, not only service.** Eric Newcomer, ["The Unauthorized Story
  of Andreessen
  Horowitz"](https://www.newcomer.co/p/the-unauthorized-story-of-andreessen),
  Newcomer, 2021-01-20, quotes former a16z analyst Benedict Evans: "A16Z is a
  media company that monetizes through VC," and documents how much of the early
  reputation was built by communications partner Margit Wennmachers.
- **The selection counter-case** (Gompers et al., above) still applies: VCs rank
  picking above helping, and none of these examples separates a16z's help from
  a16z's picking.

#### How the model spread (brief)

- New Yorker 2015: "Andreessen caused us to up our game on the marketing
  side," said Sequoia's Doug Leone; Sequoia "hired an in-house publicist and two
  new marketing specialists." Okta CEO Todd McKinnon: "Every firm we talk to now
  is 'Hey, we're doing all this recruiting, and we'll introduce you to big
  customers.' It's become the table stakes."
- McCormick 2026, Horowitz recalling the 2009 pitch to other VCs: "many of them
  said it was a really dumbass idea and we should definitely not pursue it and
  it's been tried before and it didn't work." Applied Intuition's Younis: older
  firms "would take pride in writing a check and disappearing ... And now it's
  actually really flipped where founders say, 'Well, what more can you do for
  me? I can get money anywhere.'"
- Power of Platform (above): firms with moderate or significant platform teams
  rose from about 26% in 2000 to 52.8% by 2022.
- **Not verified:** specific claims that First Round, Greylock or General
  Catalyst built platform teams *because of* a16z. First Round's platform
  (launched around the same era) may be independent; no source establishing
  causation was read. Say "most major firms now run platform teams," not that
  they copied a16z.

#### Not verified in this pass

- A16z's current platform headcount (no a16z source gives one) and current
  annual briefing counts (latest a16z figure is the 2017 cumulative total).
- The exact phrase "capital is a commodity" from Andreessen, Horowitz or Kupor.
- Readable excerpt of *Secrets of Sand Hill Road*; the 2014 Harvard Business
  School case on a16z (cited by McCormick and a16z, not read).
- Horowitz's original January 2012 blog post with the 2011 platform figures
  (TechCrunch's report of it was read).
- That Databricks attributes 50% of early sales to the briefing center.
- "Why I'm not going back to A16Z" (Medium, possible founder criticism):
  blocked, not read.
- The Worth 2019 PagerDuty quote cited above was not re-read in this pass.

---

## Sources not used, and why

Several sources found during this research were deliberately excluded to keep
this a citable brief instead of a link dump:

- Generic "7 moats for AI startups" listicles (YC library, Medium
  explainers) — restate Helmer's framework without adding evidence beyond
  what the Buteau piece already covers more precisely.
- GSSN's self-reported studio performance statistics (widely repeated: "53%
  IRR vs. 13% for VC," "88% of studio companies still active") — an
  interested party's own marketing numbers about its own member studios, and
  contradicted in direction by the independent, PitchBook-sourced BVSR'24
  study above. If GSSN's own report is needed later, it should be read
  directly and flagged as self-reported, not cited as if independent.
- CFO/enterprise "build vs. buy AI tooling" 2026 trade coverage — relevant to
  enterprise buyers evaluating AI tools, not to Metropolis's build-vs-buy
  analogy about company creation; different question, similar-sounding
  keywords.

## Vault landing

These eight sources are landed in the `metropolis` ailexandria namespace as
`reference` nodes under `pages/metropolis/reference/`, so future documents can
retrieve them with:

```
python3 ~/.ailexandria/cli.py query "<topic>" -n metropolis --json -k 8
```

or the `recall` skill. Each node carries the summary, relevance-to-thesis
note, and full citation (author, publisher, date, URL) from this brief. Node
ids, all linked to `metropolis-vision-north-star` and tagged
`thesis-evidence`:

- `source-buteau-counter-positioning-ai-era`
- `source-a16z-empty-promise-data-moats`
- `source-venture-studio-forum-fatal-flaws`
- `source-bvsr24-venture-studio-research`
- `source-bvp-atlas-future-of-ai-is-vertical`
- `source-a16z-notes-on-ai-apps-2026`
- `source-stanford-codex-defensible-moats-vertical-ai`
- `source-andreessen-software-eating-the-world` — a LINEAGE source (see
  "Lineage sources" above), tagged `thesis-lineage` rather than
  `thesis-evidence` so it is not retrieved as if it evidenced a claim.
- `source-mckee-linkedin-counter-positioning-unverified` — captured as a
  flagged lead, not a settled source; see "The seed source" above. Re-run
  `capture` for this id once the real LinkedIn URL is found, replacing the
  body with verified content.

**Capture method note:** `capture-source-pack` (the tool built for exactly
this — "capture one bounded reviewed external-evidence pack") fetches raw
HTML and embeds it unprocessed. On modern JS-heavy pages that raw body can
contain a single dense, whitespace-free chunk (minified script/style) that
overflows the local embedder's context window and hard-fails the whole
`ingest` batch with no partial progress (`ailexandria ingest -n metropolis`
500s from Ollama: "input tokens too large to process"). Worked around here by
hand-authoring a clean markdown summary + citation per source via
`ailexandria capture ... --status ready` and filing with `ailexandria
process` (which degrades per-item instead of aborting the batch). If this
recurs, either strip HTML before capture or fix `capture-source-pack`'s
`article` adapter to convert to text before it's embedded — the fetched raw
HTML is discarded either way once the clean node exists, so no re-fetch is
needed to fix it later.
