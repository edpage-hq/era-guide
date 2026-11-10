---
layout: doc
---

# Fees and pricing

This section covers defining the amounts families owe (fee structures) and
the discounts you can grant on a case-by-case basis. Recording payments
themselves is the cashier's day-to-day job — you only step in here on
pricing and discounts.

## Fee structures

**School setup → Fee Structures** defines the list of fees owed by the
students of a site for an academic year. A structure applies to one of
three choices (**Applies to**):

- **The whole department**: every class of the department on that site;
- **A level**: every class of that level (for instance 6e);
- **A class**: a single class (for instance 6e A).

The most specific structure wins: a student is billed by their class's
structure, failing that their level's, failing that their department's. You
can therefore keep a department structure for the general case and add a
level or class structure only where the amounts differ. A student with no
matching structure at all has no amount calculated.

To create a fee structure:

1. Click **New fee structure**.
2. Choose the **Site**, the **Department**, and the **Academic year**.
3. Under **Applies to**, choose the whole department, a level or a class,
   then the level or class concerned.
4. Add one or more fee items with **Add a fee item**, filling in the
   fields below for each.
5. Click **Save**.

| Field    | Detail                                                                                                                                  |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Label    | e.g. "Tuition", "Cafeteria"                                                                                                             |
| Amount   | —                                                                                                                                       |
| Optional | check for a service to choose (cafeteria, transport…): the parent ticks it from their space, or the cash desk from the student's record |
| Category | General, Cafeteria, or Transport                                                                                                        |

Editing an existing fee structure lets you add, change, or remove items. A
structure already in use (a payment or a chosen service) can no longer
change its site, department, year or target: create a new one instead.
Deleting a fee structure also permanently deletes all its items.

::: info Optional services
When a level or class structure takes over from a department structure, the
optional services the students concerned already chose move to the new
structure if it has an equivalent service (same category and same label). A
service the new structure doesn't offer is removed.
:::

When a new year is prepared, level and class structures are copied like the
others; a class structure goes to the class of the same name on the same
site, and isn't copied if that class doesn't exist yet.

## Discounts

Discounts aren't managed on the fee structure itself, but on a specific
student's billing: **Finances → Billing**, search for the student, click
**View** to open their billing record.

On that screen, you alone (as an administrator — the cashier can only
record payments) can grant or remove a discount:

To grant a discount:

1. In the "Discounts" section, fill in the **Label** of the discount.
2. Choose the **Type**: Fixed amount or Percentage.
3. Fill in the matching **Value** and, optionally, a **Reason**.
4. Click **Grant discount**.

Each discount granted shows the name of the administrator who created it.
The **Delete** button next to a discount removes it permanently — the
student's outstanding balance is recalculated immediately.
