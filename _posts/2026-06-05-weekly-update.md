---
title: "Week of June 1, 2026"
date: 2026-06-05
---

### New features

- **Roster imports from your provider's own SFTP server** — payroll and HR systems that host
  their own SFTP server, such as Paycom, can now be connected by having Opus pull the employee
  file on a schedule, instead of requiring the file to be sent to Opus first.
- **Links in course content open inside the mobile app** — tapping a link in a course's text
  that points to another course, module, or file now opens it directly in the app instead of
  sending you out to a browser.
- **Listen mode reads the course introduction** — turning on listen mode while you're on a
  course's intro page now reads the title and description aloud. Previously it only started
  reading once you reached the first question.

### Bug fixes

- Fixed scheduled report emails being filtered by the permissions of the person who set the
  report up rather than the person receiving it, which meant a manager could receive a report
  containing locations outside their access. Each recipient now gets a report scoped to what
  they can see.
- Fixed pages, lists, and admin actions that could fail or time out for larger organizations —
  course assignment lists, library search for trainees, the Roles page, and the assignment
  completion widget on the home screen now load reliably, and unassigning training, deleting a
  message blast, or editing an automation no longer fails partway through.
- Fixed the feedback summary on a course timing out when the course had a large number of
  responses. The rating breakdown now loads quickly, and each rating shows the number of
  responses alongside the percentage.
- Fixed scheduled report exports to a connected destination being cut off at 50,000 rows, which
  left data out of large reports with no indication anything was missing.
- Fixed "due tomorrow" training reminder emails not being sent for some organizations.
- Fixed a training resource that had been converted to an Opus Doc still showing as a media file
  in the resource list, and being switched back to the original file when you edited it.
- Fixed two problems with uploaded content — a PDF converted to an Opus Doc could come through
  with all of its images missing and placeholder text in their place, and larger SCORM packages
  could fail to upload or convert.
- Fixed large training imports timing out without telling you whether anything had happened. The
  first rows are now processed right away so you get immediate confirmation, and the rest finish
  in the background.
- Fixed assigning training to a group of people failing for everyone in the group if any one of
  them had since been deleted.
- Fixed an assignment that was manually marked complete still showing less than 100% progress.
- Fixed employee locations not coming through on Square payroll syncs, and a roster file that
  couldn't be processed again after the integration's settings were changed.
- Fixed region, brand, and franchise memberships disappearing from a person's profile after their
  role changed, so those values can now always be seen and cleared.
- Fixed the delete confirmation dialog staying open after deleting a single role or location from
  its row menu, and a failed delete now shows an error instead of nothing at all.
- Fixed completed training disappearing from assignment lists in the mobile app once access to the
  course was removed, matching the fix already made on the web.
- Fixed several issues in the mobile app — Guatemalan phone numbers couldn't be entered in full on
  the sign-in screen, starting a module right after opening the app could return a permission
  error, the last letter of a label could be clipped (most often just after switching companies),
  and taking a photo now shows an error when the camera can't be opened instead of doing nothing.
