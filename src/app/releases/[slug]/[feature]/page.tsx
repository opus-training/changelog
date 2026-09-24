import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FeatureMedia } from "@/components/FeatureMedia";
import { Tags } from "@/components/Tags";
import {
  getFeature,
  getRelease,
  getReleases,
  releaseUrl,
} from "@/lib/releases";

export const dynamicParams = false;

export function generateStaticParams() {
  return getReleases().flatMap((release) =>
    release.features.map((feature) => ({
      slug: release.slug,
      feature: feature.slug,
    })),
  );
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; feature: string }>;
}): Promise<Metadata> {
  return params.then(({ slug, feature: featureSlug }) => {
    const feature = getFeature(slug, featureSlug);
    if (!feature) return {};
    return {
      title: feature.title,
      description: feature.deck,
    };
  });
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ slug: string; feature: string }>;
}) {
  const { slug, feature: featureSlug } = await params;
  const release = getRelease(slug);
  const feature = getFeature(slug, featureSlug);
  if (!release || !feature) notFound();
  const tip = feature.detailTip ?? feature.tryThis;
  return (
    <article className="release-page feature-entry">
      <Link className="feature-back" href={releaseUrl(release)}>
        ← {release.title}
      </Link>
      <header className="feature-hero-copy">
        <Tags tags={feature.tags} />
        <h1 className="page-title">{feature.title}</h1>
        <p className="hero-deck">{feature.deck}</p>
      </header>
      {feature.media !== "none" ? (
        <div className="feature-demo">
          {feature.media === "agent-workflow" ? (
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
          ) : (
            <div className="feature-entry-shot">
              <FeatureMedia media={feature.media} />
            </div>
          )}
        </div>
      ) : null}
      <p className="feature-summary">{feature.body}</p>
      <section className="can-do">
        <h2>What you can do</h2>
        <ul className="feature-bullets">
          {feature.bullets.map((bullet) => (
            <li key={bullet.title}>
              <strong>{bullet.title}</strong> {bullet.text}
            </li>
          ))}
        </ul>
      </section>
      {tip ? (
        <aside className="try-this" aria-label="Tip">
          <span className="try-icon" aria-hidden="true">
            💡
          </span>
          <p>{tip}</p>
        </aside>
      ) : null}
      <div className="try-actions">
        <a className="btn-solid" href={feature.tryUrl}>
          Give it a try
        </a>
        <Link className="btn-outline try-learn" href={feature.helpUrl}>
          Learn more
        </Link>
      </div>
      <section className="feature-fit" aria-label="Availability">
        <div>
          <h2>Who it&rsquo;s for</h2>
          <p>{feature.whoFor}</p>
        </div>
        <div>
          <h2>How to get it</h2>
          <p>{feature.howToGet}</p>
        </div>
      </section>
    </article>
  );
}
