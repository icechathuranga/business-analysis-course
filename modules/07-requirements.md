# Module 07 — Specifying & writing requirements

**What you'll be able to do:** classify any requirement correctly, write it so it is unambiguous and testable — as a structured statement, a user story with Gherkin acceptance criteria, a business rule, or a decision table — capture the non-functional ones people forget, and know the difference between checking a requirement is *well written* and checking it is the *right* requirement.

## Where this sits

This module sits in **Requirements Analysis and Design Definition (RADD)** in the **BABOK** (Business Analysis Body of Knowledge), across three tasks: **Specify and Model Requirements** (writing them well), **Verify Requirements** (are they well written?), and **Validate Requirements** (are they the right ones?).

## Why it matters

At Homegrove you have now framed the problem (Module 02), heard the real needs (Module 05), and modelled the process and data (Module 06). None of that gets built until it is written down in a way a developer can act on and a tester can check. Write "make deliveries better" and you will get *something*, but not what Homegrove needs. Write "the customer can see live courier status and estimated delivery date in My Orders, and is emailed within 15 minutes of any status change" and you have something buildable, testable, and tied to the goal of cutting those 1,200 weekly "where is my order?" contacts. Good requirements are the bridge between understanding and delivery.

## Requirement types [BABOK]

**What it is.** BABOK classifies requirements into four types, and keeping them straight prevents a lot of confusion:

- **Business requirements** — the high-level needs and outcomes of the organisation (the *why*).
- **Stakeholder requirements** — what a particular stakeholder or group needs (the bridge).
- **Solution requirements** — what the solution must do, split into **functional** (behaviour and features) and **non-functional** (qualities such as speed and security).
- **Transition requirements** — temporary capabilities needed only to get from the current to the future state (migration, training), which fall away afterwards.

**When to use it.** On every project — label each requirement by type so business goals, user needs, and build detail do not get muddled.

**How to do it.** Start from the business requirement, trace down to stakeholder needs, then to solution requirements, and separately identify what is needed only during the change itself.

**Homegrove example.**
- *Business:* cut the late-delivery rate from 12% to under 4%, and weekly "where is my order?" contacts from 1,200 to under 400.
- *Stakeholder:* Dana's team needs live order status on one screen; Sam's team needs orders to arrive without re-keying.
- *Solution (functional):* the system imports website orders automatically. *Solution (non-functional):* the stock sync completes within 60 seconds (figure illustrative).
- *Transition:* migrate open orders into the new Order Management System (OMS) and train warehouse staff — needed once, then gone.

**Pitfall.** Writing solution detail when you mean a business need (the chief operating officer's "rebuild the website" is a solution masquerading as a requirement). Keep the *why* and the *what* in their own layers.

## Characteristics of a good requirement, and INVEST [industry]

**What it is.** Whatever the format, a good requirement shares qualities: it is clear and unambiguous, concise, complete, consistent with the others, correct, feasible, and — above all — **testable**. For requirements written as **user stories**, the handy checklist is **INVEST**: **I**ndependent, **N**egotiable, **V**aluable, **E**stimable, **S**mall, **T**estable.

**When to use it.** As a quality gate every time you write or review a requirement or story.

**How to do it.** Read each requirement against the checklist. If you cannot write a test for it, it is not testable — rewrite it. If a story depends on three others, it is not independent — split it.

**Homegrove example.** "Delivery tracking should be fast" fails: not testable, not clear. Rewritten: "the customer is emailed within 15 minutes of any delivery-status change" — testable, clear, valuable, small. That passes INVEST.

**Pitfall.** Vague qualifiers — "fast", "user-friendly", "robust". They feel like requirements but cannot be tested. Replace every one with a number or a concrete, checkable condition.

## BRD, FRD and SRS documents [industry]

**What it is.** Three common requirement documents at different levels. A **Business Requirements Document (BRD)** captures the business and stakeholder requirements — the *why* and *what* at a high level. A **Functional Requirements Document (FRD)** details what the solution must *do*. A **Software/System Requirements Specification (SRS)** is the fuller technical specification, usually combining functional and non-functional requirements. Predictive (plan-first) projects lean on these documents; adaptive (agile) projects often replace them with a managed backlog of user stories (Module 12).

**When to use it.** A BRD when the organisation wants requirements agreed and signed before build; lighter documents or a backlog when you are working iteratively.

**How to do it.** Start the BRD with the business need and scope, list the stakeholder requirements, then the functional and non-functional solution requirements, with assumptions and constraints. Use the course's **BRD template** rather than a blank page.

**Homegrove example.** Homegrove's BRD opens with the order-to-fulfilment problem and the target metrics, lists the stakeholder needs from Dana, Marcus, and Sam, then the OMS functional requirements (automatic import, real-time stock, delivery status) and the NFRs (non-functional requirements).

**Pitfall.** A 90-page BRD no one reads. Match the document's weight to the project; detail that is never used is waste.

## User Stories and acceptance criteria (Gherkin) [BABOK / industry]

**What it is.** A **user story** [BABOK] is a short, user-centred statement of a need — *As a [role], I want [capability], so that [benefit]* — deliberately brief, a placeholder for a conversation. **Acceptance criteria** state when it is done; the **Gherkin** format [industry] writes them as *Given [context], When [event], Then [outcome]*.

**When to use it.** In adaptive/agile delivery, as the main unit of requirement; acceptance criteria wherever you need an unambiguous "done".

**How to do it.** (1) Write the story in the role / want / benefit form. (2) Check it against INVEST. (3) Add acceptance criteria in Given/When/Then covering the main path and the important variations. (4) Record it in the **User story backlog** template.

**Homegrove example.** The headline story:

> *As a* customer, *I want* to see live delivery status for my order, *so that* I stop having to phone to ask where it is.

With acceptance criteria in Gherkin:

> **Given** a dispatched order, **when** the customer opens "My Orders", **then** the current courier status and estimated delivery date are shown; **and when** status changes, the customer is notified by email within 15 minutes.

That single testable "within 15 minutes" is what makes the story buildable and checkable — and it ties straight to cutting the 1,200 weekly contacts.

**Pitfall.** Treating the story card as the whole requirement and skipping the conversation and the criteria. The story is the promise of a conversation; the acceptance criteria are where it becomes real.

## Functional Decomposition [BABOK]

**What it is.** **Functional Decomposition** breaks a large requirement, capability, or epic into smaller, manageable parts in a hierarchy, so each piece can be specified, estimated, and built.

**When to use it.** When a requirement is too big to be clear or testable (an INVEST "epic"), or to check you have covered a capability completely.

**How to do it.** Take the big item, break it into its component functions, and keep going until each leaf is small and testable.

**Homegrove example.** "Order management" decomposes into import orders, sync stock, manage dispatch, show delivery status, and handle returns — and "show delivery status" decomposes further into the customer view, the email notification, and the courier feed.

**Pitfall.** Decomposing forever. Stop when each piece is small enough to specify and estimate — not at the last conceivable atom.

## Business Rules Analysis [BABOK]

**What it is.** **Business Rules Analysis** captures the policies and constraints that govern decisions and behaviour, stated independently of any system so they can be maintained as the business changes. A rule is something like "we never accept an order for stock we do not have".

**When to use it.** Whenever behaviour depends on policy — pricing, eligibility, approvals, stock. Separating rules from process means you can change the rule without redrawing the process.

**How to do it.** (1) Find the rules hiding inside process steps and stakeholder statements. (2) Write each as an atomic, testable statement. (3) Record its source and owner. (4) Keep them in one list, not buried in prose.

**Homegrove example.** Rules behind the OMS: "An order may only be accepted if real-time available stock is greater than or equal to the quantity ordered" (this rule, enforced, ends overselling); "Stock is reserved the moment an order is accepted"; "A refund is issued automatically if an accepted order cannot be fulfilled within the promised window."

**Pitfall.** Hard-wiring rules into process steps or code. When the rule changes — and it will — you want to edit one rule, not hunt through a dozen diagrams.

## Decision tables and DMN [industry / OMG standard]

**What it is.** Laying out multi-condition logic as a table is BABOK's **Decision Modelling** [BABOK] technique in practice. A **decision table** sets every combination of conditions out as rows so nothing is missed; **DMN** — Decision Model and Notation, a standard from the **Object Management Group (OMG)** — is the formal way to model such decisions, with decision tables at its core.

**When to use it.** For any decision with multiple conditions — exactly where prose requirements turn ambiguous and miss cases.

**How to do it.** (1) List the conditions. (2) List the possible outcomes. (3) Make a row for each meaningful combination. (4) Check that every combination is covered and none conflict.

**Homegrove example — accept or reject an order.** This decision enforces a *Must* on Homegrove's MoSCoW list (Must / Should / Could / Won't, which you will prioritise in Module 08): real-time stock, so no overselling.

| Available stock ≥ quantity? | Payment authorised? | Outcome |
|---|---|---|
| Yes | Yes | Accept order, reserve stock |
| Yes | No | Hold — await payment |
| No | Yes | Reject line — offer backorder (prevents oversell) |
| No | No | Reject order |

Laid out this way, the "No stock / Yes payment" row — the overselling case — cannot be forgotten.

**Pitfall.** Writing multi-condition logic as nested prose ("if… unless… except when…"). It always hides a missing case; a table does not let you skip one.

## Non-functional requirements (NFRs) [BABOK]

**What it is.** **Non-Functional Requirements Analysis** captures the *qualities* of the solution rather than its features — how well it must perform, not what it does. Qualities people commonly specify include performance and speed, availability and reliability, security, usability, scalability, and compliance. They are the requirements most often forgotten and most expensive to add late.

**When to use it.** On every solution — ask the NFR questions deliberately, because stakeholders rarely volunteer them.

**How to do it.** (1) Walk each quality and ask "how well?". (2) Make each one measurable. (3) Attach it to the relevant functional requirement or to the system as a whole.

**Homegrove example (figures illustrative).** For the OMS: the stock sync must complete within 60 seconds so the site never sells stale stock (performance); the storefront-to-OMS link must be available for 99.9% of trading hours (availability); customer and payment data must be protected in line with data-protection obligations (security). Each carries a measurable target rather than an adjective — the exact numbers are agreed with Lee Tan in IT.

**Pitfall.** Leaving NFRs vague or unstated. "Must be secure" and "must be fast" are not requirements until they carry a measurable target.

## Wireframes and prototypes to confirm [BABOK]

**What it is.** **Prototyping** — wireframes (low-fidelity sketches of a screen) and interactive prototypes — makes a requirement visible so stakeholders can react to something concrete rather than imagine it from words.

**When to use it.** To confirm and refine requirements for anything with a user interface, and to resolve disagreements words cannot. (Prototyping also works as an *elicitation* technique to draw out needs — that angle is covered in Module 05; here the purpose is to confirm what you have specified.)

**How to do it.** (1) Sketch the screen that delivers the requirement. (2) Walk stakeholders through it. (3) Capture the corrections as updated requirements. (4) Increase fidelity only as needed.

**Homegrove example.** A wireframe of the "My Orders" screen — showing where live status and the estimated delivery date appear — put in front of Dana and a few customers surfaces that they also want the courier's name and a "notify me" toggle, refining the story before anyone builds it.

**Pitfall.** Polishing a prototype so much it looks finished; stakeholders then debate colours instead of behaviour, or assume it is already built. Keep confirmation wireframes deliberately rough.

## Verifying versus validating requirements [BABOK]

**What it is.** Two different quality checks, both in RADD. **Verify Requirements** asks "are these requirements *well written*?" — clear, complete, consistent, testable, correctly formatted (building the thing *right*). **Validate Requirements** asks "are these the *right* requirements?" — do they deliver the business value and align with the goals (building the *right* thing).

**When to use it.** Verify continuously as you write; validate against the business case and the goals before committing to build.

**How to do it.** To verify, review each requirement against the quality checklist (a peer review or walkthrough). To validate, trace each requirement up to a business objective — anything that does not support one is a candidate to drop.

**Homegrove example.** *Verifying* the delivery-status story confirms its Gherkin criteria are unambiguous and testable. *Validating* it confirms it genuinely serves the business goal of cutting those 1,200 weekly contacts — which it does, so it stays in scope.

**Pitfall.** Doing one and calling it both. A perfectly written requirement (verified) can still be the wrong thing to build (not validated), and vice versa.

*Keep these two distinct from two neighbours in the body of knowledge.* **Confirm Elicitation Results** (checking you captured what stakeholders actually said — Elicitation & Collaboration, Module 05) happens earlier, and formal **Approve Requirements** (sign-off — Requirements Life Cycle Management, Module 10) happens later. Verify and validate sit in between.

## The techniques in this module

- **Requirement types** [BABOK] — business / stakeholder / solution (functional + non-functional) / transition
- **Good-requirement characteristics** and **INVEST** [industry] — the quality checklist
- **BRD / FRD / SRS** [industry] — requirement documents at different levels
- **User Stories** [BABOK] and **acceptance criteria / Gherkin** [industry] — user-centred requirements and their "done"
- **Functional Decomposition** [BABOK] — breaking big requirements into parts
- **Business Rules Analysis** [BABOK] — policies and constraints, kept separate
- **Decision Modelling** with decision tables and **DMN** [industry / OMG standard] — multi-condition logic
- **Non-Functional Requirements Analysis** [BABOK] — the qualities (NFRs)
- **Prototyping** / wireframes [BABOK] — confirm requirements visually
- **Acceptance and Evaluation Criteria** [BABOK] — the basis for "done" and for testing
- **Verify** and **Validate Requirements** [BABOK tasks] — well written vs the right thing

## Try it

**On Homegrove:** take the Must-have requirement "automatic order import (no re-keying)". Write it three ways: as a one-line business requirement, as a user story with role / want / benefit, and with two Gherkin acceptance criteria (one happy path, one for a failed import). Then write one business rule and one NFR that go with it.

**Or do it for your own workplace:** pick a feature someone has asked for. Classify it (business / stakeholder / solution / transition), write it as a user story, add acceptance criteria, and find the one vague word you need to replace with a number.

## Practitioner's corner (go deeper)

**Requirements, designs, and the blurry line.** A requirement is a need; a design is a solution to it — and the two interleave, one person's design being the next person's requirement. "Automatic order import" is a requirement to Priya and a design choice relative to the deeper business need "orders must reach the warehouse without manual delay". Seniority shows in holding the need stable while design options move beneath it.

**Specification formats are a choice.** The same requirement can be a structured natural-language statement, a user story, a use case, a model, or a decision table. Aligned to the BABOK body of knowledge, you choose the format for the audience and the content — multi-condition logic belongs in a decision table, a user-facing capability in a story, a policy in a business rule. Forcing everything into one format (all user stories, always) is a common limitation.

**NFRs and acceptance criteria are where projects quietly fail.** Functional gaps get caught in demos; a missing performance or security NFR surfaces only in production. Treat NFRs as first-class and make every one measurable. Likewise, acceptance criteria are not paperwork — they are the contract for "done" and the seed of the test cases (the BABOK technique **Acceptance and Evaluation Criteria**), which you will lean on again at user acceptance testing (UAT) in Module 11.

**How this is examined.** Aligned to the BABOK body of knowledge, this material sits in RADD. Know the four requirement types and the functional/non-functional split cold; know that *verify* (well written) and *validate* (right thing) are distinct tasks, separate again from *Confirm Elicitation Results* and *Approve Requirements*; and know that BPMN (Business Process Model and Notation) and DMN are OMG notations used within BABOK's techniques, not BABOK techniques themselves.

**Common mistakes even senior BAs make.**
1. **Confusing verify with validate.** Polishing requirements to perfection (verified) without ever checking they serve the business goal (validated) — you can build the wrong thing flawlessly.
2. **Letting the user-story format excuse thin analysis.** A tidy *As a… I want…* with no acceptance criteria, no business rules, and no NFRs is not analysis — it is a title. The rigour lives in the criteria and the rules, not the one-liner.
3. **Burying business rules in process or code.** Embedding "accept only if stock is available" inside a flowchart or a method means every rule change becomes an archaeology project. Keep rules in one maintained list.

## Key takeaways

- Classify every requirement — business, stakeholder, solution (functional + non-functional), transition — so the *why*, the *what*, and the build detail never blur.
- A requirement earns its place only if it is clear and testable; replace every vague qualifier with a number or a checkable condition, and check stories against INVEST.
- Pick the format for the content: user stories with Gherkin for capabilities, business rules for policy, decision tables / DMN for multi-condition logic, NFRs for qualities.
- Do not forget the non-functional requirements — they are the ones that sink projects when added late.
- Verify (are they well written?) and validate (are they the right ones?) are two different checks — do both, and keep them distinct from elicitation sign-off and formal approval.
- Data modelling that backs these requirements lives in Module 06; you will prioritise this requirement set in Module 08 and trace it with a traceability matrix there.

## BABOK map

- **Knowledge area:** Requirements Analysis and Design Definition (RADD).
- **Tasks:** Specify and Model Requirements; Verify Requirements; Validate Requirements.
- **BABOK techniques used:** User Stories; Acceptance and Evaluation Criteria; Business Rules Analysis; Decision Modelling; Non-Functional Requirements Analysis; Functional Decomposition; Prototyping.
- **Industry techniques / aids used:** good-requirement characteristics; INVEST; BRD/FRD/SRS documents; Gherkin (Given/When/Then); DMN decision tables (OMG standard). (The four-way requirement classification itself is BABOK's, covered under this KA.)
- **Related modules:** data modelling (Module 06); prioritising and tracing this requirement set with MoSCoW and the traceability matrix (Module 08); validating against acceptance criteria at UAT (Module 11); user stories in agile delivery (Module 12).
