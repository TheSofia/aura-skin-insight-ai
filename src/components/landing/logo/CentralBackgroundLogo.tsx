
import React, { useRef, useEffect } from 'react';
import DynamicLogo from '@/components/DynamicLogo';
import { IntensityLevel } from '@/types/logo';

type CentralBackgroundLogoProps = {
  isVisible: boolean;
  mousePosition: {x: number, y: number};
  scrollPosition: number;
  intensity?: IntensityLevel;
};

const CentralBackgroundLogo: React.FC<CentralBackgroundLogoProps> = ({ 
  isVisible,
  mousePosition,
  scrollPosition,
  intensity = "hypnotic"
}) => {
  const logoRef = useRef<HTMLDivElement>(null);
  
  // Calculate dynamic properties for the background logo with refined responsiveness
  const dynamicOpacity = Math.max(0.25, 0.7 - (scrollPosition / 1500));
  const dynamicBlur = Math.min(10, 2 + scrollPosition / 300);
  const dynamicScale = Math.max(3.0, 4.0 - (scrollPosition / 1200));
  
  // Neural path animation timing
  useEffect(() => {
    const interval = setInterval(() => {
      if (logoRef.current && isVisible) {
        // This would be where we'd trigger subtle animation effects
        // Since we're using CSS animations, we don't need JavaScript for this
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isVisible]);
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Main logo element with enhanced animation and responsiveness */}
      <div 
        className={`transition-all duration-3000 ease-out transform ${
          isVisible ? 'opacity-30 scale-[3.2]' : 'opacity-0 scale-[2.2]'
        }`}
        style={{ 
          opacity: dynamicOpacity,
          filter: `blur(${dynamicBlur}px)`,
          transform: `scale(${dynamicScale}) translateY(${-scrollPosition * 0.04}px) translateX(${mousePosition.x * 0.4}px) translateY(${mousePosition.y * 0.4}px)`,
          transition: 'opacity 1.2s ease-out, filter 1.5s ease-out, transform 1.8s cubic-bezier(0.19, 1, 0.22, 1)'
        }}
      >
        <DynamicLogo 
          colorScheme="gradient" 
          animationStyle="cellular" 
          size="xl" 
          className="transition-transform duration-1000" 
          ref={logoRef}
          showText={false}
          intensity={intensity} 
          isLandingPage={true} 
          isLoadingPage={false} 
        />
      </div>
      
      {/* Neural glow paths that complement headline animations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central subtle glow that pulses slowly */}
        <div 
          className="absolute left-1/2 top-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 animate-pulse-very-slow opacity-0"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(255, 220, 180, 0.05) 0%, transparent 70%)',
            opacity: isVisible ? 0.6 : 0,
            transition: 'opacity 2s ease-out',
          }}
        />
        
        {/* Neural light paths that occasionally animate across */}
        <div 
          className="absolute left-0 top-[40%] w-full h-[20%] animate-light-ray opacity-0"
          style={{ 
            background: 'linear-gradient(90deg, transparent, rgba(255, 220, 180, 0.03), transparent)',
            opacity: isVisible ? 0.5 : 0,
            animationDuration: '25s',
            animationDelay: '5s',
          }}
        />
        
        <div 
          className="absolute left-0 top-[30%] w-full h-[15%] animate-light-ray opacity-0"
          style={{ 
            background: 'linear-gradient(90deg, transparent, rgba(218, 196, 255, 0.04), transparent)',
            opacity: isVisible ? 0.5 : 0,
            animationDuration: '30s',
            animationDelay: '12s',
          }}
        />
      </div>
    </div>
  );
};

export default CentralBackgroundLogo;
