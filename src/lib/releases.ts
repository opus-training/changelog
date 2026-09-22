export type FeatureTier = "hero" | "featured" | "supporting";

export type FeatureMedia =
  | "agent-workflow"
  | "mcp"
  | "path-builder"
  | "content-detail"
  | "none";

export type ReleaseFeature = {
  slug: string;
  title: string;
  deck: string;
  summary: string;
  body: string;
  tags: string[];
  bullets: { title: string; text: string }[];
  tryThis?: string;
  helpUrl: string;
  tryUrl: string;
  media: FeatureMedia;
  tier: FeatureTier;
};

export type Release = {
  slug: string;
  label: string;
  kicker: string;
  title: string;
  summary: string;
  features: ReleaseFeature[];
};

const HELP = "https://help.opus.so";
const DASHBOARD = "https://dashboard.opus.so";

const october: Release = {
  slug: "2026-10",
  label: "October 2026",
  kicker: "October 2026",
  title: "What shipped in October",
  summary:
    "Meet the Opus AI Agent, plus five updates to Paths, Courses, Audits, and team profiles.",
  features: [
    {
      slug: "opus-ai-agent",
      title: "Opus AI Agent",
      deck: "Let Opus find answers, take action, and get work done for you.",
      summary:
        "An AI agent built into the Opus Dashboard, so you can ask questions, pull reports, and create first drafts right away, with no extra setup. The Opus AI Agent uses the same permissions you already have in Opus, so it can safely follow the instructions you provide.",
      body: "The Opus AI Agent brings an AI agent into the Opus Dashboard that can answer questions, find information, and get work done using the same permissions you have in Opus. Use prebuilt agents for common tasks, or create your own agent with instructions for how you want it to work.",
      tags: ["Feature", "AI"],
      bullets: [
        {
          title: "Ask about reporting.",
          text: "Find past-due training, compare locations, pull reports, search the Library, and more.",
        },
        {
          title: "Find what needs attention.",
          text: "Search your Library for outdated or inconsistent content.",
        },
        {
          title: "Turn an idea into a first draft.",
          text: "Create Courses, Modules, Check-ins, Checklists, or Opus Docs, then review and publish them.",
        },
        {
          title: "Use prebuilt agents or build your own.",
          text: "Start with an agent designed for a specific workflow, or create one with your own instructions.",
        },
      ],
      tryThis:
        "Use the Content Audit Agent to find outdated or contradictory information across your Library.",
      helpUrl: HELP,
      tryUrl: DASHBOARD,
      media: "agent-workflow",
      tier: "hero",
    },
    {
      slug: "opus-mcp",
      title: "Opus MCP",
      deck: "Connect your Opus data to the AI tools you already use.",
      summary:
        "Work with your Opus data and content from Claude, ChatGPT, and other AI tools. The Opus MCP respects your Opus permissions and keeps anything it creates in draft until you approve.",
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
      deck: "A clearer way to build, manage, and track Paths.",
      summary:
        "Build Paths with more control and see clearly how your team is progressing. Create drafts, collaborate with others, and publish changes when your Path is ready.",
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
      tier: "featured",
    },
    {
      slug: "content-detail-pages",
      title: "Content Detail Pages",
      deck: "Everything you need to understand a Course or Module, in one place.",
      summary:
        "Understand a Course or Module without hunting across multiple tabs. See what's inside, what needs attention, and how it's performing—all in one place.",
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
      tier: "featured",
    },
    {
      slug: "profile-images",
      title: "Profile Images",
      deck: "Let your team personalize their profiles—and recognize each other more easily.",
      summary:
        "Add, crop, replace, or remove a profile photo so teammates can quickly put names to faces across Opus.",
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
      tier: "supporting",
    },
    {
      slug: "audit-thresholds",
      title: "Audit Thresholds",
      deck: "Give Audit results more meaning than pass or fail.",
      summary:
        "Add thresholds like Excellent, Good, Fair, or Needs improvement, for more granular Audit scores.",
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
      tier: "supporting",
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
