---
title: "Bugs and small improvements (Week of May 29, 2026)"
date: 2026-05-29
kind: digest
tags: [Improvements, Fixes]
---

Improvements to the Library, the Users page, and people management, plus five fixes.

### Improvements

- The Library now opens with a summary of your content across the top: how many items you have in total, how many folders, how many are published, and how many are still drafts.
- The row menu on the Users page now includes Deactivate account and Reactivate account, so you no longer have to open a person's profile to do it.
- Changing which region, brand, or franchise a person belongs to — and editing reporting targets and employee count settings — is now limited to admins on web, on mobile, and through the API; managers still see these values, but they're read-only.
- The Activity tab on a person's profile is now called Training Sessions, so it isn't confused with the "last active" status shown at the top of the page; existing links to the old tab still work.

### Bug fixes

- Fixed the remaining places where a person's completed training could disappear once
  their assignment or library access was removed — completed courses, modules, and skills
  now stay visible in My Training, on the assignment and access lists, and in completion
  counts and reports throughout the dashboard.
- Fixed a link attached to a check-in or audit step appearing as a broken image preview
  in the builder — links now show as a card with the resource name.
- Fixed submitting feedback from the Support menu, where the feedback box could close
  again before you finished typing.
- Fixed the Resources page showing the same item count twice.
- Fixed unhelpful errors when connecting a 7shifts account, where a failure could come
  back as a generic message instead of explaining what went wrong.
