import React, { useEffect, useRef, useCallback } from 'react';

const AnimatedGlobe = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  
  // Use refs for all rotation state to avoid re-renders and enable smooth physics
  const rotationRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const interactionRef = useRef({
    isDragging: false,
    isHovering: false,
    lastMouse: { x: 0, y: 0 },
    lastTime: Date.now(),
  });
  const lastInteractionTimeRef = useRef(0);
  const animationFrameRef = useRef(null);
  
  // Physics configuration - tuned for smooth, natural feel
  const physics = {
    friction: 0.988,              // Friction coefficient (higher = less friction, longer momentum)
    minVelocity: 0.015,           // Minimum velocity threshold
    dragSensitivity: 0.35,        // How much mouse movement affects rotation
    throwMultiplier: 0.9,         // Velocity multiplier when releasing
    maxVelocity: 12,              // Maximum rotation speed
    idleSpeed: 0.12,              // Slow idle rotation speed
    idleDelay: 2500,              // Ms before idle rotation kicks in
    tiltLimit: 55,                // Maximum tilt angle
    tiltBounce: 0.25,             // Bounce factor when hitting tilt limits
  };

  // City data
  const cities = [
    { lon: -97, lat: 30, name: 'Austin', size: 7, primary: true },
    { lon: -74, lat: 41, name: 'NYC', size: 5, primary: false },
    { lon: 0, lat: 51, name: 'London', size: 5, primary: false },
    { lon: 139, lat: 36, name: 'Tokyo', size: 5, primary: false },
    { lon: 151, lat: -34, name: 'Sydney', size: 4, primary: false },
    { lon: 2, lat: 49, name: 'Paris', size: 4, primary: false },
    { lon: 55, lat: 25, name: 'Dubai', size: 4, primary: false },
    { lon: 104, lat: 1, name: 'Singapore', size: 4, primary: false },
  ];

  // Main physics loop - runs continuously
  useEffect(() => {
    let isRunning = true;
    
    const physicsLoop = () => {
      if (!isRunning) return;
      
      const now = Date.now();
      const timeSinceInteraction = now - lastInteractionTimeRef.current;
      const { isDragging } = interactionRef.current;
      
      // Only apply physics when not dragging
      if (!isDragging) {
        // Apply friction to velocity
        velocityRef.current.x *= physics.friction;
        velocityRef.current.y *= physics.friction;
        
        // Stop if velocity is negligible
        if (Math.abs(velocityRef.current.x) < physics.minVelocity) {
          velocityRef.current.x = 0;
        }
        if (Math.abs(velocityRef.current.y) < physics.minVelocity) {
          velocityRef.current.y = 0;
        }
        
        // Add subtle idle rotation after period of no interaction
        if (timeSinceInteraction > physics.idleDelay) {
          const idleFactor = Math.min(1, (timeSinceInteraction - physics.idleDelay) / 2000);
          // Only add idle if not already spinning fast
          if (Math.abs(velocityRef.current.y) < physics.idleSpeed * 2) {
            velocityRef.current.y += physics.idleSpeed * idleFactor * 0.1;
          }
        }
        
        // Apply velocity to rotation
        rotationRef.current.x += velocityRef.current.x;
        rotationRef.current.y += velocityRef.current.y;
        
        // Soft bounce at tilt limits
        if (rotationRef.current.x > physics.tiltLimit) {
          rotationRef.current.x = physics.tiltLimit;
          velocityRef.current.x *= -physics.tiltBounce;
        } else if (rotationRef.current.x < -physics.tiltLimit) {
          rotationRef.current.x = -physics.tiltLimit;
          velocityRef.current.x *= -physics.tiltBounce;
        }
      }
      
      // Update SVG transform directly for performance
      if (svgRef.current) {
        svgRef.current.style.transform = `rotateX(${rotationRef.current.x * 0.1}deg)`;
      }
      
      // Force re-render for SVG content updates (longitude lines, cities)
      // We do this by updating a data attribute which React can track
      if (containerRef.current) {
        containerRef.current.setAttribute('data-rotation-y', rotationRef.current.y.toFixed(2));
        containerRef.current.setAttribute('data-rotation-x', rotationRef.current.x.toFixed(2));
      }
      
      animationFrameRef.current = requestAnimationFrame(physicsLoop);
    };
    
    physicsLoop();
    
    return () => {
      isRunning = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Force component re-render for SVG updates
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate();
    }, 16); // ~60fps updates
    return () => clearInterval(interval);
  }, []);

  // Event handlers
  const handleMouseDown = useCallback((e) => {
    interactionRef.current.isDragging = true;
    interactionRef.current.lastMouse = { x: e.clientX, y: e.clientY };
    interactionRef.current.lastTime = Date.now();
    // Don't zero out velocity - allow "catching" a spinning globe
    lastInteractionTimeRef.current = Date.now();
  }, []);

  const handleMouseUp = useCallback(() => {
    interactionRef.current.isDragging = false;
    lastInteractionTimeRef.current = Date.now();
  }, []);

  const handleMouseMove = useCallback((e) => {
    const now = Date.now();
    
    if (interactionRef.current.isDragging) {
      const deltaX = e.clientX - interactionRef.current.lastMouse.x;
      const deltaY = e.clientY - interactionRef.current.lastMouse.y;
      const deltaTime = Math.max(1, now - interactionRef.current.lastTime);
      
      // Apply rotation directly
      rotationRef.current.y += deltaX * physics.dragSensitivity;
      rotationRef.current.x += deltaY * physics.dragSensitivity;
      
      // Clamp tilt
      rotationRef.current.x = Math.max(-physics.tiltLimit, Math.min(physics.tiltLimit, rotationRef.current.x));
      
      // Calculate velocity based on movement (for momentum when released)
      const speedFactor = Math.min(1, 16 / deltaTime); // Normalize to ~60fps
      velocityRef.current.y = deltaX * physics.dragSensitivity * physics.throwMultiplier * speedFactor;
      velocityRef.current.x = deltaY * physics.dragSensitivity * physics.throwMultiplier * speedFactor;
      
      // Cap velocity
      velocityRef.current.x = Math.max(-physics.maxVelocity, Math.min(physics.maxVelocity, velocityRef.current.x));
      velocityRef.current.y = Math.max(-physics.maxVelocity, Math.min(physics.maxVelocity, velocityRef.current.y));
      
      interactionRef.current.lastMouse = { x: e.clientX, y: e.clientY };
      interactionRef.current.lastTime = now;
      lastInteractionTimeRef.current = now;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    interactionRef.current.isHovering = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    interactionRef.current.isDragging = false;
    interactionRef.current.isHovering = false;
    // Don't reset velocity - momentum continues!
  }, []);

  // Touch support
  const handleTouchStart = useCallback((e) => {
    e.preventDefault();
    const touch = e.touches[0];
    interactionRef.current.isDragging = true;
    interactionRef.current.lastMouse = { x: touch.clientX, y: touch.clientY };
    interactionRef.current.lastTime = Date.now();
    lastInteractionTimeRef.current = Date.now();
  }, []);

  const handleTouchMove = useCallback((e) => {
    e.preventDefault();
    if (!interactionRef.current.isDragging) return;
    
    const touch = e.touches[0];
    const now = Date.now();
    const deltaX = touch.clientX - interactionRef.current.lastMouse.x;
    const deltaY = touch.clientY - interactionRef.current.lastMouse.y;
    
    rotationRef.current.y += deltaX * physics.dragSensitivity;
    rotationRef.current.x += deltaY * physics.dragSensitivity;
    rotationRef.current.x = Math.max(-physics.tiltLimit, Math.min(physics.tiltLimit, rotationRef.current.x));
    
    velocityRef.current.y = deltaX * physics.dragSensitivity * physics.throwMultiplier;
    velocityRef.current.x = deltaY * physics.dragSensitivity * physics.throwMultiplier;
    
    interactionRef.current.lastMouse = { x: touch.clientX, y: touch.clientY };
    interactionRef.current.lastTime = now;
    lastInteractionTimeRef.current = now;
  }, []);

  const handleTouchEnd = useCallback(() => {
    interactionRef.current.isDragging = false;
    lastInteractionTimeRef.current = Date.now();
  }, []);

  // Calculate longitude line positions based on current rotation
  const getLongitudeLines = () => {
    const lines = [];
    const currentY = rotationRef.current.y;
    
    for (let i = 0; i < 12; i++) {
      const baseLon = i * 30;
      const adjustedLon = (baseLon + currentY) % 360;
      const radians = (adjustedLon * Math.PI) / 180;
      const visibility = Math.cos(radians);
      
      if (visibility > -0.2) {
        lines.push({
          rx: Math.abs(Math.sin(radians)) * 150,
          opacity: Math.max(0, (visibility + 0.2) / 1.2) * 0.15,
          key: i
        });
      }
    }
    return lines;
  };

  // Calculate city positions based on current rotation
  const getCityPosition = (baseLon, lat, radius = 150) => {
    const currentX = rotationRef.current.x;
    const currentY = rotationRef.current.y;
    
    const adjustedLon = baseLon + currentY;
    const lonRad = (adjustedLon * Math.PI) / 180;
    const latRad = (lat * Math.PI) / 180;
    const tiltRad = (currentX * Math.PI) / 180;
    
    // 3D to 2D projection
    let x = Math.cos(latRad) * Math.sin(lonRad);
    let y = Math.sin(latRad);
    let z = Math.cos(latRad) * Math.cos(lonRad);
    
    // Apply X rotation (tilt)
    const newY = y * Math.cos(tiltRad) - z * Math.sin(tiltRad);
    const newZ = y * Math.sin(tiltRad) + z * Math.cos(tiltRad);
    
    return {
      x: 200 + x * radius,
      y: 200 - newY * radius,
      z: newZ,
      visible: newZ > -0.1
    };
  };

  // Get current rotation for latitude line rendering
  const currentRotationX = rotationRef.current.x;

  return (
    <div 
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        width: '580px',
        height: '580px',
        cursor: interactionRef.current.isDragging ? 'grabbing' : 'grab',
        perspective: '1200px',
        userSelect: 'none',
        touchAction: 'none',
      }}
    >
      <svg 
        ref={svgRef}
        viewBox="0 0 400 400" 
        style={{ 
          width: '100%', 
          height: '100%',
          transform: `rotateX(${currentRotationX * 0.1}deg)`,
        }}
      >
        <defs>
          <clipPath id="globeClip">
            <circle cx="200" cy="200" r="150" />
          </clipPath>
          <radialGradient id="globeGradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="50%" stopColor="rgba(0,0,0,0.02)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
          </radialGradient>
          <radialGradient id="globeShadow" cx="70%" cy="70%" r="50%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.05)" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer atmosphere rings */}
        <circle cx="200" cy="200" r="175" fill="none" stroke="rgba(0,0,0,0.02)" strokeWidth="30" />
        <circle cx="200" cy="200" r="165" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
        <circle cx="200" cy="200" r="158" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        
        {/* Main globe */}
        <circle cx="200" cy="200" r="150" fill="url(#globeGradient)" />
        <circle cx="200" cy="200" r="150" fill="url(#globeShadow)" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
        
        {/* Latitude lines */}
        <g clipPath="url(#globeClip)">
          {[-60, -30, 0, 30, 60].map((lat, i) => {
            const latRad = (lat * Math.PI) / 180;
            const tiltRad = (currentRotationX * Math.PI) / 180;
            const projectedY = 200 - (Math.sin(latRad) * Math.cos(tiltRad) * 150);
            const projectedRx = Math.cos(latRad) * 150;
            const projectedRy = Math.abs(Math.sin(tiltRad)) * Math.cos(latRad) * 150 * 0.3 + 5;
            
            return (
              <ellipse 
                key={`lat-${i}`}
                cx="200" 
                cy={projectedY}
                rx={projectedRx}
                ry={projectedRy}
                fill="none" 
                stroke="rgba(0,0,0,0.08)" 
                strokeWidth="0.5"
                strokeDasharray={lat === 0 ? "none" : "4 4"}
                style={{ opacity: lat === 0 ? 0.2 : 0.1 }}
              />
            );
          })}
        </g>
        
        {/* Longitude lines - rotating with interaction */}
        <g clipPath="url(#globeClip)">
          {getLongitudeLines().map((line) => (
            <ellipse 
              key={`lon-${line.key}`}
              cx="200" 
              cy="200" 
              rx={line.rx}
              ry="150"
              fill="none" 
              stroke="rgba(0,0,0,0.12)"
              strokeWidth="0.5"
              style={{ opacity: line.opacity }}
            />
          ))}
        </g>
        
        {/* City dots with 3D positioning */}
        {cities.map((city, i) => {
          const pos = getCityPosition(city.lon, city.lat);
          if (!pos.visible) return null;
          
          const scale = 0.5 + (pos.z + 1) * 0.35;
          const opacity = 0.3 + (pos.z + 1) * 0.35;
          
          return (
            <g key={i} style={{ opacity }}>
              {/* Pulse rings for primary city */}
              {city.primary && (
                <>
                  <circle 
                    cx={pos.x} 
                    cy={pos.y} 
                    r={city.size * scale + 6}
                    fill="none" 
                    stroke="rgba(0,0,0,0.3)" 
                    strokeWidth="1"
                    style={{
                      animation: `pulseRing 2s ease-out infinite`,
                      transformOrigin: `${pos.x}px ${pos.y}px`,
                    }}
                  />
                  <circle 
                    cx={pos.x} 
                    cy={pos.y} 
                    r={city.size * scale + 12}
                    fill="none" 
                    stroke="rgba(0,0,0,0.15)" 
                    strokeWidth="0.5"
                    style={{
                      animation: `pulseRing 2s ease-out infinite`,
                      animationDelay: '0.3s',
                      transformOrigin: `${pos.x}px ${pos.y}px`,
                    }}
                  />
                </>
              )}
              {/* City dot */}
              <circle 
                cx={pos.x} 
                cy={pos.y} 
                r={city.size * scale}
                fill={city.primary ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.4)'}
                filter={city.primary ? 'url(#glow)' : 'none'}
              />
              {/* City label for Austin */}
              {city.primary && pos.z > 0.3 && (
                <text 
                  x={pos.x + 12} 
                  y={pos.y - 8} 
                  fontSize="9" 
                  fontFamily="'Space Grotesk', sans-serif"
                  fontWeight="500"
                  letterSpacing="1.5"
                  fill="rgba(0,0,0,0.6)"
                >
                  AUSTIN
                </text>
              )}
            </g>
          );
        })}
        
        {/* Connection arcs between cities */}
        <g clipPath="url(#globeClip)" style={{ opacity: 0.1 }}>
          {[
            { from: cities[0], to: cities[1] },
            { from: cities[0], to: cities[2] },
            { from: cities[0], to: cities[3] },
          ].map((connection, i) => {
            const fromPos = getCityPosition(connection.from.lon, connection.from.lat);
            const toPos = getCityPosition(connection.to.lon, connection.to.lat);
            
            if (!fromPos.visible || !toPos.visible) return null;
            
            const midX = (fromPos.x + toPos.x) / 2;
            const midY = (fromPos.y + toPos.y) / 2 - 30;
            
            return (
              <path 
                key={i}
                d={`M${fromPos.x},${fromPos.y} Q${midX},${midY} ${toPos.x},${toPos.y}`}
                fill="none" 
                stroke="#000" 
                strokeWidth="0.5"
                strokeDasharray="3 3"
              />
            );
          })}
        </g>
        
        {/* Orbital rings */}
        <ellipse 
          cx="200" cy="200" rx="185" ry="60" 
          fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1"
          transform={`rotate(${-25 + rotationRef.current.y * 0.02}, 200, 200)`}
        />
        <ellipse 
          cx="200" cy="200" rx="195" ry="70" 
          fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5"
          transform={`rotate(${15 - rotationRef.current.y * 0.015}, 200, 200)`}
        />
        
        {/* Interactive hint - shows when hovering but not dragging */}
        {interactionRef.current.isHovering && !interactionRef.current.isDragging && (
          <g style={{ opacity: 0.4 }}>
            <text 
              x="200" 
              y="370" 
              fontSize="8" 
              fontFamily="'Space Grotesk', sans-serif"
              textAnchor="middle"
              letterSpacing="2"
              fill="#000"
            >
              DRAG TO ROTATE
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default AnimatedGlobe;
