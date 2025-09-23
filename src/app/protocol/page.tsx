import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Promise Protocol Technical Specification | Unrival',
  description: 'Complete technical specification for the Promise Protocol coaching reliability system.',
};

export default function ProtocolPage() {
  return (
    <div className="container" style={{maxWidth: '800px', margin: '0 auto', padding: '2rem'}}>
      <header>
        <h1>Promise Protocol — v0.1.0</h1>
        <p className="metadata">Production Pilot • Published: 2025-09-19</p>
        <nav style={{margin: '1rem 0'}}>
          <a href="/">← Back to Main Site</a>
        </nav>
      </header>

      <section>
        <h2>Purpose & Scope</h2>
        <h3>Why this exists</h3>
        <p>End the "lemons markets" by making promises explicit, evidence declared in advance, and scores auditable, while staying privacy-first and legally sane.</p>
        <p>This pilot starts with coaching markets as a use case with low regulatory overhead and a high propensity for unchecked claims.</p>

        <h3>In scope (v0.1.0)</h3>
        <ul>
          <li><strong>Modality:</strong> Live 1:1 (video/phone/in-person)</li>
          <li><strong>Core standards (MUST):</strong> punctuality, attendance, recap</li>
          <li><strong>Metrics (public Day-0):</strong> cRI (coach Reliability Index) + TR (Transparency Rate)</li>
          <li><strong>Payments:</strong> Card/PayPal auth→capture (Option A). Deposits allowed.</li>
          <li><strong>Privacy:</strong> Private-by-default; public listing only with explicit consent</li>
          <li><strong>Evidence:</strong> Platform/device timestamps, dual confirmation, structured self-report</li>
        </ul>
      </section>

      <section>
        <h2>Core Objects</h2>
        
        <h3>Promise (public commitment)</h3>
        <pre style={{
          background: '#F8FAFC',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid #E2E8F0',
          overflow: 'auto'
        }}>
{`{
  "promiseId": "pm_...",
  "promiserId": "coach_...",
  "promiseeId": "client_...",
  "standardRef": "/coaching/session/_coachPunctualWithinMinutes@0.1.0",
  "params": {"minutes": 5},
  "effectiveAt": "2025-10-01T09:00:00Z",
  "expiresAt": null,
  "privacyMode": "private",
  "consents": ["terms", "privacy", "pub_opt_in?"],
  "signature": "JWS_ed25519_base64",
  "status": "active"
}`}
        </pre>

        <h3>Evidence Event</h3>
        <pre style={{
          background: '#F8FAFC',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid #E2E8F0',
          overflow: 'auto'
        }}>
{`{
  "eventId": "ev_...",
  "sessionId": "s_...",
  "type": "zoom.join_leave_ts | platform.message_ts | client.assessment.scale_0_10",
  "payload": { "...": "..." },
  "provenance": { 
    "source": "system|client|third_party", 
    "collectedAt": "2025-10-12T10:01:05Z" 
  },
  "hash": "sha256:...",
  "timezone": "Europe/Berlin"
}`}
        </pre>

        <h3>Assessment (result)</h3>
        <pre style={{
          background: '#F8FAFC',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid #E2E8F0',
          overflow: 'auto'
        }}>
{`{
  "assessmentId": "as_...",
  "promiseId": "pm_...",
  "sessionId": "s_...",
  "result": "pass | minor_breach | major_breach | no_show | renegotiated",
  "confidence": "objective_high | objective_med | subjective_med | subjective_low",
  "riAffects": true,
  "scoreDelta": {"cRI": 0.0, "OAS": 0.0},
  "economicEffect": null,
  "explanations": ["recap_ts <= 24h"],
  "assessedAt": "2025-10-12T10:05:00Z",
  "assessorId": "system_or_role",
  "signature": "JWS_ed25519_base64"
}`}
        </pre>
      </section>

      <section>
        <h2>Core Standards (MUST implement)</h2>
        
        <h3>Coach Punctuality</h3>
        <p>Coach arrives within specified minutes of scheduled start time.</p>
        <ul>
          <li><strong>Evidence:</strong> Platform join/leave timestamps</li>
          <li><strong>Confidence:</strong> objective_high</li>
          <li><strong>Grace period:</strong> 90 seconds for reconnection</li>
        </ul>

        <h3>Client Punctuality</h3>
        <p>Client arrives within specified minutes of scheduled start time.</p>
        <ul>
          <li><strong>Evidence:</strong> Platform join/leave timestamps</li>
          <li><strong>Confidence:</strong> objective_high</li>
        </ul>

        <h3>Attendance Threshold</h3>
        <p>Session duration meets minimum threshold (both absolute and percentage of scheduled time).</p>
        <ul>
          <li><strong>Rule:</strong> overlapMinutes ≥ minMinutes AND overlapMinutes ≥ 80% of scheduledMinutes</li>
          <li><strong>Evidence:</strong> Platform timestamps</li>
        </ul>

        <h3>Recap Within Hours</h3>
        <p>Coach sends session recap within specified timeframe.</p>
        <ul>
          <li><strong>Evidence:</strong> Email or in-app message timestamps</li>
          <li><strong>Confidence:</strong> objective_med</li>
          <li><strong>Channels:</strong> Domain email or in-app DM only</li>
        </ul>
      </section>

      <section>
        <h2>Metrics & Scoring</h2>
        
        <h3>Coach Reliability Index (cRI) — PUBLIC</h3>
        <p>Percent of Core standards kept over last 30 days, with Wilson 95% lower bound and sample size.</p>
        <ul>
          <li><strong>Components:</strong> Punctual (coach), Punctual (client), Attendance, Recap</li>
          <li><strong>Display:</strong> Simple mean of component kept% with Wilson lower bound</li>
          <li><strong>Small-n rule:</strong> Always show value + LB + n. If n < 30, add "Collecting data" badge</li>
        </ul>

        <h3>Transparency Rate (TR) — PUBLIC</h3>
        <p>Assessed Core events / eligible Core events over last 90 days.</p>
        <ul>
          <li><strong>Badge:</strong> If TR < 80%, show "Limited coverage"</li>
        </ul>

        <h3>Directory Sorting</h3>
        <p><strong>Primary:</strong> cRI_LB_30d (descending)<br/>
        <strong>Secondary:</strong> TR_90d (descending)</p>
      </section>

      <section>
        <h2>Privacy & Consent</h2>
        <ul>
          <li><strong>Default:</strong> Private. Public listing requires explicit opt-in.</li>
          <li><strong>Public receipts format:</strong> YYYY-MM | standard_id | Kept/Missed/Renegotiated | coach_alias</li>
          <li><strong>GDPR compliance:</strong> Article 9(2)(a) consent for health-adjacent metrics</li>
          <li><strong>Retention:</strong> 12 months operational logs, indefinite public listings until erasure request</li>
        </ul>
      </section>

      <section>
        <h2>Implementation Status</h2>
        <div style={{
          background: '#FEF3C7',
          border: '1px solid #F59E0B',
          padding: '12px',
          borderRadius: '6px',
          margin: '16px 0'
        }}>
          <strong>Status: Pilot Phase</strong><br/>
          Currently testing with 12 coaches. Full platform launch Q4 2025.
        </div>
        
        <p>Questions or feedback? <a href="mailto:protocol@unrival.com">protocol@unrival.com</a></p>
      </section>
    </div>
  );
}
