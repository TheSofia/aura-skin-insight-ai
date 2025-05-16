
import React from 'react';
import { AnimationStyle } from '../../utils/logoAnimations';
import { IntensityLevel } from '../../types/logo';
import CellularMembrane from './rings/CellularMembrane';
import PrimaryRings from './rings/PrimaryRings';
import GlowEffects from './rings/GlowEffects';
import AccentElements from './rings/AccentElements';
import { useRingIntensityStyles } from './rings/useRingIntensityStyles';

type LogoRingsProps = {
  innerRingSize: string;
  outerRingSize: string;
  colorClasses: { innerRing: string; outerRing: string };
  animationClasses: { innerRing: string; outerRing: string };
  animationStyle: AnimationStyle;
  intensity?: IntensityLevel;
  isLandingPage?: boolean;
  isLoadingPage?: boolean;
};

const LogoRings: React.FC<LogoRingsProps> = ({ 
  innerRingSize, 
  outerRingSize, 
  colorClasses, 
  animationClasses,
  animationStyle,
  intensity = 'medium',
  isLandingPage = false,
  isLoadingPage = false
}) => {
  // Get intensity styles using our new hook
  const intensityStyles = useRingIntensityStyles(intensity, isLandingPage, isLoadingPage);

  return (
    <>
      {/* Enhanced semi-transparent irregular cellular membrane */}
      <CellularMembrane 
        innerRingSize={innerRingSize}
        intensityStyles={intensityStyles}
      />

      {/* Primary inner, middle and outer rings */}
      <PrimaryRings
        innerRingSize={innerRingSize}
        outerRingSize={outerRingSize}
        animationClasses={animationClasses}
        intensityStyles={intensityStyles}
      />
      
      {/* Glow effects and additional outer rings */}
      <GlowEffects
        outerRingSize={outerRingSize}
        intensityStyles={intensityStyles}
        intensity={intensity}
      />

      {/* Accent elements - color hints and special effects */}
      <AccentElements
        innerRingSize={innerRingSize}
        outerRingSize={outerRingSize}
        intensity={intensity}
      />
    </>
  );
};

export default LogoRings;
