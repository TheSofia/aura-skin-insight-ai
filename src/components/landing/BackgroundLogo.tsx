
import React, { useRef } from 'react';
import { useBackgroundLogoEffects } from '@/hooks/useBackgroundLogoEffects';
import CentralLogo from './logo/CentralLogo';
import RadialGlow from './logo/RadialGlow';
import AtmosphericParticles from './logo/AtmosphericParticles';
import LightTendrils from './logo/LightTendrils';
import LightRefractionPatterns from './logo/LightRefractionPatterns';
import CursorEffects from './logo/CursorEffects';
import Enhanced3DLogo from './logo/Enhanced3DLogo';

interface BackgroundLogoProps {
  className?: string;
}

const BackgroundLogo: React.FC<BackgroundLogoProps> = ({ className = '' }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  
  const {
    isVisible,
    scrollPosition,
    mousePosition,
    interactionIntensity,
    cursorProximity,
    dynamicScale,
    dynamicOpacity,
    dynamicBlur
  } = useBackgroundLogoEffects();
  
  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {/* Enhanced 3D Logo Layer - positioned behind existing logo */}
      <Enhanced3DLogo isVisible={isVisible} />
      
      {/* Main central logo - significantly larger and more dominant with proximity effects */}
      <CentralLogo
        isVisible={isVisible}
        dynamicOpacity={dynamicOpacity}
        dynamicBlur={dynamicBlur}
        dynamicScale={dynamicScale}
        scrollPosition={scrollPosition}
        mousePosition={mousePosition}
        logoRef={logoRef}
      />
      
      {/* Enhanced radial light emission effect with dynamic interaction */}
      <RadialGlow 
        isVisible={isVisible}
        interactionIntensity={interactionIntensity}
        cursorProximity={cursorProximity}
      />
      
      {/* Enhanced subtle particles with improved motion and cursor reactivity */}
      <AtmosphericParticles 
        isVisible={isVisible}
        cursorProximity={cursorProximity}
      />
      
      {/* Light tendrils that emanate from center - enhanced hypnotic element with cursor reactivity */}
      <LightTendrils 
        isVisible={isVisible}
        cursorProximity={cursorProximity}
      />
      
      {/* Atmospheric light refraction patterns with cursor reactivity */}
      <LightRefractionPatterns 
        isVisible={isVisible}
        cursorProximity={cursorProximity}
      />
      
      {/* Interactive cursor-responsive effects */}
      <CursorEffects 
        isVisible={isVisible}
        cursorProximity={cursorProximity}
        interactionIntensity={interactionIntensity}
      />
    </div>
  );
};

export default BackgroundLogo;
