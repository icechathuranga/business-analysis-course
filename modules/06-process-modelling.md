# Module 06 — Modelling the process & the data

**What you'll be able to do:** turn a tangled, invisible way of working into clear pictures — process maps, behaviour models, and a simple data model — that every stakeholder can read, challenge, and agree on, and that feed straight into the requirements you'll write next.

## Where this sits

This module lives in the **Requirements Analysis and Design Definition (RADD)** knowledge area of the **BABOK** (the Business Analysis Body of Knowledge), specifically the task **Specify and Model Requirements**. Modelling is how you make a need precise enough to build.

## Why it matters

At Homegrove, everyone "knew" the order process — but no two people described it the same way. Priya Shah (COO, chief operating officer) blamed the website; Marcus Doyle (Head of Fulfilment) blamed the warehouse; Dana Okoro's Customer Service team just knew the phones never stopped. Draw the order-to-fulfilment process on one page and the real culprit appears: orders do not flow from website to warehouse automatically — twice a day, Sam Reilly's team exports orders to a spreadsheet and re-keys them into the warehouse system. A model makes that hand-off, and its damage, impossible to ignore.

Models do three jobs: they **expose** what is really happening, give stakeholders **one shared picture** instead of words, and turn fuzzy needs into something you can **specify and test**. This module covers the three families — process, behaviour, and data.

*The first family: process models — how work flows.*

## Flowcharts [industry]

**What it is.** The simplest process picture, readable with no training: boxes for steps, diamonds for decisions, arrows for flow, ovals for start and end.

**When to use it.** Early, to sketch a single straightforward process or decision path quickly.

**How to do it.** Agree the start and end events, list the steps, draw each as a box and each choice as a diamond, connect with arrows, then walk it back with someone who does the work.

**Homegrove example.** *Order placed → Payment taken → Stock available? → if yes, Dispatch; if no, Refund or backorder.* It looks tidy — but the real delay (the batch re-keying) hides inside the single word "Dispatch".

**Pitfall.** A plain flowchart hides *who* does each step and *where* work waits. For hand-off problems like Homegrove's, you need lanes.

## Swimlane (cross-functional) maps [industry]

**What it is.** A process map split into "lanes", one per role or system, so every step sits in the lane of whoever performs it; hand-offs show up as arrows crossing lanes.

**When to use it.** Whenever a process crosses people, teams, or systems — Homegrove's included.

**How to do it.** Name the lanes (actors), place each step in the right lane, draw the flow, and mark where work waits. Every arrow crossing a lane is a hand-off worth questioning.

**Homegrove example (as-is).**

| Lane | Step |
|---|---|
| Customer | 1. Places order and pays on the website |
| Website / Storefront | 2. Records order; emails confirmation |
| Warehouse team (Sam) | 3. Twice a day, exports new orders to a spreadsheet · 4. Re-keys each order into the warehouse system |
| Warehouse system | 5. Shows the order for picking and packing |
| Courier | 6. Collects and delivers (no status sent back) |
| Customer Service (Dana) | 7. Takes "where is my order?" calls; checks manually |

The two hand-offs at Sam's lane — orders in, then re-keyed orders out — are where the delay, the keying errors, and the missing real-time stock all originate. One picture, the whole root cause.

**Pitfall.** Too many lanes or steps makes it unreadable. Keep lanes to the roles that matter and push detail into a sub-process.

## Process Modelling and Process Analysis [BABOK]

**What it is.** Two related BABOK techniques: **Process Modelling** produces the model of how work flows; **Process Analysis** then examines it for waste, delays, bottlenecks, and no-value steps.

**When to use it.** Model first to see the process; analyse to decide what to change.

**How to do it.** Walk each step of the as-is: does it add value? why does work wait here? where do errors enter? Mark the problem steps.

**Homegrove example.** Analysis of the as-is flags steps 3–4 (export and re-key) as non-value-adding delay and the source of keying errors, and the missing real-time stock link as the cause of overselling.

**Pitfall.** A beautiful as-is map with no analysis changes nothing — always follow the model with the "so what?".

## BPMN basics [industry / OMG standard]

**What it is.** **BPMN** — Business Process Model and Notation — is a richer, standardised process notation maintained by the **Object Management Group (OMG)**. Its core symbols are *events* (circles), *activities* (tasks), *gateways* (decisions and splits), *sequence flows* (solid arrows), and *message flows* (dashed, between pools); *pools* and *lanes* hold the participants.

**When to use it.** When a process must be precise and shared with technical people, or when it will feed automation.

**How to do it.** Draw a pool per participant; start with a start event, chain tasks with sequence flows, branch at gateways, finish at an end event; use message flows between pools.

**Homegrove example.** The to-be in BPMN: a *message* start event (order received from the storefront) triggers an automatic "Import order" task, a gateway checks real-time stock, and a message flow calls the courier — the batch re-key task disappears.

**Pitfall.** BPMN has dozens of symbols and beginners drown in them. Use the handful above and you will cover almost everything you meet.

## As-is versus to-be modelling [industry]

**What it is.** Two versions of the same process: **as-is** (how it works today) and **to-be** (how it should work after the change). The difference between them *is* your change — and your requirements backlog.

**When to use it.** Whenever you are improving an existing process, which is Homegrove exactly.

**How to do it.** Model the as-is from observation, mark the pain, design the to-be that removes it, then list the gap — each difference becomes something to build (gap analysis, introduced in Module 02).

**Homegrove example.** As-is: website → **twice-daily spreadsheet re-key** → warehouse → courier (no status). To-be: website → **automatic order import** into the new Order Management System (OMS) → real-time stock sync → warehouse → courier link → live delivery status. The gap is the OMS requirements.

**Pitfall.** Jumping to the to-be before the as-is is honest. Model the to-be first and you design around problems you never understood.

## Value stream mapping [industry]

**What it is.** A Lean technique that maps the end-to-end flow of delivering value and separates **value-adding time** (work the customer would pay for) from **wait time** — exposing how little of the lead time adds value.

**When to use it.** When speed or delay is the complaint — late deliveries, long lead times.

**How to do it.** Map the main steps end to end, note processing time and the wait before each, total value-adding against lead time, and attack the biggest waits first.

**Homegrove example (figures illustrative).** Picking and packing takes minutes of real work, yet an order placed just after a batch run waits for the next re-key before the warehouse even sees it. The wait dwarfs the work — so remove the wait, not speed up pickers.

**Pitfall.** Optimising a value-adding step (faster picking) when the real loss is wait time. Measure the wait before you tune the work.

## SIPOC [industry]

**What it is.** **SIPOC** — Suppliers, Inputs, Process, Outputs, Customers — a one-page scope-setting table that frames a process before you detail it.

**When to use it.** At the very start, to agree scope and boundaries with stakeholders in minutes.

**How to do it.** Fill five columns: who supplies inputs, what they are, the high-level process steps, the outputs, and who receives them.

**Homegrove example.**

| Suppliers | Inputs | Process | Outputs | Customers |
|---|---|---|---|---|
| Customer; website platform; goods suppliers | Order details; payment; stock | Receive → import → pick → pack → dispatch → deliver | Dispatched order; delivery; status update | End customer; Customer Service |

In five columns everyone agrees what "order-to-fulfilment" means before detailed mapping.

**Pitfall.** Treating SIPOC as the detailed map. It is a scoping frame — keep the Process column to a handful of steps.

*The second family: behaviour models — how people and systems interact.*

## Use Cases and Scenarios [BABOK]

**What it is.** A **use case** describes how an actor (a person or system) uses the solution to achieve a goal, via a **main success scenario** (the normal flow) and **extensions** (alternate and exception flows); the paths through it are scenarios.

**When to use it.** When you need the detailed interaction between a user and a system, for the functional requirements in Module 07.

**How to do it.** Name the actor and goal, state the preconditions, write the main success scenario as numbered steps, then add extensions for what can go differently.

**Homegrove example.** Use case *View delivery status* — Actor: Customer. Precondition: the order is dispatched. Main flow: (1) Customer opens "My Orders"; (2) system displays current courier status and estimated delivery date. Extension 2a: status unavailable → show "awaiting courier update". This becomes the customer's delivery-status user story.

**Pitfall.** Writing only the happy path. The extensions (no courier update, order split, payment failed) are where the real requirements hide.

## User journey maps [industry]

**What it is.** A picture of the customer's *experience* across the whole journey — the stages, what they do, and how they *feel* at each, including the low points.

**When to use it.** To understand and improve experience end to end — complementary to a use case, which focuses on system steps, not feelings.

**How to do it.** Pick the persona and journey, lay out the stages, capture actions, emotions, and pain points at each, then fix the biggest drop.

**Homegrove example.** The journey — *Browse → Order → Wait → (no visibility) → Anxiety → Phones Customer Service → Eventually receives.* The low is the blind "Wait" stage, which generates the roughly 1,200 "where is my order?" contacts a week. Live status targets that low point.

**Pitfall.** Mapping the journey you *wish* customers had, not the one they experience. Ground it in real evidence from elicitation (Module 05).

*The third family: data and information models — what the process creates and uses.*

## Data Flow Diagrams (DFD) [BABOK]

**What it is.** A **data flow diagram (DFD)** shows how data moves through a system: external entities, processes that transform data, data stores, and the flows between them. It answers "where does this information come from and go to?" — not the time order (that is a sequence diagram).

**When to use it.** To understand how information moves, and to spot where data is duplicated, re-entered, or lost.

**How to do it.** Draw the external entities, the processes that handle data, and the data stores, then connect with labelled flows.

**Homegrove example.** The as-is DFD shows order data flowing from the *Website* store, out to a *spreadsheet* store, then re-entered into the *Warehouse system* store — the duplicate store and manual re-entry are the signature of the re-keying problem. The to-be has one flow: website straight to OMS.

**Pitfall.** Mixing control flow ("if/then") into a DFD. A DFD shows data movement only; decisions belong on a process model.

## Data Modelling and the ERD [BABOK]

**What it is.** **Data Modelling** captures the *things* a business cares about (entities), their *attributes*, and the *relationships* between them, usually drawn as an **entity relationship diagram (ERD)**. Relationships carry cardinality — one-to-one, one-to-many, many-to-many.

**When to use it.** Whenever the solution stores and relates information — so everyone means the same thing by "order" and "stock".

**How to do it.** List the entities (business nouns), add key attributes, draw relationships and label their cardinality, then resolve any many-to-many with a linking entity.

**Homegrove example.** A simple order/stock model:

| Entity | Relates to | Cardinality |
|---|---|---|
| Customer | Order | one Customer places many Orders |
| Order | Order Line | one Order has many Order Lines |
| Product | Order Line | one Product appears on many Order Lines |
| Product | Stock | one Product has a Stock level per location |
| Order | Shipment | one Order has one Shipment |
| Shipment | Courier | many Shipments use one Courier |

That *Stock-per-location* relationship makes real-time stock — and the end of overselling — possible.

**Pitfall.** Modelling attributes before entities and relationships, or skipping cardinality. "One or many?" is where the real business rules surface.

## Data Dictionary [BABOK]

**What it is.** The companion to the data model: a precise, shared definition of each data element — its name, meaning, type, format, allowed values, and rules.

**When to use it.** Alongside any data model, to remove ambiguity before the build.

**How to do it.** For each attribute, record its name, description, type, format, allowed values, and rules.

**Homegrove example.**

| Element | Type | Allowed values / format | Rule |
|---|---|---|---|
| order_status | Text | Placed, Paid, Imported, Packed, Dispatched, Delivered, Cancelled | Moves forward only, except Cancelled |
| stock_level | Integer | 0 or greater | Cannot sell below available stock |

**Pitfall.** Letting the dictionary drift from the system. If a rule changes, update the dictionary — a stale one is worse than none.

## Concept Modelling [BABOK]

**What it is.** **Concept Modelling** captures the business vocabulary — the key noun concepts and how they relate — in business terms, deliberately *independent* of any system or database.

**When to use it.** Early, when stakeholders use the same word to mean different things (what is an "order" — the basket, the payment, or the dispatch?).

**How to do it.** List the core business concepts, define each in one plain sentence, and state the relationships in business language.

**Homegrove example.** Concepts: *Order* (a customer's confirmed request for goods), *Stock* (units of a product available to sell at a location), *Dispatch* (handing an order to a courier), *Oversell* (accepting an order for stock that is not actually available). Agreeing what "oversell" means lets everyone discuss the problem precisely.

**Pitfall.** Confusing a concept model with a data model. The concept model is business language; the data model is system structure. Keep them distinct.

## State Modelling and Sequence Diagrams (brief) [BABOK]

**What it is.** Two focused models. **State Modelling** shows the states a thing moves through and the transitions between them; **Sequence Diagrams** show the time-ordered messages between actors and systems for one interaction.

**When to use it.** State modelling when a key entity has a meaningful life cycle (an order); a sequence diagram when the *order of interactions* matters.

**How to do it.** For a state model, list the states and allowed transitions. For a sequence diagram, list the participants and the messages in time order.

**Homegrove example (order states).**

| From state | Event | To state |
|---|---|---|
| Placed | Payment taken | Paid |
| Paid | Imported to OMS | Imported |
| Imported | Picked & packed | Packed |
| Packed | Given to courier | Dispatched |
| Dispatched | Delivered | Delivered |

A matching sequence reads, in time order: Customer → Storefront (place order) → OMS (import) → Warehouse system (pick/pack) → Courier system (dispatch) → Customer (status notification).

**Pitfall.** Drawing a state model for something with no real life cycle, or a sequence diagram so detailed it duplicates the build. Use them where the life cycle or timing genuinely matters.

**Organizational Modelling** [BABOK] maps the roles, units, and reporting lines around a process; at Homegrove it clarifies that the broken hand-off sits between Marcus's fulfilment team and Lee Tan's IT — showing who owns which change.

## The techniques in this module

- **Flowcharts** [industry]
- **Swimlane / cross-functional maps** [industry]
- **Process Modelling** and **Process Analysis** [BABOK]
- **BPMN** basics [industry / OMG]
- **As-is vs to-be** [industry]
- **Value stream mapping** [industry]
- **SIPOC** [industry]
- **Use Cases and Scenarios** [BABOK]
- **User journey maps** [industry]
- **Data Flow Diagrams (DFD)** [BABOK]
- **Data Modelling / ERD** [BABOK]
- **Data Dictionary** [BABOK]
- **Concept Modelling** [BABOK]
- **State Modelling** and **Sequence Diagrams** [BABOK]
- **Organizational Modelling** [BABOK]

## Try it

**On Homegrove:** draw the as-is order-to-fulfilment process as a swimlane with six lanes (Customer, Website, Warehouse team, Warehouse system, Courier, Customer Service). Mark the two hand-offs at the warehouse team's lane (orders in, re-keyed orders out) and note what each costs. Then sketch the to-be with the re-keying removed, and list the order/stock entities and one relationship you would need for real-time stock.

**Or do it for your own workplace:** pick one process that crosses two or more teams. Map it as a swimlane, circle every hand-off, and note where work waits. You will almost always find your biggest delay living in a hand-off.

## Practitioner's corner (go deeper)

**Choose the model to fit the question, not your habit.** A swimlane answers "who does what, and where are the hand-offs?"; a value stream, "where does the time go?"; a DFD, "where does information duplicate?"; an ERD, "what do we store and how does it relate?"; a concept model, "do we even mean the same thing by these words?". Reaching for your favourite notation regardless of the question is the commonest senior-BA habit worth breaking; the cheat sheet "Which diagram/model when" exists for exactly this choice.

**Levelling and abstraction.** Real processes are fractal — a single swimlane step ("pick and pack") can hide its own sub-process. Decide your level deliberately (context-level for sponsors, detailed for builders) and keep each diagram at one level; mixing levels is how models become unreadable. This is the same discipline you will meet as Functional Decomposition in Module 07.

**Concept vs logical vs physical.** Keep three data layers straight: the *concept model* (business language, no system), the *logical data model* (entities and relationships, technology-neutral), and the *physical model* (actual tables and columns, the build's job). Collapsing them causes real confusion; a BA usually owns the first two and informs the third.

**How this is examined.** Aligned to the BABOK body of knowledge, all of these sit in RADD under *Specify and Model Requirements* — the task where a need becomes a model, in matrix, diagram, or text form. BPMN and DMN (Decision Model and Notation) are OMG notations used *within* BABOK's Process Modelling and Decision Modelling techniques, not BABOK techniques themselves — a boundary exam-style questions like to probe. (Decision Modelling and DMN are covered in Module 07.)

**Common mistakes even senior BAs make.**
1. **Modelling to document, not to decide.** A flawless as-is that no one uses earns nothing — always pair the model with Process Analysis.
2. **Skipping the as-is to look decisive.** Designing the to-be before understanding today means designing around problems you never diagnosed — the "rebuild the website" trap.
3. **Over-notating.** The full BPMN symbol set with a business audience who cannot read it; a clear swimlane beats a correct-but-unreadable diagram every time.

## Key takeaways

- Models make the invisible visible — at Homegrove, one swimlane exposes the twice-daily re-keying as the root cause.
- Pick the model that answers your question: process (swimlane, BPMN, value stream, SIPOC), behaviour (use cases, journey maps), or data (DFD, ERD, data dictionary, concept model).
- Model the as-is honestly before the to-be — the gap between them is your requirements — then *analyse*: a diagram with no "so what?" changes nothing.
- Keep concept, logical data, and physical models distinct, and each diagram at one level of detail.
- The data models you build here feed straight into the requirements you specify in Module 07.

## BABOK map

- **Knowledge area:** Requirements Analysis and Design Definition (RADD).
- **Task:** Specify and Model Requirements.
- **BABOK techniques used:** Process Modelling; Process Analysis; Use Cases and Scenarios; Data Flow Diagrams; Data Modelling; Data Dictionary; Concept Modelling; State Modelling; Sequence Diagrams; Organizational Modelling.
- **Industry techniques used:** BPMN notation (OMG standard); swimlane / cross-functional maps; SIPOC; value stream mapping; user journey maps; flowcharts; as-is/to-be and gap analysis.
- **Related modules:** problem framing and the context diagram (Module 02); elicitation that feeds these models (Module 05); writing requirements from them (Module 07).
