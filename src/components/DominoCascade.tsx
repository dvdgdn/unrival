import React from 'react';

const DominoCascade = () => {
  const dominoWidth = 15;
  const dominoHeight = 40;
  const groundY = 190;             // top of the ground
  const topY = groundY - dominoHeight;

  // Angles from upright to flat (clockwise = negative)
  const angles = [0, 0, -12, -28, -45, -62, -78, -90, -90, -90];

  // Compute base (pivot) positions at the bottom-right corner of each domino.
  // For a domino at angle θ, the "reach" forward is roughly H * sin|θ|.
  const startPivotX = 85; // tune this to position the chain
  const pivots = [startPivotX];

  for (let i = 0; i < angles.length - 1; i++) {
    const theta = Math.abs(angles[i]) * Math.PI / 180;
    // Spacing heuristic: a bit of width + the horizontal reach of the tilted domino
    // Flat (-90°) uses full height so fallen pieces lay edge-to-edge.
    const step =
      Math.abs(angles[i]) >= 89
        ? dominoHeight
        : Math.max(
            dominoWidth * 0.7,
            dominoWidth * 0.4 + dominoHeight * Math.sin(theta)
          );
    pivots.push(pivots[i] + step);
  }

  const dominoes = angles.map((angle, i) => ({
    angle,
    pivotX: pivots[i],
    pivotY: groundY,
    x: pivots[i] - dominoWidth, // left x when upright (since pivot is bottom-right)
    y: topY
  }));

  return (
    <div className="domino-cascade-container" style={{ textAlign: 'center', padding: '20px 0' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 360 250"
        role="img"
        aria-labelledby="dominoCascadeTitle dominoCascadeDesc"
      >
        <title id="dominoCascadeTitle">Dominoes Toppling Elegantly</title>
        <desc id="dominoCascadeDesc">
          Identical dominoes topple from left to right with realistic pivots and spacing.
        </desc>

        <defs>
          <style>
            {`
              .domino {
                fill: #FFFFFF;
                stroke: #B0C4DE;
                stroke-width: 1.5;
              }
              .divider {
                stroke: #B0C4DE;
                stroke-width: 1;
                stroke-linecap: round;
                opacity: 0.8;
              }
              .pip {
                fill: #B0C4DE;
                opacity: 0.9;
              }
              .ground-plane {
                fill: #F5F7FA;
                stroke: #D0D8E2;
                stroke-width: 1;
              }
            `}
          </style>
        </defs>

        {/* Ground */}
        <rect x="0" y={groundY} width="360" height="60" className="ground-plane" />

        {dominoes.map((d, i) => (
          <g key={i} transform={`rotate(${d.angle} ${d.pivotX} ${d.pivotY})`}>
            {/* subtle shadow under upright-ish pieces */}
            {Math.abs(d.angle) < 5 && (
              <rect
                x={d.x + 2}
                y={d.y + dominoHeight - 2}
                width={dominoWidth}
                height={2}
                rx={1}
                ry={1}
                fill="rgba(0,0,0,0.12)"
              />
            )}

            {/* body */}
            <rect
              x={d.x}
              y={d.y}
              width={dominoWidth}
              height={dominoHeight}
              rx={3}
              ry={3}
              className="domino"
            />

            {/* center divider */}
            <line
              x1={d.x + dominoWidth / 2}
              y1={d.y + 3}
              x2={d.x + dominoWidth / 2}
              y2={d.y + dominoHeight - 3}
              className="divider"
            />

            {/* a couple of pips for readability */}
            <circle className="pip" cx={d.x + dominoWidth * 0.3} cy={d.y + dominoHeight * 0.3} r="1.4" />
            <circle className="pip" cx={d.x + dominoWidth * 0.7} cy={d.y + dominoHeight * 0.7} r="1.4" />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default DominoCascade;
