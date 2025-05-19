
import React, { useRef } from 'react';
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
  
  // Calculate dynamic properties for the background logo
  const dynamicOpacity = Math.max(0.3, 0.8 - (scrollPosition / 1000));
  const dynamicBlur = Math.min(8, scrollPosition / 200);
  const dynamicScale = Math.max(3.0, 4.0 - (scrollPosition / 1000));
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <div 
        className={`transition-all duration-3000 ease-out transform ${
          isVisible ? 'opacity-30 scale-[3.2]' : 'opacity-0 scale-[2.2]'
        }`}
        style={{ 
          opacity: dynamicOpacity,
          filter: `blur(${dynamicBlur}px)`,
          transform: `scale(${dynamicScale}) translateY(${-scrollPosition * 0.05}px) translateX(${mousePosition.x * 0.6}px) translateY(${mousePosition.y * 0.6}px)`,
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
          intensity={intensity} 
          isLandingPage={true} 
          isLoadingPage={false} 
        />
      </div>
    </div>
  );
};

export default CentralBackgroundLogo;
