import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureVideo } from "@/components/FeatureVideo";
import {
  getRelease,
  getReleases,
  type ReleaseFeature,
} from "@/lib/releases";

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
  const companions = release.features.filter((feature) => feature.tier === "companion");
  const featured = release.features.filter((feature) => feature.tier === "featured");
  return (
    <article className="issue">
      <header className="issue-masthead">
        <p className="issue-eyebrow">{release.label}</p>
        <h1 className="issue-title">{release.headline}</h1>
      </header>

      {hero ? <Lead feature={hero} companions={companions} /> : null}

      {featured.length > 0 ? (
        <section className="issue-chapter">
          <div className="issue-rows">
            {featured.map((feature, index) => (
              <Row key={feature.slug} feature={feature} flip={index % 2 === 1} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}

function Lead({
  feature,
  companions,
}: {
  feature: ReleaseFeature;
  companions: ReleaseFeature[];
}) {
  return (
    <section className="issue-chapter issue-lead">
      {feature.headline ? <p className="issue-eyebrow">{feature.title}</p> : null}
      <h2 className="issue-heading">{feature.headline ?? feature.title}</h2>
      {feature.pitch ? <p className="issue-pitch">{feature.pitch}</p> : null}
      <div className="issue-stage">
        <FeatureVideo
          video={feature.video}
          title={feature.title}
          aspect={feature.videoAspect}
        />
      </div>
      <div className="issue-story-block">
        {feature.story?.map((paragraph) => (
          <p className="issue-story" key={paragraph}>
            {paragraph}
          </p>
        ))}
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
      {companions.map((companion) => (
        <Companion key={companion.slug} feature={companion} />
      ))}
      {feature.where || feature.note ? (
        <aside className="issue-note is-bare">
          {feature.where ? <p className="issue-where">{feature.where}</p> : null}
          {feature.note ? <p className="issue-caveat">{feature.note}</p> : null}
        </aside>
      ) : null}
    </section>
  );
}

function Companion({ feature }: { feature: ReleaseFeature }) {
  return (
    <div className="issue-companion">
      {feature.logos?.length ? (
        <ul className="issue-logos">
          {feature.logos.map((logo) => (
            <li key={logo.name}>
              <img src={logo.src} alt="" width={40} height={40} />
              <span>{logo.name}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <p className="issue-row-label">{feature.title}</p>
      <h3 className="issue-row-title">{feature.headline ?? feature.title}</h3>
      <p>{feature.deck}</p>
      {feature.where ? <p className="issue-where">{feature.where}</p> : null}
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
        {feature.where ? <p className="issue-where">{feature.where}</p> : null}
        {feature.note ? <p className="issue-caveat">{feature.note}</p> : null}
        {feature.teaser ? <p className="issue-teaser">{feature.teaser}</p> : null}
      </div>
    </div>
  );
}
