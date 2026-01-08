import React, { useEffect, useState, useRef } from 'react';
import AnimatedGlobe from './AnimatedGlobe';

const Hero = ({ loaded }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '140px 50px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Sophisticated background grid */}
      <div className="grid-pattern" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        opacity: 0.8,
      }} />

      {/* Floating decorative shapes */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '5%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%)',
        animation: 'floatSlow 15s ease-in-out infinite',
        pointerEvents: 'none',
        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '15%',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,0,0,0.015) 0%, transparent 70%)',
        animation: 'floatSlow 12s ease-in-out infinite reverse',
        pointerEvents: 'none',
        transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
      }} />

      {/* Decorative lines */}
      <svg style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: 200,
        height: 200,
        opacity: 0.05,
        pointerEvents: 'none',
        transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
      }}>
        <circle cx="100" cy="100" r="80" fill="none" stroke="#000" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#000" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="#000" strokeWidth="0.5" />
      </svg>
      
      {/* Globe - Interactive */}
      <div 
        className="globe-container" 
        style={{ 
          opacity: loaded ? 1 : 0, 
          transition: 'opacity 1.5s ease 0.8s',
          position: 'absolute',
          right: 0,
          top: '50%',
          marginTop: '-290px',
          zIndex: 2,
        }}
      >
        <AnimatedGlobe />
      </div>
      
      <div style={{ maxWidth: 750, position: 'relative', zIndex: 1 }}>
        {/* Badge/Label */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 16,
          marginBottom: 40,
          padding: '10px 20px',
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: 50,
          border: '1px solid rgba(0,0,0,0.05)',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
        }}>
          <span style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#10b981',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          <span style={{
            fontSize: 12,
            letterSpacing: 1.5,
            textTransform: 'uppercase',
            fontFamily: "'Space Grotesk', monospace",
            fontWeight: 500,
            color: '#444',
          }}>
            Strategic Consulting · Austin, TX
          </span>
        </div>
        
        {/* Main headline with sophisticated typography */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(48px, 9vw, 100px)',
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: -3,
          marginBottom: 40,
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(60px)',
          transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
        }}>
          <span style={{ display: 'block' }}>Design That Builds</span>
          <span style={{ display: 'block' }}>
            <em style={{ 
              fontStyle: 'italic', 
              fontWeight: 300,
              background: 'linear-gradient(135deg, #000 0%, #555 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Brands,</em> Transforms
          </span>
          <span style={{ display: 'block' }}>
            Businesses
            <span style={{
              display: 'inline-block',
              width: 16,
              height: 16,
              marginLeft: 12,
              borderRadius: '50%',
              background: '#000',
              verticalAlign: 'middle',
              animation: 'pulse 3s ease-in-out infinite',
            }} />
          </span>
        </h1>
        
        {/* Subheadline */}
        <p style={{
          fontSize: 18,
          lineHeight: 1.85,
          color: '#555',
          fontWeight: 300,
          maxWidth: 520,
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s',
        }}>
          Strategic consulting firm specializing in digital transformation,
          data infrastructure, and business intelligence solutions for 
          <strong style={{ fontWeight: 500 }}> forward-thinking enterprises</strong>.
        </p>
        
        {/* CTA Buttons */}
        <div style={{
          marginTop: 50,
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          flexWrap: 'wrap',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.1s',
        }}>
          <a 
            href="mailto:sulayman.bowles@gmail.com" 
            className="cta-button" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              padding: '20px 44px',
              fontSize: 13,
              letterSpacing: 0.5,
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 500,
              textDecoration: 'none',
              borderRadius: 4,
            }}
          >
            <span>Schedule a Consultation</span>
            <span className="btn-arrow" style={{ fontSize: 18 }}>↗</span>
          </a>
          
          <a 
            href="#work" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '20px 30px',
              fontSize: 13,
              letterSpacing: 0.5,
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400,
              textDecoration: 'none',
              color: '#666',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#000'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
          >
            <span>View Work</span>
            <span style={{ transition: 'transform 0.4s ease' }}>→</span>
          </a>
        </div>

        {/* Quick stats */}
        <div style={{
          marginTop: 70,
          display: 'flex',
          gap: 40,
          flexWrap: 'wrap',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.3s',
        }}>
          {[
            { value: '25+', label: 'Projects' },
            { value: '15+', label: 'Clients' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat, i) => (
            <div key={i} style={{ 
              textAlign: 'left',
              paddingRight: i < 2 ? 40 : 0,
              borderRight: i < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none',
            }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 28,
                fontWeight: 400,
                letterSpacing: -1,
                display: 'block',
                lineHeight: 1,
                marginBottom: 4,
              }}>{stat.value}</span>
              <span style={{
                fontSize: 10,
                color: '#888',
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                fontFamily: "'Space Grotesk', monospace",
              }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom scroll indicator - centered */}
      <div style={{
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        opacity: loaded ? 1 : 0,
        transition: 'all 1s ease 1.4s',
      }}>
        <div className="scroll-indicator" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: 12,
        }}>
          <span style={{
            fontSize: 10,
            letterSpacing: 3,
            textTransform: 'uppercase',
            fontFamily: "'Space Grotesk', monospace",
            color: '#888',
            fontWeight: 500,
          }}>Scroll</span>
          <div style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }} />
        </div>
      </div>
      
      {/* Right side info */}
      <div style={{
        position: 'absolute',
        bottom: 30,
        right: 50,
        textAlign: 'right',
        zIndex: 10,
        opacity: loaded ? 1 : 0,
        transition: 'all 1s ease 1.2s',
      }}>
        <span style={{
          display: 'block',
          fontSize: 9,
          letterSpacing: 2.5,
          color: '#999',
          textTransform: 'uppercase',
          fontFamily: "'Space Grotesk', monospace",
          marginBottom: 3,
        }}>Est. 2026</span>
        <span style={{
          fontSize: 11,
          letterSpacing: 0.5,
          color: '#777',
          fontFamily: "'Manrope', sans-serif",
        }}>Austin, TX</span>
      </div>

      {/* Decorative corner elements */}
      <div style={{
        position: 'absolute',
        top: 120,
        right: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        opacity: loaded ? 0.3 : 0,
        transition: 'all 1s ease 1.5s',
      }}>
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{
            width: 30 - i * 8,
            height: 1,
            background: '#000',
          }} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
