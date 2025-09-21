import React from 'react';

const PromiseLifecycle = () => {
  return (
    <div className="promise-lifecycle-container" style={{ textAlign: 'center' }}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 900 220" 
        role="img" 
        aria-labelledby="promiseTitle promiseDesc"
      >
        <title id="promiseTitle">The Lifecycle of a Public Promise</title>
        <desc id="promiseDesc">
          A flowchart showing the five stages of a promise. It begins with Intention, moves to Declared, then Evidence Linked, then Assessed. The final stage is a fork, showing two possible outcomes: a green box for 'Kept' or a gray box for 'Not Kept'.
        </desc>
        
        <defs>
          <style>
            {`
              .stage-box {
                stroke: #B0C4DE;
                stroke-width: 1.5;
                fill: #F0F8FF;
              }
              .stage-title {
                font-family: var(--font-lato), sans-serif;
                font-size: 16px;
                font-weight: 700;
                fill: #2E343B;
                text-anchor: middle;
              }
              .stage-hint {
                font-family: var(--font-lato), sans-serif;
                font-size: 12px;
                fill: #6A737D;
                text-anchor: middle;
              }
              .icon {
                fill: #6A737D;
              }
              .arrow-path {
                fill: none;
                stroke: #B0C4DE;
                stroke-width: 2;
                marker-end: url(#arrowhead);
              }
              .status-kept {
                fill: #E6F4EA;
                stroke: #58A66D;
              }
              .status-not-kept {
                fill: #F6F8FA;
                stroke: #ADB5BD;
              }
            `}
          </style>
          <marker 
            id="arrowhead" 
            viewBox="0 0 10 10" 
            refX="8" 
            refY="5" 
            markerWidth="6" 
            markerHeight="6" 
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#B0C4DE" />
          </marker>
        </defs>

        {/* --- STAGES --- */}
        
        {/* Stage 1: Intention */}
        <g id="stage-intention" transform="translate(80, 110)">
          <rect className="stage-box" x="-60" y="-40" width="120" height="80" rx="8" />
          {/* Icon: Thought Bubble */}
          <path className="icon" d="M -15 -25 C -30 -25 -35 -15 -35 0 C -35 10 -25 15 0 15 C 25 15 35 10 35 0 C 35 -15 25 -25 -15 -25 Z M -10 20 L -15 28 L -25 25 Z" transform="scale(0.5) translate(0, -25)" />
          <text className="stage-title" y="15">Intention</text>
        </g>
        
        {/* Stage 2: Declared */}
        <g id="stage-declared" transform="translate(260, 110)">
          <rect className="stage-box" x="-60" y="-40" width="120" height="80" rx="8" />
          {/* Icon: Scroll */}
          <path className="icon" d="M -20 -15 Q -20 -25 0 -25 L 20 -25 Q 20 -15 0 -15 L 0 25 Q 20 25 20 15 L 20 -25 M 0 -15 L 0 25 M -20 -15 Q -20 -5 0 -5" fill="none" stroke="#6A737D" stroke-width="3" transform="scale(0.7) translate(0, -25)" />
          <text className="stage-title" y="15">Declared</text>
          <text className="stage-hint" y="32">(scoped)</text>
        </g>

        {/* Stage 3: Evidence Linked */}
        <g id="stage-evidence" transform="translate(440, 110)">
          <rect className="stage-box" x="-60" y="-40" width="120" height="80" rx="8" />
          {/* Icon: Chain Links */}
          <g transform="scale(0.5) translate(0, -45)">
            <circle className="icon" cx="-12" cy="0" r="10" stroke="#6A737D" stroke-width="4" fill="none" />
            <circle className="icon" cx="12" cy="0" r="10" stroke="#6A737D" stroke-width="4" fill="none" />
          </g>
          <text className="stage-title" y="15">Evidence Linked</text>
        </g>

        {/* Stage 4: Assessed */}
        <g id="stage-assessed" transform="translate(620, 110)">
          <rect className="stage-box" x="-60" y="-40" width="120" height="80" rx="8" />
          {/* Icon: Magnifying Glass */}
          <g transform="scale(0.7) translate(0, -28)">
            <circle cx="-5" cy="-5" r="12" stroke="#6A737D" stroke-width="3" fill="none" />
            <line x1="5" y1="5" x2="18" y2="18" stroke="#6A737D" stroke-width="4" />
          </g>
          <text className="stage-title" y="15">Assessed</text>
          <text className="stage-hint" y="32">(any observer)</text>
        </g>

        {/* --- CONNECTORS --- */}
        <path className="arrow-path" d="M 140 110 H 200" />
        <path className="arrow-path" d="M 320 110 H 380" />
        <path className="arrow-path" d="M 500 110 H 560" />
        <path className="arrow-path" d="M 680 110 H 730" />

        {/* --- OUTCOMES --- */}
        <g id="stage-outcomes" transform="translate(810, 110)">
          {/* Path to Kept */}
          <path d="M -80 0 C -40 0, -40 -40, 0 -40" className="arrow-path" />
          <g transform="translate(0, -40)">
            <rect className="stage-box status-kept" x="-65" y="-25" width="130" height="50" rx="25" />
            {/* Icon: Checkmark */}
            <path d="M -15 0 L -5 10 L 15 -10" stroke="#28A745" stroke-width="4" fill="none" transform="translate(-40,0)" />
            <text className="stage-title" x="10" y="5">Kept</text>
          </g>
          
          {/* Path to Not Kept */}
          <path d="M -80 0 C -40 0, -40 40, 0 40" className="arrow-path" />
          <g transform="translate(0, 40)">
            <rect className="stage-box status-not-kept" x="-65" y="-25" width="130" height="50" rx="25" />
            {/* Icon: X Mark */}
            <g transform="translate(-40,0) scale(0.8)">
              <line x1="-10" y1="-10" x2="10" y2="10" stroke="#6A737D" stroke-width="3" />
              <line x1="-10" y1="10" x2="10" y2="-10" stroke="#6A737D" stroke-width="3" />
            </g>
            <text className="stage-title" x="10" y="5">Not Kept</text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default PromiseLifecycle;