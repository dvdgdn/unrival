import React from 'react';

const FourFrontsDiagram = () => {
  return (
    // The SVG is designed on a 400x400 grid for easy quadrant mapping.
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 400" 
      className="four-fronts-image" 
      role="img" 
      aria-labelledby="fourFrontsTitle fourFrontsDesc"
    >
      <title id="fourFrontsTitle">Four Quadrants of Change Model</title>
      <desc id="fourFrontsDesc">
        A diagram showing four quadrants. The top-left is Mindset (Inner-Individual). The top-right is Culture (Inner-Collective). The bottom-left is Behavior (Outer-Individual). The bottom-right is Systems (Outer-Collective).
      </desc>

      <defs>
        {/* Using a style block is efficient for defining shared text styles. */}
        <style>
          {`
            .axis-line {
              stroke: #B0B0B0;
              stroke-width: 1;
              stroke-dasharray: 4 2;
            }
            .axis-label {
              font-family: var(--font-lato), sans-serif;
              font-size: 14px;
              font-weight: 700;
              fill: #6A737D;
              text-anchor: middle;
              text-transform: uppercase;
              letter-spacing: 0.05em;
            }
            .quadrant-title {
              font-family: var(--font-lato), sans-serif;
              font-size: 24px;
              font-weight: 700;
              fill: #2E343B;
              text-anchor: middle;
            }
            .quadrant-subtitle {
              font-family: var(--font-lato), sans-serif;
              font-size: 14px;
              fill: #5c5f62;
              text-anchor: middle;
            }
          `}
        </style>
      </defs>

      {/* --- AXES and LABELS --- */}
      <g id="axes">
        {/* Vertical and Horizontal dividing lines */}
        <path d="M 200 20 L 200 380" className="axis-line" />
        <path d="M 20 200 L 380 200" className="axis-line" />
        
        {/* Axis Labels */}
        <text x="100" y="20" className="axis-label">Individual</text>
        <text x="300" y="20" className="axis-label">Collective</text>
        <text x="20" y="100" className="axis-label" transform="rotate(-90 20 100)">Inner</text>
        <text x="20" y="300" className="axis-label" transform="rotate(-90 20 300)">Outer</text>
      </g>

      {/* --- QUADRANT CONTENT --- */}
      {/* Grouping each quadrant's text makes positioning easier. */}

      {/* Top-Left: Mindset (Inner-Individual) */}
      <g id="quadrant-mindset">
        <text x="100" y="95" className="quadrant-title">Mindset</text>
        <text x="100" y="120" className="quadrant-subtitle">(Inner-Individual)</text>
      </g>

      {/* Top-Right: Culture (Inner-Collective) */}
      <g id="quadrant-culture">
        <text x="300" y="95" className="quadrant-title">Culture</text>
        <text x="300" y="120" className="quadrant-subtitle">(Inner-Collective)</text>
      </g>

      {/* Bottom-Left: Behavior (Outer-Individual) */}
      <g id="quadrant-behavior">
        <text x="100" y="295" className="quadrant-title">Behavior</text>
        <text x="100" y="320" className="quadrant-subtitle">(Outer-Individual)</text>
      </g>

      {/* Bottom-Right: Systems (Outer-Collective) */}
      <g id="quadrant-systems">
        <text x="300" y="295" className="quadrant-title">Systems</text>
        <text x="300" y="320" className="quadrant-subtitle">(Outer-Collective)</text>
      </g>
    </svg>
  );
};

export default FourFrontsDiagram;