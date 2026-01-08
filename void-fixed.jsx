import React, { useState, useEffect, useRef } from 'react';

// CSS-based Globe Animation (more reliable than Three.js in artifacts)
const AnimatedGlobe = () => {
  return (
    <div style={{
      position: 'absolute',
      right: '-100px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '600px',
      height: '600px',
      pointerEvents: 'none',
    }}>
      <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }}>
        <defs>
          <clipPath id="globeClip">
            <circle cx="200" cy="200" r="150" />
          </clipPath>
        </defs>
        
        {/* Outer glow */}
        <circle cx="200" cy="200" r="155" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="10" />
        
        {/* Main globe outline */}
        <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
        
        {/* Latitude lines */}
        <g clipPath="url(#globeClip)" style={{ opacity: 0.12 }}>
          {[-60, -30, 0, 30, 60].map((lat, i) => (
            <ellipse 
              key={i}
              cx="200" 
              cy={200 + lat * 1.5} 
              rx={150 * Math.cos(lat * Math.PI / 180)} 
              ry={20}
              fill="none" 
              stroke="#000" 
              strokeWidth="0.5"
            />
          ))}
        </g>
        
        {/* Longitude lines with animation */}
        <g clipPath="url(#globeClip)">
          {[0, 30, 60, 90, 120, 150].map((lon, i) => (
            <ellipse 
              key={i}
              cx="200" 
              cy="200" 
              rx={Math.abs(Math.sin(lon * Math.PI / 180)) * 150} 
              ry="150"
              fill="none" 
              stroke="rgba(0,0,0,0.1)" 
              strokeWidth="0.5"
              style={{
                animation: `spin 60s linear infinite`,
                transformOrigin: '200px 200px',
              }}
            />
          ))}
        </g>
        
        {/* Equator - stronger */}
        <ellipse cx="200" cy="200" rx="150" ry="30" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
        
        {/* City dots */}
        {[
          { x: 280, y: 120 }, // NYC area
          { x: 220, y: 110 }, // London area
          { x: 320, y: 160 }, // Tokyo area
          { x: 250, y: 180 }, // Austin area
          { x: 180, y: 240 }, // Sydney area
          { x: 140, y: 140 }, // Paris area
        ].map((city, i) => (
          <g key={i}>
            <circle 
              cx={city.x} 
              cy={city.y} 
              r={i < 3 ? 5 : 3} 
              fill="rgba(0,0,0,0.4)"
            />
            {i < 3 && (
              <circle 
                cx={city.x} 
                cy={city.y} 
                r="10" 
                fill="none" 
                stroke="rgba(0,0,0,0.15)" 
                strokeWidth="1"
                style={{
                  animation: `pulse 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            )}
          </g>
        ))}
        
        {/* Orbital rings */}
        <ellipse 
          cx="200" cy="200" rx="180" ry="60" 
          fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1"
          transform="rotate(-20, 200, 200)"
        />
        <ellipse 
          cx="200" cy="200" rx="190" ry="70" 
          fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1"
          transform="rotate(15, 200, 200)"
        />
        <ellipse 
          cx="200" cy="200" rx="200" ry="50" 
          fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1"
          transform="rotate(-5, 200, 200)"
        />
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <circle 
            key={i}
            cx={200 + Math.cos(i * 30 * Math.PI / 180) * (170 + Math.random() * 40)}
            cy={200 + Math.sin(i * 30 * Math.PI / 180) * (170 + Math.random() * 40)}
            r="2"
            fill="rgba(0,0,0,0.15)"
            style={{
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// Service Icons
const StrategyIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="24" r="18" />
    <path d="M24 10 L24 24 L34 30" />
    <circle cx="24" cy="24" r="3" fill="currentColor" />
  </svg>
);

const InfrastructureIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="10" y="26" width="8" height="14" />
    <rect x="20" y="18" width="8" height="22" />
    <rect x="30" y="12" width="8" height="28" />
    <line x1="6" y1="40" x2="42" y2="40" />
  </svg>
);

const DevelopmentIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="16,14 8,24 16,34" />
    <polyline points="32,14 40,24 32,34" />
    <line x1="28" y1="12" x2="20" y2="36" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="24" r="16" />
    <path d="M24 8 L24 24 L36 28" />
    <path d="M24 24 L14 32" strokeDasharray="3 3" />
  </svg>
);

export default function VoidConsultingWebsite() {
  const [loaded, setLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    setTimeout(() => {
      const sections = document.querySelectorAll('[data-animate]');
      sections.forEach((section) => observer.observe(section));
    }, 100);
    
    return () => observer.disconnect();
  }, [loaded]);

  const projects = [
    { id: 1, name: 'TechFlow Manufacturing', category: 'Manufacturing Sector', tags: ['Strategy', 'Web Design', 'Consulting'], year: '2024', description: 'Website infrastructure redesign and digital transformation strategy' },
    { id: 2, name: 'Strategic Insights Group', category: 'Political Consulting', tags: ['Database Design', 'Strategy', 'Development'], year: '2024', description: 'Database architecture and data analytics infrastructure redesign' },
    { id: 3, name: 'Meridian Capital Advisors', category: 'Financial Services', tags: ['Finance', 'Database', 'Strategy'], year: '2024', description: 'Financial data systems architecture and reporting infrastructure' },
  ];

  const services = [
    { num: '01', title: 'Strategy', desc: 'Research, discovery, and strategic planning for sustainable business transformation.', Icon: StrategyIcon },
    { num: '02', title: 'Infrastructure', desc: 'Database architecture, systems design, and technical infrastructure solutions.', Icon: InfrastructureIcon },
    { num: '03', title: 'Development', desc: 'Custom software development and web platform engineering.', Icon: DevelopmentIcon },
    { num: '04', title: 'Analytics', desc: 'Data analytics, reporting systems, and business intelligence solutions.', Icon: AnalyticsIcon },
  ];

  const team = [
    { name: 'Sulayman Bowles', role: 'Founder & Managing Director', initials: 'SB' },
    { name: 'Arnav Goel', role: 'Lead Strategist', initials: 'AG' },
    { name: 'Aayush Baniya', role: 'Strategy & Development Lead', initials: 'AB' },
  ];

  return (
    <div style={{ background: '#fafafa', minHeight: '100vh', fontFamily: "'Manrope', sans-serif", color: '#000' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Manrope:wght@200;300;400;500;600&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: #000; color: #fff; }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .nav-link {
          position: relative;
          text-decoration: none;
          color: #000;
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: 13px;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          padding: 5px 0;
        }
        
        .nav-link:hover { opacity: 0.6; }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: #000;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s ease;
        }
        
        .nav-link:hover::after { transform: scaleX(1); transform-origin: left; }
        
        .project-item {
          cursor: pointer;
          transition: all 0.4s ease;
        }
        
        .project-item:hover { 
          background: #f5f5f5; 
          transform: translateX(8px); 
        }
        
        .project-item:hover .project-arrow { 
          opacity: 1; 
          transform: translateX(0); 
        }
        
        .project-item:hover .project-thumbnail { 
          transform: scale(1.03); 
          box-shadow: 0 15px 40px rgba(0,0,0,0.08); 
        }
        
        .service-card {
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        
        .service-card:hover { 
          background: #000 !important; 
          color: #fff; 
          transform: translateY(-8px); 
          box-shadow: 0 20px 40px rgba(0,0,0,0.15); 
        }
        
        .service-card:hover .service-num { color: rgba(255,255,255,0.3); }
        .service-card:hover .service-icon { color: rgba(255,255,255,0.5); }
        
        .cta-button {
          position: relative;
          overflow: hidden;
          background: transparent;
          border: 1px solid #000;
          color: #000;
          cursor: pointer;
          transition: all 0.4s ease;
        }
        
        .cta-button:hover { 
          background: #000; 
          color: #fff; 
        }
        
        .cta-button:hover .btn-arrow { 
          transform: translate(3px, -3px); 
        }
        
        .btn-arrow { 
          transition: transform 0.3s ease; 
        }
        
        .secondary-cta {
          background: #000;
          color: #fff;
          border: none;
          transition: all 0.3s ease;
        }
        
        .secondary-cta:hover { 
          background: #222; 
          transform: translateY(-3px); 
          box-shadow: 0 10px 30px rgba(0,0,0,0.2); 
        }
        
        .team-card { 
          transition: all 0.4s ease; 
        }
        
        .team-card:hover { 
          transform: translateY(-10px); 
        }
        
        .team-card:hover .team-avatar { 
          background: #000 !important; 
          border-color: #000 !important;
        }
        
        .team-card:hover .team-initials { 
          color: #fff !important; 
        }
        
        .footer-link {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .footer-link:hover { 
          color: #fff; 
          padding-left: 8px; 
        }
        
        .email-link {
          position: relative;
          display: inline-block;
          text-decoration: none;
          color: #000;
          transition: all 0.3s ease;
        }
        
        .email-link:hover { opacity: 0.7; }
        
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .fade-in-section.visible { 
          opacity: 1; 
          transform: translateY(0); 
        }
        
        .marquee {
          display: flex;
          animation: marquee 25s linear infinite;
        }
        
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
          padding: 10px;
          z-index: 1001;
        }
        
        .hamburger span {
          display: block;
          width: 24px;
          height: 1px;
          background: #000;
          transition: all 0.3s ease;
        }
        
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #fafafa;
          z-index: 999;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 40px;
        }
        
        .mobile-menu.open { display: flex; }
        
        .mobile-menu a { 
          font-family: 'Cormorant Garamond', serif; 
          font-size: 36px; 
          color: #000; 
          text-decoration: none; 
        }
        
        .newsletter-btn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.5);
          color: #fff;
          padding: 12px 24px;
          font-family: 'Manrope', sans-serif;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }
        
        .newsletter-btn:hover { 
          background: #fff; 
          color: #000; 
        }
        
        @media (max-width: 1100px) {
          .globe-container { display: none !important; }
        }
        
        @media (max-width: 900px) {
          .hamburger { display: flex; }
          .desktop-nav { display: none !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .team-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-row { flex-direction: column !important; gap: 30px !important; }
        }
        
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
        <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 50px',
        zIndex: 1000,
        background: 'rgba(250, 250, 250, 0.95)',
        backdropFilter: 'blur(20px)',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'all 0.8s ease 0.2s',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 600, letterSpacing: 4 }}>VOID</span>
          <span style={{ fontSize: 9, fontWeight: 300 }}>®</span>
        </div>
        <div className="desktop-nav" style={{ display: 'flex', gap: 45 }}>
          <a href="#work" className="nav-link">Work</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '140px 50px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background grid */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
        }} />
        
        {/* Globe */}
        <div className="globe-container" style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1.5s ease 0.8s' }}>
          <AnimatedGlobe />
        </div>
        
        <div style={{ maxWidth: 680, position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            marginBottom: 35,
            fontSize: 12,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: '#666',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease 0.4s',
          }}>
            <span style={{ display: 'block', width: 50, height: 1, background: '#999' }} />
            <span>Strategic Consulting · Austin, TX</span>
          </div>
          
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(42px, 8vw, 90px)',
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: -2,
            marginBottom: 35,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 1.2s ease 0.6s',
          }}>
            Design That Builds<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Brands,</em> Transforms<br />
            Businesses
          </h1>
          
          <p style={{
            fontSize: 17,
            lineHeight: 1.8,
            color: '#555',
            fontWeight: 300,
            maxWidth: 480,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s ease 0.9s',
          }}>
            Strategic consulting firm specializing in digital transformation,
            data infrastructure, and business intelligence solutions.
          </p>
          
          <div style={{
            marginTop: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 25,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease 1.1s',
          }}>
            <a href="mailto:sulayman.bowles@gmail.com" className="cta-button" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '18px 40px',
              fontSize: 13,
              letterSpacing: 0.5,
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400,
              textDecoration: 'none',
            }}>
              <span>Schedule a Consultation</span>
              <span className="btn-arrow" style={{ fontSize: 16 }}>↗</span>
            </a>
          </div>
        </div>
        
        {/* Bottom elements */}
        <div style={{
          position: 'absolute',
          bottom: 40,
          left: 50,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
          zIndex: 1,
          opacity: loaded ? 1 : 0,
          transition: 'all 1s ease 1.2s',
        }}>
          <div style={{ width: 1, height: 45, background: '#000' }} />
          <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: 40,
          right: 50,
          fontSize: 11,
          letterSpacing: 1,
          color: '#999',
          zIndex: 1,
          opacity: loaded ? 1 : 0,
          transition: 'all 1s ease 1s',
        }}>
          University of Texas
        </div>
      </section>

      {/* Marquee */}
      <div style={{
        overflow: 'hidden',
        borderTop: '1px solid #e5e5e5',
        borderBottom: '1px solid #e5e5e5',
        padding: '22px 0',
        background: '#fff',
      }}>
        <div className="marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 45, paddingRight: 45, whiteSpace: 'nowrap' }}>
              {['Strategy', 'Infrastructure', 'Analytics', 'Development', 'Consulting', 'Transformation'].map((item, j) => (
                <React.Fragment key={j}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, letterSpacing: 1 }}>{item}</span>
                  <span style={{ fontSize: 5, color: '#bbb' }}>●</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Work Section */}
      <section id="work" style={{ padding: '140px 50px', background: '#fff' }}>
        <div id="work-header" data-animate className={`fade-in-section ${visibleSections['work-header'] ? 'visible' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 25, marginBottom: 70 }}>
          <span style={{ fontSize: 12, color: '#999', letterSpacing: 1 }}>01</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase' }}>Selected Projects</h2>
          <div style={{ flex: 1, height: 1, background: '#eee', marginLeft: 15 }} />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              data-animate
              className={`project-item fade-in-section ${visibleSections[`project-${project.id}`] ? 'visible' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 35,
                padding: '35px 30px',
                borderRadius: 8,
                border: '1px solid #f0f0f0',
                transitionDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="project-thumbnail" style={{
                width: 130,
                height: 90,
                borderRadius: 6,
                background: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.4s ease',
              }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 300, color: '#ccc' }}>{project.name.charAt(0)}</span>
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <span className="project-arrow" style={{ fontSize: 14, opacity: 0, transform: 'translateX(-10px)', transition: 'all 0.3s ease' }}>→</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, letterSpacing: -0.5 }}>{project.name}</span>
                </div>
                <p style={{ fontSize: 13, color: '#777', fontWeight: 300, marginBottom: 12, paddingLeft: 24 }}>{project.description}</p>
                <div style={{ display: 'flex', gap: 8, paddingLeft: 24 }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{ fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: '#888', padding: '5px 12px', background: '#f5f5f5', borderRadius: 3, fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
              </div>
              
              <div style={{ textAlign: 'right', minWidth: 140 }}>
                <div style={{ fontSize: 12, color: '#555', letterSpacing: 0.5, fontWeight: 500, marginBottom: 4 }}>{project.category}</div>
                <div style={{ fontSize: 12, color: '#aaa' }}>{project.year}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div id="view-all" data-animate className={`fade-in-section ${visibleSections['view-all'] ? 'visible' : ''}`} style={{ marginTop: 70, display: 'flex', justifyContent: 'center' }}>
          <a href="mailto:sulayman.bowles@gmail.com" className="cta-button" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '20px 50px',
            fontSize: 13,
            letterSpacing: 0.5,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            textDecoration: 'none',
          }}>
            <span>Discuss Your Project</span>
            <span className="btn-arrow" style={{ fontSize: 16 }}>↗</span>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '140px 50px', background: '#fafafa' }}>
        <div id="services-header" data-animate className={`fade-in-section ${visibleSections['services-header'] ? 'visible' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: 25, marginBottom: 70 }}>
          <span style={{ fontSize: 12, color: '#999', letterSpacing: 1 }}>02</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase' }}>Our Services</h2>
          <div style={{ flex: 1, height: 1, background: '#e0e0e0', marginLeft: 15 }} />
        </div>
        
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {services.map((service, index) => (
            <div 
              key={index} 
              id={`service-${index}`}
              data-animate
              className={`service-card fade-in-section ${visibleSections[`service-${index}`] ? 'visible' : ''}`}
              style={{
                padding: '45px 35px',
                border: '1px solid #e8e8e8',
                background: '#fff',
                borderRadius: 6,
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="service-icon" style={{ color: '#ccc', marginBottom: 25, transition: 'color 0.4s ease' }}>
                <service.Icon />
              </div>
              <span className="service-num" style={{ display: 'block', fontSize: 11, color: '#ccc', marginBottom: 20, letterSpacing: 1, transition: 'color 0.4s ease' }}>{service.num}</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 400, marginBottom: 15 }}>{service.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.7, fontWeight: 300 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '140px 50px', background: '#fff' }}>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div id="about-left" data-animate className={`fade-in-section ${visibleSections['about-left'] ? 'visible' : ''}`}>
            <span style={{ fontSize: 12, color: '#999', letterSpacing: 1 }}>03</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 46, fontWeight: 300, lineHeight: 1.2, letterSpacing: -1, marginTop: 25 }}>
              Strategic thinking,<br />
              <em style={{ fontStyle: 'italic' }}>measurable results</em>
            </h2>
          </div>
          
          <div id="about-right" data-animate className={`fade-in-section ${visibleSections['about-right'] ? 'visible' : ''}`} style={{ paddingTop: 50 }}>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: '#444', fontWeight: 300, marginBottom: 25 }}>
              Founded at the University of Texas in Austin, VOID is a strategic consulting 
              firm united by a singular belief: that thoughtful strategy and robust 
              infrastructure have the power to transform businesses.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.9, color: '#444', fontWeight: 300 }}>
              Every engagement begins with listening. We immerse ourselves in your world, 
              understand your challenges, and craft solutions that drive measurable outcomes.
            </p>
            
            <div className="stats-row" style={{ display: 'flex', gap: 50, marginTop: 50, paddingTop: 40, borderTop: '1px solid #eee' }}>
              {[{ num: '25+', label: 'Projects Delivered' }, { num: '15+', label: 'Satisfied Clients' }, { num: '3', label: 'Industries Served' }].map((stat, i) => (
                <div key={i}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 300, letterSpacing: -2, display: 'block', lineHeight: 1 }}>{stat.num}</span>
                  <span style={{ fontSize: 12, color: '#888', letterSpacing: 0.5 }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div id="team-section" data-animate className={`fade-in-section ${visibleSections['team-section'] ? 'visible' : ''}`} style={{ marginTop: 100, paddingTop: 70, borderTop: '1px solid #eee' }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, fontWeight: 500, letterSpacing: 3, textTransform: 'uppercase', color: '#666', marginBottom: 50 }}>The Team</h3>
          
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, maxWidth: 800 }}>
            {team.map((member, index) => (
              <div key={index} className="team-card" style={{ textAlign: 'center' }}>
                <div className="team-avatar" style={{
                  width: 110,
                  height: 110,
                  borderRadius: '50%',
                  background: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  border: '2px solid #eee',
                  transition: 'all 0.4s ease',
                }}>
                  <span className="team-initials" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, color: '#999', transition: 'color 0.4s ease' }}>{member.initials}</span>
                </div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, marginBottom: 6 }}>{member.name}</h4>
                <span style={{ fontSize: 12, color: '#888', letterSpacing: 0.3 }}>{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '160px 50px', background: 'linear-gradient(180deg, #f5f5f5 0%, #ebebeb 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)`,
          backgroundSize: '30px 30px',
          pointerEvents: 'none',
        }} />
        
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '15%', left: '8%', width: 200, height: 200, border: '1px solid rgba(0,0,0,0.04)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '8%', width: 150, height: 150, border: '1px solid rgba(0,0,0,0.04)', borderRadius: '50%' }} />
        
        <div id="contact-content" data-animate className={`fade-in-section ${visibleSections['contact-content'] ? 'visible' : ''}`} style={{ maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{ display: 'inline-block', fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', color: '#888', marginBottom: 35, paddingBottom: 15, borderBottom: '1px solid #ccc' }}>Ready to start?</span>
          
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 58, fontWeight: 300, lineHeight: 1.1, letterSpacing: -2, marginBottom: 35 }}>
            Let's transform your<br />
            <em style={{ fontStyle: 'italic' }}>business</em> together
          </h2>
          
          <div style={{ marginBottom: 25 }}>
            <span style={{ display: 'block', fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 500, marginBottom: 4 }}>Sulayman Bowles</span>
            <span style={{ display: 'block', fontSize: 13, color: '#777' }}>Founder & Managing Director</span>
          </div>
          
          <a href="mailto:sulayman.bowles@gmail.com" className="email-link" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, borderBottom: '1px solid #000', paddingBottom: 3 }}>
            sulayman.bowles@gmail.com
          </a>
          
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 45 }}>
            <a href="mailto:sulayman.bowles@gmail.com?subject=Schedule a Consultation" className="secondary-cta" style={{
              padding: '18px 40px',
              fontSize: 13,
              letterSpacing: 0.5,
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400,
              textDecoration: 'none',
            }}>
              Schedule a Call
            </a>
            <a href="mailto:sulayman.bowles@gmail.com?subject=Project Inquiry" className="cta-button" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '18px 40px',
              fontSize: 13,
              letterSpacing: 0.5,
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400,
              textDecoration: 'none',
            }}>
              <span>Send Inquiry</span>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0a0a0a', color: '#fff', padding: '90px 50px 45px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 50, marginBottom: 70 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 2, marginBottom: 22 }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 600, letterSpacing: 4 }}>VOID</span>
              <span style={{ fontSize: 9, opacity: 0.5 }}>®</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 300, marginBottom: 22 }}>
              Strategic consulting firm specializing in digital transformation, 
              data infrastructure, and business intelligence. Founded at University of Texas.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
              <span>Austin, TX</span>
            </div>
          </div>
          
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, color: 'rgba(255,255,255,0.7)' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {['Work', 'Services', 'About', 'Contact'].map((link, i) => (
                <a key={i} href={`#${link.toLowerCase()}`} className="footer-link" style={{ fontSize: 13 }}>{link}</a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, color: 'rgba(255,255,255,0.7)' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {['Strategic Consulting', 'Data Infrastructure', 'Web Development', 'Business Analytics'].map((service, i) => (
                <span key={i} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{service}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20, color: 'rgba(255,255,255,0.7)' }}>Get In Touch</h4>
            <a href="mailto:sulayman.bowles@gmail.com" className="footer-link" style={{ fontSize: 13, display: 'block', marginBottom: 14 }}>sulayman.bowles@gmail.com</a>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: 18 }}>
              Ready to transform your business? Let's discuss your project.
            </p>
            <a href="mailto:sulayman.bowles@gmail.com?subject=New Project Inquiry" className="newsletter-btn">
              Start a Project
            </a>
          </div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 35, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
          <span>© 2024 VOID Consulting. All rights reserved.</span>
          <span>University of Texas at Austin</span>
        </div>
      </footer>
    </div>
  );
}
