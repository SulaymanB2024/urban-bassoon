import React from 'react';

const WorkSection = ({ projects, activeProject, setActiveProject, visibleSections }) => {
  return (
    <section id="work" style={{ 
      padding: '160px 50px', 
      background: '#fff',
      position: 'relative',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: 100,
        right: 100,
        width: 300,
        height: 300,
        borderRadius: '50%',
        border: '1px solid rgba(0,0,0,0.03)',
        pointerEvents: 'none',
      }} />

      {/* Section Header */}
      <div 
        id="work-header" 
        data-animate 
        className={`fade-in-section ${visibleSections['work-header'] ? 'visible' : ''}`} 
        style={{ 
          display: 'flex', 
          alignItems: 'flex-end', 
          justifyContent: 'space-between',
          marginBottom: 80,
          flexWrap: 'wrap',
          gap: 30,
        }}
      >
        <div>
          <span style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 11, 
            color: '#999', 
            letterSpacing: 3,
            textTransform: 'uppercase',
            fontFamily: "'Space Grotesk', monospace",
            marginBottom: 20,
          }}>
            <span style={{ display: 'block', width: 40, height: 1, background: '#ccc' }} />
            01 — Selected Projects
          </span>
          <h2 style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: 'clamp(36px, 5vw, 56px)', 
            fontWeight: 300, 
            letterSpacing: -1,
            lineHeight: 1.2,
          }}>
            Transformative work<br />
            <em style={{ fontStyle: 'italic' }}>for ambitious brands</em>
          </h2>
        </div>
        
        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: '#666',
          maxWidth: 400,
          fontWeight: 300,
        }}>
          A curated selection of projects that showcase our approach to 
          strategic consulting and digital transformation.
        </p>
      </div>
      
      {/* Projects Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            id={`project-${project.id}`}
            data-animate
            className={`project-item fade-in-section ${visibleSections[`project-${project.id}`] ? 'visible' : ''}`}
            style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr auto',
              alignItems: 'center',
              gap: 40,
              padding: '40px 35px',
              borderRadius: 12,
              border: '1px solid #f0f0f0',
              background: activeProject === project.id ? '#fafafa' : '#fff',
              transitionDelay: `${index * 0.1}s`,
            }}
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            {/* Thumbnail */}
            <div 
              className="project-thumbnail" 
              style={{
                width: 160,
                height: 110,
                borderRadius: 10,
                background: `linear-gradient(135deg, #f5f5f5 0%, #ebebeb 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative pattern */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.03) 1px, transparent 0)`,
                backgroundSize: '12px 12px',
              }} />
              <span style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                fontSize: 48, 
                fontWeight: 300, 
                color: '#ccc',
                position: 'relative',
                zIndex: 1,
              }}>
                {project.name.charAt(0)}
              </span>
            </div>
            
            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 12, 
                marginBottom: 12 
              }}>
                <span 
                  className="project-arrow" 
                  style={{ 
                    fontSize: 18, 
                    opacity: 0, 
                    transform: 'translateX(-10px)', 
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    color: '#999',
                  }}
                >
                  →
                </span>
                <span style={{ 
                  fontFamily: "'Cormorant Garamond', serif", 
                  fontSize: 'clamp(24px, 3vw, 32px)', 
                  fontWeight: 400, 
                  letterSpacing: -0.5,
                }}>
                  {project.name}
                </span>
              </div>
              <p style={{ 
                fontSize: 14, 
                color: '#777', 
                fontWeight: 300, 
                marginBottom: 16, 
                paddingLeft: 30,
                lineHeight: 1.6,
              }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', gap: 10, paddingLeft: 30, flexWrap: 'wrap' }}>
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="tag-pill"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Meta */}
            <div style={{ 
              textAlign: 'right', 
              minWidth: 140,
              paddingRight: 10,
            }}>
              <div style={{ 
                fontSize: 13, 
                color: '#444', 
                letterSpacing: 0.5, 
                fontWeight: 500, 
                marginBottom: 6,
                fontFamily: "'Space Grotesk', monospace",
              }}>
                {project.category}
              </div>
              <div style={{ 
                fontSize: 12, 
                color: '#aaa',
                fontFamily: "'Space Grotesk', monospace",
              }}>
                {project.year}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA */}
      <div 
        id="view-all" 
        data-animate 
        className={`fade-in-section ${visibleSections['view-all'] ? 'visible' : ''}`} 
        style={{ 
          marginTop: 80, 
          display: 'flex', 
          justifyContent: 'center' 
        }}
      >
        <a 
          href="mailto:sulayman.bowles@gmail.com" 
          className="cta-button" 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 14,
            padding: '22px 55px',
            fontSize: 14,
            letterSpacing: 0.5,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 500,
            textDecoration: 'none',
            borderRadius: 4,
          }}
        >
          <span>Discuss Your Project</span>
          <span className="btn-arrow" style={{ fontSize: 18 }}>↗</span>
        </a>
      </div>
    </section>
  );
};

export default WorkSection;
