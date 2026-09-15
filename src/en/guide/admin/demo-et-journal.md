---
layout: doc
---

# Full demo and activity log

This page groups two administrator features that have nothing to do with
each other: activating a full, free demo of ERA, and reviewing the
history of actions taken in the application.

## Activate the full demo

**This feature only appears if your school is an Era Admission tenant
still on the free tier** — that is, a school using ERA only to manage its
admissions application queue, without having purchased a license for the
rest of the application yet. If your school already has an active
license (or is already in a demo period), you won't see this button.

When available, the offer appears on the **Dashboard**:

1. Click **Activate the demo**.
2. A dialog summarizes how many days every ERA pôle will be unlocked with
   no commitment.
3. Click **Activate demo** to confirm.

Once activated, a banner on the dashboard shows how many days are left,
then warns you as the end approaches. After that period, access switches
to read-only until you purchase a license.

## Review the activity log

**Activity Log** (in the menu's **Administration** group) is a history of who created,
updated, or deleted what in the application, and when.

You can filter the list by:

| Filter | Detail                                                      |
| ------ | ----------------------------------------------------------- |
| Actor  | search by the name or email of the person behind the action |
| Entity | the type of record involved (student, class, payment...)    |
| Action | Created, Updated, or Deleted                                |
| Date   | a "from" / "to" range                                       |

Click **View details** on a row to show, in a dialog, the technical
detail of the fields changed by that action.

One important limitation to know: changes to many-to-many relationships
(for example attaching a guardian to a student, or assigning a role to a
user) are **not** captured in this log — only the direct creation,
update, or deletion of a record appears here.
