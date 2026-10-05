import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FeatureVideo } from "@/components/FeatureVideo";
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
      {hero ? <Lead feature={hero} release={release} /> : null}

      {featured.length > 0 ? (
        <section className="issue-chapter">
          <h2 className="issue-heading is-start">
            {release.alsoHeading ?? `Also in ${release.label.split(" ")[0]}`}
          </h2>
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
      <p className="issue-eyebrow">{release.kicker ?? feature.title}</p>
      <h1 className="issue-heading issue-hero-title">
        {feature.headline ?? feature.title}
      </h1>
      {feature.story?.map((paragraph) => (
        <p className="issue-story" key={paragraph}>
          {paragraph}
        </p>
      ))}
      {!feature.story && feature.pitch ? (
        <p className="issue-pitch">{feature.pitch}</p>
      ) : null}
      <FeatureActions feature={feature} href={href} />
      <div className="issue-stage">
        <FeatureVideo
          video={feature.video}
          title={feature.title}
          aspect={feature.videoAspect}
        />
      </div>
      {feature.highlights?.length ? (
        <ul className="issue-points">
          {feature.highlights.map((highlight) => (
            <li key={highlight.title}>
              <strong>{highlight.title}</strong> {highlight.text}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function FeatureActions({
  feature,
  href,
  align,
}: {
  feature: ReleaseFeature;
  href: string;
  align?: "start";
}) {
  return (
    <div className={align === "start" ? "issue-actions is-start" : "issue-actions"}>
      <Link className="btn-solid" href={href} aria-label={`See the feature: ${feature.title}`}>
        See the feature
      </Link>
      <a className="btn-outline" href={feature.helpUrl} aria-label={`Help article: ${feature.title}`}>
        Help article
      </a>
    </div>
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
      <FeatureVideo
        video={feature.video}
        title={feature.title}
        aspect={feature.videoAspect}
      />
      <div className="issue-row-copy">
        {feature.headline ? <p className="issue-row-label">{feature.title}</p> : null}
        <h3 className="issue-row-title">{feature.headline ?? feature.title}</h3>
        <p>{feature.deck}</p>
        <FeatureActions feature={feature} href={href} align="start" />
      </div>
    </div>
  );
}
