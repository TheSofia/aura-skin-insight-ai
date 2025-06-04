
import React, { useEffect, useRef, useState, useCallback } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Performance optimized refs - no state updates on mouse move
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const cursorPositionRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number | null>(null);
  const lastUpdateTimeRef = useRef(0);
  
  // Cached DOM queries for performance
  const cachedTargetChecksRef = useRef(new WeakMap<Element, boolean>());

  // Highly optimized mouse move handler with minimal overhead
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePositionRef.current.x = e.clientX;
    mousePositionRef.current.y = e.clientY;
    
    if (!isVisible) {
      setIsVisible(true);
    }
  }, [isVisible]);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Optimized target detection with caching
  const isInteractiveElement = useCallback((target: HTMLElement): boolean => {
    // Check cache first
    if (cachedTargetChecksRef.current.has(target)) {
      return cachedTargetChecksRef.current.get(target)!;
    }

    const result = Boolean(
      target.matches('button, a, input, textarea, select, [role="button"], [data-interactive]') ||
      target.closest('button, a, input, textarea, select, [role="button"], [data-interactive]')
    );
    
    // Cache the result
    cachedTargetChecksRef.current.set(target, result);
    return result;
  }, []);

  const isTextElement = useCallback((target: HTMLElement): boolean => {
    return Boolean(
      target.matches('input[type="text"], input[type="email"], input[type="password"], textarea, [contenteditable="true"]')
    );
  }, []);

  // Throttled mouseover handler to prevent excessive state updates
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target) return;
    
    const now = performance.now();
    if (now - lastUpdateTimeRef.current < 50) return; // Throttle to 20fps max
    lastUpdateTimeRef.current = now;
    
    const isInteractive = isInteractiveElement(target);
    const isTextInput = isTextElement(target);
    
    // Batch state updates to minimize re-renders
    if (isInteractive !== isHovering || isTextInput !== isText) {
      setIsHovering(isInteractive);
      setIsText(isTextInput);
    }
  }, [isHovering, isText, isInteractiveElement, isTextElement]);

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

    // High-performance cursor animation using requestAnimationFrame
    const updateCursor = () => {
      const lag = 0.15;
      const mouse = mousePositionRef.current;
      const cursorPos = cursorPositionRef.current;
      
      // Smooth interpolation
      cursorPos.x += (mouse.x - cursorPos.x) * lag;
      cursorPos.y += (mouse.y - cursorPos.y) * lag;
      
      // Use hardware-accelerated transform with translate3d for optimal performance
      const translateX = cursorPos.x - 8;
      const translateY = cursorPos.y - 8;
      cursor.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      
      animationIdRef.current = requestAnimationFrame(updateCursor);
    };

    // Start the animation loop
    animationIdRef.current = requestAnimationFrame(updateCursor);

    // Optimized event listeners with passive flag for better performance
    const passiveOptions: AddEventListenerOptions = { passive: true };
    
    document.addEventListener('mousemove', handleMouseMove, passiveOptions);
    document.addEventListener('mouseenter', handleMouseEnter, passiveOptions);
    document.addEventListener('mouseleave', handleMouseLeave, passiveOptions);
    document.addEventListener('mouseover', handleMouseOver, passiveOptions);
    document.addEventListener('mouseout', handleMouseOut, passiveOptions);
    document.addEventListener('mousedown', handleMouseDown, passiveOptions);
    document.addEventListener('mouseup', handleMouseUp, passiveOptions);

    return () => {
      // Critical cleanup to prevent memory leaks and performance degradation
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      // Clear cache to prevent memory leaks
      cachedTargetChecksRef.current = new WeakMap();
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseOver, handleMouseOut, handleMouseDown, handleMouseUp]);

  // Optimized inline styles to minimize style recalculations
  const cursorStyle = React.useMemo(() => ({
    pointerEvents: 'none' as const,
    position: 'fixed' as const,
    top: 0,
    left: 0,
    zIndex: 99999,
    width: '16px',
    height: '16px',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.2s ease-out',
    willChange: 'transform, opacity'
  }), [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`cellular-cursor ${isVisible ? 'visible' : ''} ${isHovering ? 'hover' : ''} ${isActive ? 'active' : ''} ${isText ? 'text' : ''}`}
      style={cursorStyle}
    >
      {/* Cellular cursor core */}
      <div className="cellular-cursor-core" />
      
      {/* Cellular particles - only render when hovering for performance */}
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
