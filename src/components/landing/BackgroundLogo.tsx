
import React, { useRef, useEffect, useState } from 'react';
import DynamicLogo from '../DynamicLogo';
import { IntensityLevel } from '@/types/logo';

interface BackgroundLogoProps {
  className?: string;
}

const BackgroundLogo: React.FC<BackgroundLogoProps> = ({ className = '' }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [interactionIntensity, setInteractionIntensity] = useState(0);
  const [cursorProximity, setCursorProximity] = useState(0);
  
  // Define the intensity level correctly
  const logoIntensity: IntensityLevel = "hypnotic";
  
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
  
  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {/* Main central logo - significantly larger and more dominant with proximity effects */}
      <div 
        className={`transition-all duration-3000 ease-out transform ${
          isVisible ? 'opacity-30 scale-[3.2]' : 'opacity-0 scale-[2.2]'
        }`}
        style={{ 
          opacity: dynamicOpacity,
          filter: `blur(${dynamicBlur}px)`,
          transform: `scale(${dynamicScale}) translateY(${-scrollPosition}px) translateX(${mousePosition.x * 0.6}px) translateY(${mousePosition.y * 0.6}px)`,
          transition: 'opacity 1s ease-out, filter 1s ease-out, transform 1.2s cubic-bezier(0.19, 1, 0.22, 1)'
        }}
      >
        <DynamicLogo 
          colorScheme="gradient" 
          animationStyle="cellular" 
          size="xl" 
          className="transition-transform duration-1000" 
          ref={logoRef}
          showText={false}
          intensity={logoIntensity} 
          isLandingPage={true} 
          isLoadingPage={false} 
        />
      </div>
      
      {/* Enhanced radial light emission effect with dynamic interaction */}
      <div 
        className={`absolute inset-0 bg-radial-gradient from-white/50 via-transparent to-transparent transition-opacity duration-3000 ${
          isVisible ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          transform: `scale(${1 + interactionIntensity * 0.1 + cursorProximity * 0.1})`,
          opacity: 0.6 + interactionIntensity * 0.2 + cursorProximity * 0.15
        }}
      ></div>
      
      {/* Enhanced subtle particles with improved motion and cursor reactivity */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 28 }).map((_, i) => {
          const size = Math.random() * 5 + 1 + (cursorProximity * 1.5);
          const duration = Math.random() * 25 + 20;
          const delay = Math.random() * 8;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const endX = startX + (Math.random() * 30 - 15);
          const endY = startY + (Math.random() * 30 - 15);
          
          // Dynamic opacity based on cursor proximity for a more interactive feel
          const baseOpacity = 0.5;
          const dynamicOpacity = baseOpacity + (cursorProximity * 0.2);
          
          return (
            <div
              key={i}
              className="absolute rounded-full animate-drift-particle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${startX}%`,
                top: `${startY}%`,
                animation: `drift-particle ${duration}s infinite alternate ease-in-out`,
                animationDelay: `${delay}s`,
                opacity: isVisible ? dynamicOpacity : 0,
                transition: 'opacity 3s ease-out, width 1s ease-out, height 1s ease-out',
                filter: 'blur(2px)',
                '--start-x': `${startX}%`,
                '--start-y': `${startY}%`,
                '--end-x': `${endX}%`,
                '--end-y': `${endY}%`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>
      
      {/* Light tendrils that emanate from center - enhanced hypnotic element with cursor reactivity */}
      {isVisible && Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * 2 * Math.PI;
        // Length increases based on cursor proximity for a more interactive feel
        const length = 40 + Math.random() * 30 + (cursorProximity * 10);
        const width = 0.7 + Math.random() * 2.2 + (cursorProximity * 0.8);
        // Opacity increases based on cursor proximity
        const baseOpacity = 0.15 + Math.random() * 0.25;
        const dynamicOpacity = baseOpacity + (cursorProximity * 0.2);
        const duration = 20 + Math.random() * 15;
        const delay = Math.random() * 8;
        
        return (
          <div
            key={`tendril-${i}`}
            className="absolute top-1/2 left-1/2 origin-left"
            style={{
              width: `${length}%`,
              height: `${width}px`,
              opacity: dynamicOpacity,
              transform: `rotate(${angle}rad) translateX(15%)`,
              background: 'linear-gradient(to right, rgba(255,255,255,0.6), transparent)',
              filter: 'blur(2.5px)',
              animation: `pulse-slow ${duration}s infinite alternate ease-in-out`,
              animationDelay: `${delay}s`,
              transition: 'width 1.2s ease-out, opacity 1.2s ease-out',
            }}
          ></div>
        );
      })}
      
      {/* Atmospheric light refraction patterns with cursor reactivity */}
      {isVisible && Array.from({ length: 5 }).map((_, i) => {
        const size = 20 + Math.random() * 40 + (cursorProximity * 15);
        const posX = Math.random() * 80 + 10; // Keep within 10-90% range
        const posY = Math.random() * 80 + 10;
        const baseOpacity = 0.05 + Math.random() * 0.1;
        const dynamicOpacity = baseOpacity + (cursorProximity * 0.08);
        const duration = 30 + Math.random() * 20;
        
        return (
          <div
            key={`caustic-${i}`}
            className="absolute rounded-full animate-radial-pulse"
            style={{
              width: `${size}%`,
              height: `${size}%`,
              left: `${posX}%`,
              top: `${posY}%`,
              background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
              opacity: dynamicOpacity,
              filter: 'blur(20px)',
              animationDuration: `${duration}s`,
              transition: 'width 1.5s ease-out, height 1.5s ease-out, opacity 1.5s ease-out',
            }}
          ></div>
        );
      })}
      
      {/* New: Interactive, cursor-responsive synaptic connections that form and dissolve */}
      {isVisible && cursorProximity > 0.4 && Array.from({ length: 4 }).map((_, i) => {
        const angle1 = Math.random() * 2 * Math.PI;
        const angle2 = angle1 + (Math.random() * Math.PI - Math.PI/2);
        const distance = 15 + Math.random() * 25;
        
        const x1 = 50 + Math.cos(angle1) * distance;
        const y1 = 50 + Math.sin(angle1) * distance;
        const x2 = 50 + Math.cos(angle2) * distance;
        const y2 = 50 + Math.sin(angle2) * distance;
        
        const opacityFactor = (cursorProximity - 0.4) / 0.6;
        const synapseDuration = 3 + Math.random() * 2;
        
        return (
          <svg 
            key={`synapse-${i}`}
            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
            style={{ opacity: opacityFactor * 0.6 }}
          >
            <line
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="rgba(255, 255, 255, 0.5)"
              strokeWidth="0.5"
              strokeDasharray="3,3"
              style={{
                animation: `synapse-pulse ${synapseDuration}s infinite alternate ease-in-out`,
              }}
            />
          </svg>
        );
      })}
      
      {/* New: Dynamic cellular membrane that responds to cursor proximity */}
      <div
        className={`absolute rounded-full ${isVisible ? 'opacity-50' : 'opacity-0'}`}
        style={{
          width: `70%`,
          height: `70%`,
          background: `radial-gradient(circle, 
            rgba(255, 255, 255, ${0.03 + cursorProximity * 0.05}) 0%, 
            transparent 80%)`,
          border: `0.5px solid rgba(255, 255, 255, ${0.04 + cursorProximity * 0.05})`,
          filter: `blur(${3 - cursorProximity * 1.5}px)`,
          transition: 'opacity 2s ease-out, filter 1s ease-out, border 1s ease-out',
          animation: 'cellular-morph 25s infinite ease-in-out',
        }}
      ></div>
    </div>
  );
};

export default BackgroundLogo;
