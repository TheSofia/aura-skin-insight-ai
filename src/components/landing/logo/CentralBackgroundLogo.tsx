
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
  const dynamicOpacity = Math.max(0.35, 0.8 - (scrollPosition / 1500));
  const dynamicBlur = Math.min(6, 1 + scrollPosition / 400);
  const dynamicScale = Math.max(3.2, 4.2 - (scrollPosition / 1200));
  
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
          isVisible ? 'opacity-40 scale-[3.5]' : 'opacity-0 scale-[2.5]'
        }`}
        style={{ 
          opacity: dynamicOpacity,
          filter: `blur(${dynamicBlur}px)`,
          transform: `scale(${dynamicScale}) translateY(${-scrollPosition * 0.04}px) translateX(${mousePosition.x * 0.6}px) translateY(${mousePosition.y * 0.6}px)`,
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
      
      {/* Enhanced structural cellular elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Structured light stream 1 */}
        <div 
          className="absolute left-0 top-1/3 w-full h-[5%] animate-cellular-drift-slow opacity-0"
          style={{ 
            background: 'linear-gradient(90deg, transparent, rgba(255, 135, 67, 0.07), transparent)',
            opacity: isVisible ? 0.8 : 0,
            transition: 'opacity 2s ease-out',
            borderRadius: '50%',
            transform: 'rotate(-5deg)',
          }}
        />
        
        {/* Structured light stream 2 */}
        <div 
          className="absolute left-0 top-2/3 w-full h-[8%] animate-cellular-drift opacity-0"
          style={{ 
            background: 'linear-gradient(90deg, transparent, rgba(62, 49, 102, 0.08), transparent)',
            opacity: isVisible ? 0.8 : 0,
            transition: 'opacity 2s ease-out',
            borderRadius: '30%',
            transform: 'rotate(8deg)',
          }}
        />
        
        {/* Central energy core */}
        <div 
          className="absolute left-1/2 top-1/2 w-[40vw] h-[40vh] -translate-x-1/2 -translate-y-1/2 animate-pulse-very-slow opacity-0 rounded-full"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(255, 135, 67, 0.1) 0%, rgba(62, 49, 102, 0.05) 50%, transparent 80%)',
            opacity: isVisible ? 0.7 : 0,
            transition: 'opacity 2s ease-out',
            boxShadow: '0 0 40px rgba(255, 135, 67, 0.1)',
          }}
        />
        
        {/* Structured cellular network patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-0" 
             style={{
               opacity: isVisible ? 0.2 : 0,
               transition: 'opacity 3s ease-out',
               filter: 'blur(1px)'
             }}
             viewBox="0 0 100 100" 
             preserveAspectRatio="none">
          {/* Geometric cellular lines - using a gradient */}
          <defs>
            <linearGradient id="cellLine1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 135, 67, 0)" />
              <stop offset="50%" stopColor="rgba(255, 135, 67, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 135, 67, 0)" />
            </linearGradient>
            <linearGradient id="cellLine2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(62, 49, 102, 0)" />
              <stop offset="50%" stopColor="rgba(62, 49, 102, 0.25)" />
              <stop offset="100%" stopColor="rgba(62, 49, 102, 0)" />
            </linearGradient>
          </defs>
          
          {/* Structured cellular lines */}
          <path d="M10,30 Q50,10 90,30" stroke="url(#cellLine1)" strokeWidth="0.2" fill="none" />
          <path d="M10,50 Q50,30 90,50" stroke="url(#cellLine1)" strokeWidth="0.2" fill="none" />
          <path d="M10,70 Q50,90 90,70" stroke="url(#cellLine1)" strokeWidth="0.2" fill="none" />
          
          <path d="M30,10 Q10,50 30,90" stroke="url(#cellLine2)" strokeWidth="0.2" fill="none" />
          <path d="M50,10 Q90,50 50,90" stroke="url(#cellLine2)" strokeWidth="0.2" fill="none" />
          <path d="M70,10 Q30,50 70,90" stroke="url(#cellLine2)" strokeWidth="0.2" fill="none" />
          
          <circle cx="30" cy="30" r="1" fill="rgba(255, 135, 67, 0.3)">
            <animate attributeName="r" values="0.5;1.5;0.5" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="70" cy="70" r="1" fill="rgba(62, 49, 102, 0.3)">
            <animate attributeName="r" values="0.5;1;0.5" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="50" r="1" fill="rgba(255, 255, 255, 0.4)">
            <animate attributeName="r" values="0.5;2;0.5" dur="10s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default CentralBackgroundLogo;
