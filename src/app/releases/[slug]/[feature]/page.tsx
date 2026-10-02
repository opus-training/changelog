import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FeatureMedia } from "@/components/FeatureMedia";
import { FeatureVideo } from "@/components/FeatureVideo";
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
  const { detail } = feature;
  const cta = detail.ctaUrl ?? feature.tryUrl;
  return (
    <article className="release-page feature-entry fd">
      <Link className="feature-back" href={releaseUrl(release)}>
        ← {release.title}
      </Link>

      <header className="fd-head">
        <h1 className="page-title">{feature.title}</h1>
        <p className="fd-lede">{detail.lede}</p>
        <div className="fd-actions fd-actions-top">
          <a className="btn-solid" href={cta}>
            {detail.ctaLabel}
          </a>
          <Link
            className="btn-outline fd-learn"
            href={feature.helpUrl}
            aria-label={`Learn more about ${feature.title}`}
          >
            Learn more
          </Link>
        </div>
      </header>

      <div className="fd-media">
        {feature.video ? (
          <FeatureVideo
            video={feature.video}
            title={feature.title}
            aspect={feature.videoAspect}
          />
        ) : feature.media !== "none" ? (
          <div className="feature-entry-shot">
            <FeatureMedia media={feature.media} />
          </div>
        ) : null}
      </div>

      <p className="fd-intro">{detail.intro}</p>

      <dl className="fd-facts">
        <div>
          <dt>Who it&rsquo;s for</dt>
          <dd>
            <strong>{detail.who.main}</strong>
            {detail.who.sub ? <span>{detail.who.sub}</span> : null}
          </dd>
        </div>
        <div>
          <dt>Where to find it</dt>
          <dd>
            <strong>{detail.where.main}</strong>
            {detail.where.sub ? <span>{detail.where.sub}</span> : null}
          </dd>
        </div>
        <div>
          <dt>How to get it</dt>
          <dd>
            <strong>{detail.access.main}</strong>
            {detail.access.sub ? <span>{detail.access.sub}</span> : null}
          </dd>
        </div>
      </dl>
      {detail.note ? (
        <p className="fd-note">
          <span aria-hidden="true">💡</span>
          <span>
            <strong>Good to know:</strong> {detail.note}
          </span>
        </p>
      ) : null}

      <section className="fd-highlights" aria-labelledby="fd-highlights">
        <h2 id="fd-highlights">Why you&rsquo;ll love it</h2>
        <ul>
          {detail.highlights.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="fd-next" aria-labelledby="fd-next">
        <h2 id="fd-next">Ready to try it?</h2>
        <p className="fd-tip">
          <span aria-hidden="true">👉</span>
          <span>{detail.firstStep}</span>
        </p>
        <div className="fd-actions">
          <a className="btn-solid" href={cta}>
            {detail.ctaLabel}
          </a>
          <Link
            className="btn-outline fd-learn"
            href={feature.helpUrl}
            aria-label={`Learn more about ${feature.title}`}
          >
            Learn more
          </Link>
        </div>
      </section>
    </article>
  );
}
