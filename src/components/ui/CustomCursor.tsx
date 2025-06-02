
import React, { useEffect, useRef, useState, useCallback } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isText, setIsText] = useState(false);
  
  // Use refs for better performance
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const cursorPositionRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();

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

    // High-precision mouse move handler
    const handleMouseMove = useCallback((e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    }, []);

    // Enhanced interactive element detection
    const handleMouseOver = useCallback((e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // More comprehensive interactive element detection
      const isInteractive = target.matches(`
        button, a, input, textarea, select,
        [role="button"], [role="link"], [role="tab"], [role="menuitem"],
        [data-interactive], .hover-target, .interactive,
        .enhanced-cta-button, .glass-button, 
        .dermaagent-elegant-button, .dermaagent-button,
        .cursor-pointer, [onclick]
      `) || target.closest(`
        button, a, input, textarea, select,
        [role="button"], [role="link"], [role="tab"], [role="menuitem"],
        [data-interactive], .hover-target, .interactive
      `);
      
      const isTextInput = target.matches(`
        input[type="text"], input[type="email"], input[type="password"], 
        input[type="search"], textarea, [contenteditable="true"]
      `);
      
      setIsHovering(isInteractive);
      setIsText(isTextInput);
    }, []);

    // Mouse leave handler with debouncing
    const handleMouseOut = useCallback((e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const relatedTarget = e.relatedTarget as HTMLElement;
      
      // Only clear hover state if we're actually leaving the interactive element
      if (!relatedTarget || !target.contains(relatedTarget)) {
        setIsHovering(false);
        setIsText(false);
      }
    }, []);

    // Precise mouse down handler
    const handleMouseDown = useCallback((e: MouseEvent) => {
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

    // Mouse up handler
    const handleMouseUp = useCallback(() => {
      setIsActive(false);
    }, []);

    // Prevent cursor issues during page transitions
    const handleVisibilityChange = useCallback(() => {
      if (document.hidden) {
        setIsHovering(false);
        setIsActive(false);
        setIsText(false);
      }
    }, []);

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
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cellular-cursor ${isHovering ? 'hover' : ''} ${isActive ? 'active' : ''} ${isText ? 'text' : ''}`}
      style={{ pointerEvents: 'none' }}
    >
      <div className="cellular-cursor-core" />
    </div>
  );
};

export default CustomCursor;
