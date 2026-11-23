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

The **Download all bulletins** button at the top of the page gives the
period's published report cards in a single **ZIP** file: one PDF per
student of the class, named after the student. They are the report cards
exactly as families download them. A student whose report card isn't
published yet, or who has left the class, isn't in it. The button only
appears when at least one report card is published for the period.

## Grade summaries {#grade-summaries}

**Teaching → Grade summaries** lists the year's classes and, for each one,
two ways in. The **Grade summary** button on a class's report cards page
leads to the same place.

- **Grade summary** — every student against every subject, for the chosen
  period. Each cell gives the student's average in the subject, with the
  detail by evaluation type underneath (D = homework, C = composition…). A
  dot marks an option the student doesn't take; a dropped specialty is
  flagged. The last columns give the overall average, then the student's
  rank in the class; the last three rows, the class average, the lowest and
  the highest.
  As on the report card, subjects are grouped under their
  [heading](/en/guide/admin/structure-etablissement#bulletin-headings): a
  title spans the heading's columns, and specialties form a "Specialty
  subjects" group at the end. With no heading and no specialty in the class,
  the title row does not appear. The Excel file keeps a single header row
  (it is the import format).
- **A subject** — the subject's mark sheet: every evaluation of the period,
  each student's grade as entered (on the evaluation's own scale, with bonus
  or malus, absent or excused), then their subject average and their rank
  in the subject. Only the students who take the subject appear;
  out-of-average types are flagged.

Averages are **exactly the report cards'**: a summary can never show a
different average from the same student's report card. Two students with
the same average (to the hundredth, as shown) share a rank, "2nd (tied)",
and the next rank is skipped (1st, 2nd, 2nd, 4th).

Each screen downloads:

- as a **PDF**, to print or bring to the class council;
- as an **Excel** file (.xlsx), to work on in a spreadsheet. A class's file
  has two sheets: the summary, and the **council appreciations** to fill
  in.

In the class summary, the icons next to a student's name download:

- their **grade report** as a PDF: each of their evaluations, subject by
  subject, with their averages and their rank in the class;
- their **Excel file**, across all subjects, to fill in and import (see
  below).

The class summary also offers, for the chosen period:

- **All subjects** (PDF or Excel): the mark sheets of the whole class in
  one file, one page or sheet per subject. A subject with no evaluation in
  the period is left out. The Excel file is for reading or printing, not
  for importing: to import, use a subject's or a student's file;
- **Council appreciations** (PDF): one line per student, with their overall
  average, rank, general appreciation, conduct, and their distinctions or
  warnings. The same list downloads from the homeroom teacher's
  appreciations page.

These exports are for the administration and the homeroom teacher only.

### Import grades and appreciations from Excel {#import-from-excel}

The downloaded Excel file is also the template: fill it in, then send it
back with the **Import** button of the same screen.

- **A subject's grades and appreciations** — from the subject's mark sheet.
  In each evaluation column, type the grade on the evaluation's scale (12 or
  12.5), "Absent" (or "abs") or "Excused" ("Dispensé" in French); in the
  **Appreciation** column, the report card appreciation (one column per
  rubric if the school has
  [appreciation rubrics](#appreciation-rubrics)). Evaluations must
  first be created in ERA: the import fills in their grades, it doesn't
  create any. A bonus or malus already given is kept. Admins, the
  subject's teacher and the class's homeroom teacher only.
- **A student's grades and appreciations, all subjects** — from the class
  summary: the Excel icon next to the student's name downloads their file,
  the import icon sends it back. The file has two sheets: "Grades", one row
  per evaluation of the period in every subject (type the grade in the
  **Grade** column), and "Appreciations", one row per subject (one column
  per rubric, if any). Only the Excel file is accepted, not a CSV. Admins
  and the class's homeroom teacher only.
- **Council appreciations** — from the class summary, "Council
  appreciations" sheet: general appreciation, conduct, and an "x" for each
  distinction or warning (congratulations, compliments, encouragements,
  work warning, conduct warning) and each
  [report card activity](#report-card-activities). Admins and the homeroom teacher only.

The import's rules:

- **an empty cell changes nothing** already in ERA: you can import the same
  file again after completing it. For distinctions, on a filled-in row, an
  empty cell means "no";
- **all or nothing**: the whole file is checked before anything is saved.
  If it has an error (a grade off the scale, an unknown word, an unknown
  student), nothing is saved and each row to fix is listed;
- don't change the first column (**Student no.**, or **Reference** in a
  student's file): it links each row to its student, evaluation or subject.
  The file of another class, subject, period or student is refused, as is
  any import into a closed period;
- a CSV saved from Excel is accepted too, as long as its column headers are
  the downloaded file's.

## Appreciation rubrics {#appreciation-rubrics}

By default, a subject's appreciation is a free comment. You can split it
into **appreciation rubrics**: for instance "Attitude", "Progression" and
"Advice". Not to be confused with subject sections ("Core curriculum",
"Sciences"…), which group subjects on the report card.

1. Open **App settings**, **Bulletins** section.
2. Under **Subject appreciation rubrics**, click **Add a rubric** and name
   it (60 characters at most). Six rubrics at most.
3. Order them with the arrows, as the report card will show them, then
   click **Save changes**.

Then:

- teachers fill in each rubric for each student, on the appreciations page
  as in the subject's Excel file, which has one column per rubric;
- the report card shows the filled-in rubrics one after the other in the
  appreciation cell: "Attitude: … · Progression: …".

**Renaming** a rubric keeps the texts already entered. **Removing** a
rubric hides it everywhere, but its texts stay saved. Without any rubric,
the appreciation is a free comment again. A free comment entered before
the rubrics were added stays on the report card as long as no rubric is
filled in for that student.

## Report card activities {#report-card-activities}

The report card can list **activities** — "Extracurricular activities",
"Recreational activities", "Parental involvement"… — that the homeroom
teacher ticks, student by student and period by period. Nothing is
calculated: it is a hand-ticked list.

1. Open **App settings**, **Bulletins** section.
2. Under **Bulletin activities**, click **Add an activity** and name it (60
   characters at most). Ten activities at most.
3. Order them with the arrows, as the report card will show them, then click
   **Save changes**.

Then:

- the homeroom teacher ticks each student's activities on their
  [end-of-period appreciations](/en/guide/enseignant/bulletins-et-cahier-texte#end-of-period-appreciation) page;
- the three report card templates print an **Activities** block: every
  activity of the catalogue with a box, ticked (☒) or not (☐);
- the "Council appreciations" sheet of the Excel file has one column per
  activity (an "x" ticks it), and the council appreciations PDF list an
  **Activities** column. As for distinctions, on a filled-in row an empty
  cell means "no"; a file downloaded before the activities were added leaves
  them as they are.

**Renaming** an activity keeps the boxes already ticked. **Removing** an
activity hides it everywhere, but the ticked boxes stay saved. Without any
activity, the block does not appear on the report card. A published report
card is fixed: publish it again to show a change.

## Report card template

The visual template used (Classic, Compact, or Traditional French-style)
is chosen per class, in the class's form — see
[School structure](/en/guide/admin/structure-etablissement#classes). If no
template is chosen for a class, the school's default template applies.

Whatever the template, the report card's subjects follow the
[subjects by department](/en/guide/admin/structure-etablissement#subjects-by-department)
setup:

- they are grouped under their [**heading**](/en/guide/admin/structure-etablissement#bulletin-headings)
  ("Tronc commun", "Sciences"…), picked from a list, in the order of the
  headings then of the subjects; subjects without a heading come first,
  without a title;
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
