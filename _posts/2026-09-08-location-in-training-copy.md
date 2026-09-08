---
title: "Location merge fields in Course screens and Messages"
date: 2026-09-08
kind: feature
tags: [Feature, Courses, Messaging]
---

Think of a merge field like a personalized label. You write it once, and Opus fills in the right information for each Trainee automatically.

- **Use the merge fields you already know.** Type `{% raw %}{{location}}{% endraw %}` in Course screens and Messages the way you already type `{% raw %}{{name}}{% endraw %}` and `{% raw %}{{company}}{% endraw %}`. Each Trainee sees their Location filled in.
  - **Example:** "Welcome to the team at `{% raw %}{{location}}{% endraw %}`" becomes "Welcome to the team at Downtown" for a Trainee at Downtown. No need to create a separate version for each Location.
- **No missing information.** If a Trainee does not have a Location, they will see "your location" instead of an empty space.
