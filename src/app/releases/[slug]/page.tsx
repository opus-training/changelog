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
      {feature.pitch ? <p className="issue-pitch">{feature.pitch}</p> : null}
      <div className="issue-stage">
        <FeatureVideo
          video={feature.video}
          title={feature.title}
          aspect={feature.videoAspect}
        />
      </div>
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
