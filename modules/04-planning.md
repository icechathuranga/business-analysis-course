# Module 04 — Planning the BA work

**One-line promise:** after this module you can plan your own business analysis work — pick the right approach, agree how decisions get made, decide how you will handle the information you gather, estimate your effort, and measure whether you did a good job.

**Where this sits:** this whole module is one knowledge area (KA) of the **BABOK® Guide** (the Business Analysis Body of Knowledge): **Business Analysis Planning and Monitoring (BAPM)**. It is the KA where the business analyst (BA) plans *their own* work rather than the product. BAPM has five tasks, and you will meet all five here: **Plan Business Analysis Approach**, **Plan Stakeholder Engagement**, **Plan Business Analysis Governance**, **Plan Business Analysis Information Management**, and **Identify Business Analysis Performance Improvements**.

**Why it matters:** in Module 02 you framed Homegrove's real problem — a broken order-to-fulfilment process, where orders are re-keyed by hand twice a day — and in Module 03 you mapped the people. Now the COO (Chief Operating Officer), Priya Shah, expects a credible plan: how will you run the analysis, how long will it take, who signs off what, and how will you keep hundreds of facts and requirements straight across the warehouse, customer service, IT and finance? A BA who elicits brilliantly but cannot plan the work loses the room. Planning is what turns "trust me" into "here is how."

## Core content

Think of BAPM as answering five questions before you dive in: *how* will we work, *who* will we involve, *how* are decisions made, *how* will we handle the information, and *how* will we know we did well?

### Plan Business Analysis Approach — predictive vs adaptive

**What it is.** Deciding *how* you will do the analysis: how much you plan up front, how big each piece of work is, and how formal the deliverables are. The BABOK v3 contrast is between a **predictive** approach (plan-first, waterfall-style: define most requirements up front, in formal documents) and an **adaptive** approach (agile, iterative: discover and deliver in small increments, just in time). Most real engagements sit somewhere on the line between them.

**When to use it.** First, before any elicitation — and revisit it if the context changes.

**How to do it.**
1. Read the context: risk, regulation, team maturity, how fixed the scope is.
2. Choose where you sit on the predictive–adaptive line (a hybrid is normal).
3. Set the level of formality, the deliverables, and the cadence to match.

**Homegrove example.** The likely solution — an integrated Order Management System (OMS), justified later in Module 09 — would touch external couriers and move stock and order data between systems, so the *integration and data pieces* want a more **predictive**, carefully-specified approach; the *customer-facing delivery-tracking features* can be built **adaptively**, released and improved in increments. You plan a hybrid and say so out loud, so nobody expects a 200-page spec for a feature that is better learned by shipping.

**Pitfall.** Picking an approach by fashion ("we're agile now") rather than by context, and then forcing a high-risk integration through a process designed for fast, low-risk change.

### Plan Stakeholder Engagement

**What it is and where it lives.** This BAPM task is where you plan *who* to involve and *how*. You did the substance of it in **Module 03** — the register, the power/interest (Mendelow) grid and the RACI (Responsible, Accountable, Consulted, Informed) matrix. The thing to remember here is that the **planning** sits in BAPM, while the ongoing collaboration sits in the Elicitation and Collaboration KA.

**Homegrove example.** Your engagement plan says Priya gets a fortnightly steer, Sam Reilly (the warehouse supervisor who fears for his job) is involved early as the process expert, and Nadia Haddad in finance is pulled in before the business case, not after. (See Module 03 for how that plan was built.)

**Pitfall.** Treating engagement planning as a one-off box-tick instead of a plan you actually run and revise.

### Plan Business Analysis Governance

**What it is.** Governance is the agreed answer to "**how do decisions get made?**" — specifically, who prioritises requirements, who approves them, and how changes are assessed and authorised once things are agreed. The **Item Tracking** [BABOK] technique supports this: a single log of issues, risks, actions and decisions, each with an owner and a status.

**When to use it.** Settle governance early — the first time two stakeholders disagree is the wrong moment to discover nobody agreed who decides.

**How to do it.**
1. Define who approves requirements and who authorises changes to them.
2. Agree the change process: how a change is raised, assessed for impact, and signed off.
3. Stand up an item log so nothing falls through the cracks.

**Homegrove example.** You agree that Marcus Doyle (Head of Fulfilment, the process owner) approves the to-be process requirements, Nadia signs off the business case, and any scope change above a set threshold goes back to Priya. An item log tracks the open question "can the couriers' application programming interface (API) give real-time tracking?" with Lee Tan (IT) as owner. You will go deeper on approving and changing requirements in Module 08.

**Pitfall.** Leaving "who decides" vague to avoid an awkward conversation — which guarantees a worse conversation later, usually in front of the sponsor.

### Plan Business Analysis Information Management

**What it is.** The plan for *how you will handle the information you gather* — where requirements are captured, how detailed they are, how they are structured, traced, stored, accessed and **reused**. This is the home of what practitioners call the "requirements management approach."

**When to use it.** Set it up before elicitation floods you with notes, models and requirements.

**How to do it.**
1. Decide the tool and format (document, backlog, modelling tool).
2. Decide the level of detail and the naming/numbering so requirements are traceable.
3. Decide retention and reuse — which artefacts outlive the project.

**Homegrove example.** You decide requirements will be numbered and traced from Priya's business goals down to individual user stories, so that when someone asks "why are we building live delivery tracking?" you can trace it back to the ~1,200 weekly "where is my order?" contacts it is meant to cut. That traceability becomes the Requirements Traceability Matrix in Module 08.

**Pitfall.** Scattering requirements across emails, chats and three spreadsheets, so no one can answer "what did we agree, and why?"

### Estimation — and why BAs estimate

**What it is.** **Estimation** [BABOK] is forecasting how much effort, time or cost something will take. BAs estimate their *own* work (how long discovery will take) and help the team estimate the *solution*. A useful method is **three-point estimation**: for each activity, give an optimistic (O), most likely (M) and pessimistic (P) figure, then use a PERT-weighted average — PERT is the Programme Evaluation and Review Technique — of (O + 4M + P) ÷ 6, which stops a single hopeful guess from running the plan.

**When to use it.** Whenever someone needs a credible "how long?" — for your analysis work, and later for sizing requirements.

**How to do it.**
1. Break the work into activities small enough to reason about.
2. Estimate each three ways (O, M, P) and compute the weighted figure.
3. Add a contingency for uncertainty, and state your assumptions.

**Homegrove example (illustrative BA-effort hours, not case figures).** For the discovery phase you might estimate: stakeholder analysis ~12 hrs, elicitation (interviews, shadowing Sam, one workshop) ~40 hrs, as-is process modelling ~24 hrs, requirements documentation ~32 hrs, and review cycles ~16 hrs — roughly **124 hours** of BA effort before contingency. These numbers are for teaching only; you would ground your own in real activities.

**Pitfall.** Giving a single confident number with no range and no assumptions, so the first surprise makes you look wrong rather than uncertain — which you always are.

### Identify Business Analysis Performance Improvements

**What it is.** The task of checking whether your *analysis work* is any good and getting better. It leans on two techniques: **Metrics and Key Performance Indicators (KPIs)** [BABOK] to measure, and **Lessons Learned** [BABOK] to reflect and adjust.

**When to use it.** Throughout — a quick check at the end of each phase beats one post-mortem at the very end.

**How to do it.**
1. Pick a few BA-performance measures: requirement rework/churn, defects traced to missed requirements, stakeholder satisfaction, cycle time.
2. Review them at sensible points.
3. Run a short Lessons Learned session and actually change how you work next time.

**Homegrove example.** You track how often a "signed-off" requirement later has to be reworked. After the first elicitation round you notice rework is high on the returns workflow, run a quick Lessons Learned, and realise you never shadowed the returns desk — so you adjust the plan before it costs more.

**Pitfall.** Measuring only the *solution's* success and never your own practice, so the same analysis mistakes repeat on the next project.

## The techniques in this module

- **Estimation** [BABOK] — forecasting effort (and three-point / PERT estimating)
- **Item Tracking** [BABOK] — the log of issues, risks, actions and decisions
- **Lessons Learned** [BABOK] — structured reflection to improve practice
- **Metrics and Key Performance Indicators (KPIs)** [BABOK] — measuring BA performance
- **Predictive vs adaptive** approach choice (BABOK v3 terminology)

## Try it

**On Homegrove:** write a one-paragraph BA approach statement for the OMS work. Say where you sit on the predictive–adaptive line and why, name who approves requirements and who authorises changes, and give a three-point estimate (O, M, P) for one discovery activity — for example, "run and write up the interviews with Dana and Marcus."

**Or do it for your own workplace:** for a current piece of work, write down (1) your approach, (2) who the decision-maker on requirements actually is, and (3) one measure you could use to tell whether your analysis was good. If you cannot name the decision-maker, that is today's most valuable finding.

## Practitioner's corner (go deeper)

Planning is where juniors and seniors most visibly differ. A junior writes a plan to have a plan; a senior writes a plan to *manage expectations and de-risk the work* — and treats it as a living document reviewed against reality, not a document filed and forgotten.

**Terminology, so the wording doesn't catch you out.** BABOK v3 uses **predictive** and **adaptive**. The older v2 wording was **"plan-driven" and "change-driven"** — you will still hear it, and a legacy document may use it, but in current practice and in BABOK v3 language you should say predictive/adaptive. That is the one place the old terms belong: a footnote, not your spine.

**Know where each planning task actually lives, because the overlaps catch people out.** Planning stakeholder engagement is BAPM, but the day-to-day *Manage Stakeholder Collaboration* is Elicitation and Collaboration. Planning *governance* decides how requirements changes will be authorised, but the act of *Assess Requirements Changes* and *Approve Requirements* lives in Requirements Life Cycle Management (Module 08). Information *management planning* is BAPM; the actual tracing and maintaining of requirements is, again, Requirements Life Cycle Management. A useful discriminator is always: are you deciding *how* (planning), or are you *doing*?

**Estimation, deeper.** Beyond three-point/PERT, know **analogous** estimation (by comparison to a past piece of work), **parametric** estimation (a rate per unit — e.g. hours per interview written up), **bottom-up** (sum the pieces) and **relative** sizing (story points, planning poker) for adaptive work. The professional move is to attach an explicit **confidence level** and to **re-estimate** as uncertainty falls — the "cone of uncertainty" is widest at the start.

**Three mistakes even senior BAs make.** First, **planning the product and forgetting to plan the analysis** — detailed delivery milestones, no thought to how requirements information will be structured and reused, so the same facts get re-elicited. Second, **a governance plan with no teeth** — a named approver who is never actually asked to approve, so scope creeps silently. Third, **never measuring their own performance** — plenty of KPIs on the solution, none on requirement rework or stakeholder satisfaction, so the practice never improves. You will put the engagement into motion in Module 05, when you start eliciting.

## Key takeaways

- **BAPM** is where the BA plans their *own* work; its five tasks are Plan Business Analysis Approach, Plan Stakeholder Engagement, Plan Business Analysis Governance, Plan Business Analysis Information Management, and Identify Business Analysis Performance Improvements.
- Choose **predictive vs adaptive** (BABOK v3 wording) by context, not fashion — hybrids are normal, as with Homegrove's OMS.
- **Governance** answers "who decides and approves changes"; settle it before the first disagreement.
- **Information management** planning keeps every requirement traceable back to a business goal.
- **Estimate** with ranges and assumptions (three-point / PERT), and **measure your own practice** with KPIs and Lessons Learned.

## BABOK map

- **Knowledge area:** Business Analysis Planning and Monitoring — all five tasks: Plan Business Analysis Approach; Plan Stakeholder Engagement; Plan Business Analysis Governance; Plan Business Analysis Information Management; Identify Business Analysis Performance Improvements.
- **BABOK techniques used:** Estimation; Item Tracking; Lessons Learned; Metrics and Key Performance Indicators (KPIs).
- **Terminology:** predictive / adaptive (BABOK v3 wording for the approach choice).
