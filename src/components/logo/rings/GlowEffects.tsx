
import React from 'react';
import { IntensityLevel, IntensityStyles } from '../../../types/logo';

interface GlowEffectsProps {
  outerRingSize: string;
  intensityStyles: IntensityStyles;
  intensity: IntensityLevel;
}

const GlowEffects: React.FC<GlowEffectsProps> = ({ outerRingSize, intensityStyles, intensity }) => {
  return (
    <>
      {/* Additional outer halo - enhanced glow */}
      <div
        className="absolute rounded-full animate-pulse-slow"
        style={{
          width: `calc(${outerRingSize.split(' ')[0]} * 1.2)`,
          height: `calc(${outerRingSize.split(' ')[1]} * 1.2)`,
          background: `radial-gradient(circle, rgba(255, 255, 255, ${intensityStyles.outerOpacity * 0.8}) 0%, transparent 85%)`,
          animationDuration: '25s',
          opacity: 0.9,
        }}
      ></div>

      {/* Pulsing ring for more fluidity and layering */}
      <div 
        className={`absolute rounded-full animate-pulse-cellular z-4`}
        style={{
          width: `calc(${outerRingSize.split(' ')[0]} * 1.4)`,
          height: `calc(${outerRingSize.split(' ')[1]} * 1.4)`,
          border: `1px solid rgba(255, 255, 255, ${intensityStyles.outerBorderOpacity * 0.6})`,
          animationDuration: '30s',
          opacity: 0.7,
          filter: 'blur(0.5px)'
        }}
      ></div>

      {/* Outer ethereal ring that slowly rotates */}
      <div 
        className={`absolute rounded-full animate-orbital-shift z-3`}
        style={{
          width: `calc(${outerRingSize.split(' ')[0]} * 1.6)`,
          height: `calc(${outerRingSize.split(' ')[1]} * 1.6)`,
          border: `0.5px solid rgba(255, 255, 255, ${intensityStyles.outerBorderOpacity * 0.5})`,
          animationDuration: '40s',
          opacity: 0.6,
          filter: 'blur(0.7px)'
        }}
      ></div>
    </>
  );
};

export default GlowEffects;
