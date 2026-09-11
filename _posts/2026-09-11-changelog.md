---
title: "Bugs and small improvements (Week of Sep 7, 2026)"
date: 2026-09-11
kind: digest
tags: [Improvements, Fixes]
---

A new In progress stage for recommendations, faster turnaround on guest feedback, and a batch of fixes across the course builder, training, reporting and the app.

### Improvements

- **Recommendations now have an In progress stage.** Recommendations move through Inbox, In progress, Measuring impact and Done, and each one records the date it was started. You choose the date impact measurement begins, so impact is measured from when the work actually landed rather than from when training was assigned.
- **See what happened after you act on a recommendation.** Once you have acted, the recommendation shows the outcome instead of asking you to act again: new training links straight to the course you created, updated content shows when the update was implemented, and assigned training shows the segment it was assigned to and when.
- **Guest feedback becomes recommendations in about three minutes.** New guest feedback now turns into recommendations within a few minutes instead of taking up to half an hour.
- **Watch AI translations as they generate.** Translation Mode in the course builder now shows progress while translations are being generated, and it loads correctly when you open the builder from a link or refresh the page.
- **Search for locations when you invite people.** The location picker now has a search box when you invite people, in both the dashboard and the app. On the web it covers roles and groups too.
- **A place to start in Guest Feedback and Recommendations.** Guest Feedback and Recommendations now show a short getting-started screen instead of empty tabs and blank charts before there is anything to display.
- **Longer descriptions on resources.** Resource descriptions are no longer cut off at 240 characters.

### Bug fixes

- Fixed an issue where edits in the course, module and check-in builders could be lost while the builder still showed "Saving". Opus now keeps retrying, tells you clearly when a save is still outstanding, and warns you before you close the tab with unsaved work.
- Fixed an issue where a course could get stuck and never show as complete. Reopening it skipped past a screen that had not been finished, leaving that screen unreachable, in both the dashboard and the app.
- Fixed an issue where PDFs opened to a blank white screen on Android.
- Fixed an issue where the themes report in Ask Opus showed a question count far larger than the number of questions actually asked. The count has been removed, and themes now sort with the most common first.
- Fixed an issue where a connected AI assistant could report an unhelpful error when asked to make a change, sometimes after the change had already gone through.
- Fixed an issue where completions recorded after the fact could come back marked as failed and assign the Trainee a retake, on courses made up of other courses.
- Fixed an issue where searching assignments could time out at larger businesses instead of returning results.
- Fixed an issue where a link to a library folder left Trainees on an endless spinner and sent managers and admins to the wrong screen in the app.
