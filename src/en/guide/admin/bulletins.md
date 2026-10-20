---
layout: doc
---

# Report cards

This page covers publishing report cards on the administration side —
once teachers have entered their grades and appreciations for a given
period (which is their own job, not yours), you're the one who triggers
generating and releasing the report cards.

## Publish a class's report cards

From **School setup → Classes**, click **Bulletins** on the row for
the class you want.

To publish:

1. Choose the **Academic period** you want from the dropdown at the top
   of the page.
2. Click **Publish / republish bulletins**.

This generates (or regenerates) every student's report card in the class
for that period, based on the grades and appreciations already entered.

On the **first** publication, each student's parents get an email and a
notification: the report card is how they learn the period's results, not
grade by grade. Republishing after a correction updates the
already-published report card — students and parents always download the
latest version — without notifying them a second time.

If no academic period is configured for this class's year, a message
tells you so — go create one first in
[School structure](/en/guide/admin/structure-etablissement).

## Track and download report cards

The table below the period selector lists each student in the class
with:

- **Status** — "Not published", or the date the report card was
  published.
- A download button (icon), available as soon as a report card has been
  generated for that student.

## Grade summaries {#grade-summaries}

**Teaching → Grade summaries** lists the year's classes and, for each one,
two ways in. The **Grade summary** button on a class's report cards page
leads to the same place.

- **Grade summary** — every student against every subject, for the chosen
  period. Each cell gives the student's average in the subject, with the
  detail by evaluation type underneath (D = homework, C = composition…). A
  dot marks an option the student doesn't take; a dropped specialty is
  flagged. The last column gives the overall average; the last three rows,
  the class average, the lowest and the highest.
- **A subject** — the subject's mark sheet: every evaluation of the period,
  each student's grade as entered (on the evaluation's own scale, with bonus
  or malus, absent or excused), then their subject average. Only the
  students who take the subject appear; out-of-average types are flagged.

Averages are **exactly the report cards'**: a summary can never show a
different average from the same student's report card. There is no rank,
as on the report card.

Each screen downloads:

- as a **PDF**, to print or bring to the class council;
- as a **CSV**, to open in a spreadsheet (Excel, LibreOffice): in French the
  file uses semicolons and decimal commas, so it opens straight into
  columns.

The icon next to a student's name, in the class summary, downloads their
**grade report** as a PDF: each of their evaluations, subject by subject,
with their averages.

## Report card template

The visual template used (Classic, Compact, or Traditional French-style)
is chosen per class, in the class's form — see
[School structure](/en/guide/admin/structure-etablissement#classes). If no
template is chosen for a class, the school's default template applies.

Whatever the template, the report card's subjects follow the
[subjects by department](/en/guide/admin/structure-etablissement#subjects-by-department)
setup:

- they are grouped under their **heading** ("Tronc commun", "Sciences"…),
  in the **order** given; subjects without a heading come without a title;
- **specialties** form a separate block, "Enseignements de spécialité":
  first those the student keeps, then those they dropped, marked
  "(abandonnée)".

The **Traditional** template adds one column per evaluation type that
counts in the average (the student's homework average, composition
average…) and a "Moy. × coef." column. Types
[not counted](/en/guide/admin/structure-etablissement#evaluation-types)
don't appear there.

A published report card is a fixed document: a setup change only shows once
the class's report cards are published again.
