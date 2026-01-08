import React from 'react';

const AboutSection = ({ team, visibleSections }) => {
  const stats = [
    { num: '25+', label: 'Projects Delivered' }, 
    { num: '15+', label: 'Satisfied Clients' }, 
    { num: '3', label: 'Industries Served' },
    { num: '100%', label: 'Client Retention' },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards in everything we do.',
    },
    {
      title: 'Integrity',
      description: 'Honest communication and ethical practices guide our decisions.',
    },
    {
      title: 'Innovation',
      description: 'We embrace new ideas and approaches to solve complex challenges.',
    },
    {
      title: 'Partnership',
      description: 'We build lasting relationships through collaboration and trust.',
    },
  ];

  return (
    <section id="about" style={{ 
      padding: '160px 50px', 
      background: '#fff',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Main About Grid */}
        <div 
          className="about-grid" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: 100, 
            alignItems: 'start',
            marginBottom: 120,
          }}
        >
          {/* Left Column */}
          <div 
            id="about-left" 
            data-animate 
            className={`fade-in-section ${visibleSections['about-left'] ? 'visible' : ''}`}
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
              marginBottom: 25,
            }}>
              <span style={{ display: 'block', width: 40, height: 1, background: '#ccc' }} />
              04 — About Us
            </span>
            <h2 style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: 'clamp(36px, 5vw, 52px)', 
              fontWeight: 300, 
              lineHeight: 1.15, 
              letterSpacing: -1.5,
            }}>
              Strategic thinking,<br />
              <em style={{ fontStyle: 'italic' }}>measurable results</em>
            </h2>

            {/* Mission statement */}
            <div style={{
              marginTop: 50,
              padding: '40px',
              background: '#fafafa',
              borderRadius: 16,
              borderLeft: '4px solid #000',
            }}>
              <span style={{
                display: 'block',
                fontSize: 10,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: '#999',
                marginBottom: 15,
                fontFamily: "'Space Grotesk', monospace",
              }}>
                Our Mission
              </span>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 24,
                fontWeight: 400,
                lineHeight: 1.5,
                color: '#333',
                fontStyle: 'italic',
              }}>
                To empower businesses with the strategic insights and technical 
                infrastructure they need to thrive in an increasingly digital world.
              </p>
            </div>
          </div>
          
          {/* Right Column */}
          <div 
            id="about-right" 
            data-animate 
            className={`fade-in-section ${visibleSections['about-right'] ? 'visible' : ''}`} 
            style={{ paddingTop: 80 }}
          >
            <p style={{ 
              fontSize: 17, 
              lineHeight: 1.9, 
              color: '#444', 
              fontWeight: 300, 
              marginBottom: 30,
            }}>
              Founded at the University of Texas in Austin, VOID is a strategic consulting 
              firm united by a singular belief: that thoughtful strategy and robust 
              infrastructure have the power to transform businesses.
            </p>
            <p style={{ 
              fontSize: 17, 
              lineHeight: 1.9, 
              color: '#444', 
              fontWeight: 300,
              marginBottom: 30,
            }}>
              Every engagement begins with listening. We immerse ourselves in your world, 
              understand your challenges, and craft solutions that drive measurable outcomes.
            </p>
            <p style={{ 
              fontSize: 17, 
              lineHeight: 1.9, 
              color: '#444', 
              fontWeight: 300,
            }}>
              Our team combines academic rigor with practical expertise, ensuring that every 
              recommendation is grounded in both research and real-world experience.
            </p>
            
            {/* Stats Grid */}
            <div 
              className="stats-row" 
              style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 40, 
                marginTop: 60, 
                paddingTop: 50, 
                borderTop: '1px solid #eee',
              }}
            >
              {stats.map((stat, i) => (
                <div key={i}>
                  <span style={{ 
                    fontFamily: "'Cormorant Garamond', serif", 
                    fontSize: 56, 
                    fontWeight: 300, 
                    letterSpacing: -3, 
                    display: 'block', 
                    lineHeight: 1,
                    marginBottom: 8,
                  }}>
                    {stat.num}
                  </span>
                  <span style={{ 
                    fontSize: 12, 
                    color: '#888', 
                    letterSpacing: 0.5,
                    fontFamily: "'Space Grotesk', monospace",
                  }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div 
          id="values-section" 
          data-animate 
          className={`fade-in-section ${visibleSections['values-section'] ? 'visible' : ''}`}
          style={{
            marginBottom: 120,
            padding: '80px',
            background: '#000',
            borderRadius: 24,
            color: '#fff',
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 60,
            flexWrap: 'wrap',
            gap: 30,
          }}>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 42,
              fontWeight: 300,
              letterSpacing: -1,
            }}>
              Our Core <em style={{ fontStyle: 'italic' }}>Values</em>
            </h3>
            <p style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: 400,
              fontWeight: 300,
            }}>
              The principles that guide every decision we make and every 
              relationship we build.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 40,
          }} className="values-grid">
            {values.map((value, i) => (
              <div key={i} style={{
                paddingTop: 30,
                borderTop: '1px solid rgba(255,255,255,0.1)',
              }}>
                <span style={{
                  display: 'block',
                  fontSize: 10,
                  letterSpacing: 2,
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: 15,
                  fontFamily: "'Space Grotesk', monospace",
                }}>
                  0{i + 1}
                </span>
                <h4 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 26,
                  fontWeight: 400,
                  marginBottom: 12,
                }}>
                  {value.title}
                </h4>
                <p style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 300,
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Team Section */}
        <div 
          id="team-section" 
          data-animate 
          className={`fade-in-section ${visibleSections['team-section'] ? 'visible' : ''}`}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 60,
            flexWrap: 'wrap',
            gap: 30,
          }}>
            <div>
              <span style={{
                display: 'block',
                fontSize: 11,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: '#999',
                marginBottom: 15,
                fontFamily: "'Space Grotesk', monospace",
              }}>
                The Team
              </span>
              <h3 style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                fontSize: 42, 
                fontWeight: 300, 
                letterSpacing: -1,
              }}>
                Meet the <em style={{ fontStyle: 'italic' }}>minds</em>
              </h3>
            </div>
            <p style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: '#666',
              maxWidth: 400,
              fontWeight: 300,
            }}>
              A diverse team of strategists, developers, and analysts united 
              by a passion for solving complex business challenges.
            </p>
          </div>
          
          <div 
            className="team-grid" 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: 50,
            }}
          >
            {team.map((member, index) => (
              <div 
                key={index} 
                className="team-card" 
                style={{ 
                  textAlign: 'center',
                  padding: '50px 30px',
                  background: '#fafafa',
                  borderRadius: 20,
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div 
                  className="team-avatar" 
                  style={{
                    width: 130,
                    height: 130,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f0f0f0 0%, #e5e5e5 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    border: '3px solid #fff',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <span 
                    className="team-initials" 
                    style={{ 
                      fontFamily: "'Cormorant Garamond', serif", 
                      fontSize: 36, 
                      fontWeight: 400, 
                      color: '#888',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    {member.initials}
                  </span>
                </div>
                <h4 style={{ 
                  fontFamily: "'Cormorant Garamond', serif", 
                  fontSize: 26, 
                  fontWeight: 500, 
                  marginBottom: 8,
                  letterSpacing: -0.5,
                }}>
                  {member.name}
                </h4>
                <span style={{ 
                  fontSize: 13, 
                  color: '#888', 
                  letterSpacing: 0.5,
                  fontFamily: "'Space Grotesk', monospace",
                }}>
                  {member.role}
                </span>

                {/* Social links placeholder */}
                <div style={{
                  marginTop: 25,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 15,
                }}>
                  <a 
                    href="#" 
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      border: '1px solid #e5e5e5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#999',
                      textDecoration: 'none',
                      fontSize: 14,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#000';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.borderColor = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#999';
                      e.currentTarget.style.borderColor = '#e5e5e5';
                    }}
                  >
                    in
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
