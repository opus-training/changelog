# Opus Changelog

Customer-facing changelog at **https://changelog.opus.so**. Next.js app; markdown
in `_posts/` is the source of truth. Vercel deploys `main` and PR previews.

Locally in a fleet session:

```bash
localservices start -l changelog
```

Then open `http://localhost:$CHANGELOG_PORT`.

## How entries get here

An automated fleet agent (`changelog-publisher`) writes `_posts/` and pushes
`main`. Humans may edit or add posts the same way.

## Entry format

Two kinds of post, distinguished by `kind` in the front matter.

**Feature entry** — filename `_posts/YYYY-MM-DD-<feature-slug>.md`:

```markdown
---
title: "Follow-up tasks"
date: 2026-07-24
kind: feature
tags: [Feature, Audits]
---

You can now create a follow-up Task from a submission.

- **Lead-in.** One sentence of benefit.
- **Lead-in —** rest of the same sentence. 2–4 bullets.

*Available to businesses using Audits.*
```

**Weekly digest** — filename `_posts/YYYY-MM-DD-changelog.md`:

```markdown
---
title: "Bugs and small improvements (Week of Jul 24, 2026)"
date: 2026-07-24
kind: digest
tags: [Improvements, Fixes]
---

Publishing permissions, cleaner completion reporting, and fixes across the Course builder and the app.

### Improvements

- **Lead-in.** One or two sentences of benefit. Five to seven bullets.

### Bug fixes

- Fixed an issue where the notification bell's unread count didn't match the list.
```

The first paragraph of every post is its index teaser. Tags: the first tag is
the kind (`Feature`, or `Improvements`/`Fixes` on digests); feature posts add
1–2 product-area tags (Training, Courses, Audits, Tasks, Check-ins, Reporting,
Guest Feedback, Messaging, Mobile, Dashboard, Integrations, Ask Opus).

URLs stay `/YYYY-MM-DD/<slug>/`.

Copy voice, product nouns, teaser shape, and digest/feature contracts live
in `AGENTS.md`. Follow that file for every new post.

Also:

- A feature's week is its **launch** week (broadly available), not its
  merge week.
- If nothing customer-visible shipped, the agent skips the week (no empty
  entries).

## Look and feel

Brand styles live in `src/app/globals.css`. Tokens match opus.so: canvas
`#FAF9F5`, ink `#004540`, accents yellow `#FFE175`, lavender `#ADBDFF`, sky
`#AEBEFD`, plum `#52154E`, lilac `#775172`.

Headings use `--font-display` (falls back to Inter). Tag colors key off the
tag name (`tag-feature`, `tag-improvements`, `tag-fixes`); other tags render
as outline pills.

## Humans welcome

Edit or delete posts directly — the publisher never rewrites existing posts.
Add a screenshot or GIF with `![alt](/assets/img/...)`.
