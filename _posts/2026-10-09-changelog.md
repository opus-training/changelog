---
title: "Bugs and small improvements (Week of Oct 5, 2026)"
date: 2026-10-09
kind: digest
tags: [Improvements, Fixes]
---

A refreshed Course builder, more control over course media, Opus Agents that do more, a review step for Guest Feedback uploads, and fixes across assignments, builders and exports.

### Improvements

- **New content pages and Path Builder for everyone.** The new content pages design and the new Path Builder, which were opt-in, are now on for every organization.
- **A refreshed Course builder.** Select text to get a formatting toolbar. Each screen has a header showing its number and type, where you can also change the type. One "Add screen" button at the bottom holds every new-screen option, next to "Add media" and undo/redo. ⌘D duplicates a screen, Delete removes it, the outline can be collapsed, and a new tag picker lets you create and manage tags.
- **More control over media on course screens.** Set each screen's media height, Fill or Fit, and focal point, and crop images with a simpler crop tool. The app shows images exactly as you set them.
- **Opus Agents can do more.** Agents can answer questions about Paths and build them for you. You can attach images, files and Library items when you create content with AI. Agents find the Locations, roles and location groups you name, even in large organizations, read PDFs on the first try, and act right away when you approve in your request. Their edits now show up in a builder you already have open.
- **A review step for Guest Feedback uploads.** After you map Locations, you check your files before the analysis starts. You can upload several CSVs at once, and files uploaded while an analysis is running join the next one.
- **More actions for connected AI tools.** Claude, ChatGPT and other connected assistants can now mark training complete, set someone's roles, copy Courses and Modules, create role groups, and turn a PDF into an Opus Doc. ChatGPT now prompts you to refresh the Opus connection when it's out of date.
- **Smaller touches.** Hovering over a notification marks it as read. The Path Builder zooms out much further, and each segment on a filter step shows how many people it includes. Read and Unread lists on sent posts show profile photos. In the app, you can add follow-up task proof from your photo library. Check-ins no longer show a Collaborative setting, which never applied to them.

### Bug fixes

- Fixed an issue where "days after hire" courses arrived on the wrong day for people added in the evening.
- Fixed an issue where "reassign after assignment" skipped people who had already completed the training, so recurring training now reaches everyone.
- Fixed an issue where access and assignment rules that used only Locations matched nobody and showed a blank bar. You're now asked to add a role or user type too.
- Fixed an issue where the web course player skipped the Correct/Incorrect feedback after you answered a question.
- Fixed an issue where dropdowns and the date picker in the builder's Settings were cut off, so options like Passing grade, QR code and Due date couldn't be chosen.
- Fixed two Module issues: republishing a Module changed its courses' "Last assigned on" date, and a Module could list the same step twice.
- Fixed an issue where Account History failed to load for some people. Changes made automatically now show as "System" on the assignment timeline.
- Fixed an issue where reviews from Ovation stopped arriving in Guest Feedback.
- Fixed small issues: completed Check-in PDFs left out each step's instructions, exported Opus Doc PDFs printed the first line as an oversized title, previews showed a "Media failed to load" box when there was no media, video subtitles didn't appear when edited from the Overview page, and automation segments on premium Modules couldn't be edited.
