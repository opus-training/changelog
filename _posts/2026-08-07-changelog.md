---
title: "Changelog (August 7, 2026)"
date: 2026-08-07
kind: digest
tags: [Improvements, Fixes]
---

Sorani joins the supported languages, reporting gets exports and click-through to any location, and the phone app moves to native video playback.

### Improvements

- **Sorani (Central Kurdish) is now a supported language.** Trainees can pick it as their app language, admins can offer training in it, and both machine translation and automatic language detection support it. The existing Kurdish option is now labelled Kurdish (Kurmanji) so the two aren't confused.
- Clicking a location in the reporting overview now opens that location's full report at its own link, and the table can be exported to CSV or PDF.
- The users list has a new "Only deactivated" filter, alongside the existing options to include or exclude deactivated people.
- Training videos in the phone app now use the phone's own video player, so you get native fullscreen and caption controls.
- Course, module, and check-in descriptions now keep their formatting in the phone app — bold, lists, headings, and tappable links all display as written.
- Assigning a batch of training now sends one grouped notification instead of a separate push for every item.
- On the phone, tapping a checklist or task from the Tasks page or Home opens that location's form directly, rather than stopping at an extra detail screen first.

### Bug fixes

- Fixed an issue where an expired session showed a blank screen instead of prompting you to sign in again.
- Fixed an issue where turning an automation off and back on left it enabled without restoring the access it had removed.
- Fixed an issue where the dashboard could become slow during periods of heavy automation activity.
- Fixed an issue where custom report date filters were grouped by UTC rather than your organization's local day, which could shift results for organizations in western time zones.
- Fixed an issue where exporting a course to PDF in Safari crammed the content onto too few pages with overlapping text.
- Fixed an issue where the guest feedback reviews list stopped loading more reviews as you scrolled, and where review syncing could stop entirely if one connected location had been removed on the provider's side.
- Fixed an issue where archiving a course, module, resource, or skill from its own page left you stranded on the archived item instead of returning you to the library.
- Fixed an issue where having two browser tabs open on different organizations could put both into a reload loop.
- Fixed an issue where photos taken on an iPhone could show a blank thumbnail after upload.
- Fixed an issue where assigning training from the phone defaulted to restarting training a person had already completed. That setting now starts off.
- Fixed an issue on Android where the app could crash on screens with images, and where the keyboard covered the note field when adding proof of completion.
- Fixed an issue where administrators previewing the app as a trainee saw an empty library and no search results.
