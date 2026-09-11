---
title: "Bugs and small improvements (Week of Sep 7, 2026)"
date: 2026-09-11
kind: digest
tags: [Improvements, Fixes]
---

A new in progress stage for Recommendations, faster turnaround on Guest Feedback, and a batch of fixes across the Course builder, training, reporting, and the app.

### Improvements

- **Recommendations now have an in progress stage.** Recommendations move through inbox, in progress, measuring impact, and done, and each one records the date work started. You choose when impact measurement begins, so it's measured from when the work actually landed, not from when training was assigned.
- **See what happened after you act on a Recommendation.** Once you've acted, the Recommendation shows the outcome instead of asking you to act again: new training links straight to the Course you created, updated content shows when the update went live, and assigned training shows the segment it went to and when.
- **Get Recommendations sooner after adding Guest Feedback.** Analysis now starts within a few minutes of an upload or sync, down from up to half an hour. Opus runs one analysis per business per day, so a second upload the same day won't start another.
- **Watch AI translations as they generate.** Translation Mode in the Course builder now shows progress while translations generate, and it loads correctly when you open the builder from a link or refresh the page.
- **Search for locations when you invite people.** The location picker now has a search box when you invite people, in both the dashboard and the app. On the web, it covers roles and groups too.
- **A place to start in Guest Feedback and Recommendations.** Both now show a short getting-started screen instead of empty tabs and blank charts before there's anything to display.
- **Longer descriptions on Resources.** Resource descriptions are no longer cut off at 240 characters.

### Bug fixes

- Fixed an issue where edits in the Course, Module, and Check-in builders could be lost while the builder still showed "Saving." Opus now keeps retrying, tells you clearly when a save is still outstanding, and warns you before you close a tab with unsaved work.
- Fixed an issue where a Course could get stuck and never show as complete. Reopening it skipped past an unfinished screen, leaving it unreachable, in both the dashboard and the app.
- Fixed an issue where PDFs opened to a blank white screen on Android.
- Fixed an issue where the themes report in Ask Opus showed a question count far larger than the number of questions actually asked. We removed the count, and themes now sort with the most common first.
- Fixed an issue where a connected AI assistant could report an unhelpful error when asked to make a change, sometimes after the change had already gone through.
- Fixed an issue where completions recorded after the fact could come back marked as failed and assign the Trainee a retake, on Courses made up of other Courses.
- Fixed an issue where searching assignments could time out at larger businesses instead of returning results.
- Fixed an issue where a link to a Library folder left Trainees on an endless spinner and sent managers and admins to the wrong screen in the app.
