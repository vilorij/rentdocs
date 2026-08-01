# A day with trips and tours

Written for the person running the departures: who is going today, on which
boat, and who still owes money.

Trips need more setting up than the other two. Nothing is sellable until three
things exist, and they depend on each other in order.

---

## Before anything: three things, in this order

All three live under **Settings** and are owner-only.

**1. Where you go.** Settings → Fleet & Destinations → Destinations. An island,
a dive site, a border crossing. Everything else refers back to a destination, so
this is genuinely first.

**2. What you go in.** Same page, Fleet. Your boat, van or bus, and how many
people fit in it. The seat count is what lets the system tell you a departure is
full and split guests across two boats when it is.

**3. What you sell and for how much.** Settings → Trips & pricing → Products &
pricing. A trip, with a price per kind of traveller. Two prices per kind: what
you keep and what the guest pays. The gap is the commission a booking site
takes. Selling direct only? Put the same number in both.

The fastest route on the third one is the **From a destination** option, which
picks up the destination you already created.

Also on that page, worth setting once: the days you actually run, the passenger
types you price for, and the guest booking form.

---

## The Trips page is your day

**Trips** in the menu. Pick a date and you get the manifest for it: everyone
booked, which boat or van they are on, and whether they have paid.

What you do here:

- **Split people across boats.** Press **Autosplit** and the system fills boats
  by the seat counts you set. To move one person, use the dropdown next to them
  in the Boat plan panel.
- **Mark people paid.** On a computer the toggle opens a small "Mark paid as…"
  menu: *Cash — at office*, *Cash — to driver*, *PromptPay — at office*,
  *Bank transfer — at office*. **On a phone there is no menu**: the toggle just
  marks them paid, and the method is not recorded. If you care which it was, do
  it at a computer.
- **Print** the manifest.
- **Share with driver.** Select the rows first, then the button appears. It
  produces a link the driver opens on their own phone with no login, valid for
  **48 hours**.

  Treat that link carefully: it does not only show the manifest, it lets whoever
  holds it **mark passengers as paid**. Send it to your driver, not to a group
  chat.

---

## Taking a booking

**Bookings → New Booking**, and if you run more than one vertical pick the
**Trip** tab.

You need a customer (name and phone are enough, create them inline), the trip,
the date and the passenger breakdown.

Confirming a trip booking creates one task, **Prepare trip to (destination) for
(customer)**, with a short checklist: passenger count, pickup point and time,
and which boat they are on. It is created unassigned, so give it to somebody.

If that is not the routine you want, change it: **Settings → Task checklists**
lets you say which checklists are created automatically when a trip booking is
confirmed. Configure one and it replaces the built-in task rather than adding
to it.

The day itself still runs from the Trips page, not the Tasks screen.

---

## The guest details form

This is the piece that saves the most chasing, so it is worth setting up
properly before your first busy week.

### What it is

A booking tells you who is coming and when. It does not tell you passport
numbers, dietary requirements or dive certifications, and chasing four
passengers for those over chat is most of the admin in this business.

So each booking can produce a **link the guest opens themselves**. They fill it
in on their own phone, and the answers land back on the booking.

### Getting the link

Open the booking. In the right-hand column there is a card headed **Guest
details form** with a button, **Get guest-details link**. Press it once and you
get a URL, a copy button, and an open-in-new-tab button.

Send that URL however you already talk to the customer. When they have submitted
it, the card shows a green **Submitted** badge, so you can tell at a glance
whether you are still waiting.

**The link is the credential.** There is no login on it: anyone holding it can
open and edit that booking's guest details. Send it to your customer, not to a
group chat.

You can also just open it yourself and fill it in for them, which is usually
faster when someone is standing in front of you reading their passport out.

### Choosing what it asks

**Settings → Trips & pricing → Guest booking form.** Three things to decide:

- **Dietary options.** One per line. There is a built-in list, but yours will
  differ, and this is the field guests actually notice. Write your real menu
  constraints here.
- **Dive certification options.** Only relevant if you run diving.
- **Collect passport details.** A switch. Turn it on for anything that crosses a
  border, off for a day trip where you do not need it. Asking for a passport
  number you have no use for is the fastest way to lose a booking form
  submission halfway through.

### What it does not do

It collects details, it does **not** take payment. The terms text on the form
mentions a deposit, but the form itself shows the amount read-only and has no
payment widget. Money is a separate step: see [Getting paid](06-getting-paid.md).

---

## Selling through Viator and Bokun

Both are under **Settings → Integrations**, as extra tabs that only appear for
this vertical.

**Viator** is a paid add-on (฿1,490/month). Bookings that come in through it
arrive already confirmed.

Set your **net** and **retail** prices properly before you connect anything: the
difference between them is what the channel takes, and a wrong number there is a
wrong number on every seat you sell.

---

## Money

Cash goes through the paid toggle on the Trips page. Card links, crypto,
PromptPay and what the software does and does not reconcile are all in
[Getting paid](06-getting-paid.md).

Two trip-specific notes:

- Deposits on this vertical are computed for you: half the total, capped at
  ฿50,000. That is not configurable.
- After payment, a border-run booking produces a PDF ticket. That is the only
  document the platform generates, and it currently carries a fixed heading
  rather than your shop name.

---

## What you will not find

- **No Vehicles, Maintenance or Expenses menu.** Those belong to the vehicle
  rental vertical. Your boats live in Settings → Fleet & Destinations.
- **Nothing about vehicles.** The Dashboard tiles and the Reports breakdown
  follow the vertical you run. Your revenue breakdown is **by destination**, not
  by boat, because what you sell is "Ko Tao", not "boat number three".
- **Departure points are optional.** They are a preference for which boat
  usually goes where, not a requirement, and the dispatcher will release a bound
  boat into the general pool if its destination has no demand that day.
