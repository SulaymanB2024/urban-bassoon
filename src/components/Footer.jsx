import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];
  
  const servicesList = [
    'Strategic Consulting',
    'Data Infrastructure',
    'Web Development',
    'Business Analytics',
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'GitHub', href: '#' },
  ];

  return (
    <footer style={{ 
      background: 'linear-gradient(180deg, #0a0a0a 0%, #000 100%)', 
      color: '#fff', 
      padding: '100px 50px 50px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      }} />
      
      {/* Large decorative text */}
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(100px, 15vw, 200px)',
        fontWeight: 300,
        color: 'rgba(255,255,255,0.02)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
        letterSpacing: 20,
      }}>
        VOID
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative' }}>
        {/* Top Section - CTA */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 80,
          paddingBottom: 60,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          flexWrap: 'wrap',
          gap: 40,
        }}>
          <div style={{ maxWidth: 500 }}>
            <span style={{
              display: 'block',
              fontSize: 11,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: 20,
              fontFamily: "'Space Grotesk', monospace",
            }}>
              Ready to start?
            </span>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: -1,
            }}>
              Let's create something<br />
              <em style={{ fontStyle: 'italic' }}>extraordinary</em> together.
            </h3>
          </div>
          <a 
            href="mailto:sulayman.bowles@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              padding: '20px 45px',
              background: '#fff',
              color: '#000',
              textDecoration: 'none',
              fontSize: 14,
              fontWeight: 500,
              borderRadius: 4,
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,255,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span>Start a Project</span>
            <span>↗</span>
          </a>
        </div>

        {/* Main Footer Grid */}
        <div 
          className="footer-grid" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '2fr 1fr 1fr 1.5fr', 
            gap: 60, 
            marginBottom: 80,
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: 2, 
              marginBottom: 25,
            }}>
              <span style={{ 
                fontFamily: "'Cormorant Garamond', serif", 
                fontSize: 32, 
                fontWeight: 600, 
                letterSpacing: 6,
              }}>
                VOID
              </span>
              <span style={{ fontSize: 9, opacity: 0.4 }}>®</span>
            </div>
            <p style={{ 
              fontSize: 14, 
              color: 'rgba(255,255,255,0.5)', 
              lineHeight: 1.9, 
              maxWidth: 320, 
              marginBottom: 30,
              fontWeight: 300,
            }}>
              Strategic consulting firm specializing in digital transformation, 
              data infrastructure, and business intelligence. Founded at the 
              University of Texas at Austin.
            </p>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 10, 
              fontSize: 13, 
              color: 'rgba(255,255,255,0.5)',
            }}>
              <span style={{ 
                width: 8, 
                height: 8, 
                borderRadius: '50%', 
                background: '#10b981',
                animation: 'pulse 2s ease-in-out infinite',
              }} />
              <span>Austin, TX</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 style={{ 
              fontSize: 11, 
              fontWeight: 500, 
              letterSpacing: 2, 
              textTransform: 'uppercase', 
              marginBottom: 25, 
              color: 'rgba(255,255,255,0.6)',
              fontFamily: "'Space Grotesk', monospace",
            }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {quickLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href} 
                  className="footer-link" 
                  style={{ fontSize: 14 }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 style={{ 
              fontSize: 11, 
              fontWeight: 500, 
              letterSpacing: 2, 
              textTransform: 'uppercase', 
              marginBottom: 25, 
              color: 'rgba(255,255,255,0.6)',
              fontFamily: "'Space Grotesk', monospace",
            }}>
              Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {servicesList.map((service, i) => (
                <span 
                  key={i} 
                  style={{ 
                    fontSize: 14, 
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 style={{ 
              fontSize: 11, 
              fontWeight: 500, 
              letterSpacing: 2, 
              textTransform: 'uppercase', 
              marginBottom: 25, 
              color: 'rgba(255,255,255,0.6)',
              fontFamily: "'Space Grotesk', monospace",
            }}>
              Get In Touch
            </h4>
            <a 
              href="mailto:sulayman.bowles@gmail.com" 
              className="footer-link" 
              style={{ 
                fontSize: 14, 
                display: 'block', 
                marginBottom: 20,
              }}
            >
              sulayman.bowles@gmail.com
            </a>
            <p style={{ 
              fontSize: 13, 
              color: 'rgba(255,255,255,0.4)', 
              lineHeight: 1.7, 
              marginBottom: 25,
            }}>
              Ready to transform your business? Let's discuss your project.
            </p>
            
            {/* Social Links */}
            <div style={{ display: 'flex', gap: 12 }}>
              {socialLinks.map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    fontSize: 12,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#fff';
                    e.currentTarget.style.color = '#000';
                    e.currentTarget.style.borderColor = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  }}
                >
                  {social.label.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          paddingTop: 40, 
          borderTop: '1px solid rgba(255,255,255,0.08)', 
          fontSize: 12, 
          color: 'rgba(255,255,255,0.35)',
          flexWrap: 'wrap',
          gap: 20,
        }}>
          <span>© {currentYear} VOID Consulting. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 30 }}>
            <a 
              href="#" 
              style={{ 
                color: 'rgba(255,255,255,0.35)', 
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              style={{ 
                color: 'rgba(255,255,255,0.35)', 
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
            >
              Terms of Service
            </a>
          </div>
          <span style={{ fontFamily: "'Space Grotesk', monospace" }}>
            University of Texas at Austin
          </span>
        </div>
      </div>

      {/* Back to top button */}
      <a 
        href="#"
        style={{
          position: 'absolute',
          bottom: 50,
          right: 50,
          width: 50,
          height: 50,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgba(255,255,255,0.5)',
          textDecoration: 'none',
          transition: 'all 0.4s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#fff';
          e.currentTarget.style.color = '#000';
          e.currentTarget.style.transform = 'translateY(-5px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        ↑
      </a>
    </footer>
  );
};

export default Footer;
