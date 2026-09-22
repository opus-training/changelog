import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FeatureMedia } from "@/components/FeatureMedia";
import { Tags } from "@/components/Tags";
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

function Actions({
  learnHref,
  tryHref,
}: {
  learnHref: string;
  tryHref: string;
}) {
  return (
    <div className="feature-actions">
      <Link className="btn-solid" href={learnHref}>
        Learn more
      </Link>
      <a className="btn-outline" href={tryHref}>
        Give it a try
      </a>
    </div>
  );
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
  const supporting = release.features.filter(
    (feature) => feature.tier === "supporting",
  );
  return (
    <div className="release-page">
      <div className="release-hero">
        <div>
          <h1 className="page-title">{release.title}</h1>
          <p className="release-kicker">{release.kicker}</p>
          <p className="page-sub">{release.summary}</p>
        </div>
        <div className="release-moon" aria-hidden="true" />
      </div>
      <div className="release-cards">
        {hero ? <Hero feature={hero} release={release} /> : null}
        {featured.map((feature) => (
          <FeatureRow
            key={feature.slug}
            feature={feature}
            href={featureUrl(release, feature)}
          />
        ))}
        <div className="feature-grid-compact">
          {supporting.map((feature) => (
            <article className="feature-quiet" key={feature.slug}>
              <h3 className="row-title">
                <Link href={featureUrl(release, feature)}>{feature.title}</Link>
              </h3>
              <Tags tags={feature.tags} />
              <div className="feature-prose">
                <p className="hero-deck">{feature.deck}</p>
                <p className="row-excerpt">{feature.summary}</p>
              </div>
              <Actions
                learnHref={featureUrl(release, feature)}
                tryHref={feature.tryUrl}
              />
            </article>
          ))}
        </div>
      </div>
      <div className="release-next">
        <article>
          <h2>Every fix this month</h2>
          <Link className="learn-more" href="/">
            Read the changelog →
          </Link>
        </article>
        <article>
          <h2>See where we are headed</h2>
          <a className="learn-more" href={ROADMAP}>
            See the roadmap →
          </a>
        </article>
      </div>
    </div>
  );
}

function Hero({
  feature,
  release,
}: {
  feature: ReleaseFeature;
  release: Release;
}) {
  const href = featureUrl(release, feature);
  return (
    <article className="hero-feature">
      <div className="hero-media">
        <div className="demo-frame">
          <div className="demo-bar">
            <span>Ask Opus</span>
            <span className="demo-live">
              <i className="demo-dot" />
              Looping demo
            </span>
          </div>
          <div className="demo-body">
            <FeatureMedia media={feature.media} />
          </div>
          <div className="demo-progress" aria-hidden="true">
            <i />
          </div>
        </div>
      </div>
      <h2 className="hero-title">{feature.title}</h2>
      <Tags tags={feature.tags} />
      <div className="feature-prose">
        <p className="hero-deck">{feature.deck}</p>
        <p className="hero-summary">{feature.summary}</p>
      </div>
      <Actions learnHref={href} tryHref={feature.tryUrl} />
    </article>
  );
}

function FeatureRow({
  feature,
  href,
}: {
  feature: ReleaseFeature;
  href: string;
}) {
  return (
    <article className="feature-row">
      <div className="feature-row-media">
        <FeatureMedia media={feature.media} />
      </div>
      <div className="feature-row-copy">
        <h2 className="hero-title">{feature.title}</h2>
        <Tags tags={feature.tags} />
        <div className="feature-prose">
          <p className="hero-deck">{feature.deck}</p>
          <p className="hero-summary">{feature.summary}</p>
        </div>
        <Actions learnHref={href} tryHref={feature.tryUrl} />
      </div>
    </article>
  );
}
