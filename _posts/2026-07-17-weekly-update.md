---
title: "Week of July 13, 2026"
date: 2026-07-17
---

### New features

- **Recommendations** — every organization now has a Recommendations page that turns the guest
  feedback you collect into specific training actions. Opus groups recurring comments into themes,
  recommends what to do about each one, and lets you turn a recommendation straight into a course.
  New reviews are now analyzed within minutes of arriving instead of waiting for the weekly run, and
  automatic syncing is included for everyone.
- **Course generation follows your outline** — when you build an outline screen by screen and then
  generate the course, Opus now reproduces what you wrote rather than rewriting it, and treats the
  instructions in your brief as requirements instead of suggestions.
- **Saved views on the Messages report** — you can now save a set of filters on the Messages report
  and come back to it later, the same way you already can on the completion reports.

### Bug fixes

- Fixed two problems with the Food Handler exam. Trainees in a few states and counties were issued
  the general certificate instead of the one their jurisdiction requires, so the certificate was not
  valid where they work; and an exam that had been passed could still show as failed or awaiting a
  result.
- Fixed people being counted at locations where they do not actually work. Anyone attached to a
  location only through a region or franchise — an above-store manager, for example — was listed as
  a member of every location under it, which inflated headcounts in location filters and made
  reporting grids disagree with the totals shown above them. Location views now count only the
  people based there, so some of these numbers will be lower than they were last week. Selecting a
  region, brand or franchise now also includes the leaders who belong to that group, so content
  aimed at a region reaches its own team.
- Fixed merging two duplicate accounts discarding training history. When the account being merged
  away held the more complete record, its progress and compliance results could be lost. Opus now
  keeps the more complete record for each course, module, check-in and compliance requirement.
- Fixed photos attached to a step on a check-in or task list failing to save when the app resent
  them, which could leave the app unable to sync anything else the trainee had finished.
- Fixed several problems in reporting: the employee tenure and retention graph could disappear
  entirely, the completion grid stayed blank after you changed filters or chose a saved view until
  you refreshed the page, Course Feedback searches timed out for larger organizations, and the
  adoption figure in the program report used a target of zero for locations with no expected
  headcount.
- Fixed two problems for people using the app on Android: the Edit Profile screen had no save button
  at all, so a name change could not be saved, and links inside formatted content opened an outside
  browser and asked you to sign in again instead of opening in the app.
- Fixed two problems completing a check-in on the app: the pass or fail question could appear ahead
  of other questions instead of last, and tapping a button repeatedly while it was saving could
  submit the same thing twice.
- Fixed several problems bringing guest reviews into Opus: an import could report success and then
  quietly fail when a location name had an extra space, imports created large numbers of blank rows
  with no comment or rating, a single review with no author name stopped an entire organization's
  sync, the first sync after connecting a review source collected only that day's reviews instead of
  the history it was meant to, and the star rating trend chart drew a jagged line over an all-time
  range.
- Fixed Ask Opus in two places: the preview in settings never displayed an answer, and a question
  asked in another language could get the "not in the knowledge base" reply in English.
- Fixed mandatory training videos freezing partway through and needing a page refresh to continue.
- Fixed a document created from a PDF being renamed — the name you gave it was replaced with one
  Opus wrote.
- Fixed several smaller things: your own check-in appeared in your list of check-ins to facilitate,
  the due date picker in course settings offered a time that was never saved, the remove button on a
  selected piece of media sat behind the cover image where it could not be clicked, the region,
  brand and franchise detail pages lost their layout after the navigation redesign, and searching
  the CSV syncs list in your HR system settings returned an error while the Close buttons there
  dropped you on the general settings page.
