import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureVideo } from "@/components/FeatureVideo";
import {
  getRelease,
  getReleases,
  type ReleaseFeature,
} from "@/lib/releases";

function bookADemoUrl(release: { label: string }) {
  const campaign = `${release.label.toLowerCase().replace(/\s+/g, "_")}_release`;
  const params = new URLSearchParams({
    utm_source: "changelog",
    utm_medium: "website",
    utm_campaign: campaign,
  });
  return `https://www.opus.so/book-a-demo?${params}`;
}

/**
 * Pages are built statically, so a clip whose file isn't in public/ yet (a
 * draft release waiting on its video) renders without media instead of an
 * empty frame with a dead Play button.
 */
function withAvailableVideo(feature: ReleaseFeature): ReleaseFeature {
  if (!feature.video) return feature;
  const file = path.join(process.cwd(), "public", `${feature.video}.mp4`);
  return existsSync(file) ? feature : { ...feature, video: undefined };
}

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
  const features = release.features.map(withAvailableVideo);
  const hero = features.find((feature) => feature.tier === "hero");
  const companions = features.filter((feature) => feature.tier === "companion");
  const featured = features.filter((feature) => feature.tier === "featured");
  const more = features.filter((feature) => feature.tier === "more");
  return (
    <article className="issue">
      <header className="issue-masthead">
        <p className="issue-date">{release.label}</p>
        <h1 className="issue-title">{release.headline}</h1>
        {release.intro ? <p className="issue-intro">{release.intro}</p> : null}
        <a className="btn-solid issue-cta" href={bookADemoUrl(release)}>
          Book a demo
        </a>
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

      {more.length > 0 ? (
        <section className="issue-chapter">
          <h2 className="issue-examples-title">More this month</h2>
          <ul className="issue-more-grid">
            {more.map((feature) => (
              <li key={feature.slug} className="issue-example">
                <p className="issue-row-label">{feature.title}</p>
                <h3 className="issue-more-title">{feature.headline ?? feature.title}</h3>
                {feature.deck ? <p>{feature.deck}</p> : null}
                {feature.where ? <p className="issue-where">{feature.where}</p> : null}
                {feature.note ? <p className="issue-caveat">{feature.note}</p> : null}
              </li>
            ))}
          </ul>
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
      <h2 className="issue-row-title issue-lead-title">{feature.title}</h2>
      {feature.pitch ?? feature.deck ? (
        <p className="issue-pitch">{feature.pitch ?? feature.deck}</p>
      ) : null}
      {feature.video ? (
        <div className="issue-stage">
          <FeatureVideo
            video={feature.video}
            title={feature.title}
            aspect={feature.videoAspect}
          />
        </div>
      ) : null}
      {feature.examples?.length ? (
        <div className="issue-examples">
          {feature.examplesTitle ? (
            <h3 className="issue-examples-title">{feature.examplesTitle}</h3>
          ) : null}
          <ul className="issue-example-grid">
            {feature.examples.map((example) => (
              <li key={example.name} className="issue-example">
                <span className="issue-example-emoji" aria-hidden="true">
                  {example.emoji}
                </span>
                <p className="issue-example-name">{example.name}</p>
                <p>{example.blurb}</p>
              </li>
            ))}
          </ul>
          {feature.examplesMore ? (
            <p className="issue-examples-more">{feature.examplesMore}</p>
          ) : null}
        </div>
      ) : null}
      {feature.where || feature.note ? (
        <aside className="issue-note is-bare">
          {feature.where ? <p className="issue-where">{feature.where}</p> : null}
          {feature.note ? <p className="issue-caveat">{feature.note}</p> : null}
        </aside>
      ) : null}
      {companions.map((companion) => (
        <Companion key={companion.slug} feature={companion} />
      ))}
    </section>
  );
}

function Companion({ feature }: { feature: ReleaseFeature }) {
  if (feature.deck || feature.where) {
    return (
      <div className="issue-companion-block">
        <h3 className="issue-companion">{feature.headline ?? feature.title}</h3>
        {feature.deck ? <p className="issue-pitch">{feature.deck}</p> : null}
        {feature.where ? <p className="issue-where">{feature.where}</p> : null}
      </div>
    );
  }
  return (
    <p className="issue-companion">
      <span>{feature.headline ?? feature.title}</span>
      {feature.logos?.length ? (
        <span className="issue-logos">
          {feature.logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              width={44}
              height={44}
            />
          ))}
        </span>
      ) : null}
    </p>
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
        {feature.deck ? <p>{feature.deck}</p> : null}
        {feature.where ? <p className="issue-where">{feature.where}</p> : null}
        {feature.note ? <p className="issue-caveat">{feature.note}</p> : null}
      </div>
    </div>
  );
}
