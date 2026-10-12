---
layout: doc
---

# Online payment

Online payment lets parents pay school fees from their space, by mobile
money (Flooz or Mixx by Yass). Until it is switched on, parents don't see
the **Pay online** button: they pay at the cash desk, as usual.

The page opens from **Finances → Online payment**. Only administrators see
it.

## Where your school stands

The top of the page sums it up:

- **Not activated**: parents cannot pay online yet;
- **Active**: the payment provider, the accepted methods, any surcharge
  (see below), the activation date and who set it up;
- **Suspended**: online payment was switched off, without losing its
  configuration. It can be switched back on at any time.

## Request activation

Online payment goes through a merchant account opened in the school's
name with the payment provider. edPage opens it and connects it to ERA.

1. Fill in the **Request activation** form:
   - the school's **legal name**;
   - the **legal representative**;
   - the **RCCM** (trade register) and **NIF** (tax number), if you have
     them at hand;
   - a contact **phone** and **email**;
   - the **payout number for the funds**, where the provider will pay the
     parents' payments out to you;
   - a **message**, if needed.
2. Click **Send the request**.

edPage then calls you back to agree on the set-up: it is a paid service,
settled directly with edPage, outside the platform. The supporting
documents the provider asks for are exchanged at that point.

While it is handled, the page shows where your request stands and any note
from edPage. Once the account is open, edPage switches online payment on
and administrators get an email: parents see the **Pay online** button
from that moment.

::: info You don't see the form?
It disappears once online payment is active, and while a request is being
handled. On a self-hosted install, it only appears if the address
requests are sent to was set on the server: contact edPage directly if it
was not.
:::

## The online payment surcharge

The provider takes a commission on each transaction. To keep fees paid at
the cash desk unchanged, a **surcharge** can apply to online payments
only: with a 2.5% surcharge, a parent paying 50,000 F online is debited
51,250 F, and 50,000 F is what is credited to their fees.

The parent sees the surcharge and the total debited before confirming. The
receipt shows the amount credited, the online payment fee and the total
debited. Payments recorded at the cash desk never carry a surcharge.

Without a surcharge, the school builds the commission into its prices.

## Self-hosted install: set it up yourself

If your school is alone on its installation, the **Configuration** section
lets you enter the merchant account yourself, without touching the server.
These settings replace the ones in the server's configuration file.

1. Choose the **Provider**.
2. Enter the **API key** the provider gave you. Once saved it is never
   shown again: leave the field blank to keep it, or type a new one to
   replace it.
3. Enter the **Online payment surcharge**, as a percentage (0 for none).
4. Tick **Parents can pay online**.
5. Click **Save changes**.
6. Copy the **Callback address (webhook)** that appears, and paste it in
   the provider's dashboard as the payment confirmation address. It is
   what turns payments from "Pending" to "Paid". Keep it to yourself: it is
   secret.

To suspend online payment, untick **Parents can pay online** and save: the
configuration is kept.

Schools hosted by edPage don't have this section: edPage sets the account
up for them.
