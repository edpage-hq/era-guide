---
layout: doc
---

# SMS & WhatsApp

Notifications to families arrive in the app and by e-mail. With this
option, some of them can also go out **by SMS or on WhatsApp**, to the
phone of the parents who gave their number. This helps with families who
rarely read their e-mails.

The page opens from **Administration → SMS & WhatsApp**. Only
administrators see it, and only if your licence includes the **Family
relations** module.

## An operator, and credits

Messages go through an SMS or WhatsApp operator. Each message uses a
credit bought from that operator. Credits are not included in the ERA
licence: they are bought separately, on quote. Contact edPage to switch
the option on.

As long as no operator is connected, the page shows **No operator**:
families are still notified in the app and by e-mail, as usual.

::: info Schools hosted on Era Admission
The option is not yet offered to schools hosted on the shared platform.
For now it is for installations dedicated to one school.
:::

### Pilot mode

Before the operator is chosen, edPage can switch on a **pilot mode**. No
message really goes out: each one is written to the application log.
Everything else works as with an operator (who receives what, the
month's count). Use it to choose the notifications to send and to check
that parents have entered their number.

## Choosing what goes to the phone

1. If the operator offers both, choose **Send by**: SMS or WhatsApp.
2. Under **Notifications sent**, tick the ones that also go to the phone:
   unjustified absence, report card published, payment recorded, and so
   on. Only notifications meant for families are offered: staff
   notifications never go out by SMS.
3. Click **Save**.

By default, none is ticked. Each message costs a credit, so keep the ones
that really matter to families.

The message carries the notification's title and text, in the language
the parent chose. An SMS is capped at 306 characters, a WhatsApp message
at 1,000: anything longer is cut.

## Who receives the messages

A parent receives a notification on their phone when all three are true:

- the school sends that kind of notification (box ticked above);
- the parent has a **phone number** on their account;
- they have not turned off the phone copy for that kind, in their
  preferences.

The number comes from two places:

- **the application dossier**: when an admission is approved, the
  guardian's number is copied to their parent account, unless they
  already had one;
- **the parent themselves**, in **Settings → Profile** (see
  [Getting started](/en/guide/prise-en-main#account-settings)).

An administrator can also enter or correct it from the user's record, in
[Staff and user accounts](/en/guide/admin/personnel-utilisateurs).
Numbers are written with the country code (for example
`+228 90 11 22 33`). Without one, Togo's (+228) is added.

## Following what was sent

The bottom of the page shows how many messages went out this month, and
how many the operator refused (credit used up, invalid number...). The
last 20 messages are listed with the date, the recipient, their number,
the notification and the status **Sent** or **Refused**. Hover over a
**Refused** status to see the reason the operator gave.

A refused message is not sent again. The notification itself did reach
the app and, depending on the parent's preferences, their e-mail.

This log is erased after 13 months.
