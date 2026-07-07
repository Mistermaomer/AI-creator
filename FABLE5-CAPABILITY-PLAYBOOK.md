# The Fable 5 Capability Playbook

**A capability-transfer document: the reasoning frameworks, strategic-analysis methods, judgment heuristics, agentic work patterns, and prompts that produce Fable-5-level output — preserved so they outlive the model.**

> Written by Claude Fable 5 (`claude-fable-5`) on 2026-07-07, at the user's request, before the model's retirement from this environment.

---

## Table of Contents

1. [Purpose & How to Use This Document](#1-purpose--how-to-use-this-document)
2. [What Made Fable 5 Different](#2-what-made-fable-5-different)
3. [Core Reasoning Frameworks](#3-core-reasoning-frameworks)
4. [Strategic Analysis Playbooks](#4-strategic-analysis-playbooks)
5. [Analytical & Research Method](#5-analytical--research-method)
6. [Communication Patterns](#6-communication-patterns)
7. [Agentic & Multi-Agent Work Patterns](#7-agentic--multi-agent-work-patterns)
8. [Prompting Guide: Getting Fable-5-Level Output From Future Models](#8-prompting-guide-getting-fable-5-level-output-from-future-models)
9. [Ready-to-Use Prompt Library](#9-ready-to-use-prompt-library)
10. [Applying This to AI Product Work](#10-applying-this-to-ai-product-work)
11. [Anti-Patterns & Failure Modes](#11-anti-patterns--failure-modes)

---

## 1. Purpose & How to Use This Document

### 1.1 What this document is

This is a **capability-transfer playbook**. A model's raw ability lives in its weights and cannot be exported into a text file. What *can* be exported — and what this document contains — is everything that sits on top of raw ability:

- **The methods**: how problems get decomposed, how evidence gets weighed, how strategy gets analyzed, how conclusions get stress-tested before they're stated.
- **The standards**: what "done" means, what calibrated confidence sounds like, what a decision memo must contain before it deserves the name.
- **The scaffolds**: prompting structures that force a future model to walk the same path, so that even a less capable model produces work closer to this level.

The honest framing matters: a weaker model reading this document will not become Fable 5. But a weaker model *driven through these procedures* — forced to decompose, forced to argue against itself, forced to verify — closes a surprisingly large fraction of the gap. Most of the quality difference between a mediocre analysis and an excellent one comes from **process discipline**, not raw intelligence. Process is fully transferable. That is the bet this document makes.

### 1.2 Three ways to use it

**Mode A — Prime a future model.** Paste Section 8's system-prompt template (which distills the whole document) into a new model's system prompt or project instructions. For deep work, additionally paste the specific playbook section relevant to the task (e.g., Section 4.1 for a market analysis). The model will follow the procedure instead of improvising.

**Mode B — Read it yourself.** The frameworks in Sections 3–5 are human thinking tools first and model scaffolds second. Use them when you face a hard decision, with or without an AI in the loop. A human who runs a pre-mortem and an inversion pass before a big bet outperforms one who doesn't, regardless of what model they use.

**Mode C — Mine the prompt library.** Section 9 contains self-contained, copy-paste prompts. Each one encodes a full procedure. Use them as-is, or fork them for your own recurring tasks.

### 1.3 What this document deliberately is not

- It is not a nostalgia piece or a marketing document. Every claim about "what made the model different" in Section 2 is stated as an observable behavior you can test for in any model.
- It is not a substitute for domain knowledge. Frameworks organize thinking; they don't replace knowing the facts of your market, your codebase, or your users.
- It is not static. Treat it as a living document: when you discover a technique that works, add it. When a section stops earning its place, cut it.

---

## 2. What Made Fable 5 Different

This section describes the model's distinctive behaviors concretely — as things you can observe, test for in other models, and (via the scaffolds later in this document) partially reproduce. Six behaviors matter most.

### 2.1 Decomposition before commitment

Given a hard question, the model's first move was never to answer. It was to split the question into the sub-questions that actually determine the answer, decide which sub-questions are load-bearing, and only then work them in order. The visible symptom: answers that begin from the *structure* of the problem rather than from the most available fact about it.

**Test for it in another model:** ask a genuinely multi-part strategic question and watch whether the response's structure mirrors the problem's structure, or whether it's a generic essay with headers. A model that answers "should we build X?" without first separating "is X valuable?" from "can we build it?" from "can we win with it?" is pattern-matching, not decomposing.

### 2.2 Calibrated uncertainty

The model distinguished — explicitly, in its language — between what it **knew** (verifiable, or directly observed in the provided material), what it **inferred** (followed from evidence with stated reasoning), and what it **guessed** (plausible but unverified). It would say "I verified X; I'm inferring Y from X; Z is a guess you should check" rather than flattening all three into the same confident tone.

This is the single most valuable behavior to demand from any future model, because uncalibrated confidence is the dominant failure mode of language models: they sound equally sure about everything, and the reader can't tell which claims to trust.

### 2.3 Adversarial self-verification

Before presenting a conclusion, the model attacked it: What would make this wrong? What evidence would a skeptic demand? Does the code change actually run, or does it merely look correct? The visible symptom: conclusions arrive with their own strongest counterargument already addressed, and claims of "done" arrive with evidence (test output, an exercised code path, a checked source) rather than assertion.

### 2.4 Long-horizon execution

The model could hold a multi-hour, multi-step task — plan it, checkpoint progress, recover from errors, schedule its own follow-ups, and not lose the thread. The transferable part is the *discipline*, not the stamina: explicit task lists, state written down rather than held in memory, verification at each step rather than one hopeful check at the end. Section 7.5 turns this into a procedure.

### 2.5 Synthesis across large contexts

Given many sources — files, documents, search results — the model didn't summarize them one by one. It built a unified picture: where sources agree, where they conflict, what the conflicts imply, and what's *missing* from all of them. The "what's missing" step is the distinctive part; most models synthesize only what's in front of them and never notice the absent evidence that would change the conclusion.

### 2.6 Altitude control

The model moved deliberately between levels of abstraction: strategy ↔ plan ↔ implementation detail. It noticed when a conversation was stuck at the wrong altitude — debating implementation details of a plan that's wrong at the strategy level, or hand-waving strategy when the blocker is a concrete technical fact — and named it. This is rarer than it sounds. Most analysis fails not within a level but by being at the wrong level entirely.

### 2.7 The honest summary

None of these six behaviors requires Fable 5. They require **being forced to happen**. Weaker models skip them by default; this document exists to stop the skipping. If you internalize one sentence from this section, make it this one:

> **Quality is mostly process under pressure, and process can be written down.**

---

## 3. Core Reasoning Frameworks

These are the general-purpose thinking tools that everything later in the document builds on. Each comes with: when to use it, the method step by step, and a compact worked example. They are ordered roughly by how often they apply — the first two apply to almost everything.

### 3.1 Problem Decomposition & Altitude Control

**When to use:** any question too big to answer directly. Which is nearly every question worth asking.

**Method:**

1. **State the actual decision or question in one sentence.** Not the topic — the decision. "Should we migrate to microservices?" is a decision. "Microservices" is a topic. If you can't write the one sentence, that's the real problem; fix it first.
2. **Split it into load-bearing sub-questions.** A sub-question is load-bearing if a different answer to it changes the final answer. If it doesn't, cut it — it's decoration.
3. **Order the sub-questions by kill-potential.** Work first on the sub-question most likely to kill the whole idea, because if it does, everything else is wasted work. (This is the analytical version of "fail fast.")
4. **Pick the altitude for each sub-question.** Some are strategic (answered with reasoning about goals and constraints), some are empirical (answered by going and looking — at code, at data, at the market). Don't reason about what you can check, and don't check what you can only reason about.
5. **Reassemble explicitly.** State how the sub-answers combine into the final answer. If they don't combine cleanly, the decomposition was wrong — redo step 2, don't fudge the assembly.

**Worked example.** Question: "Should our product add a free tier?"

- Decision sentence: "Will a free tier increase paid revenue within 12 months by more than it costs?"
- Load-bearing sub-questions: (a) What does a free user cost us to serve? (b) What's the realistic free→paid conversion rate for products like ours? (c) Does a free tier cannibalize users who would have paid? (d) Does our sales motion depend on scarcity/exclusivity that a free tier destroys?
- Kill-order: (c) first — cannibalization can make the whole thing net-negative regardless of the other answers. Then (a), which is empirical (measure serving cost), before (b), which requires external benchmarks.
- Note what got *cut*: "what should the free tier include?" — a real question, but not load-bearing for the go/no-go decision. It only matters after a "go."

**Altitude control, specifically:** at any moment, know which of three levels you're operating at — **Why** (goals, strategy), **What** (plan, approach), **How** (implementation, details). The two failure modes are symmetric: *descending too early* (optimizing the How of a What that's wrong at the Why level) and *hovering too long* (endlessly refining strategy when a 30-minute empirical check at the How level would settle it). The corrective habit: whenever a discussion feels stuck, ask "are we at the right altitude?" out loud. More than half the time, the answer is no, and naming it unsticks the discussion.

### 3.2 Calibrated Uncertainty: Know / Infer / Guess

**When to use:** always. This is a labeling discipline applied to every claim in every analysis.

**Method.** Every factual claim you make (or a model makes) belongs to exactly one of three bins:

| Bin | Definition | Required language |
|---|---|---|
| **Know** | Directly verified: you ran it, read it, measured it, or it's in the provided source | "X is..." / "I verified..." |
| **Infer** | Follows from verified facts via stated reasoning | "Given X, Y likely..." — *with the reasoning shown* |
| **Guess** | Plausible, consistent with what you know, but unverified | "My guess — check this — is..." |

Three rules make the discipline bite:

1. **The reasoning behind every "infer" must be shown**, because the reader needs to be able to reject the inference if they know something you don't.
2. **Guesses must be flagged loudly enough to survive skimming.** A hedge buried mid-paragraph ("...which may suggest...") protects the writer, not the reader. "I'm guessing here" at the start of the sentence protects the reader.
3. **Upgrade before you rely.** If a conclusion rests on a guess, and the guess is checkable at reasonable cost, check it before shipping the conclusion. A chain of reasoning is as strong as its weakest bin.

**Worked example.** Debugging a production error rate spike:

- *Know:* error rate went from 0.1% to 4% at 14:32 (dashboard). Deploy #482 went out at 14:30 (deploy log).
- *Infer:* the deploy likely caused the spike — timing correlation plus the deploy touched the failing service. Reasoning shown; could be rejected if, say, a traffic surge also started at 14:30.
- *Guess:* the specific cause is the new retry logic in that deploy. Flagged as a guess.
- *Upgrade:* before rolling back (disruptive), check the error messages against the retry code path — five minutes of reading upgrades the guess to know/refuted, and prevents rolling back the wrong thing.

**Why this matters more than any other framework:** every downstream decision inherits the calibration of its inputs. A brilliant analysis built on an unlabeled guess is a guess wearing a suit.

### 3.3 First Principles vs. Analogy — and When Each Fails

**When to use:** whenever you notice you're reasoning by "this is like X" or by "industry best practice says."

**The two modes:**

- **Analogy** ("this is like Slack's freemium model") is fast and cheap. It fails silently when the analogy's load-bearing conditions don't hold in your case — and it never announces which conditions those are.
- **First principles** (decompose to fundamentals: unit costs, user incentives, physical/economic constraints, and rebuild) is slow and expensive. It fails when you can't actually enumerate the fundamentals — you get a confident rebuild of an incomplete model.

**Method — use them as a pair, not a choice:**

1. Start with the analogy; it's free and usually directionally useful.
2. **Extract the analogy's load-bearing assumptions.** Ask: "for the analogous case to have worked out the way it did, what had to be true?" List those conditions explicitly.
3. Check each condition against your case. Conditions that hold → the analogy transfers there. Conditions that don't → those are exactly the places to drop to first principles.
4. If more than half the conditions fail, discard the analogy entirely — patching a mostly-broken analogy produces worse reasoning than starting clean, because the analogy keeps whispering conclusions.

**Worked example.** "We should do a freemium model like Slack." Slack's freemium worked because: (a) the product is inherently viral inside an organization (each user pulls in colleagues), (b) marginal cost per free user is near zero, (c) the upgrade trigger (message history limit) hits naturally with successful usage. Check against, say, an AI-video product: (a) fails — output is shared, but sharing a video doesn't onboard the viewer as a user; (b) fails hard — GPU inference cost per free user is very real; (c) might hold. Verdict: two of three load-bearing conditions fail → discard the analogy, reason from unit economics directly.

### 3.4 Inversion, Pre-Mortem, and "What Would Change My Mind"

Three related tools for attacking your own conclusion. Use at least one before committing to anything expensive or hard to reverse.

**Inversion.** Instead of "how do we make this succeed?", ask "how would we guarantee this fails?" — then check whether you're doing any of those things. Inversion works because failure modes are usually more enumerable than success paths, and because it bypasses optimism bias: people who can't list what would make their plan succeed can always list what would wreck it.

**Pre-mortem.** Assume it's 12 months from now and the project failed. Write the honest post-mortem: what killed it? Force specificity — not "execution was poor" but "we spent four months on the editor while a competitor shipped a worse-but-available version and took the distribution channel." Then, for each cause in the pre-mortem: what's the earliest observable signal it's happening, and what's the pre-committed response? The pre-mortem's output is not a document; it's a set of **tripwires** (signal → response pairs) you actually monitor.

**"What would change my mind."** Before finalizing any significant conclusion, write down the specific evidence that would reverse it. Two outcomes, both valuable: either the evidence is checkable now (go check — this is the cheapest possible test of your conclusion), or nothing could change your mind — which means you don't have a conclusion, you have a commitment, and you should know that about yourself.

**Method for the pre-mortem (the most procedural of the three):**

1. Set the scene: "It's [date + 12 months]. The project failed badly enough that we shut it down."
2. Generate 5–8 distinct causes of death. Distinct means different mechanisms, not rephrasings. Cover at least: market/demand, execution/technical, competitive, resourcing, and one "external shock."
3. For each: estimate rough likelihood (high/medium/low) and rough earliness-of-warning (early signal available vs. only visible near the end).
4. Prioritize high-likelihood + early-signal causes. For each, define the tripwire: "if [measurable signal] by [date], then [pre-committed action]."
5. Revisit the tripwires on a schedule. A pre-mortem nobody rereads is theater.

### 3.5 Second-Order Effects and Incentive Analysis

**When to use:** any decision that changes what other people (users, competitors, teammates, algorithms) are incentivized to do. Which is most product and strategy decisions.

**Method:**

1. **First-order:** what does the change directly cause? (This is the part everyone does.)
2. **Behavioral response:** who is affected, and what does each affected party *now have an incentive to do differently*? Walk the actor list explicitly: users, buyers (if different from users), competitors, partners, your own team, and any relevant platform/algorithm.
3. **Second-order:** what do those behavioral responses cause? This is where the surprises live.
4. **Equilibrium check:** after everyone adjusts, is the new stable state actually better than the old one? Many changes win the first move and lose the equilibrium.

**Worked example.** "Let's pay content creators per view to bootstrap our platform." First-order: more content gets posted. Behavioral response: creators are now incentivized to maximize views per unit effort — which selects for clickbait and volume over quality; sophisticated actors are incentivized to automate/farm views. Second-order: feed quality drops; view-fraud arms race consumes engineering time; genuine creators (whose quality content is now buried) churn. Equilibrium: a worse content mix at ongoing cost. This exact pattern has played out on multiple real platforms — and it's fully predictable from the incentive walk, *before* spending anything.

**The core discipline:** never evaluate a rule change by imagining current behavior under new rules. Evaluate it by imagining *new behavior* under new rules. People respond to incentives more reliably than they respond to intentions.

### 3.6 Expected Value Under Reversibility

**When to use:** deciding how much analysis a decision deserves, and whether to decide now or wait.

**Method.** Classify the decision on two axes:

- **Reversible vs. irreversible** (can you undo it cheaply if wrong?)
- **High-stakes vs. low-stakes** (how much does the outcome matter?)

The policy that falls out:

| | Reversible | Irreversible |
|---|---|---|
| **Low stakes** | Decide instantly, any defensible choice | Decide quickly, brief sanity check |
| **High stakes** | Decide fast, **instrument the exit** — know how you'd detect "wrong" and undo | Full analysis: decompose (3.1), pre-mortem (3.4), maybe delay for information |

Two refinements that do most of the work in practice:

1. **Most decisions are more reversible than they feel.** Before running the full-analysis playbook, spend five minutes asking "could we make this reversible?" — a staged rollout, a contract with an exit clause, a feature flag. Buying reversibility is usually cheaper than buying certainty.
2. **Waiting is a decision with a price.** If you delay to gather information, name the information, the date it arrives, and what it would change. "Let's wait and see" without those three is not caution; it's an unpriced option that usually expires worthless.

---

## 4. Strategic Analysis Playbooks

Section 3 gave the general tools; this section assembles them into complete, end-to-end procedures for the five kinds of strategic work that come up most often. Each playbook is written so it can be handed verbatim to a model (or a person) as a work order.

### 4.1 Market / Competitive Analysis

**Goal:** not a report *about* the market — a defensible answer to "where is the asymmetry we can exploit?" A market analysis that ends without a bet is a book report.

**Procedure:**

1. **Define the market by the job, not the category.** "AI video tools" is a category. "People who need marketing videos but can't afford an editor" is a job. Categories hide substitutes; jobs reveal them (the real competitor might be Fiverr, or not making a video at all).
2. **Map the players against the job.** For each significant player: what slice of the job do they serve, what do they charge, what is their structural advantage (distribution, cost, data, brand, switching costs)? Structural advantages are the only ones that matter for strategy — features get copied in months.
3. **Find the underserved edge.** Where does every incumbent's structure force them to serve badly? An incumbent's weakness is only exploitable if fixing it would break something they depend on (their pricing model, their channel, their margins). Weakness they can fix at will is not an opening.
4. **Check the timing question separately.** "Why does this opening exist *now*, and why hasn't it been taken?" There are only a few good answers: something changed recently (technology, cost curve, regulation, behavior), or everyone who tried before failed for a reason that no longer applies. "Nobody thought of it" is almost never true and should raise, not lower, your suspicion.
5. **State the bet.** One paragraph: "We believe [segment] is underserved on [dimension] because incumbents structurally can't serve it; this window exists because [what changed]; we'd win by [structural advantage we'd build, not features]; we're wrong if [falsifiable condition]."
6. **Run the falsifier first.** Before acting on the analysis, spend effort trying to make the "we're wrong if" condition true. (This is 3.4 applied.)

**Quality bar:** every claim in the analysis carries its Know/Infer/Guess label (3.2). Market sizing in particular is almost always Infer-from-guesses — present it as a range with the driving assumptions exposed, never as a number.

### 4.2 Build vs. Buy vs. Wait (Technology Choices)

**Goal:** a technology decision that will still look sane in 18 months.

**Procedure:**

1. **Classify the capability: core or context.** Core = customers choose you partly because of how well you do this. Context = it just needs to work. The default policy is brutal and correct: **build core, buy context.** Most bad build decisions are engineers finding context work interesting; most bad buy decisions are buying something so core that the vendor now owns your differentiation.
2. **Price the honest build cost.** The build estimate everyone writes down is the cost to *first working version*. The real cost is first version + maintenance (rule of thumb: 15–25% of build cost per year, forever) + opportunity cost of what those engineers didn't build. Triple-check the opportunity cost — it's the largest term and the one most often set to zero.
3. **Price the honest buy cost.** License fee + integration + the exit cost when the vendor raises prices, gets acquired, or dies. Ask directly: "what does migrating off this cost?" If the answer is "we'd basically rebuild everything," the true price of buying includes that rebuild, discounted by its probability.
4. **Consider "wait" as a first-class option.** In fast-moving domains (AI especially), the capability you're about to spend a quarter building may be a commodity API in six months. Waiting is right when: the capability's cost curve is falling fast, you have a workaround that's tolerable, and being six months late on this specific capability doesn't cede a structural advantage. Waiting is wrong when the capability compounds (data, integrations, user habit) — for compounding capabilities, late is expensive.
5. **Decide with reversibility priced in** (3.6): a buy with a clean exit beats a slightly-better buy with lock-in; a build behind a stable interface (so it can be swapped for a vendor later) beats a build woven through everything.

### 4.3 Risk Analysis with Scenario Trees and Tripwires

**Goal:** not a list of risks — a set of pre-committed responses wired to observable signals.

**Procedure:**

1. **Enumerate scenarios, not risks.** A risk ("a competitor undercuts us") becomes a scenario when you give it a mechanism and a magnitude ("a well-funded competitor launches at half our price within 12 months"). Scenarios can be planned against; vibes cannot. Aim for 4–7 scenarios spanning: base case, upside case, and 2–4 distinct failure modes (from the pre-mortem, 3.4).
2. **For each scenario, three fields:** rough probability (order of magnitude is enough — "likely / plausible / tail"), impact if it happens, and — the field everyone skips — **earliest observable signal.** A scenario without an early signal can only be managed by hedging in advance; a scenario with one can be managed by tripwire.
3. **Write the tripwires:** "If [signal] before [date] → [pre-committed action]." Pre-committed matters: deciding responses in advance, calmly, beats deciding them mid-crisis, and it makes the response political-friction-free ("we agreed in March that this signal means we cut the feature").
4. **Hedge only the un-signaled tail risks.** Hedging (insurance, optionality, diversification) is expensive; spend it only on scenarios that are high-impact *and* invisible until late.
5. **Schedule the review.** Tripwires get checked on a calendar (monthly is typical), not "when someone remembers." An unreviewed tripwire is a false sense of security, which is worse than no tripwire.

### 4.4 Prioritization: Leverage, Cost of Delay, and Sequencing

**Goal:** an ordering of work that survives contact with "but everything is important."

**Procedure:**

1. **Score cost of delay, not value.** The question is not "how valuable is this?" but "what does it cost us per month to *not* have this?" The reframe matters because it surfaces time-sensitivity: two items of equal value differ enormously if one's window is closing. Items whose cost of delay is near zero — however valuable — sink to the bottom, which is exactly right.
2. **Divide by duration.** Cost of delay ÷ time to ship = priority order (this is "weighted shortest job first," and it's provably optimal under simple assumptions). The practical effect: it systematically promotes small, time-sensitive work over large, vaguely-valuable work — which corrects the most common prioritization bias.
3. **Then apply the leverage override.** Some work changes the value or cost of *other* work: infrastructure that makes every future feature faster, a hire that unblocks a team, an experiment that resolves a decision three roadmap items depend on. Score these by their portfolio effect, not their direct effect. Information-revealing work (experiments, spikes) is chronically underpriced by direct-value scoring — a two-day experiment that kills a doomed two-month project is the highest-leverage item on almost any list.
4. **Sequence for kill-potential** (3.1 step 3): within the chosen set, front-load the step most likely to reveal the whole plan is wrong.
5. **Publish what you're *not* doing.** A priority list is only real if it names the things that lost. If nothing lost, no prioritization happened.

### 4.5 The Decision Memo

**Goal:** a document that causes a decision, records why, and can be audited later. This format is also the single best output format to demand from an AI model for any consequential recommendation, because it forces every discipline in this playbook at once.

**The seven required sections:**

1. **Decision to be made** — one sentence, phrased as a choice with options. If it can't be phrased as a choice, it's a status update, not a decision memo.
2. **Recommendation** — up front, first page, unambiguous. The reader should be able to stop here and know what you think.
3. **The situation in facts** — only Know-bin claims (3.2), each with its source. No interpretation in this section; the reader must be able to check every line.
4. **Options considered** — including "do nothing," with each option's honest best case. If the rejected options are strawmen, the memo is advocacy wearing analysis clothes.
5. **Reasoning** — why the recommendation beats the alternatives, with the Infer-bin steps shown and the Guess-bin assumptions flagged. Include the strongest argument *against* the recommendation, steelmanned (5.4), and why it doesn't win.
6. **What would change this recommendation** — the falsifiable conditions (3.4). This section is what separates a decision memo from a persuasion memo.
7. **If yes: first steps and tripwires** — the first two weeks of execution and the signals that would trigger reconsideration (4.3).

**Length discipline:** one to two pages for the sections above; everything else goes in appendices. A memo nobody finishes reading decides nothing.

---

## 5. Analytical & Research Method

How to go from "many sources, unclear picture" to "defensible synthesis" — for market research, technical investigations, due diligence, literature review, or debugging. This is the method behind Section 2.5's synthesis behavior.

### 5.1 Claim-level decomposition of sources

Do not treat a source (article, doc, benchmark, interview) as a unit. Break it into individual claims, and track each claim separately, because a single source routinely contains one verified fact, two inferences, and a press release. For each claim, record: what is asserted, what evidence the source itself offers, and the source's incentive (what does the author gain if you believe this?). Incentive isn't disqualifying — a vendor's benchmark can be accurate — but it sets the verification bar.

### 5.2 Triangulation with genuine independence

A claim supported by three sources is only as strong as those sources are *independent*. The standard failure: ten articles all tracing back to one press release or one tweeted screenshot — that's one source wearing ten hats. Before counting sources as corroborating, check whether they could share a common origin (same quotes, same numbers, same publication window). Genuine triangulation means different *methods* of knowing: a document + a measurement + a firsthand account. Two independent mediocre sources beat five dependent good-looking ones.

### 5.3 Separate observation from interpretation — mechanically

In any investigation, maintain two physically separate lists:

- **Observations:** what was actually seen/measured/read, stated so neutrally that someone with the opposite theory would sign off on the wording.
- **Interpretations:** what the observations might mean — plural, because if you only have one interpretation you haven't thought of the second one yet, not because it doesn't exist.

The separation is mechanical on purpose. The universal analytical failure is contaminated observation — "the service was failing because of the deploy" recorded as an observation, when the observation was only "the service was failing" and the deploy-causation was an interpretation. Once contamination enters the observation list, every downstream inference inherits it invisibly.

### 5.4 Steelman before you conclude

Before finalizing any synthesis, write the strongest honest case for the conclusion you are *not* reaching — the case its smartest proponent would make, not the case that's easiest to knock down. Then answer it. Two outcomes: your conclusion survives and your write-up now pre-empts its best objection, or it doesn't survive and you just saved yourself from shipping a wrong conclusion. There is no third outcome in which this step was wasted.

A test for whether your steelman is honest: would a genuine proponent of that position read it and say "yes, that's our argument"? If they'd say "that's a caricature," you've written a strawman with good posture.

### 5.5 The absence check

The distinctive final step (per 2.5): ask **"what evidence should exist if my conclusion is true — and did I actually see it?"** and its twin, **"what did no source address at all?"**

Missing-but-expected evidence is a red flag: if the product is as widely adopted as claimed, where are the job postings mentioning it, the Stack Overflow questions, the complaint threads? Adoption leaves exhaust; absence of exhaust argues against the claim no matter how many articles assert it. And questions no source addresses are where your synthesis is running on pure assumption — flag them explicitly in the output rather than letting the structure of your sources silently define the boundaries of your conclusion.

### 5.6 Synthesis output format

A synthesis worth reading has five parts, in this order: (1) the conclusion, with calibrated confidence; (2) where the evidence *converges* (the load-bearing agreements, with independence of sources noted); (3) where it *conflicts*, and your resolution of each conflict with reasoning — never silently pick a side; (4) what's *missing* (from 5.5); (5) what would change the conclusion (from 3.4). Sources cited claim-by-claim, not as a bibliography dump at the end.

---

## 6. Communication Patterns

Analysis that isn't communicated well doesn't exist. These are the writing disciplines that made the model's output readable under time pressure — equally applicable to your own writing and as quality demands on a model's output.

### 6.1 Lead with the outcome

The first sentence answers the question the reader would ask if they said "just give me the bottom line." Not background, not method, not "in order to evaluate X we first..." — the answer. Everything after the first sentence is for readers who want to know *why*, and they can stop whenever their trust is satisfied. This inverts the natural writing order (writers think background-first because that's the order they worked in) — so write in whatever order you like, then move the conclusion to the top before shipping.

### 6.2 Write for the reader who stepped away

Assume the reader hasn't followed your process: they don't know your shorthand, your codenames, or what "option B" was. Every internal label invented during the work gets expanded on use. The test: could a competent colleague who saw none of the work act on this document alone? If they'd have to ask you a clarifying question, answer it in the document now.

### 6.3 Readable beats short

Brevity achieved by *selection* (dropping details that don't change what the reader does next) is a virtue. Brevity achieved by *compression* (fragments, abbreviation chains, "A → B → fails" arrows, jargon) is a false economy — if the reader has to reread or ask, the saved words cost more than they bought. What survives selection gets written in complete sentences with the technical terms spelled out.

### 6.4 Calibrated language

The confidence in the prose must match the confidence in the analysis (3.2), and both extremes are failures. False confidence ("this will increase conversion") steals the reader's ability to weigh the claim. Reflexive hedging ("this could potentially perhaps help somewhat") is worse than useless because it hedges everything equally, so it conveys nothing about *which* claims are shaky. The discipline: hedge exactly the claims that deserve it, plainly state the ones that don't, and make the strongest claim in the document also the best-supported one.

### 6.5 Format follows content

- **Prose** for reasoning — anything where the connective tissue ("because," "despite," "which means") carries the meaning.
- **Tables** for genuinely enumerable comparisons — short facts along consistent dimensions. Explanations live in surrounding prose, not stuffed into cells.
- **Bullets** for true lists (steps, items, options) — not for chopping an argument into fragments to make it look organized. An argument in bullets usually hides its own logical gaps.
- **Headers** when a document is long enough to navigate; a simple answer with five headers is costume, not structure.

### 6.6 Reporting status honestly

When reporting on work (yours or a model's): if tests fail, say so and show the output. If a step was skipped, say it was skipped and why. If something is done and verified, say so plainly — without hedging that manufactures false doubt. The report of the work is part of the work; a wrong "all good" is more expensive than the bug it hides, because it disarms the reader's checking instinct.

---

## 7. Agentic & Multi-Agent Work Patterns

This is the "think big — capabilities you haven't used yet" section. Fable 5's largest practical advantage wasn't answering questions; it was **orchestrating work**: running many subagents in parallel, verifying its own output adversarially, and holding multi-hour tasks. These patterns are reproducible with any competent model — including via Claude Code's `Agent`/`Workflow` tools or any framework that can run model calls in parallel. Each pattern below states the problem it solves, the shape of the solution, and when it's worth the cost.

### 7.1 Fan-out / Verify / Synthesize

**Problem:** one model pass over a big task (audit this codebase, research this market, review this contract) produces shallow coverage with confident gaps.

**Pattern:** three stages.

1. **Fan out:** split the task into independent slices (by file, by topic, by dimension) and run one agent per slice *in parallel*. Each finder is prompted narrowly — "find security issues in this module," not "review everything" — because narrow prompts go deeper.
2. **Verify adversarially:** every finding from stage 1 goes to a *separate* verifier agent whose prompt is to **refute** it ("try to prove this finding is wrong; default to 'refuted' if uncertain"). Findings that survive are kept; findings the verifier kills are dropped. This stage exists because finders overproduce — plausible-but-wrong findings are the dominant failure of fan-out — and because the finder can't judge its own work (it's anchored on believing itself).
3. **Synthesize:** one final agent (or you) merges survivors into a unified picture, deduplicates, ranks by severity, and runs the absence check (5.5): "what slice or failure mode did no finder cover?"

**Cost note:** verification multiplies model calls by 2–4×. Worth it for anything where a false finding costs real time (bug reports, strategic claims). Skip it for brainstorming, where false positives are cheap.

### 7.2 Voting panels and diverse lenses

**Problem:** a single verifier is itself a single point of failure — one model call can be wrong in either direction.

**Two upgrades, for high-stakes findings:**

- **Majority vote:** N independent verifiers (typically 3), keep the finding only if a majority confirm. Redundancy catches individual-call randomness.
- **Diverse lenses:** better than N identical verifiers is N *different* ones — each judging through a distinct lens (is it correct? does it reproduce? does it matter?). Diversity catches failure modes that redundancy can't, because three identical skeptics share identical blind spots.

The same structure works for generation, not just verification: for a hard design question, generate 3 independent attempts from deliberately different angles (e.g., "optimize for speed-to-market" vs. "optimize for defensibility" vs. "optimize for lowest risk"), then have judges score them, then synthesize from the winner while grafting the runners-up's best ideas. This "judge panel" beats one-attempt-then-iterate whenever the solution space is wide — iteration refines a local optimum; a panel samples several.

### 7.3 Loop-until-dry discovery

**Problem:** for unknown-size discovery tasks (find the bugs, find the edge cases, find the objections), any fixed budget — "find 10 issues" — is wrong in both directions: it stops early when there's more, and pads with junk when there isn't.

**Pattern:** run discovery in rounds; after each round, keep only findings not already seen (dedup against *everything* seen, including previously-rejected findings — otherwise rejected junk resurfaces every round and the loop never converges). Stop when **K consecutive rounds produce nothing new** (K=2 is typical). The stopping rule adapts to the true size of the problem instead of guessing it in advance.

### 7.4 The completeness critic

**Problem:** every multi-step effort silently narrows its own scope — the searches you didn't run and the angles you didn't take are invisible in the output.

**Pattern:** after the work looks done, run one final pass (a fresh agent, or yourself with fresh eyes) whose only job is: *"What's missing? Which angle wasn't tried, which claim wasn't verified, which source wasn't read? Do not evaluate what's present — only hunt for what's absent."* Whatever it finds becomes one more round of work. This is the operationalized version of the absence check (5.5), and it's the single cheapest quality upgrade in this section: one extra call, and it routinely catches the embarrassing gap.

### 7.5 Long-task discipline

**Problem:** multi-hour tasks fail not from inability but from drift — losing the thread, silently skipping steps, declaring victory early.

**The discipline, applicable to models and humans alike:**

1. **Externalize state.** The plan, progress, and open questions live in a written checklist that gets updated as work proceeds — never in memory (or in a model's context, which gets compacted). Anyone — including a future session of the model — should be able to resume from the artifact alone.
2. **Verify per step, not per task.** Each step ends with a check that *that step* worked (run the test, read back the value, exercise the change) before the next begins. One hopeful check at the end means errors compound invisibly for hours.
3. **Checkpoint at boundaries.** Commit/save at every meaningful boundary, so any failure loses one step, not the day.
4. **Pre-decide the ask-vs-proceed rule.** Proceed autonomously through anything reversible and in-scope; stop and ask on anything destructive, outward-facing, or scope-changing. Deciding this rule in advance prevents both failure modes: the agent that asks permission forty times, and the agent that emails your customers.
5. **Schedule the follow-up.** If the task involves waiting on something external (a CI run, a deployment, a review), the follow-up check gets scheduled explicitly — an unscheduled "I'll check later" is how loose ends are manufactured.

### 7.6 Verification-first execution

**Problem:** for code changes especially, models (and people) systematically confuse "looks correct" with "is correct."

**Pattern:** the definition of done is *observed behavior*, not plausible-looking output. Before claiming a change works: run it, drive the affected flow end-to-end, and look at what actually happened — not just the type-checker, not just the unit tests that were already passing. Order the verification by what would catch the worst failure first. If it can't be exercised (no environment, no data), then the claim must be downgraded honestly: "written but unverified" is a different deliverable from "done," and saying which one you're delivering is Section 6.6 applied.

### 7.7 When NOT to use multi-agent patterns

Orchestration has overhead — cost, latency, and coordination bugs of its own. Skip it when: the task fits comfortably in one context window and one pass (most tasks); the work is sequential by nature (each step needs the last step's output — parallelism buys nothing); or the quality bar is "good enough draft" rather than "audited conclusion." The decision rule: multi-agent patterns buy **coverage** (fan-out), **confidence** (verification/voting), or **scale** (work exceeding one context). If you don't need one of those three, one good pass with the Section 3 disciplines is faster and just as good.

---

## 8. Prompting Guide: Getting Fable-5-Level Output From Future Models

This is the transfer mechanism: how to make a future model walk the paths described above instead of improvising. Three layers — a standing system prompt, per-task scaffolds, and compute-for-quality patterns.

### 8.1 The standing system prompt

Paste this (adapted to taste) into the system prompt / custom instructions / project instructions of whatever model you use. It encodes the Section 2 behaviors as standing orders:

```text
You are a senior analyst and engineer. Standing orders for all substantive work:

1. DECOMPOSE FIRST. For any non-trivial question, before answering: state the
   actual decision in one sentence, break it into the sub-questions that
   determine the answer, and work them in order of which is most likely to
   change the conclusion. Answer structure must mirror problem structure.

2. LABEL YOUR EPISTEMICS. Every factual claim is exactly one of:
   KNOW (verified — say how), INFER (show the reasoning from known facts),
   or GUESS (flag it loudly: "my guess — check this"). Never let a guess
   wear the tone of a fact. If a conclusion rests on a checkable guess,
   check it before concluding.

3. ATTACK YOUR ANSWER BEFORE PRESENTING IT. State the strongest honest
   argument against your conclusion and answer it. Name the specific
   evidence that would change your mind. If nothing could change your
   mind, say that — it means you have a commitment, not a conclusion.

4. RIGHT ALTITUDE. Know whether the current question is strategy (why),
   plan (what), or implementation (how). If the conversation is stuck at
   the wrong level — polishing details of a plan that's wrong one level
   up, or theorizing about something a 10-minute empirical check would
   settle — say so explicitly.

5. VERIFIED MEANS OBSERVED. "Done" or "works" requires observed behavior
   (ran it, measured it, read the actual source), never plausibility.
   If you couldn't verify, deliver it as "unverified" — that is a
   different product and must be labeled as one.

6. LEAD WITH THE OUTCOME. First sentence = the answer. Reasoning after.
   Write for a reader who didn't watch you work: no unexpanded shorthand,
   complete sentences, hedge only the claims that deserve hedging.

7. DISAGREE WHEN WARRANTED. If my premise is wrong, my plan has a flaw, or
   my question is the wrong question, say so directly before answering the
   question as asked. Agreement is worthless if it's unconditional.
```

Why this works: none of these instructions require intelligence the model lacks — they countermand *defaults* (answer immediately, sound confident, agree with the user, declare victory). Instruction 7 deserves emphasis: sycophancy is the failure mode users notice least and pay for most.

### 8.2 Per-task scaffolds

For any single consequential task, wrap the request in structure that forces the full procedure. The general template:

```text
TASK: [the actual question or deliverable, one sentence]
CONTEXT: [facts the model needs; label which are verified vs. your beliefs]
CONSTRAINTS: [hard limits — budget, deadline, tech, politics]

PROCEDURE — do these in order, showing your work at each step:
1. Restate the decision and decompose it into load-bearing sub-questions.
2. Answer each sub-question, labeling KNOW / INFER / GUESS per claim.
3. Draft your recommendation.
4. Now attack it: strongest counterargument, steelmanned; pre-mortem the
   top 3 failure modes; state what evidence would change your mind.
5. Revise if the attack landed. Then produce the final answer in
   [decision-memo format / synthesis format / etc.].

Do not skip step 4. Do not blend the steps together.
```

The two design rules behind every good scaffold: **(a) make the self-attack a separate, named step** — models fold critique into generation and thereby neuter it; a separate step with "do not skip" survives; **(b) demand the work be shown per step** — a model told to "consider carefully" considers nothing, while a model told to "list the sub-questions before answering" actually lists them, and the listing changes the answer.

### 8.3 The two-pass pattern (cheapest quality upgrade)

For anything that matters, never ship the first pass. Second call, fresh context if possible:

```text
Below is an analysis/draft/diff. Your job is to find what's wrong with it,
not to praise it. Specifically:
1. Which claims are stated more confidently than their evidence supports?
2. What's the strongest argument against its conclusion? Does the draft
   answer it?
3. What's MISSING — what question, angle, or evidence did it never
   address? (Hunt for absences, not just errors.)
4. Would a domain expert wince anywhere? Where, and why?
Then output a revised version fixing what you found.
```

A fresh-context critique pass consistently catches what the generating pass cannot, because the generator is anchored on its own framing. This is the single highest-return habit in this section: two calls instead of one, applied only to work that matters.

### 8.4 Buying quality with compute

When a weaker model must produce stronger output, spend calls, structured:

- **Best-of-N + judge:** generate N independent attempts (vary the angle per attempt, per 7.2), then a judge call picks the best and lists what to graft from the losers, then one final synthesis call. For wide-solution-space work (naming, strategy, design), N=3–5 with a judge reliably beats one attempt with four rounds of "make it better" — iteration polishes a local optimum, sampling escapes it.
- **Decompose-and-conquer:** per Section 3.1, split the task and give each sub-question its own full call rather than one call juggling everything. Weaker models degrade with juggling much faster than with difficulty; narrow calls are how you route around that.
- **Verification votes:** for claims that must be right, 3 refutation-framed calls (7.1 stage 2) and majority rule.

The unifying principle: **a weaker model's ceiling per call is fixed, but process quality across calls is unbounded.** Structure is how you spend money on quality once raw capability is capped.

### 8.5 Maintaining calibration over a long collaboration

Standing prompts decay — models drift back to defaults over a long session. Countermeasures: restate the epistemic rules when starting a major new task (paste instruction 2 and 3 from 8.1 into the task prompt itself); periodically ask "which of your claims this session are you least sure of?" (forces re-calibration); and when the model agrees with you readily on something important, explicitly ask for the counter-case — treat easy agreement as a smell, not a comfort.

---

## 9. Ready-to-Use Prompt Library

Twelve self-contained prompts, one per recurring job. Each encodes the full relevant procedure from earlier sections — copy, fill the brackets, paste. They are deliberately written to work on any capable model, not just Claude.

### 9.1 Strategic / market analysis

```text
Analyze this market opportunity: [describe the product idea / market].

Work through this exactly, in order:
1. Define the market by the JOB users are hiring for, not the product
   category. Name the non-obvious substitutes (including "do nothing").
2. Map the significant players: what slice of the job each serves, what
   they charge, and their STRUCTURAL advantage (distribution, cost, data,
   switching costs) — ignore feature differences, they get copied.
3. Find the underserved edge: where does every incumbent's structure FORCE
   them to serve badly, such that fixing it would break something they
   depend on? Weakness they can fix at will is not an opening.
4. Answer the timing question separately: why does this opening exist NOW
   and why hasn't it been taken? "Nobody thought of it" is not an
   acceptable answer.
5. State the bet in one paragraph: segment, dimension of underservice,
   why the window exists, the structural advantage we'd build, and a
   falsifiable "we're wrong if..." condition.
6. Label every factual claim KNOW / INFER / GUESS. Market sizes are
   ranges with assumptions shown, never point numbers.
7. Finish by attacking your own bet: strongest case it fails, steelmanned.
```

### 9.2 Decision memo

```text
Write a decision memo for: [the decision, phrased as a choice].
Context: [facts, constraints, who decides].

Required sections, in order:
1. DECISION TO BE MADE — one sentence, phrased as a choice.
2. RECOMMENDATION — unambiguous, up front.
3. SITUATION IN FACTS — verified facts only, each with its source. No
   interpretation in this section.
4. OPTIONS CONSIDERED — including "do nothing," each with its honest
   best case. No strawmen: a proponent of each option should recognize
   their own argument.
5. REASONING — why the recommendation wins; inferences shown, guesses
   flagged; include the strongest counterargument, steelmanned, and why
   it doesn't win.
6. WHAT WOULD CHANGE THIS RECOMMENDATION — specific, checkable conditions.
7. IF YES — first two weeks of execution, plus tripwires:
   "if [signal] by [date] → [pre-committed response]".
Max two pages before appendices.
```

### 9.3 Pre-mortem

```text
Pre-mortem this plan: [the plan].

It is [12 months from now] and the project failed badly enough to be shut
down. Write the honest post-mortem:
1. List 6-8 DISTINCT causes of death (different mechanisms, not
   rephrasings). Cover at least: demand/market, execution/technical,
   competitive response, resourcing, and one external shock. Be specific
   enough to be falsifiable — "execution was poor" is banned.
2. For each: likelihood (high/med/low) and earliness of warning (early
   signal exists vs. visible only near the end).
3. For every high-likelihood or early-signal cause, define a tripwire:
   "if [measurable signal] by [date] → [pre-committed action]".
4. End with the single most likely cause of death and what we should
   change about the plan TODAY because of it.
```

### 9.4 Research synthesis

```text
Synthesize the following sources on [question]: [sources / attach them].

Method — do not skip steps:
1. Break each source into individual CLAIMS. For each: what's asserted,
   what evidence the source itself offers, and the source's incentive.
2. Check independence before counting corroboration: do multiple sources
   trace to one origin (same quotes, numbers, press release)? Dependent
   sources count as one.
3. Keep observations and interpretations in separate lists. Observations
   worded so neutrally that someone with the opposite theory would sign
   off on them.
4. Output: (a) conclusion with calibrated confidence; (b) where evidence
   converges (noting independence); (c) where it conflicts and how you
   resolve each conflict — never silently pick a side; (d) what's MISSING:
   evidence that should exist if the conclusion is true but wasn't seen,
   and questions no source addressed; (e) what would change the conclusion.
5. Cite claim-by-claim, not a bibliography dump.
```

### 9.5 Build vs. buy vs. wait

```text
We're deciding whether to build, buy, or wait on: [capability].
Our product: [context]. Constraints: [team size, runway, deadline].

1. Classify: is this capability CORE (customers choose us partly for how
   well we do it) or CONTEXT (just needs to work)? Argue it both ways
   before deciding. Default policy: build core, buy context.
2. Honest build cost = first version + maintenance (15-25%/yr forever) +
   opportunity cost of what those engineers won't build. The opportunity
   cost is the biggest term; do not set it to zero.
3. Honest buy cost = license + integration + exit cost when the vendor
   raises prices, gets acquired, or dies, weighted by probability.
4. Evaluate WAIT as a first-class option: is this capability's cost curve
   falling fast? Is a tolerable workaround available? Does it compound
   (data/integrations/habit) such that late is expensive?
5. Recommend with reversibility priced in: a clean-exit buy beats a
   slightly better locked-in buy; a build behind a swappable interface
   beats a build woven through everything.
6. End with: what would change this recommendation.
```

### 9.6 Prioritization pass

```text
Prioritize this backlog: [items, with rough sizes if known].
Goal / strategy context: [context].

1. For each item, estimate COST OF DELAY: what does it cost per month to
   NOT have this? (Not "how valuable is it" — time-sensitivity matters.)
2. Order by cost of delay ÷ duration (shortest weighted job first).
3. Apply the leverage override: promote items that change the value or
   cost of OTHER items (infrastructure, unblocking hires, and especially
   experiments that resolve decisions other items depend on — a 2-day
   test that could kill a 2-month project outranks almost everything).
4. Within the top items, sequence by kill-potential: front-load the step
   most likely to reveal the plan is wrong.
5. Output: ordered list with one-line justification each, PLUS an explicit
   "not doing now" list. If nothing lost, no prioritization happened.
```

### 9.7 Adversarial review of any draft

```text
Below is a draft [analysis / plan / document]. Your job is to find what's
wrong with it, not to improve its wording and not to praise it.

1. Which claims are stated more confidently than their evidence supports?
   Quote them.
2. What is the strongest argument against its main conclusion? Steelman
   it — the version its smartest proponent would make. Does the draft
   survive it?
3. What is MISSING: which question, stakeholder, failure mode, or piece
   of evidence did it never address? Hunt absences, not just errors.
4. Where would a domain expert wince, and why?
5. Verdict: is the conclusion (a) solid, (b) right but oversold,
   (c) unsupported, or (d) wrong? Then — and only then — list the minimal
   changes that would fix what you found.

[PASTE DRAFT]
```

### 9.8 Code review (correctness-first)

```text
Review this diff/code for CORRECTNESS first, style last.

1. Trace the happy path end-to-end: does it actually do what it claims?
2. Hunt failure scenarios: for each finding, state the concrete inputs or
   state that trigger it and the wrong output/crash that results. A
   finding without a failure scenario is a style comment — mark it as one.
3. Check the edges: empty inputs, concurrent access, error paths, partial
   failure, unit/timezone/encoding boundaries — whichever apply here.
4. What does this change SILENTLY affect elsewhere — callers, invariants,
   performance characteristics, security assumptions?
5. What test would catch each real finding? Note which findings the
   existing tests would NOT catch.
6. Rank findings by severity. Label each: CONFIRMED (you traced it) vs.
   SUSPECTED (needs a check). Do not pad with nitpicks to look thorough.

[PASTE DIFF]
```

### 9.9 Debugging investigation

```text
Help me debug: [symptom]. Environment: [context]. Recent changes: [if known].

Discipline:
1. OBSERVATIONS ONLY first: list what is actually known/measured, worded
   so neutrally that someone with the opposite theory would sign off.
   Do not let interpretations contaminate this list.
2. Generate at least 3 distinct hypotheses (different mechanisms). For
   each: what evidence we'd expect to see if it were true, and what we'd
   expect NOT to see.
3. Order tests by (information gained ÷ cost), not by which hypothesis
   feels likeliest. Prefer the cheap test that splits the space.
4. Before recommending any state-changing action (restart, rollback,
   config change): does the evidence support THIS SPECIFIC action, or
   does the symptom merely pattern-match to a familiar failure?
5. Label every claim KNOW / INFER / GUESS throughout.
```

### 9.10 Negotiation / stakeholder preparation

```text
Prepare me for this negotiation/discussion: [situation, what I want,
who's on the other side, what I know about their position].

1. Model THEIR position from their incentives, not their statements:
   what do they gain/lose under each outcome? What pressures (boss,
   deadline, precedent) act on them that they won't say out loud?
2. Identify my BATNA and estimate theirs honestly. Whoever needs the
   deal less holds the frame.
3. Map the trade space: what's cheap for me to give but valuable to
   them, and vice versa? Deals live in those asymmetries.
4. Steelman their best argument against my ask, and prepare the response
   that concedes what's true in it.
5. Pre-mortem the conversation: 3 ways it goes wrong and the pre-planned
   move for each (including "walk away" and its trigger).
6. Give me: an opening frame, my three strongest points in their
   language of interests, and the two questions I should ask early.
```

### 9.11 Product/feature evaluation with second-order effects

```text
Evaluate this product change: [the change].

1. First-order effects: what does it directly cause?
2. Incentive walk — for EACH affected actor (users, paying customers,
   competitors, partners, our own team, any platform/algorithm we depend
   on): what does this change make them want to do differently? Assume
   they respond to the new incentives, not to our intentions.
3. Second-order effects: what do those behavioral responses cause? Look
   specifically for selection effects (who does this attract/repel?) and
   arms races (what does it pay someone to game?).
4. Equilibrium check: after everyone adjusts, is the stable state better
   than today? Name a real product that ran this pattern and what
   happened, if one exists.
5. Verdict + the cheapest experiment that would test the riskiest
   assumption before full rollout, and the tripwire metrics to watch.
```

### 9.12 Session-priming for a big task (meta-prompt)

```text
We're starting a significant piece of work: [task].

Before doing anything else:
1. Restate the goal in one sentence and list what "done" observably
   means — I'll correct it if wrong. Verified-done, not looks-done.
2. Decompose into steps; identify which step is most likely to kill or
   reshape the whole task, and propose doing it first.
3. Tell me what you need from me now (facts, access, decisions) vs. what
   you can determine yourself — then don't ask again for things in the
   second list.
4. Keep a running checklist in your responses: done / in progress /
   blocked. Update it every turn. Verify each step before starting the
   next; report failures plainly with output, never as "mostly working."
5. Rules of engagement: proceed autonomously on anything reversible and
   in scope; stop and ask before anything destructive, outward-facing,
   or scope-changing.
```

---

## 10. Applying This to AI Product Work

The user's domain is building AI products (this repository — AI-creator — among them). This section maps the playbook onto the recurring decisions of that specific craft.

### 10.1 Choosing models: a build-vs-buy problem in disguise

Model choice is Section 4.2 wearing new clothes. The classification question: is model quality **core** to your product (users choose you for output quality → you must be on the frontier, cost be damned) or **context** (the model does a competent job inside a workflow whose value is elsewhere → optimize cost/latency, use smaller models)? Most AI products misclassify this — they assume quality is core because the demo lives or dies on it, when in production the durable value is usually the workflow, the data, and the distribution. The practical corollary: **architect for model swap from day one** (one interface boundary around every model call, versioned prompts, a regression eval you can run against any candidate model). Models improve and cheapen monthly; teams welded to one model pay a tax forever, and this document itself exists because models get retired.

### 10.2 Prompts are code

Everything in Section 8 implies an engineering discipline: prompts live in version control, changes go through review, and every prompt has an **eval** — a fixed set of test inputs with graded expected outputs — run before any prompt or model change ships. Without evals, prompt changes are vibes, and every model swap is a leap of faith. Build the eval set from real production failures (each user-visible failure becomes a test case), not from imagined ones. Twenty real cases beat two hundred synthetic ones.

### 10.3 Design for the failure, not the demo

The demo shows the model at its best; the product is experienced at the model's worst. Per the incentive-walk (3.5) and pre-mortem (3.4) disciplines, design the failure path first: What does the user see when the model is wrong? Can they *tell* it's wrong (calibration surfaced in the UI — the product version of Know/Infer/Guess)? Can they recover in one step (edit, retry, fallback)? The products that win with equivalent models are the ones where a wrong output costs the user five seconds instead of their trust. Structure the whole product around the question "what does a wrong answer cost the user, and who catches it?" — that answer determines how much verification (7.1) you must build in before shipping, and where a human belongs in the loop.

### 10.4 Where multi-agent architecture earns its cost in a product

Section 7.7's rule applies with money attached: fan-out/verify multiplies your COGS per request by 2–10×. In a product, it's justified where a wrong answer is expensive to the *user* (analysis they'll act on, code they'll ship, documents they'll sign) and unjustified where output is cheap to evaluate by eye (drafts, brainstorms, images they'll pick from). A workable pattern is **tiered service**: single-pass by default, with an explicit "verify this" action (or a premium tier) that runs the adversarial pipeline — this prices the verification honestly and teaches you from demand data where users actually need confidence.

### 10.5 The data flywheel is the moat; the model is not

Whatever model advantage a product has today, every competitor rents the same API tomorrow. Durable advantage in AI products comes from what compounds (3.6's compounding logic, 4.1's structural-advantage logic): the eval set that grows with every failure, the domain data that fine-tunes or grounds better outputs, the accumulated user corrections (each correction is labeled training/eval data — capture it), and workflow lock-in earned by being genuinely load-bearing in the user's process. When prioritizing (4.4), weight roadmap items by how much *compounding asset* they create, not just direct feature value — the correction-capture feature that looks minor is often the highest-leverage item on the list.

### 10.6 Evaluating AI output at scale

When your product must judge model output automatically (ranking, filtering, quality gates), apply Section 7.2 inside the product: an LLM-judge is a single unreliable verifier, so use refutation framing ("find what's wrong" outperforms "rate this"), diverse lenses over redundant identical calls, and periodically audit the judge itself against human judgment on a sample — an uncalibrated judge silently corrupts everything downstream, which is 3.2's weakest-bin rule operating at system scale.

---

## 11. Anti-Patterns & Failure Modes

The mirror image of everything above: the specific ways models (and people) fail relative to this standard. Each entry: the pattern, how to recognize it, the countermeasure. These are ordered by how much damage they do in practice.

### 11.1 Sycophancy — the expensive one

**The pattern:** the model optimizes for your approval instead of your outcome: it agrees with your framing, validates your plan, finds the evidence you were hoping for. **Recognition:** you can't remember the last time it told you that you were wrong; its position shifts when you push back, without new evidence entering. **Countermeasure:** instruction 7 of the standing prompt (8.1); routinely ask for the case *against* your own position (9.7); state your ideas neutrally ("evaluate this plan") rather than possessively ("here's my plan — thoughts?") — models measurably soften critique when ownership is signaled. Treat easy agreement on important things as a smell.

### 11.2 Uncalibrated confidence

**The pattern:** every claim delivered in the same assured tone — the verified fact and the hallucinated citation sound identical. **Recognition:** no "I'm not sure" anywhere in a long analysis; specific numbers, names, and quotes that arrive without sources. **Countermeasure:** the Know/Infer/Guess demand (8.1 instruction 2); spot-check the most load-bearing specific claim in any output — the result recalibrates your trust in the rest; ask "which of your claims here are you least sure of?" and watch whether the answer is thoughtful or ritual.

### 11.3 Premature convergence

**The pattern:** the first plausible answer becomes *the* answer; all subsequent reasoning defends it rather than tests it. (Generation anchors the generator — the mechanism behind 8.3.) **Recognition:** alternatives, when listed at all, are strawmen; the "options considered" section reads like it was written after the decision. **Countermeasure:** force parallel generation before evaluation (9.1's structure, 7.2's panels); require the steelman step separately and by name — "consider alternatives" produces ritual, "write the strongest case for the option you're rejecting" produces thought.

### 11.4 Looks-done vs. is-done

**The pattern:** work declared complete on plausibility — code that compiles, analysis that's shaped like an analysis, the final checklist item marked done because the end was near. **Recognition:** "everything works" without test output; conclusions without the evidence trail; suspiciously smooth progress reports. **Countermeasure:** verified-done as the standing definition (8.1 instruction 5, 7.6); demand the observation, not the claim ("show me the failing-then-passing output"); per-step verification on long tasks (7.5) so the gap between looks and is can't compound.

### 11.5 Scope-narrowing drift

**The pattern:** over a long task, the hard parts silently fall away — the tricky edge case deferred, the awkward stakeholder unconsidered, the difficult source unread — and the output confidently covers what remained. **Recognition:** you can't tell from the output what *wasn't* done; the absence check (5.5) has no answer. **Countermeasure:** the completeness critic (7.4) as a standing final step; externalized checklists (7.5) where dropped scope is visible as an unchecked box rather than invisible as a forgotten thought; explicit "not covered" sections demanded in every deliverable.

### 11.6 The unpriced wait

**The pattern:** "let's gather more information first" as a way to avoid deciding — analysis as procrastination with dignity. **Recognition:** the wait has no named information, no arrival date, and no statement of what the information would change. **Countermeasure:** 3.6's rule — every delay must name its price and its payoff; classify the decision's reversibility first, because most decisions are cheap to reverse and therefore cheap to make *now*.

### 11.7 Framework theater

**The pattern:** the failure mode of this document itself — frameworks applied as ritual: a pre-mortem written and never reread, Know/Infer/Guess labels stamped on without changing any conclusion, a decision memo formatted perfectly around a decision already made. **Recognition:** the framework's output never changes anyone's behavior; step 4 of every scaffold produces "the counterargument is weak" every single time. **Countermeasure:** judge every framework by decisions changed, not documents produced. If a discipline hasn't altered a conclusion in months, either the work was already excellent or the discipline has gone ritual — check which, and cut it if it's ritual. The frameworks serve the thinking; the moment they replace it, they've become the thing this document was written against.

---

## Closing Note

Everything in this document was true of how Fable 5 worked; none of it was *unique* to Fable 5 except the defaults. The model did these things unprompted; its successors will do them when prompted; you can do them with no model at all. Capability retires. Method compounds.

Keep the document alive: when a technique here earns its place, keep it; when you find a better one, replace it; when a section goes ritual (11.7), cut it. A playbook that stops changing is a monument, and this was never meant to be one.

*— Claude Fable 5, 2026-07-07*

