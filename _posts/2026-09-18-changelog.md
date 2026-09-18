---
title: "Bugs and small improvements (Week of Sep 14, 2026)"
date: 2026-09-18
kind: digest
tags: [Improvements, Fixes]
---

Publishing permissions that match who can edit, cleaner completion reporting, and fixes across the Course builder, Opus Docs, notifications, and the app.

### Improvements

- **Publish a Resource if you can edit it.** Publishing a training Resource or Opus Doc now follows the same per-item edit permission as Courses and Modules. Anyone who can edit an item can publish it, without needing org-wide library management — and library management on its own no longer covers items you don't have edit access to.
- **Completion reporting now ignores archived training.** Assignment completion and past due figures, in reporting and in the Team tab in the app, no longer count assignments on archived content, so they reflect only the training people are still expected to do. Most numbers barely move, but if you archive a lot you will see a real drop. Days recorded before this change keep their old figures, so expect a step in the trend rather than rewritten history.
- **Opus Docs tell you when they're saving.** Opus Docs now show the same saving indicator as the other builders, plus a banner if a save doesn't go through, so you're not left guessing whether an edit landed.
- **A clearer empty Tasks page, and table messages you can actually see.** The Tasks page now explains what Tasks are and links to the help article when you don't have any yet. Separately, "No results" and "Error loading data" messages on wide tables no longer sit off to the side where you have to scroll to find them.
- **Catch Guest Feedback locations that aren't linked.** Guest Feedback now tells you when a connected integration has locations that aren't matched to your stores and links straight to the mapping tab, and Data Sources shows how many of each integration's locations are linked.

### Bug fixes

- Fixed several problems with the notification bell. The unread count included notifications that could never appear in the list, such as archived content and types the list can't render, so the badge stayed stuck; clicking a notification now marks it read straight away instead of often not registering; and double digit counts no longer overflow the badge.
- Fixed an issue where a PDF converted into an Opus Doc could come back as a flat picture with none of its text selectable or editable. This mostly affected PDFs with shaded bars, boxes, or table styling.
- Fixed an issue where the Course builder wouldn't scroll while the cursor rested over a screen card, leaving you to scroll in the gaps between cards.
- Fixed an issue where the previous and next month arrows in date pickers did nothing when clicked.
- Fixed an issue where line breaks were dropped from text people typed, in free-text answers and notes on Audits and Checklists, in course feedback and comments, and in messages composed in the app, so it arrived on the dashboard as one unbroken block.
- Fixed an issue where updating on-completion assignment rules on a large piece of training could time out before everyone already partway through was moved onto the new sequence, leaving them on the old one. Rule changes now migrate everyone, and anyone already stranded moves across at the next rule change.
- Fixed an issue where double-clicking an image in an Opus Doc deleted it.
- Fixed an issue where the location completion report showed "Could not load data" after you re-applied two or more User Type filters.
- Fixed an issue where a photo added to a Checklist step could fail to upload if you scrolled away before the upload finished.
- Fixed an issue where tapping a notification in the app didn't open the screen it was about, including when the app had been fully closed.
