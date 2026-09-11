---
title: "Bugs and small improvements (Week of Sep 7, 2026)"
date: 2026-09-11
kind: digest
tags: [Improvements, Fixes]
---

Recommendations gain an In progress stage, guest feedback turns into recommendations sooner, and a batch of fixes across the course builder, training, reporting and the app.

### Improvements

- **Track a recommendation while you roll it out.** Recommendations now move through Inbox, In progress, Measuring impact and Done. Acting on one moves it to In progress; once the training is out in the field you start measuring impact and pick the date to measure from. The stage previously called In progress is now called Measuring impact — it was renamed, and nothing moved.
- **See what you did without leaving the recommendation.** Once you have acted, a recommendation shows the outcome instead of asking you to act again: new training links to the course you created, updated content shows when the update went in, and assigned training shows who got it and when.
- **Get recommendations sooner after adding guest feedback.** Analysis now starts within a few minutes of an upload or sync, rather than up to half an hour. Opus still runs one analysis per business per day, so a second upload the same day will not start another.
- **Watch AI translations as they generate.** Translation Mode in the course builder now shows progress while translations are being written.
- **Search when you pick locations to invite someone to.** The location picker now has a search box, in both the dashboard and the app. On the web, the role picker has one too.
- **Get started in Guest Feedback and Recommendations.** Both now open with a short getting-started screen instead of empty tabs and blank charts before there is anything to show.
- **Write longer resource descriptions.** Descriptions are no longer cut off at 240 characters.

### Bug fixes

- Fixed an issue where edits in the course, module and check-in builders could be lost while the builder still showed "Saving".
- Fixed an issue where a course could get stuck and never show as complete, in both the dashboard and the app.
- Fixed an issue where Translation Mode did not load when the builder was opened from a link or the page was refreshed.
- Fixed an issue where PDFs opened to a blank white screen on Android.
- Fixed an issue where the themes report in Ask Opus showed far more questions than were actually asked.
- Fixed an issue where a connected AI assistant reported an error for a change that had already gone through.
- Fixed an issue where completions granted after the fact could come back marked as failed and assign the Trainee a retake, on courses inside a module.
- Fixed an issue where searching assignments could time out at larger businesses.
- Fixed an issue where a link to a library folder left Trainees on an endless spinner, and sent managers and admins to the wrong screen in the app.
