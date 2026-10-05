import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FeatureVideo } from "@/components/FeatureVideo";
import {
  getRelease,
  getReleases,
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
        <p className="issue-eyebrow">{release.label}</p>
        <h1 className="issue-title">{release.headline}</h1>
      </header>

      {hero ? <Lead feature={hero} /> : null}

      {featured.length > 0 ? (
        <section className="issue-chapter">
          <h2 className="issue-heading is-start">
            {release.alsoHeading ?? `Also in ${release.label.split(" ")[0]}`}
          </h2>
          <div className="issue-rows">
            {featured.map((feature, index) => (
              <Row key={feature.slug} feature={feature} flip={index % 2 === 1} />
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

function Lead({ feature }: { feature: ReleaseFeature }) {
  return (
    <section className="issue-chapter issue-lead">
      {feature.headline ? <p className="issue-eyebrow">{feature.title}</p> : null}
      <h2 className="issue-heading">{feature.headline ?? feature.title}</h2>
      {feature.pitch ? <p className="issue-pitch">{feature.pitch}</p> : null}
      {feature.story?.map((paragraph) => (
        <p className="issue-story" key={paragraph}>
          {paragraph}
        </p>
      ))}
      <FeatureActions feature={feature} />
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
      {feature.where || feature.note ? (
        <aside className="issue-note is-bare">
          {feature.where ? <p className="issue-where">{feature.where}</p> : null}
          {feature.note ? <p className="issue-caveat">{feature.note}</p> : null}
        </aside>
      ) : null}
    </section>
  );
}

function FeatureActions({ feature }: { feature: ReleaseFeature }) {
  return (
    <div className="issue-actions is-start">
      <a className="btn-solid" href={feature.tryUrl} aria-label={`${feature.ctaLabel}: ${feature.title}`}>
        {feature.ctaLabel}
      </a>
      <a className="btn-outline" href={feature.helpUrl} aria-label={`Help article: ${feature.title}`}>
        Help article
      </a>
    </div>
  );
}

function Row({ feature, flip }: { feature: ReleaseFeature; flip: boolean }) {
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
        <p className="issue-where">{feature.where}</p>
        {feature.note ? <p className="issue-caveat">{feature.note}</p> : null}
        {feature.teaser ? <p className="issue-teaser">{feature.teaser}</p> : null}
        <FeatureActions feature={feature} />
      </div>
    </div>
  );
}
