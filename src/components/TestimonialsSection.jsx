import React from 'react';

const TestimonialsSection = ({ visibleSections }) => {
  const testimonials = [
    {
      quote: "VOID transformed our entire data infrastructure. Their strategic approach and technical expertise delivered results that exceeded our expectations.",
      author: "Michael Chen",
      role: "CTO, TechFlow Manufacturing",
      company: "Manufacturing Sector",
    },
    {
      quote: "Working with VOID was a game-changer. They didn't just build a database—they built a foundation for our organization's future growth.",
      author: "Sarah Williams",
      role: "Director of Operations",
      company: "Strategic Insights Group",
    },
    {
      quote: "The team's ability to understand complex financial systems and translate them into actionable solutions is remarkable. Highly recommended.",
      author: "David Park",
      role: "Managing Partner",
      company: "Meridian Capital Advisors",
    },
  ];

  return (
    <section id="testimonials" style={{
      padding: '160px 50px',
      background: '#fafafa',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        fontSize: 400,
        fontFamily: "'Cormorant Garamond', serif",
        color: 'rgba(0,0,0,0.02)',
        lineHeight: 0.8,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        "
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
        {/* Section Header */}
        <div 
          id="testimonials-header" 
          data-animate 
          className={`fade-in-section ${visibleSections['testimonials-header'] ? 'visible' : ''}`}
          style={{ 
            textAlign: 'center',
            marginBottom: 80,
          }}
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
            <span style={{ display: 'block', width: 40, height: 1, background: '#ccc' }} aria-hidden="true" />
            Testimonials
            <span style={{ display: 'block', width: 40, height: 1, background: '#ccc' }} aria-hidden="true" />
          </span>
          <h2 style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: 'clamp(36px, 5vw, 52px)', 
            fontWeight: 300, 
            letterSpacing: -1,
            lineHeight: 1.2,
          }}>
            Trusted by leaders who<br />
            <em style={{ fontStyle: 'italic' }}>demand excellence</em>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div 
          className="testimonial-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: 30,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              id={`testimonial-${index}`}
              data-animate
              className={`testimonial-card fade-in-section ${visibleSections[`testimonial-${index}`] ? 'visible' : ''}`}
              style={{
                padding: '50px 40px',
                background: '#fff',
                borderRadius: 20,
                border: '1px solid #eee',
                position: 'relative',
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              {/* Quote mark */}
              <span style={{
                position: 'absolute',
                top: 25,
                left: 35,
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 80,
                color: '#f0f0f0',
                lineHeight: 1,
              }}>
                "
              </span>

              {/* Quote */}
              <p style={{
                fontSize: 17,
                lineHeight: 1.8,
                color: '#333',
                fontWeight: 300,
                marginBottom: 35,
                position: 'relative',
                zIndex: 1,
              }}>
                {testimonial.quote}
              </p>

              {/* Author */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 15,
                paddingTop: 25,
                borderTop: '1px solid #f0f0f0',
              }}>
                {/* Avatar */}
                <div style={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 18,
                    fontWeight: 500,
                    color: '#999',
                  }}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Info */}
                <div>
                  <span style={{
                    display: 'block',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 18,
                    fontWeight: 500,
                    marginBottom: 2,
                  }}>
                    {testimonial.author}
                  </span>
                  <span style={{
                    display: 'block',
                    fontSize: 12,
                    color: '#888',
                    fontFamily: "'Space Grotesk', monospace",
                  }}>
                    {testimonial.role}
                  </span>
                </div>
              </div>

              {/* Company badge */}
              <div style={{
                position: 'absolute',
                top: 25,
                right: 30,
                padding: '6px 14px',
                background: '#f8f8f8',
                borderRadius: 50,
                fontSize: 10,
                letterSpacing: 0.5,
                color: '#888',
                fontFamily: "'Space Grotesk', monospace",
              }}>
                {testimonial.company}
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div 
          id="trust-indicators"
          data-animate
          className={`fade-in-section ${visibleSections['trust-indicators'] ? 'visible' : ''}`}
          style={{
            marginTop: 80,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 60,
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'Client Satisfaction', value: '100%' },
            { label: 'Projects Completed', value: '25+' },
            { label: 'Years Experience', value: '2+' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <span style={{
                display: 'block',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 42,
                fontWeight: 300,
                letterSpacing: -2,
                marginBottom: 5,
              }}>
                {stat.value}
              </span>
              <span style={{
                fontSize: 11,
                color: '#888',
                letterSpacing: 1,
                textTransform: 'uppercase',
                fontFamily: "'Space Grotesk', monospace",
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
