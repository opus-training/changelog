/**
 * "companion" renders inside the hero section, as part of its story.
 * "more" renders as a text card under the featured rows, without media.
 */
export type FeatureTier = "hero" | "companion" | "featured" | "more";

export type ReleaseFeature = {
  slug: string;
  title: string;
  headline?: string;
  deck?: string;
  pitch?: string;
  /** Who gets it and where to find it, in one line. */
  where?: string;
  /** Optional caveat people should know before they start. */
  note?: string;
  tags: string[];
  /**
   * Path without extension; the page loads `${video}.mp4` and `${video}.jpg`
   * from public/. Until the .mp4 exists the page renders without the video.
   */
  video?: string;
  /** Native aspect ratio for framed clips, e.g. "35 / 27"; shown uncropped. */
  videoAspect?: string;
  /** Logos of the tools it works with, shown instead of a video. */
  logos?: { name: string; src: string }[];
  /** Ready-made examples shown as cards under the hero video. */
  examples?: { emoji: string; name: string; blurb: string }[];
  examplesTitle?: string;
  /** Line under the example cards, e.g. how many more there are. */
  examplesMore?: string;
  tier: FeatureTier;
};

export type Release = {
  slug: string;
  label: string;
  title: string;
  /** Big line at the top of the release page. */
  headline: string;
  summary: string;
  /** One-line italic intro under the headline. */
  intro?: string;
  features: ReleaseFeature[];
};

const november: Release = {
  slug: "2026-11",
  label: "November 2026",
  title: "November 2026 Release",
  headline: "Keep every location in the loop",
  intro: "Share news, celebrate great work, and talk with your team, all in Opus.",
  summary:
    "Keep every location in the loop. New this month: Newsfeed and Messages, Agents for Managers, checklists, audits and check-ins on desktop, impersonation, and better translations.",
  features: [
    {
      slug: "newsfeed-and-messages",
      title: "Newsfeed and Messages",
      deck: "Share company news and shout-outs, and chat with your team in groups or one to one.",
      tags: ["Feature", "Messaging"],
      // TODO(november-video): add public/releases/2026-11/newsfeed.mp4 and
      // newsfeed.jpg (1100x688, like October's lead). Until the .mp4 exists
      // the page renders the lead without a video.
      video: "/releases/2026-11/newsfeed",
      videoAspect: "275 / 172",
      examplesTitle: "Message Blasts are now two things",
      examples: [
        {
          emoji: "📰",
          name: "Newsfeed",
          blurb:
            "Post news and recognition to the locations, roles, or groups you choose. Add photos, videos, or PDFs, schedule posts ahead, and see who has read them. Posts are translated for every reader, and your team can react and comment with @mentions.",
        },
        {
          emoji: "💬",
          name: "Messages",
          blurb:
            "Chat two ways: group chats built from an audience, which update themselves as people join and leave, and direct messages one to one.",
        },
      ],
      where: "Admins switch their business over from Message Blasts themselves, right in Opus.",
      tier: "hero",
    },
    {
      slug: "agents-for-managers",
      title: "Agents for Managers",
      headline: "Agents for every Manager",
      deck: "Every Manager gets Ask Opus plus three agents: Location health, Daily summary, and New hire coach. The New hire coach guides each new hire's first 90 days. It welcomes them, flags anyone falling behind, and reminds you of 30, 60, and 90-day check-ins.",
      where: "Agents only act within each Manager's permissions.",
      tags: ["Feature", "AI"],
      tier: "companion",
    },
    {
      slug: "checklists-on-desktop",
      title: "Checklists, audits and check-ins on desktop",
      headline: "Fill out checklists on any screen",
      deck: "Complete checklists, audits, and check-ins in the Dashboard on a computer or tablet, with every step type and signatures. Save your progress and finish on either device.",
      tags: ["Feature", "Dashboard"],
      tier: "more",
    },
    {
      slug: "impersonation",
      title: "Impersonation",
      headline: "See what your team sees",
      deck: "Admins can view the Dashboard as anyone in their business, read-only.",
      where: "New Impersonate users permission, on for Admins by default.",
      tags: ["Feature", "Dashboard"],
      tier: "more",
    },
    {
      slug: "better-translations",
      title: "Better translations",
      headline: "Translations that sound natural",
      deck: "Training and posts read more naturally in every language.",
      tags: ["Improvement", "Training"],
      tier: "more",
    },
  ],
};

const october: Release = {
  slug: "2026-10",
  label: "October 2026",
  title: "October 2026 Release",
  headline: "Put Opus to work with agents",
  intro:
    "Automate the tedious work so that you can focus on what’s high impact.",
  summary:
    "Put Opus to work with agents. New this month: Agents, Opus MCP, a new Path builder, content Overviews, a video editor, profile photos, and graded Audits.",
  features: [
    {
      slug: "opus-ai-agent",
      title: "Opus Agents",
      pitch:
        "Agents answer questions about your team, find content that needs attention, and draft training for you, using only what you can already see.",
      deck: "Build agents that know your people, your content, and your data.",
      tags: ["Feature", "AI"],
      video: "/releases/2026-10/agents",
      videoAspect: "275 / 172",
      examplesTitle: "Start with a pre-trained agent, or build your own",
      examples: [
        {
          emoji: "✍️",
          name: "Content Author",
          blurb: "Turn an SOP, deck, or idea into a course, check-in, or checklist.",
        },
        {
          emoji: "🏆",
          name: "Recognition Finder",
          blurb: "People and stores worth a shoutout this week.",
        },
        {
          emoji: "☀️",
          name: "Morning Brief",
          blurb: "Yesterday at a glance, from missed checklists to new hires.",
        },
        {
          emoji: "🚀",
          name: "Launch & Rollout Tracker",
          blurb: "Build, assign, and track an LTO or policy rollout by store.",
        },
      ],
      examplesMore: "+ 12 more pre-trained agent templates",
      tier: "hero",
    },
    {
      slug: "opus-mcp",
      title: "Opus MCP",
      headline: "Also available in your AI tool",
      tags: ["Feature", "Integrations"],
      logos: [
        { name: "Claude", src: "/releases/2026-10/ai-tools/claude.svg" },
        { name: "ChatGPT", src: "/releases/2026-10/ai-tools/openai.svg" },
        { name: "Gemini", src: "/releases/2026-10/ai-tools/gemini.svg" },
        { name: "Copilot", src: "/releases/2026-10/ai-tools/copilot.svg" },
      ],
      tier: "companion",
    },
    {
      slug: "video-editor",
      title: "Video Editor",
      headline: "Polish training videos in Opus",
      deck: "Trim clips, add a voiceover or an AI voice, and add music, then save it in place.",
      tags: ["Feature", "Video"],
      video: "/releases/2026-10/video-editor",
      videoAspect: "35 / 27",
      tier: "featured",
    },
    {
      slug: "improved-path-builder",
      title: "Improved Path Builder",
      headline: "Build Paths without the guesswork",
      deck: "Keep changes in draft until you publish, and see who's on each step in the new Runs tab.",
      tags: ["Feature", "Training", "Modules"],
      video: "/releases/2026-10/path",
      videoAspect: "35 / 27",
      tier: "featured",
    },
    {
      slug: "content-detail-pages",
      title: "Content Detail Pages",
      headline: "Every piece of content, at a glance",
      deck: "A new Overview shows results, who has it, and a phone preview of what your team sees.",
      tags: ["Feature", "Training", "Operations"],
      video: "/releases/2026-10/detail",
      tier: "featured",
    },
    {
      slug: "profile-images",
      title: "Profile Photos",
      headline: "Put a face to every name",
      deck: "Let your team personalize their profiles, and recognize each other more easily.",
      tags: ["Improvement", "Team"],
      video: "/releases/2026-10/profile",
      videoAspect: "359 / 270",
      tier: "featured",
    },
    {
      slug: "audit-grades",
      title: "Audit Grades",
      headline: "Audits, graded your way",
      deck: "Grade every Audit and each section from Excellent to Needs improvement, using ranges you set.",
      tags: ["Improvement", "Audits"],
      video: "/releases/2026-10/audit",
      videoAspect: "35 / 27",
      tier: "featured",
    },
  ],
};

const RELEASES: Release[] = [november, october];

export function getReleases(): Release[] {
  return RELEASES;
}

export function getRelease(slug: string): Release | null {
  return RELEASES.find((release) => release.slug === slug) ?? null;
}

export function releaseUrl(release: Release): string {
  return `/releases/${release.slug}/`;
}

export function getLatestRelease(): Release | null {
  return RELEASES[0] ?? null;
}
