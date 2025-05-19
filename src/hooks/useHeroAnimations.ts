
import { useState, useEffect, useRef, RefObject } from 'react';

type UseHeroAnimationsProps = {
  headlineRef: RefObject<HTMLDivElement>;
  mousePosition: { x: number, y: number };
};

export const useHeroAnimations = ({ headlineRef, mousePosition }: UseHeroAnimationsProps) => {
  const [animationStates, setAnimationStates] = useState({
    discover: false,
    yourBest: false,
    version: false,
    underlineVisible: false,
    ctaReady: false
  });
  
  const [cursorProximity, setCursorProximity] = useState(0);
  
  // Start animations with staggered timing
  useEffect(() => {
    // First, trigger the "DISCOVER" animation
    const discoverTimer = setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, discover: true }));
    }, 1000);
    
    // After a short delay, trigger "YOUR BEST" animation
    const yourBestTimer = setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, yourBest: true }));
    }, 1700); // The 0.7s delay referenced in the design
    
    // After another short delay, trigger "VERSION" animation
    const versionTimer = setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, version: true }));
    }, 2300); // 0.6s after YOUR BEST starts
    
    // Finally, after all text is visible, show the underline and CTA
    const finalTimer = setTimeout(() => {
      setAnimationStates(prev => ({ 
        ...prev, 
        underlineVisible: true,
        ctaReady: true 
      }));
    }, 3200);
    
    return () => {
      clearTimeout(discoverTimer);
      clearTimeout(yourBestTimer);
      clearTimeout(versionTimer);
      clearTimeout(finalTimer);
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
