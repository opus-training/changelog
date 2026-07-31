---
title: "Changelog (July 31, 2026)"
date: 2026-07-31
kind: digest
tags: [Improvements, Fixes]
---

More control over follow-up tasks, compliance at a glance on certificate assignments, scheduled reports to any inbox, and a batch of fixes across reporting, the course builder and the app.

### Improvements

- Follow-up tasks are now set up in the moment: whoever raises one during an audit chooses its due date, what proof it needs and whether it has to be reviewed, rather than inheriting whatever was decided when the audit was built. Related notes can be edited from the same place, and each new task starts pre-filled with your last choices.
- Tasks now have a Reviewer, so you can set and see who signs off on a task — including on the task's detail screen in the app.
- Audit reporting shows a Follow-up Tasks column again, on both the all-attempts and full-submission tables, with a completed-versus-total count.
- Food Handler and Food Manager assignment tables now have a Compliance column — compliant, exam not passed, or incomplete — and assignment reports can be filtered by it. Certificate imports also accept two more types: Workplace Violence Prevention and Indoor Heat Illness Prevention.
- Scheduled reports can now be emailed to any address, including people who don't have an Opus account.
- Exporting content to Google Docs now covers tasks, audits and check-ins, not just courses and skills.
- The AI check-in and form builder now builds every step you describe, instead of quietly condensing a long brief down to a handful of steps.
- On the app, the Tasks page now brings checklists, audits and standalone tasks together in one place for both to-dos and submissions, "View all tasks" on the home screen is always available rather than disappearing when there are only a few items, and managers can open a location's tasks straight from the Team screen and filter them by status or overdue.
- On the app, the banner for a course that's still being built has a fresh look with the course's cover image, and you can now dismiss it.

### Bug fixes

- Fixed searching for a person returning the wrong people first, and — where several people were an equally good match — occasionally skipping someone or showing them twice as you paged through. On the app, the Team tab now also keeps loading more people as you scroll instead of stopping after the first page.
- Fixed logging out leaving you on a blank page when your session had already expired somewhere else; you now always land back on the login screen.
- Fixed the completion grid opened from a specific learning path showing every module rather than only that path's.
- Fixed audit and task-list submissions exporting to PDF with the question text and section titles missing.
- Fixed filtering the Training Resources library by type: "Website" and "GIF" came back empty, matching items could be missed in long lists, the filter didn't always agree with the type shown in the list, short YouTube links weren't recognized as videos, and the spinner kept turning after everything had loaded.
- Fixed archived locations continuing to generate new checklists and tasks every day. Archiving a location now takes it out of future scheduling, and to-dos left behind at locations archived earlier have been cleared out.
- Fixed several things on the app: the Invite, Assign and Message shortcuts were missing from the manager home screen; "View completed" on the all-caught-up card opened an empty to-do list; audits scheduled to open later in the day didn't appear until the app was restarted; and the picker for choosing who a task goes to opened with leftover text from last time.
- Fixed several smaller things: the navigation menu listed pages you don't have permission to open; the Bold button didn't reflect or toggle bold on a heading in the course builder; clicking just before or after a table in a course screen put your cursor inside the table instead of beside it; a follow-up task's suggested-title marker came back after a restart even when you'd written your own title; an error could stop an admin submitting or reassigning a training form for certain people; exporting a course or skill to Google Docs could fail and leave a blank document behind when an embedded image or video couldn't be rendered; and someone with more than one account could occasionally be treated as inactive when signing in.
