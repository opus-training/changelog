---
title: "Week of July 20, 2026"
date: 2026-07-24
---

### New features

- **Follow-up tasks** — when an audit turns up something that needs fixing, you can now track the fix
  instead of chasing it by hand. Each follow-up task has an owner, a due date and a status that moves
  from not started, through in progress and ready for review, to completed, and you can require a
  photo as proof before it is signed off. A new Tasks page lists everything open across your
  locations, and each task has its own page with comments, mentions and a full history of what
  happened. Anything you already had open in the previous remediation flow has been carried over,
  with its comments and history intact. Follow-up tasks are available to organizations using audits.
- **Audits and tasks on the app** — the app's home screen is reorganized into clear sections for
  training, tasks and what someone was recently working on, so people can see what they owe at a
  glance. Audits open with their sections collapsed, which makes a long audit much easier to work
  through, and the audit detail screen has been redesigned.
- **A refreshed look for the admin dashboard** — text, buttons, tabs and status colors across the
  dashboard now come from a single design system. Pages are more consistent and more compact — page
  headings in particular are noticeably smaller — with no change to how anything works. Training
  screens that learners see are unchanged.
- **Photos from your camera roll** — when a check-in, task list or audit asks someone for a photo or
  video, they can now pick one they already have instead of only taking a new one on the spot.
- **Filter Recommendations by location and brand** — the Recommendations page now has location and
  brand filters, so you can look at what guests are saying about one part of the business at a time.

### Bug fixes

- Fixed courses that could stay stuck just short of complete. When the app and Opus disagreed about
  how many attempts a learner had made on a question, the course could sit below 100% indefinitely —
  learners retried with no effect and admins were completing courses by hand. Opus now finishes the
  question itself once the attempt limit is reached, and an affected course completes on the
  learner's next attempt.
- Fixed republishing a course failing outright. A course that was already published could fail to
  publish with an error and then fail again on every retry. This showed up most often when
  publishing a module that several courses belonged to.
- Fixed the weekly Recommendations run not producing anything. Every organization using guest
  feedback began its run at the same moment on Monday morning, which overloaded the run and meant no
  recommendations came out that week. The work is now spread across several hours.
- Fixed video clips trimmed in Opus being published without captions. Clips edited with the trim
  tool were uploaded in a format the captioning step did not recognize, so they went out with no
  subtitles at all; newly trimmed clips are captioned again.
- Fixed two problems in reporting: the scheduled completion tab showed "Error loading data" and could
  not be searched, and the 30-day comparison on the adoption figure measured against zero rather than
  your real numbers, so it always claimed an increase.
- Fixed duplicate progress being recorded when a learner moved to the next screen in a course.
- Fixed the exported PDF of a check-in submission having blank gaps and notes that ran off the page.
- Fixed two problems connecting to your HR system: the Close button dropped you back at the start of
  the setup wizard with no way out, and organizations part-way through setup had no button to upload
  a CSV.
- Fixed text in courses being cut off partway through a line on Android.
- Fixed the app losing your place when you swiped back — on a check-in you had delegated, on a file,
  and when leaving a screen partway through.
- Fixed several smaller things: a linked Opus Doc in the course builder could not be clicked;
  searching in the assign-to picker kept the text from the previous tab and matched too loosely; sort
  arrows on search results implied an ordering that was not applied; typing a number range into a
  trigger dropped decimal points and minus signs; the menu on a course screen was clipped in a narrow
  window; title screens were included in the exported question responses; guest feedback connections
  were listed as "Unknown"; custom reporting tables are now sorted alphabetically with "Create new
  table" at the top; submission exports now show who a check-in was for; the app's bottom tab labels
  are translated; opening a screen from the course outline in preview opened the one next to it; and
  some documents created from an uploaded file quietly failed to convert and kept retrying.
