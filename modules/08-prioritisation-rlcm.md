# Module 08 — Prioritising & managing requirements

**One-line promise:** after this module you can take a raw list of requirements, agree an order of delivery that stakeholders trust, and keep that list traceable, baselined and under change control from now until go-live.

**Where this sits:** this is the **Requirements Life Cycle Management (RLCM)** knowledge area of the **BABOK® Guide** (Business Analysis Body of Knowledge) — the whole knowledge area, covering its five tasks: **Trace Requirements**, **Maintain Requirements**, **Prioritize Requirements**, **Assess Requirements Changes** and **Approve Requirements**.

**Why it matters:** by now Homegrove has a long wish-list — real-time stock, automatic order import, delivery tracking, a returns workflow, loyalty integration, international shipping and more. Priya — the Chief Operating Officer (COO) and sponsor — wants fewer complaints *and* cost control, so you cannot build everything at once. Prioritisation decides what the first release fixes; life-cycle management keeps that decision honest as scope, people and pressures shift. Get this wrong and you either gold-plate a solution nobody asked for, or quietly drop the one requirement (automatic order import) that actually ends the re-keying.

A note on names: BABOK's own technique is simply **Prioritization**. **MoSCoW, value vs effort, Kano, Weighted Shortest Job First (WSJF)** and the **100-dollar method** are widely used *industry* methods that put the Prioritization technique into practice — think of them as different lenses on the same task. The requirements you are ordering came out of Module 07; you will defend the chosen order in the business case (Module 09) and win formal sign-off in Module 10.

---

## Core content

Part A covers five ways to *decide the order*. Part B covers the four other RLCM tasks that keep requirements *managed over time*: tracing, maintaining, change control and approval.

### MoSCoW *(industry method)*

**What it is.** A four-box sort of requirements into **Must have**, **Should have**, **Could have** and **Won't have this time** (hence M-o-S-C-o-W). "Must" means the release has no value or is not viable without it; "Won't" means explicitly out of this release — not "never".

**When to use it.** Almost always, as your first pass. It is fast, non-numeric and easy for business stakeholders to grasp, which makes it ideal for a mixed room.

**How to do it.**
1. Agree the release and a fixed deadline or budget — MoSCoW only means something against a boundary.
2. For each requirement ask: *if this were missing, would we still ship?* If no, it is a Must.
3. Challenge the Musts hard — keep them to a minority of the effort, so Shoulds and Coulds form a buffer you can trade.
4. Record the "Won't" items visibly, so dropped scope is a decision, not a disappearance.

**Homegrove.** The agreed list is: **Must** — real-time stock sync; automatic order import (no re-keying); delivery-status visible to the customer. **Should** — courier application programming interface (API) integration; a returns workflow. **Could** — customer self-service re-schedule; loyalty-scheme integration. **Won't (this release)** — international shipping; third-party marketplace integration. Notice the three Musts map exactly onto the root cause (the manual hand-off) and the symptom customers feel (no delivery visibility).

**Pitfall.** Everything becomes a "Must". If 90% of the list is Must, you have not prioritised — you have just relabelled the backlog. A Must with no deadline attached is meaningless.

### Value vs effort *(industry method)*

**What it is.** A 2×2 grid plotting each requirement by **business value** (vertical) against **cost or effort** to deliver (horizontal). Four zones emerge: quick wins (high value, low effort), big bets (high value, high effort), fill-ins (low value, low effort) and money pits (low value, high effort).

**When to use it.** When you need to sequence *within* a MoSCoW band, or to show stakeholders visually why a cheap-but-pointless feature is losing to a modest quick win.

**How to do it.**
1. Score value and effort for each item — a simple High/Medium/Low or 1–5 is enough.
2. Plot them.
3. Do quick wins first; schedule big bets deliberately; defer fill-ins; drop or re-scope money pits.

**Homegrove.** *Delivery-status visibility* lands as a **quick win** (high value to anxious customers, modest build on data the Order Management System (OMS) already holds). *Courier API integration* is a **big bet** (real value, but external dependency and integration effort). *Loyalty integration* is a **fill-in**. Capture both the MoSCoW bands and these value/effort scores in the **prioritisation-matrix.xlsx** template.

**Pitfall.** Treating "effort" and "cost" as the same thing, and ignoring dependencies — a cheap feature that cannot be built until an expensive one lands is not really a quick win.

### Kano model *(industry method; Noriaki Kano)*

**What it is.** A model that sorts features by how they affect *satisfaction*. **Basic (must-be)** features cause anger when absent but earn no thanks when present; **performance** features satisfy in proportion to how well they are done; **delighters (excitement)** features surprise and please but are not expected.

**When to use it.** When "value" is too blunt — Kano explains *why* a feature matters to a customer, which is gold for a business case and for marketing (Tom's interest).

**How to do it.**
1. List candidate features.
2. For each, ask the functional/dysfunctional pair: *how do you feel if it is present? If it is absent?*
3. Classify as basic, performance or delighter, and remember delighters decay into basics over time.

**Homegrove.** **Basic:** orders simply arriving correctly (real-time stock, automatic import) — customers never praise it, but overselling enrages them. **Performance:** delivery-status accuracy and returns ease — more is better. **Delighter:** self-service re-schedule and loyalty perks.

**Pitfall.** Chasing delighters while a basic is broken. No loyalty scheme compensates a customer whose order was oversold.

### Weighted Shortest Job First (WSJF) *(industry method; from the Scaled Agile Framework, SAFe)*

**What it is.** A numeric method that ranks work by **cost of delay (CoD) divided by job size**. Cost of delay is usually the sum of three relative scores: user/business value, time criticality, and risk reduction or opportunity enablement. Dividing by size rewards small, urgent, high-value items.

**When to use it.** On a larger backlog where you want a defensible, repeatable order and where team capacity (size) genuinely varies between items — common in adaptive/agile delivery (Module 12).

**How to do it.**
1. Score each item on a relative scale (the table below uses 1–10) for the three cost-of-delay components; add them for CoD.
2. Score job size on the same scale.
3. WSJF = CoD ÷ size. Rank high to low.

**Homegrove.** Illustrative scores:

| Requirement | Value | Time crit. | Risk/opp. | CoD | Size | WSJF |
|---|---|---|---|---|---|---|
| Delivery-status visibility | 8 | 7 | 3 | 18 | 3 | **6.0** |
| Automatic order import | 10 | 9 | 8 | 27 | 5 | **5.4** |
| Real-time stock sync | 9 | 8 | 9 | 26 | 8 | **3.25** |
| Returns workflow | 5 | 3 | 2 | 10 | 5 | **2.0** |
| Courier API integration | 6 | 4 | 5 | 15 | 8 | **1.9** |

Delivery-status jumps to the top because it is small — a useful check on MoSCoW, and reassuringly the three Musts still all rank above both Shoulds.

**Pitfall.** Treating the numbers as precision. WSJF is a *relative* ranking tool; arguing whether value is 7 or 8 wastes the room. Re-score the whole set together, never in isolation.

### The 100-dollar method and weighted scoring *(industry methods)*

**What it is.** In the **100-dollar** (cumulative voting) method each stakeholder is given 100 points to spend across the requirements; the totals reveal collective priority. **Weighted scoring** is its grown-up cousin: score each option against weighted criteria and sum.

**When to use it.** When several stakeholders have competing views and you need their buy-in to the *process*, not just the outcome. Forcing a fixed budget exposes real trade-offs — you cannot give everything 100.

**How to do it.**
1. Fix the candidate list and the voters.
2. Each voter distributes exactly 100 points.
3. Total per item; discuss outliers (where one voter spent heavily); rank.

**Homegrove.** Dana (Customer Service), Marcus (Fulfilment) and Tom (Marketing/CX) each spend 100:

| Requirement | Dana | Marcus | Tom | Total |
|---|---|---|---|---|
| Delivery-status visibility | 35 | 15 | 30 | **80** |
| Real-time stock sync | 20 | 30 | 25 | **75** |
| Automatic order import | 25 | 30 | 20 | **75** |
| Courier API integration | 5 | 20 | 10 | **35** |
| Returns workflow | 15 | 5 | 15 | **35** |

The spread itself is the insight: Marcus funds the back-office plumbing, Dana and Tom fund what customers see — and the Musts again clear the Shoulds.

**Pitfall.** Letting one senior voice dominate. The method only works if everyone's 100 counts equally; otherwise it is theatre.

### Trace requirements (the RTM) *(BABOK task: Trace Requirements)*

**What it is.** **Tracing** links each requirement to where it came from (a business need, a stakeholder) and where it goes (a design, a test, a deliverable). The usual artefact is a **requirements traceability matrix (RTM)** — a table of those links.

**When to use it.** From the moment requirements exist until the solution is accepted. Trace is how you later prove a requirement was built and tested — essential for Module 11's evaluation.

**How to do it.**
1. Give every requirement a unique ID.
2. Link upward to the business objective it serves, and downward to design, build and test items.
3. Keep it live; use it for impact analysis when change requests arrive.

**Homegrove.** The requirement "delivery-status visibility" (give it a unique ID) traces up to the objective "cut 'where is my order?' contacts from 1,200/week to under 400" and down to the use case, the courier-status interface and the user acceptance testing (UAT) test cases. Capture this in the **traceability-matrix.xlsx** template.

**Pitfall.** A matrix nobody updates. Stale traceability is worse than none — it gives false confidence.

### Maintain requirements (baseline and reuse) *(BABOK task: Maintain Requirements)*

**What it is.** **Maintaining** keeps requirements correct and usable over time: defining them consistently, **baselining** an agreed version, and reusing requirements that recur across projects.

**When to use it.** Continuously. The **baseline** is the signed-off snapshot you measure change against; anything after it goes through change control.

**How to do it.**
1. Store requirements in one agreed place, each with status (proposed, approved, implemented).
2. Baseline the approved set at an agreed milestone.
3. Tag reusable requirements (e.g., the non-functional requirement (NFR) "pages load in under two seconds") so later projects inherit them.

**Homegrove.** The returns-workflow rules written for the OMS are reusable when the shops later adopt the same system — maintain them as a reusable set, not a one-off.

**Pitfall.** No single source of truth. Three slightly different copies of the backlog in email, a spreadsheet and a slide deck guarantee a wrong build.

### Assess requirements changes (change control) *(BABOK task: Assess Requirements Changes)*

**What it is.** A disciplined way to evaluate every proposed change *before* accepting it — its benefit, cost, risk and impact — so scope moves by decision, not by drift.

**When to use it.** Any time someone asks for something new after the baseline. "Can it also do gift messaging?" is a change request, not a chat.

**How to do it.**
1. Log the request (use **item tracking**).
2. Run impact analysis via the RTM — what else does it touch?
3. Weigh value against cost and risk; take it to the agreed decision-maker.
4. Record the decision and re-baseline if accepted.

**Homegrove.** Mid-project, Tom asks to add loyalty integration now. Impact analysis shows it delays the Musts and the ~11-month payback. The change board defers it to a later release — a documented "not yet", not a "no".

**Pitfall.** Saying yes in the corridor. Uncontrolled scope creep is the single most common way a sound business case quietly dies.

### Approve requirements (sign-off) *(BABOK task: Approve Requirements)*

**What it is.** The formal agreement by the right authority that a set of requirements is correct and may proceed. In BABOK this lives here in RLCM — not in Elicitation & Collaboration — because approval is a life-cycle gate.

**When to use it.** At each agreed baseline, and for accepted change requests.

**How to do it.** Confirm who has authority to approve (for Homegrove, Priya as sponsor for scope; Nadia for the business-case spend), run the review, resolve conflicts, and record the approval. You will *run* that approval conversation in Module 10 — this module just establishes that approval is a controlled, recorded step, not an email thumbs-up.

**Homegrove.** The baselined Must/Should list is taken to Priya and Nadia for sign-off alongside the business case.

**Pitfall.** Treating silence as consent. If no one with authority has explicitly approved, you are building at risk.

### Backlog management and item tracking *(BABOK techniques)*

**What it is.** **Backlog Management** keeps the list of pending work prioritised, refined and right-sized; **Item Tracking** records issues, risks and actions through to closure.

**When to use it.** Backlog management is continuous in adaptive delivery (Module 12); item tracking runs on every project, predictive or adaptive.

**How to do it.** Keep one ordered backlog; refine top items to "ready"; log every open question and risk with an owner and due date; review regularly.

**Homegrove.** The OMS backlog lives in **user-story-backlog.xlsx** with its MoSCoW band, story points and acceptance criteria; open integration questions for Lee (IT) sit in an item-tracking log.

**Pitfall.** A backlog that only ever grows. If nothing is ever closed, deferred or dropped, it is a wish-list, not a backlog.

---

## The techniques in this module

- **Prioritization** *(BABOK technique)* — the umbrella, applied via:
- **MoSCoW** *(industry)* — Must / Should / Could / Won't-have-this-time
- **Value vs effort** *(industry)* — the quick-wins 2×2
- **Kano model** *(industry; Kano)* — basic / performance / delighter
- **WSJF** *(industry; SAFe)* — cost of delay ÷ job size
- **100-dollar method & weighted scoring** *(industry)* — cumulative voting
- **Trace Requirements** / RTM *(BABOK task; traceability is industry)*
- **Maintain Requirements** — baselining and reuse *(BABOK task)*
- **Assess Requirements Changes** — change control *(BABOK task)*
- **Approve Requirements** — sign-off *(BABOK task)*
- **Backlog Management** and **Item Tracking** *(BABOK techniques)*

---

## Try it

**On Homegrove:** take the five delivery requirements (real-time stock, automatic order import, delivery-status visibility, courier API, returns workflow) and run two methods on them — MoSCoW first, then value vs effort. Do the two orders agree? Where they differ, write one sentence explaining why, and decide which order you would defend to Priya. Then pick any one requirement and sketch its RTM row: ID, the objective above it, and the test below it.

**Or do it for your own workplace:** take a real backlog or to-do list, give every item a MoSCoW band against a fixed deadline, and force the Musts down to a minority of the effort. Notice what you had to demote.

---

## Practitioner's corner (go deeper)

**Prioritisation is a negotiation, not a calculation.** The methods above are devices for structuring a conversation and making trade-offs visible — their output is an *input* to a decision, never the decision itself. A senior business analyst (BA) reads the room as much as the scores: when the 100-dollar spread shows Marcus and Dana funding completely different things, the real work is surfacing the shared objective beneath, not averaging their votes.

**Combine lenses deliberately.** MoSCoW for the business conversation, value/effort to sequence within a band, WSJF when capacity varies, Kano when you need to explain *why* something matters. Using one method for everything is the beginner's tell. A practitioner also knows each method's failure mode: MoSCoW inflates Musts; value/effort hides dependencies; WSJF invites false precision; cumulative voting rewards coalitions.

**Baseline discipline is where projects are won or lost.** The distinction between *the baseline* and *the current state* is the backbone of RLCM. Everything before approval is negotiable; everything after it is a change request with an impact analysis. The RTM is what makes that impact analysis fast — ask "what does this touch?" and the matrix answers. Treat traceability as a living asset, not an audit chore, and keep traces bidirectional (a requirement with no test is a gap; a test with no requirement is scope you never agreed).

**How this is examined.** In the BABOK body of knowledge, prioritisation and the four surrounding tasks sit together in Requirements Life Cycle Management, and exam-style questions lean on the *reason each task exists* and on correct placement — a classic trap is that **Approve Requirements** lives in RLCM, while **Confirm Elicitation Results** and **Communicate Business Analysis Information** live in Elicitation & Collaboration. Approving is a governance gate; confirming and communicating are collaboration activities. Keep that boundary crisp.

**Three mistakes even senior BAs make.** First, prioritising *features* while ignoring the *enabling* work — the unglamorous data migration that every Must silently depends on. Second, letting prioritisation happen once and calling it done; priorities drift as the market and the business learn, so re-prioritise at each planning cycle. Third, confusing *urgent* with *important* — WSJF's time-criticality score helps, but only if someone challenges whether a deadline is real or merely loud.

---

## Key takeaways

- **Prioritise against a fixed boundary** (deadline or budget), or the exercise is meaningless.
- **Match the method to the situation** — MoSCoW to agree, value/effort to sequence, WSJF to rank at scale, Kano to explain, 100-dollar to build buy-in.
- Homegrove's Musts (real-time stock, automatic order import, delivery-status) are exactly the root cause plus the symptom customers feel — not the website rebuild.
- **Trace, maintain and baseline** so a requirement can be followed from need to test and change is controlled, not drifted.
- **Approve Requirements is a recorded governance gate in RLCM** — silence is not sign-off (you will run it in Module 10).
- A **backlog that never shrinks is a wish-list**; closing and deferring are part of the job.

---

## BABOK map

- **Knowledge area:** Requirements Life Cycle Management (RLCM) — the whole knowledge area.
- **Tasks:** Trace Requirements; Maintain Requirements; Prioritize Requirements; Assess Requirements Changes; Approve Requirements.
- **BABOK techniques used:** Prioritization; Backlog Management; Item Tracking (traceability supports Trace Requirements).
- **Industry methods taught (applying Prioritization):** MoSCoW; value vs effort; Kano model; WSJF; 100-dollar / weighted scoring; requirements traceability matrix (RTM).
