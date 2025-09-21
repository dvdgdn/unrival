"use client";

// src/components/InlineInquiryCTA.tsx
export default function InlineInquiryCTA() {
  const url =
    'https://docs.google.com/forms/d/e/1FAIpQLSf05hYw4J6bXlnZ2BDVNP7ReGnujzoH_ADLWlUPc8mxLg_--w/viewform?utm_source=unrival_site&utm_medium=inline&utm_campaign=letters_form';
  return (
    <p style={{ marginTop: 12 }}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontWeight: 700, textDecoration: 'underline' }}
        onClick={() => window.gtag?.('event', 'letters_cta_click', { placement: 'inline' })}
      >
        Add your letter →
      </a>
    </p>
  );
}