import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostKind = "feature" | "digest" | string;

export type Post = {
  slug: string;
  date: string;
  title: string;
  kind: PostKind;
  tags: string[];
  body: string;
  excerpt: string;
  url: string;
};

const POSTS_DIR = path.join(process.cwd(), "_posts");
const FILENAME = /^(\d{4}-\d{2}-\d{2})-(.+)\.md$/;
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDateLabel(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  return `${MONTHS[Number(m[2]) - 1]} ${Number(m[3])}, ${m[1]}`;
}

export function slugifyTag(tag: string): string {
  return tag
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function excerptFrom(body: string): string {
  const first = body.trim().split(/\n\s*\n/)[0] ?? "";
  const plain = first
    .replace(/[#>*_`\[\]]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= 200) return plain;
  return `${plain.slice(0, 197).trimEnd()}...`;
}

function yamlDate(value: unknown, fallback: string): string {
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    return value.slice(0, 10);
  }
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const y = value.getUTCFullYear();
    const m = String(value.getUTCMonth() + 1).padStart(2, "0");
    const d = String(value.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  return fallback;
}

function readPost(filename: string): Post | null {
  const match = FILENAME.exec(filename);
  if (!match) return null;
  const [, fileDate, slug] = match;
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const date = yamlDate(data.date, fileDate);
  const tags = Array.isArray(data.tags)
    ? data.tags.map((t) => String(t))
    : [];
  return {
    slug,
    date,
    title: String(data.title ?? slug),
    kind: String(data.kind ?? ""),
    tags,
    body: content.trim(),
    excerpt: excerptFrom(content),
    url: `/${date}/${slug}/`,
  };
}

export function getPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .map(readPost)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getPost(date: string, slug: string): Post | null {
  return getPosts().find((p) => p.date === date && p.slug === slug) ?? null;
}

export type ReleaseGroup = {
  date: string;
  label: string;
  items: Post[];
};

export function groupPostsByDate(posts: Post[]): ReleaseGroup[] {
  const groups: ReleaseGroup[] = [];
  for (const post of posts) {
    const last = groups[groups.length - 1];
    if (last && last.date === post.date) {
      last.items.push(post);
    } else {
      groups.push({
        date: post.date,
        label: formatDateLabel(post.date),
        items: [post],
      });
    }
  }
  for (const group of groups) {
    const features = group.items.filter((p) => p.kind === "feature");
    const rest = group.items.filter((p) => p.kind !== "feature");
    group.items = [...features, ...rest];
  }
  return groups;
}

export const SITE = {
  title: "Opus Changelog",
  description: "New features and fixes in Opus, published every Friday.",
  url: "https://changelog.opus.so",
};
