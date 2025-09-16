const IcebergIllustration = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 500" className="iceberg-image" role="img" aria-labelledby="icebergTitle icebergDesc">
      <title id="icebergTitle">Iceberg Model of Consciousness</title>
      <desc id="icebergDesc">An illustration of an iceberg. The small tip above the water is labeled &apos;CONSCIOUS ~12%&apos;. The large, submerged mass below the water is labeled &apos;UNCONSCIOUS ~88%&apos;.</desc>
      
      <defs>
        <linearGradient id="icebergGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: '#FFFFFF', stopOpacity: 1}} />
          <stop offset="20%" style={{stopColor: '#F0F8FF', stopOpacity: 1}} />
          <stop offset="21%" style={{stopColor: '#D6EAF8', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#B0C4DE', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      
      <rect x="0" y="100" width="450" height="400" fill="#8A9AAD" fillOpacity="0.6"/>
      
      <path d="M 150 100 L 225 30 L 300 100 L 400 350 L 300 480 L 150 450 L 50 380 Z" fill="url(#icebergGradient)" stroke="#ADC8D9" strokeWidth="1"/>
            
      <path d="M0 101 H450" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8"/>
      
      <g fontFamily="var(--font-lato), sans-serif" textAnchor="middle" fill="#3D4043">
        <text x="225" y="65" fontSize="18" fontWeight="700">CONSCIOUS</text>
        <text x="225" y="85" fontSize="16" fill="#5c5f62">~12%</text>

        <text x="225" y="280" fontSize="22" fontWeight="700" fill="#FFFFFF">UNCONSCIOUS</text>
        <text x="225" y="305" fontSize="20" fill="#FFFFFF" fillOpacity="0.9">~88%</text>
      </g>
    </svg>
  );
};

export default IcebergIllustration;