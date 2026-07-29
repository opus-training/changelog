---
title: "Week of May 18, 2026"
date: 2026-05-22
---

### Bug fixes

- Fixed the remaining trainee records affected by an earlier issue where a course could
  show as complete when only some of its questions had been answered. Affected records
  have been corrected automatically, so those courses show the work that's still
  outstanding again.
- Fixed an issue where a trainee's completed check-ins could be missing from their
  profile and from completion reports after their role changed.
- Fixed an issue where a training assignment couldn't be removed from someone who had
  already completed part of it.
- Fixed two issues with AI-generated task lists, check-ins, and audits — generating one
  could time out before it finished, and step text could come back with stray punctuation
  in it.
- Fixed several issues in the course and task list builders — video didn't play in the
  phone preview, the controls on an image answer option could be pushed off screen by
  long answer text, scrolling did nothing when the pointer was in the empty space beside
  a task list, and moving an existing step into a conditional group could leave an empty
  group behind on the original step.
- Fixed an issue where exported CSVs could have misaligned columns, which made some
  responses look blank when a question's text contained a comma.
- Fixed an issue where the sources cited by Ask Opus appeared greyed out and couldn't be
  opened by trainees.
- Fixed an issue where a check-in could show as ready to verify in the dashboard before
  it actually was, so it couldn't be facilitated.
- Fixed bulk certificate imports, where two rows for the same person failed the whole
  import with no indication of which rows caused it — duplicate rows are now called out
  individually.
- Fixed an issue where a message set to send on submission of an audit never went out.
- Fixed an issue where reviews from a connected Ovation account could quietly stop
  syncing into Guest Feedback.
- Fixed several issues that could leave an HR system sync stuck or unable to finish,
  including locations that some systems send in an unexpected format and syncs that could
  stay blocked indefinitely instead of recovering on their own.
- Fixed crashes in the mobile app on Android — the app could close while images loaded
  across the home, library, and certificate screens, and while adding a photo to a task
  list — and fixed the camera failing to open when taking a photo for a task list.
- Fixed a task list in the mobile app scrolling on its own while a trainee was filling it
  out, and fixed cut-off labels on the profile screen along with an untranslated greeting
  on the home screen in Spanish.
