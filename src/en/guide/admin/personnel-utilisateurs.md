---
layout: doc
---

# Staff and user accounts

This section covers two distinct things that shouldn't be confused: the
**user account** (sign-in credentials + role, under **Users**) and the
**employee record** (position, site, contracts, in the **Staff**
group). A teacher, for example, needs both — an account to sign in,
a record for their position and contracts — but these are two separate
screens.

## Create a user account and assign a role

**Users** (in the menu's **Administration** group) lists every account in the school,
with a search by name/email, a filter by role, and each account's
verified/unverified and active/inactive status.

To create a user:

1. Click **New user**.
2. Fill in the **Name**, **Email address**, **Password**, and its
   confirmation.
3. Choose the **Role**: User, Admin, Teacher, Secretariat, Cashier,
   School life, Boarding manager, or Nurse.
4. Click **Create the user**.

From the list, each account offers:

- **Edit** — change the name, email, role, or set a new password (leave
  the field blank to keep the current one).
- **Activate** / **Deactivate** — deactivating an account signs it out
  everywhere immediately and blocks any new sign-in, without deleting the
  account; reactivating restores access.
- **Delete** — permanent and irreversible.
- **Export CSV** (top of the page) — exports the currently filtered list.

## Manage staff records and contracts

The **Employees** page (in the **Staff** group) lists employee records — position, site, hire
date, and status — distinct from user accounts.

To create an employee record:

1. Click **New employee**.
2. Fill in the "Person" section fields below.
3. Fill in the "Assignment" section fields below.
4. Click **Save**.

"Person" section:

| Field         | Detail                             |
| ------------- | ---------------------------------- |
| Staff account | chosen from existing user accounts |
| Position      | free text                          |

"Assignment" section:

| Field     | Detail                       |
| --------- | ---------------------------- |
| Site      | leave "Unassigned" if needed |
| Hire date | —                            |
| Status    | Active or Inactive           |

Deleting an employee record also permanently deletes its contracts.

### Contracts

From an employee's record (**Edit** in the list), the **Contracts**
section lists their contracts and lets you add one:

1. Click **New contract**.
2. Fill in the **Type** (Permanent, Fixed-term, or Internship), the
   **Start date**, the **End date** (optional), a **Document** to upload
   (PDF, JPG, or PNG), and free-text **Notes**.
3. Click **Save**.

Each listed contract then offers **View document** (if there is one) and
**Delete** (permanent, also deletes the document).

## Assign teachers to classes and subjects

**School setup → Teacher Assignments** is what authorizes a teacher to enter
grades or observations for a given class — without an assignment, they
have access to nothing.

To create an assignment:

1. Click **New assignment**.
2. Choose the **Teacher**, then the **Class**.
3. If the class belongs to a qualitative department (nursery/preschool,
   competency-based grading), the **Subject** field disappears — the
   teacher is assigned to the whole class. Otherwise, choose the
   **Subject** taught.
4. Click **Save**.

Deleting an assignment immediately removes the teacher's access to the
corresponding grade entry.

## Handle a staff transfer between sites

A staff transfer moves an employee from one site to another, subject to
approval by another administrator (never the one who submitted the
request).

**Requesting a transfer** (from the employee's record, "Site transfer"
section):

1. Click **Request transfer**.
2. Choose the **Destination site** and give a **Reason**.
3. Click **Submit request**.

Every other administrator in the school is then notified.

**Reviewing a request** — the **Staff → Staff transfers** section
lists requests, with a filter by status (Pending, Approved, Rejected).
Open a request via **Review** to see the employee, the origin and
destination sites, the reason, then:

- **Approve** — applies the transfer.
- **Reject** — opens a dialog asking for a mandatory rejection reason.

A request can also be handled directly from a link received via a
notification, which opens a simplified review screen with the same
**Approve** / **Reject** actions.
