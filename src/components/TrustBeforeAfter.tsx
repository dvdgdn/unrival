import React from 'react';

const TrustBeforeAfter = () => {
  return (
    <div style={{
      display: 'flex',
      gap: '2rem',
      margin: '2rem 0',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* BEFORE */}
      <div style={{
        textAlign: 'center',
        padding: '1.5rem',
        border: '2px solid #EF4444',
        borderRadius: '8px',
        background: '#FEF2F2',
        minWidth: '200px'
      }}>
        <h4 style={{margin: '0 0 0.5rem', color: '#DC2626'}}>BEFORE</h4>
        <div style={{fontSize: '2rem', margin: '0.5rem 0'}}>🤷</div>
        <p style={{margin: '0', fontSize: '14px'}}>Trust = ?</p>
        <p style={{margin: '0.5rem 0 0', fontSize: '12px', color: '#6B7280'}}>
          No verifiable signals
        </p>
      </div>

      {/* Arrow */}
      <div style={{fontSize: '2rem', color: '#6B7280'}}>→</div>

      {/* AFTER */}
      <div style={{
        textAlign: 'center',
        padding: '1.5rem',
        border: '2px solid #10B981',
        borderRadius: '8px',
        background: '#F0FDF4',
        minWidth: '200px'
      }}>
        <h4 style={{margin: '0 0 0.5rem', color: '#047857'}}>AFTER</h4>
        <div style={{fontSize: '2rem', margin: '0.5rem 0'}}>✅</div>
        <p style={{margin: '0', fontSize: '14px', fontWeight: 'bold'}}>
          cRI: 94% | TR: 89%
        </p>
        <p style={{margin: '0.5rem 0 0', fontSize: '12px', color: '#6B7280'}}>
          Verified timestamps<br/>
          Objective evidence
        </p>
      </div>
    </div>
  );
};

export default TrustBeforeAfter;
