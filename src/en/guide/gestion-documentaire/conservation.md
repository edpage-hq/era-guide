---
layout: doc
---

# Retention

Each document type has a **retention period**, set in the
[Document types](/en/guide/gestion-documentaire/types-de-documents). Once
that period is over, ERA **archives** the document on its own. It
**never destroys** it on its own: destruction is proposed, then approved
by an administrator.

## When a document is archived

The period is counted from the **date of the document** (the one it
carries) or, failing that, the day it was filed. For example, an
enrolment file dated 2 September 2019 and kept 5 years is archived from
2 September 2024.

ERA checks every night for documents to archive. Only **validated** or
**rejected** documents are archived: a document still waiting to be
checked stays where it is. A type with no retention period keeps its
documents without limit.

An archived document stays in its file, with the **Archived** label: it
opens as before. It can no longer be removed with the **Delete** button,
though, even by an administrator: it leaves the file only by an approved
destruction.

## The Retention screen

The **Documents** → **Retention** screen is for an administrator and the
document manager. It shows:

- how many documents will be archived in the **next 90 days**;
- the **Destruction proposed** list: the documents someone has proposed
  to destroy, with their name and the date;
- the **Archived** list: archived documents nobody has proposed to
  destroy yet.

Each row shows the type and the person concerned, and offers **Open** to
read the document again before deciding.

## Propose a destruction

1. Under **Archived**, tick the documents to destroy, or **Select all**.
2. Click **Propose destruction**.

The documents move to **Destruction proposed**, with a label of the same
name in their file. The administrators' dashboard shows how many
destructions are waiting for their approval.

## Approve or refuse a destruction

Only an administrator approves a destruction.

1. Under **Destruction proposed**, tick the documents.
2. Click **Destroy**, then confirm. The documents and their files are
   deleted for good.

To refuse, click **Keep**: the documents stay archived, and can be
proposed again later. The document manager can also withdraw a proposal
of their own this way.

Every step (archiving, proposal, destruction, refusal) is recorded in the
[activity log](/en/guide/admin/demo-et-journal), with the person who took
it.
