
import React, { useEffect, useRef, useState, useCallback } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isText, setIsText] = useState(false);
  const [cellularParticles, setCellularParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    delay: number;
    duration: number;
    motionType: 'drift' | 'orbit' | 'pulse' | 'flow';
  }>>([]);
  
  // Use refs for better performance
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const cursorPositionRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();
  const mouseVelocityRef = useRef({ x: 0, y: 0 });
  const lastMousePositionRef = useRef({ x: 0, y: 0 });

  // Generate cellular particles around cursor
  useEffect(() => {
    const generateCellularParticles = () => {
      const particles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 40, // Position relative to cursor
        y: (Math.random() - 0.5) * 40,
        size: 2 + Math.random() * 4, // 2-6px particles
        opacity: 0.2 + Math.random() * 0.3, // 0.2-0.5 opacity
        delay: Math.random() * 3, // 0-3s delay
        duration: 8 + Math.random() * 12, // 8-20s duration
        motionType: (['drift', 'orbit', 'pulse', 'flow'] as const)[Math.floor(Math.random() * 4)]
      }));
      setCellularParticles(particles);
    };

    generateCellularParticles();
  }, []);

  // Move all useCallback hooks to top level
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const lastPos = lastMousePositionRef.current;
    mouseVelocityRef.current = {
      x: e.clientX - lastPos.x,
      y: e.clientY - lastPos.y
    };
    lastMousePositionRef.current = { x: e.clientX, y: e.clientY };
    mousePositionRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // More comprehensive interactive element detection
    const isInteractive = Boolean(target.matches(`
      button, a, input, textarea, select,
      [role="button"], [role="link"], [role="tab"], [role="menuitem"],
      [data-interactive], .hover-target, .interactive,
      .enhanced-cta-button, .glass-button, 
      .dermaagent-elegant-button, .dermaagent-button,
      .cursor-pointer, [onclick], .hover-enhance
    `)) || Boolean(target.closest(`
      button, a, input, textarea, select,
      [role="button"], [role="link"], [role="tab"], [role="menuitem"],
      [data-interactive], .hover-target, .interactive,
      .glass-button, .enhanced-cta-button, .hover-enhance
    `));
    
    const isTextInput = Boolean(target.matches(`
      input[type="text"], input[type="email"], input[type="password"], 
      input[type="search"], textarea, [contenteditable="true"]
    `));
    
    setIsHovering(isInteractive);
    setIsText(isTextInput);
  }, []);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const relatedTarget = e.relatedTarget as HTMLElement;
    
    // Only clear hover state if we're actually leaving the interactive element
    if (!relatedTarget || !target.contains(relatedTarget)) {
      setIsHovering(false);
      setIsText(false);
    }
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    setIsActive(true);
    
    // Create enhanced ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'cellular-cursor-ripple';
    cursor.appendChild(ripple);
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.remove();
      }
    }, 400);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      setIsHovering(false);
      setIsActive(false);
      setIsText(false);
    }
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Optimized cursor following with reduced lag for better precision
    const updateCursor = () => {
      const lag = 0.08; // Reduced lag for more responsive cursor
      const mouse = mousePositionRef.current;
      const cursorPos = cursorPositionRef.current;
      
      cursorPos.x += (mouse.x - cursorPos.x) * lag;
      cursorPos.y += (mouse.y - cursorPos.y) * lag;
      
      cursor.style.transform = `translate(${cursorPos.x - 10}px, ${cursorPos.y - 10}px)`;
      animationIdRef.current = requestAnimationFrame(updateCursor);
    };

    // Start cursor animation
    updateCursor();

    // Add event listeners with optimized options
    const options = { passive: true, capture: true };
    document.addEventListener('mousemove', handleMouseMove, options);
    document.addEventListener('mouseover', handleMouseOver, options);
    document.addEventListener('mouseout', handleMouseOut, options);
    document.addEventListener('mousedown', handleMouseDown, options);
    document.addEventListener('mouseup', handleMouseUp, options);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut, handleMouseDown, handleMouseUp, handleVisibilityChange]);

  return (
    <div
      ref={cursorRef}
      className={`cellular-cursor ${isHovering ? 'hover' : ''} ${isActive ? 'active' : ''} ${isText ? 'text' : ''}`}
      style={{ pointerEvents: 'none' }}
    >
      <div className="cellular-cursor-core" />
      
      {/* Animated cellular particles around the cursor */}
      <div className="cellular-particle-system">
        {cellularParticles.map((particle) => {
          let motionClass = '';
          let particleColor = '';
          
          // Assign motion class based on particle type
          switch (particle.motionType) {
            case 'drift':
              motionClass = 'cellular-particle-drift';
              particleColor = 'bg-white/20';
              break;
            case 'orbit':
              motionClass = 'cellular-particle-orbit';
              particleColor = 'bg-gray-100/30';
              break;
            case 'pulse':
              motionClass = 'cellular-particle-pulse';
              particleColor = 'bg-gray-200/25';
              break;
            case 'flow':
              motionClass = 'cellular-particle-flow';
              // Rare subtle accent for flow particles
              particleColor = Math.random() > 0.9 ? 'bg-red-100/10' : 'bg-gray-50/25';
              break;
          }
          
          return (
            <div
              key={particle.id}
              className={`cellular-particle ${motionClass} ${particleColor}`}
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${50 + (particle.x / 40) * 50}%`,
                top: `${50 + (particle.y / 40) * 50}%`,
                opacity: particle.opacity,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
                borderRadius: particle.motionType === 'flow' ? '40% 60% 50% 50% / 30% 70% 60% 40%' : '50%',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CustomCursor;
