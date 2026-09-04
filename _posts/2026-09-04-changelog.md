---
title: "Bugs and small improvements (Week of Sep 1, 2026)"
date: 2026-09-04
kind: digest
tags: [Improvements, Fixes]
---

Cropping for photos you upload, a wider camera lens on mobile, PDF exports that keep every column, and a batch of fixes across training, reporting and the course builder.

### Improvements

- **Crop your photos as you upload them.** When you add a new profile photo in the mobile app, or a new logo for your business in the dashboard, you can now crop it square before saving instead of hoping it lands well.
- **A wider lens and pinch-to-zoom in the app camera.** Taking photos for a checklist, audit or check-in now supports pinch-to-zoom and the 0.5x ultra-wide lens, so you can fit a whole room or a full shelf in one shot. Available on devices with an ultra-wide camera.
- **PDF exports keep every column.** Wide reporting tables now export in landscape and include their right-hand columns, which previously got cut off at the edge of the page.
- **Certifications from your HR system land sooner.** When you link someone from your HR system to their Opus profile, any certificates already imported for them are now applied to that profile right away instead of waiting for the next sync.
- **Start a certification exam from the web.** Trainees with a food handler exam still to pass can now launch it straight from My Training in the dashboard, which previously could only be done from the mobile app.
- **Fewer dead ends in the course builder.** The builder no longer offers to add a conditional step on step types that cannot have one, a combination that used to be accepted and then fail when you saved.
- **Consistent tabs across Admin screens.** Tabs in Billing, HR integrations and a few other settings screens now match the style already used in Reporting, Library and Locations.

### Bug fixes

- Fixed an issue where a setting on the Knowledge Check and Ask Opus pages could show as off even though it was switched on for your business.
- Fixed an issue where some check-in and skill verification submissions could get stuck syncing and never finish.
- Fixed an issue where searching assignments could report more results than it actually returned.
- Fixed an issue where a course upload that failed appeared to still be in progress instead of reporting the failure.
- Fixed an issue where links to archived Opus Docs still appeared to Trainees inside courses, knowledge checks and check-in forms, including a false warning about an unfinished required video. In the course builder, those links now show clearly as broken so you can replace them.
- Fixed an issue where a learner assigned the food handler exam more than once could be taken to the wrong assignment, so their attempt was recorded against a different one than the link they followed.
- Fixed an issue where businesses that had uploaded only a full-size logo saw initials instead of their logo at the top of the Home and Team screens in the mobile app.
- Fixed an issue where Trainees who were given permission to verify skills lost access to their own profile in the mobile app.
- Fixed an issue where saving your own profile with a phone number already used by someone else failed without explaining why.
- Fixed an issue in the media picker where your own library was unavailable when adding anything other than an image, and where picking a library file as a folder's cover image did nothing.
