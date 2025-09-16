import FloatingNav from '../components/FloatingNav';
import LetterDisplay from '../components/LetterDisplay';
import TechniqueBox from '../components/TechniqueBox';
import VideoPlayer from '../components/VideoPlayer';
import RetrogradeAnalysis from '../components/RetrogradeAnalysis';

export default function Home() {
  return (
    <>
      <FloatingNav />
      <div className="container">
        <h1>A Letter from 2027</h1>
        <p className="metadata">A Vision of the Unrival Movement</p>
        <p className="read-time">Estimated Read Time: 3 minutes</p>
        
        <section id="the-letter">
          <LetterDisplay />
        </section>

        <hr className="separator" />

        <section id="technique-letter">
          <h2>1. The &quot;Letter from the Future&quot; Technique</h2>
          <p>A vision statement paints a picture of the world you’re aiming to create. This collaborative exercise is designed to rapidly generate that picture—a vision that engages the heart as well as the head.</p>
          <TechniqueBox title="The Exercise">
            <ol>
              <li><strong>Set the Scene:</strong> Ask your group to imagine it is five years in the future. Everything that could have gone right for the group has.</li>
              <li><strong>Identify the Recipient:</strong> Think of a real person who is in the group now but likely won&apos;t be in five years&apos; time. The group will collectively write a letter to this person.</li>
              <li><strong>Write the Letter (25 minutes):</strong> Working together or individually, draft a letter that answers the guiding questions below.</li>
            </ol>
            <h3>Guiding Questions</h3>
            <ul>
              <li>What specifically has the group accomplished in this time?</li>
              <li>What obstacles and barriers did the group overcome, and how?</li>
              <li>What is the impact of these accomplishments on your stakeholders?</li>
              <li>What are the group&apos;s biggest challenges for the <em>next</em> five years?</li>
            </ul>
          </TechniqueBox>
        </section>

        <section id="technique-analysis">
          <h2>2. The &quot;Retrograde Analysis&quot; Technique</h2>
          <p>A vision is inspiring, but it is not a plan. Retrograde analysis is the technique of working backward from a future success to map the critical path that leads to it. If the letter is the &quot;destination,&quot; this analysis is the &quot;map.&quot; Instead of asking &quot;What do we do next?&quot;, ask, &quot;For our future vision to be true, what must have already happened the year before?&quot;</p>
          
          <VideoPlayer />

          <TechniqueBox title="The Process">
            <p>Take the key accomplishments from your letter and place them at the end of a five-year timeline. Then move backward year by year, asking what milestones, decisions, and resources were necessary precursors for the subsequent year&apos;s success.</p>
          </TechniqueBox>
        </section>

        <section id="the-plan">
          <h2>Unrival — Rigorous Retrograde Analysis (2027 → early Q3-2025)</h2>
          <RetrogradeAnalysis />
        </section>

      </div>
    </>
  );
}