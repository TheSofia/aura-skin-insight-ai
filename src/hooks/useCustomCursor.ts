
import { useEffect, useState } from 'react';

export const useCustomCursor = () => {
  const [isCustomCursorEnabled, setIsCustomCursorEnabled] = useState(false);
  const [cursorStyle, setCursorStyle] = useState('default');

  useEffect(() => {
    // Enable enhanced cursor interactions for desktop devices
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setIsCustomCursorEnabled(isDesktop);
    
    if (isDesktop) {
      // Add enhanced cursor styles to body
      document.body.classList.add('enhanced-cursor-active');
      
      // Add event listeners for cursor state changes
      const handleMouseEnterInteractive = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.matches('button, a, [role="button"], .hover-target, .amazement-button, .amazement-interactive-box')) {
          setCursorStyle('interactive');
          target.classList.add('cursor-enhanced');
        }
      };
      
      const handleMouseLeaveInteractive = (e: Event) => {
        const target = e.target as HTMLElement;
        target.classList.remove('cursor-enhanced');
        setCursorStyle('default');
      };
      
      // Apply to document
      document.addEventListener('mouseenter', handleMouseEnterInteractive, true);
      document.addEventListener('mouseleave', handleMouseLeaveInteractive, true);
      
      return () => {
        document.body.classList.remove('enhanced-cursor-active');
        document.removeEventListener('mouseenter', handleMouseEnterInteractive, true);
        document.removeEventListener('mouseleave', handleMouseLeaveInteractive, true);
      };
    }

    return () => {
      document.body.classList.remove('enhanced-cursor-active');
    };
  }, []);

  return { isCustomCursorEnabled, cursorStyle };
};
