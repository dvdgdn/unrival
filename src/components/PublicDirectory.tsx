// src/components/PublicDirectory.tsx
export default function PublicDirectory() {
  const ledger =
    'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pubhtml?gid=PUBLIC_LEDGER_GID&single=true&widget=true&headers=false';
  return (
    <section id="directory" style={{ margin: '12px 0' }}>
      <h2>Live Inquiry Ledger</h2>
      <div style={{ border: '1px solid #D0D8E2', borderRadius: 8, overflow: 'hidden' }}>
        <iframe src={ledger} width="100%" height="520" style={{ border: 0 }} />
      </div>
    </section>
  );
}