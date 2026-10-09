---
layout: doc
---

# Document templates

A **template** is a document the school writes once and then produces
for anyone: a certificate of enrolment, an employment certificate… When
it is produced, ERA fills in its fields from the person's record, lays it
out on the school's letterhead and files it in their file.

Templates are kept by an administrator or the document manager, from the
**Documents** space → **Templates**.

## Write a template

1. Click **New template**.
2. To start from a ready-made text, click **Start from an example**: ERA
   fills in a certificate of enrolment, which you adapt.
3. Give it a **Name**: it is also the title printed at the top of the
   document.
4. Choose the type it is **Filed under**. That type's file (student,
   employee or school) decides which fields are offered.
5. Write the **Text**. Leave a blank line between two paragraphs.
6. To insert a field, place the cursor, then click the field under
   **Insert a field**. It is written in braces, for example
   `{student.full_name}`.
7. Click **Save**.

The letterhead (the school's logo, name and contact details), the title
and the "The management" signature space are added on their own: do not
write them in the text.

If the text holds a field the type's file does not offer (an employee's
field in a student's certificate, a typo), ERA refuses to save and names
the field at fault.

### The fields

| Field                             | Filled in with                                         | Files    |
| --------------------------------- | ------------------------------------------------------ | -------- |
| School name                       | the application's name                                 | all      |
| School address                    | the address in **App settings** → **Receipt branding** | all      |
| Today's date                      | the date the document is produced                      | all      |
| School year                       | the current school year                                | all      |
| Full name, Last name, First names | the student's record                                   | student  |
| Date and place of birth           | the student's record                                   | student  |
| Registration number               | the student's registration number                      | student  |
| Class, Site                       | their enrolment for the current year                   | student  |
| Name, Position, Hire date, Site   | the employee's record                                  | employee |

Information missing from the record leaves a blank in the document:
complete the record before producing it.

## Produce a document

1. Open the person's file.
2. Click **Produce from a template**. The button only shows when a
   template exists for a type you may file in this file.
3. Choose the **Template**, then click **Produce**.

The document is filed at once in the file, under the template's type,
dated today. It is **validated** straight away if you may validate that
type; otherwise it waits to be checked like any filing. Its text can be
found by the search on the **Documents** page.

If the type is shared with families, the validated document also shows in
the family's and the student's portal.

## Edit or delete a template

**Edit** changes the text for the next documents produced; those already
produced do not change. **Delete** removes the template; documents
already produced stay in their files. Deleting a document type also
deletes its templates.
