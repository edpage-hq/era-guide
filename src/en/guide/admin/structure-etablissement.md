---
layout: doc
---

# School structure

This section groups all of ERA's base configuration: this is what you set
up at the start of the year, before staff and students can start working
in the app. The usual order is: academic year → sites → departments →
classes → subjects → subjects by department → evaluation types → academic
periods → competencies (if needed).

## Academic years

**School setup → Academic Years** lists your instance's academic
years, with the number of classes in each. Only one year is "Current" at
a time — it's the one that appears by default on the dashboard and on new
forms.

To create an academic year:

1. Click **New academic year**.
2. Fill in the fields below.
3. Click **Save**.

| Field      | Detail           |
| ---------- | ---------------- |
| Label      | e.g. "2025-2026" |
| Start date | —                |
| End date   | —                |

From the list, the **Set as current** button switches the current year.
Deleting an academic year is permanent and irreversible.

## Sites

If your school has multiple campuses, **School setup → Sites** lets you
manage them. A site only has two fields: **Name** and **Address**. Every
department, class, fee structure, and employee is then attached to a
site — if you only have one campus, create a single site and attach
everything else to it.

To create a site: go to **School setup → Sites**, click **New site**,
fill in the name (and the optional address), then **Save**.

### Site logo

Once the site exists, its **Edit** page offers a **site logo**, below the
name/address form. That logo is printed, in place of the instance logo, on:

- the **bulletins** of the classes attached to this site;
- the **payment receipts** of students enrolled in one of this site's
  classes.

Sites with no logo of their own keep using the one from the
[application settings](/en/guide/admin/parametres-application) — so there's
nothing to do if all your campuses share one identity.

Only the logo changes: the menu and the public home page keep the instance
logo, and the address, phone and email printed on receipts are still the
ones from the application settings.

Accepted formats: PNG, JPG, WebP or SVG, 2 MB maximum. The **Remove**
button deletes the site's logo and brings back the instance one.
Already-generated bulletins and receipts aren't rewritten: the change
applies to documents produced afterwards.

## Departments

A department corresponds to a level or track (e.g. "Preschool", "Middle
School", "IB Senior Year"). **School setup → Departments** lists the
instance's departments along with the sites where each is active.

To create a department:

1. Click **New department**.
2. Fill in the fields below.
3. Click **Save**.

| Field        | Detail                                                                        |
| ------------ | ----------------------------------------------------------------------------- |
| Name         | —                                                                             |
| Type         | Nursery, Preschool, Elementary, Middle school, High school, IB, or University |
| Curriculum   | French or Togolese — determines the grading rules applied to this department  |
| Available at | check one or more sites where this department is active                       |

## Classes

**School setup → Classes** lists classes, with filters by site,
department, and academic year, and each class's enrolled headcount (out of
its capacity, if you set one).

To create a class:

1. Click **New class**.
2. Fill in the "Structure" section fields below.
3. Optionally, fill in the "Options" section fields below.
4. Click **Save**.

"Structure" section:

| Field         | Detail |
| ------------- | ------ |
| Name          | —      |
| Site          | —      |
| Department    | —      |
| Academic year | —      |

"Options" section (all optional):

| Field             | Detail                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------ |
| Capacity          | seat limit; leave blank for "No limit"                                                     |
| Homeroom teacher  | chosen from existing teachers                                                              |
| Bulletin template | Classic, Compact, or Traditional (French-style); leave blank to use the "Instance default" |

From the class list, each row also offers quick links to that class's
**Timetable** and **Report cards** — no need to go back through the menu.

## Subjects

**School setup → Subjects** is the instance's global subject catalog (e.g.
"Mathematics", "English"). A subject only has a name; attaching it to a
department (see below) is what defines its coefficient and its grading
scale.

To create a subject: **School setup → Subjects**, **New subject**, fill in the
name, **Save**.

## Subjects by department

**School setup → Subjects by Department** attaches a catalog subject to a
department, with the grading rules specific to that department.

To create an assignment:

1. Click **New assignment**.
2. Fill in the fields below.
3. Click **Save**.

| Field                                 | Detail                                                                                                                                                                                                                             |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Department                            | —                                                                                                                                                                                                                                  |
| Subject                               | —                                                                                                                                                                                                                                  |
| Coefficient                           | —                                                                                                                                                                                                                                  |
| Grading scale                         | maximum possible score; 20 by default                                                                                                                                                                                              |
| Specialty subject (chosen by student) | check if this subject isn't taken by every student in the department but chosen individually (see [Students and guardians](/en/guide/admin/eleves-tuteurs)); leave unchecked for a core subject, applied automatically to everyone |

## Evaluation types

**School setup → Evaluation Types** defines the evaluation categories used by
teachers (homework, exam, quiz...) and the weight of each in a subject's
average calculation.

To create a type: **School setup → Evaluation Types**, **New evaluation type**,
fill in the **Name** and the **Weight** (e.g. 1 for homework, 2 for an
exam), **Save**.

## Academic periods

**School setup → Academic Periods** defines the grading periods (terms,
semesters...) of an academic year — they're used both for grade entry by
teachers and for publishing report cards.

To create a period:

1. Click **New period**.
2. Fill in the fields below.
3. Click **Save**.

| Field         | Detail                                                   |
| ------------- | -------------------------------------------------------- |
| Academic year | —                                                        |
| Name          | e.g. "Term 1"                                            |
| Start date    | —                                                        |
| End date      | —                                                        |
| Order         | this period's position among the others in the same year |

## Competencies

**School setup → Competencies** only applies to qualitative departments (nursery,
preschool): instead of numeric grades, teachers observe competencies there
(e.g. "Recognizes colors").

To create a competency: **School setup → Competencies**, **New competency**,
choose the qualitative **Department** concerned, fill in the **Name**,
**Save**.
