# Getting paid

> **The platform does not produce invoices, receipts or contracts.** There is no
> PDF and nothing to print. If your customers need paperwork, produce it outside
> the platform. Details at the bottom of this page.

Six ways money can reach you. They differ a lot in how much the software does
for you, so this page is organised by that: what you click, what the customer
gets, and whether the booking updates by itself.

| How they pay | You start it | Customer gets | Does the booking update on its own? |
|---|---|---|---|
| **Card link (Omise)** | Booking page, desktop | A link you send them | **Yes**, by webhook |
| **USDT crypto** | The chat bot offers it | Address + QR + amount | **Yes**, watched on-chain |
| **PromptPay** | Online store, or the bot | A QR with the amount in it | Only via the bot |
| **Bank transfer** | Online store only | Your account details | No |
| **Cash** | Trips page, or a long-term booking | Nothing | No |
| **Monthly instalments** | Booking page, long-term rentals | Nothing | No |

---

## The card payment link

**Where:** open a booking and scroll down. Under **Booking Information**, in the
left-hand column, there is a card headed **Card payment link (OMISE)**. Desktop
only: the panel is not on the mobile booking page.

The card, and everything it says, is in English whatever language you use.

**You must connect Omise first.** Go to Settings, then Payments. Until you do,
the card shows only this note and no fields:

> Connect OMISE in Settings → Payment Methods to create card payment links.

and nothing else. If it is connected, you get an **Amount (THB)** field, a **For**
dropdown with *deposit (50%)* / *balance* / *full (100%)*, and a **Create link**
button.

**The button starts disabled if the amount is zero.** It prefills from the
booking: full total, or the deposit, or the remainder. On a booking with no
total and no deposit that prefill is 0, so type an amount and it enables.

Anyone who can open bookings can create a link, including agents.

**The one booking you cannot bill is a cancelled one.** The panel says so
instead of offering the form, and the server refuses it too, so a link cannot be
made by going around the screen.

Everything else can be billed, deliberately. A booking marked **returned late**
is precisely the one that owes you a late fee. A **completed** long rental can
still have an instalment outstanding. And a booking already **paid in full** can
acquire a damage charge after the fact. Those are all real reasons to send a
customer a card link, so the software does not stand in the way of any of them.

**What happens on click.** A link is created and appears in the list below with
its URL and a copy button. **Nothing is sent to the customer.** No email, no
chat message, no SMS. Copy the URL and send it yourself, however you normally
talk to that customer.

**When they pay.** Omise calls us, we re-check the payment against Omise
directly rather than trusting the message, and then the booking is updated:
payment method becomes card, the deposit is marked paid, and for a *balance* or
*full* link the booking is marked verified and moved to Confirmed if it was a
quote or pending.

Three things to know about that:

- **The panel does not refresh on its own.** There is no polling. Reload the
  booking page to see a link flip from *Awaiting payment* to *Paid*.
- **A deposit shows as a deposit.** The badge has three states: *Not paid*,
  *Deposit paid, balance due*, and *Paid in full*. A deposit link moves it to
  the middle one, not the last.
- **A booking confirmed this way does get its preparation tasks.** They are
  created unassigned, like the ones from the Confirm button, so somebody still
  has to hand them out.

If a payment fails, nothing changes and you are not told. The link simply stays
*Awaiting payment*.

### Connecting Omise

![Payment settings](img/settings-payments.png)

**Settings → Payments**, the last card on the page. Owner only.

You need your public key and secret key from the Omise dashboard. The secret is
encrypted and never shown again after saving. There is an optional **Payment
Links+** section (an API key and a template ID) if your Omise account has it.

**Test keys will connect but will not create links.** The card will show
*Connected* and *Test*, and then link creation fails against Omise's test
environment. If you are trialling this, expect that.

---

## PromptPay and bank transfer

**Settings → Payments**, top of the page: switch each on, then fill in the
number and the account name. Bank transfer takes bank name, account name,
account number and branch.

You do not need to supply a QR image. One is generated from your PromptPay
number and previewed on the page. There is a "QR Code Image URL" field if you
want to use your own, but note it is a **web address, not a file upload**: the
image has to be online somewhere already.

Understand what turning these on actually does: **it makes them appear on your
online store and in the chat bot's payment menu.** There is no PromptPay or bank
button on the booking page in the operator app. If you have no online store and
no bot, switching these on changes nothing a customer will see.

Where a customer does meet them:

- **Online store.** They pick a payment method and upload a payment slip. The
  slip appears on the booking as an image.
- **Chat bot.** It generates a QR with the exact amount already in it.

**How a slip gets cleared.** A slip paid through the bot is checked
automatically against the slip service and the booking is marked verified. A
slip uploaded on the online store waits for you: open the booking, look at the
image, and press **Approve payment** or **Reject** with a reason. Rejecting
tells the customer what was wrong; if they upload a replacement, the old
rejection is cleared with it.

Owner and manager only, and **on a computer only**: the mobile booking page does
not have those controls yet.

---

## Crypto (USDT)

Requires the **Crypto payments** add-on. The customer is offered USDT on TRON in
the bot's payment menu and gets a one-time address, a QR, the exact amount and a
memo. The address is valid for about 30 minutes, with a 24-hour grace period
after that.

This is the only payment method that finishes by itself. The chain is watched,
and once the payment has enough confirmations the booking is marked paid.
Nobody has to check anything.

The **Crypto Payments** page in the menu is a read-only ledger: what customers
paid you in USDT and what has been paid out. There is no crypto button on a
booking.

Two caveats: a payment below 95% of the amount shows as **Underpaid** and does
not credit the booking, and a late payment inside the grace window is recorded
like an on-time one, so the page will not tell you it was late.

---

## Cash

There are exactly two places cash gets recorded.

**The Trips page.** Tap a passenger's paid toggle and pick from *Cash — at
office*, *Cash — to driver*, *PromptPay — at office*, *Bank transfer — at
office*. (Computer only; on a phone the toggle records no method.)

**Record Payment on a long-term booking.** If the booking is long-term with a
monthly rate it has a payment schedule, and each instalment can be recorded with
an amount, a method (cash, card, bank transfer, PromptPay) and a note.

For an ordinary short rental **there is no "record cash payment" control.** The
booking form asks for the payment method you *expect*, which is a note about
what you think will happen, not a record that it did.

---

## Deposits

There is a **Deposit Amount (THB)** field on the booking form. It is optional
and blank by default. On a long-term rental, saving without one shows a warning
and lets you save anyway.

What the software tracks: whether the deposit was **paid**, and only when the
payment came through a card link, crypto, or the trips cash toggle.

Processing a return also records how much of the deposit was kept against a
late fee and how much goes back, so the figures in that dialog are now written
down rather than shown and forgotten. Physically handing the money back is still
yours to do.

There is no shop-wide default deposit: type it per booking.

---

## Instalments on long rentals

If a booking is long-term with a monthly rate, a payment schedule is created for
it and appears on the booking as its own card. **Record Payment** takes an
amount, a method and a note. Owner and manager only.

---

## There are no invoices, receipts or contracts

This is the most important sentence on this page, because it is the thing people
assume exists.

The platform does not generate an invoice, a receipt, or a rental contract.
There is no PDF to send, no document to print, no invoice number, and no place
to put a tax ID. Quotes taken through the online store produce a reference code
on screen and an entry in your bookings list, not a document.

The one PDF the system produces is a border-run trip ticket, generated after
payment for that specific product.

If your customers need paperwork, produce it outside the platform.
