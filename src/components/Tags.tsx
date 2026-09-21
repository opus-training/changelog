import { slugifyTag } from "@/lib/posts";

export function Tags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <span className="tags">
      {tags.map((tag) => (
        <span key={tag} className={`tag tag-${slugifyTag(tag)}`}>
          {tag}
        </span>
      ))}
    </span>
  );
}
