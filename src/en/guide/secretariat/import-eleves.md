---
layout: doc
---

# Import students

The **Import students** page, in the **Students & admissions** space,
brings over a list of students and their parents from an Excel file,
instead of entering them one by one. It is mostly for moving a school to
ERA or for a large start-of-year enrolment. A link on the **Students** page
leads to it too.

It is open to the administration and the secretariat. The administration
fills the classes of every site; the secretariat, those of **its own
site** (the one on its employee profile).

## The steps

1. **Download the Excel file.** Its first sheet is the list to fill in; the
   second gives the classes of the current year you can use, with their
   places left, and the words each column accepts.
2. **Fill it in**, one row per student.
3. **Check the file**: nothing is saved, the page lists the rows to fix, or
   tells what the import would do (students created, already present,
   enrolments, parents linked).
4. **Import.**

## The columns

| Column                | Good to know                                                                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Last name, First name | Required.                                                                                                                                                                                              |
| Sex                   | Male or Female. Optional.                                                                                                                                                                              |
| Date of birth         | **Required**, as day/month/year (25/03/2010). It tells two namesakes apart and lets a file be imported again without duplicates.                                                                       |
| Place of birth        | Optional.                                                                                                                                                                                              |
| Registration number   | Only when the school uses registration numbers. It must be unique.                                                                                                                                     |
| Site, Class           | Optional. The class is the one of the current year, written as in ERA. The site only matters when two sites have a class of the same name. With no class, the student is created without an enrolment. |
| Parent 1 and Parent 2 | Name, relationship (Father, Mother, Legal guardian or Other), phone, e-mail. A parent needs at least a name.                                                                                           |

Columns are recognised by their **header**: don't rename them, but you can
move them or add others, which are ignored.

## What the import does

- **All or nothing.** The whole file is checked: an unreadable date, an
  unknown or full class, a duplicate in the file, an invalid e-mail… and
  nothing is imported. Each row to fix is listed (the first thirty).
- **Students already in ERA** (same last name, first name and date of
  birth) are neither changed nor created again. They are only enrolled in
  the class of their row if they have no enrolment this year. Their parents
  are left alone.
- **A full class is refused**, counting the students of the file. To go over
  a capacity, enrol the student by hand and give the reason.
- **Parents** are found by e-mail address, which links brothers and sisters
  to the same account. The first parent of a row is the main contact.
- **With no e-mail**, the parent gets a placeholder address, never used to
  write to them. Two rows share a parent without e-mail only if the name
  **and** the phone are the same; otherwise each student has their own
  parent. Fill in the addresses afterwards from the
  [Parents](/en/guide/secretariat/parents) page.
- **No e-mail is sent.** Invitations go out afterwards, from the Parents
  page.
