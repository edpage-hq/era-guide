---
layout: doc
---

# Acceptance checklist

This page is for checking ERA **by hand**, role by role, after every update
(Alpha or SaaS), before announcing it to users. It doesn't replace the
automated tests: on every change, they already check that each role only
opens its own pages, and that the money and grades journeys give the right
amounts and averages.

The checklist focuses on what a machine can't see: a PDF that is readable
and well laid out, an e-mail or SMS actually received, a file sent from a
phone, a real payment, a printout.

## Before you start

- Have **one test account per role**, on the school concerned, with an
  e-mail address you can read.
- Run at least part of the checklist **on a phone**, especially the parent,
  student, teacher and school life roles.
- Create data under your own name ("Acceptance test") and delete or cancel
  it at the end, so the school's figures aren't skewed.
- Never test a real online payment with a large sum: the smallest accepted
  amount is enough.

::: info Reporting a problem
For each item that doesn't give the expected result, note its **number**
(for instance PAR-4), the account used, what you saw and a screenshot. An
item you didn't test is noted "not done", not "OK".
:::

## All roles

| #    | To do                                                           | Expected                                                                  |
| ---- | --------------------------------------------------------------- | ------------------------------------------------------------------------- |
| TR-1 | Sign in with each test account.                                 | The role's dashboard opens; the menu only shows its own sections.         |
| TR-2 | If two-factor authentication is on, sign in from a new browser. | A 6-digit code arrives by e-mail within a minute and opens the session.   |
| TR-3 | Tick "Remember this device", sign out, sign back in.            | No code is asked for again on this browser.                               |
| TR-4 | Use "Forgot your password?".                                    | The e-mail arrives; the link works only once.                             |
| TR-5 | Open the notification bell.                                     | Recent notifications show; their links lead to the right page.            |
| TR-6 | Switch the language to French, then back to English.            | No text stays in the other language or shows a raw code.                  |
| TR-7 | Open a page's help, then start a guided tour.                   | The help matches the page; the tour runs to the end.                      |
| TR-8 | Staff member: submit a request from **My leave requests**.      | The request shows **Pending** and appears in management's **To approve**. |

## Administration

| #     | To do                                                         | Expected                                                                                                     |
| ----- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| ADM-1 | **New user** with your own address, then **Create the user**. | The invitation arrives by e-mail; its link lets you choose a password.                                       |
| ADM-2 | **Resend invitation** to an account not activated yet.        | A new e-mail arrives; its link activates the account.                                                        |
| ADM-3 | **Change the logo** in the settings.                          | The new logo shows in the menu and on the public home page.                                                  |
| ADM-4 | **Publish / republish bulletins** for a class.                | Parents get a single notification; the report card opens on their side.                                      |
| ADM-5 | Open a report card PDF.                                       | Header, grades, averages, ranks and comments are readable, with no cut-off text; the printout fits the page. |
| ADM-6 | **Back up now**, then download the archive.                   | The archive downloads and opens.                                                                             |
| ADM-7 | Export a class's grades to Excel, then import the file back.  | The file opens in Excel; the import creates no duplicate and no error.                                       |
| ADM-8 | Open the school's public home page on a phone.                | Texts, images and contacts display properly, with nothing overflowing.                                       |

## Teacher

| #     | To do                                                                 | Expected                                                                    |
| ----- | --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| ENS-1 | On a phone, **Take attendance** for a class, then **Save roll call**. | The list is easy to use with a finger; the roll call shows for school life. |
| ENS-2 | **New evaluation**, then enter the **Grades** of a few students.      | The scale is prefilled with 20; decimal grades are accepted.                |
| ENS-3 | From **My homeroom class**, enter end-of-period comments.             | They appear on the report card PDF, without being cut off.                  |
| ENS-4 | **Lesson log** → **New entry** with an attached document.             | The entry appears in the student's **Lesson log**; the attachment opens.    |
| ENS-5 | Look at your timetable.                                               | The slots match the ones entered by the administration.                     |

## School life

| #    | To do                                                                   | Expected                                                                     |
| ---- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| VS-1 | Open **Absence justifications** and look at a supporting document.      | The document (photo or PDF) opens and is readable.                           |
| VS-2 | **Approve** one justification, **Reject** another.                      | The parent is told of each decision.                                         |
| VS-3 | **New incident**, then **Convene council**.                             | The council shows with its date and members.                                 |
| VS-4 | **Record decision**, then **Download minutes**.                         | The PDF includes the decision and those present, readable and well laid out. |
| VS-5 | On a phone, **Cafeteria attendance** with **Everyone ate**.             | The roll call is saved in one gesture.                                       |
| VS-6 | On a phone, **Transport attendance** for **Pickup**, then **Drop-off**. | Both roll calls are saved.                                                   |

## Secretariat

| #     | To do                                                                   | Expected                                                                     |
| ----- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| SEC-1 | Submit an application from the public page, with attached documents.    | It arrives in **Applications to review**; the documents open.                |
| SEC-2 | **Review**, then **Approve** the application and **Assign to a class**. | The family is told by e-mail; the student appears in the class.              |
| SEC-3 | **Reject** another application with a reason.                           | The family receives the rejection with the reason.                           |
| SEC-4 | Review the site transfer request from PAR-3, then approve it.           | Once the transfer is validated, the student appears on the destination site. |
| SEC-5 | Move a student to another class.                                        | Their fees follow; their past grades stay visible.                           |

## Cashier

| #     | To do                                                     | Expected                                                                 |
| ----- | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| CAI-1 | Record a cash payment, then **Download receipt**.         | The receipt PDF shows the right student and amount, and prints properly. |
| CAI-2 | Record a bank transfer payment with a reference.          | The reference shows on the receipt.                                      |
| CAI-3 | Enter an expense with a supporting document.              | The document opens; the expense goes for approval.                       |
| CAI-4 | Run the accounting export for one month.                  | The file opens in the spreadsheet and its totals match the screen.       |
| CAI-5 | If online payment is on, check the payment made in PAR-5. | It shows as paid, with the right reference.                              |

## Parent

| #     | To do                                                                       | Expected                                                                                   |
| ----- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| PAR-1 | On a phone, open the report card published in ADM-4.                        | The PDF opens and is readable on the phone.                                                |
| PAR-2 | **Justify** an absence with a **Supporting document** taken as a photo.     | The photo uploads from the phone; school life sees it.                                     |
| PAR-3 | **Request a transfer** to another site for your child.                      | The request reaches the secretariat (see SEC-4).                                           |
| PAR-4 | Pick optional services, then **Save my choices**.                           | The matching fees show in the balance.                                                     |
| PAR-5 | **Pay online** the smallest possible amount, then **Send payment request**. | The request reaches the phone; the payment goes through once confirmed; the balance drops. |
| PAR-6 | Repeat PAR-5, declining the confirmation on the phone.                      | The payment isn't counted; the balance doesn't change.                                     |
| PAR-7 | **Download receipt** for a payment.                                         | The receipt PDF is the same as the cashier's.                                              |

## Student

| #     | To do                                               | Expected                                                          |
| ----- | --------------------------------------------------- | ----------------------------------------------------------------- |
| ELV-1 | On a phone, open **My portal**.                     | The Grades, Report cards, Documents and Lesson log sections show. |
| ELV-2 | Open the report card, then the attachment of ENS-4. | Both files open.                                                  |
| ELV-3 | Check a grade entered in ENS-2.                     | The grade and the evaluation are the ones the teacher entered.    |

## Boarding

| #     | To do                                                          | Expected                                                 |
| ----- | -------------------------------------------------------------- | -------------------------------------------------------- |
| INT-1 | **New bed**, then assign a student to it.                      | The bed shows as occupied.                               |
| INT-2 | On a phone, **Boarding attendance** for Evening, then Morning. | Both roll calls are saved; an absent student is flagged. |

## Infirmary

| #     | To do                                                 | Expected                                                     |
| ----- | ----------------------------------------------------- | ------------------------------------------------------------ |
| INF-1 | **New visit** with the outcome **Returned to class**. | The visit shows in the list; no parent is notified.          |
| INF-2 | **New visit** with the outcome **Sent home**.         | The parents get a notification with the reason and the time. |

## Document management

| #     | To do                                                            | Expected                                                                                               |
| ----- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| GED-1 | In a student's file, **File** a PDF.                             | The document appears under the right type and opens.                                                   |
| GED-2 | On a phone, **Take a photo** of two printed pages.               | The pages are joined into a single readable PDF, in order.                                             |
| GED-3 | **Search the documents** for a word from the pages of GED-2.     | The document is found.                                                                                 |
| GED-4 | **Archive recovery** of a few files, then **Classify** each one. | Each scan goes into the right file; none is duplicated.                                                |
| GED-5 | Produce a certificate of enrolment from a **template**.          | The PDF has the right name and class, on the school's letterhead, and is stored in the student's file. |

## Site and general management

| #     | To do                                                                                               | Expected                                                                               |
| ----- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| DIR-1 | Open **To approve**.                                                                                | The leave request of TR-8 and the expense of CAI-3 (if under the threshold) are there. |
| DIR-2 | **Grant** the leave, **Reject** the expense with a reason.                                          | Each requester gets the notification, with the reason when refused.                    |
| DIR-3 | Open **Pilotage**.                                                                                  | The figures include the payments, absences and grades from the checklist.              |
| DG-1  | General management: open **To approve**.                                                            | It also shows expenses above the threshold and requests from every site.               |
| DG-2  | Have the cashier enter an expense above the threshold, then open **To approve** as site management. | The expense isn't there; it only appears for general management.                       |

## At the end

- Cancel or delete the "Acceptance test" data created during the checklist,
  including a refund of the PAR-5 online payment if needed.
- Send the list of failed items, with their numbers, before announcing the
  update.
