---
title: "Changelog (June 26, 2026)"
date: 2026-06-26
kind: digest
tags: [Improvements, Fixes]
---

Eleven fixes following the navigation redesign, plus submission notifications on every task list, library content counts, phone number editing, and check-in duplication.

### Improvements

- The Submission Notifications button now appears on all task lists, so you can choose who gets alerted when one is submitted — previously it was only available to organizations that also had audits turned on.
- Content counts are back in your training library — the summary counts have returned on the All tab, each library page now shows its own count next to the page title, and you can create your first folder straight from the empty Folders view.
- Anyone can now add or change their own phone number from their profile in the mobile app, and admins and managers who can edit team members can update someone else's phone number from that person's profile.
- Check-ins can now be duplicated from the training library, the same way courses, modules and resources already could.

### Bug fixes

- Fixed several actions and pages that had gone missing from the web app after the new navigation
  launched — bulk Publish and Duplicate on the training library table, the content type filter on
  the library's All tab, the "Used in" card on a resource, the Access page under Training, and
  course settings, Export PDF and remove-from-module when opening a course inside a module.
- Fixed task lists and audits not appearing inside a folder, which made folders look emptier than
  they were.
- Fixed several problems in the content builder — screens could not be dragged into a new order,
  clicking the background reset your place back to the first screen, title screens showed an icon
  instead of their position and restarted the numbering after them, and the menu for adding context
  to an AI request opened in the wrong place or was cut off.
- Fixed two problems with Opus Docs on the web — a QR code turned on for a document never appeared
  in the document itself, and on longer documents a floating control covered the text at the bottom
  of the page.
- Fixed listening to content in the mobile app — Opus Docs read aloud with no audio, overlapping
  narration or lines read twice and out of order, the text was unreadable when the phone was in dark
  mode on Android, and course narration could keep playing or double up after leaving a course
  part-way through.
- Fixed sorting on the Sexual Harassment Prevention Training assignments report. The Role, Version,
  Type and Start Date columns either did nothing or stopped working after the first click.
- Fixed the Course Feedback report loading as an empty page for organizations with a large amount of
  feedback.
- Fixed push notifications for a message showing placeholder text such as the recipient's name in
  its raw form instead of filling in their details, the way the message already appeared in the app.
- Fixed managers being offered Region, Brand and Franchise when inviting someone, even though only
  admins can set them — the invite quietly failed to save those fields. They are now hidden unless
  you can use them.
- Fixed two problems with imports from your HR system — a file with more than one row for the same
  employee kept only the last row, so other roles and locations for that person were dropped, and
  the filter for whether an employee is linked to an Opus account opened but did nothing when you
  picked an option.
- Fixed the printable version of a check-in or course reserving a blank first page.
