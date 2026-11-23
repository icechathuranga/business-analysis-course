# Module 03 — Stakeholders: find, analyse, engage

**One-line promise:** after this module you can find every stakeholder on a piece of work, judge how much each one matters and why, and plan how you will engage each of them — including the ones who would rather you went away.

**Where this sits:** in the **BABOK® Guide** (the Business Analysis Body of Knowledge, the profession's standard reference), stakeholder work is split across two knowledge areas (KAs). **Planning** your engagement — who to involve, how, and how often — is the task **Plan Stakeholder Engagement**, and it lives in **Business Analysis Planning and Monitoring (BAPM)**. The **ongoing, day-to-day** work of keeping those people engaged once the project is running is **Manage Stakeholder Collaboration**, and that lives in **Elicitation and Collaboration (E&C)**. Same people, two moments: plan first, then collaborate throughout.

**Why it matters:** at Homegrove — a mid-sized UK online homeware retailer (about £42M revenue, 300 staff, roughly 180,000 orders a year) — the COO (Chief Operating Officer) has asked to "rebuild the website." In Module 02 you traced the real problem to a broken order-to-fulfilment process, not the storefront. But being right is not enough. The fix touches the warehouse, customer service, IT, finance and marketing, and one of the people closest to the problem — the warehouse supervisor who does the manual re-keying — quietly fears the change will cost him his job. Get the stakeholders wrong and your correct analysis dies in a meeting. Stakeholder work is how a business analyst (BA) makes good analysis actually land.

## Core content

A **stakeholder** is anyone affected by the change, who can affect it, or who has information you need. You do three things with them, in order: **identify** them, **analyse** them, then plan to **engage** them.

### Stakeholder List, Map, or Personas — building the register

**What it is.** The BABOK technique **Stakeholder List, Map, or Personas** [BABOK] is simply the disciplined act of listing everyone involved and recording what you know about each. The written artefact is usually called a **stakeholder register**. A popular companion diagram, the **onion diagram** [industry], draws the solution at the centre with rings radiating out — the people who operate it, then the wider organisation, then external parties — so you spot groups you would otherwise forget.

**When to use it.** Right at the start, and then kept alive: you revisit it every time the scope shifts or a new name surfaces.

**How to do it.**
1. Brainstorm names and roles — ask "who does the work, who pays, who decides, who is affected, who supplies or consumes?"
2. Use the onion rings to prompt for missing groups: operators, managers, sponsors, customers, suppliers, regulators.
3. For each, capture role, interest in the change, and what you need from them.

**Homegrove example.** Your register names **Priya Shah** (COO and project **Sponsor**), **Marcus Doyle** (Head of Fulfilment and process owner), **Dana Okoro** (Customer Service Lead), **Sam Reilly** (Warehouse Supervisor), **Lee Tan** (IT Manager), **Nadia Haddad** (Finance Business Partner), **Tom Vance** (Head of Marketing and customer experience, CX), the external **courier partners**, and **customers** themselves. The onion diagram's outer ring is what reminds you the couriers exist at all.

**Pitfall.** Listing job titles but not the real humans, and forgetting the quiet, low-power people — like Sam's team — who actually hold the knowledge you need.

### Power/interest grid — analysing who matters and why

**What it is.** The **power/interest grid** (the **Mendelow** grid) [industry] plots each stakeholder on two axes: how much **power** they have over the change, and how much **interest** they have in it. The four zones suggest four strategies: **manage closely** (high power, high interest), **keep satisfied** (high power, low interest), **keep informed** (low power, high interest) and **monitor** (low power, low interest).

**When to use it.** Just after the register, to decide where to spend your limited time.

**How to do it.** Rate each stakeholder's power and interest, place them, read off the strategy — then sanity-check it against what you actually know about the person.

**Homegrove example.**

| Stakeholder | Interest | Power | Engagement strategy |
|---|---|---|---|
| Priya Shah (COO, Sponsor) | High | High | Manage closely |
| Marcus Doyle (Head of Fulfilment) | High | High | Manage closely |
| Dana Okoro (Customer Service Lead) | High | Medium | Keep satisfied / informed |
| Sam Reilly (Warehouse Supervisor) | High | Low | Keep informed; involve early |
| Lee Tan (IT Manager) | Medium | High | Keep satisfied |
| Nadia Haddad (Finance Business Partner) | Medium | High | Keep satisfied |
| Tom Vance (Head of Marketing/CX) | Medium | Medium | Keep informed |
| Courier partners (external) | Low | Medium | Monitor |
| Customers | High | Low | Voice via Dana + data |

Notice Sam sits in "low power" but you deliberately **involve him early** — the grid is a prompt, not a verdict.

**Pitfall.** Treating the grid as fixed. Power and interest move: the moment the business case needs a signature, Nadia's interest jumps. Re-plot as the work progresses.

### Roles and Permissions Matrix (RACI) — analysing who does what

**What it is.** **RACI** [industry] is the best-known form of the BABOK technique **Roles and Permissions Matrix** [BABOK]. For each activity you name exactly who is **R**esponsible (does the work), **A**ccountable (owns the outcome — only ever **one** person per activity), **C**onsulted (gives input), and **I**nformed (told the result).

**When to use it.** Whenever "who actually decides this?" is unclear — which, on a cross-team change, is most of the time.

**How to do it.** List the activities down the side, stakeholders across the top, fill each cell with R, A, C or I, then check every row has **one and only one A**.

**Homegrove example.**

| Activity | BA (you) | Priya (Sponsor) | Marcus (Process owner) | Nadia (Finance) | Lee (IT) | Sam / Dana |
|---|---|---|---|---|---|---|
| Agree problem statement & scope | R | A | C | I | I | C |
| Elicit fulfilment requirements | R | I | A | I | C | C |
| Produce and sign off the business case | R | C | C | A | C | I |
| Define integration & security | C | I | I | I | A/R | I |

Nadia is **Accountable** for the business case because she signs it off (you produce it, so you are Responsible); Marcus owns the fulfilment requirements; Lee both owns and does the integration and security work (A and R). You are **Responsible** for producing the analysis on most rows, but not for the integration, where Lee leads and you are Consulted.

**Pitfall.** Two people marked Accountable for one row. That is not shared ownership — it is a decision with no owner, and it will stall.

### Personas — making a group of stakeholders real

**What it is.** A **persona** (the "Personas" part of **Stakeholder List, Map, or Personas** [BABOK]) is a short, named sketch that stands in for a *group* of users or stakeholders you cannot interview one by one — their goals, their context, their frustrations.

**When to use it.** When a stakeholder is really a population — "customers", "warehouse pickers" — and you need the team to design for a real human rather than an abstraction.

**How to do it.** Give the persona a name and role, a one-line goal, a typical day, and the specific pain this change should remove.

**Homegrove example.** "**Rushed Rita**, 34, orders homeware on her phone between meetings; her goal is to know where her parcel is without phoning; today she rings Dana's team because the site shows nothing after dispatch." Rita speaks for the ~1,200 "where is my order?" contacts customer service fields every week.

**Pitfall.** Inventing personas from imagination. Ground them in real elicitation (Module 05) and data, or they just encode your assumptions.

### Engagement and managing resistance

**What it is.** Having analysed people, you plan *how* to work with each — the channel, the frequency, the message — and you plan for **resistance**, which is normal, not misconduct.

**When to use it.** Continuously. Planning the approach is **Plan Stakeholder Engagement** (BAPM); doing it as the work runs is **Manage Stakeholder Collaboration** (E&C).

**How to do it.** For each stakeholder set the right touch (Priya: a crisp fortnightly steer; Lee: technical working sessions); match the channel to their preference; and for resisters, understand the fear before trying to change the mind.

**Homegrove example.** Sam Reilly does the twice-daily re-keying and fears the new system means he is not needed. The case shows the manual hand-off ties up roughly **3 full-time equivalents (FTE)**, partly to be redeployed — so you do not promise "no change" (you cannot), but you involve Sam early as the expert on the current process, are honest that roles will shift, and let him shape the to-be. Resistance handled with respect often becomes your strongest advocate.

**Pitfall.** Going silent with a resister because the conversation is uncomfortable. Silence confirms their worst fear and hardens the opposition.

## The techniques in this module

- **Stakeholder List, Map, or Personas** [BABOK] — the register and personas
- **Roles and Permissions Matrix** [BABOK] — expressed here as **RACI**
- **Onion diagram** [industry] — finding stakeholders by rings
- **Power/interest (Mendelow) grid** [industry] — analysing influence vs. interest

## Try it

**On Homegrove:** take the nine stakeholders above and build a RACI for one new activity — "plan and run user acceptance testing of the new process." Decide who is Accountable (only one), who is Responsible, who you would Consult and who you would merely Inform. Then write one sentence on how you would bring Sam into that activity without triggering his fear.

**Or do it for your own workplace:** pick a change under way where you work. List ten stakeholders, plot them on a power/interest grid, and name the one person you have been under-engaging. Write down your next move with them. The reusable **stakeholder-raci.xlsx** template gives you the register, grid and RACI in one place.

## Practitioner's corner (go deeper)

Senior BAs treat the stakeholder register as a living, slightly political document — and they are careful who sees which version of it. A grid annotated "low interest, manage out" is dynamite if it leaks; keep candid influence notes in your own working copy, and share a neutral engagement plan.

**Separate the two BABOK homes cleanly, because exams and audits do.** *Plan Stakeholder Engagement* is a **planning** task in **BAPM** — its output is an approach: the list, the analysis, the collaboration plan, and decisions about how much authority each stakeholder has over requirements. *Manage Stakeholder Collaboration* is an **ongoing** task in **E&C** — it is the relationship work that runs for the life of the engagement. A useful discriminator is tense — are you *deciding how* to engage (planning, BAPM) or *doing* the engaging (collaboration, E&C)?

**Go beyond the 2×2.** Mendelow's grid is a starting lens, not the finish. Mature practice adds *attitude* (supporter / neutral / blocker) as a third dimension, and tracks **salience** (Mitchell, Agle and Wood's power–legitimacy–urgency model) to explain why a low-power stakeholder like Sam can still stop you cold when urgency spikes. Stakeholders also influence each other: map the informal network, not just individuals. Priya will often take her read on feasibility from Lee, so winning Lee quietly wins Priya.

**On RACI, know its cousins and its failure modes.** RASCI adds **S**upport; RACI-VS adds **V**erify and **S**ign-off; DACI (Driver, Approver, Contributor, Informed) is common in product teams. Whichever you use, the discipline is identical: one accountable owner per activity, and no row that is all C's and I's with nobody Responsible.

**Three mistakes even senior BAs make.** First, **confusing the sponsor with the decision-maker for requirements** — Priya sponsors, but Marcus owns the process and Nadia owns the money; blur them and sign-off collapses. Second, **analysing stakeholders once and never again** — people, power and attitude all move, especially after a reorganisation. Third, **engaging only the friendly stakeholders** because they are pleasant to talk to, and discovering the blocker's objection in the steering committee instead of in a quiet one-to-one a fortnight earlier. You will plan the *how* of talking to all of them in Module 04, and do the actual eliciting in Module 05.

## Key takeaways

- A stakeholder is anyone affected by, able to affect, or holding knowledge about the change — identify them with a register and an onion diagram.
- **Plan Stakeholder Engagement** is planning (BAPM); **Manage Stakeholder Collaboration** is the ongoing work (E&C). Same people, two moments.
- The **power/interest (Mendelow) grid** tells you where to spend time; re-plot it as power and interest shift.
- **RACI** is a form of the BABOK **Roles and Permissions Matrix** — one Accountable owner per activity, always.
- Resistance (Sam) is information, not misconduct: involve early, be honest, and turn the fear into contribution.

## BABOK map

- **Knowledge areas:** Business Analysis Planning and Monitoring (task: **Plan Stakeholder Engagement**); Elicitation and Collaboration (task: **Manage Stakeholder Collaboration**).
- **BABOK techniques used:** **Stakeholder List, Map, or Personas**; **Roles and Permissions Matrix**.
- **Industry techniques used:** onion diagram; power/interest (Mendelow) grid; RACI (a form of Roles and Permissions Matrix).
