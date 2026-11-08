---
layout: doc
---

# Payroll

The **Staff → Payroll** page prepares the month's payslips. Only
administrators see it, and only if your licence includes the **Human
resources** module.

The payslip stays simple: a base salary, plus allowances, minus deductions,
all entered by hand. ERA does **not** compute social security
contributions or income tax: if you withhold them, add them as deductions,
with the amount your accountant worked out.

## Before the first payroll: the base salary

Every paid employee needs a **Monthly base salary** on their record (see
[Staff and user accounts](/en/guide/admin/personnel-utilisateurs#manage-staff-records-and-contracts)).
The field is optional: an employee without a base salary gets no payslip.

Under **Employees without a base salary**, the Payroll page lists the
active employees who lack this amount. **Open the employee files** leads to
the list to fill it in.

## Preparing the month's payroll

1. Under **Prepare a payroll**, choose the **Month** (the month after the
   latest payroll is suggested).
2. Click **Prepare the payroll**.

ERA creates a payslip for each **active** employee with a base salary. The
payslip keeps the employee's name, position and site at that moment, and
their current base salary.

The allowances and deductions on each employee's latest payslip are
**carried over**: a monthly transport allowance, or an advance paid back
over several months, does not have to be typed again. Remove the ones that
no longer apply this month.

A month can only be prepared once. To start over, delete the draft (see
below).

## Adjusting the payslips

While the payroll is a **Draft**, each row of the table has an **Edit**
button:

1. If needed, correct this month's **Base salary**.
2. Click **Add an allowance** or **Add a deduction**, then enter the
   **Label** (for example "Housing allowance", "Salary advance") and the
   **Amount**, in FCFA.
3. Remove a line with the bin icon.
4. Check the **Net pay** shown at the bottom, then click **Save**.

Net pay is the base salary, plus the allowances, minus the deductions. The
table shows, for each employee, the base salary, allowances, deductions and
net, with the month's total.

Changing a payslip's base salary does not change the employee's record: for
a lasting raise, update the record too.

## Closing the payroll

Once the salaries are paid, click **Close the payroll** and confirm. The
payroll becomes **Closed**:

- the payslips can no longer be changed;
- each employee can download theirs from **My payslips** (see below).

To fix a mistake after closing, click **Reopen**: the payslips can be
edited again and disappear from the employees' space until the next
closing.

A draft payroll can also be **deleted**, with all its payslips. A closed
payroll must be reopened first.

## Printing and exporting

From the month's payroll:

| Button                   | Content                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| All payslips (PDF)       | one payslip per page, to print and have signed                                               |
| PDF (on a row)           | a single employee's payslip                                                                  |
| Payroll statement (CSV)  | one row per employee: position, site, base salary, allowances, gross, deductions, net, total |
| Accounting entries (CSV) | the month's payroll entries, to bring into your accounting software                          |

While the payroll is a draft, the PDF payslips are marked "Brouillon"
(draft).

### Accounting entries

Entries are dated the last day of the month, in the **PA** journal. For
each employee:

- net pay: debit **661100** (staff pay), credit **422000** (staff, pay
  due);
- deductions, if any: debit **661100**, credit **428000** (staff, accrued
  charges).

These accounts follow the SYSCOHADA chart. Have your accountant confirm
them: to change them, contact edPage.

## My payslips (employees)

Any staff member with an employee record finds their payslips under **Staff
→ My payslips**: the month, gross, deductions and net, with **Download** for
the PDF.

Only **closed** months appear there. An employee only sees their own
payslips.

If the account is not linked to an employee record, the page says so: the
administration must create the record.
