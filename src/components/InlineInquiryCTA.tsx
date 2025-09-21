"use client";

// src/components/InlineInquiryCTA.tsx
export default function InlineInquiryCTA() {
  const url =
    'https://docs.google.com/forms/d/e/1FAIpQLSe5r-goodLmHBZ23Wyr9ZXHjOsVn-I47Tzeii_AJEQke8xZqQ/viewform?usp=header&utm_source=unrival_site&utm_medium=inline&utm_campaign=inquiry_q3_2025';
  return (
    <p style={{ marginTop: 12 }}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontWeight: 700, textDecoration: 'underline' }}
        onClick={() => window.gtag?.('event', 'inquiry_cta_click', { placement: 'inline' })}
      >
        Add your entry →
      </a>
    </p>
  );
}