---
layout: doc
---

# Internal edPage panel

The internal Era Admission panel is the tool reserved for the edPage
team to manage the lifecycle of schools signed up online: granting a
license, ending a demo early, or purging an expired school. It's also
where the team edits Era Admission's **landing page** and handles the
**contact requests** it receives. It has nothing to do with a client
school's own user account — it's an entirely separate access.

The menu at the top of the panel leads to its three screens: **Schools**,
**Landing page** and **Contact requests**. **View landing page** opens the
public page in a new tab.

## Logging into the panel

1. Go to the staff login page, reachable on ERA's central domain (the
   one hosting the signup site, not a school's subdomain).
2. Enter your **staff account** email address and password — this
   account is independent of any school account, it only exists for the
   edPage team.
3. Submit. You land on the schools list.

The staff login form is deliberately minimal (no public signup, no
two-factor authentication, no self-service password reset): staff
accounts are created by hand, not through a public flow.

## Viewing the schools list

Once logged in, the "Schools" page lists every school that has signed
up, with for each one:

- its name and subdomain;
- its **status**: free, demo, licensed, or expired;
- its active **modules** (none on free; all on demo; whichever are
  actually licensed on licensed; none on expired);
- its **hosting formula** (self-hosted or managed);
- the demo end date, the date maintenance is paid through, and how long
  the school has been expired, whichever applies.

Each row then offers the actions available for that school, described
below — some only appear for certain statuses.

## Granting a license

Available for any school, regardless of its current status.

1. On the row for the school in question, click **License**.
2. In the dialog, check the modules to grant (or the "Full offer" option
   for every module at once). Each module's price is shown next to its
   name.
3. Fill in, if needed, the date maintenance is paid through. Left blank,
   it defaults to one year from today.
4. Confirm with **Grant license**.

The school immediately moves to "Licensed" status, with the checked
modules active, while staying hosted on edPage's infrastructure (the
"Managed" formula). If the school ultimately needs to host its own
installation instead (the "Self-hosted" formula), that switch is done
through a dedicated command-line tool, outside this panel — don't use
this action for that case.

This action can also be used to **modify** the license of an already
licensed school (adding a module, extending maintenance): simply apply
it again with the new values.

## Ending a demo manually

Available only for a school with "Demo" status. The action doesn't
appear on other statuses.

1. On the school's row, click **End demo**.
2. Confirm in the dialog — the action is immediate.

The school moves to "Expired" status and switches to read-only, exactly
as if its demo had ended naturally at its scheduled deadline. Use this
action to end a demo before its normal term (for example at the
school's request, or in case of misuse) — it isn't needed in the
ordinary course of things, since the demo ends on its own.

## Purging an expired school

Available only for a school with "Expired" status. This action is
**final and irreversible**.

1. On the school's row, click **Purge**.
2. Read the warning message in the dialog carefully: it states that the
   school, its database, and its storage will be deleted immediately,
   with no grace period and no way to undo it.
3. Confirm with **Delete permanently**.

In the ordinary course of things, a school expired for too long is
purged automatically once its grace period elapses. Use this manual
action only to purge a school ahead of that automatic deadline — for
example at the school's explicit request to delete its data without
waiting.

## Editing the landing page

The landing page is the public page shown at Era Admission's main
address (the central domain, not a school's subdomain). It presents the
offer to schools and leads to the free signup or to a proposal request.
No price appears on it: prices stay in the personalised proposal sent to
each school.

The **Landing page** screen lists the parts of the page, in display
order:

| Part                           | Editable content                     | Shown                                         |
| ------------------------------ | ------------------------------------ | --------------------------------------------- |
| **Header**                     | Headline title and text              | Always                                        |
| **Free offer**                 | Title and text about ERA Admissions  | If **Show** is ticked                         |
| **Modules**                    | Title, text and one card per module  | If **Show** is ticked and there is a card     |
| **Formulas**                   | Title, text and one card per formula | If **Show** is ticked and there is a card     |
| **Onboarding**                 | Title, text and one card per step    | If **Show** is ticked and there is a card     |
| **Frequently asked questions** | Title, questions and answers         | If **Show** is ticked and there is a question |
| **Contact**                    | Title and text above the form        | Always                                        |

The header buttons (**Create my free space** and **Request a proposal**)
and the contact form's fields aren't editable.

### Default texts

Each text is entered in French and in English. A field left empty shows
its language's default text, visible greyed out in the field. You only
need to fill in what you want to change. If you write in a single
language, that text is reused for the other.

At first deployment, the modules, formulas, steps and FAQ are already
filled in from the commercial proposal. Edit or delete them freely.

### Managing cards and questions

- **Add a card** or **Add a question** opens a form; the title (or the
  question and answer) is required in at least one language.
- The **Move up** and **Move down** arrows change the display order. For
  **Onboarding**, that order is also the step numbering on the page.
- **Edit** reopens the item; **Delete** removes it permanently.

Each block shows its state: **Shown**, **Hidden** (unticked) or **Empty,
not shown** (no card or question). Saving is immediate.

## Handling contact requests

The landing page's form sends its requests to the **Contact requests**
screen. The number of requests still to handle shows as a badge next to
its name, in the panel's menu.

Each request shows the school, the person's name, the date, the language
they were browsing the landing page in, their email and phone (clickable)
and their message. Requests **To handle** come first, newest first.

Once you have got back to the school, click **Mark as handled**. **Mark
as to handle** undoes it.
