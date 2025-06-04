
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
  
  // Use refs for better performance - reduced lag and smoother tracking
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const cursorPositionRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();
  const lastUpdateTime = useRef(0);

  // Generate cellular particles around cursor - reduced count for better performance
  useEffect(() => {
    const generateCellularParticles = () => {
      const particles = Array.from({ length: 4 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 30,
        y: (Math.random() - 0.5) * 30,
        size: 1.5 + Math.random() * 2.5,
        opacity: 0.15 + Math.random() * 0.2,
        delay: Math.random() * 2,
        duration: 6 + Math.random() * 8,
        motionType: (['drift', 'orbit', 'pulse', 'flow'] as const)[Math.floor(Math.random() * 4)]
      }));
      setCellularParticles(particles);
    };

    generateCellularParticles();
  }, []);

  // Throttled mouse move handler for better performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = performance.now();
    if (now - lastUpdateTime.current < 8) return; // Throttle to ~120fps max
    
    mousePositionRef.current = { x: e.clientX, y: e.clientY };
    lastUpdateTime.current = now;
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Simplified interactive element detection - more performant
    const isInteractive = Boolean(
      target.matches('button, a, input, textarea, select, [role="button"], [data-interactive], .hover-target') ||
      target.closest('button, a, input, textarea, select, [role="button"], [data-interactive], .hover-target')
    );
    
    const isTextInput = Boolean(target.matches('input[type="text"], input[type="email"], input[type="password"], textarea, [contenteditable="true"]'));
    
    setIsHovering(isInteractive);
    setIsText(isTextInput);
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsHovering(false);
    setIsText(false);
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsActive(false);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Highly optimized cursor following with reduced calculations
    const updateCursor = () => {
      const lag = 0.12; // Slightly increased lag for smoother movement
      const mouse = mousePositionRef.current;
      const cursorPos = cursorPositionRef.current;
      
      // Use simple lerp for smooth following
      cursorPos.x += (mouse.x - cursorPos.x) * lag;
      cursorPos.y += (mouse.y - cursorPos.y) * lag;
      
      // Use transform3d for hardware acceleration
      cursor.style.transform = `translate3d(${Math.round(cursorPos.x - 10)}px, ${Math.round(cursorPos.y - 10)}px, 0)`;
      animationIdRef.current = requestAnimationFrame(updateCursor);
    };

    updateCursor();

    // Optimized event listeners with passive option for better performance
    const options: AddEventListenerOptions = { passive: true };
    document.addEventListener('mousemove', handleMouseMove, options);
    document.addEventListener('mouseover', handleMouseOver, options);
    document.addEventListener('mouseout', handleMouseOut, options);
    document.addEventListener('mousedown', handleMouseDown, options);
    document.addEventListener('mouseup', handleMouseUp, options);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut, handleMouseDown, handleMouseUp]);

  return (
    <div
      ref={cursorRef}
      className={`cellular-cursor ${isHovering ? 'hover' : ''} ${isActive ? 'active' : ''} ${isText ? 'text' : ''}`}
      style={{ pointerEvents: 'none' }}
    >
      <div className="cellular-cursor-core" />
      
      {/* Simplified cellular particles - reduced complexity */}
      <div className="cellular-particle-system">
        {cellularParticles.map((particle) => (
          <div
            key={particle.id}
            className={`cellular-particle cellular-particle-${particle.motionType} bg-white/20`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${50 + (particle.x / 30) * 50}%`,
              top: `${50 + (particle.y / 30) * 50}%`,
              opacity: particle.opacity,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCursor;
