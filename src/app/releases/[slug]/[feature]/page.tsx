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
  return (
    <article className="release-page feature-entry">
      <Link className="feature-back" href={releaseUrl(release)}>
        ← {release.title}
      </Link>
      <div className="feature-hero-copy">
        <Tags tags={feature.tags} />
        <h1 className="page-title">{feature.title}</h1>
        <div className="feature-prose">
          <p className="hero-deck">{feature.deck}</p>
          <p className="hero-summary">{feature.body}</p>
        </div>
        <div className="feature-actions">
          <Link className="btn-solid" href={feature.helpUrl}>
            Learn more
          </Link>
          <a className="btn-outline" href={feature.tryUrl}>
            Give it a try
          </a>
        </div>
      </div>
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
      <aside className="feature-fit" aria-label="Availability">
        <div className="feature-fit-item">
          <h2 className="feature-fit-label">Who it&rsquo;s for</h2>
          <p>{feature.whoFor}</p>
        </div>
        <div className="feature-fit-item">
          <h2 className="feature-fit-label">How to get it</h2>
          <p>{feature.howToGet}</p>
        </div>
      </aside>
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
    </article>
  );
}
