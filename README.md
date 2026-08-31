# Opus Changelog

Customer-facing changelog, served at **https://changelog.opus.so** (reached via
the `opus.so/changelog` redirect on the marketing site). Built with GitHub
Pages' native Jekyll pipeline — no CI, no build step: pushing to `main` is
publishing.

## How entries get here

An automated fleet agent (`changelog-publisher`, defined in
`dev-container/agent-config/devcontainer/agents/changelog-publisher.md`) runs on
weekday evenings (launch-day feature posts, Mon-Thu) and every Friday
(the weekly digest + roundup), triggered by scadmin scheduled tasks
(`AgentsCtrl.trigger_changelog_publisher_agent` / `_daily_agent`). It:

1. Collects PRs merged since the newest entry in `_posts/` across
   `scadmin`, `dashboard`, and `mobile`, and checks launch status
   (feature flags as of the window, #product-announcements) so features
   are announced the week they go live, not the week they merge.
2. Writes **one post per launched feature** plus **one bundled digest**
   of the week's improvements and fixes.
3. Commits to `_posts/` and pushes to `main`.
4. Waits for the Pages deploy, then announces in #product-announcements.

## Entry format

Two kinds of post, distinguished by `kind` in the front matter.

**Feature entry** — one launched feature, benefit-led. Filename
`_posts/YYYY-MM-DD-<feature-slug>.md`:

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

*Available to organizations using audits.*   <!-- only when availability is limited -->
```

**Weekly digest** — everything else that shipped. Filename
`_posts/YYYY-MM-DD-changelog.md`:

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

The first paragraph of every post is its index teaser — make it carry the
pitch. Tags: the first tag is the kind (`Feature`, or `Improvements`/`Fixes`
on digests); feature posts add 1–2 product-area tags (Training, Courses,
Audits, Tasks, Check-ins, Reporting, Guest Feedback, Messaging, Mobile,
Dashboard, Integrations, Ask Opus).

Style rules:

- Plain language. No PR numbers, Linear IDs, internal system names, or org
  names of specific customers.
- Features lead with what you can now do; fixes start with "Fixed" and
  describe the symptom, not the mechanism.
- A feature's week is its **launch** week (broadly available), not its
  merge week.
- If nothing customer-visible shipped, the agent skips the week (no empty
  entries).

## Look and feel

The site follows the Opus brand as it ships on opus.so: a warm off-white
canvas (`#FAF9F5`), deep forest green ink (`#004540`) for *all* text, and the
accent set — yellow `#FFE175`, lavender `#ADBDFF`, sky `#AEBEFD`, plum
`#52154E`, lilac `#775172`. The same values back the product design system
(`--brand-green` and friends in `dashboard/src/pages/global.css`). There are
no cool grays in the brand: muted text is ink at a lower mix, never `#6b7280`.

Everything lives in `assets/style.css` as CSS custom properties — change a
token there rather than a rule. Two things to know before editing:

- **Headings use `--font-display`**, which falls back to Inter. PolySans is
  the brand display face; when it is licensed for web, drop the woff2 files
  in `assets/fonts/` and un-comment the `@font-face` block at the top of the
  stylesheet. Nothing else needs to change.
- **The ink mix percentages are contrast-tuned.** Every text role clears
  WCAG AA (4.5:1) against both the canvas and the white card surface, in
  light and dark mode. Lightening `--ink-muted` or `--ink-faint` will break
  that — re-check if you touch them.

Tag colors key off the tag name (`tag-feature`, `tag-improvements`,
`tag-fixes`); any other tag renders as a hairline outline pill, so new
product-area tags need no CSS.

## Humans welcome

Edit or delete anything here directly — the agent never rewrites existing
posts, and the next run computes its window from the newest `_posts/` date,
so manual edits are safe. Adding a screenshot or GIF to a feature entry is
especially welcome (`![alt](/assets/img/...)` renders styled).
