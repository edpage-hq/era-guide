---
layout: doc
---

# Dashboard

The dashboard is the landing page for every signed-in account, but what it
shows depends on your role. For an administrator it also carries the
**management overview**: the school's figures as of the moment you open the
page.

That overview is a module in its own right. If it hasn't been licensed for
your school, you still land on the dashboard — just without the indicators
described below.

## What the figures cover

Every indicator is read for the **current academic year** — the one marked
as current in [School structure](/en/guide/admin/structure-etablissement).

If no year is marked as current, the dashboard says so instead of showing
figures: nothing can be computed until the reference year is set. That's
the first thing to check if the page looks empty at the start of a term.

## The indicators

| Indicator          | What it measures                                                                     |
| ------------------ | ------------------------------------------------------------------------------------ |
| Enrolled students  | Students actually enrolled for the current year                                      |
| Average results    | The school's overall average                                                         |
| Absence rate       | Absences as a share of the attendance actually recorded                              |
| Boarding occupancy | Assigned beds against existing beds. Blank — not 0% — for a site with no beds at all |
| Amount due         | Total billed to families for the year                                                |
| Amount collected   | What has actually been paid                                                          |
| Recovery rate      | Collected against due                                                                |
| Amount disbursed   | The school's approved expenses                                                       |
| Net cash flow      | Collected minus disbursed                                                            |

Two points that prevent misreadings:

- Only **confirmed** payments feed the collected amount. A mobile money
  payment that was started but never confirmed by the operator doesn't
  appear there, and so never inflates the recovery rate.
- The disbursed amount only counts **approved** expenses — an expense still
  awaiting approval isn't cash out yet. See
  [Expenses](/en/guide/caissier/depenses).

## Reading the figures site by site

Below the indicators, the **By site** block repeats the same measures for
each of the school's sites, so two campuses can be compared without
leaving the page. The **All sites** selector filters the whole dashboard
down to one site.

On a phone this table renders as one card per site rather than columns, to
stay readable.

## Exporting the figures

The **Export spreadsheet** button downloads every indicator, broken down by
site, as a spreadsheet file. That's the format to use for a board meeting
or a monthly report: the exported figures are exactly those on screen at
the time of the export.
