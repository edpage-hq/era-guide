---
layout: doc
---

# Pilotage

The **Pilotage** page gives the school's figures — headcount, results,
attendance, finances — and lets you look at them as closely as you need:
a site, a level, a class. It opens from the **Direction** space of the menu,
or from **Home** for an administrator.

It is part of the **Pilotage** module, like the
[direction](/en/guide/direction/) profiles.

## Choosing what you look at

The **year** is the one chosen in the application header, as on the other
reading screens. The page adds three filters, from the broadest to the
finest:

1. the **site**;
2. the **level** (6e, 5e…);
3. the **class**.

Changing a filter clears the finer ones: choosing another site clears the
level and the class.

::: info Site director
A site director only sees their sites. If they run a single one, it is
already chosen and the site filter does not appear; its name shows under
the title. If they run several, they see them together, then site by site.
:::

## The figures

| Schooling          | Finances         |
| ------------------ | ---------------- |
| Students enrolled  | Amount due       |
| Average results    | Amount collected |
| Absence rate       | Recovery rate    |
| Boarding occupancy | Amount disbursed |
|                    | Net cash flow    |

They are the same indicators as on the
[dashboard](/en/guide/admin/tableau-de-bord), computed the same way.

**Expenses** and **boarding** belong to a site, not to a level or a class:
as soon as a level or a class is chosen, those figures read "—", and a line
under the indicators says why.

## Going one step down

The table under the figures details the chosen scope one step finer:

- the whole school → **by site**;
- a site → **by level**;
- a level → **by class**.

Click a row's name to go down: the filter updates and the table details the
next step. For a single class, there is nothing left to detail.

## Month by month

Two charts follow the year from the start of term to the current month:

- **money in and out** each month — money out disappears below a site, for
  the same reason as above;
- the **absence rate** each month, from the roll calls taken.

A chart with no data at all (for instance before the first roll calls) just
says so.

## Classes over capacity

The last section lists the students placed in a class that was already
full, within the chosen scope: the class and its site, the headcount
reached (`31/30`), whether it was an admission or a transfer, the
**reason** given, the student, who forced the assignment and the date. See
[Direction → Classes over capacity](/en/guide/direction/#classes-over-capacity).

## Exporting

**Export the spreadsheet** downloads a CSV file with the table shown and
the **Total** line of the chosen scope — the same filters as the page.
