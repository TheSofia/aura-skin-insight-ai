
import { useState, useEffect } from 'react';

export const useBackgroundLogoEffects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [interactionIntensity, setInteractionIntensity] = useState(0);
  const [cursorProximity, setCursorProximity] = useState(0);

  // Effect to handle visibility, parallax movement, and mouse interaction
  useEffect(() => {
    // Elegant entrance animation with longer delay for dramatic effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    
    // Handle parallax effect on scroll
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position * 0.05); // Enhanced movement factor for more noticeable effect
      
      // Calculate scroll-based interaction intensity
      const maxScroll = 500;
      const intensity = Math.min(1, position / maxScroll);
      setInteractionIntensity(intensity * 0.7); // Scale down the intensity
    };
    
    // Enhanced mouse movement effect with improved fluidity and proximity detection
    const handleMouseMove = (e: MouseEvent) => {
      // Only update on throttled movement to improve performance
      if (windowSize.width > 0) {
        const xPercent = (e.clientX / windowSize.width - 0.5) * 20; // -10 to 10 range, increased for more noticeable effect
        const yPercent = (e.clientY / windowSize.height - 0.5) * 20;
        setMousePosition({ x: xPercent, y: yPercent });
        
        // Calculate cursor proximity to center for interactive effects
        const centerX = windowSize.width / 2;
        const centerY = windowSize.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
        
        // Proximity value: 1 = cursor at center, 0 = cursor at max distance
        const proximity = 1 - Math.min(1, distance / maxDistance);
        setCursorProximity(proximity);
      }
    };
    
    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Initialize window size
    handleResize();
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize.width, windowSize.height]);

  // Calculate dynamic animation properties based on cursor proximity
  const dynamicScale = 3.2 + cursorProximity * 0.15; // Logo grows slightly when cursor is near
  const dynamicOpacity = 0.30 + cursorProximity * 0.1; // Logo becomes more visible when cursor is near
  const dynamicBlur = 10 - cursorProximity * 2; // Logo becomes less blurry when cursor is near

  return {
    isVisible,
    scrollPosition,
    mousePosition,
    interactionIntensity,
    cursorProximity,
    dynamicScale,
    dynamicOpacity,
    dynamicBlur
  };
};
