export type FeatureTier = "hero" | "featured";

export type FeatureMedia =
  | "agent-workflow"
  | "mcp"
  | "path-builder"
  | "content-detail"
  | "none";

export type ReleaseFeature = {
  slug: string;
  title: string;
  headline?: string;
  deck: string;
  pitch?: string;
  highlights?: { title: string; text: string }[];
  body: string;
  tags: string[];
  bullets: { title: string; text: string }[];
  tryThis?: string;
  helpUrl: string;
  tryUrl: string;
  media: FeatureMedia;
  video?: string;
  tier: FeatureTier;
};

export type Release = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  features: ReleaseFeature[];
};

const HELP = "https://help.opus.so";
const DASHBOARD = "https://dashboard.opus.so";

const october: Release = {
  slug: "2026-10",
  label: "October 2026",
  title: "October 2026 Release",
  summary:
    "Build AI agents in Opus that know your people, your content, and your data.",
  features: [
    {
      slug: "opus-ai-agent",
      title: "Opus AI Agent",
      headline: "Put Opus to work with agents.",
      pitch:
        "Each agent is a set of instructions you control, and it only sees what you can see.",
      highlights: [
        {
          title: "Start from a template.",
          text: "Onboarding, compliance, content, reporting, and more.",
        },
        {
          title: "Build your own.",
          text: "Write instructions for how it should work.",
        },
        {
          title: "Share with your team.",
          text: "Every admin in your org uses the same agents.",
        },
      ],
      deck: "Build agents that know your people, your content, and your data.",
      body: "The Agents tab in the Opus Dashboard lets you build AI agents that answer questions, find what needs attention, and draft content for your team. Each agent is a set of instructions you control. Start from templates for onboarding, compliance, content, reporting, and more, or build one from scratch. Every admin in your org shares the same agents, your chats stay private, and an agent only sees what you can see.",
      tags: ["Feature", "AI"],
      bullets: [
        {
          title: "Start from a template.",
          text: "Add a ready-made agent for onboarding, compliance, content, reporting, and more.",
        },
        {
          title: "Build your own.",
          text: "Give an agent a name and instructions for how you want it to work.",
        },
        {
          title: "Get answers from your data.",
          text: "Find past-due training, compare locations, pull reports, search the Library, and more.",
        },
        {
          title: "Turn an idea into a first draft.",
          text: "Create Courses, Modules, Check-ins, Checklists, or Opus Docs, then review and publish them.",
        },
        {
          title: "Share it with your team.",
          text: "Every admin in your org uses the same agents, and each chat stays private.",
        },
      ],
      tryThis:
        "Add the Stale Content Hunter template to find unused or outdated content across your Library.",
      helpUrl: HELP,
      tryUrl: `${DASHBOARD}/agents`,
      media: "agent-workflow",
      video: "/releases/2026-10/agents",
      tier: "hero",
    },
    {
      slug: "opus-mcp",
      title: "Opus MCP",
      headline: "Opus, inside Claude and ChatGPT.",
      deck: "Connect your Opus data to the AI tools you already use.",
      body: "Opus MCP connects your Opus Dashboard to Claude, ChatGPT, or another AI tool, so you can work with Opus from the same place you already use for research, writing, and analysis. The connection runs as the person who authorized it, so it only has access to your business and the actions available to that person in Opus.",
      tags: ["Feature", "Integrations"],
      bullets: [
        {
          title: "Ask questions across your Opus data.",
          text: "Compare completion data, reports, certifications, and training trends without checking records one at a time.",
        },
        {
          title: "Use Opus content from outside the Dashboard.",
          text: "Search, analyze, and work with your training content from your connected AI tool.",
        },
        {
          title: "Choose read or write access.",
          text: "Give the connection read-only access, or enable write access when you're ready.",
        },
        {
          title: "Keep control of changes.",
          text: "Anything created through MCP stays in draft until someone reviews and publishes it.",
        },
      ],
      helpUrl: HELP,
      tryUrl: DASHBOARD,
      media: "mcp",
      tier: "featured",
    },
    {
      slug: "improved-path-builder",
      title: "Improved Path Builder",
      headline: "Build Paths without the guesswork.",
      deck: "A clearer way to build, manage, and track Paths.",
      body: "We've rebuilt the Path Builder so Admins can manage Paths more easily and see Trainee progress more clearly. Your existing Paths and data have already been migrated, so your current training can continue without starting over.",
      tags: ["Feature", "Training", "Modules"],
      bullets: [
        {
          title: "Keep training moving.",
          text: "Trainees already working through a Path can continue where they left off.",
        },
        {
          title: "Build with more control.",
          text: "Create a Path as a draft, make changes, and publish it when it's ready.",
        },
        {
          title: "Work together more easily.",
          text: "See when another Admin is editing the same Path, with changes synced as you work.",
        },
        {
          title: "Make changes with confidence.",
          text: "Get validation before publishing and use undo and redo while you build.",
        },
      ],
      tryThis:
        "Open one of your existing Paths and take a look around. Check the Trainee progress view to see who's currently working through it.",
      helpUrl: HELP,
      tryUrl: `${DASHBOARD}/path-builder`,
      media: "path-builder",
      video: "/releases/2026-10/path",
      tier: "featured",
    },
    {
      slug: "content-detail-pages",
      title: "Content Detail Pages",
      headline: "Every Course, at a glance.",
      deck: "Everything you need to understand a Course or Module, in one place.",
      body: "The new Content Detail Pages give content owners one clear place to understand a Course or Module. See what needs attention, who has access, how it's performing, what's inside, what changed, and where it's being used.",
      tags: ["Feature", "Courses", "Modules"],
      bullets: [
        {
          title: "See what needs attention.",
          text: "Review important findings and jump directly to where you can address them.",
        },
        {
          title: "Understand your audience.",
          text: "See who is assigned the content and clearly distinguish Required training from Self-serve in Library.",
        },
        {
          title: "Preview the Trainee experience.",
          text: "See what a Course or Module will look like on a Trainee's phone directly from the Dashboard with the improved mobile preview.",
        },
        {
          title: "Review performance at a glance.",
          text: "See completion data and identify the questions where Trainees are struggling most.",
        },
        {
          title: "Follow changes over time.",
          text: "Review recent activity and see where else the Course or Module is being used.",
        },
      ],
      tryThis:
        "Open a Course you manage and start with the Overview. Use the mobile preview to see how it will look to a Trainee the next time you're reviewing or updating content.",
      helpUrl: HELP,
      tryUrl: `${DASHBOARD}/library`,
      media: "content-detail",
      video: "/releases/2026-10/detail",
      tier: "featured",
    },
    {
      slug: "profile-images",
      title: "Profile Images",
      headline: "Put a face to every name.",
      deck: "Let your team personalize their profiles—and recognize each other more easily.",
      body: "Team members can now add a profile photo from Dashboard or mobile. Profile images also help teams get ready for the new messaging experience coming in November, where recognizing who you're talking to will be even more important.",
      tags: ["Improvement", "Team"],
      bullets: [
        {
          title: "Add it from anywhere.",
          text: "Add, crop, replace, or remove a profile photo from Dashboard or mobile.",
        },
        {
          title: "See it across Opus.",
          text: "Your profile photo appears wherever your avatar is shown.",
        },
        {
          title: "Get ready for November.",
          text: "Have your team add profile photos ahead of the new Opus Messaging update.",
        },
      ],
      tryThis:
        "Ask everyone to add a profile photo ahead of the Opus Messaging update in November, or use it as a quick way to put names to faces across your business.",
      helpUrl: HELP,
      tryUrl: DASHBOARD,
      media: "none",
      video: "/releases/2026-10/profile",
      tier: "featured",
    },
    {
      slug: "audit-thresholds",
      title: "Audit Thresholds",
      headline: "Audits, graded your way.",
      deck: "Give Audit results more meaning than pass or fail.",
      body: "Audits can now use scoring thresholds instead of a simple pass/fail result. Set thresholds such as Excellent, Good, Fair, and Needs improvement, then see the resulting grade wherever a completed Audit appears.",
      tags: ["Improvement", "Audits"],
      bullets: [
        {
          title: "Choose how Audits are scored.",
          text: "Use No score, Pass/Fail, or Scoring thresholds for each Audit version.",
        },
        {
          title: "Set the grading scale.",
          text: "Define the percentage ranges for each threshold, from 0 to 100%.",
        },
        {
          title: "See grades at a glance.",
          text: "Threshold labels and colors appear throughout Dashboard and mobile wherever completed Audits are shown.",
        },
        {
          title: "Keep historical results accurate.",
          text: "Completed Audits keep the thresholds that applied when they were submitted, even if the Audit is edited later.",
        },
        {
          title: "Score sections, too.",
          text: "See threshold grades for the overall Audit and for each section.",
        },
      ],
      tryThis:
        "Open an Audit and check the Scoring settings. If pass/fail does not give your team enough context, try setting up a threshold-based grading scale.",
      helpUrl: HELP,
      tryUrl: DASHBOARD,
      media: "none",
      video: "/releases/2026-10/audit",
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

export function getFeature(
  releaseSlug: string,
  featureSlug: string,
): ReleaseFeature | null {
  const release = getRelease(releaseSlug);
  return release?.features.find((feature) => feature.slug === featureSlug) ?? null;
}

export function featureUrl(release: Release, feature: ReleaseFeature): string {
  return `/releases/${release.slug}/${feature.slug}/`;
}

export function releaseUrl(release: Release): string {
  return `/releases/${release.slug}/`;
}

export function getLatestRelease(): Release | null {
  return RELEASES[0] ?? null;
}
