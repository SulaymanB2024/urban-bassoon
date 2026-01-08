import React, { useState, useEffect } from 'react';

const Navigation = ({ loaded, mobileMenuOpen, setMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#process', label: 'Process' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          background: mobileMenuOpen ? 'rgba(250, 250, 250, 0.98)' : 'transparent',
          backdropFilter: mobileMenuOpen ? 'blur(20px)' : 'none',
        }}
      >
        {navLinks.map((link, i) => (
          <a 
            key={link.href}
            href={link.href} 
            onClick={() => setMobileMenuOpen(false)}
            style={{
              animationDelay: mobileMenuOpen ? `${i * 0.1}s` : '0s',
            }}
          >
            {link.label}
          </a>
        ))}
        <a 
          href="mailto:sulayman.bowles@gmail.com" 
          className="cta-button"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            marginTop: 20,
            padding: '18px 40px',
            fontSize: 14,
            textDecoration: 'none',
          }}
        >
          Get in Touch
        </a>
      </div>

      {/* Navigation */}
      <nav 
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: scrolled ? '18px 50px' : '25px 50px',
          zIndex: 1000,
          background: scrolled ? 'rgba(250, 250, 250, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
          opacity: loaded ? 1 : 0,
          transform: hidden ? 'translateY(-100%)' : loaded ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Logo */}
        <a 
          href="#" 
          aria-label="VOID - Home"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'flex-start', gap: 2 }}
        >
          <span style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: 28, 
            fontWeight: 600, 
            letterSpacing: 4,
            color: '#000',
          }}>VOID</span>
          <span style={{ 
            fontSize: 9, 
            fontWeight: 300,
            color: '#000',
            opacity: 0.5,
          }} aria-hidden="true">®</span>
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 50,
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <a 
          href="mailto:sulayman.bowles@gmail.com" 
          className="cta-button desktop-nav"
          style={{
            padding: '14px 28px',
            fontSize: 12,
            letterSpacing: 0.5,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 500,
            textDecoration: 'none',
            borderRadius: 3,
          }}
        >
          <span>Let's Talk</span>
        </a>

        {/* Hamburger Menu */}
        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </nav>
    </>
  );
};

export default Navigation;
