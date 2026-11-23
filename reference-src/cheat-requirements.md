# Cheat sheet — requirement types & quality

## The four requirement types

BABOK® classifies every requirement into one of four types. Keeping them straight stops the *why*, the
*what*, and the build detail blurring together. (See Module 7.)

| Type | What it is | Homegrove example |
|---|---|---|
| Business | A high-level need or outcome of the organisation (the *why*) | Cut the late-delivery rate from 12% to under 4%, and weekly "where is my order?" contacts from 1,200 to under 400 |
| Stakeholder | What a particular stakeholder or group needs (the bridge) | Dana's team needs live order status on one screen; Sam's team needs orders to arrive without re-keying |
| Solution — functional | What the solution must *do* — a behaviour or feature | The system imports website orders automatically, with no re-keying |
| Solution — non-functional (NFR) | A *quality* the solution must have | The stock sync completes within 60 seconds so the site never sells stale stock (figure illustrative) |
| Transition | A temporary capability, needed only to move from the current state to the future one, then retired | Migrate open orders into the new Order Management System (OMS) and train warehouse staff |

## What makes a requirement good [industry]

Whatever the format, a good requirement is: clear and unambiguous, concise, complete, consistent with
the others, correct, feasible, and — above all — **testable**. The quickest test of quality is: can you
write a test for it? Replace every vague qualifier — "fast", "user-friendly", "robust" — with a number
or a concrete, checkable condition. "Delivery tracking should be fast" fails; "the customer is emailed
within 15 minutes of any delivery-status change" passes.

## INVEST — a checklist for user stories [industry]

- **I**ndependent — it does not depend on other stories to deliver value
- **N**egotiable — it is a placeholder for a conversation, not a fixed contract
- **V**aluable — it delivers something a user or the business values
- **E**stimable — the team can size it
- **S**mall — it fits comfortably in one iteration (if not, it is an epic — decompose it)
- **T**estable — you can write acceptance criteria that prove it is done

## Acceptance criteria: Given / When / Then [industry]

Acceptance criteria state when a requirement is done. The Gherkin format writes them as
*Given [context], When [event], Then [outcome]*, covering the main path and the important variations.
They become the test conditions at UAT (User Acceptance Testing). The Homegrove headline story and its
criteria:

> *As a* customer, *I want* to see live delivery status for my order, *so that* I stop having to phone
> to ask where it is.
>
> **Given** a dispatched order, **when** the customer opens "My Orders", **then** the current courier
> status and estimated delivery date are shown; **and when** status changes, the customer is notified
> by email within 15 minutes.

That single testable "within 15 minutes" is what makes the story buildable and checkable, and ties it
straight to cutting the 1,200 weekly contacts.
