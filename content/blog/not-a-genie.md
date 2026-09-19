---
title: AI isn't a genie
date: 2026-09-16
summary: If you think AI has been oversold, you're right. An LLM is a language tool, and it delivers when it is used for the right job with the right system around it.
featured: true
draft: false
---

In a [Gallup survey](https://news.gallup.com/poll/712751/americans-cool-toward.aspx) this May, 39% of Americans said AI does more harm than good, up from 31%. Only 27% trust businesses to use it responsibly.

If you think AI has been oversold, you're right. People were promised a genie: describe what you want, and it appears. What they got was a tool that sometimes delivers exactly that and sometimes makes things up with complete confidence. At Metropolis, we use AI to build our own companies and to help other businesses build theirs. Most of our work goes into closing that gap.

## What was promised

In May 2025, Anthropic's CEO, Dario Amodei, told [Axios](https://www.axios.com/2025/05/28/ai-jobs-white-collar-unemployment-anthropic) that AI could eliminate half of all entry-level white-collar jobs within five years. Taking over that work would mean doing it reliably, and the tools still make things up, even in white-collar work like law. A [public database](https://www.damiencharlotin.com/hallucinations/) kept by researcher Damien Charlotin lists 2,041 court decisions in which a party relied on content an AI made up. In a [Stanford test](https://arxiv.org/abs/2405.20362), legal research tools sold as "hallucination-free" made things up between 17% and 33% of the time.

## "Just use AI"

Inside companies, the promise often arrives as an instruction: just use AI. [Meta](https://fortune.com/2026/04/09/meta-killed-employee-ai-token-dashboard/) made "AI-driven impact" a core expectation in its 2026 performance reviews, and some employees reportedly ran AI agents for hours to climb an internal token leaderboard. In April, [Duolingo's CEO](https://fortune.com/2026/04/13/duolingo-ceo-luis-von-ahn-ai-usage-requirement-employee-performance-evaluations/) dropped AI usage from performance reviews, saying that "rather than being held accountable for the actual outcome, we're trying to just push something that in some cases did not fit."

The results show it. In an [NBER survey](https://www.nber.org/papers/w34836) published in February, 69% of firms said they use AI, but nine in ten executives reported no impact on productivity or employment over the past three years.

## Why so many projects stall

A large language model, or LLM, is the kind of AI behind chatbots like ChatGPT and Claude, and it is what most people mean by AI today. It is trained on huge amounts of text to predict likely words, which makes it a language tool. It is also probabilistic. Traditional software gives the same output for the same input. An LLM gives a likely answer, and the likely answer can change. [Researchers at Thinking Machines](https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/) ran one prompt 1,000 times with settings meant to make the output identical and got 80 different answers.

Its abilities are uneven, too. [Stanford's 2026 AI Index](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance) reports that an AI system won gold at the International Mathematical Olympiad, while the best model read analog clocks correctly only 50.6% of the time. In a [randomized experiment](https://doi.org/10.1287/orsc.2025.21838) with 758 BCG consultants, AI raised quality by roughly 30% on tasks it handled well, and made consultants 19 percentage points less likely to reach the right answer on a task it didn't.

Many companies treated this tool like ordinary software. They connected a model to a problem with nothing around it to supply context or check its work, and expected predictable results.

## Isn't it a bubble?

Financially, it may be. In June, the [Bank for International Settlements](https://www.bis.org/publications/aer-2026/progress-peril) compared AI investment to railway mania and the dot-com boom, breakthroughs that "attracted capital in excess of what commercial returns could ultimately justify." It also found that AI saves 20% to 50% of the time on individual tasks, while estimates of economy-wide productivity gains are under 1%. The hype was built on genies. We think the lasting value will come from the systems that put these tools to work.

## The right tool for the job

An LLM is one tool in a discipline that is decades old. It is the right choice for work that needs language and judgment: reading a messy document, drafting a reply, deciding which path fits a request. Much of the work in a business is something else. Work with a known right answer belongs in ordinary code, which is cheaper, faster, and gives the same result every time. Finding information is a job for search. Predicting from business data is a job for models trained on that data. An LLM can call these tools, but when the job is clear, it is simpler to use them directly.

Deciding which tool handles which step is engineering. People who understand the work can make that decision once and build it into the system, instead of leaving a model to rediscover it on every run.

## The real magic

Before Metropolis, I spent more than five years at AWS on Amazon FSx, three of them leading a team I founded to automate the service's expansion. A new build took about three months of people's time. We encoded it as a graph of more than 2,000 steps and aimed for zero-touch: no human time unless it was absolutely necessary. That system had no LLM in it, so anything that needed judgment went back to a person.

An LLM moves that limit. Steps that need judgment can now run inside the same kind of system, where an agent can try approaches until one works and record what worked so the next agent starts there. At Metropolis, the system checks the model's work. Before anything uses an answer, the system confirms it is in the form the next step expects. Anything consequential, like contacting a customer, waits for a person to approve it. Each step uses a model chosen for that step, and it stops rather than quietly switching to a different one. Answers come from information the system looked up, not from the model's memory, and we measure how each workflow performed on real work. That work is what makes AI deliver, and it is what using AI responsibly looks like in practice.
