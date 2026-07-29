# Opus Changelog

Customer-facing changelog, served at **https://changelog.opus.so** (reached via
the `opus.so/changelog` redirect on the marketing site). Built with GitHub
Pages' native Jekyll pipeline — no CI, no build step: pushing to `main` is
publishing.

## How entries get here

An automated fleet agent (`changelog-publisher`, defined in
`dev-container/agent-config/devcontainer/agents/changelog-publisher.md`) runs
every Friday, triggered by a scadmin scheduled task
(`AgentsCtrl.trigger_changelog_publisher_agent`). It:

1. Collects PRs merged since the newest entry in `_posts/` across
   `scadmin`, `dashboard`, and `mobile`.
2. Writes a customer-facing summary (Features / Bug fixes) — internal-only
   changes are excluded.
3. Commits `_posts/YYYY-MM-DD-weekly-update.md` and pushes to `main`.
4. Waits for the Pages deploy, then announces in #product-announcements.

## Entry format

One markdown file per week in `_posts/`, named `YYYY-MM-DD-weekly-update.md`:

```markdown
---
title: "Week of July 27, 2026"
date: 2026-07-31
---

### New features

- **Feature name** — one or two plain-language sentences on what it does
  and why it matters to customers.

### Bug fixes

- Fixed an issue where ...
```

Style rules for entries:

- Plain language. No PR numbers, Linear IDs, internal system names, or org
  names of specific customers.
- Features lead with a bolded name; fixes start with "Fixed".
- If nothing customer-visible shipped, the agent skips the week (no empty
  entries).

## Humans welcome

Edit or delete anything here directly — the agent never rewrites past
entries, and the next run computes its window from the newest `_posts/`
date, so manual edits are safe.
