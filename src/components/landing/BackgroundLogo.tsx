
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

  // Effect to handle visibility, parallax movement, and mouse interaction
  useEffect(() => {
    // Elegant entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    // Handle parallax effect on scroll
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position * 0.02); // Subtle movement factor
    };
    
    // Handle subtle mouse movement effect
    const handleMouseMove = (e: MouseEvent) => {
      // Only update on throttled movement to improve performance
      if (windowSize.width > 0) {
        const xPercent = (e.clientX / windowSize.width - 0.5) * 10; // -5 to 5 range
        const yPercent = (e.clientY / windowSize.height - 0.5) * 10; // -5 to 5 range
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
  
  // Define the intensity level correctly
  const logoIntensity: IntensityLevel = "hypnotic";
  
  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0 ${className}`}
    >
      <div 
        className={`transition-all duration-2000 ease-out transform ${
          isVisible ? 'opacity-20 scale-[2.5]' : 'opacity-0 scale-[1.8]'
        }`}
        style={{ 
          filter: 'blur(8px)',
          transform: `scale(2.5) translateY(${-scrollPosition}px) translateX(${mousePosition.x * 0.4}px) translateY(${mousePosition.y * 0.4}px)`,
          transition: 'opacity 2s ease-out, filter 2s ease-out, transform 1.6s cubic-bezier(0.19, 1, 0.22, 1)'
        }}
      >
        <DynamicLogo 
          colorScheme="gradient" 
          animationStyle="cellular" 
          size="lg" 
          className="transition-transform duration-700" 
          ref={logoRef}
          showText={false}
          intensity={logoIntensity} 
          isLandingPage={true} 
          isLoadingPage={false} 
        />
      </div>
      
      {/* Enhanced radial light emission effect */}
      <div 
        className={`absolute inset-0 bg-radial-gradient from-white/40 via-transparent to-transparent transition-opacity duration-2000 ${
          isVisible ? 'opacity-50' : 'opacity-0'
        }`}
      ></div>
      
      {/* Enhanced subtle particles with improved motion */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => {
          const size = Math.random() * 3 + 1;
          const duration = Math.random() * 15 + 10;
          const delay = Math.random() * 5;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const endX = startX + (Math.random() * 20 - 10);
          const endY = startY + (Math.random() * 20 - 10);
          
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white/30 animate-drift-particle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${startX}%`,
                top: `${startY}%`,
                animation: `drift-particle ${duration}s infinite alternate ease-in-out`,
                animationDelay: `${delay}s`,
                opacity: isVisible ? 0.4 : 0,
                transition: 'opacity 2s ease-out',
                filter: 'blur(1px)',
                '--start-x': `${startX}%`,
                '--start-y': `${startY}%`,
                '--end-x': `${endX}%`,
                '--end-y': `${endY}%`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>
      
      {/* Light tendrils that emanate from center - new hypnotic element */}
      {isVisible && Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * 2 * Math.PI;
        const length = 30 + Math.random() * 20; // Length as percentage of container
        const width = 0.5 + Math.random() * 1.5;
        const opacity = 0.1 + Math.random() * 0.2;
        const duration = 15 + Math.random() * 10;
        const delay = Math.random() * 5;
        
        return (
          <div
            key={`tendril-${i}`}
            className="absolute top-1/2 left-1/2 origin-left"
            style={{
              width: `${length}%`,
              height: `${width}px`,
              opacity: opacity,
              transform: `rotate(${angle}rad) translateX(10%)`,
              background: 'linear-gradient(to right, rgba(255,255,255,0.5), transparent)',
              filter: 'blur(1.5px)',
              animation: `pulse-slow ${duration}s infinite alternate ease-in-out`,
              animationDelay: `${delay}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default BackgroundLogo;
