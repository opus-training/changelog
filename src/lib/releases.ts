export type FeatureTier = "hero" | "featured";

export type ReleaseFeature = {
  slug: string;
  title: string;
  headline?: string;
  deck: string;
  pitch?: string;
  highlights?: { title: string; text: string }[];
  /** Who gets it and where to find it, in one line. */
  where: string;
  /** Optional caveat people should know before they start. */
  note?: string;
  /** Optional quiet hint at what's coming next. */
  teaser?: string;
  tags: string[];
  tryThis?: string;
  helpUrl: string;
  tryUrl: string;
  /** Specific label for the try button. */
  ctaLabel: string;
  video?: string;
  /** Native aspect ratio for framed clips, e.g. "35 / 27"; shown uncropped. */
  videoAspect?: string;
  tier: FeatureTier;
};

export type Release = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  features: ReleaseFeature[];
};

const DASHBOARD = "https://dashboard.opus.so";

const october: Release = {
  slug: "2026-10",
  label: "October 2026",
  title: "October 2026 Release",
  summary:
    "Build AI agents that know your people, your content, and your data. Plus Opus MCP, a new Path builder, content Overviews, a video editor, profile photos, and graded Audits.",
  features: [
    {
      slug: "opus-ai-agent",
      title: "Opus Agents",
      headline: "Put Opus to work with agents.",
      pitch:
        "Agents answer questions about your team, find content that needs attention, and draft training for you, using only what you can already see.",
      highlights: [
        {
          title: "Start from a template.",
          text: "Onboarding, compliance, content, reporting, and more.",
        },
        {
          title: "Build your own.",
          text: "Write instructions in your own words, like how to check past-due training, and it follows them every time you ask.",
        },
        {
          title: "Share with other Admins.",
          text: "Every Admin in your business can use the agents you build.",
        },
      ],
      deck: "Build agents that know your people, your content, and your data.",
      where: "For Admins. Find them in the Agents section of the left menu.",
      ctaLabel: "Open Agents",
      tags: ["Feature", "AI"],
      tryThis:
        "Add the Library Manager template and ask it to find duplicate or stale content in your Library.",
      helpUrl: "https://help.opus.so/en/articles/17153956",
      tryUrl: `${DASHBOARD}/agents`,
      video: "/releases/2026-10/agents",
      videoAspect: "275 / 172",
      tier: "hero",
    },
    {
      slug: "opus-mcp",
      title: "Opus MCP",
      headline: "Opus, inside Claude and ChatGPT.",
      deck: "Connect Opus to the AI tools you already use. If your AI tool is also connected to your scheduling or HR system, ask one question across all of them, like who is working this weekend without a current food safety certification.",
      where: "For Admins and Managers, and each sees only what they can see in Opus. Admins connect in Settings › AI connections, and Managers connect from their AI tool.",
      ctaLabel: "Connect your AI tool",
      tags: ["Feature", "Integrations"],
      helpUrl: "https://help.opus.so/en/articles/16531461-getting-started-opus-mcp",
      tryUrl: `${DASHBOARD}/settings/ai-connections`,
      video: "/releases/2026-10/mcp",
      videoAspect: "35 / 27",
      tier: "featured",
    },
    {
      slug: "improved-path-builder",
      title: "Improved Path Builder",
      headline: "Build Paths without the guesswork.",
      deck: "Keep changes in draft until you publish, and see who's on each step in the new Runs tab.",
      where: "For Admins, plus Managers with permission. Training › Paths.",
      ctaLabel: "Open Paths",
      tags: ["Feature", "Training", "Modules"],
      tryThis:
        "Open one of your existing Paths and take a look around. Check the Runs tab to see who's currently working through it.",
      helpUrl: "https://help.opus.so/en/articles/9460316-paths-overview",
      tryUrl: `${DASHBOARD}/paths`,
      video: "/releases/2026-10/path",
      videoAspect: "35 / 27",
      tier: "featured",
    },
    {
      slug: "content-detail-pages",
      title: "Content Detail Pages",
      headline: "Every piece of content, at a glance.",
      deck: "A new Overview shows results, who has it, and a phone preview of what your team sees.",
      where: "For Admins and Managers. Open any Course, Module, Check-in, Resource, Checklist, or Audit.",
      note:
        "The Manage tab is gone: who gets your content is now on the Overview, and the assigned, past due, and self-serve lists are under Reporting.",
      ctaLabel: "Open your Library",
      tags: ["Feature", "Training", "Operations"],
      tryThis:
        "Open a Course you manage and start with the Overview. Use the phone preview to see it the way your team does, then open Build to frame a screen's media with Content Zoom.",
      helpUrl: "https://help.opus.so/en/articles/17154881-content-pages-overview",
      tryUrl: `${DASHBOARD}/library`,
      video: "/releases/2026-10/detail",
      tier: "featured",
    },
    {
      slug: "video-editor",
      title: "Video Editor",
      headline: "Polish training videos in Opus.",
      deck: "Trim clips, add a voiceover or an AI voice, and add music, then save it in place.",
      where: "For Admins, plus Managers who can edit the training. Click Edit video on any uploaded video.",
      ctaLabel: "Open your Library",
      tags: ["Feature", "Video"],
      tryThis:
        "Open a training video your team filmed on a phone and trim it down to the steps that matter.",
      helpUrl: "https://help.opus.so/en/articles/17297854",
      tryUrl: `${DASHBOARD}/library`,
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
      ctaLabel: "Add your photo",
      tags: ["Improvement", "Team"],
      tryThis:
        "Ask everyone to add a profile photo ahead of the Opus Messaging update in November, or use it as a quick way to put names to faces across your business.",
      helpUrl: "https://help.opus.so/en/articles/17154255",
      tryUrl: `${DASHBOARD}/my-profile`,
      video: "/releases/2026-10/profile",
      videoAspect: "359 / 270",
      tier: "featured",
    },
    {
      slug: "audit-thresholds",
      title: "Audit Thresholds",
      headline: "Audits, graded your way.",
      deck: "Grade every Audit and each section from Excellent to Needs improvement, using ranges you set.",
      where: "For teams that use Audits. Open an Audit and choose Scoring.",
      ctaLabel: "Set up thresholds",
      tags: ["Improvement", "Audits"],
      tryThis:
        "Open an Audit and check the Scoring settings. If pass/fail does not give your team enough context, try setting up a threshold-based grading scale.",
      helpUrl: "https://help.opus.so/en/articles/17040944",
      tryUrl: `${DASHBOARD}/library/forms?type=audits`,
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
