---
title: "Bugs and small improvements (Week of Jul 3, 2026)"
date: 2026-07-03
kind: digest
tags: [Improvements, Fixes]
---

Seven fixes across publishing, task lists, and the dashboard, plus one-click PDF export for submissions.

### Improvements

- Submission details now have a single Export PDF button, and you can export a submission straight from the "..." menu on the All Submissions table without opening it first.

### Bug fixes

- Fixed taking a photo for a task list or check-in step on Android. On some phones the handover to
  the phone's own camera app could close Opus and lose what you had filled in so far. Photos for
  these steps are now taken inside the app, so your progress is kept.
- Fixed an alarming error message when publishing a course or module. Anyone without permission to
  manage automations saw "An unexpected error occurred while updating access" every time they
  published, even though the course or module had published successfully.
- Fixed archived locations being listed as "Missed" in the daily task list digest email, where they
  also counted against the on-time percentage shown in that email.
- Fixed the SCORM link missing from the Training navigation after the navigation redesign, for
  organizations that use SCORM training. The SCORM library can be reached from the navigation
  again.
- Fixed formatting an Opus Doc jumping you to the bottom of the document. Applying a heading or a
  list style from the toolbar moved your cursor and the page to the end instead of leaving you
  where you were writing.
- Fixed archiving a folder in your training library not finishing, which could leave a bulk archive
  of folders incomplete.
- Fixed long links overflowing the settings panel on a training resource instead of being shortened
  to fit.
