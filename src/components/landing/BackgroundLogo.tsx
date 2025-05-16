
import React, { useRef, useEffect, useState } from 'react';
import DynamicLogo from '../DynamicLogo';

interface BackgroundLogoProps {
  className?: string;
}

const BackgroundLogo: React.FC<BackgroundLogoProps> = ({ className = '' }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Effect to handle visibility and parallax movement
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
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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
          transform: `scale(2.5) translateY(${-scrollPosition}px)`,
          transition: 'opacity 2s ease-out, transform 1.8s cubic-bezier(0.19, 1, 0.22, 1), filter 2s ease-out'
        }}
      >
        <DynamicLogo 
          colorScheme="gradient" 
          animationStyle="cellular" 
          size="lg" 
          className="transition-transform duration-700" 
          ref={logoRef}
          showText={false}
          intensity="vibrant" 
          isLandingPage={true} 
          isLoadingPage={false} 
        />
      </div>
      
      {/* Radial light emission effect */}
      <div 
        className={`absolute inset-0 bg-radial-gradient from-white/40 via-transparent to-transparent transition-opacity duration-2000 ${
          isVisible ? 'opacity-50' : 'opacity-0'
        }`}
      ></div>
      
      {/* Subtle particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => {
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
    </div>
  );
};

export default BackgroundLogo;
