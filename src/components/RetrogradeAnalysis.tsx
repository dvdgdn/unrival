"use client";
import { useState, useEffect, useMemo } from 'react';

// Data inferred from the full text provided by the user.
const timelineData = [
  {
    id: 'q3-2025',
    title: 'Q3 2025: The Founding Moment',
    tasks: [
      // NEW early objectives (replace the old experimental ledger item)
      { id: 'q3-task-objective-letter', text: 'Publish Unrival “Letter from the Future” on site (shareable anchor)', checked: true },
      { id: 'q3-task-objective-forms', text: 'Launch Converging Futures: Letters form & ledger + Promises form & ledger; link in nav & hero', checked: true },
      { id: 'q3-task-objective-explainer', text: 'Publish Converging Futures technique explainer with CTAs', checked: true },

      // Existing items
      { id: 'q3-task-custom1', text: 'Initial coalition of goal seekers and goal assistants forms', checked: true },
      { id: 'q3-task1', text: 'Draft The Promise Schema v0.1', checked: false },
      { id: 'q3-task2', text: 'Develop The Hypnosis-Informed Protocol', checked: false },
      { id: 'q3-task3', text: 'Establish The Ethical Framework', checked: false },
      { id: 'q3-task4', text: 'Define initial metrics (PKR, CG, LtF, Repair Rate)', checked: false },
    ]
  },
  {
    id: 'q4-2025',
    title: 'Q4 2025: Proof of Concept',
    tasks: [
      { id: 'q4-task1', text: 'Launch three pilot programs (startup, mutual aid, municipal)', checked: false },
      { id: 'q4-task2', text: 'Build a minimal viable product for tamper-evident records', checked: false },
      { id: 'q4-task3', text: 'Crystallize the name "Unrival" and its visual identity', checked: false },
      { id: 'q4-task4', text: 'Begin pre-registered studies for evidence generation', checked: false },
    ]
  },
  {
    id: 'q1-2026',
    title: 'Q1 2026: Standards and Scale',
    tasks: [
      { id: 'q1-task1', text: 'Publish Promise Schema v0.9 for interoperability', checked: false },
      { id: 'q1-task2', text: 'Refine protocol with micro-promises and renegotiation windows', checked: false },
      { id: 'q1-task3', text: 'Begin cross-domain validation in clinical and educational settings', checked: false },
    ]
  },
  {
    id: 'q2-2026',
    title: 'Q2 2026: Product-Market Fit',
    tasks: [
      { id: 'q2-task1', text: 'Release Public Promise v1.0 with selective disclosure', checked: false },
      { id: 'q2-task2', text: 'Solidify trust infrastructure with decentralized ID', checked: false },
      { id: 'q2-task3', text: 'Bridge communities by framing value for different audiences', checked: false },
    ]
  },
  {
    id: 'q3-q4-2026',
    title: 'Q3-Q4 2026: The Cascade Effect',
    tasks: [
      { id: 'q3q4-task1', text: 'Secure institutional adoption (Fortune 500s, cities)', checked: false },
      { id: 'q3q4-task2', text: 'Activate network effects in key marketplaces', checked: false },
      { id: 'q3q4-task3', text: 'Transparently respond to backlash and criticism', checked: false },
    ]
  },
  {
    id: 'q1-q2-2027',
    title: 'Q1-Q2 2027: Systems Integration',
    tasks: [
      { id: 'q1q2-task1', text: 'Develop a federated governance structure', checked: false },
      { id: 'q1q2-task2', text: 'Publish convergent findings from multiple studies', checked: false },
      { id: 'q1q2-task3', text: 'Launch political experiments in several jurisdictions', checked: false },
    ]
  },
  {
    id: 'q3-2027',
    title: 'Q3 2027: The Turning',
    tasks: [
      { id: 'q3-2027-task1', text: 'Achieve critical mass with observable infrastructure', checked: false },
      { id: 'q3-2027-task2', text: 'Measure impact via rising trust and falling collaboration costs', checked: false },
      { id: 'q3-2027-task3', text: 'Establish a global-local pattern of spread', checked: false },
    ]
  }
];

const RetrogradeAnalysis = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsPanelVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const allTasks = useMemo(() => timelineData.flatMap(section => section.tasks), []);
  const totalTasks = allTasks.length;
  const completedTasks = useMemo(() => allTasks.filter(task => task.checked).length, [allTasks]);
  
  // The actual progress percentage.
  const actualProgress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  // Apply a non-linear transformation (square root) to the progress.
  const progressPercentage = Math.sqrt(actualProgress) * 10;

  return (
    <>
      <div className="retrograde-grid-container">
        <div className={`left-panel ${isPanelVisible ? 'visible' : ''}`}>
          <div className="left-panel-content">
            <div className="progress-track-vertical">
              <div className="progress-fill-vertical" style={{ height: `${progressPercentage}%` }}></div>
            </div>
            {timelineData.map(section => (
              <div key={section.id} className="timeline-section">
                <h3>{section.title}</h3>
                <ul className="task-list">
                  {section.tasks.map(task => (
                    <li key={task.id} className={`task-item ${task.checked ? 'completed' : ''}`}>
                      <label>
                        <input 
                          type="checkbox" 
                          checked={task.checked}
                          disabled={true}
                          readOnly={true}
                        />
                        <span>{task.text}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="main-content-area">
          <h2>The Unrival Movement: A Complete Retrograde Synthesis (Q3 2025 → September 2027)</h2>
          <p className="subtitle">
            <a href="https://docs.google.com/document/d/1DO2LJY-w3fO0a2QS9fVNeG_TmX8O4sWiDSGCtC2iBTM/edit?tab=t.e41udywix7fc" target="_blank" rel="noopener noreferrer">
              A synthesis of retrograde analyses applied to our letter from the future
            </a>
          </p>
          
          <h3>The Core Architecture</h3>
          <p>Between now and September 2027, a movement called "Unrival" will emerge and scale, fundamentally altering how society measures and builds trust. At its heart lies a deceptively simple innovation: the Public Promise—a standardized way to declare commitments, track their fulfillment, and create visible integrity metrics that rebuild social capital across all levels of society.</p>
          <p>The movement succeeds not through any single breakthrough but through the precise integration of four dimensions that previous reform efforts treated separately: individual mindset (the inner-individual), observable behavior (the outer-individual), collective culture (the inner-collective), and institutional systems (the outer-collective). This integration, combined with a focus on the right leverage points at the right time, creates cascading effects that transform isolated experiments into widespread cultural change.</p>
          
          <h3>Q3 2025: The Founding Moment (Your Present)</h3>

          {/* NEW: Immediate objectives before "The Coalition Forms" */}
          <h4>Immediate Objectives (Q3 2025)</h4>
          <ul>
            <li>
              Publish the Unrival <em>Letter from the Future</em> on-site (shareable anchor).
            </li>
            <li>
              Launch <strong>Converging Futures</strong> infrastructure:
              {' '}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf05hYw4J6bXlnZ2BDVNP7ReGnujzoH_ADLWlUPc8mxLg_--w/viewform?utm_source=unrival_site&utm_medium=button&utm_campaign=letters_form"
                target="_blank" rel="noopener noreferrer">Letters form</a>{' '}
              &middot;{' '}
              <a
                href="https://docs.google.com/spreadsheets/d/1d9CiBcqY3FN5RNtrC3HXpwMSpvLqFPCvNfmzYyYWmzY/edit?usp=sharing"
                target="_blank" rel="noopener noreferrer">Letters ledger</a>{' '}
              &middot;{' '}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfyoP6yVdpITWUnsFnjq2uZZqQM-Va6QozZMGEMEbxo0VKscw/viewform?utm_source=unrival_site&utm_medium=button&utm_campaign=promises_form"
                target="_blank" rel="noopener noreferrer">Promises form</a>{' '}
              &middot;{' '}
              <a
                href="https://docs.google.com/spreadsheets/d/1EHHLxAUAbzzGe53gUVSNxvjCxqOynM8Hp1QnBEa3QKs/edit?usp=sharing"
                target="_blank" rel="noopener noreferrer">Promises ledger</a>. Link in nav & hero; share links.
            </li>
            <li>
              Publish the <strong>Converging Futures</strong> technique explainer section (with CTAs) on the site.
              {/* Note: replaces the earlier "experimental public promise ledger" objective */}
            </li>
          </ul>

          <h4>The Coalition Forms</h4>
          <p>A circle of hypnotists, recognizing their unique access to the unconscious mind's programming, convenes with behavioral scientists, product designers, civic innovators, and systems thinkers. They share a diagnosis: society isn't broken—it's successfully executing unconscious scripts that no one consciously wants. The iceberg metaphor becomes central: the conscious mind (12%) keeps trying to steer while the unconscious (88%) drives toward different destinations.</p>
          
          <h4>The Core Constraint Identified</h4>
          <p>Using Theory of Constraints analysis, the group identifies trust-as-proof as the system's primary bottleneck. Without reliable signals of integrity, cooperation becomes prohibitively expensive, leading to the fragmentation everyone experiences. The market for collaboration is constrained not by capability but by verifiability.</p>
          
          <h4>The First Artifacts</h4>
          <p>Within 30-60 days, three critical pieces emerge:</p>
          <ul>
            <li>The Promise Schema v0.1: A minimal specification with fields for actor, intention, conditions of satisfaction, deadline, verification method, privacy level, and repair pathways. This is designed to work with existing W3C Verifiable Credentials standards and optional blockchain-free attestation systems.</li>
            <li>The Hypnosis-Informed Protocol: A 20-30 minute session combining:
              <ul>
                <li>Pre-talk to clarify controllable commitments</li>
                <li>Trance induction for accessing unconscious alignment</li>
                <li>Future-pacing to rehearse both success and renegotiation</li>
                <li>Post-trance Promise capture while still in a suggestible state</li>
                <li>Automated witness notifications</li>
              </ul>
            </li>
            <li>The Ethical Framework: Voluntary participation only, no promises on non-controllable outcomes, cooling-off periods, explicit consent for visibility levels, and clear escalation paths for manipulation or coercion concerns.</li>
          </ul>
          
          <h4>Initial Metrics Definition</h4>
          <p>The movement establishes its key performance indicators:</p>
          <ul>
            <li>PKR (Promise-Kept Rate): Percentage of promises fulfilled</li>
            <li>CG (Calibration Gap): Delta between predicted and actual completion</li>
            <li>LtF (Latency-to-Fulfillment): Time from commitment to completion</li>
            <li>Repair Rate: Percentage of broken promises with documented learning/restitution</li>
          </ul>

          <h3>Q4 2025: Proof of Concept</h3>
          <h4>The First Cohorts</h4>
          <p>Three pilot programs launch simultaneously:</p>
          <ul>
            <li>A startup accelerator (50 founders making product delivery promises)</li>
            <li>A mutual aid network (100 members making community support promises)</li>
            <li>A municipal department (30 staff making service delivery promises)</li>
          </ul>
          <p>Each uses the same core protocol but adapts the framing to their context. Early results show 65-75% PKR on 30-60 day goals, beating matched baselines by 10-15 percentage points.</p>
          
          <h4>Technical Infrastructure</h4>
          <p>A minimal viable product emerges: a simple web form that creates tamper-evident records, optional peer verification, and a public dashboard showing aggregate statistics. Privacy is preserved through selective disclosure—public summaries with private details.</p>
          
          <h4>The Name Crystallizes</h4>
          <p>"Unrival" is chosen for its dual meaning: to transcend (un-rival) old patterns and to end the rivalry between inner intentions and outer reality. The movement's visual identity centers on the iceberg metaphor and the four-quadrant integration map.</p>
          
          <h4>Evidence Generation</h4>
          <p>Pre-registered studies begin, comparing Promise-aligned cohorts with traditional goal-setting controls. Researchers from multiple disciplines contribute: psychologists studying the hypnosis effects, behavioral economists examining commitment devices, and sociologists analyzing trust formation.</p>

          <h3>Q1 2026: Standards and Scale</h3>
          <h4>Interoperability Emerges</h4>
          <p>The Promise Schema v0.9 is published as an open standard, compatible with existing tools:</p>
          <ul>
            <li>Integration with project management platforms (Asana, Linear)</li>
            <li>HR systems can issue and track professional development promises</li>
            <li>Civic platforms can display community promises</li>
          </ul>
          <p>All using the same underlying data model</p>
          
          <h4>The Protocol Hardens</h4>
          <p>Based on early learnings, the hypnosis-informed protocol is refined:</p>
          <ul>
            <li>Micro-promises (≤2 weeks) for building momentum</li>
            <li>Renegotiation windows that prevent all-or-nothing failures</li>
            <li>Group witnessing sessions that normalize both success and learning from failure</li>
            <li>Repair pathways that transform broken promises into relationship-building opportunities</li>
          </ul>
          
          <h4>Cross-Domain Validation</h4>
          <p>Independent evaluations begin showing consistent effects across contexts:</p>
          <ul>
            <li>Clinical settings: reduced anxiety and increased treatment adherence</li>
            <li>Educational environments: higher assignment completion rates</li>
            <li>Workplace teams: improved sprint velocity and psychological safety</li>
            <li>Community organizing: increased volunteer retention and follow-through</li>
          </ul>

          <h3>Q2 2026: Product-Market Fit</h3>
          <h4>The Design Breakthrough</h4>
          <p>Version 1.0 of the Public Promise includes critical innovations:</p>
          <ul>
            <li>Selective disclosure: Users control what's public vs. private</li>
            <li>Reputation curves: Weight recent promises more heavily than old ones</li>
            <li>Difficulty adjustment: Complex promises earn more reputation than simple ones</li>
            <li>Grace mechanics: Renegotiation doesn't count as failure if done transparently</li>
          </ul>
          
          <h4>Trust Infrastructure</h4>
          <p>Technical foundations solidify:</p>
          <ul>
            <li>Decentralized identity verification (no single point of failure)</li>
            <li>Attestation systems that work both on-chain and off-chain</li>
            <li>Privacy-preserving aggregation (see trends without individual exposure)</li>
            <li>Audit trails that prevent retroactive editing while allowing corrections</li>
          </ul>
          
          <h4>Cultural Bridge-Building</h4>
          <p>The movement consciously bridges different communities:</p>
          <ul>
            <li>Therapists frame it as "making the unconscious conscious and accountable"</li>
            <li>Technologists see it as "trust as a protocol"</li>
            <li>Policy makers understand it as "measurable integrity for public service"</li>
            <li>Artists explore it as "radical honesty as social sculpture"</li>
          </ul>

          <h3>Q3-Q4 2026: The Cascade Effect</h3>
          <h4>Institutional Adoption</h4>
          <p>Early adopters create pressure for broader adoption:</p>
          <ul>
            <li>Three Fortune 500 companies pilot Promise-based OKRs</li>
            <li>Five cities incorporate Promise tracking into procurement scoring</li>
            <li>Two university systems use Promises for student success programs</li>
            <li>A major foundation ties grant disbursements to Promise milestones</li>
          </ul>
          
          <h4>Network Effects Activate</h4>
          <p>As more people make promises, the value of participation increases:</p>
          <ul>
            <li>Teams with Promise practices report 30% less coordination overhead</li>
            <li>Communities with &gt;100 active promisors show measurable increases in civic participation</li>
            <li>Dating apps begin showing Promise-completion rates as trust signals</li>
            <li>Freelance marketplaces integrate Promise history into reputation systems</li>
          </ul>
          
          <h4>The First Backlash</h4>
          <p>Critics raise legitimate concerns:</p>
          <ul>
            <li>"Surveillance moralism" and social credit score fears</li>
            <li>Equity issues (who can afford to fail publicly?)</li>
            <li>Gaming and manipulation risks</li>
            <li>Cultural imposition concerns</li>
          </ul>
          <p>The movement responds not defensively but transparently:</p>
          <ul>
            <li>Publishing detailed failure analyses</li>
            <li>Creating "Promise equity funds" for those who need support</li>
            <li>Implementing random audits and gaming detection</li>
            <li>Emphasizing local adaptation over universal mandates</li>
          </ul>

          <h3>Q1-Q2 2027: Systems Integration</h3>
          <h4>Governance Emerges</h4>
          <p>A federated governance structure develops:</p>
          <ul>
            <li>An open foundation stewards the core standard (like W3C)</li>
            <li>Regional chapters adapt practices to local contexts</li>
            <li>Ethics committees handle disputes and edge cases</li>
            <li>Independent auditors verify impact claims</li>
          </ul>
          
          <h4>Evidence Accumulates</h4>
          <p>Multiple studies converge on key findings:</p>
          <ul>
            <li>Promise-keeping correlates with but doesn't reduce to conscientiousness</li>
            <li>The hypnosis component adds 15-20% to completion rates</li>
            <li>Public visibility adds another 10-15%</li>
            <li>Renegotiation options prevent shame spirals and increase long-term engagement</li>
          </ul>
          
          <h4>Political Experiments</h4>
          <p>Several jurisdictions experiment with Unrival principles:</p>
          <ul>
            <li>City councils make public promises about policy implementation</li>
            <li>Candidates publish verifiable commitment platforms</li>
            <li>Some ballots include "Unrival-certified" designation for transparency pledges</li>
            <li>Community boards use Promise walls for participatory budgeting</li>
          </ul>

          <h3>Q3 2027: The Turning</h3>
          <p>By September 2027, the movement has achieved critical mass:</p>
          <h4>Observable Infrastructure</h4>
          <ul>
            <li>Technical: Interoperable Promise systems used by millions</li>
            <li>Social: Promise-keeping as a visible social norm</li>
            <li>Institutional: Organizations routinely publish integrity dashboards</li>
            <li>Cultural: Renegotiation normalized as integrity, not failure</li>
          </ul>
          
          <h4>Measured Impact</h4>
          <ul>
            <li>Trust indices rising in participating communities</li>
            <li>Collaboration costs decreasing measurably</li>
            <li>Goal achievement rates up 20-30% across domains</li>
            <li>Mental health indicators improving in engaged populations</li>
          </ul>
          
          <h4>Global-Local Pattern</h4>
          <p>The movement spreads not through central control but through:</p>
          <ul>
            <li>Open standards that anyone can implement</li>
            <li>Local adaptation of core principles</li>
            <li>Peer-to-peer learning networks</li>
            <li>Story-sharing that emphasizes learning over preaching</li>
          </ul>

          <h3>The Mechanics of Change</h3>
          <h4>Why It Works: Systems Perspective</h4>
          <p>The movement succeeds by addressing multiple leverage points simultaneously:</p>
          <ul>
            <li>Information Flows: Making integrity visible changes behavior without force</li>
            <li>Feedback Loops: Quick cycles between promise and result accelerate learning</li>
            <li>System Goals: Shifting from "looking good" to "building trust"</li>
            <li>Paradigms: Reframing integrity from moral judgment to practical skill</li>
          </ul>
          
          <h4>Why It Works: Psychological Perspective</h4>
          <p>The hypnosis component provides unique advantages:</p>
          <ul>
            <li>Bypasses conscious resistance to change</li>
            <li>Aligns unconscious drivers with conscious goals</li>
            <li>Creates vivid future memories that pull behavior forward</li>
            <li>Reduces anxiety around commitment and failure</li>
          </ul>
          
          <h4>Why It Works: Sociological Perspective</h4>
          <p>The movement creates new social facts:</p>
          <ul>
            <li>Promises become "boundary objects" that different groups can use</li>
            <li>Metrics create commensuration without flattening moral complexity</li>
            <li>Rituals around promise-making build collective effervescence</li>
            <li>Visible integrity becomes a form of social capital</li>
          </ul>
          
          <h4>Why It Works: Economic Perspective</h4>
          <p>The Public Promise solves a market failure:</p>
          <ul>
            <li>Reduces transaction costs by making trust verifiable</li>
            <li>Creates positive externalities (my integrity helps your planning)</li>
            <li>Enables new forms of cooperation previously too risky</li>
            <li>Generates network effects that compound value</li>
          </ul>

          <h3>Critical Success Factors</h3>
          <p>Several elements prove essential:</p>
          <ul>
            <li>Starting with the willing: Early adopters aren't forced but invited</li>
            <li>Measuring what matters: Focus on throughput (trust created) not activity</li>
            <li>Embracing failure: Broken promises with learning valued over hidden failures</li>
            <li>Distributed ownership: No single organization controls the movement</li>
            <li>Cultural sensitivity: Local adaptation encouraged, not suppressed</li>
            <li>Technical simplicity: Core promise structure fits on an index card</li>
            <li>Ethical vigilance: Continuous monitoring for harm and swift correction</li>
          </ul>

          <h3>The Path Forward from Q3 2025</h3>
          <p>For someone standing in the present moment, the path is clear:</p>
          <h4>Next 30 Days</h4>
          <ul>
            <li>Convene your initial circle across the four quadrants</li>
            <li>Draft your Promise Schema and test it with 20 people</li>
            <li>Run one hypnosis-aligned session and document results</li>
            <li>Publish your ethics framework and invite criticism</li>
          </ul>
          <h4>Next 60 Days</h4>
          <ul>
            <li>Launch three distinct pilot cohorts</li>
            <li>Build your minimum viable Promise tracker</li>
            <li>Begin pre-registered evaluation studies</li>
            <li>Create your first cultural artifacts (videos, stories)</li>
          </ul>
          <h4>Next 90 Days</h4>
          <ul>
            <li>Publish initial results with radical transparency</li>
            <li>Open-source your tools and protocols</li>
            <li>Form partnerships across at least two sectors</li>
            <li>Establish your governance principles</li>
          </ul>

          <h3>Conclusion: Why This Future is Plausible</h3>
          <p>This retrograde analysis reveals not a utopian fantasy but a plausible path based on:</p>
          <ul>
            <li>Precedent: Successful commitment devices (stickK), reputation systems (eBay), and behavior change programs (AA) show the components work</li>
            <li>Timing: Current trust crisis creates demand for solutions</li>
            <li>Technology: Existing standards (W3C VC, attestation systems) provide infrastructure</li>
            <li>Evidence: Hypnosis and commitment research provide scientific backing</li>
            <li>Simplicity: Core mechanism simple enough to explain, complex enough to be useful</li>
          </ul>
          <p>The Unrival movement succeeds not by solving all problems but by solving the right problem: creating verifiable trust that enables everything else. From Q3 2025 to September 2027, each step builds logically on the previous one, creating a cascade that transforms individual integrity into collective possibility.</p>
          <p>The race to awaken agency has begun. The tools exist. The path is marked. What remains is the choice to begin.</p>
        </div>
      </div>
      <style jsx>{`
        .retrograde-grid-container {
          display: grid;
          grid-template-columns: 1fr minmax(0, 750px) 1fr;
          gap: 2rem;
          width: 100%;
          padding: 0 2rem;
          box-sizing: border-box;
          margin-top: 4rem;
        }
        .left-panel {
          grid-column: 1 / 2;
          position: sticky;
          top: 80px;
          height: calc(100vh - 120px);
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s;
          will-change: transform, opacity;
        }
        .left-panel.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .left-panel-content {
          position: relative;
          height: 100%;
          overflow-y: auto;
          padding: 1.5rem 1rem 1.5rem 40px;
        }
        .main-content-area {
          grid-column: 2 / 3;
          min-width: 0;
          font-family: "Lora", serif;
        }
        .main-content-area h2, .main-content-area h3, .main-content-area h4 {
          font-family: "Playfair Display", serif;
        }
        .main-content-area .subtitle {
          font-size: 0.9rem;
          font-style: italic;
          color: #6A737D;
          margin-bottom: 2rem;
        }
        .main-content-area .subtitle a {
          color: inherit;
          text-decoration: underline;
        }

        /* Progress Bar and Task List Styles */
        .progress-track-vertical {
          position: absolute;
          top: 40px; 
          left: 20px; 
          bottom: 20px;
          width: 4px;
          background-color: #E9ECEF;
          z-index: 0;
          border-radius: 2px;
        }
        .progress-fill-vertical {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #1F6FEB;
          transition: height 0.5s ease-in-out;
          z-index: 0;
          border-radius: 2px;
        }
        .timeline-section {
          margin-bottom: 2rem;
        }
        .timeline-section h3 {
          font-family: "Lato", sans-serif;
          margin: 0 0 1rem 0;
          font-size: 1.1rem;
          font-weight: 700;
        }
        .task-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .task-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.75rem;
          position: relative;
        }
        .task-item::before {
          content: '';
          position: absolute;
          left: -28px; 
          top: 4px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: #FFFFFF;
          border: 3px solid #ADB5BD;
          box-sizing: border-box;
          transition: border-color 0.3s ease;
          z-index: 1;
        }
        .task-item.completed::before {
          border-color: #1F6FEB;
        }
        .task-item label {
          display: flex;
          align-items: center;
          cursor: default;
          font-size: 0.9rem;
          color: #495057;
          font-family: "Lato", sans-serif;
        }
        .task-item input[type="checkbox"] {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border: 2px solid #D0D8E2;
          border-radius: 4px;
          margin-right: 10px;
          cursor: default;
          position: relative;
          transition: all 0.2s;
        }
        .task-item input[type="checkbox"]:checked {
          background-color: #1F6FEB;
          border-color: #1F6FEB;
        }
        .task-item input[type="checkbox"]:checked::after {
          content: '✓';
          color: white;
          font-size: 12px;
          font-weight: bold;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .task-item.completed input[type="checkbox"]:disabled + span {
          text-decoration: line-through;
          color: #868e96;
        }
      `}</style>
    </>
  );
};

export default RetrogradeAnalysis;
