import Link from "next/link";
import { Tags } from "@/components/Tags";
import { getPosts, groupPostsByDate } from "@/lib/posts";

export default function HomePage() {
  const groups = groupPostsByDate(getPosts());
  return (
    <>
      <div className="page-head">
        <h1 className="page-title">What&rsquo;s new in Opus</h1>
        <p className="page-sub">
          New features the day they ship, and a digest of improvements and
          fixes every Friday.
        </p>
      </div>
      {groups.map((group) => (
        <section className="release" id={group.date} key={group.date}>
          <h2 className="release-date">{group.label}</h2>
          <div className="release-items">
            {group.items.map((post) => (
              <article className="row" key={post.url}>
                <div className="row-head">
                  <h3 className="row-title">
                    <Link href={post.url}>{post.title}</Link>
                  </h3>
                  <Tags tags={post.tags} />
                </div>
                <p className="row-excerpt">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
