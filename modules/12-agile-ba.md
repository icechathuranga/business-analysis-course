# Module 12 — Agile business analysis

**One-line promise:** after this module you can work as a business analyst on an agile team — supporting a product owner, mapping and refining a backlog, splitting stories so they deliver value in slices, and doing analysis just in time instead of all up front.

**Where this sits:** this module maps to the **Agile Perspective** in the **BABOK Guide** (the Business Analysis Body of Knowledge, maintained by the International Institute of Business Analysis, or IIBA). A perspective is a lens over the knowledge areas rather than a seventh area; here it reshapes how you do **Requirements Life Cycle Management** and **Requirements Analysis and Design Definition** when delivery is iterative. It is aligned to the IIBA's Agile Analysis Certification (AAC).

**Why it matters:** Homegrove could build the Order Management System (OMS) in one big specified-up-front release, or in small working increments, learning as it goes. The second is almost always wiser for a system this uncertain: ship live delivery status first, see whether the "where is my order?" contacts fall, then decide what to build next. Working that way changes the business analyst's (BA's) job — you stop writing one giant document and start feeding a living backlog with just enough analysis, just in time. That is a different discipline, not a lazier one.

---

## Core content

### Predictive, adaptive and hybrid

**What it is.** The two approaches you choose between. A **predictive** approach plans and specifies most requirements up front, then builds to the plan (plan-first, waterfall-style). An **adaptive** approach delivers in short iterations, keeping requirements deliberately light until just before they are built, and re-planning constantly. Use BABOK v3's words — *predictive* and *adaptive* — which you met in Module 00 and chose between in Module 04.

**When to use it.** Choose by uncertainty: the less you know up front, the more adaptive you should be. It is a spectrum, not a switch.

**How to do it.**
1. Read the context: risk, regulation, how fixed the scope is.
2. Place the work on the predictive–adaptive line.
3. Expect **hybrid** — a predictive frame for fixed milestones, with adaptive delivery inside it.

**Homegrove example.** The OMS integration and payment pieces want a predictive, carefully-specified approach; the customer-facing delivery-tracking features are better built adaptively — shipped and improved in increments. A fixed courier-contract milestone gives the predictive frame; the features flow adaptively inside it.

**Pitfall.** Calling a project "agile" while still demanding every requirement be signed off before any build starts. That is predictive work wearing agile vocabulary.

### The BA on Scrum and Kanban teams

**What it is.** The two most common adaptive delivery frames. **Scrum** *(industry)* organises work into fixed iterations (sprints) with three roles — a **product owner (PO)** who owns the *what* and *why*, a **scrum master** who protects the process, and the developers who build — and recurring events: planning, a daily stand-up, a review and a retrospective. **Kanban** *(industry)* has no fixed sprints; work flows continuously across a board, pulled into each stage only when there is capacity, with **work-in-progress (WIP) limits** to stop the team starting more than it can finish.

**When to use it.** Scrum when a regular cadence helps the team commit and demonstrate; Kanban when work arrives unpredictably and flow matters more than a fixed sprint.

**How to do it.**
1. Prepare the backlog before each planning session or pull decision.
2. Clarify requirements live — inside the sprint, or as cards are pulled.
3. Demonstrate delivered value at the review, or as each card completes.

**Homegrove example.** Homegrove's OMS team runs its backlog in short iterations. The BA readies the next iteration's stories (real-time stock, automatic order import, delivery status) before planning, then demonstrates the live-delivery-status feature to Dana and Marcus at the review.

**Pitfall.** Treating either frame as a ceremony checklist. The point is fast feedback and flow, not attending meetings.

### Product owner versus BA

**What it is.** The question every new agile BA asks. The **product owner** is accountable for the value of the product and owns the priority order of the backlog — one person with the final say. The BA does the *analysis* that makes those decisions sound: eliciting needs, modelling process and data, writing clear stories and acceptance criteria, exposing dependencies and risks.

**When to use it.** Settle the split at the start of the engagement, so accountability for value is unambiguous.

**How to do it.**
1. Confirm who holds the final say on priority (the PO).
2. Agree how the BA supports that person with analysis.
3. Decide the model: the BA *is* the PO, *supports* a business-side PO, or sits on the team as a dedicated analyst.

**Homegrove example.** Dana Okoro — who lives the customer pain daily — is a natural PO or PO proxy, with the BA supplying the rigour behind her calls: the process models from Module 06 and the acceptance criteria from Module 07.

**Pitfall.** A BA quietly making prioritisation decisions that belong to the PO, or a PO with no analysis support guessing at requirements.

### User story mapping

**What it is.** **User story mapping** *(industry; Jeff Patton)* lays the user's journey left-to-right as a *backbone* of activities, then hangs the detailed stories beneath each activity, most essential at the top. A horizontal line then slices a thin first release that still crosses the whole journey.

**When to use it.** Early, to shape a backlog around user value instead of a flat feature list, and to agree the smallest end-to-end first release.

**How to do it.**
1. Write the backbone of user activities, left to right.
2. Hang stories under each activity, most essential at the top.
3. Draw a slice line for the thinnest release that still spans the journey.

**Homegrove example.** The backbone is the customer's order journey: browse, order, pay, fulfil, deliver, return. Mapping it as a group reveals gaps a flat list hides, and makes "what's the smallest thing that helps end to end?" a visible, shared decision.

**Pitfall.** Mapping only the happy path and forgetting the unhappy branches — returns, failed payments, missing stock — which is exactly where Homegrove's pain lives.

### Backlog refinement

**What it is.** The ongoing work of keeping the backlog healthy, using the **Backlog Management** technique *[BABOK]*: adding items, removing stale ones, re-ordering by value and risk, splitting big items, and detailing the top so the next iteration's stories are ready.

**When to use it.** Continuously — a little-and-often habit, not a one-off event.

**How to do it.**
1. Keep one ordered backlog.
2. Re-order by value and risk as you learn.
3. Detail and size the top items; leave lower items deliberately coarse.

**Homegrove example.** The OMS backlog lives in **user-story-backlog.xlsx** (from Module 08). Each refinement session the BA readies the top few stories — say, splitting delivery status into its screen and its notification — while leaving loyalty-scheme integration (a *Could*) coarse.

**Pitfall.** Refining the whole backlog to the same fine detail. Detail belongs at the top; items far down will change, so detailing them is waste.

### Splitting stories

**What it is.** Breaking big stories into small ones that still deliver value, each kept true to **INVEST** *(industry)* — Independent, Negotiable, Valuable, Estimable, Small, Testable.

**When to use it.** Whenever a story is too big to finish comfortably in one iteration, or too big to estimate with confidence.

**How to do it.**
1. Find a natural seam — a workflow step, a business-rule variation, a data variation, a channel.
2. Split *vertically*, so each slice is a thin, shippable piece of real value.
3. Check each slice against INVEST.

**Homegrove example.** The live-delivery-status story splits cleanly along its own acceptance criteria: one story for *showing* courier status and estimated date in "My Orders", a second for *notifying* the customer by email within 15 minutes of a status change. Each is independently valuable and testable.

**Pitfall.** Splitting *horizontally* by technical layer — "build the database", "build the application programming interface (API)", "build the screen" — none of which a customer can use, so none can be demonstrated or validated.

### Definition of Ready and Definition of Done

**What it is.** Two shared team checklists. A **Definition of Ready (DoR)** *(industry)* says when a story is fit to be pulled into an iteration; a **Definition of Done (DoD)** *(industry)* says when a story is truly finished.

**When to use it.** Agree both once, early, then apply them to every story.

**How to do it.**
1. For the DoR, require each story to be clear, small enough, with acceptance criteria and no blocking unknowns.
2. For the DoD, require it built, tested, meeting its acceptance criteria, and shippable.
3. Make both visible and hold every story to them.

**Homegrove example.** The delivery-status story is *ready* only once its two acceptance criteria are written and the courier-feed question is answered; it is *done* only once both criteria pass test and the email notification actually fires within 15 minutes.

**Pitfall.** A DoD that stops at "code written", letting half-tested work be called done and resurface later as defects.

### Just-in-time, just-enough analysis

**What it is.** **Progressive elaboration**: analysing each item in just enough detail, just before it is built, so your understanding is as current as possible and nothing is wasted on items that get dropped. Relative **Estimation** *[BABOK]* — sizing stories against each other rather than in hours — fits this rhythm.

**When to use it.** Throughout adaptive delivery, for each item as it rises towards the top of the backlog.

**How to do it.**
1. Analyse top items to "ready"; keep lower items light.
2. Use the same techniques as predictive work — interviews, modelling and acceptance criteria from Modules 05 to 07 — but in small, continuous doses.
3. Re-estimate relatively as understanding improves.

**Homegrove example.** You do not write every OMS story up front. You detail delivery status now because it is next; the returns-workflow stories stay one-line placeholders until they rise up the backlog.

**Pitfall.** "Just enough" sliding into "not enough", so the team starts stories riddled with unanswered questions and stalls mid-iteration.

---

## The techniques in this module

- **Backlog Management** *[BABOK]* — maintaining and ordering the backlog.
- **User Stories** *[BABOK]* — expressing needs as small, valuable increments.
- **Acceptance and Evaluation Criteria** *[BABOK]* — defining when a story is done and right.
- **Estimation** *[BABOK]* — relative sizing of backlog items.
- **User story mapping** *(industry; Jeff Patton)* — framing the backlog along the user journey.
- **Definition of Ready / Definition of Done** *(industry)* — the team's quality gates.
- **Story splitting and INVEST** *(industry)* — breaking work into valuable vertical slices.
- **Scrum and Kanban roles and flow** *(industry)* — the delivery frames the BA works within.

---

## Try it

**On Homegrove:** sketch a user story map for the order journey — write the backbone (browse, order, pay, fulfil, deliver, return) across the top, then list two or three stories under "deliver" and "return". Draw a line for the smallest first release that still spans the whole journey. Then take any one of your stories and write a three-item Definition of Ready for it.

**Or do it for your own workplace:** map the backbone of a journey your team owns, hang five stories off it, and split the biggest one vertically into two shippable slices.

---

## Practitioner's corner (go deeper)

The deepest shift agile asks of a BA is from *author* to *collaborator*. In a predictive world your deliverable is a document; in an adaptive world your deliverable is a *shared understanding* that lives in the team, the backlog and the conversation. A classic practice here is the "three amigos" — the BA (or PO), a developer and a tester talking a story through together before it is built, so the analysis, the build and the test are aligned from the start. This is where acceptance criteria written in **Given/When/Then** (the Gherkin format from Module 07) pay off most: the same sentences drive the conversation, the build and the automated test — a practice often called specification by example or behaviour-driven development.

Be deliberate about **story-splitting patterns** rather than splitting by instinct. Useful seams include workflow steps, business-rule variations, data variations, interface channels, and separating the simple core from the complex edge cases. The anti-pattern to drill out of a team is horizontal slicing by technical layer, because it produces increments nobody can use or evaluate. A good test of any split: could you demonstrate each resulting slice to Priya Shah and have it mean something?

Watch for **analysis debt** — the adaptive cousin of technical debt. Deferring analysis is healthy; *never doing it* is not. Items that have sat near the top of the backlog for weeks while still vague are a warning sign, as is an iteration that repeatedly stalls on "we didn't realise…". The fix is disciplined refinement and an honest Definition of Ready, not more up-front documents.

On **scaling**, resist over-engineering. Most teams do not need a heavy framework; they need a clear PO, a healthy backlog and tight feedback loops. Treat scaling frameworks as options to assess with Decision Analysis, not defaults to adopt.

**Common mistakes even senior BAs make:**
- **Mini-waterfall in disguise** — writing every story in full detail before the first iteration, which throws away the whole point of just-in-time analysis.
- **Horizontal story splits** — slicing by layer (database, then API, then screen) so no increment delivers demonstrable user value.
- **Owning priority that isn't yours** — a BA quietly re-ordering the backlog, which belongs to the product owner, and blurring accountability for value.

---

## Key takeaways

- The **Agile Perspective** is a lens over the knowledge areas, not a separate one; it reshapes how you do requirements life-cycle and analysis work.
- Use BABOK v3's **predictive / adaptive** wording, and expect real projects to be **hybrid**.
- The **product owner** owns priority and value; the **BA** supplies the analysis — sometimes they are the same person.
- **User story mapping** frames the backlog along the user journey; **backlog refinement** keeps it healthy continuously.
- Split stories **vertically** into INVEST-sized slices, each one shippable and demonstrable.
- Analyse **just in time, just enough** — agile means less waste, not less rigour — and gate quality with a Definition of Ready and a Definition of Done.

---

## BABOK map

- **Perspective:** Agile. It reshapes work in the **Requirements Life Cycle Management** and **Requirements Analysis and Design Definition** knowledge areas.
- **BABOK techniques used:** Backlog Management; User Stories; Acceptance and Evaluation Criteria; Estimation.
- **Industry techniques (clearly not BABOK-named):** user story mapping (Jeff Patton); Definition of Ready / Definition of Done; story splitting and INVEST; Scrum and Kanban roles and flow.
- Aligned to the BABOK body of knowledge and the IIBA's Agile Analysis Certification (AAC).
