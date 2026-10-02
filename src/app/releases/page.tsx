import type { Metadata } from "next";
import Link from "next/link";
import { getReleases, releaseUrl } from "@/lib/releases";

export const metadata: Metadata = {
  title: "Releases",
  description: "Monthly look at the features shipping in Opus.",
};

export default function ReleasesIndexPage() {
  const releases = getReleases();
  return (
    <>
      <div className="page-head">
        <h1 className="page-title">Releases</h1>
        <p className="page-sub">
          A closer look at the features we ship each month. Every Friday, the{" "}
          <Link href="/">changelog</Link> still collects the improvements and
          fixes.
        </p>
      </div>
      {releases.map((release) => (
        <article className="row" key={release.slug}>
          <div className="row-head">
            <h2 className="row-title">
              <Link href={releaseUrl(release)}>{release.label}</Link>
            </h2>
          </div>
          <p className="row-excerpt">{release.summary}</p>
          <Link className="learn-more" href={releaseUrl(release)}>
            Learn More
          </Link>
        </article>
      ))}
    </>
  );
}
