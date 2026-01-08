import React from 'react';

const ProcessSection = ({ visibleSections }) => {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      subtitle: 'Understanding Your Vision',
      description: 'We begin by deeply understanding your business, challenges, and objectives through comprehensive stakeholder interviews and market analysis.',
      deliverables: ['Stakeholder Interviews', 'Market Analysis', 'Competitive Audit', 'Goals Definition'],
    },
    {
      num: '02',
      title: 'Strategy',
      subtitle: 'Crafting the Blueprint',
      description: 'Our team develops a comprehensive strategy tailored to your unique needs, incorporating data-driven insights and industry best practices.',
      deliverables: ['Strategic Roadmap', 'Technical Architecture', 'Resource Planning', 'Risk Assessment'],
    },
    {
      num: '03',
      title: 'Execute',
      subtitle: 'Bringing Ideas to Life',
      description: 'With a clear strategy in place, we execute with precision, maintaining transparent communication and agile methodologies throughout.',
      deliverables: ['Development Sprints', 'Quality Assurance', 'Progress Reports', 'Stakeholder Reviews'],
    },
    {
      num: '04',
      title: 'Optimize',
      subtitle: 'Continuous Improvement',
      description: 'Post-launch, we monitor performance, gather insights, and continuously optimize to ensure sustainable growth and maximum ROI.',
      deliverables: ['Performance Analytics', 'A/B Testing', 'Iterative Updates', 'Growth Strategy'],
    },
  ];

  return (
    <section id="process" style={{
      padding: '160px 50px',
      background: '#fafafa',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background elements */}
      <div className="dot-pattern" style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.5,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
        {/* Section Header */}
        <div 
          id="process-header" 
          data-animate 
          className={`fade-in-section ${visibleSections['process-header'] ? 'visible' : ''}`}
          style={{ marginBottom: 100, maxWidth: 600 }}
        >
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
            02 — Our Process
          </span>
          <h2 style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: 'clamp(36px, 5vw, 56px)', 
            fontWeight: 300, 
            letterSpacing: -1,
            lineHeight: 1.2,
            marginBottom: 25,
          }}>
            A proven approach<br />
            <em style={{ fontStyle: 'italic' }}>to excellence</em>
          </h2>
          <p style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: '#666',
            fontWeight: 300,
          }}>
            Our methodology combines strategic thinking with agile execution, 
            ensuring every project delivers measurable results.
          </p>
        </div>

        {/* Process Steps */}
        <div 
          className="process-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: 30,
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              id={`process-${index}`}
              data-animate
              className={`process-step fade-in-section ${visibleSections[`process-${index}`] ? 'visible' : ''}`}
              style={{
                padding: '50px 35px',
                background: '#fff',
                borderRadius: 16,
                border: '1px solid #eee',
                position: 'relative',
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {/* Number */}
              <span className="process-number">
                {step.num}
              </span>
              
              {/* Content */}
              <div style={{ marginTop: 30 }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 32,
                  fontWeight: 400,
                  marginBottom: 8,
                  letterSpacing: -0.5,
                }}>
                  {step.title}
                </h3>
                <span style={{
                  display: 'block',
                  fontSize: 12,
                  color: '#999',
                  letterSpacing: 0.5,
                  marginBottom: 20,
                  fontFamily: "'Space Grotesk', monospace",
                }}>
                  {step.subtitle}
                </span>
                <p style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: '#666',
                  fontWeight: 300,
                  marginBottom: 25,
                }}>
                  {step.description}
                </p>

                {/* Deliverables */}
                <div style={{
                  paddingTop: 20,
                  borderTop: '1px solid #f0f0f0',
                }}>
                  <span style={{
                    display: 'block',
                    fontSize: 10,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    color: '#aaa',
                    marginBottom: 12,
                    fontFamily: "'Space Grotesk', monospace",
                  }}>
                    Deliverables
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {step.deliverables.map((item, i) => (
                      <span key={i} style={{
                        fontSize: 12,
                        color: '#555',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}>
                        <span style={{
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: '#ccc',
                        }} />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector line (except last) */}
              {index < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  right: -15,
                  width: 30,
                  height: 1,
                  background: 'linear-gradient(90deg, #ddd, transparent)',
                  display: 'none', // Hide on mobile
                }} className="process-connector" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
