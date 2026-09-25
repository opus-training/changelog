---
title: "Bugs and small improvements (Week of Sep 21, 2026)"
date: 2026-09-25
kind: digest
tags: [Improvements, Fixes]
---

Zoomable Opus Docs, a fuller Team view for every manager in the app, subtitles on more videos, and fixes across Modules, Audits, reporting, and the builders.

### Improvements

- **Zoom in on Opus Docs.** In the app, tap an image in an Opus Doc to open it full screen and pinch to zoom, or pinch to zoom the whole doc. On the web, clicking an image opens it in a full-screen gallery.
- **The same Team view for every manager in the app.** Home's Team section now shows every manager their locations with users past due and completion %, plus the Team training overdue shortcut. Before, managers of a single location only saw the shortcut, and managers of several locations only saw the table.
- **Subtitles on more videos.** Opus catalog videos now get subtitles in the languages your organization uses, just like the videos you upload. Long videos also no longer end up with no subtitles at all.
- **Guest Feedback analysis history.** A new Analysis history tab lists every recommendation analysis run for your organization, with when it started, how many recommendations it produced, and whether it finished. Recommendations to create new training now always suggest a Course you can build straight from the card.
- **Sort Roles and Departments by any column.** Every column in the Roles and Departments tables can now be sorted, and the departments and direct reports listed on a role are in alphabetical order.
- **More ways to connect your AI assistant.** Gemini can now connect to Opus by signing in, with no client ID or secret to enter by hand, and more AI assistants that sign in with a client secret now work. Your assistant can also read what's inside a Module, Course, or Check-in.

### Bug fixes

- Fixed an issue where a Module could show as Complete while some of its steps were still unfinished, after someone who had already finished it was assigned it again.
- Fixed an issue where answers on Audit steps hidden by conditional logic still counted toward the score, which could push it above 100%.
- Fixed an issue where location completion and past due figures could fail to load for larger organizations.
- Fixed an issue where people already linked to an Opus account still appeared in the HRIS Not Invited list, and where locations that count people from your HRIS didn't show as HRIS in the Total employee count settings.
- Fixed an issue where a Course screen could end up with a broken link to a resource that you couldn't open, and with no way to replace or remove it.
- Fixed several builder problems: Module builder panels didn't scroll while a resource was open, multi-select could stay switched on after you left the window with Cmd+Tab, and the Course builder canvas jumped when you selected a screen that was already in view.
- Fixed an issue where a dropdown you edit in place could get stuck open if your change didn't save.
- Fixed an issue where long location names and addresses broke the layout of the Guest Feedback integration sidebar.
- Fixed an issue in the app where your profile showed a blank role if you didn't have one. It now shows your user type, and you can pull down to refresh your profile. The bottom tab bar also no longer shifts a moment after the app opens.
