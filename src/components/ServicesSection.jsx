import React, { useState } from 'react';
import ServiceDetailModal from './ServiceDetailModal';

const ServicesSection = ({ services, visibleSections }) => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <ServiceDetailModal 
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
      
      <section id="services" style={{ 
        padding: '160px 50px', 
        background: '#fff',
        position: 'relative',
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          bottom: 100,
          left: 50,
          width: 200,
          height: 200,
          border: '1px solid rgba(0,0,0,0.03)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />

      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Section Header */}
        <div 
          id="services-header" 
          data-animate 
          className={`fade-in-section ${visibleSections['services-header'] ? 'visible' : ''}`} 
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
              03 — Services
            </span>
            <h2 style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: 'clamp(36px, 5vw, 56px)', 
              fontWeight: 300, 
              letterSpacing: -1,
              lineHeight: 1.2,
            }}>
              What we do<br />
              <em style={{ fontStyle: 'italic' }}>exceptionally well</em>
            </h2>
          </div>

          <p style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: '#666',
            maxWidth: 400,
            fontWeight: 300,
          }}>
            Comprehensive consulting services designed to drive growth, 
            optimize operations, and create lasting competitive advantages.
          </p>
        </div>
        
        {/* Services Grid */}
        <div 
          className="services-grid" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: 24,
          }}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              id={`service-${index}`}
              data-animate
              className={`service-card fade-in-section ${visibleSections[`service-${index}`] ? 'visible' : ''}`}
              style={{
                padding: '50px 35px',
                border: '1px solid #eee',
                background: '#fafafa',
                borderRadius: 16,
                transitionDelay: `${index * 0.1}s`,
                minHeight: 320,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Icon */}
              <div 
                className="service-icon" 
                style={{ 
                  color: '#ccc', 
                  marginBottom: 30, 
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <service.Icon />
              </div>

              {/* Number */}
              <span 
                className="service-num" 
                style={{ 
                  display: 'block', 
                  fontSize: 11, 
                  color: '#bbb', 
                  marginBottom: 20, 
                  letterSpacing: 2,
                  fontFamily: "'Space Grotesk', monospace",
                  transition: 'color 0.5s ease',
                }}
              >
                {service.num}
              </span>

              {/* Title */}
              <h3 style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                fontSize: 30, 
                fontWeight: 400, 
                marginBottom: 16,
                letterSpacing: -0.5,
              }}>
                {service.title}
              </h3>

              {/* Description */}
              <p style={{ 
                fontSize: 14, 
                lineHeight: 1.75, 
                opacity: 0.7, 
                fontWeight: 300,
                marginTop: 'auto',
              }}>
                {service.desc}
              </p>

              {/* Learn more link */}
              <div style={{ 
                marginTop: 25, 
                paddingTop: 20, 
                borderTop: '1px solid rgba(0,0,0,0.05)',
              }}>
                <button 
                  onClick={() => setSelectedService(service)}
                  style={{
                    fontSize: 12,
                    letterSpacing: 0.5,
                    color: 'inherit',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    opacity: 0.6,
                    transition: 'all 0.3s ease',
                    fontFamily: "'Manrope', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.gap = '12px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.6';
                    e.currentTarget.style.gap = '8px';
                  }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span>Learn more</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          id="services-cta" 
          data-animate 
          className={`fade-in-section ${visibleSections['services-cta'] ? 'visible' : ''}`}
          style={{
            marginTop: 80,
            padding: '60px',
            background: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 30,
          }}
        >
          <div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 36,
              fontWeight: 300,
              color: '#fff',
              marginBottom: 10,
            }}>
              Need a custom solution?
            </h3>
            <p style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.6)',
              fontWeight: 300,
            }}>
              Let's discuss your unique challenges and craft a tailored approach.
            </p>
          </div>
          <a 
            href="mailto:sulayman.bowles@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '18px 40px',
              background: '#fff',
              color: '#000',
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 500,
              borderRadius: 4,
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span>Get in Touch</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default ServicesSection;
