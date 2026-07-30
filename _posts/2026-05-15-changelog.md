---
title: "Changelog (May 15, 2026)"
date: 2026-05-15
kind: digest
tags: [Fixes]
---

Ten fixes across training progress, guest feedback, the content builder, and the mobile app.

### Bug fixes

- Fixed an issue where marking training progress could fail to save and get stuck
  retrying.
- Fixed an issue where a course could show as fully complete when the trainee had only
  answered a few of its questions.
- Fixed an issue where a completed check-in or verified skill could disappear from a
  trainee's record after their role changed.
- Fixed an issue where organizations couldn't connect or reconnect their Google Business
  account for guest feedback.
- Fixed deleting a multiple-choice answer option when building check-ins, audits, and
  task lists — the option appeared to linger until you refreshed the page. Publishing is
  now also blocked, with a clear warning, when a multiple-choice question has no options
  or a conditional group points at an answer that was deleted.
- Fixed an issue where text couldn't be selected or edited in the add content and new
  course dialogs while building a module.
- Fixed an issue in the mobile app where a weak connection could leave a course stuck
  with an unresponsive Next button.
- Fixed an issue where tapping a link inside a document or recipe opened the app store
  instead of opening the content in the app.
- Fixed a crash in the mobile app that could interrupt signing in and out.
- Fixed number entry on Android keyboards that use a comma as the decimal separator,
  where typed values were silently ignored on check-in questions.
