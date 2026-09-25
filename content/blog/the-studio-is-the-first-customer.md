---
title: The studio is the first customer
date: 2026-08-25
summary: Metropolis is the first company built on polis. What it needs gets built once, and every company after it inherits that work.
---

*Update, September 2026: the sequel to this post is [Why we start with consulting](/blog/why-consulting-first/), about Metropolis Consulting, the first company running on polis for other people.*

Every company we build will run on polis, the platform underneath Metropolis.
The first company to run on it is Metropolis itself.

That makes the studio its own first portfolio company. When Metropolis needs a
new capability, whether that is planning work, reviewing code, or tracking what
an AI agent costs, polis gets built to provide it, and Metropolis uses it every
day before any other company does. The companies that come after inherit what
already works, and they can ask for more.

Engineering was the first function to run this way. Agents plan, build, review,
and deliver our own software, and a person approves what ships.

## What we watch

We watch every workflow, including the steps an AI model performs, for four
things:

- **What is running.** Which workflows are active, which step each one is on,
  and which model is doing the work.
- **What it costs.** What each run spends, including the model usage behind
  every AI step.
- **What it is doing.** A record of each step's inputs, outputs, and decisions,
  so any result can be traced back to how it was produced.
- **Whether it is performing as expected.** Results measured against the range
  we expect, so a workflow that drifts gets caught before a customer notices.

Consequential decisions still wait for a person, and agents get more autonomy
only where that record shows they have earned it. [AI isn't a
genie](/blog/not-a-genie/) looks at why so many AI projects stall without this
kind of structure.

## The part people underestimate

The hard problem is almost never the model. It is that the work being automated
was never written down.

A function that "everyone just knows how to do" cannot be handed to a system,
because there is nothing to hand over. The first real deliverable when a function
moves onto polis is an accurate map of how the function actually runs today,
including the parts that exist only in one person's head and the parts everyone
quietly works around.

That map is worth something even if you never automate a single step. It is also
the thing that compounds: once the knowledge is explicit, it can be retrieved,
evaluated, corrected, and improved. Left tacit, it gets rediscovered every time
someone leaves.

## Why it compounds

Each function Metropolis moves onto polis becomes one that a portfolio company
never has to build. Engineering came first. Product and planning come next, then
the rest of the business, one function at a time. By the time a portfolio
company needs something, Metropolis has usually needed it already, and it has
been running, monitored, and corrected on real work.

When a portfolio company needs something Metropolis never did, it can ask for
it. If other companies are likely to need it too, polis builds it once and every
company gets it. That is why the studio is the first customer: every capability
starts by serving Metropolis, and ends up serving every company we build.
