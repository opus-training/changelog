/** "companion" renders inside the hero section, as part of its story. */
export type FeatureTier = "hero" | "companion" | "featured";

export type ReleaseFeature = {
  slug: string;
  title: string;
  headline?: string;
  deck: string;
  pitch?: string;
  /** Who gets it and where to find it, in one line. */
  where?: string;
  /** Optional caveat people should know before they start. */
  note?: string;
  /** Optional quiet hint at what's coming next. */
  teaser?: string;
  tags: string[];
  video?: string;
  /** Native aspect ratio for framed clips, e.g. "35 / 27"; shown uncropped. */
  videoAspect?: string;
  /** Logos of the tools it works with, shown instead of a video. */
  logos?: { name: string; src: string }[];
  tier: FeatureTier;
};

export type Release = {
  slug: string;
  label: string;
  title: string;
  /** Big line at the top of the release page. */
  headline: string;
  summary: string;
  features: ReleaseFeature[];
};

const october: Release = {
  slug: "2026-10",
  label: "October 2026",
  title: "October 2026 Release",
  headline: "Automate the tedious tasks so you can focus on what’s high impact.",
  summary:
    "Automate the tedious tasks so you can focus on what’s high impact. New this month: Agents, Opus MCP, a new Path builder, content Overviews, a video editor, profile photos, and graded Audits.",
  features: [
    {
      slug: "opus-ai-agent",
      title: "Opus Agents",
      headline: "Put Opus to work with agents.",
      pitch:
        "Agents answer questions about your team, find content that needs attention, and draft training for you, using only what you can already see.",
      deck: "Build agents that know your people, your content, and your data.",
      tags: ["Feature", "AI"],
      video: "/releases/2026-10/agents",
      videoAspect: "275 / 172",
      tier: "hero",
    },
    {
      slug: "opus-mcp",
      title: "Opus MCP",
      headline: "All agent functionality also available in your AI tool.",
      deck: "Connect Opus to the AI tools you already use. If your AI tool is also connected to your scheduling or HR system, ask one question across all of them, like who is working this weekend without a current food safety certification.",
      where: "For Admins and Managers, and each sees only what they can see in Opus. Admins connect in Settings › AI connections, and Managers connect from their AI tool.",
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
      slug: "improved-path-builder",
      title: "Improved Path Builder",
      headline: "Build Paths without the guesswork.",
      deck: "Keep changes in draft until you publish, and see who's on each step in the new Runs tab.",
      tags: ["Feature", "Training", "Modules"],
      video: "/releases/2026-10/path",
      videoAspect: "35 / 27",
      tier: "featured",
    },
    {
      slug: "content-detail-pages",
      title: "Content Detail Pages",
      headline: "Every piece of content, at a glance.",
      deck: "A new Overview shows results, who has it, and a phone preview of what your team sees.",
      tags: ["Feature", "Training", "Operations"],
      video: "/releases/2026-10/detail",
      tier: "featured",
    },
    {
      slug: "video-editor",
      title: "Video Editor",
      headline: "Polish training videos in Opus.",
      deck: "Trim clips, add a voiceover or an AI voice, and add music, then save it in place.",
      where: "For Admins, plus Managers who can edit the training. Click Edit video on any uploaded video.",
      tags: ["Feature", "Video"],
      video: "/releases/2026-10/video-editor",
      videoAspect: "35 / 27",
      tier: "featured",
    },
    {
      slug: "profile-images",
      title: "Profile Photos",
      headline: "Put a face to every name.",
      deck: "Let your team personalize their profiles, and recognize each other more easily.",
      where: "For your whole team, in the Opus Dashboard and the Opus Training App.",
      teaser:
        "Psst. Those faces are about to get busier. A new Newsfeed and group messages arrive with Messaging in November.",
      tags: ["Improvement", "Team"],
      video: "/releases/2026-10/profile",
      videoAspect: "359 / 270",
      tier: "featured",
    },
    {
      slug: "audit-thresholds",
      title: "Audit Thresholds",
      headline: "Audits, graded your way.",
      deck: "Grade every Audit and each section from Excellent to Needs improvement, using ranges you set.",
      tags: ["Improvement", "Audits"],
      video: "/releases/2026-10/audit",
      videoAspect: "35 / 27",
      tier: "featured",
    },
  ],
};

const RELEASES: Release[] = [october];

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
