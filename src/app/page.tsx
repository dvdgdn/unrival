import FloatingNav from '../components/FloatingNav';
import LetterDisplay from '../components/LetterDisplay';
import VideoPlayer from '../components/VideoPlayer';
import RetrogradeAnalysis from '../components/RetrogradeAnalysis';
import InquiryCTA from '../components/InquiryCTA';
import ConvergingFutures from '../components/ConvergingFutures';

export default function Home() {
  return (
    <>
      <FloatingNav />
      <div className="container">
        <InquiryCTA />

        <h1>A Letter from 2027</h1>
        <p className="metadata">A Vision of the Unrival Movement</p>
        <p className="read-time">Estimated Read Time: 5 minutes</p>

        <section id="the-letter">
	<div className="thought-experiment-notice" style={{
  background: '#F0F9FF',
  border: '1px solid #0EA5E9',
  borderRadius: '8px',
  padding: '16px',
  margin: '24px 0',
  fontSize: '14px'
}}>
  <strong>About this exercise:</strong> This isn't a prediction—it's a thought experiment. 
  We're exploring what might be possible if certain approaches to trust and commitment 
  actually worked at scale. Think of it as "what if we got our act together?" rather 
  than "here's what will happen."
</div>
          <LetterDisplay />
        </section>

        <hr className="separator" />

        {/* legacy anchor kept for old links; points to the new technique section */}
        <div
          id="technique-letter"
          aria-hidden="true"
          style={{ position: 'relative', top: '-64px', height: 0 }}
        />

        {/* NEW: Converging Futures technique */}
        <ConvergingFutures />

        <section id="technique-analysis">
          <h2>The &quot;Retrograde Analysis&quot; Technique</h2>
          <p>
            A vision is inspiring, but it is not a plan. Retrograde analysis is the technique of
            working backward from a future success to map the critical path that leads to it. If the
            letter is the &quot;destination,&quot; this analysis is the &quot;map.&quot; Instead of
            asking &quot;What do we do next?&quot;, ask, &quot;For our future vision to be true, what
            must have already happened the year before?&quot;
          </p>

          <VideoPlayer />
        </section>
      </div>

      <section id="the-plan">
        <RetrogradeAnalysis />
      </section>
    </>
  );
}
