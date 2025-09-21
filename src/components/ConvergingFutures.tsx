// src/components/ConvergingFutures.tsx
import TechniqueBox from './TechniqueBox';

const LETTER_FORM =
  'https://docs.google.com/forms/d/e/1FAIpQLSf05hYw4J6bXlnZ2BDVNP7ReGnujzoH_ADLWlUPc8mxLg_--w/viewform?utm_source=unrival_site&utm_medium=button&utm_campaign=letters_form';
const LETTERS_SHEET_VIEW =
  'https://docs.google.com/spreadsheets/d/1d9CiBcqY3FN5RNtrC3HXpwMSpvLqFPCvNfmzYyYWmzY/edit?usp=sharing';

const PROMISE_FORM =
  'https://docs.google.com/forms/d/e/1FAIpQLSfyoP6yVdpITWUnsFnjq2uZZqQM-Va6QozZMGEMEbxo0VKscw/viewform?utm_source=unrival_site&utm_medium=button&utm_campaign=promises_form';
const PROMISES_SHEET_VIEW =
  'https://docs.google.com/spreadsheets/d/1EHHLxAUAbzzGe53gUVSNxvjCxqOynM8Hp1QnBEa3QKs/edit?usp=sharing';

/**
 * Server Component compatible (no styled-jsx).
 * If you later want custom styling, use globals.css or Tailwind classes.
 */
export default function ConvergingFutures() {
  return (
    <section id="converging-futures">
      <h2>The Converging Futures Technique</h2>
      <p>
        <em><a href="https://www.sessionlab.com/methods/letter-from-the-future">Letter from the Future</a></em> helps each of us articulate a vivid, desirable end-state.
        <strong> Converging Futures</strong> takes the next step: it lets many letters live side-by-side,
        then merges themes and commitments until a viable shared vision emerges—made real through
        public promises toward specific letters.
      </p>

      <TechniqueBox title="How it works (simple 4-step ritual)">
        <ol>
          <li>
            <strong>Write &amp; Share a Letter.</strong> Add your “Letter from the Future” (title + link).
            <div style={{ display: 'flex', gap: '10px', margin: '8px 0 6px', flexWrap: 'wrap' }}>
              <a
                href={LETTER_FORM}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 12px',
                  background: '#1F6FEB',
                  color: '#fff',
                  borderRadius: 8,
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Add a Letter
              </a>
              <a
                href={LETTERS_SHEET_VIEW}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 12px',
                  background: '#F6F8FB',
                  color: '#0F172A',
                  border: '1px solid #D0D8E2',
                  borderRadius: 8,
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                View Letters
              </a>
            </div>
          </li>
          <li>
            <strong>Browse &amp; Notice Motifs.</strong> Scan others’ letters. Note overlaps in outcomes,
            values, and “conditions of satisfaction.”
          </li>
          <li>
            <strong>Make a Promise toward a Specific Letter.</strong> Choose one letter you want to
            advance and make a TOMT promise referencing that letter (include the letter’s title or URL).
            <div style={{ display: 'flex', gap: '10px', margin: '8px 0 6px', flexWrap: 'wrap' }}>
              <a
                href={PROMISE_FORM}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 12px',
                  background: '#1F6FEB',
                  color: '#fff',
                  borderRadius: 8,
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Make a Promise
              </a>
              <a
                href={PROMISES_SHEET_VIEW}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 12px',
                  background: '#F6F8FB',
                  color: '#0F172A',
                  border: '1px solid #D0D8E2',
                  borderRadius: 8,
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                View Promises
              </a>
            </div>
          </li>
          <li>
            <strong>Converge.</strong> As themes and promises cluster, we synthesize a shared vision—keeping
            denominators visible (kept and broken) and folding learning back into the next round of letters
            and promises.
          </li>
        </ol>
      </TechniqueBox>

    </section>
  );
}
