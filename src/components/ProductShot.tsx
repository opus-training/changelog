import type { FeatureMedia } from "@/lib/releases";

export function ProductShot({ media }: { media: FeatureMedia }) {
  if (media === "mcp") return <McpShot />;
  if (media === "path-builder") return <PathBuilderShot />;
  if (media === "content-detail") return <ContentDetailShot />;
  return null;
}

function McpShot() {
  return (
    <div className="viz viz-mcp" role="img" aria-label="Opus connected to Claude, ChatGPT, and other AI tools">
      <div className="viz-tools">
        <span>Claude</span>
        <span>ChatGPT</span>
        <span>Other AI tools</span>
      </div>
      <div className="viz-lines" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="viz-opus">Opus</div>
      <p className="viz-note">Anything it creates stays a draft until you approve.</p>
    </div>
  );
}

function PathBuilderShot() {
  return (
    <div className="viz viz-path" role="img" aria-label="A Path in draft with trainee progress">
      <div className="viz-path-head">
        <strong>New Hire · FOH</strong>
        <span className="shot-pill">Draft</span>
      </div>
      <ol className="viz-steps">
        <li>
          <span>Food safety essentials</span>
          <b>92%</b>
          <i style={{ width: "92%" }} />
        </li>
        <li>
          <span>Service standards</span>
          <b>61%</b>
          <i style={{ width: "61%" }} />
        </li>
        <li>
          <span>First week check-in</span>
          <b>18%</b>
          <i style={{ width: "18%" }} />
        </li>
      </ol>
    </div>
  );
}

function ContentDetailShot() {
  return (
    <div className="viz viz-detail" role="img" aria-label="Course overview, needs attention, and performance">
      <strong className="viz-detail-title">Food Safety Essentials</strong>
      <div className="shot-tabs">
        <span className="is-on">Overview</span>
        <span>Needs attention</span>
        <span>Performance</span>
      </div>
      <div className="shot-stats">
        <div>
          <b>92%</b>
          <span>Complete</span>
        </div>
        <div>
          <b>3</b>
          <span>Need a look</span>
        </div>
        <div>
          <b>184</b>
          <span>Assigned</span>
        </div>
      </div>
    </div>
  );
}
