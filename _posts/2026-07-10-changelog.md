---
title: "Bugs and small improvements (Week of Jul 10, 2026)"
date: 2026-07-10
kind: digest
tags: [Improvements, Fixes]
---

Twelve fixes across assignments, integrations, and the mobile app, plus a more detailed Ask Opus report and Traditional Chinese subtitles.

### Improvements

- The Ask Opus report now shows the person behind every question along with their location and role, lets you click through to their profile, and includes the added detail when you export the report.
- You can now remove a state's version of Sexual Harassment Prevention Training from your organization from its settings, and adding that version back later restores it as it was rather than starting over.
- New training videos now get a Traditional Chinese subtitle track automatically, alongside the other languages Opus already generates.

### Bug fixes

- Fixed a course still appearing in a trainee's assignments after it had been unassigned. When the
  course had been completed earlier and was then reassigned as part of a module, unassigning the
  module left it behind, and unassigning it by hand did nothing.
- Fixed compliance training staying assigned to someone after you imported a certificate for them.
  The leftover assignment also stopped them from being automatically assigned their next
  re-certification.
- Fixed an empty file arriving from a scheduled connection to your HR system marking your whole
  active team as no longer employed. A file with no employee rows in it is now skipped.
- Fixed trainees being unable to delegate a check-in — the Delegate button did nothing for them.
- Fixed a module built with Opus's AI getting stuck showing as still generating, which left it
  unpublishable. Modules that were already in that state have been repaired.
- Fixed several things left over from the navigation redesign: the notification bell was missing from
  the top of the page, going back from a piece of content returned you to the top of your library
  instead of the folder you came from, locations you had removed reappeared in the Library Access
  editor as you moved between folders, and your organization's logo slid sideways when you collapsed
  the navigation.
- Fixed pages that were slow or would not finish loading — the recently assigned panel on the home
  page could time out, sorting your team list by Locations could fail to load, and the home page was
  making far more requests in the background than it needed to.
- Fixed two problems with Opus Docs. Attaching a doc to an audit or skill step through Add media did
  nothing, and exporting a doc to PDF left a blank page and pushed tables onto a page of their own.
- Fixed opening a link to a piece of training on a computer sending you to the app store instead of
  to that item in your library.
- Fixed two smaller problems in the training library — the button for adding a condition in the path
  builder slid away from your cursor as you tried to click it, and adding items to a folder in bulk
  showed rows that had not actually saved until you refreshed.
- Fixed the mobile app showing an out-of-date certificate on a profile. Anyone who had taken a
  compliance training more than once could be shown an expired certificate instead of their current
  one.
- Fixed long words breaking apart mid-word on course title screens in the mobile app. The title now
  shrinks to fit the screen instead.
