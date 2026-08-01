# A day with property rental

Written for the person handling arrivals and departures.

The shape is the same as vehicle rental: a thing you own, a booking against it,
and a short list of jobs that appears when you confirm. The differences are all
below.

---

## Setting up: the properties

**Properties → Add Property.** Only two things are actually required to start
taking bookings: the **name** and a **nightly rate**.

The form is long because it can describe anything from a single room to a villa:
type, resort or complex, building, unit number, distance to the beach and to the
centre, bedrooms, bathrooms, amenities, rules, photos. None of that blocks you.
Fill in the name and the rate, save, and come back to the rest when you have
time.

---

## A booking

**Bookings → New Booking**, and pick the **Property** tab if you run more than
one vertical.

Create the customer inline if they are new (first name and phone), pick the
property, the dates, and the nightly rate. Deposit is optional.

Press **Confirm** on the booking and three jobs appear:

| Task | Priority | Due |
|---|---|---|
| Prepare *(property)* for *(guest)* | High | Check-in date |
| Check-in *(guest)* at *(property)* | Urgent | Check-in date |
| Check-out *(guest)* from *(property)* | High | Check-out date |

Each carries a checklist from your templates, which is where a housekeeping
standard actually lives: edit them at **Settings → Task checklists** (owner).
That page also decides which tasks are created at all, and what they are
called.

**They are created with nobody attached, on purpose.** Everyone on your team
sees unclaimed work and starting a task claims it, so two people cannot both
turn up to clean the same villa. Assign one yourself when you want a specific
person on it.

A booking confirmed by a payment (card link or crypto) creates the same tasks.

---

## Arrival and departure

**Start** when the guest checks in. **Process Return** when they check out: it
records the actual date, computes late days and a late fee if there are any, and
completes the booking.

It also records how much of the deposit was kept and how much goes back.

**Cancel closes the booking's open tasks** with a note, leaves finished ones
alone, and marks unpaid instalments cancelled. Anything already paid is left
untouched.

---

## Owners and settlements

If you manage properties for other people, **Owners** holds them and
**Settlements** is where you reconcile what you owe. Owner payouts share the
same machinery as the vehicle vertical.

Only the owner of the account can delete a property. A manager can do everything
else with it.

---

## Long stays

A booking marked long-term with a monthly rate gets a **payment schedule**: a
card on the booking with a **Record Payment** button, an amount, a method and a
note. That is the closest thing to instalment tracking in the product.

Saving a long-term booking without a deposit shows a warning and lets you
continue.

---

## Money

Card link, PromptPay, bank transfer, crypto, cash: see
[Getting paid](06-getting-paid.md). Two things to carry into this vertical:

- On a short booking there is **no cash-recording button**. The Payment Method
  dropdown on the form is a label, not an action. Long stays are the exception:
  see Record Payment above.
- Payment slips uploaded through the online store have **no approve or reject
  button**. You see the image; you settle it yourself.

---

## What you will not find

- **No Vehicles menu, no Maintenance page, no Expenses page.** Those belong to
  the vehicle vertical. If you track property maintenance costs, that is a gap
  today and it goes in your own spreadsheet.
- **Nothing about vehicles.** The Dashboard tiles and the Reports breakdown
  follow the vertical you run, so you get properties where a rental shop gets
  scooters. Run both and you get both, side by side.
