import React, { useState, useEffect, useCallback } from 'react';
import './styles/globals.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import WorkSection from './components/WorkSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { projects, team } from './data/content';
import { services } from './data/services';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  // Smooth load animation
  useEffect(() => {
    // Small delay for smoother initial load
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    // Wait for DOM to be ready
    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll('[data-animate]');
      sections.forEach((section) => observer.observe(section));
    }, 200);
    
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [loaded]);

  // Handle escape key for mobile menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Smooth scroll handler
  const handleSmoothScroll = useCallback((e) => {
    const href = e.target.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div 
      style={{ 
        background: '#fafafa', 
        minHeight: '100vh', 
        fontFamily: "'Manrope', sans-serif", 
        color: '#000',
        position: 'relative',
      }}
    >
      {/* Noise texture overlay for sophisticated feel */}
      <div className="noise-overlay" />

      {/* Custom cursor for desktop */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation 
        loaded={loaded} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />

      {/* Main content */}
      <main>
        {/* Hero Section */}
        <Hero loaded={loaded} />

        {/* Marquee */}
        <Marquee />

        {/* Selected Work */}
        <WorkSection 
          projects={projects}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
          visibleSections={visibleSections}
        />

        {/* Process Section */}
        <ProcessSection 
          visibleSections={visibleSections}
        />

        {/* Services */}
        <ServicesSection 
          services={services}
          visibleSections={visibleSections}
        />

        {/* Testimonials */}
        <TestimonialsSection 
          visibleSections={visibleSections}
        />

        {/* About */}
        <AboutSection 
          team={team}
          visibleSections={visibleSections}
        />

        {/* Contact */}
        <ContactSection 
          visibleSections={visibleSections} 
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
