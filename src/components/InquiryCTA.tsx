"use client";

// repurpose as a Futures CTA
export default function InquiryCTA() {
  const letterForm = 'https://docs.google.com/forms/d/e/1FAIpQLSf05hYw4J6bXlnZ2BDVNP7ReGnujzoH_ADLWlUPc8mxLg_--w/viewform?utm_source=unrival_site&utm_medium=hero_btn&utm_campaign=letters_form';
  const promiseForm = 'https://docs.google.com/forms/d/e/1FAIpQLSfyoP6yVdpITWUnsFnjq2uZZqQM-Va6QozZMGEMEbxo0VKscw/viewform?utm_source=unrival_site&utm_medium=hero_btn&utm_campaign=promises_form';

  // (Optional) swap these for pubhtml URLs once published:
  const lettersSheet = 'https://docs.google.com/spreadsheets/d/1d9CiBcqY3FN5RNtrC3HXpwMSpvLqFPCvNfmzYyYWmzY/edit?usp=sharing';
  const promisesSheet = 'https://docs.google.com/spreadsheets/d/1EHHLxAUAbzzGe53gUVSNxvjCxqOynM8Hp1QnBEa3QKs/edit?usp=sharing';

  return (
    <section id="inquiry" style={{margin:'24px 0', padding:'16px', border:'1px solid #D0D8E2', borderRadius:8}}>
      <h1>Converging Futures (Q3 2025)</h1>
      <p style={{margin:'8px 0 12px'}}>
        Share a <strong>Letter from the Future</strong>. Make a <strong>Promise</strong> toward a specific letter.
        Watch themes merge into a shared vision.
      </p>
      <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
        <a href={letterForm} target="_blank" rel="noopener noreferrer" className="btn-secondary"
           onClick={()=>window.gtag?.('event','letters_cta_click',{placement:'hero'})}>Add a Letter</a>
        <a href={promiseForm} target="_blank" rel="noopener noreferrer" className="btn-secondary"
           onClick={()=>window.gtag?.('event','promises_cta_click',{placement:'hero'})}>Make a Promise</a>
        <a href={lettersSheet} target="_blank" rel="noopener noreferrer" className="btn-tertiary">View Letters</a>
        <a href={promisesSheet} target="_blank" rel="noopener noreferrer" className="btn-tertiary">View Promises</a>
      </div>
<p style={{
  fontSize: '14px', 
  fontStyle: 'italic', 
  marginTop: '12px',
  textAlign: 'center',
  color: '#6B7280'
}}>
  Q3 2025 cohort forming now • First 50 participants get early access to coaching protocol
</p>
      <style jsx>{`
        .btn-secondary{display:inline-block;padding:10px 14px;background:#1F6FEB;color:#fff;border-radius:8px;font-weight:700;text-decoration:none}
        .btn-tertiary{display:inline-block;padding:10px 14px;border:1px solid #D0D8E2;color:#0F172A;border-radius:8px;font-weight:700;text-decoration:none;background:#F6F8FB}
      `}</style>
    </section>
  );
}
