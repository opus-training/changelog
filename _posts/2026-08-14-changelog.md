---
title: "Changelog (August 14, 2026)"
date: 2026-08-14
kind: digest
tags: [Improvements, Fixes]
---

Billing settings get their own tabs, guest feedback can be narrowed to one location, tasks gain comments and deletion on the phone, and photo proof, automated access grants and filtered counts all get fixes.

### Improvements

- **Billing settings is now three tabs — Overview, Invoices, and Credit spend.** Invoices and credit spend are searchable, exportable to CSV, and show a status at a glance, and each tab has its own link you can share or bookmark.
- **Guest feedback can now be filtered to a single location.** The reviews list, top themes, and the rating trend chart all follow the filter together, so you can look at one restaurant or store without the rest of the group's feedback in the way.
- Tasks on the phone caught up with the dashboard: you can comment on a task, admins and managers can permanently delete one, and the assignee, due date, and reviewer rows are now tappable across their full width instead of only on the small pencil icon.
- A follow-up task raised from a submission can now be pinned to the specific step that prompted it, using a searchable step picker in the dashboard. The submission's activity timeline also now shows follow-up-task history — created, reassigned, commented on, reviewed — interleaved with the submission's own events.
- New photo and video steps in an audit now default to capturing on the spot, with the camera roll turned off unless you switch it back on for that step. A submitted audit also opens with its sections collapsed, so reviewers see section scores before individual answers.
- Course cover and screen images written by AI are now generated for the course rather than picked from a stock photo library, which makes them much closer to what the content is actually about.
- Long names in reporting no longer read as truncated fragments: report and custom-table names in the sidebar, and field names, topic names, and filter values in the custom-table builder, now show in full when you hover over them.
- Eleven more tables now tell you how many rows a filter is hiding, with a "Showing X of Y" count — including the integration settings tables, course feedback, Ask Opus answers, and the incomplete, no-role, and not-yet-invited lists.

### Bug fixes

- Fixed an issue where photos submitted as proof on an audit or check-in that wasn't formally assigned to anyone could go missing instead of being saved with the submission. Existing photos affected by this have been restored.
- Fixed an issue where large organizations could silently miss some of the roles, locations, and library access their automations were supposed to grant. Grants are now retried for up to four hours, and the ones that were missed have been applied.
- Fixed an issue where switching organizations or people on a shared phone or tablet could make whole areas of the app disappear until it was force-quit and reopened.
- Fixed an issue where a long audit or checklist with conditional questions could jump you to the top, or to a different section, as answers caused questions to appear and disappear.
- Fixed an issue where people who had left the organization were still offered as assignees for a follow-up task, which could also make the submission itself fail with an unhelpful error.
- Fixed an issue where uploading several guest feedback files in one sitting only analyzed the first one, and where an organization's later uploads could sit unanalyzed until the next weekly run.
- Fixed an issue where a guest feedback recommendation pointing at content that couldn't actually be updated disappeared from your list when you clicked it without anything being updated, and where re-submitting a batch of recommendations could create duplicates.
- Fixed an issue where a check-in you delegated to someone outside your direct reports stayed on your own pending list.
- Fixed two places where numbers ignored the filters you had applied: the Type column in the resources library could disagree with the Type filter (shortened video links in particular read as plain resources, in the table and in the CSV export), and the completion summary on a library item's assignments tab was calculated from the unfiltered list.
