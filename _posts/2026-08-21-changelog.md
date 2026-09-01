---
title: "Bugs and small improvements (Week of Aug 21, 2026)"
date: 2026-08-21
kind: digest
tags: [Improvements, Fixes]
---

You can walk away from a Checklist you started by mistake, Checklist detail on the phone is one page you can pull to refresh, and unsaved builder edits, omitted documents, and a stalled Guest Feedback sync all get fixes.

### Improvements

- **You can now discard a Checklist or Audit you started and don't intend to finish.** A Discard button in the form's header on the phone clears the draft instead of leaving it sitting in your list as unfinished work.
- **Checklist detail on the phone is now a single page instead of tabs,** and both the submissions and Checklist lists can be pulled down to refresh.
- Newly assigned training and Check-ins now appear on a person's profile, in the dashboard and in the app, without having to leave the page and come back.
- Archived Roles and Locations no longer count as linked mappings in your HR system integration, so the mapping count reflects what is actually in use.
- Account History is now available for team members who have been deactivated, so you can still see what someone did before they left.

### Bug fixes

- Fixed an issue in the Checklist and Audit builder where undoing a change right after switching a step to a checkbox could quietly discard other edits you had not saved yet.
- Fixed an issue where adding a conditional group of steps in the builder offered steps that were already inside another condition, and moving the last of them out could make that entire condition disappear.
- Fixed an issue where adding premium or partner Course content to a Library folder looked like it worked but never saved.
- Fixed two places where Opus Docs were left out of what you exported or reported on: bulk content exports silently skipped them, and a new-hire onboarding report came back blank when the onboarding included one.
- Fixed an issue where a nightly Guest Feedback sync could stop partway through for Locations with a high volume of reviews, leaving recent feedback missing.
- Fixed an issue where a Manager's Checklist to-do list could include pending Checklists for Locations they don't manage.
- Fixed an issue where two Locations working through the same Checklist or Audit could overwrite each other's in-progress draft.
- Fixed an issue where a food handler exam link could create a duplicate exam and send a second invitation when the link was previewed or scanned rather than opened by the Trainee.
- Fixed an issue where a Course's responses header showed a percentage that disagreed with the score printed next to it, because matching and ordering questions were left out of the count.
- Fixed two problems typing into Checklist and Audit steps on your phone: a text field could sit hidden behind the keyboard, and on Android tapping into a note could jump the screen and swallow your next tap.
- Fixed an issue where a report that took too long to load showed a raw server error page instead of a clear message in the app.
