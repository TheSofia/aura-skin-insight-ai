
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isText, setIsText] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Enhanced smooth cursor following with organic cell-like lag
    const updateCursor = () => {
      const lag = 0.12; // Slightly more organic trailing for luxury feel
      cursorX += (mouseX - cursorX) * lag;
      cursorY += (mouseY - cursorY) * lag;
      
      cursor.style.transform = `translate(${cursorX - 12}px, ${cursorY - 12}px)`;
      requestAnimationFrame(updateCursor);
    };

    // Mouse move handler with subtle motion intensity variation
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Enhanced mouse enter handler for interactive elements
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('button, a, input, textarea, [role="button"], .hover-target, .elegant-button-hover');
      const isTextInput = target.matches('input[type="text"], input[type="email"], textarea, [contenteditable]');
      
      setIsHovering(isInteractive);
      setIsText(isTextInput);
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsText(false);
    };

    // Enhanced mouse down handler with elegant ripple
    const handleMouseDown = () => {
      setIsActive(true);
      
      // Create enhanced ripple effect for luxury notebook feel
      const ripple = document.createElement('div');
      ripple.className = 'cellular-cursor-ripple';
      cursor.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 500);
    };

    // Mouse up handler
    const handleMouseUp = () => {
      setIsActive(false);
    };

    // Start cursor animation
    updateCursor();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cellular-cursor ${isHovering ? 'hover' : ''} ${isActive ? 'active' : ''} ${isText ? 'text' : ''}`}
    >
      <div className="cellular-cursor-core" />
    </div>
  );
};

export default CustomCursor;
