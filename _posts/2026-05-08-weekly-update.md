---
title: "Week of May 4, 2026"
date: 2026-05-08
---

### New features

- **Guest Feedback inbox (beta)** — Guest Feedback now opens on an Issues view built
  for working through problems rather than reading reviews one by one. Filter by status
  or theme, sort the list, see when each issue was first detected, and open a redesigned
  detail page with a clear next step. Connecting a data source is simpler too — link a
  Google account or forward your Ovation review emails.
- **Video editing for course media** — you can now trim video directly in the course
  builder, alongside cropping and annotating photos. The editor has been pared back to
  the tools that actually matter for training content and restyled to match the rest of
  the dashboard.

### Bug fixes

- Fixed several issues where course and module progress could be wrong or out of date: a
  module could sit at 99% after a trainee passed a quiz on a second attempt, progress
  could stop updating on modules with a lot of content, and some courses stayed marked
  incomplete even though everything in them was finished. Affected records have been
  corrected automatically.
- Fixed an issue where assigning training to a location without choosing specific roles
  assigned it to no one, so nobody at that location received the training.
- Fixed an issue where completion counts on task lists and audits could read too high —
  a checkbox that was tapped but never actually checked still counted as done.
- Fixed an issue where the impact reporting dashboard showed "N/A" for completion, brand
  knowledge, and top trainings in larger organizations.
- Fixed an issue where the premium content permission wasn't enforced when assigning
  training, letting managers who don't have it grant access to premium content.
- Fixed two issues with AI-generated training: audits lost their section headings, and
  generating a course from a longer outline could time out before it finished.
- Fixed several problems in the skill and audit builder on long audits — collapsing a
  section lagged, dragging a step could drop it into the wrong section, moving a section
  could leave its steps behind, and tapping a button inside a step popped open that
  step's menu.
- Fixed an issue where selecting text while editing a course screen could start dragging
  the screen instead; reordering now takes a deliberate press and hold.
- Fixed an issue where changing the sort in the resource picker didn't actually reorder
  the list, and renamed "Date Added" to "Last Edited" to match what the column shows.
- Fixed an issue where clicking a saved view in a reporting completion grid cleared your
  filters instead of restoring the ones saved with that view.
- Fixed sorting by the Locations column on the Users table, and fixed a failure when
  archiving or unarchiving a skill.
- Fixed an issue where guest reviews that arrived without a rating or without reviewer
  details silently never showed up in Guest Feedback.
- Fixed an issue where role and schedule changes made in 7shifts could stay permanently
  out of sync with Opus, so employees could miss training tied to their current role.
- Fixed several stability problems in the mobile app — freezing on the launch screen on
  iOS, screens that spun indefinitely after a network drop instead of showing cached
  content or a retry button, and a crash on Android when leaving a training course.
- Reduced the mobile app's storage use on iPhone, where cached images could quietly grow
  to several gigabytes, made scrolling through images smoother, and fixed labels and text
  being cut off on iPad.
- Fixed an issue where people with phone numbers in Bonaire and Curaçao couldn't get past
  the login screen.
