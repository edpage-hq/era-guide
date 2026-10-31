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

The menu at the top of the panel leads to its screens: **Schools**,
**Landing page**, **Contact requests**, **Quotes** and **Online payment**
(requests to switch online payment on). On the right, **View landing
page** opens the public page in a new tab, and **Password** leads to
changing your own password.

## Logging into the panel

1. Go to the staff login page, reachable on ERA's central domain (the
   one hosting the signup site, not a school's subdomain).
2. Enter your **staff account** email address and password — this
   account is independent of any school account, it only exists for the
   edPage team.
3. Submit. You land on the schools list.

The staff login form is deliberately minimal (no public signup, no
two-factor authentication, no "forgot password"): staff accounts are
created by hand, not through a public flow.

## Changing your password

Your account is handed to you with a temporary password. Change it on
first login:

1. Click **Password**, at the top right of the panel.
2. Enter your current password, then the new one, twice.
3. Submit: a message confirms the change.

Since this panel sends no reset email, a forgotten password cannot be
recovered from the login screen: ask the server administrator to set a
new one, then change it again here once you are logged in.

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
offer to schools and leads to the free signup or to a proposal request,
and its pricing configurator lets a school build its licence and ask for
a quote.

The **Landing page** screen starts with the page's **Appearance**, then
the **Page sections** block (the order of the parts and the added
sections). It then lists each part in display order, and ends with
**Labels** and **Sharing and search**. The original parts are:

| Part                           | Editable content                             | Shown                                         |
| ------------------------------ | -------------------------------------------- | --------------------------------------------- |
| **Header**                     | Eyebrow, headline title and text             | Always                                        |
| **Free offer**                 | Eyebrow, title and text                      | If **Show** is ticked                         |
| **Modules**                    | Eyebrow, title, text, one card per module    | If **Show** is ticked and there is a card     |
| **Pricing & quote**            | Eyebrow, title, text, priced cards and terms | If **Show** is ticked and there is a card     |
| **Onboarding**                 | Eyebrow, title, text, one card per step      | If **Show** is ticked and there is a card     |
| **Frequently asked questions** | Eyebrow, title, questions and answers        | If **Show** is ticked and there is a question |
| **Contact**                    | Eyebrow, title and text above the form       | Always                                        |

The **eyebrow** is the small uppercase line above a part's title
("MODULES", "CONTACT"…). The contact and quote forms' fields aren't
editable.

### Choosing the appearance

The **Appearance** part sets the look of the whole page. Colors and logo
stay ERA's: the landing page presents the product.

- **Layout of the top of the page**: **Centered** (the title in the middle, the
  original look), **Full screen** (a photo across the full width, the
  text over it), **Side by side** (the text on the left, the photo on the
  right) or **Editorial** (a large title, then the photo as a banner).
  The module chips under the buttons only appear with **Centered**.
- **Image at the top of the page**: the header photo (PNG, JPG or WebP, 4 MB at
  most), with the **veil** that darkens it to keep the text legible and
  the **image framing** (center, top, bottom).
- **Page background**: colored glow, plain or tinted.
- **Show the logo icon** above the title (the full logo stays in the top
  bar).
- **Ambiance**: the **fonts**, the frames' **corners**, the **buttons'**
  shape and the **section backgrounds**. With **Solid color**, modules and
  onboarding move onto the main color; pricing, denser, stays on a tint
  to remain legible.

Left untouched, the page keeps its original look.

### Ordering sections and adding new ones

The **Page sections** block lists every part below the header, in
display order: the original ones as well as those you add. The arrows
move them up or down. The header always stays at the top of the page.

**Add a section** offers the same types as a school's homepage. The
section is added at the bottom of the list, empty, with its own block in
the editor, and only appears on the landing page once filled in:

| Section                    | Content                                                    | Maximum   |
| -------------------------- | ---------------------------------------------------------- | --------- |
| **Key figures**            | A value ("120", "98%") and what it measures                | 8 figures |
| **Photo gallery**          | Photos (screenshots, training sessions…), optional caption | 24 photos |
| **Testimonials**           | The quote, its author, their role, an optional photo       | 12        |
| **News**                   | Title, date, text and image; most recent first             | 12        |
| **Partners**               | The logo, the name, and the website the logo links to      | 24        |
| **Contact and directions** | Address, phone, email, hours, a map drawn from the address | —         |
| **Video**                  | A YouTube or Vimeo video address, and a caption            | —         |

The landing page holds up to 12 added sections, several of the same type
if needed. Each added section has an **Eyebrow**, a **Section title** and
the **Show this section on the page** box; **Delete the section** erases it
with all its content, images included. The first six parts of the list
appear in the menu of the top bar.

### Editing the labels

The **Labels** part changes the texts that belong to no part: the
**Create my free space**, **Create my space** (top bar and footer) and
**Request a proposal** buttons, the free offer's **Free** badge, and the
name shown in the footer after "© year" (edPage by default).

### Sharing and search

The **Sharing and search** part sets what Google and link previews
(WhatsApp, Facebook, LinkedIn…) show of the landing page:

- the **page title**, shown in the browser tab and in search results,
  followed by "- ERA": about sixty characters at most;
- the **description**, the summary shown under the title: about 160
  characters;
- the **preview image**, shown when the link is shared (1200 × 630 pixels
  recommended). Without one, the header photo is used.

Messaging apps often cache a preview for several days: a link already
shared may show the old version for a while.

### Default texts

Each text is entered in French and in English. A field left empty shows
its language's default text, visible greyed out in the field. You only
need to fill in what you want to change. If you write in a single
language, that text is reused for the other.

At first deployment, the modules, pricing, steps and FAQ are already
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

## Setting up a school's online payment

A school asks for online payment from its space (**Finances → Online
payment**). Its request reaches the panel's **Online payment** screen;
the number of new requests shows as a badge in the menu.

Each request gives what the provider needs to open the merchant account:
legal name, legal representative, RCCM, NIF, payout number for the funds,
plus the name, email and phone of the person who asked. Open requests come
first, oldest first.

1. Call the school back to agree on the set-up, which is paid for and
   settled outside the platform. Move the request to **In progress** and,
   if useful, leave a **Note for the school**: the school reads it on its
   Online payment page.
2. Once paid, open the school's merchant account with the provider by
   hand (PayGate today).
3. Click **Set up payment** (the same screen opens from the schools list,
   **Online payment** button).
4. Choose the **Provider**, enter the account's **API key**, any **Online
   payment surcharge** (in %, to cover the provider's commission; cash
   desk payments never carry one), tick **Parents can pay online**, then
   save.
5. Copy the **Callback address (webhook)** shown and paste it in the
   account's dashboard at the provider, as the payment confirmation
   address. Without it, payments would stay "Pending".

On activation, the school's administrators get an email, and the request
turns **Activated** on its own. A request not taken forward is set to
**Declined**: the school can then send a new one.

Each school has its own merchant account: API keys are never shown again
once saved (leave the field blank to keep them), and the server's
configuration file is never used for a hosted school. To suspend online
payment, untick **Parents can pay online** and save.
