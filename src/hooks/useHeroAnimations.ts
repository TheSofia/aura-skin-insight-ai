
import { useState, useEffect, useRef, RefObject } from 'react';

type UseHeroAnimationsProps = {
  headlineRef: RefObject<HTMLDivElement>;
  mousePosition: { x: number, y: number };
};

export const useHeroAnimations = ({ headlineRef, mousePosition }: UseHeroAnimationsProps) => {
  const [animationStates, setAnimationStates] = useState({
    isTextVisible: false,
    showVersionHighlight: false
  });
  
  const [cursorProximity, setCursorProximity] = useState(0);
  
  // Start animations with staggered timing
  useEffect(() => {
    // First, trigger the text visibility animation
    const textTimer = setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, isTextVisible: true }));
    }, 1000);
    
    // After text is visible, show the version highlight
    const highlightTimer = setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, showVersionHighlight: true }));
    }, 2500);
    
    return () => {
      clearTimeout(textTimer);
      clearTimeout(highlightTimer);
    };
  }, []);
  
  // Calculate cursor proximity effect for reactive headline
  useEffect(() => {
    if (headlineRef.current) {
      // Calculate the distance from cursor to the headline center
      const headlineRect = headlineRef.current.getBoundingClientRect();
      const headlineCenter = {
        x: headlineRect.left + headlineRect.width / 2,
        y: headlineRect.top + headlineRect.height / 2
      };
      
      // Normalize cursor position to viewport
      const viewportX = window.innerWidth * mousePosition.x;
      const viewportY = window.innerHeight * mousePosition.y;
      
      // Calculate distance (0 = at headline center, 1 = far from headline)
      const distanceX = Math.abs(viewportX - headlineCenter.x) / (window.innerWidth / 2);
      const distanceY = Math.abs(viewportY - headlineCenter.y) / (window.innerHeight / 2);
      
      // Combined proximity (0 = far, 1 = right at the headline)
      const distance = Math.min(1, Math.sqrt(distanceX * distanceX + distanceY * distanceY));
      const proximity = 1 - Math.min(1, distance);
      
      // Apply smoothing
      setCursorProximity(prev => prev + (proximity - prev) * 0.1);
    }
  }, [mousePosition, headlineRef]);
  
  return { animationStates, cursorProximity };
};

export default useHeroAnimations;
