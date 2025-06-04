
import React, { useEffect, useRef, useState, useCallback } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Use refs for performance - no state updates on every mouse move
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const cursorPositionRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();

  // Optimized mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePositionRef.current = { x: e.clientX, y: e.clientY };
    setIsVisible(true);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Check if hovering over interactive elements
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

  const handleMouseDown = useCallback(() => {
    setIsActive(true);
  }, []);
  
  const handleMouseUp = useCallback(() => {
    setIsActive(false);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Smooth cursor following animation
    const updateCursor = () => {
      const lag = 0.15;
      const mouse = mousePositionRef.current;
      const cursorPos = cursorPositionRef.current;
      
      // Smooth interpolation
      cursorPos.x += (mouse.x - cursorPos.x) * lag;
      cursorPos.y += (mouse.y - cursorPos.y) * lag;
      
      // Apply transform with hardware acceleration
      cursor.style.transform = `translate3d(${cursorPos.x - 8}px, ${cursorPos.y - 8}px, 0)`;
      animationIdRef.current = requestAnimationFrame(updateCursor);
    };

    updateCursor();

    // Add event listeners
    const options: AddEventListenerOptions = { passive: true };
    document.addEventListener('mousemove', handleMouseMove, options);
    document.addEventListener('mouseenter', handleMouseEnter, options);
    document.addEventListener('mouseleave', handleMouseLeave, options);
    document.addEventListener('mouseover', handleMouseOver, options);
    document.addEventListener('mouseout', handleMouseOut, options);
    document.addEventListener('mousedown', handleMouseDown, options);
    document.addEventListener('mouseup', handleMouseUp, options);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseOver, handleMouseOut, handleMouseDown, handleMouseUp]);

  return (
    <div
      ref={cursorRef}
      className={`cellular-cursor ${isVisible ? 'visible' : ''} ${isHovering ? 'hover' : ''} ${isActive ? 'active' : ''} ${isText ? 'text' : ''}`}
      style={{ 
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 99999,
        width: '16px',
        height: '16px',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease-out'
      }}
    >
      {/* Cellular cursor core */}
      <div className="cellular-cursor-core" />
      
      {/* Cellular particles - show when hovering */}
      {isHovering && (
        <div className="cellular-particle-system">
          <div className="cellular-particle cellular-particle-pulse" />
          <div className="cellular-particle cellular-particle-drift" />
          <div className="cellular-particle cellular-particle-orbit" />
        </div>
      )}
    </div>
  );
};

export default CustomCursor;
