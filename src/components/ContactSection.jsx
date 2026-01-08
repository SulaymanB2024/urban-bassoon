import React, { useState, useCallback } from 'react';

const ContactSection = ({ visibleSections }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState(null); // 'sending', 'success', 'error'
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    
    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 4000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  }, [formData]);

  return (
    <section 
      id="contact" 
      style={{ 
        padding: '180px 50px', 
        background: 'linear-gradient(180deg, #f8f8f8 0%, #f0f0f0 100%)', 
        position: 'relative', 
        overflow: 'hidden',
      }}
    >
      {/* Decorative background elements */}
      <div className="dot-pattern" style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.5,
        pointerEvents: 'none',
      }} />
      
      {/* Decorative circles */}
      <div style={{ 
        position: 'absolute', 
        top: '10%', 
        left: '5%', 
        width: 300, 
        height: 300, 
        border: '1px solid rgba(0,0,0,0.03)', 
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{ 
        position: 'absolute', 
        bottom: '10%', 
        right: '5%', 
        width: 200, 
        height: 200, 
        border: '1px solid rgba(0,0,0,0.03)', 
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      {/* Large decorative text */}
      <div style={{
        position: 'absolute',
        bottom: '-5%',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(150px, 20vw, 300px)',
        fontWeight: 300,
        color: 'rgba(0,0,0,0.02)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        Let's Talk
      </div>
      
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 100,
          alignItems: 'start',
        }} className="contact-grid">
          {/* Left Column - Info */}
          <div 
            id="contact-info" 
            data-animate 
            className={`fade-in-section ${visibleSections['contact-info'] ? 'visible' : ''}`}
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
              05 — Contact
            </span>
            
            <h2 style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: 'clamp(40px, 6vw, 64px)', 
              fontWeight: 300, 
              lineHeight: 1.1, 
              letterSpacing: -2, 
              marginBottom: 40,
            }}>
              Let's transform<br />
              your <em style={{ fontStyle: 'italic' }}>business</em>
            </h2>

            <p style={{
              fontSize: 17,
              lineHeight: 1.8,
              color: '#555',
              fontWeight: 300,
              marginBottom: 50,
              maxWidth: 450,
            }}>
              Ready to take your business to the next level? We'd love to hear 
              about your project and explore how we can help you achieve your goals.
            </p>

            {/* Contact Details */}
            <div style={{ marginBottom: 50 }}>
              <div style={{ marginBottom: 30 }}>
                <span style={{
                  display: 'block',
                  fontSize: 10,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: '#999',
                  marginBottom: 10,
                  fontFamily: "'Space Grotesk', monospace",
                }}>
                  Founder & Managing Director
                </span>
                <span style={{ 
                  fontFamily: "'Cormorant Garamond', serif", 
                  fontSize: 24, 
                  fontWeight: 500,
                }}>
                  Sulayman Bowles
                </span>
              </div>
              
              <a 
                href="mailto:sulayman.bowles@gmail.com" 
                className="email-link" 
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif", 
                  fontSize: 28, 
                  borderBottom: '2px solid #000', 
                  paddingBottom: 4,
                  display: 'inline-block',
                }}
              >
                sulayman.bowles@gmail.com
              </a>
            </div>

            {/* Location */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              color: '#666',
            }}>
              <span style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#10b981',
              }} />
              <span style={{ fontSize: 14, fontFamily: "'Space Grotesk', monospace" }}>
                Austin, Texas
              </span>
              <span style={{ color: '#ccc' }}>·</span>
              <span style={{ fontSize: 14, fontFamily: "'Space Grotesk', monospace" }}>
                University of Texas
              </span>
            </div>
          </div>

          {/* Right Column - Form */}
          <div 
            id="contact-form" 
            data-animate 
            className={`fade-in-section ${visibleSections['contact-form'] ? 'visible' : ''}`}
            style={{
              padding: '50px',
              background: '#fff',
              borderRadius: 24,
              boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
            }}
          >
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 28,
              fontWeight: 400,
              marginBottom: 30,
            }}>
              Send us a message
            </h3>

            <form 
              action={`mailto:sulayman.bowles@gmail.com?subject=New Inquiry from ${formData.name}`}
              method="POST"
              encType="text/plain"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 11,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    color: '#888',
                    marginBottom: 10,
                    fontFamily: "'Space Grotesk', monospace",
                  }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    style={{
                      width: '100%',
                      padding: '16px 0',
                      border: 'none',
                      borderBottom: '1px solid #e5e5e5',
                      fontSize: 16,
                      fontFamily: "'Manrope', sans-serif",
                      background: 'transparent',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#000'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 11,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    color: '#888',
                    marginBottom: 10,
                    fontFamily: "'Space Grotesk', monospace",
                  }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    style={{
                      width: '100%',
                      padding: '16px 0',
                      border: 'none',
                      borderBottom: '1px solid #e5e5e5',
                      fontSize: 16,
                      fontFamily: "'Manrope', sans-serif",
                      background: 'transparent',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#000'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 11,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    color: '#888',
                    marginBottom: 10,
                    fontFamily: "'Space Grotesk', monospace",
                  }}>
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    style={{
                      width: '100%',
                      padding: '16px 0',
                      border: 'none',
                      borderBottom: '1px solid #e5e5e5',
                      fontSize: 16,
                      fontFamily: "'Manrope', sans-serif",
                      background: 'transparent',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#000'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: 11,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    color: '#888',
                    marginBottom: 10,
                    fontFamily: "'Space Grotesk', monospace",
                  }}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '16px 0',
                      border: 'none',
                      borderBottom: '1px solid #e5e5e5',
                      fontSize: 16,
                      fontFamily: "'Manrope', sans-serif",
                      background: 'transparent',
                      outline: 'none',
                      resize: 'none',
                      transition: 'border-color 0.3s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#000'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e5e5'}
                  />
                </div>

                <button 
                  type="submit"
                  className="secondary-cta"
                  onClick={handleSubmit}
                  disabled={submitStatus === 'sending'}
                  style={{
                    marginTop: 15,
                    padding: '20px 40px',
                    fontSize: 14,
                    letterSpacing: 0.5,
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 500,
                    cursor: submitStatus === 'sending' ? 'wait' : 'pointer',
                    borderRadius: 4,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    opacity: submitStatus === 'sending' ? 0.7 : 1,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span>
                    {submitStatus === 'sending' ? 'Sending...' : 
                     submitStatus === 'success' ? 'Message Sent!' : 
                     submitStatus === 'error' ? 'Try Again' : 'Send Message'}
                  </span>
                  <span>{submitStatus === 'success' ? '✓' : submitStatus === 'error' ? '!' : '→'}</span>
                </button>
                
                {submitStatus === 'success' && (
                  <p style={{
                    marginTop: 15,
                    fontSize: 14,
                    color: '#10b981',
                    fontFamily: "'Space Grotesk', monospace",
                  }}>
                    Thank you! We'll be in touch soon.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
