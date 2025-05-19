
import React from 'react';
import DynamicLogo from '@/components/DynamicLogo';
import { IntensityLevel } from '@/types/logo';

type CentralLogoProps = {
  isVisible: boolean;
  dynamicOpacity: number;
  dynamicBlur: number;
  dynamicScale: number;
  scrollPosition: number;
  mousePosition: {x: number, y: number};
  logoRef: React.RefObject<HTMLDivElement>;
};

const CentralLogo: React.FC<CentralLogoProps> = ({ 
  isVisible,
  dynamicOpacity,
  dynamicBlur,
  dynamicScale,
  scrollPosition,
  mousePosition,
  logoRef
}) => {
  // Define the intensity level correctly
  const logoIntensity: IntensityLevel = "hypnotic";
  
  return (
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
  );
};

export default CentralLogo;
