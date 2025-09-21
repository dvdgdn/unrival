"use client";

// src/components/InquiryCTA.tsx
export default function InquiryCTA() {
  const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSe5r-goodLmHBZ23Wyr9ZXHjOsVn-I47Tzeii_AJEQke8xZqQ/viewform?usp=header&utm_source=unrival_site&utm_medium=hero_btn&utm_campaign=inquiry_q3_2025';
    const ledgerURL = 'https://docs.google.com/spreadsheets/d/1aFlHIRurJk4fZTzZjT_JB9SYm9Iqy0sg-7j8FWTB96Q/edit?usp=sharing';
  return (
    <section id="inquiry" style={{margin:'24px 0', padding:'16px', border:'1px solid #D0D8E2', borderRadius:8}}>
      <h1>Join the Inquiry Ledger (Q3 2025)</h1>
      <p style={{margin:'8px 0 12px'}}>Minimal roster for thinkers exploring Public Promises. We publish <strong>Name</strong>, <strong>Location</strong>, <strong>Promise</strong>, <strong>Help needs/offers</strong>, <strong>Due date</strong>. <em>Email & evidence stay private.</em></p>
      <div style={{ textAlign: 'center' }}>
        <a href={formURL} target="_blank" rel="noopener noreferrer" className="btn-secondary" onClick={()=>window.gtag?.('event','inquiry_cta_click',{placement:'hero'})}>Add your entry (2 min)</a>
      </div>

      <div style={{ textAlign: 'center' }}>
        <a href={ledgerURL} target="_blank" rel="noopener noreferrer" className="btn-secondary" onClick={()=>window.gtag?.('event','inquiry_cta_click',{placement:'hero'})}>View entries </a>
      </div>      
      <style jsx>{`
        .btn-primary{display:inline-block;padding:10px 14px;background:#1F6FEB;color:#fff;border-radius:8px;font-weight:700;text-decoration:none}
      `}</style>
    </section>
  );
}