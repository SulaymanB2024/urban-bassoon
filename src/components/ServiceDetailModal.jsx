import React, { useEffect, useRef, useState } from 'react';

const ServiceDetailModal = ({ service, isOpen, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle escape key and click outside
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e) => {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || !service) return null;

  // Extended service details
  const serviceDetails = {
    Strategy: {
      hero: 'Transform your business with data-driven strategic insights',
      approach: 'Our strategic consulting approach combines rigorous analysis with creative problem-solving. We work closely with stakeholders at every level to understand your unique challenges and opportunities.',
      process: [
        { step: 'Discovery', desc: 'Deep dive into your business model, market position, and competitive landscape' },
        { step: 'Analysis', desc: 'Comprehensive data analysis to identify patterns, opportunities, and risks' },
        { step: 'Strategy Development', desc: 'Craft actionable strategies aligned with your business objectives' },
        { step: 'Implementation Planning', desc: 'Detailed roadmaps with clear milestones and KPIs' },
      ],
      deliverables: [
        'Strategic Assessment Report',
        'Market Opportunity Analysis',
        'Competitive Positioning Framework',
        'Growth Roadmap & Action Plan',
        'KPI Dashboard & Metrics',
        'Quarterly Strategy Reviews',
      ],
      caseStudy: {
        client: 'TechFlow Manufacturing',
        challenge: 'Needed to modernize operations and expand into new markets',
        solution: 'Developed comprehensive digital transformation strategy',
        result: '40% increase in operational efficiency within 6 months',
      },
    },
    Infrastructure: {
      hero: 'Build robust, scalable systems that power your business growth',
      approach: 'We design and implement technical infrastructure that scales with your business. Our solutions prioritize security, performance, and maintainability.',
      process: [
        { step: 'Assessment', desc: 'Evaluate current systems, identify bottlenecks and security vulnerabilities' },
        { step: 'Architecture Design', desc: 'Design scalable, secure architecture tailored to your needs' },
        { step: 'Implementation', desc: 'Build and deploy infrastructure with minimal disruption' },
        { step: 'Optimization', desc: 'Continuous monitoring and performance optimization' },
      ],
      deliverables: [
        'Infrastructure Assessment Report',
        'System Architecture Documentation',
        'Database Schema Design',
        'Security Implementation Plan',
        'Disaster Recovery Protocol',
        'Performance Monitoring Dashboard',
      ],
      caseStudy: {
        client: 'Strategic Insights Group',
        challenge: 'Legacy database systems causing performance issues',
        solution: 'Complete database architecture overhaul with cloud migration',
        result: '60% faster data processing, 99.9% uptime achieved',
      },
    },
    Development: {
      hero: 'Custom software solutions engineered for excellence',
      approach: 'We build modern, maintainable software using cutting-edge technologies and best practices. Our development process emphasizes clean code, comprehensive testing, and seamless user experiences.',
      process: [
        { step: 'Requirements', desc: 'Detailed requirements gathering and technical specification' },
        { step: 'Design', desc: 'UI/UX design and system architecture planning' },
        { step: 'Development', desc: 'Agile development with regular demos and feedback cycles' },
        { step: 'Launch & Support', desc: 'Deployment, training, and ongoing maintenance' },
      ],
      deliverables: [
        'Technical Specification Document',
        'UI/UX Design Mockups',
        'Fully Tested Codebase',
        'API Documentation',
        'Deployment Pipeline',
        'Training & Support Package',
      ],
      caseStudy: {
        client: 'Meridian Capital Advisors',
        challenge: 'Manual reporting processes consuming 15+ hours weekly',
        solution: 'Custom automated reporting platform with real-time dashboards',
        result: '8 hours saved weekly, 100% reporting accuracy',
      },
    },
    Analytics: {
      hero: 'Turn your data into actionable business intelligence',
      approach: 'We transform raw data into meaningful insights that drive decision-making. Our analytics solutions combine advanced techniques with intuitive visualizations.',
      process: [
        { step: 'Data Audit', desc: 'Assess data sources, quality, and integration requirements' },
        { step: 'Pipeline Design', desc: 'Design efficient data collection and processing workflows' },
        { step: 'Analytics Development', desc: 'Build dashboards, reports, and predictive models' },
        { step: 'Enablement', desc: 'Train your team to leverage analytics effectively' },
      ],
      deliverables: [
        'Data Quality Assessment',
        'Analytics Strategy Document',
        'Interactive Dashboards',
        'Automated Report Generation',
        'Predictive Models',
        'Team Training Sessions',
      ],
      caseStudy: {
        client: 'Regional Healthcare Network',
        challenge: 'No visibility into operational metrics across facilities',
        solution: 'Unified analytics platform with real-time KPI tracking',
        result: '25% reduction in operational costs through data-driven decisions',
      },
    },
  };

  const details = serviceDetails[service.title] || serviceDetails.Strategy;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: isMobile ? '0' : '20px',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        overflowY: 'auto',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      <div
        ref={contentRef}
        tabIndex={-1}
        style={{
          width: '100%',
          maxWidth: isMobile ? '100%' : 900,
          background: '#fff',
          borderRadius: isMobile ? 0 : 24,
          overflow: 'hidden',
          margin: isMobile ? '0' : '40px 0',
          minHeight: isMobile ? '100vh' : 'auto',
          outline: 'none',
          transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)',
          padding: isMobile ? '80px 24px 40px' : '60px 50px',
          position: 'relative',
        }}>
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: isMobile ? 16 : 25,
              right: isMobile ? 16 : 25,
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.1)',
              color: '#fff',
              fontSize: 20,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            }}
          >
            ✕
          </button>

          {/* Service icon and number */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <div style={{ color: 'rgba(255,255,255,0.4)' }}>
              <service.Icon />
            </div>
            <span style={{
              fontSize: 12,
              letterSpacing: 2,
              color: 'rgba(255,255,255,0.4)',
              fontFamily: "'Space Grotesk', monospace",
            }}>
              {service.num}
            </span>
          </div>

          {/* Title */}
          <h2 id="modal-title" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(36px, 5vw, 52px)',
            fontWeight: 300,
            color: '#fff',
            marginBottom: 20,
            letterSpacing: -1,
          }}>
            {service.title}
          </h2>

          {/* Hero text */}
          <p style={{
            fontSize: isMobile ? 16 : 18,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 300,
            maxWidth: 600,
          }}>
            {details.hero}
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: isMobile ? '30px 24px 40px' : '50px' }}>
          {/* Approach */}
          <div style={{ marginBottom: isMobile ? 35 : 50 }}>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? 24 : 28,
              fontWeight: 400,
              marginBottom: isMobile ? 15 : 20,
            }}>
              Our Approach
            </h3>
            <p style={{
              fontSize: isMobile ? 15 : 16,
              lineHeight: 1.8,
              color: '#555',
              fontWeight: 300,
            }}>
              {details.approach}
            </p>
          </div>

          {/* Process */}
          <div style={{ marginBottom: isMobile ? 35 : 50 }}>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? 24 : 28,
              fontWeight: 400,
              marginBottom: isMobile ? 20 : 30,
            }}>
              Process
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: isMobile ? 12 : 20,
            }}>
              {details.process.map((item, i) => (
                <div key={i} style={{
                  padding: 25,
                  background: '#fafafa',
                  borderRadius: 12,
                  border: '1px solid #f0f0f0',
                }}>
                  <span style={{
                    display: 'block',
                    fontSize: 11,
                    letterSpacing: 2,
                    color: '#999',
                    marginBottom: 10,
                    fontFamily: "'Space Grotesk', monospace",
                  }}>
                    0{i + 1}
                  </span>
                  <h4 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: isMobile ? 18 : 20,
                    fontWeight: 500,
                    marginBottom: 10,
                  }}>
                    {item.step}
                  </h4>
                  <p style={{
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: '#666',
                    fontWeight: 300,
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div style={{ marginBottom: isMobile ? 35 : 50 }}>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? 24 : 28,
              fontWeight: 400,
              marginBottom: isMobile ? 18 : 25,
            }}>
              Key Deliverables
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: isMobile ? 8 : 12,
            }}>
              {details.deliverables.map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: isMobile ? '12px 14px' : '14px 18px',
                  background: '#fafafa',
                  borderRadius: 8,
                }}>
                  <span style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#000',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontSize: isMobile ? 13 : 14,
                    color: '#333',
                    fontWeight: 400,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study */}
          <div style={{
            padding: isMobile ? '28px 22px' : 40,
            background: 'linear-gradient(135deg, #f8f8f8 0%, #f0f0f0 100%)',
            borderRadius: isMobile ? 12 : 16,
            marginBottom: isMobile ? 30 : 40,
          }}>
            <span style={{
              display: 'block',
              fontSize: 11,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: '#999',
              marginBottom: isMobile ? 15 : 20,
              fontFamily: "'Space Grotesk', monospace",
            }}>
              Case Study
            </span>
            <h4 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? 20 : 24,
              fontWeight: 500,
              marginBottom: isMobile ? 20 : 25,
            }}>
              {details.caseStudy.client}
            </h4>
            <div style={{ display: 'grid', gap: isMobile ? 16 : 20 }}>
              <div>
                <span style={{
                  display: 'block',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#666',
                  marginBottom: 6,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}>
                  Challenge
                </span>
                <p style={{ fontSize: isMobile ? 14 : 15, color: '#444', lineHeight: 1.6 }}>
                  {details.caseStudy.challenge}
                </p>
              </div>
              <div>
                <span style={{
                  display: 'block',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#666',
                  marginBottom: 6,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}>
                  Solution
                </span>
                <p style={{ fontSize: isMobile ? 14 : 15, color: '#444', lineHeight: 1.6 }}>
                  {details.caseStudy.solution}
                </p>
              </div>
              <div style={{
                padding: isMobile ? '16px 18px' : '20px 25px',
                background: '#000',
                borderRadius: 10,
                marginTop: isMobile ? 5 : 10,
              }}>
                <span style={{
                  display: 'block',
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: 8,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}>
                  Result
                </span>
                <p style={{
                  fontSize: isMobile ? 16 : 18,
                  color: '#fff',
                  fontWeight: 500,
                  fontFamily: "'Cormorant Garamond', serif",
                }}>
                  {details.caseStudy.result}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: isMobile ? 'stretch' : 'space-between',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 16 : 20,
            paddingTop: isMobile ? 24 : 30,
            borderTop: '1px solid #eee',
          }}>
            <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: isMobile ? 20 : 22,
                fontWeight: 400,
                marginBottom: 5,
              }}>
                Ready to get started?
              </p>
              <p style={{ fontSize: isMobile ? 13 : 14, color: '#666' }}>
                Let's discuss how we can help your business.
              </p>
            </div>
            <a
              href="mailto:sulayman.bowles@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                padding: '16px 32px',
                background: '#000',
                color: '#fff',
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 6,
                transition: 'all 0.3s ease',
                width: isMobile ? '100%' : 'auto',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span>Contact Us</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
