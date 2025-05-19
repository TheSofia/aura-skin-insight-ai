
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
    
    // Handle subtle mouse movement effect with improved fluidity
    const handleMouseMove = (e: MouseEvent) => {
      // Only update on throttled movement to improve performance
      if (windowSize.width > 0) {
        const xPercent = (e.clientX / windowSize.width - 0.5) * 15; // -7.5 to 7.5 range, increased for more noticeable effect
        const yPercent = (e.clientY / windowSize.height - 0.5) * 15;
        setMousePosition({ x: xPercent, y: yPercent });
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
  
  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {/* Main central logo - significantly larger and more dominant */}
      <div 
        className={`transition-all duration-3000 ease-out transform ${
          isVisible ? 'opacity-30 scale-[3.2]' : 'opacity-0 scale-[2.2]'
        }`}
        style={{ 
          filter: 'blur(10px)',
          transform: `scale(3.2) translateY(${-scrollPosition}px) translateX(${mousePosition.x * 0.6}px) translateY(${mousePosition.y * 0.6}px)`,
          transition: 'opacity 3s ease-out, filter 3s ease-out, transform 2.5s cubic-bezier(0.19, 1, 0.22, 1)'
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
          transform: `scale(${1 + interactionIntensity * 0.1})`,
          opacity: 0.6 + interactionIntensity * 0.2
        }}
      ></div>
      
      {/* Enhanced subtle particles with improved motion */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 28 }).map((_, i) => {
          const size = Math.random() * 5 + 1;
          const duration = Math.random() * 25 + 20;
          const delay = Math.random() * 8;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const endX = startX + (Math.random() * 30 - 15);
          const endY = startY + (Math.random() * 30 - 15);
          
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white/40 animate-drift-particle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${startX}%`,
                top: `${startY}%`,
                animation: `drift-particle ${duration}s infinite alternate ease-in-out`,
                animationDelay: `${delay}s`,
                opacity: isVisible ? 0.5 : 0,
                transition: 'opacity 3s ease-out',
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
      
      {/* Light tendrils that emanate from center - enhanced hypnotic element */}
      {isVisible && Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * 2 * Math.PI;
        const length = 40 + Math.random() * 30; // Length as percentage of container
        const width = 0.7 + Math.random() * 2.2;
        const opacity = 0.15 + Math.random() * 0.25;
        const duration = 20 + Math.random() * 15;
        const delay = Math.random() * 8;
        
        return (
          <div
            key={`tendril-${i}`}
            className="absolute top-1/2 left-1/2 origin-left"
            style={{
              width: `${length}%`,
              height: `${width}px`,
              opacity: opacity,
              transform: `rotate(${angle}rad) translateX(15%)`,
              background: 'linear-gradient(to right, rgba(255,255,255,0.6), transparent)',
              filter: 'blur(2.5px)',
              animation: `pulse-slow ${duration}s infinite alternate ease-in-out`,
              animationDelay: `${delay}s`,
            }}
          ></div>
        );
      })}
      
      {/* Atmospheric light refraction patterns */}
      {isVisible && Array.from({ length: 5 }).map((_, i) => {
        const size = 20 + Math.random() * 40;
        const posX = Math.random() * 80 + 10; // Keep within 10-90% range
        const posY = Math.random() * 80 + 10;
        const opacity = 0.05 + Math.random() * 0.1;
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
              opacity: opacity,
              filter: 'blur(20px)',
              animationDuration: `${duration}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default BackgroundLogo;
