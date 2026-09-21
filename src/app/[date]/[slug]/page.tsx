import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Tags } from "@/components/Tags";
import {
  formatDateLabel,
  getPost,
  getPosts,
  SITE,
} from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ date: post.date, slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ date: string; slug: string }>;
}): Promise<Metadata> {
  return params.then(({ date, slug }) => {
    const post = getPost(date, slug);
    if (!post) return {};
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        url: `${SITE.url}${post.url}`,
      },
    };
  });
}

export default async function EntryPage({
  params,
}: {
  params: Promise<{ date: string; slug: string }>;
}) {
  const { date, slug } = await params;
  const post = getPost(date, slug);
  if (!post) notFound();
  return (
    <article className="entry">
      <time className="entry-date" dateTime={post.date}>
        {formatDateLabel(post.date)}
      </time>
      <h1 className="entry-title">{post.title}</h1>
      <Tags tags={post.tags} />
      <div className="entry-body">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
      <Link className="back-link" href="/">
        <span aria-hidden="true">&larr;</span> All updates
      </Link>
    </article>
  );
}
