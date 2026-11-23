# Module 09 — Options, feasibility & the business case

**One-line promise:** after this module you can turn a well-understood problem into a shortlist of realistic options, test them for feasibility, put numbers on the best one — payback, return on investment and net present value — weigh the risks, and write a business case that makes a clear recommendation.

**Where this sits:** this module draws on two knowledge areas of the **BABOK® Guide** (Business Analysis Body of Knowledge): from **Strategy Analysis**, **Define Change Strategy** and **Assess Risks**; from **Requirements Analysis and Design Definition (RADD)**, **Define Design Options** and **Analyze Potential Value and Recommend Solution**. (Note the BABOK task is *Define Design Options*, not "solution options".)

**Why it matters:** Homegrove's analysis is done — you know the root cause is the manual order hand-off, not the website (Module 02), and you have a prioritised Must/Should/Could/Won't list (Module 08). But nobody has spent a penny yet. The business case turns that analysis into a decision: it is where Priya — Chief Operating Officer (COO) and sponsor — and Nadia (Finance Business Partner, who signs off the spend) decide whether to fund the integrated **Order Management System (OMS)**. A weak case wastes the analysis before it; a strong one wins the money and sets the measures you will be held to later (Module 11).

---

## Core content

### Define design options *(BABOK task: Define Design Options)*

**What it is.** Generating and describing the realistic ways to meet the need — the "design options" — so a choice can be made rather than defaulting to the first idea. They range from "do nothing" to full custom build.

**When to use it.** Before any cost-benefit work — you cannot cost a solution you have not framed, and a one-option business case is an advert, not an analysis.

**How to do it.**
1. Always include the **do-nothing / status-quo** baseline — the thing every other option must beat.
2. Generate a spread: minimal, moderate and ambitious.
3. Describe each option's scope, its Must-coverage, and its rough cost and timeline (using Estimation).
4. Screen out options that cannot meet the non-negotiable need.

**Homegrove.** Four options: **(0) do nothing**; **(1) rebuild the website** — the COO's original instinct; **(2) buy an off-the-shelf OMS and integrate it** — storefront ↔ warehouse ↔ couriers, real-time stock, automatic order flow; **(3) build a custom OMS in-house**. Options 0 and 1 fail the screen at once: neither touches the manual re-keying behind the late deliveries and overselling, so neither fixes the root cause.

**Pitfall.** Presenting a "straw man" shortlist — two weak options flanking the one you already chose; stakeholders see through it.

### Feasibility analysis *(industry; supports Define Design Options)*

**What it is.** A check that a surviving option is actually doable — technically, operationally, economically, on schedule and legally.

**When to use it.** On each shortlisted option before detailed costing, to kill non-starters cheaply.

**How to do it.** For each option ask: can the technology do it? will the business adopt it? does the money work? can we hit the timeline? any data-protection or contractual constraints? Rate each red/amber/green.

**Homegrove.** The buy-and-integrate OMS is technically feasible, operationally sensitive (Sam the warehouse supervisor fears job loss — a known change risk from Module 03) and economically strong; the in-house build is feasible but schedule-risky and costlier to run.

**Pitfall.** Confusing "feasible" with "advisable" — feasibility screens; the business case decides.

### Decision analysis *(BABOK technique: Decision Analysis)*

**What it is.** A structured comparison of options against weighted criteria, producing a transparent score that supports — not replaces — judgement.

**When to use it.** When two or more options survive feasibility and you must justify the choice to stakeholders.

**How to do it.**
1. Agree the criteria and their weights (summing to 100%).
2. Score each option 1–5 on each criterion.
3. Multiply by weight, sum, and read the result alongside any knockout (go/no-go) criteria.

**Homegrove.** An illustrative weighted matrix (criteria weighted for Homegrove's goals):

| Criterion (weight) | Do nothing | Rebuild website | Buy & integrate OMS | Build custom OMS |
|---|---|---|---|---|
| Fixes the root cause (35%) | 1 | 1 | 5 | 5 |
| Total cost (20%) | 5 | 2 | 4 | 2 |
| Speed to benefit (20%) | 5 | 2 | 4 | 2 |
| Delivery risk (15%) | 5 | 3 | 4 | 2 |
| Future flexibility (10%) | 1 | 2 | 4 | 5 |
| **Weighted total** | **3.20** | **1.80** | **4.35** | **3.35** |

**Buy & integrate OMS** wins at 4.35. The teaching point: "do nothing" scores a deceptively high 3.20 because it is cheap, fast and low-risk — which is why *fixes the root cause* must act as a **knockout criterion**, so options 0 and 1 are out regardless of their average.

**Pitfall.** Hiding a fatal flaw inside a weighted average — apply must-have criteria as go/no-go gates *before* trusting the totals.

### Vendor assessment *(BABOK technique: Vendor Assessment)*

**What it is.** Evaluating suppliers when an option means buying or integrating third-party products or services.

**When to use it.** For the buy-and-integrate option and the courier application programming interface (API) partners.

**How to do it.** Assess candidates on fit to the Musts, total cost of ownership, support levels, security and data handling (Lee Tan, IT, owns this), product roadmap, references and exit terms.

**Homegrove.** The OMS vendor is assessed on real-time stock and automatic-import fit, courier-API coverage, UK data hosting and a clean exit clause; courier partners on API reliability and tracking granularity.

**Pitfall.** Scoring only on sticker price and features — the cheap licence with a punishing renewal is a trap.

### Financial analysis: payback, ROI and NPV *(BABOK technique: Financial Analysis)*

**What it is.** Putting money on the recommended option so it can be judged. Three staple measures: **simple payback** (how long until the outlay is repaid), **return on investment (ROI)** (net gain as a percentage of outlay) and **net present value (NPV)** (future cash flows in today's money, after discounting).

**When to use it.** On the recommended option, always — these are the numbers Nadia will interrogate.

**How to do it.** Lay out the costs and benefits, then compute each measure, using Homegrove's exact figures.

**The costs and benefits.**

| Item | Amount |
|---|---|
| One-off project cost (software + integration + rollout) | £240,000 |
| Annual operating cost (licence + support) | £40,000 |
| — Fewer refunds / goodwill credits on late or wrong orders | £120,000 |
| — Labour saved by ending the twice-daily re-keying (≈3 full-time equivalents, partly redeployed) | £90,000 |
| — Extra margin from fewer lost sales (overselling) + a modest repeat-purchase lift | £90,000 |
| **Gross annual benefit** | **£300,000** |
| **Net annual benefit** (£300,000 − £40,000 operating cost) | **£260,000** |

**Simple payback** = one-off cost ÷ net annual benefit = £240,000 ÷ £260,000 = **0.92 years, about 11 months**.

**Simple 3-year ROI** = (three years of net benefit − one-off cost) ÷ one-off cost = (3 × £260,000 − £240,000) ÷ £240,000 = £540,000 ÷ £240,000 = **225%**.

**Net present value (NPV) at a 10% discount rate.** Future money is worth less than money today, so each year's net benefit is divided by (1 + 0.10) raised to the power of the year number:

| Year | Net cash flow | Present value at 10% |
|---|---|---|
| 0 (now) | −£240,000 | −£240,000 |
| 1 | +£260,000 | £236,364 |
| 2 | +£260,000 | £214,876 |
| 3 | +£260,000 | £195,342 |
| **3-year NPV** | | **£406,582 ≈ £406,600** |

The working: £260,000 ÷ 1.10 = £236,364; £260,000 ÷ 1.21 = £214,876; £260,000 ÷ 1.331 = £195,342. Add the three present values (£646,582) and subtract the £240,000 outlay to get **£406,582, rounded to about £406,600**. A positive NPV means the project beats the 10% hurdle rate — it creates value; the live formulas sit in the **business-case.xlsx** template so you can flex the assumptions.

**Pitfall.** Over-claiming benefits. The £90,000 labour saving assumes staff are *redeployed*, not that three people are simply cut — say so, or Finance will discount it. And never quote NPV without stating the discount rate.

### Risk analysis and management *(BABOK task: Assess Risks; technique: Risk Analysis and Management)*

**What it is.** Identifying what could undermine the change, assessing each risk's likelihood and impact, and planning a response (avoid, transfer, mitigate or accept).

**When to use it.** Before finalising the business case — unmanaged risk loses Finance's confidence fast.

**How to do it.** Build a short risk register: name each risk, rate likelihood and impact, assign an owner and a response.

**Homegrove.**

| Risk | Likelihood | Impact | Response |
|---|---|---|---|
| Courier API integration slips | Medium | High | Keep it a *Should*, not a *Must*; engage Lee and partners early |
| Staff resistance (Sam fears job loss) | High | Medium | Redeploy rather than cut; involve early (Module 03) |
| Data migration errors at cut-over | Medium | High | Cleanse data; run old and new in parallel before switching |
| Vendor lock-in | Medium | Medium | Negotiate exit clause and data portability (Vendor Assessment) |
| Benefits not realised | Medium | High | Baseline the metrics now; post-implementation review (Module 11) |

**Pitfall.** A risk register written once and never revisited. Risks change — review at each gate.

### Define change strategy *(BABOK task: Define Change Strategy)*

**What it is.** The plan for *how* the organisation moves from today's state to the future state — the transition approach, not just the end solution.

**When to use it.** As part of the business case, so decision-makers fund a realistic path.

**How to do it.** Describe the approach (big-bang vs phased), the transition requirements (temporary capabilities needed only during the move), and how you will sustain the change.

**Homegrove.** A **phased rollout**: pilot the OMS on one warehouse shift, run it in parallel with the old spreadsheet process to prove the automatic import, then switch fully and add the Should items. Transition requirements (data cleansing, dual-running, retraining) come from Module 07 and are costed inside the £240,000.

**Pitfall.** Costing the destination but forgetting the journey — transition is real work you must budget for.

### Writing the business case and the recommendation *(BABOK technique: Business Cases; task: Analyze Potential Value and Recommend Solution)*

**What it is.** The document that assembles everything above and states a clear recommendation. A typical business case covers: the problem and need; the options; the recommended option; costs and benefits; risks; the change strategy; and the decision being asked for.

**When to use it.** Once analysis is complete and before money is committed — the gate to delivery.

**How to do it.** Lead with the recommendation (busy executives read top-down), support it with the numbers, and make the "ask" explicit. For Homegrove it is unambiguous: **proceed with Option 2, the buy-and-integrate OMS** — the only feasible option that fixes the root cause, paying back in about 11 months, returning 225% over three years, with a three-year NPV of about £406,600.

**Pitfall.** Burying the recommendation on page nine. If a reader cannot find the ask and why in the first minute, the case is weaker than the analysis behind it. You will present this case and win approval in **Module 10**.

---

## The techniques in this module

- **Define Design Options** *(BABOK task)* — framing the realistic options, including do-nothing
- **Feasibility analysis** *(industry)* — technical, operational, economic, schedule, legal
- **Decision Analysis** *(BABOK)* — weighted scoring plus knockout criteria
- **Vendor Assessment** *(BABOK)* — supplier evaluation
- **Financial Analysis** *(BABOK)* — payback, ROI, NPV
- **Risk Analysis and Management** *(BABOK; task Assess Risks)*
- **Define Change Strategy** *(BABOK task)* — the transition approach
- **Business Cases** and **Analyze Potential Value and Recommend Solution** *(BABOK)*
- **Estimation** *(BABOK)*

---

## Try it

**On Homegrove:** confirm the three headline numbers yourself — payback (£240,000 ÷ £260,000), 3-year ROI and NPV at 10%. Then write the one-paragraph recommendation for the top of the business case: the option, the three numbers, and one sentence on why it beats "do nothing". Keep it under 120 words.

**Or do it for your own workplace:** take any proposed purchase, list its one-off cost and net annual benefit, and compute simple payback and 3-year ROI. Notice how a modest change in the benefit assumption swings the result — that sensitivity is what Finance will probe.

---

## Practitioner's corner (go deeper)

**A business case is an argument, not a spreadsheet.** The numbers are necessary but not sufficient; the case persuades by connecting cost to the business objectives set in Strategy Analysis. The discipline of "could I defend every number to Nadia?" is what separates a fundable case from an optimistic one.

**Know the limits of each measure.** Simple payback ignores everything after the payback point and the time value of money — intuitive but crude. ROI is sensitive to the window you choose (state it: this is a *3-year* ROI). NPV is the most complete but only as good as its discount rate and cash-flow assumptions. Quote all three together — each covers the others' blind spots — and always stress-test: what if the benefit is 20% lower, or the project slips six months?

**Benefits must be owned, and later proven.** A benefit with no owner is a hope. The £120,000 refund saving belongs to someone (Marcus and Dana between them); name them, and capture the baseline metrics *before* go-live so the saving can be demonstrated in Module 11.

**How this is examined.** Be precise that **Define Design Options** and **Analyze Potential Value and Recommend Solution** sit in RADD, while **Define Change Strategy** and **Assess Risks** sit in Strategy Analysis — a common exam trap splits these across the two knowledge areas. Remember too it is "design options", not "solution options", and that the **business case** is itself a named technique.

**Three mistakes even senior business analysts (BAs) make.** First, double-counting benefits — claiming the same saved hour as both labour saved and extra capacity. Second, presenting a single option and calling it a business case, which denies the decision-maker a real choice. Third, treating the business case as a one-off rather than a living baseline you revisit when assumptions change — the reassess discipline you learned in Module 08.

---

## Key takeaways

- **Always frame several design options, including do-nothing** — a one-option case is not analysis.
- **Screen with feasibility, decide with Decision Analysis**, applying must-have criteria as knockouts.
- Homegrove's recommended OMS: **one-off £240,000, net annual benefit £260,000, payback about 11 months, 3-year ROI 225%, 3-year NPV about £406,600** at a 10% discount rate.
- **Quote payback, ROI and NPV together** — each covers the others' blind spots — and state the discount rate and time window.
- **Manage risk and the transition path explicitly**; a destination without a journey is an underfunded plan.
- **Lead the business case with the recommendation**; the analysis is the evidence, not the headline.

---

## BABOK map

- **Knowledge areas:** Strategy Analysis; Requirements Analysis and Design Definition (RADD).
- **Tasks:** Define Design Options; Analyze Potential Value and Recommend Solution (RADD); Define Change Strategy; Assess Risks (Strategy Analysis).
- **BABOK techniques used:** Business Cases; Financial Analysis; Decision Analysis; Risk Analysis and Management; Vendor Assessment; Estimation.
- **Industry methods taught:** feasibility analysis; ROI, simple payback and NPV (financial measures applying Financial Analysis).
