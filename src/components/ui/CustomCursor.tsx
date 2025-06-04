
import React, { useEffect, useRef, useState, useCallback } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isText, setIsText] = useState(false);
  
  // Use refs for performance - no state updates on every mouse move
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const cursorPositionRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();
  const lastUpdateTime = useRef(0);

  // Optimized mouse move handler with throttling
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = performance.now();
    if (now - lastUpdateTime.current < 16) return; // Throttle to 60fps max
    
    mousePositionRef.current = { x: e.clientX, y: e.clientY };
    lastUpdateTime.current = now;
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Simplified detection for better performance
    const isInteractive = Boolean(
      target.matches('button, a, input, textarea, select, [role="button"], [data-interactive]') ||
      target.closest('button, a, input, textarea, select, [role="button"], [data-interactive]')
    );
    
    const isTextInput = Boolean(
      target.matches('input[type="text"], input[type="email"], input[type="password"], textarea, [contenteditable="true"]')
    );
    
    setIsHovering(isInteractive);
    setIsText(isTextInput);
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsHovering(false);
    setIsText(false);
  }, []);

  const handleMouseDown = useCallback(() => setIsActive(true), []);
  const handleMouseUp = useCallback(() => setIsActive(false), []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Optimized cursor following with smooth interpolation
    const updateCursor = () => {
      const lag = 0.15; // Smooth following
      const mouse = mousePositionRef.current;
      const cursorPos = cursorPositionRef.current;
      
      // Simple lerp for smooth movement
      cursorPos.x += (mouse.x - cursorPos.x) * lag;
      cursorPos.y += (mouse.y - cursorPos.y) * lag;
      
      // Use transform3d for hardware acceleration
      cursor.style.transform = `translate3d(${cursorPos.x - 8}px, ${cursorPos.y - 8}px, 0)`;
      animationIdRef.current = requestAnimationFrame(updateCursor);
    };

    updateCursor();

    // Event listeners with passive option for better performance
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
      {/* Cellular cursor core with organic design */}
      <div className="cellular-cursor-core" />
      
      {/* Cellular particles - show when hovering */}
      {isHovering && (
        <div className="cellular-particle-system">
          <div className="cellular-particle cellular-particle-pulse bg-white/10" />
          <div className="cellular-particle cellular-particle-drift bg-white/15" />
          <div className="cellular-particle cellular-particle-orbit bg-white/8" />
        </div>
      )}
    </div>
  );
};

export default CustomCursor;
