---
title: The difference a year makes
date: 2026-09-17
summary: A year ago, I was leading a team of engineers at AWS. Today I do the same job with AI agents doing the work, and it scales in a way that team never could.
draft: false
---

A year ago, I was leading a team at AWS. I had spent more than five years on Amazon FSx, and by then I was a mid-level engineer acting in a senior role, with a team that grew to 12 engineers. I partnered with a software development manager, and I could turn to a principal engineer, a technical product manager, and an escalation path when something was beyond us.

The job meant wearing three hats. As a product manager, I planned the work and wrote the documents that defined it: PRFAQs, design docs, customer journey docs, and project plans and roadmaps, and I took them to senior leadership. As a program manager, I kept the team unblocked and the work moving. As a software engineer, I owned the critical path, the sequence of work that decides when a project ships, and I trained and mentored the engineers on the team.

At Amazon, level is about leverage. The more senior you become, the further you are expected to move from doing the work yourself. You delegate so the same work gets done to the same bar, and you spend your time on what only you can do. I learned from some of the best at it: to see work streams as a graph of dependencies laid out against time and people, to expect a one-page decision doc from anyone who was blocked (the context, the problem, a recommendation, the alternatives, and what the decision would require), and to lean on writing so a team could work without everyone in the same room at the same time.

Today I am rebuilding that model in polis, the platform Metropolis runs on, where AI agents, workflows, and shared knowledge do the work. The model was good. It also ran on best intentions: people doing their best within the limits of hiring, handoffs, and memory.

## A company is four things

Those limits are not unique to one team. I think of any company as four things: its people, what it knows, the work it does, and the resources it creates and manages for customers. Each one worked on my team, and each one had limits.

## People

We only had so many engineers. Hiring another one was expensive and took time, and when there was less work, scaling a team down could mean layoffs. People work eight-hour days, five days a week, and they have lives outside of work, as they should. After every handoff, someone needs time to get situated before they can make progress.

In polis, the team is made of agents. Each agent is created for one piece of work and given the context that work needs and nothing else, prepared before it starts, so it can begin working right away. Capacity is a setting: when there is more work, we run more workers, and when there is less, we run fewer. The agents work around the clock.

## Knowledge

Knowledge on a human team is fragile. The real source of truth for what we wanted usually lived in someone's head. At best, they wrote it down and kept the document current. Even then, people had to remember the document existed, find it when it mattered, and read it. When someone new joined, there was a mountain of knowledge to climb before they could contribute.

In polis, agents share one knowledge base. Research, decisions, and lessons from finished work get written back into it and reviewed by a person before they land, so it reflects our current view, much like the [wiki maintained by LLMs](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) that Andrej Karpathy has described. Agents retrieve what they need before they act, and a new agent starts with everything the earlier ones learned.

## Work

On a human team, plans depend on everyone doing what the plan assumes. A work stream slips, or a project gets stuck in design, and everything behind it waits. Someone who is blocked has to notice, write it up, and wait for a decision.

In polis, our software development lifecycle is automated, with my approval at the points that matter. Work items form a dependency graph, and dispatch is automatic: when an agent finishes and frees capacity, the next piece of work that is ready starts on its own.

A stuck agent cannot just stop. It has to raise a decision that explains what happened and what each option would lead to, which turns the one-page decision doc into a rule the system enforces. Plans come to me for approval before significant work starts, and a separate reviewer agent checks the finished work, backs every problem it reports with evidence, and cannot push changes itself.

## Resources

The fourth part is the resources a company creates and manages for customers: accounts, subscriptions, orders, and the infrastructure behind them. Managing them well takes a control plane, the system that decides how a resource can be created, changed, or removed. Most companies do not have a strong one. Even at AWS, where we did, keeping every change inside it took constant effort. The right path was harder to learn than a quick workaround, and best intentions only go so far when a deadline is close.

In polis, the system is constrained so the right path is the only path. Agents change a resource only through the platform's own interfaces, with the permissions their job grants, and consequential changes wait for a person to approve them. Agents work from the architecture we have written down, so working within the system is simply normal.

## My job now

My job is the same job I had a year ago. I propose projects, plan the work and the architecture, review plans and code, and make the decisions that keep everything moving. I have not written a line of code by hand in polis or in anything else we have built. Agents plan, build, review, and release the software.

An open-source tool called [firstmate](https://github.com/kunchenguid/firstmate) got polis started, and for the last couple of weeks, polis has been building itself.

What changed is how it scales. Working on my own, I can take on work that used to need a team. The system can still grow with people, too. Adding people to the platform team means more people to steer the work, govern it, and run operations, with agents doing the work behind each of them. A year ago, my leverage stopped at the size of my team. It no longer stops at the size of one.

None of this is a judgment of the people I worked with. That team did great work on best intentions. But a system that runs on best intentions depends on everyone doing their best every day, and a constrained system does the right thing by default. That frees people for what they actually care about. I don't need to be the one writing the code. I need the outcome, and now that is where my time goes.
