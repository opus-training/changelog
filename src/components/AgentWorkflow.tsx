function Sparkle() {
  return <span className="sparkle" aria-hidden="true" />;
}

export function AgentWorkflow() {
  return (
    <div className="agent-demo" role="img" aria-label="Content Audit Agent reviewing the Library">
      <div className="ask-stage">
        <div className="workflow-scene workflow-scene-ask">
          <div className="ask-user">
            Find anything outdated or contradictory in our food safety content.
          </div>
          <div className="ask-agent-label">
            <Sparkle /> Content Audit Agent
          </div>
          <div className="ask-thinking">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            Reviewing your Library…
          </div>
        </div>
        <div className="workflow-scene workflow-scene-search">
          <div className="ask-user">
            Find anything outdated or contradictory in our food safety content.
          </div>
          <div className="ask-agent-label">
            <Sparkle /> Content Audit Agent
          </div>
          <p className="ask-answer">I found three items that need a look.</p>
          <ul className="findings">
            <li>
              <span className="find-tag">Outdated</span>
              Allergen handling Module, last edited 2024
            </li>
            <li>
              <span className="find-tag">Conflict</span>
              Holding temps differ in two Courses
            </li>
            <li>
              <span className="find-tag">Outdated</span>
              Closing Checklist references old equipment
            </li>
          </ul>
        </div>
        <div className="workflow-scene workflow-scene-draft">
          <div className="ask-user">
            Find anything outdated or contradictory in our food safety content.
          </div>
          <div className="ask-agent-label">
            <Sparkle /> Content Audit Agent
          </div>
          <p className="ask-answer">Draft ready for you to review.</p>
          <div className="draft-chip">
            <span>Updated Module: Allergen handling</span>
            <span className="draft-btn">Review draft</span>
          </div>
        </div>
      </div>
      <div className="ask-composer">
        <span>Ask me anything…</span>
        <span className="ask-send" aria-hidden="true" />
      </div>
    </div>
  );
}
