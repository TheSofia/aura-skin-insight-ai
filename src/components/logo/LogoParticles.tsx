
import React from 'react';
import { AnimationStyle } from '../../utils/logoAnimations';
import { IntensityLevel } from '../../types/logo';
import StandardParticles from './particles/StandardParticles';
import SynapticSparks from './particles/SynapticSparks';
import EffectLayers from './particles/EffectLayers';

type LogoParticlesProps = {
  colorClasses: { core: string };
  animationClasses: { particles: string };
  animationStyle: AnimationStyle;
  intensity?: IntensityLevel;
  particleOpacity?: number;
};

const LogoParticles: React.FC<LogoParticlesProps> = ({ 
  colorClasses, 
  animationClasses,
  animationStyle,
  intensity = 'medium',
  particleOpacity
}) => {
  return (
    <div className="absolute inset-0 overflow-visible">
      {/* Standard particles */}
      <StandardParticles 
        animationClasses={animationClasses}
        intensity={intensity} 
        particleOpacity={particleOpacity}
      />
      
      {/* Neural connection visualization */}
      <SynapticSparks intensity={intensity} />
      
      {/* Glow and ring effects */}
      <EffectLayers intensity={intensity} />
    </div>
  );
};

export default LogoParticles;
