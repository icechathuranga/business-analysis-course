# Module 02 — Identifying & framing the problem

**One-line promise.** After this module you can take a vague complaint or a handed-down "just build X" and turn it into a sharp, evidenced **problem statement** — scoped, structured, and traced to a root cause — so the business fixes the real thing.

**Where this sits.** This is **Strategy Analysis** (the task **Analyze Current State**) in the *Business Analysis Body of Knowledge* (BABOK v3), feeding the framing that **Requirements Analysis and Design Definition (RADD)** later builds on.

**Why it matters.** Homegrove's Chief Operating Officer (COO) emailed, *"I think we need to rebuild the website,"* to stop late-delivery complaints. Scope a new site and Homegrove spends heavily while deliveries stay late — the website, as you will uncover, was never the problem. Framing the problem *before* solving it is the single most valuable thing a business analyst (BA) does — the module the whole course is built around.

## Symptom, problem, need, and root cause — and why "solutioneering" fails

Four words get muddled constantly, and keeping them apart is the heart of this module.

- A **symptom** is what people *notice* — "deliveries are late," "customers keep phoning."
- A **problem** is the business-level thing going wrong behind the symptoms — "we cannot reliably fulfil orders on time and in full."
- A **business need** is the outcome that must be true regardless of solution — "orders fulfilled on time, in full, with accurate stock."
- A **root cause** is the underlying reason the problem exists — found, not assumed.

**Solutioneering** — jumping to a solution before the problem is framed — is the trap in the COO's email: "rebuild the website" answers an unasked question. The BA's job is to slow the leap enough to ask *what is actually going wrong, and why?* The rest of this module is the toolkit for doing that.

## A brief recap: the root-cause toolkit [BABOK: Root Cause Analysis]

BABOK groups these under one technique, **Root Cause Analysis**; the module's real work is the BA-native framing that follows.

- **5 Whys** — ask "why?" down a causal chain until you reach something you can act on. *Why are deliveries late? → Orders reach the warehouse late. → Why? → There is no automatic order flow. → Why? → The website and warehouse systems are not connected.*
- **Fishbone (Ishikawa) diagram** — sort possible causes into categories (people, process, systems, information) so you look beyond the obvious.
- **Pareto principle (80/20)** — concentrate on the few causes behind most of the pain.

Use these to *test* causes, not as a cause-hunt. For a worked template, see `problem-root-cause.docx` in the course downloads.

## The problem (or opportunity) statement [industry]

**What it is.** A short, disciplined statement naming *who* is affected, *what* is going wrong, and the *impact* — with no solution inside it. A common four-slot form: *For [who], who [need], the [problem] is [impact].*

**When to use it.** Once you have evidence to name the problem, before anyone designs anything — it then anchors every later decision.

**How to do it.** Fill the slots from evidence, then audit: strike any word that names a solution (a website, a system, an integration). If it still reads as a problem, it is clean.

**Homegrove example.**
> **For** Homegrove's online customers, **who** expect their orders on time and in full, **the** problem is that orders are frequently late, occasionally wrong, and sometimes accepted for out-of-stock items, **which is** driving late-delivery complaints up ~60% year on year, repeat purchases down from 38% to 29%, and ~1,200 "where is my order?" contacts every week.

Not a word about websites. The same facts reframe as an **opportunity**: *reliable, visible delivery is a chance to win back lost retention.* Defining terms precisely — what counts as a "late delivery"? — is a small piece of **Concept Modelling [BABOK]**, which pins down key terms so everyone measures the same thing.

**Pitfall.** Smuggling the solution in through the back door ("the problem is we have no new website") — solutioneering in disguise.

## Context diagram [industry]

**What it is.** A map of the thing you are studying — here, the order-to-fulfilment process — as a box ringed by the external people and systems that exchange information with it. It is a lightweight form of **Scope Modelling [BABOK]**, drawing the boundary of what is in scope.

**When to use it.** Early, to agree *what is in and out of scope* and stop the problem sprawling.

**How to do it.** Put the process in the centre, list every external entity that exchanges something with it, and name the flows. Anything not touching the box is out of scope.

**Homegrove example.** The system under study, the **order-to-fulfilment process**:

| External entity | Sends to the process | Receives from the process |
|---|---|---|
| Customer | Places an order | Confirmation, delivery, status updates |
| Website / storefront | Order details | (none — one-way into the process) |
| Warehouse system | Stock levels | Orders to pick and pack |
| Courier partners | Delivery status | Dispatch instructions |
| Customer Service | Enquiries | Order information to answer them |

Drawing it already raises the key question: inside the box, what moves order details from the storefront to the warehouse system — and is anything doing it automatically?

**Pitfall.** Boundary creep. If "the finance system" and "the loyalty scheme" drift onto the page, the scope — and the project — balloons.

## Issue / logic trees (MECE, hypothesis-driven) [industry]

**What it is.** A tree that breaks a big question into smaller, non-overlapping parts you can tackle one by one. **MECE** means the branches are *Mutually Exclusive* (no overlap) and *Collectively Exhaustive* (nothing missing). Breaking a whole into parts this way is close to **Functional Decomposition [BABOK]**; a looser cousin for first exploration is **Mind Mapping [BABOK]**.

**When to use it.** When a problem feels too big to grip, or to work *hypothesis-driven* — lead with a likely answer and test it against evidence.

**How to do it.** Put the question at the top, break it into a few MECE branches, and break each until you reach something testable. Then gather data per branch and prune what the evidence kills.

**Homegrove example.** *Why are customers unhappy about deliveries?*
- Orders reach the warehouse late
  - Transferred only twice a day (batched)
  - Transfer is manual, adding delay
- Orders are fulfilled wrongly or not at all
  - Keying errors during transfer
  - Oversell — items sold that stock cannot supply
- Customers cannot see where their order is
  - No delivery status, so they phone to ask

Evidence points hard at the first two branches, both tracing to the manual hand-off.

**Pitfall.** Branches that overlap or leave gaps (not MECE), so your "systematic" analysis quietly misses a cause.

## Rich pictures & CATWOE (Soft Systems) [industry]

**What it is.** Tools from Peter Checkland's Soft Systems Methodology for *messy, human* situations. A **rich picture** is an informal, hand-drawn sketch of everyone, everything, and every frustration in a situation. **CATWOE** is a checklist — **C**ustomers, **A**ctors, **T**ransformation, **W**orldview, **O**wner, **E**nvironment — for examining it whole.

**When to use it.** When the problem is tangled with people, feelings, and politics — not a tidy technical fault.

**How to do it.** Sketch the rich picture first, freely, emotions and conflicts included, then structure it with CATWOE.

**Homegrove example.** The rich picture, in words: twice a day a warehouse clerk exports orders to a spreadsheet and re-keys them into the warehouse system; some lines get mistyped; stock figures lag reality, so the site sells sold-out items; frustrated customers phone Dana's swamped team; and the supervisor, Sam, quietly fears the manual job is all that protects his role. CATWOE:
- **C**ustomers — people awaiting orders.
- **A**ctors — the warehouse clerk/Sam, Customer Service/Dana, couriers.
- **T**ransformation — a placed order becomes a delivered order (and an informed customer).
- **W**orldview — reliable, transparent fulfilment keeps customers loyal and costs down.
- **O**wner — Head of Fulfilment (Marcus) / the COO (Priya).
- **E**nvironment — courier systems, the existing warehouse system, peak demand, budget.

**Pitfall.** Polishing the rich picture into a neat diagram. Its power is in the mess a clean flowchart would hide.

## Jobs-to-be-Done (JTBD) [industry]

**What it is.** Framing need around the *job a customer is "hiring" the business to do*, not around features. The form: *When [situation], I want to [motivation], so I can [outcome].*

**When to use it.** To check you are solving for the customer's real goal, not an assumed want — an antidote to solutioneering.

**How to do it.** State the situation, the functional job, and the emotional layer, then ask what "done" looks like.

**Homegrove example.** *When I order homeware online, I want it to arrive when promised and to know where it is, so I can plan my day and stop chasing it.* The functional job is on-time receipt; the emotional job is *not feeling anxious or ignored.* Note what the customer did **not** hire Homegrove for: a redesigned website.

**Pitfall.** Writing a JTBD that is really a feature in disguise ("I want a tracking page"). Stay at the goal, not the mechanism.

## Gap analysis (current state → future state) [industry]

**What it is.** A side-by-side of now and where you need to be, with the *gap* named per dimension. It connects BABOK's **Analyze Current State** to **Define Future State**.

**When to use it.** Once the problem is framed, to turn it into concrete targets stated as capabilities, not a chosen system.

**How to do it.** List the dimensions that matter and, for each, state current, desired future, and the gap — future column as *outcomes and capabilities*.

**Homegrove example.**

| Dimension | Current state | Future state (capability) | Gap to close |
|---|---|---|---|
| Order transfer | Manual re-key, twice daily | Continuous, automatic order flow | Remove the manual hand-off |
| Stock visibility | No real-time view; oversells | Accurate, real-time stock | Real-time stock accuracy |
| Delivery visibility | None; customers phone | Customer can self-serve status | Customer-facing status |
| Late-delivery rate | 12% | Under 4% | ~8 percentage points |

**Pitfall.** Writing the future state as a solution ("future state = a new platform"), closing off options you have not yet weighed (Module 09).

## Drivers → goals → objectives [industry]

**What it is.** A chain linking *why change now* (**drivers**) to *the direction* (**goals**) to *measurable targets* (**objectives**). Good objectives are **SMART** — Specific, Measurable, Achievable, Relevant, Time-bound.

**When to use it.** To make the case for change concrete and testable, giving Module 09's business case something to measure benefits against.

**How to do it.** Name the drivers, set one or two goals, then attach measurable objectives. For each, confirm a baseline and target; agree the *date* (the "T" in SMART) with the sponsor, not by guessing.

**Homegrove example.**
- **Drivers:** rising complaints, falling retention (a direct revenue risk), heavy customer-service cost, oversell exposure.
- **Goals:** reliable on-time, in-full fulfilment; restored retention; fewer avoidable contacts.
- **Objectives (baseline → target):** late-delivery rate 12% → under 4%; "where is my order?" contacts 1,200 → under 400 per week; repeat-purchase rate 29% → 33%; oversell incidents ~25 → under 2 per month. The target *date* for each is agreed with the COO, Priya Shah — not guessed.

**Pitfall.** "Objectives" with no number, or numbers with no baseline — without both, you cannot tell afterwards whether the change worked (the point of Module 11).

## The techniques in this module

- **Root Cause Analysis [BABOK]** — 5 Whys, Fishbone/Ishikawa, Pareto.
- **Problem / opportunity statement [industry]**; **Concept Modelling [BABOK]** for defining terms.
- **Context diagram [industry]** — a lightweight **Scope Modelling [BABOK]**.
- **Issue / logic trees (MECE, hypothesis-driven) [industry]**; **Functional Decomposition**, **Mind Mapping [BABOK]**.
- **Rich pictures & CATWOE [industry]** — Soft Systems (Checkland).
- **Jobs-to-be-Done (JTBD) [industry]**.
- **Gap analysis [industry]**; **drivers → goals → objectives** (SMART) **[industry]**.

## Try it

Take Homegrove's symptoms — late complaints, falling repeat purchase, ~1,200 weekly "where is my order?" contacts, occasional oversell — and write a one-paragraph **problem statement** (four-slot form) framed for Dana's customer-service team, who live the daily pain. Then audit it: strike any word that names a solution, and confirm what remains is a problem, not a wish for a system.

**Or do it for your own workplace.** Pick a "just build X" request you have heard. Write the problem statement it *should* have started from, then run an issue tree to test whether X would actually close the gap.

## Practitioner's corner (go deeper)

Problem framing is where senior BAs quietly earn their fee, and where the subtle mistakes live.

**Root cause is a decision, not a destination.** The 5 Whys can run forever; the skill is knowing where to *stop* — at the deepest cause the business can act on and afford, not the philosophically deepest. At Homegrove you could ask "why" past "the systems aren't connected," but the actionable cause is the broken, manual order-to-fulfilment hand-off. Stop there; note the rest as context.

**MECE is an aspiration, not a law.** Real problems resist clean, non-overlapping decomposition. Use MECE to *pressure-test* your tree — "do these branches overlap? is anything missing?" — not to force a tidiness that hides how causes interact. The rich picture exists to hold the mess a logic tree flattens; strong BAs run both and let them argue.

**Framing is political, so evidence is your armour.** Telling a COO their website rebuild misses the problem is delicate. Do it not by contradicting them but by showing the chain: symptom → evidenced problem → tested root cause → gap. When the statement names no solution and the data points to the hand-off, "rebuild the website" fails to survive its own issue tree — and you never had to say "you're wrong."

Common mistakes even senior BAs make:
- **Accepting the sponsor's framing** because they are senior, and analysing only within it — so the real problem never reaches the table.
- **Confusing a root cause with a favourite solution** ("the root cause is we have no new platform") — a solution is not a cause.
- **Framing the future state as a named system**, foreclosing the options analysis that belongs in Module 09.

This framing feeds forward: confirm the root cause by elicitation (Module 05), map the process as-is and to-be (Module 06), and weigh the options (Module 09).

## Key takeaways

- Keep **symptom, problem, need,** and **root cause** distinct — and resist **solutioneering** (the COO's "rebuild the website").
- A good **problem statement** names who, what, and impact, and contains **no solution**.
- Scope with a **context diagram**, structure with **MECE issue trees**, embrace the mess with **rich pictures / CATWOE**; **JTBD** keeps you on the customer's real goal.
- **Gap analysis** states the future as *capabilities*; **drivers → goals → objectives** turns the problem into **SMART** targets with baselines — agree the dates with the sponsor.
- Homegrove's real problem is a **broken, manual order-to-fulfilment hand-off**, not the website.

## BABOK map

- **Knowledge area:** Strategy Analysis (task **Analyze Current State**), framing work that feeds Requirements Analysis and Design Definition (RADD).
- **BABOK techniques:** Root Cause Analysis (covering 5 Whys, Fishbone/Ishikawa, Pareto); Functional Decomposition; Concept Modelling; Scope Modelling; Mind Mapping.
- **Industry techniques (clearly not BABOK-named):** problem/opportunity statement; context diagram; issue/logic trees (MECE, hypothesis-driven); rich pictures and CATWOE (Soft Systems, Peter Checkland); Jobs-to-be-Done; gap analysis; drivers → goals → objectives (with SMART objectives).
