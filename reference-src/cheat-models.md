# Cheat sheet — which diagram or model when

Pick the model that answers your question, not your favourite notation. Process models show how work
flows; behaviour models show how people and systems interact; data models show what the work creates
and uses. (See Modules 2 and 6.)

| Model | Shows | Use when |
|---|---|---|
| Flowchart [industry] | Steps (boxes), decisions (diamonds) and flow for a single process | Sketching one straightforward process or decision path quickly |
| BPMN [industry] | A precise, standard process model (BPMN — Business Process Model and Notation) with events, tasks, gateways and message flows between pools; an Object Management Group (OMG) notation used within Process Modelling [BABOK] | A process must be precise, shared with technical people, or feed automation |
| Swimlane / cross-functional map [industry] | A process split into lanes per role or system, so hand-offs appear as arrows crossing lanes | A process crosses people, teams or systems and the problem may be in a hand-off |
| SIPOC [industry] | Suppliers, Inputs, Process, Outputs and Customers on one page | Agreeing the scope and boundaries of a process in minutes, before detailed mapping |
| Value stream map [industry] | The end-to-end flow, separating value-adding time from wait time | Speed or delay is the complaint and you need to see where the time goes |
| Use Cases and Scenarios [BABOK] | How an actor uses the solution to reach a goal, via a main success scenario and extensions | You need the detailed interaction between a user and a system |
| User journey map [industry] | The customer's experience across a journey — actions, emotions and pain points | Improving experience end to end and finding the low point to fix |
| Data Flow Diagrams (DFD) [BABOK] | How data moves between external entities, processes and data stores | You want to spot where information is duplicated, re-entered or lost |
| Entity relationship diagram (ERD) | Entities, their attributes and the relationships, with cardinality, between them — from the Data Modelling [BABOK] technique | The solution stores and relates information and everyone must mean the same by "order" or "stock" |
| State diagram | The states a thing moves through and the allowed transitions — from the State Modelling [BABOK] technique | A key entity, such as an order, has a meaningful life cycle |
| Context diagram [industry] | The system in the middle and the external entities it exchanges with (a lightweight Scope Modelling [BABOK]) | Setting scope — agreeing what is inside the system and what is outside it |
| Decision table / DMN [industry] | Every combination of conditions and the outcome for each; puts Decision Modelling [BABOK] into practice, and DMN (Decision Model and Notation) is an OMG standard | A decision has several conditions and prose would hide a missing case |

## How to choose

A swimlane answers "who does what, and where are the hand-offs?"; a value stream, "where does the
time go?"; a DFD, "where does information duplicate?"; an ERD, "what do we store and how does it
relate?"; a context diagram, "what is in scope?". Keep each diagram at one level of detail, model the
as-is honestly before you design the to-be, and always follow a model with the "so what?" — a diagram
with no analysis changes nothing. At Homegrove one swimlane of the order-to-fulfilment process exposes
the twice-daily re-keying as the root cause.
