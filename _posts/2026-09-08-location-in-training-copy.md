---
title: "Location template variables in course screens and messages"
date: 2026-09-08
kind: feature
tags: [Feature, Courses, Messaging]
---

Write a Course or message once and have each learner see their own Location in it.

- **The same placeholders you already use.** Type `{% raw %}{{location}}{% endraw %}` in Course screens and messages the way you already type `{% raw %}{{name}}{% endraw %}` and `{% raw %}{{company}}{% endraw %}`. Learners see their Location filled in automatically.
- **One Course, every Location.** "Welcome to the team at `{% raw %}{{location}}{% endraw %}`" becomes "Welcome to the team at Downtown" for that person, and the next learner's Location for the next. You do not need a version per Location.
- **No blank if they do not have one.** People without a Location see "your location" instead of a gap.
