import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Tags } from "@/components/Tags";
import {
  getRoadmapItem,
  getRoadmapItems,
  STATUS_GROUPS,
} from "@/lib/roadmap";
import { SITE } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getRoadmapItems().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const item = getRoadmapItem(slug);
    if (!item) return {};
    return {
      title: item.title,
      description: item.excerpt,
      openGraph: {
        title: item.title,
        description: item.excerpt,
        type: "article",
        url: `${SITE.url}${item.url}`,
      },
    };
  });
}

export default async function RoadmapItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getRoadmapItem(slug);
  if (!item) notFound();
  const status =
    STATUS_GROUPS.find((group) => group.id === item.status)?.label ??
    item.status;
  return (
    <article className="entry roadmap-entry">
      <p className="entry-date">
        <span className={`status-pill status-${item.status}`}>{status}</span>
        {item.eta ? <span>{item.eta}</span> : null}
      </p>
      <h1 className="entry-title">{item.title}</h1>
      <Tags tags={item.tags} />
      {item.audience.length > 0 ? (
        <p className="row-meta">
          <span>{item.audience.join(" · ")}</span>
        </p>
      ) : null}
      {item.video ? (
        <video
          className="entry-video"
          src={item.video}
          controls
          playsInline
          preload="metadata"
        />
      ) : null}
      <div className="entry-body">
        <ReactMarkdown>{item.body}</ReactMarkdown>
      </div>
      <Link className="back-link" href="/roadmap/">
        <span aria-hidden="true">&larr;</span> All roadmap
      </Link>
    </article>
  );
}
