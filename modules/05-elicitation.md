# Module 05 — Elicitation: getting the real needs out

**One-line promise:** after this module you can choose the right way to draw out what people actually need — through interviews, workshops, observation and more — run the session well, and confirm what you heard, so your requirements rest on evidence rather than guesswork.

**Where this sits:** this module is the heart of one **BABOK® Guide** (Business Analysis Body of Knowledge) knowledge area (KA): **Elicitation and Collaboration (E&C)**. Three of its tasks give elicitation its rhythm: **Prepare for Elicitation**, **Conduct Elicitation**, and **Confirm Elicitation Results**. The KA's other two tasks — Communicate Business Analysis Information (Module 10) and Manage Stakeholder Collaboration (Module 03) — surround the work but are not elicitation itself.

**Why it matters:** "elicit" is a deliberate word. You do not *collect* requirements like leaves — people rarely hand you a clean, correct need. You **draw it out**, because stakeholders describe symptoms, jump to solutions, forget the exceptions and contradict each other. At Homegrove — a UK online homeware retailer with about £42M revenue and 300 staff — the COO (Chief Operating Officer) already "knows" the answer is to rebuild the website. The warehouse supervisor, Sam Reilly, does the twice-daily manual re-keying but has never been asked to explain it. Customer service, led by Dana Okoro, absorbs roughly 1,200 "where is my order?" contacts every week and knows exactly where it hurts. Elicitation is how you, the business analyst (BA), get the truth out of all of them, in their own context.

## Core content

### The rhythm: prepare, conduct, confirm

Every elicitation activity follows the same three beats. **Prepare** — decide your goal, pick the technique, line up the right people, and ready your materials. **Conduct** — run the session and capture what you learn. **Confirm** — play back what you heard so the stakeholder can correct it *before* it becomes a requirement. Skipping prepare wastes a senior stakeholder's hour; skipping confirm lets a misunderstanding harden into a build.

Two skills run through all three beats. **Active listening** means giving full attention, reflecting back ("so the spreadsheet export happens at 11 and 4 — what if an order lands at 4:05?"), noticing what is *not* said, and resisting the urge to fill silence. And an **interview guide** — a prepared, ordered set of open questions with room to follow threads — keeps a session on track without making it an interrogation. Both are captured in the reusable **elicitation-plan.docx** template, which pairs a plan with an interview guide.

### Choosing the right technique

**What it is.** Matching the method to the question. There is no "best" technique — only the best fit for *what you need, from whom, and under what constraints*.

**When to use what.** Use **interviews** for depth from one or two people; **workshops** to build shared agreement fast; **observation** when the work differs from how people describe it; **document analysis** to learn the current state cheaply; **surveys** to reach many people; **focus groups** for grouped opinion; **brainstorming** for options; **interface analysis** for the touchpoints between systems; and **prototyping** to make vague ideas concrete.

**How to do it.** Weigh reach (how many people), depth (how rich), cost/time, and the sensitivity of the topic — then usually combine two or three for triangulation.

**Homegrove example.** You pair **observation** (shadow Sam) with **interviews** (Dana, Marcus) and **document analysis** (the contact logs), then bring it together in a **workshop**. One technique would have given you a partial, possibly misleading picture.

**Pitfall.** Reaching for the comfortable technique (another meeting) regardless of the question. The course cheat sheet *"Which elicitation technique when"* exists to break that habit.

### Interviews

**What it is.** A structured conversation — one-to-one or small group — to draw out a person's knowledge, needs and concerns. The BABOK technique is **Interviews** [BABOK].

**When to use it.** For depth, nuance, or sensitive topics; when one person holds a lot of the knowledge or the politics.

**How to do it.**
1. Prepare an **interview guide**: a goal, a short warm-up, then open questions ("walk me through a bad day") before closed ones.
2. Confirm logistics and send the topic ahead so the person can think.
3. In the session, listen actively, follow threads, and park solutions.
4. Within a day, write it up and send a summary back to confirm.

**Homegrove example.** You interview Dana Okoro. The guide moves from "tell me about a typical Monday on the contact lines" to "when a customer asks where their order is, what can you actually see?" You learn her agents have *no* live view of dispatch — the finding that will justify customer-facing delivery tracking.

**Pitfall.** Asking leading questions ("so the website's the problem, right?") that feed the interviewee your assumption and get it echoed back as a "finding."

### Workshops

**What it is.** A facilitated session that brings several stakeholders together to produce something — a shared process map, a prioritised list, a set of requirements — in the room, together. The BABOK technique is **Workshops** [BABOK]; a well-known structured format for requirements workshops is **Joint Application Design (JAD)** [industry].

**When to use it.** When you need cross-functional agreement quickly, or to resolve conflicting views by having people hear each other.

**How to do it.**
1. Set a clear objective and agenda; invite the right mix (and not too many).
2. Use a neutral **facilitator** and, ideally, a separate **scribe**.
3. Set ground rules, work through structured activities, and capture decisions and open items visibly.
4. Close by agreeing next steps and owners.

**Homegrove example.** You run a **to-be workshop** with Marcus (process owner), Dana, Sam and Lee Tan (IT) to design the future order-to-fulfilment flow — no more re-keying, with stock and status visible. Having Sam and Lee in the same room surfaces, in ten minutes, an integration constraint that emails had hidden for weeks.

**Pitfall.** No facilitation plan — the loudest voice wins, quieter experts (often the most knowledgeable) go silent, and you leave with opinions instead of decisions.

### Observation (job-shadowing)

**What it is.** Watching the work as it really happens. **Observation** [BABOK] can be passive (watch only) or active (ask as you go). Job-shadowing is the common form.

**When to use it.** When the real process differs from the documented or described one — especially for manual, habitual or workaround-heavy tasks.

**How to do it.**
1. Agree what you will watch and reassure the person you are studying the *process*, not judging them.
2. Observe a real cycle end to end; note timings, exceptions and workarounds.
3. Ask clarifying questions at natural breaks; write up immediately.

**Homegrove example.** You **shadow Sam** through a full re-keying cycle. You already knew (from Module 02) that orders are exported to a spreadsheet and typed into the warehouse system twice a day; watching it *confirms and details* the hand-off — you time it, see the typos creep in, and catch the exact moment an order that arrives after the batch simply waits. That detail is gold for the to-be design.

**Pitfall.** The "observer effect": people work differently, and often more carefully, when watched. Observe long enough that normal habits reassert themselves, and corroborate with the contact logs.

### Document Analysis

**What it is.** Mining existing material — process docs, system reports, logs, policies, old requirements — for current-state facts and rules. The BABOK technique is **Document Analysis** [BABOK].

**When to use it.** Early and often; it is cheap, it respects people's time, and it arms you with specifics before you ever book a meeting.

**How to do it.** Gather the relevant documents, extract facts, rules and figures, note gaps and contradictions, and take a list of questions into your interviews.

**Homegrove example.** You analyse the customer-service contact logs and the oversell incident reports (around 25 a month). The logs let you quantify the ~1,200 weekly "where is my order?" contacts rather than relying on "loads," which turns a vague complaint into evidence.

**Pitfall.** Trusting documents as current. Procedures drift; the real process (seen via observation) often differs from the written one.

### Survey or Questionnaire

**What it is.** A set of written questions sent to many people to gather data at scale. The BABOK technique is **Survey or Questionnaire** [BABOK].

**When to use it.** When you need breadth — input from a population too large to interview, like customers or all customer-service agents.

**How to do it.**
1. Define exactly what decision the data will inform.
2. Write clear, unbiased questions; mix closed (for counting) and a few open (for colour).
3. Pilot it on a handful of people, then distribute and analyse.

**Homegrove example.** You survey recent customers about their delivery experience — how often they felt uninformed, whether they phoned, how it affected their likelihood to reorder — to size the retention impact behind the fall in repeat purchases.

**Pitfall.** Leading or double-barrelled questions ("How slow and unhelpful was delivery?") that bias the result, and sending a survey when you actually needed the depth of an interview.

### Focus Groups

**What it is.** A facilitated discussion with a small, representative group to explore attitudes and reactions. The BABOK technique is **Focus Groups** [BABOK].

**When to use it.** To understand *why* people feel as they do, and to let views build on each other — useful before or after a survey.

**How to do it.** Recruit 6–10 representative participants, use a neutral facilitator and a discussion guide, encourage debate, and capture themes rather than tallies.

**Homegrove example.** You run a focus group of frequent customers to probe what "good" delivery communication would look like — do they want email, text, a live map? — shaping the delivery-tracking requirements before anything is built.

**Pitfall.** Letting one dominant participant set the tone, or treating a handful of voices as statistically representative — focus groups explain, they do not measure.

### Brainstorming

**What it is.** Generating many ideas quickly, without early judgement, then organising them. The BABOK technique is **Brainstorming** [BABOK].

**When to use it.** When you need options — causes, solution ideas, risks — and want range before you narrow.

**How to do it.** State the question, diverge (quantity over quality, no criticism), then converge (group, de-duplicate, prioritise).

**Homegrove example.** In the to-be workshop you brainstorm every way to kill the re-keying delay — real-time integration, scheduled auto-import, a shared stock feed — then cluster and prioritise, feeding the options work that comes later in the course.

**Pitfall.** Letting judgement sneak into the diverge phase ("that'll never work"), which shuts down exactly the half-formed idea that leads somewhere.

### Interface Analysis

**What it is.** Identifying and examining the **interfaces** — the points where people, systems or organisations exchange information. The BABOK technique is **Interface Analysis** [BABOK].

**When to use it.** Whenever a solution must connect things: systems, teams, or external parties.

**How to do it.** List every interface, and for each capture what crosses it, in which direction, how often, and in what format; flag the gaps.

**Homegrove example.** You map the interfaces between the storefront, the warehouse system and the courier partners' application programming interface (API). The analysis makes the core problem undeniable: between storefront and warehouse there is **no automated interface at all** — just Sam and a spreadsheet. Naming the missing interface is half the solution.

**Pitfall.** Only mapping system-to-system interfaces and ignoring the human and external ones (the courier hand-off, the finance reconciliation), where the real friction often hides.

### Prototyping (as elicitation)

**What it is.** Building something tangible — a sketch, wireframe or clickable mock-up — to draw out requirements by letting people react to it. The BABOK technique is **Prototyping** [BABOK]. Used this way, the prototype's job is not to be built; it is to provoke better feedback.

**When to use it.** When stakeholders struggle to describe what they want but know it when they see it, or to de-risk a key screen.

**How to do it.** Mock the idea at the lowest useful fidelity, put it in front of real users, watch and ask, then refine. Keep it obviously rough so people critique freely.

**Homegrove example.** You sketch a "My Orders" screen showing live courier status and an estimated delivery date, and show it to a few customers and to Dana's agents. Their reactions ("I'd want a text when it's out for delivery") sharpen the delivery-tracking requirement far faster than words could.

**Pitfall.** Polishing the prototype so much that people treat it as finished and hold back honest criticism — or start debating button colours instead of needs.

### Two more in the kit

BABOK also lists **Collaborative Games** [BABOK] (structured, playful activities — like "product box" or affinity mapping — that loosen up a workshop and surface hidden assumptions) and **Mind Mapping** [BABOK] (branching diagrams that organise ideas radially — handy for planning an interview or clustering workshop output). Keep both in your kit for the right moment.

### Confirming elicitation results

Whatever technique you used, **confirm** before you build on it: send the interview write-up back, circulate the workshop decisions, play back the observed process to Sam. This is the **Confirm Elicitation Results** task, and it is where cheap corrections happen. A stakeholder correcting a summary email costs minutes; the same error found in testing costs a fortune.

## The techniques in this module

- **Interviews** [BABOK] — depth from one or a few people (with the interview guide)
- **Workshops** [BABOK] — group agreement in the room (JAD is an industry format)
- **Observation** [BABOK] — job-shadowing the real work
- **Document Analysis** [BABOK] — current-state facts from existing material
- **Survey or Questionnaire** [BABOK] — breadth across a population
- **Focus Groups** [BABOK] — grouped attitudes and reactions
- **Brainstorming** [BABOK] — generating options
- **Interface Analysis** [BABOK] — the touchpoints between systems/teams/parties
- **Prototyping** [BABOK] — eliciting by reaction to something tangible
- **Collaborative Games** and **Mind Mapping** [BABOK] — supporting techniques

## Try it

**On Homegrove:** plan the elicitation for the future order-to-fulfilment process. Choose three techniques and justify each in one line (who, what you need, why that method). Then write five open questions for your interview with Marcus Doyle — making sure none of them leads him towards a pre-decided answer.

**Or do it for your own workplace:** pick a process you need to understand. Decide whether you would learn more by *watching* it or by *asking* about it, and do whichever you have been avoiding. Write a three-line summary afterwards and send it to the person to confirm — that last step is the habit most beginners skip. The **elicitation-plan.docx** template gives you a plan and an interview guide to start from.

## Practitioner's corner (go deeper)

Elicitation is where experience shows most, because the hard part is not the technique — it is reading people and context in real time.

**Triangulate, always.** No single source is trustworthy on its own: stakeholders misremember, documents go stale, and observed behaviour changes under scrutiny. Seniors deliberately cross-check — what Dana *says* on the lines, against what the contact logs *record*, against what you *see* when you shadow the desk. Where the three disagree, you have found either a risk or a requirement. Convergence across methods is your real confidence signal.

**Match technique to constraints, not just to the question.** A geographically spread workforce pushes you from workshops toward surveys and remote interviews. A politically charged topic rules out a group setting where people will not speak freely — go one-to-one. A regulated or safety-critical process makes observation essential, because the gap between documented and actual procedure is exactly where the risk lives. And culture matters: in some settings people will not contradict a senior manager in a room, so a workshop quietly manufactures false consensus.

**Elicitation is never neutral.** The act of asking changes the system — raises expectations, surfaces tensions, signals that change is coming. Experienced BAs manage that: they set expectations about what happens to the input, and they never let a stakeholder feel that speaking up made things worse. This is also where elicitation touches *Manage Stakeholder Collaboration* (Module 03) and *Communicate Business Analysis Information* (Module 10) — eliciting well is as much relationship as technique.

**Balance how you gather, not just what.** It helps to think of elicitation in three broad modes: *talking to people* (interviews, workshops, focus groups), *studying existing material* (document analysis, reports, logs), and *testing something tangible* (prototypes, surveys, games). A plan that leans entirely on one mode — usually all talk and no evidence — has a blind spot. The discipline is to make sure you have at least studied the material and, where you can, observed or tested, rather than only asked.

**Three mistakes even senior BAs make.** First, **leading the witness** — asking questions shaped by a hypothesis and mistaking the echo for confirmation. Second, **eliciting and never confirming** — treating notes as agreed truth and discovering the misunderstanding in user acceptance testing, where it is costly. Third, **over-eliciting** — running the eighth interview when the answers stopped changing at the fifth, burning stakeholder goodwill and your own time. Know when you have *enough*, confirm it, and move on to modelling it in Module 06.

## Key takeaways

- **Elicitation** is drawing needs out, not collecting them — people give you symptoms and solutions, not clean requirements.
- Every activity runs **prepare → conduct → confirm**, matching the E&C tasks Prepare for, Conduct, and Confirm Elicitation Results.
- There is no best technique — **choose by what you need, from whom, and under what constraints**, and combine methods to triangulate.
- **Observation** confirmed and detailed Homegrove's manual re-keying; **interface analysis** named the missing storefront-to-warehouse link; **interviews** and a **to-be workshop** built the shared picture.
- **Active listening** and an **interview guide** carry every session, and **confirming** results is the cheap step that prevents expensive mistakes.

## BABOK map

- **Knowledge area:** Elicitation and Collaboration — tasks: Prepare for Elicitation; Conduct Elicitation; Confirm Elicitation Results. (Communicate Business Analysis Information is Module 10; Manage Stakeholder Collaboration is Module 03.)
- **BABOK techniques used:** Interviews; Workshops; Survey or Questionnaire; Observation; Document Analysis; Focus Groups; Brainstorming; Interface Analysis; Prototyping; Collaborative Games; Mind Mapping.
- **Industry terms noted:** Joint Application Design (JAD) as a structured workshop format; job-shadowing as a form of observation.
