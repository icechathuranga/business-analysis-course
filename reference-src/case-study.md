# The Homegrove case study

> **Homegrove is a fictional company created for this course.** Any resemblance to a real
> business, product or person is coincidental, and every figure is illustrative. We use one
> case the whole way through so each technique builds on the last instead of starting cold.

## The company
**Homegrove** is a mid-sized UK online retailer of homeware and lifestyle goods — about
**£42M** revenue, **300** staff, roughly **180,000** orders a year, sold through its website
and four shops. The warehouse is in Leicester; head office in Manchester.

## How the BA gets involved
The **COO emails IT**: *"Customers keep complaining about late deliveries — I think we need to
rebuild the website. Can we scope a new site?"*

That one sentence is the spark for the whole course. The COO has handed over a **solution**
("rebuild the website") before anyone has understood the **problem**. A business analyst who
simply did as asked would spend a lot of money and very likely **not fix anything**. So the
BA's first job is to separate **symptom → problem → root cause**.

## The symptoms (what people first report)
- Late-delivery complaints up about **60%** year on year.
- Repeat-purchase rate has fallen from **38% to 29%** over 18 months.
- Customer Service handles roughly **1,200** "where is my order?" contacts **every week**.
- The site occasionally **oversells** — takes orders for items that aren't really in stock.

## What the analysis uncovers
Working through strategy analysis, stakeholder interviews and process mapping, the BA finds the
real cause. Orders do **not** flow automatically from the website to the warehouse. Twice a day
a clerk **exports orders to a spreadsheet and re-keys them** into the warehouse system. That
manual hand-off creates delays, keying errors, and **no real-time view of stock** — which is why
the site oversells. **The website itself is fine.** The problem is a broken **order-to-fulfilment
process** with no system integration.

## The proposed change
An integrated **Order Management System (OMS)** that connects **storefront ↔ warehouse ↔
couriers**, with real-time stock and automatic order flow — so no one re-keys anything.

## The numbers (used in the business-case module)
| Item | Figure |
|---|---|
| One-off project cost | £240,000 |
| Annual operating cost | £40,000 |
| Gross annual benefit | £300,000 |
| **Net annual benefit** | **£260,000** |
| Simple payback | **≈ 11 months** (0.92 years) |
| Simple 3-year ROI | **225%** |
| 3-year NPV at 10% | **≈ £406,600** |

The gross benefit is made of about £120k in fewer refunds and goodwill credits, £90k in labour
saved by ending the re-keying, and £90k in extra margin from fewer lost sales and a small lift
in repeat purchase.

## The target outcomes (used in the solution-evaluation module)
| Metric | Baseline | Target |
|---|---|---|
| Late-delivery rate | 12% | under 4% |
| "Where is my order?" contacts / week | 1,200 | under 400 |
| Repeat-purchase rate | 29% | 33% |
| Oversell incidents / month | ~25 | under 2 |

## The cast (used in the stakeholder module)
Priya Shah (COO, sponsor) · Marcus Doyle (Head of Fulfilment, process owner) · Dana Okoro
(Customer Service Lead) · Sam Reilly (Warehouse Supervisor, who does the re-keying and fears for
his job) · Lee Tan (IT Manager) · Nadia Haddad (Finance Business Partner, who approves the case)
· Tom Vance (Head of Marketing / CX) · the courier partners · and the customers themselves.

> **The lesson Homegrove teaches, again and again:** understand the problem before you choose
> the solution. Everything else in business analysis hangs off that.
