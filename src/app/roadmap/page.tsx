import type { Metadata } from "next";
import Link from "next/link";
import { Tags } from "@/components/Tags";
import { getRoadmapItems, groupRoadmapByStatus } from "@/lib/roadmap";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "What Opus is building next.",
};

export default function RoadmapPage() {
  const groups = groupRoadmapByStatus(getRoadmapItems());
  return (
    <>
      <div className="page-head">
        <h1 className="page-title">What&rsquo;s next in Opus</h1>
        <p className="page-sub">
          What we&rsquo;re building now, what&rsquo;s after that, and what just
          landed. Timing is a guide, not a promise.
        </p>
      </div>
      <div className="board">
        {groups.map((group) => (
          <section className="board-col" id={group.id} key={group.id}>
            <header className="board-col-head">
              <p className="board-col-when">{group.when}</p>
              <h2 className="board-col-title">{group.label}</h2>
            </header>
            <div className="board-cards">
              {group.items.map((item) => (
                <article className="row" key={item.url}>
                  <div className="row-head">
                    <h3 className="row-title">
                      <Link href={item.url}>{item.title}</Link>
                    </h3>
                    <Tags tags={item.tags} />
                  </div>
                  <p className="row-excerpt">{item.excerpt}</p>
                  {(item.eta || item.audience.length > 0) && (
                    <p className="row-meta">
                      {item.eta ? <span>{item.eta}</span> : null}
                      {item.audience.length > 0 ? (
                        <span>{item.audience.join(" · ")}</span>
                      ) : null}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
