---
title: "Bugs and small improvements (Week of Jun 19, 2026)"
date: 2026-06-19
kind: digest
tags: [Fixes]
---

Seven fixes across training, reporting, and integrations.

### Bug fixes

- Fixed overdue training not always being marked past due. The nightly job that flags assignments
  past their due date had started to fail as volumes grew, which could leave training showing as
  incomplete instead of overdue.
- Fixed the history of an Ask Opus conversation failing to load with an error when that
  conversation had searched your training materials earlier this year. Older conversations now open
  normally.
- Fixed task list deadlines in the mobile app showing "Due" with a day of the week that had already
  passed, even though the window to complete the task was still open. Deadlines now count down in
  hours and minutes, and are correct for locations in other time zones.
- Fixed videos failing to process when a large batch was uploaded at once. Some videos in the batch
  could get stuck and never become available, with nothing to indicate anything had gone wrong.
- Fixed using AI to create or update content failing outright when the generated text contained an
  unusual character. This affected courses, task lists, check-ins and audits, as well as files
  attached to a chat.
- Fixed a training resource with a large amount of text sometimes not turning up in search after it
  was published.
- Fixed roster files on a scheduled connection being read before the upload had finished, which
  could mean only part of the file was processed. Opus now waits a few minutes after the scheduled
  time before reading the file.
