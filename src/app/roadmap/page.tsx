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
          Features in flight and on the horizon. Timing is a guide, not a
          promise &mdash; plans shift as we learn.
        </p>
      </div>
      {groups.map((group) => (
        <section className="release" id={group.id} key={group.id}>
          <h2 className="release-date">{group.label}</h2>
          <div className="release-items">
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
    </>
  );
}
