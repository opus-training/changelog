---
title: "Bugs and small improvements (Week of Jun 12, 2026)"
date: 2026-06-12
kind: digest
tags: [Improvements, Fixes]
---

Thirteen fixes across compliance, reporting, and imports, plus conflict warnings on invite imports.

### Improvements

- Invite import previews now flag rows that clash with someone already in your organization — such as the same phone number under a different email address — with a link to that person's profile, and call out rows that will reactivate a previously deactivated account, instead of failing quietly once the import is running.

### Bug fixes

- Fixed team members getting credit toward a new compliance course from training they had completed
  in an earlier certification cycle that has since expired, which could make a required refresher
  look partly finished before anyone had started it. Affected assignments have been corrected
  automatically.
- Fixed courses stored inside a module never opening — anyone who could open the module saw an
  endless loading spinner when they tapped a course within it, unless that course had also been
  shared with them directly. Access to a module now always includes the content inside it.
- Fixed completion reports failing to load entirely for organizations where someone with assigned
  training did not belong to any location.
- Fixed the Role and Location columns on the All Compliance report ignoring clicks, so the report can
  now be sorted by either one.
- Fixed ordering questions in a knowledge check showing the answer back in the wrong sequence after
  it was submitted, both for the trainee and on the views where an admin reviews the response.
- Fixed two problems with resources converted between PDFs and Opus Docs — replacing the file on a
  resource that had been converted back to a PDF silently did nothing, and the conversion status now
  updates on its own instead of needing a manual page refresh to move from "Converting" to finished.
- Fixed bulk certificate and assignment imports failing with an unexplained error when the file
  contained duplicate rows. Duplicates are now caught and explained in the preview.
- Fixed food handler exam invitations failing for people whose email address contains an apostrophe
  or an accented character.
- Fixed two problems with location-based access for managers — people belonging only to a brand could
  appear in a manager's list of team members outside their own locations, and location group
  memberships were left behind when a manager was changed to a trainee, which meant an admin had to
  switch them back to a manager to clear them.
- Fixed automations occasionally failing to apply training to someone who matched several automations
  at once, which could leave the assignment missing altogether.
- Fixed the Resources library failing to load, and resources not being attachable to a message, for
  organizations whose content had been copied over from another organization.
- Fixed two issues in the content builder — media that failed to load could not be removed or
  replaced, and skill and audit PDF exports listed questions in a different order from the builder,
  which made conditional follow-up questions look like they were missing.
- Fixed two issues in the mobile app — after finishing a module, the next module in a path could
  require closing and reopening the app before it appeared on the home screen, and check-ins that
  trainees complete on their own showed "Waiting for manager review" even though no manager review is
  needed; they now show "Ready for review".
