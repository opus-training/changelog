import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type RoadmapStatus = "just-launched" | "in-development" | "planned";

export type RoadmapItem = {
  slug: string;
  order: number;
  title: string;
  status: RoadmapStatus;
  eta: string;
  tags: string[];
  audience: string[];
  video: string;
  body: string;
  excerpt: string;
  url: string;
};

export const STATUS_GROUPS: { id: RoadmapStatus; label: string }[] = [
  { id: "just-launched", label: "Just launched" },
  { id: "in-development", label: "In development" },
  { id: "planned", label: "Planned" },
];

const ROADMAP_DIR = path.join(process.cwd(), "_roadmap");
const FILENAME = /^(\d+)-(.+)\.md$/;
const STATUSES = new Set<RoadmapStatus>(
  STATUS_GROUPS.map((g) => g.id),
);

function excerptFrom(body: string): string {
  const first = body.trim().split(/\n\s*\n/)[0] ?? "";
  const plain = first
    .replace(/[#>*_`\[\]]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= 200) return plain;
  return `${plain.slice(0, 197).trimEnd()}...`;
}

function strings(value: unknown): string[] {
  return Array.isArray(value) ? value.map((t) => String(t)) : [];
}

function resolveVideo(src: string): string {
  if (!src.startsWith("/")) return "";
  const file = path.join(process.cwd(), "public", src.slice(1));
  return fs.existsSync(file) ? src : "";
}

function readItem(filename: string): RoadmapItem | null {
  const match = FILENAME.exec(filename);
  if (!match) return null;
  const [, order, slug] = match;
  const raw = fs.readFileSync(path.join(ROADMAP_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const status = String(data.status ?? "") as RoadmapStatus;
  if (!STATUSES.has(status)) return null;
  const body = content.trim();
  return {
    slug,
    order: Number(order),
    title: String(data.title ?? slug),
    status,
    eta: String(data.eta ?? ""),
    tags: strings(data.tags),
    audience: strings(data.audience),
    video: resolveVideo(String(data.video ?? "")),
    body,
    excerpt: excerptFrom(body),
    url: `/roadmap/${slug}/`,
  };
}

export function getRoadmapItems(): RoadmapItem[] {
  if (!fs.existsSync(ROADMAP_DIR)) return [];
  return fs
    .readdirSync(ROADMAP_DIR)
    .map(readItem)
    .filter((p): p is RoadmapItem => p !== null)
    .sort((a, b) => a.order - b.order);
}

export function getRoadmapItem(slug: string): RoadmapItem | null {
  return getRoadmapItems().find((item) => item.slug === slug) ?? null;
}

export type StatusGroup = {
  id: RoadmapStatus;
  label: string;
  items: RoadmapItem[];
};

export function groupRoadmapByStatus(items: RoadmapItem[]): StatusGroup[] {
  return STATUS_GROUPS.map((group) => ({
    ...group,
    items: items.filter((item) => item.status === group.id),
  })).filter((group) => group.items.length > 0);
}
