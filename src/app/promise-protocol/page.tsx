import Link from 'next/link';

export default function PromiseProtocolPage() {
  return (
    <div style={{
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '2rem',
      fontFamily: 'var(--font-lora), serif',
      lineHeight: '1.6'
    }}>
      <header style={{ marginBottom: '2rem' }}>
        <Link href="/" style={{ 
          color: '#6B7280', 
          textDecoration: 'none',
          fontSize: '14px'
        }}>
          ← Back to Unrival
        </Link>
        <h1 style={{ 
          fontFamily: 'var(--font-playfair-display), serif',
          fontSize: '2.5rem',
          margin: '1rem 0 0.5rem',
          color: '#1F2937'
        }}>
          Promise Protocol
        </h1>
        <div style={{ 
          fontSize: '14px', 
          color: '#6B7280',
          marginBottom: '1rem'
        }}>
          Version 0.1.0 • Development Phase • September 2025
        </div>
        <div style={{
          background: '#FEF3C7',
          border: '1px solid #F59E0B',
          padding: '12px',
          borderRadius: '6px',
          fontSize: '14px'
        }}>
          <strong>Current Status:</strong> Protocol development phase • Schema v0.1 in draft • Recruiting pilot cohort
        </div>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-playfair-display), serif',
          color: '#1F2937',
          borderBottom: '2px solid #E5E7EB',
          paddingBottom: '0.5rem'
        }}>
          The Problem
        </h2>
        <p>
          Coaching markets suffer from a "lemons problem" - clients cannot distinguish reliable coaches from unreliable ones until after they have paid and wasted time. Traditional reviews are gamed, credentials do not predict follow-through, and promises remain unverifiable.
        </p>
        <p>
          The Promise Protocol solves this by making basic professional reliability objectively measurable using platform timestamps and structured evidence collection.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-playfair-display), serif',
          color: '#1F2937',
          borderBottom: '2px solid #E5E7EB',
          paddingBottom: '0.5rem'
        }}>
          How It Works
        </h2>
        
        <div style={{
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          padding: '1.5rem',
          borderRadius: '8px',
          margin: '1rem 0'
        }}>
          <h3 style={{ marginTop: 0, color: '#374151' }}>Core Promise Object</h3>
          <pre style={{
            background: '#FFFFFF',
            padding: '1rem',
            borderRadius: '4px',
            border: '1px solid #D1D5DB',
            overflow: 'auto',
            fontSize: '13px',
            fontFamily: '"SF Mono", Monaco, monospace'
          }}>
{`{
  "promiseId": "pm_coach_punctual_001",
  "promiserId": "coach_sarah_m",
  "standardRef": "/coaching/session/punctualWithinMinutes",
  "params": { "minutes": 5 },
  "evidence": {
    "types": ["zoom.join_leave_ts", "calendar.event"],
    "required": ["zoom.join_leave_ts"]
  },
  "effectiveAt": "2025-10-01T09:00:00Z",
  "privacyMode": "public_pseudonymous",
  "status": "active"
}`}
          </pre>
        </div>

        <div style={{
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          padding: '1.5rem',
          borderRadius: '8px',
          margin: '1rem 0'
        }}>
          <h3 style={{ marginTop: 0, color: '#374151' }}>Evidence & Assessment</h3>
          <pre style={{
            background: '#FFFFFF',
            padding: '1rem',
            borderRadius: '4px',
            border: '1px solid #D1D5DB',
            overflow: 'auto',
            fontSize: '13px',
            fontFamily: '"SF Mono", Monaco, monospace'
          }}>
{`{
  "assessmentId": "as_session_001",
  "promiseId": "pm_coach_punctual_001",
  "sessionId": "s_zoom_abc123",
  "result": "pass",
  "confidence": "objective_high",
  "evidence": {
    "coachJoinTime": "2025-10-01T09:02:15Z",
    "scheduledStart": "2025-10-01T09:00:00Z",
    "deltaSeconds": 135
  },
  "assessedAt": "2025-10-01T10:30:00Z"
}`}
          </pre>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-playfair-display), serif',
          color: '#1F2937',
          borderBottom: '2px solid #E5E7EB',
          paddingBottom: '0.5rem'
        }}>
          Core Standards (v0.1)
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gap: '1rem',
          margin: '1rem 0'
        }}>
          <div style={{
            border: '1px solid #E5E7EB',
            borderRadius: '6px',
            padding: '1rem'
          }}>
            <h4 style={{ margin: '0 0 0.5rem', color: '#374151' }}>Coach Punctuality</h4>
            <p style={{ margin: '0 0 0.5rem', fontSize: '14px' }}>
              Coach joins session within promised timeframe (typically ≤5 minutes)
            </p>
            <div style={{ fontSize: '12px', color: '#6B7280' }}>
              <strong>Evidence:</strong> Platform join timestamps • <strong>Confidence:</strong> Objective High
            </div>
          </div>

          <div style={{
            border: '1px solid #E5E7EB',
            borderRadius: '6px',
            padding: '1rem'
          }}>
            <h4 style={{ margin: '0 0 0.5rem', color: '#374151' }}>Session Duration</h4>
            <p style={{ margin: '0 0 0.5rem', fontSize: '14px' }}>
              Actual session time meets minimum threshold (≥80% of scheduled + absolute minimum)
            </p>
            <div style={{ fontSize: '12px', color: '#6B7280' }}>
              <strong>Evidence:</strong> Platform duration logs • <strong>Confidence:</strong> Objective High
            </div>
          </div>

          <div style={{
            border: '1px solid #E5E7EB',
            borderRadius: '6px',
            padding: '1rem'
          }}>
            <h4 style={{ margin: '0 0 0.5rem', color: '#374151' }}>Follow-up Delivery</h4>
            <p style={{ margin: '0 0 0.5rem', fontSize: '14px' }}>
              Session recap/notes sent within promised timeframe (typically ≤24 hours)
            </p>
            <div style={{ fontSize: '12px', color: '#6B7280' }}>
              <strong>Evidence:</strong> Email/message timestamps • <strong>Confidence:</strong> Objective Medium
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-playfair-display), serif',
          color: '#1F2937',
          borderBottom: '2px solid #E5E7EB',
          paddingBottom: '0.5rem'
        }}>
          Public Metrics Framework
        </h2>

        <div style={{
          background: '#F9FAFB',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          padding: '1.5rem',
          margin: '1rem 0'
        }}>
          <h3 style={{ marginTop: 0, color: '#374151' }}>Coach Reliability Index (cRI)</h3>
          <p style={{ marginBottom: '1rem' }}>
            Percentage of core promises kept over the last 30 days, with Wilson confidence interval and sample size.
          </p>
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #D1D5DB',
            borderRadius: '4px',
            padding: '1rem',
            fontFamily: '"SF Mono", Monaco, monospace',
            fontSize: '14px'
          }}>
            cRI: [X]% (LB: [Y]%, n=[Z], last 30d)
          </div>
          <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '0.5rem' }}>
            Components: Punctuality • Duration • Follow-up • Renegotiation handling
          </p>
        </div>

        <div style={{
          background: '#F9FAFB',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          padding: '1.5rem',
          margin: '1rem 0'
        }}>
          <h3 style={{ marginTop: 0, color: '#374151' }}>Transparency Rate (TR)</h3>
          <p style={{ marginBottom: '1rem' }}>
            Percentage of eligible sessions with complete evidence collection over 90 days.
          </p>
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #D1D5DB',
            borderRadius: '4px',
            padding: '1rem',
            fontFamily: '"SF Mono", Monaco, monospace',
            fontSize: '14px'
          }}>
            TR: [X]% (last 90d)
          </div>
          <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '0.5rem' }}>
            Badge: "Limited coverage" appears if TR &lt; 80%
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-playfair-display), serif',
          color: '#1F2937',
          borderBottom: '2px solid #E5E7EB',
          paddingBottom: '0.5rem'
        }}>
          Privacy & Consent
        </h2>
        
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li><strong>Private by default:</strong> All promises start private. Public visibility requires explicit opt-in.</li>
          <li><strong>Selective disclosure:</strong> Coaches control what metrics are public vs. private.</li>
          <li><strong>Minimal public data:</strong> Only aggregate scores and promise counts, never session details.</li>
          <li><strong>Data retention:</strong> 12 months for operational logs, user-controlled for public profiles.</li>
          <li><strong>GDPR compliance:</strong> Full right to erasure, data portability, and correction.</li>
        </ul>

        <div style={{
          background: '#FEF3C7',
          border: '1px solid #F59E0B',
          borderRadius: '6px',
          padding: '1rem',
          margin: '1rem 0',
          fontSize: '14px'
        }}>
          <strong>Privacy Note:</strong> No session recordings. No personal information in public metrics. 
          Individual session outcomes never published - only aggregate reliability scores.
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-playfair-display), serif',
          color: '#1F2937',
          borderBottom: '2px solid #E5E7EB',
          paddingBottom: '0.5rem'
        }}>
          Projected Results (Q2 2026)
        </h2>
        <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
          Based on commitment device research and early modeling:
        </p>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          margin: '1rem 0'
        }}>
          <div style={{
            background: '#F0FDF4',
            border: '1px solid #10B981',
            borderRadius: '6px',
            padding: '1rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#047857' }}>85-95%</div>
            <div style={{ fontSize: '14px', color: '#374151' }}>Target cRI</div>
            <div style={{ fontSize: '12px', color: '#6B7280' }}>vs 65-70% baseline</div>
          </div>

          <div style={{
            background: '#F0F9FF',
            border: '1px solid #0EA5E9',
            borderRadius: '6px',
            padding: '1rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0369A1' }}>500+</div>
            <div style={{ fontSize: '14px', color: '#374151' }}>Target Sessions</div>
            <div style={{ fontSize: '12px', color: '#6B7280' }}>across 25-30 coaches</div>
          </div>

          <div style={{
            background: '#FEF3C7',
            border: '1px solid #F59E0B',
            borderRadius: '6px',
            padding: '1rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#92400E' }}>25-35%</div>
            <div style={{ fontSize: '14px', color: '#374151' }}>Goal Completion</div>
            <div style={{ fontSize: '12px', color: '#6B7280' }}>improvement target</div>
          </div>
        </div>
        <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '1rem' }}>
          Projections based on commitment device research and goal-setting psychology
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ 
          fontFamily: 'var(--font-playfair-display), serif',
          color: '#1F2937',
          borderBottom: '2px solid #E5E7EB',
          paddingBottom: '0.5rem'
        }}>
          Implementation Status
        </h2>

        <div style={{
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          padding: '1.5rem'
        }}>
          <h3 style={{ marginTop: 0, color: '#374151' }}>Current Phase: Development</h3>
          <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
            <li>🔄 Core standards specification (Q3 2025)</li>
            <li>🔄 Privacy controls and consent flows (Q4 2025)</li>
            <li>🔄 Basic platform integration (Q4 2025)</li>
            <li>⏳ Pilot program launch (Q4 2025)</li>
            <li>⏳ Multi-platform evidence collection (Q1 2026)</li>
            <li>⏳ Public coach directory launch (Q1 2026)</li>
          </ul>
        </div>

        <div style={{
          background: '#EFF6FF',
          border: '1px solid #3B82F6',
          borderRadius: '6px',
          padding: '1rem',
          margin: '1rem 0',
          fontSize: '14px'
        }}>
          <strong>Join the Development:</strong> We are recruiting coaches and technical contributors who want to help build verifiable reliability metrics. 
          Early participants help shape the specification.
        </div>
      </section>

      <section>
        <h2 style={{ 
          fontFamily: 'var(--font-playfair-display), serif',
          color: '#1F2937',
          borderBottom: '2px solid #E5E7EB',
          paddingBottom: '0.5rem'
        }}>
          Technical Resources
        </h2>

        <div style={{ 
          display: 'grid', 
          gap: '1rem',
          margin: '1rem 0'
        }}>
          <div style={{
            border: '1px solid #E5E7EB',
            borderRadius: '6px',
            padding: '1rem'
          }}>
            <h4 style={{ margin: '0 0 0.5rem', color: '#374151' }}>Full Specification</h4>
            <p style={{ margin: '0 0 0.5rem', fontSize: '14px' }}>
              Complete technical documentation including API endpoints, data models, and compliance requirements.
            </p>
            <a href="mailto:tech@unrival.com?subject=Promise Protocol Specification" style={{
              color: '#1F6FEB',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              Request technical docs →
            </a>
          </div>

          <div style={{
            border: '1px solid #E5E7EB',
            borderRadius: '6px',
            padding: '1rem'
          }}>
            <h4 style={{ margin: '0 0 0.5rem', color: '#374151' }}>Reference Implementation</h4>
            <p style={{ margin: '0 0 0.5rem', fontSize: '14px' }}>
              Open-source TypeScript/Next.js implementation for verification and local testing.
            </p>
            <a href="mailto:tech@unrival.com?subject=Reference Implementation" style={{
              color: '#1F6FEB',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              Access GitHub repo →
            </a>
          </div>
        </div>

        <div style={{
          background: '#F9FAFB',
          border: '1px solid #E5E7EB',
          borderRadius: '6px',
          padding: '1rem',
          margin: '1.5rem 0',
          fontSize: '14px',
          textAlign: 'center'
        }}>
          Questions about implementation or integration?<br/>
          <a href="mailto:dvdgdnjsph@gmail.com" style={{ color: '#1F6FEB', fontWeight: 'bold' }}>
            Send an email
          </a>
        </div>
      </section>
    </div>
  );
}
