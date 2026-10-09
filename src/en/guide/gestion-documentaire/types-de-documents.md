---
layout: doc
---

# Document types

The **Document types** catalogue describes the documents the school
files: which file each goes in, who consults it, who validates it, whether
it is confidential and how long it is kept. An administrator or the
document manager keeps it, from the **Documents** space → **Document
types**.

## The starting catalogue

ERA starts with the usual list, which you adapt freely:

| Type                         | File     | Origin                                | Consults and validates                         |
| ---------------------------- | -------- | ------------------------------------- | ---------------------------------------------- |
| Enrollment file              | Student  | Imported                              | Document manager, office                       |
| Birth certificate            | Student  | Imported                              | Document manager, office                       |
| Medical record               | Student  | Imported (confidential)               | Infirmary                                      |
| Application file             | Student  | Imported                              | Document manager, office                       |
| Transcript                   | Student  | Produced by the school                | Document manager, office                       |
| Certificate                  | Student  | Produced by the school                | Document manager, office                       |
| Diploma                      | Student  | Produced by the school                | Document manager, office                       |
| Internship agreement         | Student  | Produced by the school                | Document manager, office                       |
| Invoice or receipt           | Student  | Produced by the school                | Document manager, office; the cashier consults |
| Employment contract          | Employee | Imported (confidential)               | Document manager                               |
| Minutes                      | School   | Produced by the school                | Document manager, office                       |
| Report card                  | Student  | Produced by the school                | Document manager, office                       |
| Absence justification        | Student  | Imported                              | Document manager, school life (consults)       |
| Disciplinary council minutes | Student  | Produced by the school (confidential) | Document manager, school life (consults)       |
| Expense receipt              | School   | Imported                              | Document manager, cashier (consults)           |

Some types also show the files the other modules keep (report cards,
receipts, justifications…): see
[Files from the other modules](/en/guide/gestion-documentaire/#files-from-the-other-modules).

An administrator always consults and validates every type, confidential
ones included. The starting names show in each user's language until you
rename them.

## Create or edit a type

1. Click **New type**, or **Edit** on a type's row.
2. Fill in the **Name**.
3. Choose the **File**: the student's, the employee's, or the school's
   documents. Once documents are filed under a type, its file can no longer
   change.
4. Choose the **Origin**: **Imported** for a document handed in by a family
   or an employee, **Produced by the school** for a document it issues.
5. Enter the **Retention period** in years, or leave it empty to keep it
   without limit. See [Retention](/en/guide/gestion-documentaire/conservation)
   for what happens once that period is over.
6. Tick **Confidential document** so that every consultation is recorded in
   the activity log.
7. For a type filed in a student's file, tick **Visible to the family and
   the student** so its validated documents appear in their portal. At the
   start, this is the case for transcripts, certificates, diplomas,
   internship agreements, invoices and receipts.
8. Under **Access**, tick for each profile whether it **consults and
   files** this type, and whether it **validates** it. Whoever validates a
   type necessarily consults it too: the first box ticks itself.
9. Click **Save**.

::: tip Reserving a type for administrators
To reserve a type for the school's leadership, tick no profile: only
administrators will have access to it.
:::

## Delete a type

A type with no document filed under it can be deleted with **Delete**. If
it is a type that shows another module's files (report cards, for example),
those files no longer appear in the files; they stay untouched in their
module. As
soon as a document is filed there, the button disappears: the type stays in
the catalogue, and you can only rename it or change its access.
