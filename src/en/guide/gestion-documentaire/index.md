---
layout: doc
---

# Document management

The **Document management** module files the school's documents in
files: one per student, one per employee, and the school's own (minutes,
regulations…). Each document is filed under a **type** of the catalogue
(birth certificate, medical record, employment contract…), which decides
who may consult it and who may validate it.

The **Document manager** is the profile dedicated to this module: they
file, sort and check documents, and keep the catalogue of types. They have
no access to any academic feature (grades, report cards, payments). Other
profiles use the module too, each for the types that concern them: the
office for enrollment papers, the infirmary for medical records, the
cashier for invoices and receipts. The pages of the **Documents** space
only show each person the types open to them.

::: info Licensed module
The **Documents** space only appears if the school has activated the
Document management module.
:::

## The Documents page

The **Documents** page brings two things together:

- **Open a file**: type the name of a student or an employee, then click
  **Search**. Click a person to open their file. Only people for whom you
  can consult at least one document type are offered.
- **Filed documents**: the list of documents, filtered by default on those
  **To check** (submitted or being checked). Change the filter to see
  validated, rejected or all documents; pick a type to see only that one.
  Each row shows the type and the person concerned: click their name to
  open their file.

The **School documents** button opens the school's own file, when you
consult at least one type filed there.

## A person's file

The file lists, type by type, every document type you may consult for this
person, with the documents filed under each. A type with no document shows
**No document**: what is missing shows as plainly as what is there. The top
of the page says how many types still have no document.

An administrator also opens this file from a student's or an employee's
record, with the **Document file** button.

## File a document

1. In the file, click **File** next to the type concerned.
2. Choose the **File**: a PDF or an image (JPG, PNG, WebP), 10 MB at most.
3. If needed, fill in a **Title** (for example "Birth certificate
   no. 1234"), the **Date of the document** (the one it carries) and
   **Notes**.
4. If you may validate this type, the **I have checked it: validate it
   now** box is ticked: the document is validated as soon as it is filed.
   This is the usual case at the desk, with the original in front of you.
   Untick it to leave it to be checked.
5. Click **File**.

## Check a document

A filed document goes through these statuses:

| Status            | What it means                                                               |
| ----------------- | --------------------------------------------------------------------------- |
| **Submitted**     | The document is waiting to be checked                                       |
| **Being checked** | Someone has taken it in hand: others see it is in progress                  |
| **Validated**     | The document has been checked and accepted                                  |
| **Rejected**      | The document was refused; the reason is shown, so it can be handed in again |

If you may validate the type, each pending document offers:

- **Open** — shows the file in a new tab;
- **Take in hand** — moves it to **Being checked** under your name;
- **Validate** — accepts it;
- **Reject** — refuses it: give the **reason for rejection**, which is
  required. It stays displayed under the document.

Once validated or rejected, a document's status no longer changes. To
replace a rejected document, file a new one.

## Delete a document

An administrator or the document manager may delete any document they
consult. Whoever filed a document may withdraw it as long as nobody has
taken it in hand. Deleting removes the file for good and is recorded in the
activity log.

## Confidential documents

A type marked **Confidential** (the medical record and the employment
contract at the start) is only open to the profiles its type names. Each
time someone opens one of its documents, ERA records it in the
[activity log](/en/guide/admin/demo-et-journal) with the **Viewed** action,
the person and the address they opened it from.

To set who consults and validates each type, see
[Document types](/en/guide/gestion-documentaire/types-de-documents).
