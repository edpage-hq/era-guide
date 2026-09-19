---
layout: doc
---

# Backups

A backup is a copy of everything your school has recorded in ERA:
students, families, grades, payments, attendance, infirmary visits. It is
what lets you go back if something goes wrong.

The page is at **Admin → Backups**, and only administrators see it.

::: info Not there for you?
This page only exists when your school is the sole occupant of its
installation. Schools hosted by edPage share a server, where one backup
would cover every school's data: yours are taken by edPage rather than
from your own space.
:::

## Every night, with nothing to do

ERA takes an automatic backup every night. The most recent ones are kept
and the oldest go on their own, so the server never fills up. How many are
kept is shown at the top of the page.

This is the one that matters most: it covers everything nobody thought to
ask for a backup about.

## Asking for one yourself

**Back up now** takes one straight away. It is the reflex to have
**before anything delicate**: preparing a new school year, a bulk
re-enrollment, a large deletion.

The backup is prepared in the background and appears in the list as soon
as it is ready, usually within a minute — the page updates itself, there
is no need to reload it.

Two refusals are possible, both normal:

- **A backup is already being prepared.** Wait for it to finish.
- **A backup was made less than fifteen minutes ago.** It is still good:
  use that one.

## Downloading it

**Download** hands you the file. ERA **asks for your password again**
first: the file holds every record the school has, and an open session
left unattended is not enough to obtain it.

Every download is written to the activity log, with who did it and when.
The date of the last download is also shown in the list.

::: warning The file needs the same care as the rest
Once on your computer it is no longer protected by ERA's passwords. Keep
it the way you would keep the school's paper register: not in your
downloads folder, not on a USB stick lying about, not attached to an
email.
:::

## What the archive holds — and what it does not

It holds **your data**: everything entered into ERA.

It does **not** hold the application's technical keys, which stay on the
server. That is deliberate: those keys and your data together in one
downloadable file would be far more dangerous if the file were ever lost.

In practice: if the server were lost and everything had to be rebuilt from
a downloaded archive, a few technical settings would need redoing —
two-factor authentication in particular, which the people using it would
set up again. Your data itself would be intact.

## Restoring

**Restoring is deliberately not done from this page.** A database cannot
be replaced while the application is running on it, and if the operation
failed, the tool that should warn you is the one you just interrupted.

If you need to go back to a backup, contact edPage with the date of the
one you want. It is done on the server, with the site closed for as long
as it takes.

## Deleting a backup

**Delete** erases the archive from the server for good. Normally there is
nothing to do: the oldest ones go by themselves.
