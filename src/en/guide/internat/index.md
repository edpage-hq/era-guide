---
layout: doc
---

# Boarding

As the boarding manager, you have two responsibilities in ERA: managing
beds (creating and editing them, and assigning a boarding student to
each) and recording boarding attendance every day, both in the evening
and in the morning. The left-hand menu gives you access to two pages,
in the "Student services" group: **Boarding beds** and **Boarding
attendance**.

## Managing beds

The **Boarding beds** page lists every bed in the boarding house, with
its site, room, bed, and the student occupying it (or "Unassigned" if
it's free). You can filter the list by site using the dropdown at the top
of the page, or search for a bed by room or bed code. Click a row to open
a summary panel showing the site and the occupant.

### Creating a bed

1. Click **New bed** at the top of the **Boarding beds** page.
2. Choose the **Site** this bed belongs to.
3. Fill in the **Room** (the room code) and the **Bed** (the bed code
   within that room).
4. If a boarding student should occupy this bed as soon as it's created,
   select them in the **Occupant** field. You can leave this field empty
   and assign a student later.
5. Click **Save**.

Only students who don't already have a bed appear in the **Occupant**
list (plus, on the edit page, the student already assigned to that bed).

### Editing a bed or reassigning its occupant

1. From the **Boarding beds** page, click **Edit** on the row for the
   bed in question.
2. Update the site, room, bed, or occupant as needed. To free up a bed,
   choose **Unassigned** again in the **Occupant** field; to assign a
   different student, select them from the list.
3. Click **Save changes**.

### Deleting a bed

From the **Boarding beds** page, click **Delete** on the row for the
bed in question, then confirm in the dialog that appears. An occupied bed
cannot be deleted: first free its occupant (by editing the bed and
setting **Occupant** back to "Unassigned") before deleting it.

## Recording boarding attendance

The **Boarding attendance** page lets you record, for every student who
already has a bed assigned, whether they are present or absent — in the
evening or in the morning. Only students who already have a bed assigned
(see "Managing beds" above) appear in this list; if the list is empty, no
bed has been assigned yet.

1. Open the **Boarding attendance** page.
2. Choose the relevant **date** with the date picker at the top of the
   page.
3. Choose the **period**: **Evening** or **Morning**. Changing the date
   or the period automatically reloads the list with any attendance
   already recorded for that choice.
4. For each student in the list (shown with their site, room, and bed),
   tap **Present** or **Absent**.
5. Once every row has been checked, click **Save**.

::: tip A roll call built for phones
Each student has a **Present** / **Absent** switch; everyone starts as
**Present**, and the **Everyone present** button resets the whole list to that
status. The counters above the list update on every tap, and the bottom
bar shows "Unsaved changes" until you click **Save** — leaving the page
or changing the date at that point asks for confirmation. Attendance
can't be recorded for a future date.
:::

You can go back to a date you've already recorded at any time to correct
a status: the values already saved for that date and period are
pre-filled.
