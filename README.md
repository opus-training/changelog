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

One-line hook stating what customers can now do.

- **Benefit** — one sentence on what it does and why it matters.
- **Benefit** — 2–4 bullets total.

*Available to organizations using audits.*
```

**Weekly digest** — filename `_posts/YYYY-MM-DD-changelog.md`:

```markdown
---
title: "Bugs and small improvements (Week of Jul 24, 2026)"
date: 2026-07-24
kind: digest
tags: [Improvements, Fixes]
---

One-line summary of the week (this becomes the index teaser).

### Improvements

- Smaller enhancements to existing features.

### Bug fixes

- Fixed an issue where ...
```

The first paragraph of every post is its index teaser. Tags: the first tag is
the kind (`Feature`, or `Improvements`/`Fixes` on digests); feature posts add
1–2 product-area tags (Training, Courses, Audits, Tasks, Check-ins, Reporting,
Guest Feedback, Messaging, Mobile, Dashboard, Integrations, Ask Opus).

URLs stay `/YYYY-MM-DD/<slug>/`.

Style rules:

- Plain language. No PR numbers, Linear IDs, internal system names, or org
  names of specific customers.
- Features lead with what you can now do; fixes start with "Fixed" and
  describe the symptom, not the mechanism.
- A feature's week is its **launch** week (broadly available), not its
  merge week.
- If nothing customer-visible shipped, the agent skips the week (no empty
  entries).

## Roadmap

Customer-facing snapshot at `/roadmap`. Markdown in `_roadmap/` is the source
of truth (Notion sync comes later). Filename `_roadmap/NN-slug.md`:

```markdown
---
title: "Workflows"
status: in-development
eta: "2026"
tags: [Operations]
audience: [Admins, Managers]
video: /assets/roadmap/workflows.mp4
---

One-line hook.

Supporting paragraphs. Optional help-center links.
```

`status` is `just-launched`, `in-development`, or `planned`. `eta` is the
public timing from Notion (year or quarter). Drop `video` until the file
exists under `public/assets/roadmap/`. Released work stays on the changelog.

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
