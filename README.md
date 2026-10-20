# Opus Changelog (moved)

The customer changelog now lives in the marketing site at
**https://www.opus.so/changelog**, with its posts in
[`opus-training/marketing-site`](https://github.com/opus-training/marketing-site)
under `src/content/changelog/`.

This repository only keeps `changelog.opus.so` working: `vercel.json` permanently redirects (308) every old
URL to its new one (`/<date>/<slug>/` → `/changelog/<date>/<slug>`,
`/releases/<slug>/` → `/changelog/releases/<slug>`, `/feed.xml` →
`/changelog/feed.xml`).
