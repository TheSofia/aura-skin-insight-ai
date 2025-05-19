
import { useState, useEffect, useCallback } from 'react';

export const useBackgroundLogoEffects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [interactionIntensity, setInteractionIntensity] = useState(0);
  const [cursorProximity, setCursorProximity] = useState(0);
  
  // Calculate dynamic properties for background logo
  const dynamicOpacity = Math.max(0.3, 0.8 - (scrollPosition / 1000));
  const dynamicBlur = Math.min(8, scrollPosition / 200);
  const dynamicScale = Math.max(3.0, 4.0 - (scrollPosition / 1000));
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const x = (e.clientX - centerX) * 0.02;
      const y = (e.clientY - centerY) * 0.02;
      
      // Calculate distance from center (0-1)
      const distanceFromCenter = Math.min(
        1, 
        Math.sqrt(Math.pow((e.clientX - centerX) / centerX, 2) + 
        Math.pow((e.clientY - centerY) / centerY, 2))
      );
      
      // Calculate proximity (inverse of distance)
      const proximity = 1 - distanceFromCenter;
      
      setMousePosition({ x, y });
      setInteractionIntensity(distanceFromCenter * 0.5);
      setCursorProximity(proximity);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
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

export default useBackgroundLogoEffects;
