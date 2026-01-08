import React, { useEffect, useState, useRef, useCallback } from 'react';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const rafRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const hoverStateRef = useRef(false);
  const isTouchDevice = useRef(false);

  // Check for touch device once on mount
  useEffect(() => {
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  // Smooth cursor movement using RAF - updates DOM directly for performance
  const updateCursorPosition = useCallback(() => {
    const lerp = 0.15;
    positionRef.current.x += (targetRef.current.x - positionRef.current.x) * lerp;
    positionRef.current.y += (targetRef.current.y - positionRef.current.y) * lerp;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px) translate(-50%, -50%)${isClicking ? ' scale(0.85)' : ''}`;
    }
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px) translate(-50%, -50%)`;
    }

    rafRef.current = requestAnimationFrame(updateCursorPosition);
  }, [isClicking]);

  useEffect(() => {
    if (isTouchDevice.current) return;

    // Stable event handlers using refs to avoid stale closures
    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
      hoverStateRef.current = false;
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Single hover handler using event delegation
    const handleHoverIn = (e) => {
      const target = e.target.closest(
        'a, button, .project-item, .service-card, .team-card, .cta-button, .secondary-cta, .testimonial-card, input, textarea, [role="button"], .nav-link, .hamburger'
      );
      if (target && !hoverStateRef.current) {
        hoverStateRef.current = true;
        setIsHovering(true);
      }
    };

    const handleHoverOut = (e) => {
      const relatedTarget = e.relatedTarget;
      const isStillOverInteractive = relatedTarget?.closest?.(
        'a, button, .project-item, .service-card, .team-card, .cta-button, .secondary-cta, .testimonial-card, input, textarea, [role="button"], .nav-link, .hamburger'
      );
      
      if (!isStillOverInteractive && hoverStateRef.current) {
        hoverStateRef.current = false;
        setIsHovering(false);
      }
    };

    // Add all event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Event delegation for hover - much more efficient
    document.addEventListener('mouseover', handleHoverIn, { passive: true });
    document.addEventListener('mouseout', handleHoverOut, { passive: true });
    
    // Start animation loop
    rafRef.current = requestAnimationFrame(updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleHoverIn);
      document.removeEventListener('mouseout', handleHoverOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateCursorPosition, isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      <div 
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          opacity: isVisible ? 1 : 0,
          willChange: 'transform, width, height',
        }}
        aria-hidden="true"
      />
      <div 
        ref={dotRef}
        className="cursor-dot"
        style={{
          opacity: isVisible && !isHovering ? 1 : 0,
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
