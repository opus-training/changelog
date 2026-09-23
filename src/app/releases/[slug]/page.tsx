import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  featureUrl,
  getRelease,
  getReleases,
  type Release,
  type ReleaseFeature,
} from "@/lib/releases";

const ROADMAP =
  "https://opustraining.notion.site/opustraining/5c7e7b1164bb44e58f1f5afdeb74bbea?v=fe8fa7f83a5a499493c91f5d6140735f";

export const dynamicParams = false;

export function generateStaticParams() {
  return getReleases().map((release) => ({ slug: release.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const release = getRelease(slug);
    if (!release) return {};
    return {
      title: release.title,
      description: release.summary,
    };
  });
}

export default async function ReleasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const release = getRelease(slug);
  if (!release) notFound();
  const hero = release.features.find((feature) => feature.tier === "hero");
  const featured = release.features.filter((feature) => feature.tier === "featured");
  return (
    <article className="issue">
      <header className="issue-masthead">
        <h1 className="issue-title">{release.title}</h1>
      </header>

      {hero ? <Lead feature={hero} release={release} /> : null}

      {featured.length > 0 ? (
        <section className="issue-chapter">
          <h2 className="issue-heading">Also in {release.label.split(" ")[0]}</h2>
          <div className="issue-rows">
            {featured.map((feature, index) => (
              <Row
                key={feature.slug}
                feature={feature}
                href={featureUrl(release, feature)}
                flip={index % 2 === 1}
              />
            ))}
          </div>
        </section>
      ) : null}

      <footer className="issue-close">
        <p className="issue-close-line">Looking for every fix, or what comes next?</p>
        <div className="issue-close-links">
          <Link className="btn-outline" href="/">
            Read the changelog
          </Link>
          <a className="btn-outline" href={ROADMAP}>
            See the roadmap
          </a>
        </div>
      </footer>
    </article>
  );
}

function Lead({
  feature,
  release,
}: {
  feature: ReleaseFeature;
  release: Release;
}) {
  const href = featureUrl(release, feature);
  return (
    <section className="issue-chapter issue-lead">
      <p className="issue-eyebrow">{feature.title}</p>
      <h2 className="issue-heading">
        <Link href={href}>{feature.headline ?? feature.title}</Link>
      </h2>
      {feature.pitch ? <p className="issue-pitch">{feature.pitch}</p> : null}
      <div className="issue-stage">
        <FeatureVideo video={feature.video} />
      </div>
      {feature.highlights ? (
        <ul className="issue-points">
          {feature.highlights.map((highlight) => (
            <li key={highlight.title}>
              <strong>{highlight.title}</strong> {highlight.text}
            </li>
          ))}
        </ul>
      ) : null}
      {feature.tryThis ? (
        <aside className="issue-note">
          <p className="issue-note-label">Try this</p>
          <p className="issue-note-text">{feature.tryThis}</p>
          <div className="issue-actions">
            <a className="btn-solid" href={feature.tryUrl}>
              Give it a try
            </a>
          </div>
        </aside>
      ) : null}
    </section>
  );
}

function Row({
  feature,
  href,
  flip,
}: {
  feature: ReleaseFeature;
  href: string;
  flip: boolean;
}) {
  return (
    <div className={flip ? "issue-row is-flipped" : "issue-row"}>
      <FeatureVideo video={feature.video} />
      <div className="issue-row-copy">
        <p className="issue-row-label">{feature.title}</p>
        <h3 className="issue-row-title">
          <Link href={href}>{feature.headline ?? feature.title}</Link>
        </h3>
        <p>{feature.deck}</p>
        <a className="issue-link" href={feature.tryUrl}>
          Give it a try →
        </a>
      </div>
    </div>
  );
}

function FeatureVideo({ video }: { video?: string }) {
  if (!video) {
    return (
      <div className="issue-placeholder" role="img" aria-label="Placeholder">
        Placeholder
      </div>
    );
  }
  return (
    <video
      className="issue-video"
      src={`${video}.mp4`}
      poster={`${video}.jpg`}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
