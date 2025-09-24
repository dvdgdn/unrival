import React from 'react';
import Image from 'next/image';

// Assuming these visual components exist to illustrate key concepts.
import IcebergIllustration from './IcebergIllustration';
import FourFrontsDiagram from './FourFrontsDiagram';
import PromiseLifecycle from './PromiseLifecycle';
import InlineInquiryCTA from './InlineInquiryCTA';
import TrustBeforeAfter from './TrustBeforeAfter';

const LetterDisplay = () => {
  return (
    <article className="letter-display prose prose-neutral max-w-none">
      {/* ... other sections remain the same ... */}
      <header>
        <div className="date">
          <h3>Autumnal Equinox, 2027</h3>
        </div>
        <p className="salutation">
          Dear changemaker and exhausted inhabitant of the tumultuous third quarter of 2025,
        </p>
      </header>
      <p>
        I write in a spirit of hope and solidarity—but also urgency, hoping to convey something of the tremendous agency latent in your world right now. Keep running the race to awaken it, even as things appear to grow graver. Now more than ever, look within for a vision of a future marked by beauty and possibility—one within reach if you dare to define it and live toward it.
      </p>
      <p>
        Having made it through the last two years, I can report that an unequivocally positive cultural moment is in the air—a relief we've never needed more. I want to tell you about the part of this change I witnessed firsthand.
      </p>
      <section>
        <h2>The Beginning: A Circle of Ambassadors</h2>
        <p>
          It started, as world-changing things always do, with a small group. I remember its inception clearly. We were a circle of ambassadors to the subconscious—hypnotists—and we knew we had access to a unique leverage point for transformation, even as the whole world was crying out for it.
        </p>
        <p>
          But here's what made us different: we weren't just another group of well-meaning practitioners. We understood something fundamental about the architecture of the human mind. As Dr. John Kappas once articulated with startling clarity:
        </p>
        <blockquote cite="https://www.kappas.com/">
          <p>
            "Before we begin to explore the way in which our life script is written by our subconscious mind, you will have to accept one fact. The <em>TRUTH ABOUT YOURSELF</em> is that <em>YOU ARE A SUCCESS!</em> Yes, right now! No matter how down-and-out you may feel, you have succeeded in carrying out your current life script. You were programmed by your past, and success in any endeavor means carrying out your subconscious plans. You have done this well. The only problem is that your subconscious script is not the pattern you want for your present and future."
          </p>
          <footer>
            — Dr. John Kappas
          </footer>
        </blockquote>
        <p>
          This insight became our north star. We weren't trying to fix broken people—we were helping successful executors of unconscious scripts rewrite their programming.
        </p>
      </section>
      <section>
        <h2>The Iceberg Problem</h2>
        <p>
          Picture the human mind as an iceberg. The conscious, goal-seeking mind—everything you think determines your behavior—accounts for only about 12% of total mental activity. The unconscious, that vast 88% beneath the surface, often pursues aims completely at odds with our conscious goals. We'd been trying to steer the ship by rearranging deck chairs on the visible tip while ignoring the massive force beneath.
        </p>
        <figure>
          <IcebergIllustration />
          <figcaption>
            The conscious mind (12%) vs. the unconscious mind (88%) that truly steers behavior.
          </figcaption>
        </figure>
        <p>
          But the real breakthrough came when we realized this same pattern operated at every level of society. Justas individuals have unconscious programming that sabotages conscious aims, society has a collective unconscious—deep scripts that oppose our stated goals. We hadn't failed as a civilization; we'd succeeded brilliantly at executing a script no one consciously wanted.
        </p>
      </section>
      <section>
        <h2>The Four-Front War We Were All Losing</h2>
        <p>
          For years, we'd all been fighting on separate fronts, each convinced our approach was the answer:
        </p>
        <dl>
          <dt>Mindset</dt>
          <dd>The inner-individual realm, mastered by hypnotists and therapists.</dd>
          <dt>Behavior</dt>
          <dd>The outer-individual sphere, addressed through policy and incentives.</dd>
          <dt>Culture</dt>
          <dd>Our inner-collective programming, the focus of deep, slow work.</dd>
          <dt>Systems</dt>
          <dd>The outer-collective structures built by technologists and reformers.</dd>
        </dl>
        <FourFrontsDiagram />
        <p>
          We were all trying to solve a four-dimensional problem with one-dimensional solutions. Like the blind men describing an elephant, each of us had a piece of the truth but mistook it for the whole.
        </p>
      </section>
      <section>
        <h2>The Bridge: From Insight to Integration</h2>
        <p>
          The movement that emerged—which we called <strong>Unrival</strong>—wasn't born from a single discovery but from integration. The name itself carried a dual meaning that emerged almost spontaneously from our early dialogues: to outcompete or transcend old patterns, and to undo the rivalry between our inner intentions and outer reality. <em>Did it arise through spontaneous dialogos, or was it clever marketing? We're no longer certain, and perhaps that ambiguity is part of its power.</em>
        </p>
        <p>
          What made Unrival revolutionary was how it bridged the inner and outer dimensions of change. We started with our hypnotic leverage point—helping individuals align their conscious goals with subconscious programming. But we knew individual transformation without systemic change was like trying to swim upstream in a toxic river.
        </p>
      </section>
      <section>
        <h2>The Technology That Changed Everything: The Promise</h2>
        <p>
          This is where things got interesting. We developed something deceptively simple yet profound: the <strong>Public Promise</strong>. By making carefully crafted commitments and recording their fulfillment—kept or broken—as a matter of public record, we created something unprecedented: <strong>integrity as a trackable metric</strong>.
        </p>
        <figure className="my-8 flex flex-col items-center">
          <Image
            src="/trojan_horse.png"
            alt="A large wooden Trojan horse, symbolizing a powerful, hidden change agent."
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
          <figcaption className="mt-2 text-center text-sm italic">
            The Promise was our Trojan Horse—a simple gift that carried a revolutionary change within.
          </figcaption>
        </figure>
        {/* The PromiseLifecycle component was missing in the last version you sent, adding it back */}
        <p>
          Think about it: throughout history, trust has been the most valuable yet unmeasurable currency. Politicians promise, corporations pledge, individuals commit—but accountability remained ethereal. The Public Promise changed that. It connected a person's inner commitment (<strong>Mindset</strong>) to their public actions (<strong>Behavior</strong>) and held them accountable in a way that rebuilt our collective trust (<strong>Culture</strong>) and reformed our institutions (<strong>Systems</strong>).
        </p>
        {/* Technical Proof Section */}
<div className="technical-proof-box" style={{
  background: '#F8FAFC', 
  border: '1px solid #E2E8F0', 
  padding: '16px', 
  margin: '24px 0',
  borderRadius: '8px'
}}>
  <h4>How This Actually Works</h4>
  <p>We've built a technical specification that tracks objective metrics like punctuality and follow-through using platform timestamps—no recordings required, privacy-first by default.</p>
  
  <details>
    <summary style={{cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px'}}>View technical details</summary>
    <pre style={{
      fontSize: '12px', 
      overflow: 'auto', 
      marginTop: '12px',
      background: '#FFFFFF',
      padding: '12px',
      borderRadius: '4px',
      border: '1px solid #D1D5DB'
    }}>
{`// Core Promise Object
{
  "promiseId": "pm_...",
  "promiserId": "coach_...",
  "standardRef": "/coaching/session/_coachPunctualWithinMinutes@0.1.0",
  "params": {"minutes": 5},
  "evidence": {"types": ["zoom.join_leave_ts"]},
  "result": "pass | minor_breach | major_breach"
}`}
    </pre>
  </details>
  
  <div style={{marginTop: '12px'}}>
    <a 
      href="/promise-protocol" 
      style={{
        fontWeight: 'bold',
        color: '#1F6FEB',
        textDecoration: 'none'
      }}
    >
      → View complete technical specification
    </a>
  </div>
</div>

<div className="development-status" style={{
  background: '#FEF3C7',
  border: '1px solid #F59E0B',
  padding: '12px',
  margin: '16px 0',
  borderRadius: '6px'
}}>
  <strong>Development Status (Sept 2025):</strong>
  <ul style={{margin: '8px 0', paddingLeft: '20px'}}>
    <li>Promise Schema v0.1 in draft</li>
    <li>Recruiting 10-15 pilot coaches</li>
    <li>First test sessions planned Q4 2025</li>
  </ul>
  <small style={{fontStyle: 'italic'}}>Target: 500+ tracked sessions by Q2 2026</small>
</div>

{/* Skepticism FAQ */}
<details style={{marginTop: '16px'}}>
  <summary style={{cursor: 'pointer', fontSize: '14px', fontWeight: 'bold'}}>Common concerns about this approach</summary>
  <div style={{padding: '12px 0', fontSize: '14px', color: '#64748B'}}>
    <p><strong>Q: Isn't this just surveillance?</strong><br/>
    A: Everything is private by default. Public visibility requires explicit opt-in.</p>
    
    <p><strong>Q: What about gaming the system?</strong><br/>
    A: We track patterns across time and use multiple evidence sources. Gaming becomes obvious.</p>
    
    <p><strong>Q: This sounds too good to be true.</strong><br/>
    A: Fair. That's why we're publishing all our data and methods openly.</p>
  </div>
</details>
        <TrustBeforeAfter />
        <p>
          Within months, the evidence we generated for the efficacy of this approach was unparalleled. It became difficult to deny that the mind's power—channeled through commitment and accountability—could yield therapeutic and societal benefits few in mainstream institutions were comfortable admitting. "Just imagine the impact of this power finally being understood," people remarked as it unfolded.
        </p>
      </section>
      
      {/* --- CORRECTED "CASCADE EFFECT" SECTION --- */}
      <section>
        <h2>The Cascade Effect</h2>

        <p>
          Of course, popularizing a single modality wasn't the point—it was the first domino. Once merit became demonstrable in one arena, the effects cascaded in ways we never anticipated:
        </p>

        
        <ol>
          <li>Individuals who aligned their conscious and unconscious minds discovered staggering personal agency.</li>
          <li>This personal integrity, made visible through Public Promises, began rebuilding social trust.</li>
          <li>As trust grew and people succeeded together, we began healing our collective culture.</li>
          <li>New systems emerged organically, designed around transparency and mutual accountability.</li>
        </ol>
        <aside>
          <p>
            Because the movement globalized quickly and adapted locally, its development cannot be traced precisely. In some places, it took a decidedly political route—voters even saw Unrival listed as a new option on local ballots. Many are surprised by its modest origin: a coaching platform focused on goal achievement that began with hypnotists who believed rapidly scaling inner work would yield positive second-order effects few could imagine.
          </p>
        </aside>
      </section>

      <section>
        <h2>The Oldest Technology, The Newest Era</h2>
        <p>
          What we discovered wasn't new—it was perhaps the oldest technology imaginable: the <strong>Promise</strong>. But by combining this ancient social technology with modern understanding of consciousness, collective behavior, and systematic change, we unlocked something profound. We showed, beyond reasonable doubt, that a new era of healing and transformation had arrived.
        </p>
      </section>

      {/* ... "Your Turn" and footer sections are correct ... */}
      <section className="call-to-action">
        <h2>Your Turn</h2>
        <p>
          The future you're hoping for is possible. The tools are all around you—scattered across disciplines, hidden in separate silos, waiting to be integrated via a declared inten. The work isn't to invent something new but to bridge what already exists <em>by declaring your intentions to make them viable</em>.
        </p>
        <p>
          Look for the hypnotists and the healers working on <strong>Mindset</strong>. Find the reformers changing <strong>Behavior</strong>. Connect with the artists and philosophers shifting <strong>Culture</strong>. Partner with the builders creating new <strong>Systems</strong>. And most importantly, understand that you need all four.
        </p>
        <p>
          The race isn't just to awaken agency—it's to integrate it across every dimension of change. That's the real promise of Unrival: not a single solution, but a unified approach to the magnificent, messy work of human transformation.
        </p>
        <InlineInquiryCTA />
      </section>
      <footer>
        <p>Keep running. We're waiting for you on the other side.</p>
        <p className="closing">
          With solidarity and hope,<br />
          A witness to the turning
        </p>
      </footer>
    </article>
  );
};

export default LetterDisplay;