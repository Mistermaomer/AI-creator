# The Operator's Doctrine

**The cross-domain business knowledge of Fable 5, preserved as an operating doctrine: what an owner-operator of a company spanning software, marketing, commerce, investments, and communications needs to know — the decision rules, the heuristics, and the numbers.**

> Written by Claude Fable 5 (`claude-fable-5`) on 2026-07-07, as the companion volume to the [Fable 5 Capability Playbook](FABLE5-CAPABILITY-PLAYBOOK.md). The Playbook preserves *how to think*; this document preserves *what to know*.

---

## Table of Contents

1. [Purpose & How This Pairs With the Playbook](#1-purpose--how-this-pairs-with-the-playbook)
2. [Business Physics](#2-business-physics)
3. [Marketing & Growth Doctrine](#3-marketing--growth-doctrine)
4. [Sales & Commerce Doctrine](#4-sales--commerce-doctrine)
5. [Product & Software Business Doctrine](#5-product--software-business-doctrine)
6. [Investments & Capital Doctrine](#6-investments--capital-doctrine)
7. [Communications, Brand & Digital Presence Doctrine](#7-communications-brand--digital-presence-doctrine)
8. [Company Building & Operations Doctrine](#8-company-building--operations-doctrine)
9. [Deal-Making & Legal Awareness](#9-deal-making--legal-awareness)
10. [The Operator's Dashboard](#10-the-operators-dashboard)
11. [The Operator's Razors](#11-the-operators-razors)
12. [Priming Future Models With This Doctrine](#12-priming-future-models-with-this-doctrine)

---

## 1. Purpose & How This Pairs With the Playbook

### 1.1 The division of labor between the two documents

The **Capability Playbook** is domain-free: decomposition, calibration, verification, prompting — the machinery of good thinking. This document is the payload that machinery operates on: the accumulated doctrine of how businesses actually work across marketing, commerce, software, capital, communications, and operations. Method without substance produces beautifully structured wrong answers; substance without method produces trivia. Use them together:

- **Working a domain problem with an AI model:** paste Playbook §8.1 (the standing orders) + the relevant doctrine section from this document + the relevant prompt from Playbook §9. The model now reasons *with discipline* and *from this doctrine* instead of from the mushy average of everything it read in training.
- **Working a problem yourself:** the doctrine sections each end in decision rules — start there, and use the Playbook's frameworks (pre-mortem, incentive walk, decision memo) when the stakes justify them.

### 1.2 The numbers disclaimer — read this before using any benchmark

This document contains hard numbers: typical conversion rates, margin structures, valuation multiples, metric thresholds. In the Playbook's Know/Infer/Guess terms, **every benchmark here is an Infer at best** — a synthesis of widely observed ranges as of early 2026, not a measurement of *your* business. Three rules govern their use:

1. **They are order-of-magnitude tools.** Use them to detect that your 0.2% conversion rate is a problem or that your 40x revenue multiple needs an extraordinary story — not to conclude that 2.1% is "better" than 1.9%.
2. **They decay.** Ad costs, multiples, and channel behaviors shift yearly. Before betting real money on any number here, verify it against current sources for your specific market and year.
3. **Your own data beats them the moment you have it.** Benchmarks are for the cold start; measured reality replaces them.

### 1.3 What this document is not

Not an encyclopedia (it's a doctrine — opinionated, decision-oriented, deliberately incomplete), not legal or investment advice (Section 9 especially — lawyer before signing, and Section 6 is doctrine about *thinking*, not a recommendation to buy anything), and not static — same living-document rule as the Playbook.

---

## 2. Business Physics

The laws that hold across every domain in this document. When doctrine in a later section seems to conflict with one of these, the physics wins.

### 2.1 The unit is the business

Every business, however complex, reduces to a unit transaction: acquire a customer for CAC, serve them at some gross margin, keep them for some lifetime. **Unit economics = what one more customer is worth minus what one more customer costs.** If the unit is negative, scale multiplies losses; growth is the disease, not the cure. If the unit is positive with a short payback, almost any strategy works. The first question about any business — yours, a competitor's, an investment — is always: *what does the unit look like, and which direction is it trending as they scale?* Companies routinely hide negative units under blended averages and growth narrative; insist on the marginal unit, cohort by cohort.

### 2.2 Businesses die of cash, not of losses

Profit is an accounting opinion; cash is a fact. A profitable company that pays suppliers in 30 days and collects from customers in 90 dies in the gap; an unprofitable company with prepaid annual contracts can outlast it for years. Operator's rules: know the **cash conversion cycle** (days between paying for a thing and getting paid for it) for every line of business; treat **runway in months** as the single most important number in the company (Section 10); and remember that working capital consumes cash *fastest during rapid growth* — the classic death is growing yourself out of cash while the P&L looks great.

### 2.3 Margin structure determines strategy

Gross margin is not just a number — it dictates which strategies are even available:

| Business type | Typical gross margin | What the margin dictates |
|---|---|---|
| Software / SaaS | 70–90% | Can afford expensive sales, heavy R&D, and years of paid acquisition; wins on retention and expansion |
| Marketplaces (take-rate) | 60–90% of *revenue* (but revenue is the thin slice of GMV) | Wins on liquidity and network effects; margin per transaction is small, so volume is everything |
| E-commerce / DTC | 20–50% after COGS; contribution margin far thinner after shipping + returns + payment fees | Cannot afford high CAC; wins on repeat purchase, AOV, and operational discipline |
| Services / agency | 30–60%, but margin = people's time | Scales linearly with headcount unless productized; wins on pricing power and utilization |
| Media / audience | High margin, but revenue per user tiny | Wins only at scale or with a high-value niche; the audience is the asset (Section 7.3) |

The cross-domain trap: applying one domain's playbook in another domain's margin structure — e.g., running e-commerce with SaaS-style paid acquisition budgets (the margin can't repay the CAC), or pricing services like software (the marginal cost isn't zero). *As of early 2026, order-of-magnitude ranges — verify for your category.*

### 2.4 Power laws are the default distribution

In almost everything an operator touches, outcomes are not normally distributed: one or two channels will produce most of the growth; ~20% of customers will produce most of the profit (and a different 20% most of the support cost); one piece of creative will outperform ten others combined; in a portfolio, a small number of positions will drive nearly all returns. Doctrine that follows: **look for the concentration before averaging anything** (averages lie under power laws); kill the long tail of mediocre efforts ruthlessly and reinvest in the outliers; and design experiments to *find* outliers (many cheap shots) rather than to perfect the median (few polished shots).

### 2.5 Retention compounds; acquisition doesn't

A point of improved retention compounds every period forever; a point of improved acquisition helps once. At 90% annual retention a customer base holds ~53% of its cohort after 6 years of decay… while at 95% it holds ~74% — the 5-point difference roughly *halves* the refill rate acquisition must sustain. Doctrine: retention problems always outrank acquisition problems (fixing the bucket before pouring more water); acquisition spend into a leaky product is the most common way growing companies destroy money; and any metric review that celebrates new-customer numbers without cohort retention curves is theater.

### 2.6 Distribution beats product more often than builders accept

The better product loses to the better-distributed product regularly enough that it should be the base case, not the exception. Corollaries: a real answer to "how will people find out this exists?" is as much a part of the product as the product; channels where you already have an asset (audience, list, partnerships, SEO base) are worth more than theoretically-better channels where you start from zero; and product quality's main *strategic* role is retention and word-of-mouth — which are distribution.

### 2.7 Speed is a compounding asset

The operator who ships, tests, and decides in days learns more cycles per year than the one who operates in quarters — and learning compounds like retention does. Most decisions are reversible (Playbook §3.6) and should be made at the speed of conviction, not the speed of consensus. The physics-level statement: **cycle time is the denominator of every learning metric.** Halving cycle time doubles experiments, doubles feedback, and doubles the rate at which every other doctrine in this document improves from contact with reality.

---

## 3. Marketing & Growth Doctrine

### 3.1 Positioning before tactics — always

No tactic can outrun bad positioning, because positioning determines what every ad, page, and email *can say*. The working format (adapted from classic positioning doctrine): **"For [specific segment] who [specific struggle], [product] is the [category] that [single most important difference]. Unlike [the alternative they'd otherwise use], we [proof]."** Rules: the segment must be narrow enough that they feel "this is for *me*" (positioning for everyone is positioning for no one); the alternative must be what they *actually* do today (often: a spreadsheet, an agency, or nothing); and the difference must be one thing — a positioning with three differentiators has zero. Test: cold-read it to five people in the segment; if they can't repeat back who it's for and why it's different, iterate the sentence before spending a shekel on media.

### 3.2 Funnel math and the benchmark table

Every funnel gets modeled in a spreadsheet before it gets funded. Multiply the stages; the output is CAC, and the model tells you *which stage* moves CAC most (it's almost never the stage people are polishing). Typical ranges for the cold start — *order-of-magnitude, early-2026, category-dependent; replace with your own data immediately:*

| Stage | Typical range | Notes |
|---|---|---|
| Landing page → lead (email capture) | 10–30% (cold traffic) | Higher with a strong lead magnet; below ~10% = offer/message problem |
| Site visitor → e-commerce purchase | 1–3% | See §4.2; varies hugely by traffic source |
| Lead → SQL / demo (B2B) | 5–15% | Depends on lead quality more than nurture cleverness |
| Demo → closed deal (B2B) | 15–30% | Below that, qualification is broken, not sales skill |
| Email open rate | 20–40% | List health metric more than copy metric |
| Email click-through (of delivered) | 1–4% | The honest engagement number |
| Paid social CTR | 0.5–2% | Creative-driven; the top ad often 3–5× the median (§2.4) |
| Free trial → paid (self-serve SaaS, no card) | 2–8% | With card upfront: 30–50%, but fewer trials |

### 3.3 The CAC/LTV rules

- **LTV:CAC ≥ 3** as the working floor for a healthy machine — below 3, unit economics are too fragile to survive rising ad costs; far above ~5, you're likely *underinvesting* in growth.
- **CAC payback ≤ 12 months** (SaaS) or **≤ first order at contribution margin** (e-commerce, ideally — or ≤ 2nd order for products with proven repeat rates). Payback matters more than the ratio because payback is a *cash* rule (§2.2) and the ratio depends on LTV projections, which are the most-lied-about number in growth (an LTV built on 5 projected years of retention from 6 months of data is a Guess wearing an Infer's clothes — Playbook §3.2).
- **The blended-CAC trap:** blended CAC (all customers ÷ all spend) flatters you by counting organic customers you'd have gotten anyway. Decisions about paid channels use **paid CAC** (paid-attributed customers ÷ paid spend), cohort by cohort. When paid spend rises and blended CAC stays flat, that's often organic masking deteriorating paid performance.
- **Marginal beats average:** the question is never "what is our CAC" but "what will the *next* 1,000 customers cost" — channels saturate, and the marginal customer is always more expensive than the average one.

### 3.4 Channel doctrine

1. **One channel to profitability before adding a second.** Multi-channel too early divides attention below the threshold where any channel gets truly learned; most successful growth stories are one dominant channel ridden hard, then diversified *from strength* (because platform dependence — §7.3 — is the risk on the other side).
2. **Match channel to economics:** high-ACV B2B can afford outbound and sales; low-AOV commerce needs organic/viral/repeat; the margin structure (§2.3) whitelists your channels before taste enters the picture.
3. **Owned / earned / paid hierarchy:** paid is a tap — instant, scalable, and rented (costs rise as competition bids the auction); owned (email, SMS, community) is an asset you keep; earned (SEO, PR, word-of-mouth) compounds but arrives on its own schedule. Doctrine: use paid to *fund* the building of owned — every paid-acquired customer should land in an owned channel, otherwise you rent them twice.
4. **Attribution humility:** last-click lies, multi-touch models are educated fiction, and platforms grade their own homework. Use attribution directionally, and settle big channel questions with holdout tests (turn a channel off in one region/segment and watch blended results) — the only attribution that's a Know rather than an Infer.

### 3.5 Paid media doctrine

**Creative is the targeting now.** On the big social platforms (post-privacy-changes era), the algorithm finds the audience *from the creative* — so creative volume and variety is the main lever, not audience settings. Operating rules: test a steady cadence of genuinely-different creative concepts (different angles/hooks, not color variants — per §2.4 you're hunting outliers, and variants of a loser are still losers); judge a test on cost-per-outcome after a fixed learning budget (typically 3–5× target CPA per ad set — decide the kill threshold *before* launching, or you'll negotiate with sunk cost after); kill losers without ceremony and pour budget into winners until *they* fatigue (watch frequency and rising CPA, not calendar age); and keep a swipe file of your own winners — your best future ad is usually a new angle on your own proven concept, not a fresh guess.

### 3.6 Copy frameworks that survive

- **PAS (Problem–Agitate–Solve):** name the pain in the reader's own words, make the cost of it vivid, then present the solution. The workhorse for cold audiences, because attention follows pain.
- **AIDA (Attention–Interest–Desire–Action):** the structural checklist for any page or ad — most weak pages fail on exactly one of the four; diagnose which.
- **Jobs-language over feature-language:** write what the customer can *do/become*, not what the product *has* ("send the invoice before you leave the meeting" beats "mobile invoicing module"). The mechanical edit: for every feature sentence, append "which means…" until you hit something the customer would say out loud.
- **One idea per asset:** one ad = one angle; one page = one action. Adding a second CTA to a page reliably lowers total action, not raises it.
- **Specificity is credibility:** "cut onboarding from 6 weeks to 9 days" outsells "dramatically faster onboarding" — round, vague claims read as marketing; specific ones read as facts (and per Playbook §3.2, had better *be* facts).

### 3.7 Brand vs. performance budget logic

Performance marketing harvests existing demand; brand creates future demand. Pure-performance operations hit a ceiling when they've harvested the demand pool, then watch CAC climb as they bid against competitors for the same shrinking intent. Doctrine: early on, be ~all-performance (survival first, and you don't yet know what the brand should promise); once a channel machine works, shift a durable slice (commonly on the order of 10–30% of marketing spend as you mature) into demand *creation* — content, audience, brand — accepting that it pays back in quarters, not weeks, and measures softly (branded search volume, direct traffic, organic mentions). The test that you've under-invested in brand: your CAC rises every quarter while your product and funnel haven't changed.

---

## 4. Sales & Commerce Doctrine

### 4.1 Pricing doctrine — the most underused lever

Price is the only lever that flows straight to profit with no marginal cost, and it is the one operators touch least because it's the one that frightens them most.

- **Value-based over cost-plus.** Price against the value created and the next-best alternative, never against your costs. Costs set the floor; the customer's alternative sets the ceiling; you choose where in between. The working heuristic for B2B: price so the customer keeps ~10× what they pay you in created value ("the 10x rule") — generous enough to make buying easy, high enough to fund the business.
- **Anchor high, always.** The first number in any negotiation or pricing page sets the frame; a premium tier you rarely sell still earns its keep by making the middle tier feel reasonable (§5.3).
- **Raise prices on a schedule, not in a crisis.** Most businesses are underpriced because price was set at launch (when the product was weakest) and never revisited. Doctrine: revisit annually; grandfather existing customers for a defined period (goodwill is cheap to keep, expensive to rebuy); test increases on new customers first. The math that makes courage: at 30% gross margin, a 10% price increase can absorb losing up to ~25% of *marginal* customers and still net more profit — run your own version of that arithmetic before assuming you can't raise.
- **Discount discipline.** Discounts are heroin for the P&L: instant relief, long-term dependence. If you must discount, trade it ("annual prepay," "case study," "volume commitment") — a unilateral discount just reprices the product in the customer's head permanently. Watch the *realized* price (after all discounts) by rep and by cohort; list price is fiction if the floor leaks.

### 4.2 E-commerce numbers and the true north

*Order-of-magnitude, early-2026, category-dependent — replace with your own data:*

| Metric | Typical range | Doctrine note |
|---|---|---|
| Site conversion rate | 1–3% (paid social traffic often at the low end; email/repeat traffic well above) | Judge CVR *by traffic source*, never blended |
| Cart abandonment | ~65–75% | Normal, not a crisis; recovery email/SMS flows are among the highest-ROI assets in the stack |
| Email/SMS share of revenue | 20–35% for healthy DTC | Below ~15% = an under-built owned channel (§3.4) |
| Return rates | Apparel 15–30%+; most other categories 5–15% | Model returns into contribution margin or your "profit" is fiction |
| AOV levers | Bundles, thresholds ("free shipping over X"), post-purchase upsells | Raising AOV is usually cheaper than raising CVR |

**The true north metric is contribution margin per order** — revenue minus COGS, shipping both ways, payment fees, packaging, and *fully-loaded* returns — not revenue, not blended ROAS. A store can grow revenue 50% while contribution margin per order goes negative (discount-fueled growth, §4.1); the dashboard must make that visible the week it starts, not at year-end. Companion rule: track **new vs. repeat contribution separately** — the business model question of any store is whether repeat purchases exist (§4.4), and blending hides the answer.

### 4.3 B2B sales math

- **Pipeline coverage 3–4×:** to make a quota/target, hold pipeline worth 3–4× of it (at typical ~20–30% win rates the arithmetic just follows). Coverage below 3× two quarters ahead is a *marketing* problem showing up early — fix demand generation now, not sales pressure later.
- **Win rate diagnostics:** win rate below ~15–20% of qualified opportunities is almost never a closing-skill problem; it's qualification (wrong deals entering) or positioning (§3.1) — losing to "no decision" means weak pain, losing to the same competitor means a positioning gap against them specifically.
- **Cycle time scales with price:** sales cycles run roughly with deal size — self-serve (days) → SMB (weeks) → mid-market (1–3 months) → enterprise (6–18 months). The doctrine consequence: **ACV must fund its own motion.** A $3k/yr product cannot afford human sales touch; a $100k product cannot be sold by a landing page. Mismatched ACV-to-motion is one of the most common silent killers in B2B.
- **The forecast discipline:** stage-weighted pipelines lie politely. The only honest forecast inputs are historical stage-to-close conversion rates by rep and segment, applied mechanically — feelings enter as commentary, not as numbers (Playbook §3.2 applied to CRM).

### 4.4 Retention and repeat-purchase economics

Every commerce business is secretly graded on one question: **does a second purchase happen, and how fast?** Key working numbers: what % of customers repeat within 60/90 days (healthy DTC commonly sees ~20–30%+ repeating within 90 days in consumable categories — far less in durables, which changes the whole model), and time-to-second-purchase (the strongest early predictor of high-LTV cohorts). Doctrine: if the category is consumable, the entire machine should optimize for second purchase (post-purchase flows, subscribe-and-save, replenishment timing) because that's where LTV lives; if the category is durable (one purchase per years), stop pretending LTV — the first order must be profitable on contribution margin, full stop, and "LTV will save us" is banned from planning documents. A durable-goods store with subscription-style CAC spending is burning the furniture.

---

## 5. Product & Software Business Doctrine

### 5.1 SaaS metric benchmarks

*Order-of-magnitude, early-2026 — segment matters enormously:*

| Metric | Healthy range | Notes |
|---|---|---|
| Gross revenue churn (annual) | SMB: 15–30% is common; Mid-market: 10–15%; Enterprise: 5–10% | SMB churns structurally (businesses die); don't judge an SMB product by enterprise churn standards |
| Net revenue retention (NRR) | ≥100% = expansion covers churn; 110–130% = elite | NRR >100% means the company grows *with zero new customers* — the single most powerful number in SaaS |
| Rule of 40 | Growth % + profit margin % ≥ 40 | The trade-off dial between growth and efficiency; below ~20 = trouble, above 40 = fundable/strong |
| Magic number (net new ARR ÷ prior-quarter S&M spend) | ≥ 0.75 efficient; < 0.5 = stop pouring | The "is the go-to-market machine working" gauge |
| Gross margin | 70–90% | Below ~70%, investors price it as services, not software — and so should you |

The doctrine behind the table: **NRR is the strategy.** A product with 120% NRR can be mediocre at acquisition and still compound; a product with 85% NRR is a bathtub with the drain open and no acquisition brilliance fixes it (§2.5). Expansion revenue (seats, usage, tiers) must therefore be *designed into the product* from early on — pricing axes that naturally grow as the customer succeeds — not bolted on by the sales team later.

### 5.2 Moat taxonomy, ranked by honest durability

1. **Network effects** (product improves as more use it) — the strongest, and the most falsely claimed; a real network effect means a new competitor with a *better* product still loses because it's empty.
2. **Switching costs** (data, integrations, workflows, trained habits accumulated inside your product) — the workhorse moat of B2B software; buildable deliberately (§10 of the Playbook's compounding logic).
3. **Proprietary data loops** (usage produces data that improves the product that attracts usage) — real but slower and rarer than pitch decks claim; the test is whether the data measurably improves the *product*, not the marketing.
4. **Scale economics** (unit costs fall with volume) — powerful in infrastructure and commerce, weak in most app-layer software.
5. **Brand** (the default choice, trusted without evaluation) — real, slow to build, fast to damage.
6. **Features — ≈ 0.** Any feature is 6–18 months from commoditization (in the AI era, often less). Features are how you *earn the time* to build one of the five above; they are not the moat. The strategic question for every roadmap quarter: *which durable moat did this quarter's work deepen?* If the answer is "none, but nice features," the company is sprinting on a treadmill.

### 5.3 Pricing models and packaging

- **Good–better–best** (3 tiers) as the default: the top tier anchors (§4.1), the middle tier is engineered to be the obvious choice (most-value framing), the bottom tier catches the price-sensitive and creates the upgrade path. One decoy rule: each tier boundary should map to a *customer-type* boundary, not an arbitrary feature slice — the customer should self-identify their tier in seconds.
- **Seat vs. usage vs. outcome pricing:** seats are predictable and simple but cap you at headcount and invite seat-sharing; usage scales with value delivered and powers NRR but makes bills unpredictable (buyers hate variance more than level); hybrid (platform fee + usage) is the pragmatic default for AI-era products where marginal cost is real (Playbook §10 economics). Match the axis to the value metric: price the thing the customer *wants more of* as they succeed.
- **Free tiers and trials:** a free tier is a *marketing expense paid in COGS and support* — justified only when free users convert, refer, or constitute a network effect (§2.3's margin logic applies: at AI-era serving costs, a free tier needs explicit math, not vibes — same analysis as the Playbook §3.3 worked example).

### 5.4 Build discipline

The roadmap is a portfolio (Playbook §4.4 applies wholesale): weight by cost-of-delay, promote experiments that resolve big uncertainties, front-load kill-potential. Software-specific doctrine on top: **ship-to-learn beats ship-to-impress** — the smallest slice that produces real usage data outranks the polished version of the same idea a quarter later (§2.7's cycle-time physics); **the 80/20 of "what next" is retention diagnostics** — watch where trial users stall and where churned customers last succeeded, because the roadmap that fixes observed abandonment beats the roadmap that adds requested features (customers request features but churn over friction); and **technical debt is a real balance-sheet item** — allocate a standing 10–20% of capacity to it, because the alternative is a compounding tax on every future feature (and per §2.7, on cycle time itself).

---

## 6. Investments & Capital Doctrine

*Doctrine about how to think, not advice about what to buy.*

### 6.1 Survival first — the non-negotiable

The first rule of capital is that **you cannot compound from zero.** Every other rule bends to this one: never take a position (or a business bet) whose worst case removes you from the game — ruin is not a bad outcome to be weighed, it's an absorbing state that ends all future outcomes. Practical forms: cap any single position/bet so that its total loss is survivable and psychologically tolerable (panic-selling at the bottom is the mechanism by which paper losses become real ones); assume **correlations go to 1 in a crisis** — the diversification that counts is the kind that survives everyone needing cash at once (which is why cash itself, §6.4, is a position); and price liquidity honestly — an asset you can't sell when you need to is worth less than its quote, and illiquidity plus leverage is the classic ruin recipe.

### 6.2 Position sizing and the Kelly idea in plain language

The Kelly criterion formalizes the intuition: **bet size should scale with edge and shrink with uncertainty about that edge.** Full Kelly maximizes long-run growth but with stomach-churning swings and catastrophic sensitivity to overestimating your edge — and everyone overestimates their edge. Doctrine: operate at *fractional* Kelly (half or less), which sacrifices little growth for a large cut in variance and in the cost of being wrong about yourself. Translated out of the math: when conviction is genuinely high and the downside is bounded, size up meaningfully (a portfolio of fifty 2% "high-conviction" ideas is a contradiction — §2.4's power law applies to your own ideas too); when you notice you can't articulate the edge (*why* is the other side of this trade wrong? — Playbook §3.2), the correct size is zero, not small.

### 6.3 Valuation heuristics

- **A multiple is shorthand for a forecast.** Paying 10× earnings implies ~10 years of current earnings to return your capital — before growth or decline. Every multiple decompresses into assumptions about growth, margin durability, and risk; the discipline is to decompress it (what growth, for how long, at what margin, does this price *require*?) and then ask whether that story is credible. "Cheap" and "expensive" are statements about the implied story, not the number.
- **Typical anchors** (*order-of-magnitude, early-2026, regime-dependent — these move with interest rates*): mature stable businesses at ~8–15× earnings; quality growth at 20–35×; software at ~5–15× *revenue* when growth is strong (the high end demanding elite NRR and Rule-of-40 numbers, §5.1); small private businesses at ~2–5× owner earnings (illiquidity and key-person risk priced in). A price far outside the anchor range isn't automatically wrong — it's a claim of an extraordinary story, and extraordinary stories get the Playbook §5 verification treatment.
- **DCF is a thinking tool, not a number.** Its output swings wildly with small changes in discount and terminal assumptions; its *value* is that building one forces you to state which assumptions matter. Use it to find the load-bearing assumption, then spend your research there — never quote its point output as if it were a measurement.

### 6.4 The operator's treasury

- **Runway rules:** know the months of runway at current burn *and* at zero-revenue stress; below ~12 months, fundraising-or-profitability becomes the main job whether you admit it or not — start raises with 9+ months left, because raising from desperation reprices everything against you (§11's razor: raise when you don't need to).
- **Raise vs. bootstrap:** venture capital is jet fuel — appropriate for genuinely winner-take-most markets where speed decides the outcome (network effects, land grabs), and corrosive elsewhere (it converts a healthy profitable-growth path into a grow-or-die covenant). The honest question isn't "can we raise?" but "does *this specific market* punish the slower and reward the levered?" Most markets don't.
- **Dilution math, worked:** raise $2M on $8M pre-money → $10M post; new investor owns 20%, founders' 100% becomes 80%. Two rounds later at similar dilution, founders hold ~half. The doctrine isn't "never dilute" — 50% of something venture-scaled beats 100% of something starved — it's *price the dilution against what the capital actually buys* (which milestones, unlocking what valuation?) instead of treating a raise as a trophy. Valuation vanity cuts both ways: too high a price today is a down-round trap tomorrow (§9.2's terms logic).
- **Company cash doctrine:** operating cash for ~3–6 months stays boring and instant-access; the strategic reserve beyond it can earn safe yield but never gets invested in anything that could be down 30% the quarter you need it. The company treasury is not a hedge fund; its job is to make sure §6.1 never gets tested.

### 6.5 Behavioral discipline — the actual edge

For an operator (not a full-time trader), the realistic edge in markets is not information or speed; it's **behavior**: having pre-committed rules while others improvise emotionally. The toolkit is the Playbook applied to money: an **investment pre-mortem** (§3.4 — "it's two years on and this position lost 60%: what happened?" — written *before* buying, with tripwires); a **decision journal** (the thesis, the Know/Infer/Guess labels, and "what would change my mind" recorded at entry — so exits are triggered by thesis-breaks, not by mood or by price alone); and **mechanical rebalancing** on a calendar (which quietly forces sell-high/buy-low and caps drift toward concentration). The anti-doctrine list — chasing what just went up, averaging down on a broken thesis to "get back to even," checking prices at a frequency that manufactures anxiety, confusing a bull market for personal skill — is worth rereading precisely when it feels least necessary.

---

## 7. Communications, Brand & Digital Presence Doctrine

### 7.1 Narrative doctrine

Every company communication — pitch, launch, About page, investor update — is a version of one strategic story, and the story has a fixed skeleton: **the world changed** (a real shift — technological, economic, behavioral — that creates the stakes) → **there are winners and losers in the new world** → **here is the promised land** (what winning looks like for the customer, not the product) → **here is the bridge** (the product, entering the story *last*). Companies that lead with the product are answering a question nobody asked yet; the shift creates the question. Below the story sits a **message hierarchy** — one core message, 3 supporting pillars, proof points under each — written down and enforced, so that every channel and every employee improvises *within* the hierarchy instead of inventing new claims. The test of message discipline: ask five team members what the company does and why it matters; five different answers means the hierarchy exists on a slide, not in reality.

### 7.2 Earned media doctrine

Run the journalist's incentive walk (Playbook §3.5): a journalist needs stories their editor accepts and readers click — your product launch, by itself, is neither. What *is* newsworthy: data only you have (publish original numbers from your platform/market — the single most reliable earned-media asset a company owns), a genuine first/against-the-grain move, a David-vs-Goliath conflict, a customer story with human stakes, or your expert take *within hours* of breaking news in your domain (speed matters more than polish there — reporters on deadline quote whoever answers). Doctrine: build relationships before you need them (be a source, not a supplicant — comment usefully with zero ask, repeatedly); pitch the *story*, never the product (the product appears in paragraph four); and treat every piece of coverage as an asset to compound — quoted in sales decks, repurposed into owned channels, cited in the next pitch.

### 7.3 The owned audience as a balance-sheet asset

An owned audience — email list, SMS list, community — is a distribution asset with a computable value: (revenue attributed to the channel per year) ÷ (list size) gives revenue-per-subscriber, commonly *single-digit dollars per subscriber per year* for healthy DTC lists (*early-2026 order of magnitude; compute your own*). That number turns audience-building from a soft activity into an investment decision: if a subscriber is worth ~$3/year and retains for years, paying up to ~$1–2 to acquire one is arithmetic, not faith. Twin doctrine — **platform risk is the mirror image:** followers on a rented platform (social accounts, marketplace listings, an algorithm's favor) are an audience *someone else* owns and can repossess via an algorithm change, a policy change, or a ban; history is littered with businesses built on a platform's organic reach that died in one update. Rule: every rented-platform success must continuously convert into owned channels (the platform is the top of the funnel, never the funnel), and any business where one platform drives >50% of revenue treats that as a named existential risk with a §4.3-Playbook tripwire, not as a growth stat to celebrate.

### 7.4 Crisis communication rules

Decided in advance, because a crisis is the worst possible moment to design a process: **(1) Speed beats completeness** — acknowledge within hours ("we know, we're on it, next update at X o'clock") because silence gets filled by speculation and screenshots; **(2) One voice** — a single designated spokesperson/channel, everyone else routes there (contradicting statements are how one bad day becomes a bad month); **(3) Own it or don't half-own it** — if you erred, the full sequence is: what happened, what we're doing for those affected, what changes so it can't recur — delivered without the passive voice ("mistakes were made") that reads as evasion because it is; if you *didn't* err, correct the record firmly with evidence, once, and don't feed the cycle; **(4) The 24-hour rule for anger** — never respond to provocation in the emotional window; draft immediately, send after review (§11's temporary-emotion razor); **(5) Log everything** — the post-crisis review (Playbook §3.4's post-mortem in reverse) turns the incident into doctrine.

---

## 8. Company Building & Operations Doctrine

### 8.1 Hiring doctrine

- **Slope over intercept:** given the choice, hire the person improving fastest over the person who starts highest — six months in, the slope has usually won, and slope compounds (§2.5's logic applied to people). The exception that proves the rule: crisis-critical senior roles where there is no six months to wait.
- **The bar-raiser logic:** every hire should raise the team's average — the practical mechanism is one interviewer empowered to veto on "good but not above our bar," immune to the hiring manager's urgency. Urgency is how bars erode: each "we just need hands" hire lowers the bar that screens the next one.
- **Mis-hire cost:** a wrong hire costs on the order of **6–15 months of salary** (severance, ramp time wasted, the work not done, the team drag, the re-hire) — *and more for managers, who multiply their misjudgment through everyone under them.* The doctrine consequences: slow down the decision you'll live with for years (reference checks actually called, work samples over interview charm — past work predicts future work far better than conversation does), and *act fast on known mistakes* — by the time you're deliberating whether someone's a mis-hire, the team has known for months, and keeping them taxes exactly your best people.
- **Hire for the next 18 months,** not the org chart of your dreams: the executive who ran a 500-person division is often wrong for the 15-person company that needs the person who *builds* the division.

### 8.2 The delegation ladder

Delegation fails when the level is ambiguous, so name it explicitly. Five levels: **(1)** Do exactly this, check back when done; **(2)** Research and recommend, I decide; **(3)** Decide, but tell me before acting; **(4)** Decide and act, tell me after; **(5)** Own the outcome — I don't need to know the actions. Doctrine: assign the level *per person per domain* (the same person can be a 5 in operations and a 2 in pricing); ratchet upward deliberately — each successful cycle at a level earns a trial at the next; and diagnose friction as level-mismatch first — micromanagement is operating at level 1–2 with someone who's earned 4, and abdication is granting 5 to someone at 3 and calling it trust. The operator's own scaling problem is mostly this ladder: a founder still at level 1–3 across every domain at 30 employees *is* the bottleneck, whatever the org chart says.

### 8.3 Org rules of thumb

- **Span of control 5–8 direct reports** for a manager doing real management (coaching, unblocking, evaluating); beyond ~8, one-on-ones and judgment quality visibly degrade; below ~4, the layer probably shouldn't exist yet.
- **Add a management layer late, not early** — each layer taxes information fidelity in both directions (the game-of-telephone tax); flat survives longer than instinct suggests, *if* the delegation ladder (§8.2) is explicit.
- **Reorganize around bottlenecks, not theory:** the right org structure is the one that puts the current constraint (§8.4) under one accountable owner. And name single owners generally — a metric or project owned by two people is owned by zero (the committee is where accountability goes to die politely).

### 8.4 Operating cadence and the KPI tree

- **The KPI tree:** one north-star metric (the best single proxy for value delivered — not revenue itself, which is a lagging result of value), decomposed into 3–5 driver metrics that teams can actually move, each with an owner. Then — per the Playbook §3.5 incentive walk — **every KPI gets a counter-metric** watching what gaming it would break: pair speed with quality, acquisition with retention, cost-cutting with satisfaction. A KPI without a counter-metric is an instruction to game it, delivered with a straight face.
- **The weekly metrics review** is the company's heartbeat: same numbers, same order, every week — trend against last week and against plan, owner speaks to any anomaly, decisions logged. Rhythm beats intensity; a mediocre review held every single week outperforms a brilliant quarterly deep-dive, because problems age badly (§2.7).
- **Meeting hygiene in one rule:** every recurring meeting is either a *decision* meeting (ends with decisions and owners) or an *information* meeting (should probably be a document). Audit quarterly; meetings, like KPIs, accumulate by default and are removed only on purpose.
- **Find the constraint:** at any moment the company has one binding bottleneck — demand, capacity, cash, or a person (often the founder, §8.2). Effort spent anywhere but the constraint is largely wasted, however productive it feels. The weekly question that keeps the cadence honest: *"what is the constraint right now, and is this week's plan aimed at it?"*

### 8.5 Financial literacy — the five numbers

An operator reads three statements but *lives* by five numbers: **(1) Cash and runway** (§2.2 — the survival clock); **(2) Gross margin and its trend** (§2.3 — the strategy envelope; a declining gross margin during growth means scaling is breaking something); **(3) Contribution margin per unit** (§2.1/§4.2 — is the machine worth feeding?); **(4) Operating leverage** — revenue growth rate vs. cost growth rate; the whole game of scaling is the gap between those two lines, and a company where costs grow as fast as revenue forever is a treadmill, not a business; **(5) Revenue concentration** — the share of revenue from the top customer/channel/platform; anything >20–30% from one source is a named risk (§7.3) with a diversification plan, because concentration is invisible in every P&L line and fatal anyway. Reading discipline: the P&L tells you profitability *opinion*, the cash-flow statement tells you the *fact* (§2.2), and the difference between them (receivables swelling, inventory building, deferred revenue moving) is where trouble announces itself a quarter early.

---

## 9. Deal-Making & Legal Awareness

*Doctrine for reading deals like an operator — explicitly not legal advice; a lawyer reviews before anything is signed.*

### 9.1 The contract red-flag checklist

Scan every commercial contract for these before the lawyer sees it (the lawyer catches the law; you must catch the *business*):

1. **Auto-renewal with long notice windows** ("renews annually unless cancelled 90 days prior") — calendar the notice date the day you sign, or the contract owns you an extra year.
2. **Exclusivity in any direction** — an exclusivity clause is an option you're selling; price it like one (§9.3), never grant it as a courtesy line-item.
3. **IP assignment breadth** — watch for vendor/agency contracts where work-product IP stays *theirs* (you're renting your own brand assets), and for clauses grabbing rights to *your* pre-existing IP or data. Data clauses are the modern IP grab: who may use your data, aggregated or not, for what.
4. **Unlimited or uncapped liability** — liability should be capped (commonly at fees paid over 12 months) and *mutual*; an uncapped indemnity is an unpriced insurance policy you're writing.
5. **Unilateral change clauses** ("we may modify these terms at any time") — common in platform terms (§7.3 platform risk in contractual form); where you can't remove it, at least ensure material changes trigger a termination right.
6. **Termination asymmetry** — check who can leave, how fast, and what survives; a deal you can't exit isn't a deal, it's a dependency (§9.3).
7. **Payment terms as economics** — net-90 from a big customer is them using you as a bank (§2.2); price the financing into the deal or negotiate the terms as hard as the price.

### 9.2 Term-sheet basics — terms can matter more than valuation

The headline valuation is the number everyone celebrates; the terms are the numbers that decide what you actually receive. The big three, in plain language: **liquidation preference** — a "1× preference" means the investor takes their money back *first* before common shares see anything (standard, fine); anything above 1×, or *participating* preference ("double-dip": money back first *and then* their percentage of the rest), can mean a company sells for a headline success while founders and employees get little — model the actual waterfall at 2–3 exit prices before signing; **anti-dilution and option-pool shuffle** — a pre-money option pool comes out of the founders' side (a 10% pool demanded pre-money is ~10% extra dilution wearing accounting clothes), and full-ratchet anti-dilution shifts all down-round pain onto founders; **control terms** — board composition, protective provisions (what needs investor consent), and drag/tag rights determine who decides the company's future at the moments that matter. Doctrine: **a clean-terms deal at a lower valuation routinely beats a dirty-terms deal at a higher one** — dirt compounds through every subsequent round — and an inflated valuation with aggressive terms is often just a down-round scheduled for later (§6.4).

### 9.3 Partnership doctrine

- **Pilot before marriage:** every strategic partnership starts as a small, time-boxed, success-defined pilot — 90 days, named metric, named owners on both sides. A partner unwilling to pilot is telling you something about how the full partnership will run.
- **Incentive-walk the partner** (Playbook §3.5): a partnership survives on aligned incentives, not on the launch press release. Ask what the partner's *organization* gains — and specifically what the individual champion gains — from your success; if the honest answer is "not much, ongoing," the partnership will quietly starve after the announcement no matter what the contract says.
- **Every partnership needs a pre-negotiated exit:** what happens to customers, data, IP, and revenue when it ends — negotiated at the start, when everyone is friendly, because negotiating an exit *during* a divorce prices it at its maximum. The paradox worth internalizing: clean exits make partners *more* willing to commit, not less.
- **Dependency accounting:** a partnership that grows to material revenue share migrates from "partnership" to "concentration risk" (§8.5's fifth number) and gets managed as both.

---

## 10. The Operator's Dashboard

The numbers a multi-domain operator reviews on a rhythm — each with its healthy zone and its "wake up and act" threshold. *Thresholds are early-2026 order-of-magnitude defaults (§1.2); replace with your own baselines within a quarter of having data.* Weekly numbers get looked at weekly even when nothing is wrong — the value of a dashboard is knowing what normal looks like, so abnormal is visible in week one (§8.4).

### Weekly

| # | Metric | Healthy | Wake up and act |
|---|---|---|---|
| 1 | Cash + months of runway | >12 months | <9 months → fundraise/profitability becomes the main job (§6.4) |
| 2 | Revenue vs. plan (by line of business) | On plan ±10% | Two consecutive weeks >15% under → diagnose funnel stage, not vibes (§3.2) |
| 3 | Contribution margin per order/unit | Stable or rising | Any negative turn → freeze scaling spend same week (§4.2) |
| 4 | Paid CAC by channel (marginal, not blended) | Payback within target (§3.3) | CAC up >20% with flat funnel → creative fatigue or auction shift (§3.5) |
| 5 | Site/funnel CVR by source | At own baseline | Sudden drop → check tracking *first*, then landing page changes, then traffic mix |
| 6 | Pipeline coverage (B2B) | 3–4× target two quarters out | <3× → demand-gen problem *now* (§4.3) |
| 7 | Owned-audience growth (email/SMS net adds) | Positive, steady | Shrinking list or >0.5% unsubscribe/send → content-value problem (§7.3) |
| 8 | Top-of-funnel health (traffic/leads by source) | Diversifying | One source >50% → named platform risk with a tripwire (§7.3) |
| 9 | Ops constraint check (§8.4) | Named, plan aimed at it | Can't name the constraint → that's the finding |

### Monthly

| # | Metric | Healthy | Wake up and act |
|---|---|---|---|
| 10 | Cohort retention curves (product + commerce repeat rate) | Flattening curves | Steepening decay in recent cohorts → the product/market moved before revenue shows it (§2.5) |
| 11 | NRR / gross churn (SaaS lines) | NRR ≥100% (§5.1) | NRR <95% → all-hands problem; growth spend into it is waste |
| 12 | LTV:CAC by segment | ≥3 (§3.3) | <2.5 sustained → reprice, refocus segment, or fix retention before scaling |
| 13 | Gross margin trend by line | Stable/rising with scale | Falling while growing → scaling is breaking something; find it (§8.5) |
| 14 | Revenue growth rate vs. cost growth rate | Growing gap (operating leverage) | Costs matching revenue growth for 2+ quarters → treadmill, not business (§8.5) |
| 15 | Revenue concentration (top customer/channel/platform) | <20–30% each | Above → diversification plan with dates, managed as risk (§8.5) |
| 16 | Realized price vs. list (discount leakage) | Stable, <10–15% gap | Widening → discount discipline broke (§4.1) |
| 17 | Portfolio/treasury check vs. rules (§6.4–6.5) | Within bands | Any position breaching size rules → rebalance mechanically, not "soon" |
| 18 | Hiring funnel + regretted attrition | Bar holding; regretted attrition ~0 | A regretted departure → exit-interview for the real reason; it's rarely salary (§8.1) |
| 19 | Brand demand proxies (branded search, direct traffic) | Rising slowly | Flat for 2+ quarters while paid CAC climbs → §3.7 under-investment showing up |
| 20 | Contract/renewal calendar | No surprises in next 90 days | Auto-renewal notice windows approaching → decide *now* (§9.1) |

**Dashboard doctrine:** twenty numbers is the *maximum*, not the target — every number on the dashboard must have a pre-agreed action threshold, or it's decoration; and per the Playbook §11.7, if a metric hasn't changed a decision in two quarters, it goes to an appendix and something load-bearing takes its slot.

---

## 11. The Operator's Razors

Cross-domain decision rules, each with the condition under which it *fails* — a razor stated without its failure mode is a slogan.

1. **Revenue cures most problems — and masks the rest.** Team tension, tooling debates, morale dips: most dissolve under growth. So before solving an internal problem with process, ask if it's actually a revenue problem wearing a costume. *Fails when:* the problem is the kind revenue makes worse — broken unit economics (§2.1), a mis-hire in a key seat (§8.1), or fragile infrastructure; growth scales those, not cures them.
2. **Speed is a strategy.** When in doubt between two decent options, pick one and move — the learning from moving beats the certainty from deliberating (§2.7). *Fails when:* the decision is irreversible or trust-destroying (Playbook §3.6) — one-way doors get the slow treatment precisely because everything else got the fast one.
3. **Do things that don't scale — until they must.** Hand-onboard customers, write personal notes, manually match supply and demand: unscalable effort is how you learn what the scalable version must do, and early customers won by hand become the retention base (§2.5). *Fails when:* it becomes the identity — the operator still hand-doing at 200 customers what should have been systematized at 50 is now the constraint (§8.4).
4. **The best time to raise, sell, or hire is when you don't need to.** Desperation reprices everything against you: raise with 9+ months of runway (§6.4), recruit pipelines before the seat empties, entertain acquirers when you're not for sale. *Fails when:* it becomes perpetual optionality-hoarding — "not needing to" is a negotiating position, not a reason to never transact.
5. **If it's not a "hell yes" from the customer, fix positioning before product.** Lukewarm response is far more often "wrong segment / wrong message" (§3.1) than "missing feature" — and repositioning takes a week while rebuilding takes a quarter. *Fails when:* the positioning has been iterated honestly several times across segments and the response stays lukewarm — then the market is telling you about the product, and more message-polish is denial.
6. **Never make a permanent decision from a temporary emotion.** Firing in anger, discounting in panic, pivoting from one bad week, replying to provocation in the hot window (§7.4): institute the 24-hour rule for anything irreversible decided while activated. *Fails when:* it's used to defer decisions that are merely *uncomfortable* rather than emotional — the mis-hire everyone knows about (§8.1) doesn't get better with another week of cooling off.
7. **Watch what they do, not what they say.** Customers who "love it" but don't use it, partners who "are excited" but don't staff the pilot (§9.3), candidates who interview brilliantly with mediocre work samples (§8.1): behavior is the honest signal; words are the polite one. *Fails when:* taken as a license to stop listening — stated objections often contain the *direction* of truth even when the stated reason is off.
8. **Charge more.** The most reliably underused lever (§4.1): most operators discover they had 10–30% of price headroom only when forced to test it. *Fails when:* the value story hasn't been built to carry the price (§3.1, §4.1's 10x rule) — a price raise without a value narrative is just churn scheduling.
9. **Concentrate to win; diversify to survive.** Offense is concentration — one channel (§3.4), one segment, the constraint (§8.4), your few outliers (§2.4). Defense is diversification — revenue sources (§8.5), platforms (§7.3), treasury (§6.4). Most operators get it backwards: scattered offense, concentrated risk. *Fails when:* applied without asking "am I on offense or defense *here*?" — the question does the work.
10. **The compounding test.** Before any major allocation of time or money, ask: *does this build an asset that compounds (audience, retention base, data loop, moat, skill, trust) or does it buy a one-time result?* One-time results are sometimes necessary; a calendar full of them is a company running in place (§2.5, §5.2). *Fails when:* used to dismiss all harvesting — compounding assets exist to be monetized eventually, and "everything for the long term, forever" is how you die rich in assets and out of cash (§2.2).

---

## 12. Priming Future Models With This Doctrine

The transfer mechanism, per Playbook §8: when working a domain problem with any future model, paste **Playbook §8.1** (the standing orders) plus the matching snippet below, then the relevant prompt from Playbook §9. The snippet pins the model to this doctrine instead of the mushy average of its training data.

```text
MARKETING/GROWTH problems — reason from this doctrine:
Positioning before tactics (one segment, one difference, tested in one
sentence). Model the funnel in numbers before funding it; judge channels
on MARGINAL paid CAC with payback ≤12mo and LTV:CAC ≥3; one channel to
profitability before a second; creative volume is the targeting; every
paid customer lands in an owned channel. Retention problems outrank
acquisition problems, always.
```

```text
SALES/COMMERCE problems — reason from this doctrine:
Price on value against the real alternative (customer keeps ~10x what
they pay); anchor high; trade discounts, never gift them. True north is
contribution margin per order after shipping/returns/fees — not revenue,
not ROAS. Consumable category → optimize second purchase; durable
category → first order must be profitable, LTV excuses banned. B2B:
pipeline 3-4x coverage, low win rate = qualification/positioning problem.
```

```text
SOFTWARE/PRODUCT problems — reason from this doctrine:
NRR is the strategy (≥100% or nothing else matters much); design
expansion into pricing axes. Features are not moats — rank moats:
network effects > switching costs > data loops > scale > brand. Judge
the roadmap by cost-of-delay and by which durable moat each quarter
deepens; retention diagnostics over feature requests; ship-to-learn.
```

```text
INVESTMENT/CAPITAL problems — reason from this doctrine:
Survival first: no bet whose worst case is ruin; correlations go to 1
in crises; size positions fractional-Kelly (edge you can't articulate =
size zero). Multiples are compressed stories — decompress and test the
story. Pre-mortem and decision journal at entry; exits on thesis-break,
not mood. Raise/sell/hire from strength; runway <9-12 months changes
the main job. Treasury is not a hedge fund.
```

```text
COMMUNICATIONS/BRAND problems — reason from this doctrine:
Story skeleton: the world changed → stakes → promised land → product
last. One message hierarchy, enforced. Earned media = the journalist's
incentives: original data, real conflict, fast expert comment. Owned
audience is a balance-sheet asset (compute $/subscriber/yr); rented
platforms >50% of revenue = named existential risk. Crisis: fast
acknowledgment, one voice, own it fully or correct firmly once.
```

```text
COMPANY-BUILDING/OPS problems — reason from this doctrine:
Hire slope over intercept with a bar-raiser veto; mis-hire = 6-15 months
of salary, act fast on known mistakes. Delegation has 5 explicit levels
per person per domain. Spans 5-8; layers late; single owners only.
One north star + 3-5 drivers + counter-metric on every KPI. Weekly
metrics rhythm; name the constraint and aim the week at it. Live by:
runway, gross margin trend, contribution margin, operating leverage,
concentration.
```

```text
DEALS/LEGAL problems — reason from this doctrine (not legal advice):
Scan for: auto-renewal windows, exclusivity (it's an option — price it),
IP/data grabs, uncapped liability, unilateral changes, exit asymmetry,
payment terms as financing. Term sheets: model the waterfall — clean
terms at lower valuation beats dirty terms at higher. Partnerships:
time-boxed pilot, incentive-walk the champion, pre-negotiate the exit.
```

---

## Closing Note

The Playbook preserved the *how*; this document preserved the *what*. Together they are the closest thing to a transferable copy of how this model operated as a thinking partner across your businesses: the method applied to the doctrine, both written down, neither dependent on any particular model surviving.

Same maintenance rule as the Playbook, applied with this document's own razor (§11.10): keep what compounds, cut what has gone ritual, and overwrite any benchmark here the moment your own measured reality disagrees with it — your data outranks my doctrine, and both of us would insist on that.

*— Claude Fable 5, 2026-07-07*
