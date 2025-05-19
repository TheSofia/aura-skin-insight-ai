
import { useState, useEffect, RefObject } from "react";

interface AnimationStates {
  discover: boolean;
  yourBest: boolean;
  version: boolean;
  underlineVisible: boolean;
  ctaReady: boolean;
}

interface UseHeroAnimationsProps {
  headlineRef: RefObject<HTMLDivElement>;
  mousePosition: { x: number; y: number };
}

export const useHeroAnimations = ({ headlineRef, mousePosition }: UseHeroAnimationsProps) => {
  // Text animation states with refined timing
  const [animationStates, setAnimationStates] = useState<AnimationStates>({
    discover: false,
    yourBest: false,
    version: false,
    underlineVisible: false,
    ctaReady: false,
  });

  // Enhanced cursor proximity tracking for interactive animations
  const [cursorProximity, setCursorProximity] = useState(0);

  // Effect for headline animation sequence
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    // Sequence the headline animations with more dramatic timing
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, discover: true }));
    }, 1200)); // Delayed start for more impact
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, yourBest: true }));
    }, 1800)); // Further spacing between elements
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, version: true }));
    }, 2400)); // Further spacing for dramatic reveal
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, underlineVisible: true }));
    }, 3600));
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, ctaReady: true }));
    }, 4000)); // Longer delay before CTA appears

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  // Parallax effect for headline on scroll with mouse interactivity
  useEffect(() => {
    // Calculate cursor proximity to headline
    const updateCursorProximity = () => {
      if (!headlineRef.current) return;
      
      const rect = headlineRef.current.getBoundingClientRect();
      const headlineCenter = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
      
      // Normalize mouse position to page coordinates
      const pageWidth = window.innerWidth;
      const pageHeight = window.innerHeight;
      const mouseX = mousePosition.x * pageWidth;
      const mouseY = mousePosition.y * pageHeight;
      
      // Calculate distance from mouse to headline center
      const dx = mouseX - headlineCenter.x;
      const dy = mouseY - headlineCenter.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Convert to proximity (1 = close, 0 = far)
      const maxDistance = Math.sqrt(pageWidth * pageWidth + pageHeight * pageHeight) / 2;
      const proximity = 1 - Math.min(1, distance / maxDistance);
      setCursorProximity(proximity);
    };
    
    const handleScroll = () => {
      if (headlineRef.current) {
        const scrollPos = window.scrollY;
        const moveY = scrollPos * 0.25; // Enhanced subtle movement
        const opacityFactor = 1 - (scrollPos / 600); // Fade out more slowly
        const blurAmount = Math.min(3, scrollPos * 0.01); // More progressive blur effect
        const glowIntensity = Math.max(0, 0.3 - scrollPos * 0.0007); // Enhanced glow fades as user scrolls
        
        // Add subtle tilt based on mouse position for 3D effect
        const tiltX = (mousePosition.x - 0.5) * 4; // -2 to 2 degrees
        const tiltY = (mousePosition.y - 0.5) * -4;
        
        headlineRef.current.style.transform = `translateY(${-moveY}px) scale(${1 - scrollPos * 0.0003}) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
        headlineRef.current.style.opacity = `${Math.max(0, opacityFactor)}`;
        headlineRef.current.style.filter = `blur(${blurAmount}px)`;
        headlineRef.current.style.perspective = '1000px';
        headlineRef.current.style.transformStyle = 'preserve-3d';
        
        // Adjust glow on the "VERSION" text based on cursor proximity and scroll
        const versionElement = headlineRef.current.querySelector('.version-text') as HTMLElement;
        if (versionElement) {
          const dynamicGlow = 15 + scrollPos * 0.08 + (cursorProximity * 10);
          versionElement.style.textShadow = `0 0 ${dynamicGlow}px rgba(242, 150, 105, ${glowIntensity + cursorProximity * 0.15})`;
        }
        
        // Update cursor proximity
        updateCursorProximity();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', updateCursorProximity);
    updateCursorProximity(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', updateCursorProximity);
    };
  }, [mousePosition, cursorProximity, headlineRef]);

  return {
    animationStates,
    cursorProximity
  };
};
