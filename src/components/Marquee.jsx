import React from 'react';

const Marquee = () => {
  const items = [
    'Strategy',
    'Infrastructure', 
    'Analytics',
    'Development',
    'Consulting',
    'Transformation',
    'Innovation',
    'Intelligence',
  ];
  
  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid #e5e5e5',
      borderBottom: '1px solid #e5e5e5',
      background: '#fff',
      position: 'relative',
    }}>
      {/* Gradient overlays for smooth edges */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 100,
        background: 'linear-gradient(90deg, #fff, transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: 100,
        background: 'linear-gradient(270deg, #fff, transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      {/* First marquee row */}
      <div style={{ padding: '25px 0' }}>
        <div className="marquee">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 60, 
                paddingRight: 60, 
                whiteSpace: 'nowrap' 
              }}
            >
              {items.map((item, j) => (
                <React.Fragment key={j}>
                  <span style={{ 
                    fontFamily: "'Cormorant Garamond', serif", 
                    fontSize: 26, 
                    fontWeight: 400, 
                    letterSpacing: 2,
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => e.target.style.fontStyle = 'italic'}
                  onMouseLeave={(e) => e.target.style.fontStyle = 'normal'}
                  >
                    {item}
                  </span>
                  <span style={{ 
                    fontSize: 6, 
                    color: '#ccc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="8" height="8" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" fill="none" stroke="#ccc" strokeWidth="0.5"/>
                      <circle cx="4" cy="4" r="1" fill="#ccc"/>
                    </svg>
                  </span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
