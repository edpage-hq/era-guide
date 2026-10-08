---
layout: doc
---

# Higher education: programmes, curricula and promotions

If your school awards higher education degrees (bachelor, master,
doctorate), ERA organises them along the LMD system: **programmes**, taught
at some **levels** (L1, L2, L3…), whose **curriculum** spreads credits
across **teaching units (UE)** made of **course elements (EC)**.

The space opens from **Higher ed. → Programmes**. It appears when your
licence includes higher education.

## Before you start

Programmes live in a **department of type "University"**, with its levels.
Create them first in school setup:

1. **School setup → Departments**: a _University_ department, for instance
   "Faculty of Science".
2. **School setup → Levels**: its levels, in order (L1, L2, L3, M1, M2).

## Creating a programme

From **Programmes**, the **New programme** button asks for:

- the **department** and the programme's **name**, with an optional code
  ("INFO");
- the **degree**: bachelor, master or doctorate;
- the **rhythm**: semesters by default, terms or yearly;
- the **credits a year**, 60 by default. They are shared equally between
  periods: 30 a semester on semesters;
- the **levels taught**: L1 to L3 for a bachelor, L3 alone for a
  professional bachelor;
- its **programme heads**.

The rhythm and department can no longer change once the curriculum has
started, and a programme that already has a curriculum or promotions cannot
be deleted.

## Programme heads

A programme head maintains **their** programme's curriculum, and that one
only. It is not a separate role: a teacher or staff member keeps their usual
role and also gets the **Higher ed.** space, limited to the programmes they
head. Creating and editing programmes stays with the administrator.

## Building the curriculum

A programme's **Curriculum** button opens its curriculum for one academic
year, chosen at the top of the page. It is laid out level by level, then
period by period.

1. **Add a unit** in the chosen period: a name, an optional code, and
   whether it is **elective** (offered as a choice).
2. In the unit, **Add an element**: its name, its **credits**, its
   **coefficient** (equal to the credits by default) and its lecture,
   tutorial and practical hours.

Credits are carried by the elements: a unit's credits are the sum of its
elements', so the two can never disagree.

An **elective** unit is a choice, among a few or freely within the
period's offer: its credits **complete** the mandatory units' up to the
period's total. With 24 mandatory credits, each student picks 6 credits of
electives to reach 30.

::: tip The credits counter
Each period shows its credits against what it should carry. Without
electives, for instance **28 / 30 credits**. With electives,
**24 / 30 mandatory credits**, followed by what is left to complete and the
credits on offer: "6 to complete with electives, out of 12 credits on
offer". The counter turns green when the offer can add up.
:::

The arrows reorder a period's units and a unit's elements.

## One curriculum per year

Each academic year has its own curriculum. Changing this year's never
changes what an earlier promotion followed.

A new year starts empty. ERA then offers to **start from the previous
year's curriculum** in one click: it is copied as it was, and you adjust it.
The old one stays untouched, and a year that already has a curriculum is
never overwritten.

When a school year is **closed**, its curriculum is too: it can still be
read but no longer changed.

## Promotions

A **promotion** (for instance "L1 Computing 2026-2027") is a class of a
university department. When you create a class in such a department, ERA
asks for the **programme** it follows, then its **level**, chosen among the
programme's.

A promotion has no bulletins, no year-end decisions and no bulk
re-enrolment: those school screens leave it out. Its students move from
one year to the next from the programme jury's decisions (see
[Moving up to next year](#moving-up-to-next-year)).

Students join it through an [application](/en/guide/secretariat/candidatures#a-university-application)
naming the programme and the level.

## Selective admission

A programme can admit on application: medicine, engineering schools,
masters with limited capacity. On its form, tick **Selective admission**,
then:

- set the **places per entry level**, offered every year (leave empty not
  to limit a level);
- name the **admission committee**. Like programme heads, its members keep
  their usual role and also get **Higher education → Admissions**, limited
  to the programmes they sit on.

Applications to that programme then go before the committee before any
enrolment. The form warns the candidate their application will be
reviewed.

### Deciding on applications

**Higher education → Admissions** lists the selective programmes, level by
level: places taken, applications to review, waitlist, for the year chosen
at the top of the page. The dashboard also tells committee members what is
waiting for them.

A level opens the committee's desk. Applications to review come first, in
the order they arrived, then the admitted, the waitlist in the order of
your decisions, the enrolled and the rejected. Attachments open from the
candidate's row.

The **Decide** button offers:

- **Admit**: the candidate takes a place. Once all the level's places are
  taken, ERA refuses the admission: waitlist the candidate or raise the
  number of places;
- **Waitlist**;
- **Reject**, with a reason;
- **Back to review**.

The candidate is told by email when you admit, waitlist or reject them (at
their address, or their guardians' if they gave none). The reason for a
rejection is not passed on.

An optional note goes with the decision; the secretariat sees it, the
candidate does not. A decision can be changed until enrolment: if an
admitted candidate withdraws, reject them with "withdrawn" as the reason
and admit the first one on the waitlist.

The secretariat then enrols the admitted into a promotion of the
programme, level and year applied for.

## Pedagogical registration

A programme's **Promotions** button lists its promotions for the chosen
year, with their headcount. A promotion whose level has no curriculum yet
for that year is flagged.

**Pedagogical registration** opens a promotion's page:

- at the top, its units period by period, mandatory and elective;
- below, its students, with their credits for each period and the elective
  units they chose.

Every student takes **all the mandatory units** of their level: nothing to
enter for them, and a unit added to the curriculum applies to the whole
promotion. Their **elective units** are chosen with the **Electives**
button on their row: tick the ones they take, then save. They complete each
period's credits: the window shows what is left to choose, and ERA refuses
a choice that goes past the total. In the list, a complete period shows in
green, for instance **30 / 30 credits**.

The administrator and the programme's heads keep these registrations. Once
the year is closed, they no longer change.

## Validation rules

Each programme has its own rules, in the **Validation rules** section of
its form. By default, the ones common in the CAMES area:

| Rule                          | Default             | What it decides                                                      |
| ----------------------------- | ------------------- | -------------------------------------------------------------------- |
| Continuous assessment share   | 40%                 | An element's mark: continuous assessment and exam weighted           |
| Pass mark                     | 10/20               | A unit is validated when its average reaches it                      |
| Eliminatory mark              | none                | An element below it keeps its unit from validating, even compensated |
| Compensation between units    | within the semester | A high enough period (or year) average validates the units below it  |
| Compensation floor            | none                | A unit below it is never compensated                                 |
| After the retake              | the better mark     | The retake mark, the better of the two, or the retake capped         |
| Credits to move up with debts | all                 | Below it, the proposal is to repeat                                  |

A unit's average weights its elements by their coefficients; a period's or
the year's weights the units by their credits. A validated or compensated
unit earns its credits.

## Teaching and marks

A promotion's **Teaching and marks** button lists its elements, period by
period. Pick each one's teacher, then **Save teachers**: they find their
sheets under **Higher education → Course element marks** (see
[Course element marks](/en/guide/enseignant/notes-superieur)). The
programme heads and the administrator can open every sheet too, first
session and retake alike.

## Results

A promotion's **Results** button gives, for each student, each period's
and the year's average and credits, with what the rules propose:
**Admitted**, **Admitted with debts** or **Repeats**. While a mark is
missing, the student stays "Marks incomplete".

Open a student to see their units: average, credits and status
(validated, compensated, not validated), with each element's mark and,
after a retake, the first session's.

These results are worked out again with every mark entered. The decision
rests with the programme's jury. Until the first session has been
deliberated, a student short of credits is proposed **to the retake**.

## Deliberations

The **jury** is named on the programme's form. Like programme heads, its
members keep their usual role and also get **Higher education →
Deliberations**, which lists their programmes' promotions and where each
session stands: to deliberate, in progress, published.

The jury deliberates twice: after the **first session**, then after the
**retake**, which opens only once the first deliberation is closed.

For each student, the page gives the year's average and credits and the
decision the rules propose. The **Decide** button lets the jury:

- follow the proposal, or set another decision: **Admitted**, **To the
  retake** or **Excluded** after the first session; **Admitted**,
  **Admitted with debts**, **Repeats** or **Excluded** after the retake;
- add **jury points** to a unit: they are added to its average, up to 20,
  before it is judged, but lift no eliminatory mark;
- leave a note.

The retake starts from the jury points given after the first session.

### Close and publish

**Close and publish** publishes the decisions with the results they rest
on. Without a jury decision, the proposal is published; a student with
missing marks needs a decision first. Closing:

- freezes the session's marks: they can no longer be changed;
- tells every student with an account, by email and in their
  notifications;
- shows their results in their space, under **My results**.

Only the administrator can reopen a deliberation (the retake's before the
first session's), and not at all once students of the promotion are
enrolled in the next year. Students keep the published results until the next
closing.

### Transcripts

Once the deliberation is closed, **Transcripts (PDF)** prints every
student's transcript in one document, a page each. For a single student,
open their row, then **Transcript**. The administrator, the programme's
heads and its jury members can print them.

The transcript shows what the jury published, without recomputing
anything:

- the units semester by semester, numbered across the whole cycle (a
  second year shows semesters 3 and 4);
- each element's mark, then each unit's average, credits and result:
  validated, compensated, earned or not validated;
- each semester's and the year's average and credits;
- the honour: Passable from the programme's pass mark, Assez bien from
  12, Bien from 14, Très bien from 16;
- the jury's decision, and the debts from earlier years.

A transcript names the session it comes from. After the retake, print the
retake session's. A reopened deliberation prints no transcript until it is
closed again.

## Moving up to next year

Once the jury has deliberated, a promotion's **Moving up** button enrols
its students in next year's promotion. Prepare that year first: its
promotions, and its curriculum copied from the current year.

Choose the year to move into. The page sorts the students by the jury's
**final decision**: the retake's, or the first session's when it settled
the year (admitted or excluded).

- **Admitted** and **admitted with debts**: into a promotion of the
  programme's next level. Each student's debts are listed.
- **Repeating**: into a promotion of the same level.
- **Completed the programme**: students admitted at the last level; they
  get their [certificate of completion](#graduates). They
  are not re-enrolled. A student admitted with debts at the last level
  stays there to clear them.
- **Excluded**: not re-enrolled.
- Students **still waiting** for the retake or the jury are flagged, with a
  link to the deliberations.

For each group, choose the promotion to enrol into, on the same site: when
there is only one, it is already chosen. Then click **Enrol**. As for
school classes, unpaid fees are flagged without blocking, and a full
promotion asks for your approval.

What the year leaves follows the student:

- a **repeating student keeps the units already validated or
  compensated**. They show as **Earned** in their results, count with their
  average and credits, and leave their mark sheets;
- a student **admitted with debts** takes along the units still to
  validate;
- electives are chosen again, except the ones already earned.

ERA finds each unit in the new year's curriculum by its code, or else by
its name. The **Pedagogical registration** page shows each student's
earned units and debts under their name; a unit missing from the new
curriculum is flagged "not in the curriculum".

You can run it again safely: a student already enrolled in the target year
is never moved. Once students are enrolled, the promotion's deliberations
can no longer be reopened.

### Clearing debts

A student who owes a unit sits it again with the lower level's promotion,
on their site: they appear on the mark sheets of that unit's elements, at
the first session and at the retake, flagged **Debt** with their own
promotion's name. Their marks are entered like the others'.

Each debt is judged alone, on its own average: no compensation validates
it. It counts neither in the current year's average nor in its credits,
and shows under the units in **Results** and **Deliberations**, under
"Debts from earlier years".

As long as a debt is not validated, the rules do not propose
**Admitted**, even with every credit of the year: **To the retake** after
the first session, **Admitted with debts** after the retake. The jury
decides as it sees fit. At the next move up, a validated debt is cleared;
a debt still owed follows the student, whatever the decision.

## Graduates {#graduates}

In a promotion of the programme's final year, the **Graduates** button
lists the students the jury admitted, at the first session or the retake.
A student admitted with debts is not listed: they must clear them first.

The issue button (for example **Issue 3 certificates**) gives each of them a certificate of completion,
numbered per degree and per year (`LIC-2027-2028-0001`). It shows:

- the degree and the programme, and the cycle's credits (the programme's
  annual credits for each of its years);
- the cycle's average: the average of the student's years in the
  programme, one per level (the latest, if they repeated), weighted by
  their credits. A student who joined during the cycle is averaged on the
  years taken in the programme;
- that average's honour, and the date of the jury's decision.

The certificate stands for the degree until the diploma is issued. Print
them all with **Print certificates (PDF)**, or one by one. Students also
download theirs from their space. The administrator and the programme's
heads issue and print certificates.

While a certificate is issued, the promotion's deliberations can no
longer be reopened. To correct a decision, the administrator first
cancels the certificate: its number is never given again, and a new
certificate takes the next number.
