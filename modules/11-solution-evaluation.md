# Module 11 — Supporting delivery & evaluating the solution

**One-line promise:** after this module you can support a solution through build, test and go-live, define the measures that prove it worked, and run an honest evaluation that tells the business whether it got the value it paid for — and what to do if it didn't.

**Where this sits:** this is the **Solution Evaluation** knowledge area of the **BABOK Guide** (the Business Analysis Body of Knowledge, maintained by the International Institute of Business Analysis, or IIBA) — the whole knowledge area, covering its five tasks: **Measure Solution Performance**, **Analyze Performance Measures**, **Assess Solution Limitations**, **Assess Enterprise Limitations** and **Recommend Actions to Increase Solution Value**.

**Why it matters:** Homegrove has now built the integrated Order Management System (OMS) you scoped in Module 09, and everyone is relieved it went live. But "live" is not the same as "working": the real test is whether late deliveries actually fell, whether the "where is my order?" contacts dried up, and whether the £260,000 net annual benefit promised in the business case is showing up. Your job as the business analyst (BA) is to measure that honestly, tell the business the truth, and recommend what to do next. This is where a project earns the right to be called a success — or where you catch, early, that it hasn't.

---

## Core content

The Solution Evaluation knowledge area has five tasks. Around them sit the practical routines every delivery uses — user acceptance testing, benefits realisation and the post-implementation review — so we start with delivery support, then walk the five tasks in order, then close the loop.

### Supporting delivery: build, test and UAT

**What it is.** The BA's work during build and test: clarifying requirements as the team reaches them, protecting their intent, keeping the **requirements traceability matrix (RTM)** from Module 08 current, and running **user acceptance testing (UAT)** — where real users confirm the built solution does what they need. UAT is an *industry* practice built on the **Acceptance and Evaluation Criteria** technique *[BABOK]*: the acceptance criteria you wrote with each requirement become the UAT test conditions.

**When to use it.** From the first build increment through to go-live sign-off.

**How to do it.**
1. Keep the RTM live so every built feature still ties to a business need.
2. Turn each requirement's acceptance criteria into UAT test conditions.
3. Triage defects with **Item Tracking** *[BABOK]* — log them, classify by severity, decide fix-now versus fix-later.

**Homegrove example.** For the live-delivery-status story, UAT checks the two agreed conditions — a dispatched order shows its courier status and estimated delivery date in "My Orders", and a status change notifies the customer by email within 15 minutes. You record those checks against requirement row `OMS-003` in **traceability-matrix.xlsx**.

**Pitfall.** Confusing UAT with the **Validate Requirements** task from Module 07. That earlier task asked "are these the right requirements?" *before* build; UAT asks "does the built thing meet those agreed criteria?" *after* build. And never let UAT become a rubber-stamp — it exists to *find* problems while they are cheap to fix.

### Measure Solution Performance

**What it is.** Defining *what good looks like* in numbers and capturing where you actually are, using the **Metrics and Key Performance Indicators (KPIs)** technique *[BABOK]*. Each measure needs a baseline, a target, a data source and a cadence.

**When to use it.** Define the measures back in Strategy Analysis and the business case; capture the baseline *before* go-live.

**How to do it.**
1. Pick measures that reflect the business value you promised.
2. Record a baseline, a target, a source and a review cadence for each.
3. Separate leading indicators (move within weeks) from lagging ones (move over months).

**Homegrove example.** The measures come straight from the business case:

| Metric | Baseline | Target |
|---|---|---|
| Late-delivery rate | 12% | < 4% |
| "Where is my order?" contacts / week | 1,200 | < 400 |
| Repeat-purchase rate | 29% | 33% |
| Oversell incidents / month | ~25 | < 2 |

Late-delivery rate and contacts are leading indicators; repeat-purchase rate is lagging and takes months to confirm.

**Pitfall.** Measuring what is easy to pull from a report (logins, tickets closed) rather than what signals value. If a number wouldn't change a decision, it is not a KPI.

### Analyze Performance Measures

**What it is.** Turning raw numbers into understanding: comparing actuals to targets, reading the trend, and segmenting to find where value is — or isn't — landing.

**When to use it.** At each review point after go-live, once enough data has built up to see past the noise.

**How to do it.**
1. Compare each actual to its target and plot the trend.
2. Segment the gap — by product, courier lane, time of day or customer type.
3. State what the pattern suggests before proposing any fix.

**Homegrove example.** Suppose eight weeks after go-live the late-delivery rate is down to 7% — real progress, but short of the under-4% target. Analysis asks *why*: is it one courier lane, one product category, or a particular time of day? Segmenting the remaining "where is my order?" contacts often reveals most now come from a single returns-related reason rather than from missing orders.

**Pitfall.** Reacting to a single week. Watch the trend and natural variation before declaring a win or a failure.

### Assess Solution Limitations

**What it is.** Asking whether a shortfall is caused by something *inside the solution boundary* — a defect, a usability snag, a configuration gap, a missing rule.

**When to use it.** Whenever a measure misses target; this is the first of two "why" questions, paired with the next task.

**How to do it.**
1. Reproduce the shortfall and locate it in the solution.
2. Decide whether it is a defect, a design gap or a configuration issue.
3. Size the change needed inside the solution.

**Homegrove example.** You might find the courier status feed refreshes less often than expected, so "live" status lags reality; or an edge case where two orders claim the last item within the same second still oversells. These are fixed *in the OMS*.

**Pitfall.** Labelling every shortfall a "solution limitation" and firing change requests at the build team, when the real blocker sits outside the system.

### Assess Enterprise Limitations

**What it is.** The opposite question: is something *outside the solution* stopping the value — people, process, policy, skills or structure? The solution can only deliver if the enterprise around it changes too.

**When to use it.** Alongside Assess Solution Limitations, every time a measure misses target.

**How to do it.**
1. Trace the shortfall out into the surrounding process and people.
2. Check adoption, training, incentives and policy.
3. Name the enterprise change required.

**Homegrove example.** The OMS can be flawless and the targets still miss because warehouse staff weren't fully trained and keep a private "just in case" spreadsheet, or because Sam Reilly's team — worried about job security (Module 03) — hasn't adopted the new flow, or because the returns workflow (a *Should*) was deferred and still drives calls.

**Pitfall.** Treating adoption as automatic. People change last, and slowest — and no software fix will move a number that people are quietly working around.

### Recommend Actions to Increase Solution Value

**What it is.** Turning findings into a decision. Options usually include doing nothing (if value is tracking), adjusting the solution, adjusting the enterprise (training, process, incentives), or — rarely — replacing or retiring.

**When to use it.** After analysis has separated solution limitations from enterprise limitations.

**How to do it.**
1. List the realistic options.
2. Weigh them with **Decision Analysis** *[BABOK]* and surface what could go wrong with **Risk Analysis and Management** *[BABOK]*.
3. Make one clear recommendation, with its reasoning and its risks.

**Homegrove example.** After an eight-week late-delivery rate stuck at 7%, the honest recommendation might be *both*: a small solution fix to the courier feed *and* an enterprise action to retrain the warehouse and retire the shadow spreadsheet.

**Pitfall.** Recommending only the comfortable option — usually a solution tweak — because "retrain the warehouse" is a harder conversation than "log a defect". The recommendation must follow the evidence, not the path of least resistance.

### Benefits realisation and the post-implementation review

**What it is.** **Benefits realisation** *(industry)* tracks whether the promised benefits actually arrive, long after the project team moves on; a **post-implementation review (PIR)** *(industry)* is a structured look back that draws on the **Lessons Learned** technique *[BABOK]*.

**When to use it.** Benefits realisation runs for months after go-live; the PIR happens once the solution has bedded in.

**How to do it.**
1. Name a benefits owner and agree a realisation plan with review dates.
2. Keep measuring against the baseline well past go-live.
3. Run a PIR, capture lessons, and feed them back into Business Analysis Planning and Monitoring (Module 04).

**Homegrove example.** The benefits owner is the sponsor Priya Shah, with the process owner Marcus Doyle; the £260,000 net annual benefit lands over a year, not on go-live day, so you keep measuring the four metrics for at least a full cycle before declaring the case proven.

**Pitfall.** Declaring victory on go-live day — before benefits have had time to realise, and before the enterprise has actually adopted the change.

---

## The techniques in this module

- **Metrics and Key Performance Indicators (KPIs)** *[BABOK]* — defining and tracking performance measures.
- **Acceptance and Evaluation Criteria** *[BABOK]* — the basis for UAT test conditions.
- **Decision Analysis** *[BABOK]* — choosing between corrective options.
- **Risk Analysis and Management** *[BABOK]* — surfacing what could undermine value.
- **Item Tracking** *[BABOK]* — defect and issue triage.
- **Lessons Learned** *[BABOK]* — the post-implementation review.
- **UAT, benefits realisation, post-implementation review** *(industry)* — the practical routines wrapped around the BABOK tasks.

---

## Try it

**On Homegrove:** Homegrove is eight weeks post-go-live. The late-delivery rate has dropped from 12% to 7% and weekly "where is my order?" contacts from 1,200 to 520 — both improving, both short of target. In half a page: (1) write one sentence of **Analyze Performance Measures** proposing *where* you'd segment to find the gap; (2) name one plausible **solution limitation** and one plausible **enterprise limitation**; and (3) make one **Recommend Actions** recommendation with its main risk. Keep every number consistent with the table above.

**Or do it for your own workplace:** take a system that went live in the last year, write its four most value-relevant KPIs with baselines and targets, and note one benefit that was promised but never tracked.

---

## Practitioner's corner (go deeper)

The sharpest distinction in this knowledge area is **solution limitation versus enterprise limitation**, and it is examined precisely. A solution limitation lives inside the solution boundary — fix it by changing the solution. An enterprise limitation lives outside it, in the surrounding people, process, policy or structure — fixing the software will not touch it. Senior BAs earn their keep here, because stakeholders overwhelmingly prefer "the system is broken" to "our people haven't changed", and will push you towards expensive solution changes that cannot move the number. Your value-adding move is to separate the two with evidence before anyone approves a change budget.

Treat **benefits realisation** as a design input, not an afterthought. The strongest practitioners define measures and baselines *during* Strategy Analysis and the business case (Modules 01 and 09), not after go-live, because a baseline you forgot to capture before the change is gone forever — you can never prove the improvement. Build the measurement into the solution's own data where you can; a KPI that needs a manual monthly spreadsheet will quietly die.

Be rigorous about **attribution**. If repeat-purchase rose from 29% towards the 33% target, can you actually credit the OMS, or did a marketing campaign, a seasonal effect or a price change move it? Honest evaluation names confounders and, where it matters, isolates them — a control period, a segmented cohort, or at minimum a clearly stated assumption. Over-claiming benefits is the fastest way to lose finance's trust on your next business case.

Finally, use **Recommend Actions to Increase Solution Value** as a bridge, not a full stop. Its outputs — adjust, train, replace, retire — feed back into Strategy Analysis and a fresh change, so evaluation is a loop.

**Common mistakes even senior BAs make:**
- **Confusing outputs with outcomes** — reporting "the OMS processed 180,000 orders" (an output) as if it were the benefit (fewer late deliveries, fewer contacts).
- **Declaring victory on go-live day** — before benefits have had time to realise, and before the enterprise has actually adopted the change.
- **Measuring without a baseline** — starting the evaluation only after the old state is gone, so no improvement can ever be proven.

---

## Key takeaways

- Solution Evaluation has five tasks: **Measure Solution Performance**, **Analyze Performance Measures**, **Assess Solution Limitations**, **Assess Enterprise Limitations** and **Recommend Actions to Increase Solution Value**.
- "Live" is not "working" — only measured value against a baseline proves the solution delivered.
- UAT validates the *built* solution against its acceptance criteria; it is not the same as the earlier Validate Requirements task (Module 07).
- Separate limitations *inside* the solution from limitations *in the enterprise* — they need completely different fixes.
- Benefits realise over months, need a named owner, and depend on a baseline captured *before* the change.
- Close every initiative with a post-implementation review so lessons feed the next one (Module 04).

---

## BABOK map

- **Knowledge area:** Solution Evaluation — the whole knowledge area (Measure Solution Performance; Analyze Performance Measures; Assess Solution Limitations; Assess Enterprise Limitations; Recommend Actions to Increase Solution Value).
- **BABOK techniques used:** Metrics and Key Performance Indicators (KPIs); Acceptance and Evaluation Criteria; Decision Analysis; Risk Analysis and Management; Item Tracking; Lessons Learned.
- **Industry techniques (clearly not BABOK-named):** user acceptance testing (UAT); benefits realisation; post-implementation review.
- Aligned to the BABOK body of knowledge; this module supports the IIBA certifications ECBA (entry), CCBA (mid) and CBAP (senior).
