export type FeatureTier = "hero" | "featured";

export type FeatureMedia =
  | "agent-workflow"
  | "mcp"
  | "path-builder"
  | "content-detail"
  | "none";

export type Fact = { main: string; sub?: string };

export type FeatureDetail = {
  /** One-sentence outcome shown under the title. */
  lede: string;
  /** What it does, in plain language. */
  intro: string;
  /** Each fact: a short answer, plus optional supporting detail. */
  who: Fact;
  where: Fact;
  access: Fact;
  /** Optional caveat people should know before they start. */
  note?: string;
  highlights: { title: string; text: string }[];
  /** Concrete first thing to try. */
  firstStep: string;
  /** Specific label for the primary button. */
  ctaLabel: string;
  /** Deep link for the primary button; defaults to tryUrl. */
  ctaUrl?: string;
};

export type ReleaseFeature = {
  slug: string;
  title: string;
  headline?: string;
  deck: string;
  pitch?: string;
  highlights?: { title: string; text: string }[];
  tags: string[];
  tryThis?: string;
  helpUrl: string;
  tryUrl: string;
  media: FeatureMedia;
  video?: string;
  /** Native aspect ratio for framed clips, e.g. "35 / 27"; shown uncropped. */
  videoAspect?: string;
  tier: FeatureTier;
  detail: FeatureDetail;
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
      tags: ["Feature", "AI"],
      tryThis:
        "Add the Stale Content Hunter template to find unused or outdated content across your Library.",
      helpUrl: `${HELP}/en/articles/17153956`,
      tryUrl: `${DASHBOARD}/agents`,
      media: "agent-workflow",
      video: "/releases/2026-10/agents",
      tier: "hero",
      detail: {
        lede:
          "Agents that answer questions about your training and find what needs attention.",
        intro:
          "Agents live in a new Agents tab in the Opus Dashboard. Start with a ready-made agent or write your own instructions, then ask it to pull a report, answer a question about your team's training, or find content that needs attention. It works inside your permissions and shows where every answer came from.",
        who: { main: "Admins", sub: "Shared with every Admin" },
        where: { main: "Opus Dashboard", sub: "Left menu › Agents" },
        access: { main: "On by default", sub: "No setup needed" },
        highlights: [
          {
            title: "Answers from your own data",
            text: "Ask about past-due training, compare locations, or pull a report without building it yourself.",
          },
          {
            title: "Sources you can check",
            text: "Every answer links back to the content or data it used.",
          },
          {
            title: "Inside your permissions",
            text: "An agent sees only what you can see in Opus.",
          },
          {
            title: "Build once, share with Admins",
            text: "Agents you create are available to every Admin in your org.",
          },
        ],
        firstStep:
          "Open a ready-made agent and ask which training is past due at each location.",
        ctaLabel: "Open Agents",
      },
    },
    {
      slug: "opus-mcp",
      title: "Opus MCP",
      headline: "Opus, inside Claude and ChatGPT.",
      deck: "Connect your Opus data to the AI tools you already use.",
      tags: ["Feature", "Integrations"],
      helpUrl: `${HELP}/en/articles/16531461`,
      tryUrl: DASHBOARD,
      media: "mcp",
      video: "/releases/2026-10/mcp",
      videoAspect: "35 / 27",
      tier: "featured",
      detail: {
        lede:
          "Work with your Opus data from Claude, ChatGPT, Copilot, or Gemini.",
        intro:
          "Opus MCP connects Opus to the AI assistant you already use. If your assistant is already connected to other tools, like scheduling, HR, or your POS, you can ask questions that pull in your training data too. It runs as you, so it sees only what you can see and does only what you can already do in Opus.",
        who: { main: "Admins and Managers", sub: "Connects with your own access" },
        where: { main: "Your AI assistant", sub: "Claude, ChatGPT, Copilot, Gemini" },
        access: { main: "Set it up yourself", sub: "Settings › AI Connections" },
        highlights: [
          {
            title: "Reports in plain language",
            text: "Ask for completion or certification reports the way you'd ask a colleague.",
          },
          {
            title: "You choose the access",
            text: "Connect with read-only access, or allow changes when you're ready.",
          },
          {
            title: "Nothing goes live on its own",
            text: "Anything it creates stays a draft until someone publishes it.",
          },
          {
            title: "Guardrails built in",
            text: "Risky changes need confirmation, and every action is logged.",
          },
        ],
        firstStep:
          "Connect with read-only access first, then allow changes once you're comfortable.",
        ctaLabel: "Connect your AI tool",
        ctaUrl: `${DASHBOARD}/settings`,
      },
    },
    {
      slug: "improved-path-builder",
      title: "Improved Path Builder",
      headline: "Build Paths without the guesswork.",
      deck: "A clearer way to build, manage, and track Paths.",
      tags: ["Feature", "Training", "Modules"],
      tryThis:
        "Open one of your existing Paths and take a look around. Check the Trainee progress view to see who's currently working through it.",
      helpUrl: `${HELP}/en/articles/9460316`,
      tryUrl: `${DASHBOARD}/path-builder`,
      media: "path-builder",
      video: "/releases/2026-10/path",
      videoAspect: "35 / 27",
      tier: "featured",
      detail: {
        lede:
          "Paths are now easier to build, publish, and track.",
        intro:
          "Give each Path a name, keep it in draft while you build, and publish it when it's ready. Once it's live, you can follow your team's progress through every step.",
        who: { main: "Admins", sub: "Plus Managers with permission" },
        where: { main: "Opus Dashboard", sub: "Training › Paths" },
        access: { main: "On for eligible plans", sub: "No setup needed" },
        highlights: [
          {
            title: "Track every run",
            text: "The Runs tab shows who on your team is in a Path, the step they're on, and when they started and finished.",
          },
          {
            title: "Names you recognize",
            text: "Give every Path a clear name, so it's easy to find and manage.",
          },
          {
            title: "Build at your own pace",
            text: "Changes stay in draft until you publish them.",
          },
          {
            title: "Edit together",
            text: "See when another Admin is in the same Path, with every change saved as you go.",
          },
        ],
        firstStep:
          "Open one of your Paths and check the Runs tab to see who's on each step.",
        ctaLabel: "Open Paths",
        ctaUrl: `${DASHBOARD}/paths`,
      },
    },
    {
      slug: "content-detail-pages",
      title: "Content Detail Pages",
      headline: "Every Course, at a glance.",
      deck: "Everything you need to understand a Course or Module, in one place.",
      tags: ["Feature", "Courses", "Modules"],
      tryThis:
        "Open a Course you manage and start with the Overview. Use the mobile preview to see how it will look to a Trainee the next time you're reviewing or updating content.",
      helpUrl: `${HELP}/en/articles/17154881`,
      tryUrl: `${DASHBOARD}/library`,
      media: "content-detail",
      video: "/releases/2026-10/detail",
      tier: "featured",
      detail: {
        lede:
          "See how a Course or Module is landing, on one screen.",
        intro:
          "Open a Course or Module and you'll land on a new Overview tab. It shows what needs attention, who it's for, how it's performing, what's inside, what changed recently, and where else it's used.",
        who: { main: "Admins and Managers", sub: "Who build or assign content" },
        where: { main: "Opus Dashboard", sub: "Training › Library" },
        access: { main: "On by default", sub: "No setup needed" },
        note:
          "Assignments are now called Required training, and Library access is now Self-serve in Library. Both live together on the new Audience tab.",
        highlights: [
          {
            title: "A ranked to-do list",
            text: "Needs attention puts the biggest issues first, including the questions your team misses most.",
          },
          {
            title: "Who has it, in one place",
            text: "The Audience tab shows your rules first, then who on your team they reach.",
          },
          {
            title: "Straight to the fix",
            text: "Every finding links to the tab where you can act on it.",
          },
        ],
        firstStep:
          "Open a Course you own and start with the Needs attention card.",
        ctaLabel: "Open your Library",
      },
    },
    {
      slug: "profile-images",
      title: "Profile Images",
      headline: "Put a face to every name.",
      deck: "Let your team personalize their profiles—and recognize each other more easily.",
      tags: ["Improvement", "Team"],
      tryThis:
        "Ask everyone to add a profile photo ahead of the Opus Messaging update in November, or use it as a quick way to put names to faces across your business.",
      helpUrl: `${HELP}/en/articles/17154255`,
      tryUrl: DASHBOARD,
      media: "none",
      video: "/releases/2026-10/profile",
      videoAspect: "359 / 270",
      tier: "featured",
      detail: {
        lede:
          "Swap your initials for a photo, and see it everywhere in Opus.",
        intro:
          "Your team can add profile photos from the Opus Dashboard or the Opus Training App. Team members crop their photo to fit, and it shows up wherever their avatar appears in Opus.",
        who: { main: "Your whole team", sub: "Team members add their own" },
        where: { main: "Your profile", sub: "Profile icon, top right" },
        access: { main: "On by default", sub: "Opus Training App and Dashboard" },
        highlights: [
          {
            title: "Put names to faces",
            text: "Your team can recognize each other more easily, even across locations.",
          },
          {
            title: "Ready for Messaging",
            text: "Photos help your team see who they're talking to in the new Messaging experience coming in November.",
          },
          {
            title: "Admin control",
            text: "Photos stay within your org, and franchise privacy settings still apply: if a name is hidden, the photo is too. Team members who skip it keep their initials.",
          },
        ],
        firstStep:
          "Ask your team to add a photo before Messaging arrives in November.",
        ctaLabel: "Add your photo",
        ctaUrl: `${DASHBOARD}/my-profile`,
      },
    },
    {
      slug: "audit-thresholds",
      title: "Audit Thresholds",
      headline: "Audits, graded your way.",
      deck: "Give Audit results more meaning than pass or fail.",
      tags: ["Improvement", "Audits"],
      tryThis:
        "Open an Audit and check the Scoring settings. If pass/fail does not give your team enough context, try setting up a threshold-based grading scale.",
      helpUrl: `${HELP}/en/articles/17040944`,
      tryUrl: DASHBOARD,
      media: "none",
      video: "/releases/2026-10/audit",
      videoAspect: "35 / 27",
      tier: "featured",
      detail: {
        lede:
          "Grade Audits on a scale, not just pass or fail.",
        intro:
          "Audits can now be scored with thresholds like Excellent, Good, Fair, and Needs improvement. You set the percentage ranges, and every completed Audit gets a grade for the whole Audit and for each section. Grades show in the Opus Dashboard and the Opus Training App.",
        who: { main: "Teams that use Audits", sub: "Builders set the grading scale" },
        where: { main: "Opus Dashboard", sub: "Operations › Audits" },
        access: { main: "On by default", sub: "For every org with Audits" },
        note:
          "Threshold grades don't trigger fail-based follow-ups or notifications. Keep Pass/Fail on Audits that rely on those.",
        highlights: [
          {
            title: "Start from a ready scale",
            text: "Four default grades you can rename and recolor.",
          },
          {
            title: "Grades for every section",
            text: "See where a location is strong and where it slips.",
          },
          {
            title: "History stays accurate",
            text: "A submitted Audit keeps its grade, even if the Audit changes later.",
          },
        ],
        firstStep:
          "Pick an Audit where pass/fail hides too much, and switch it to Scoring thresholds.",
        ctaLabel: "Set up thresholds",
        ctaUrl: `${DASHBOARD}/library/forms?type=audits`,
      },
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
