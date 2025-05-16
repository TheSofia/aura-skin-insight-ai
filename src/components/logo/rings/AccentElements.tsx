
import React from 'react';
import { IntensityLevel } from '../../../types/logo';

interface AccentElementsProps {
  innerRingSize: string;
  outerRingSize: string;
  intensity: IntensityLevel;
}

const AccentElements: React.FC<AccentElementsProps> = ({ innerRingSize, outerRingSize, intensity }) => {
  return (
    <>
      {/* Subtle violet accent ring - adding a hint of color */}
      <div 
        className={`absolute rounded-full animate-cellular-ring-drift z-6`}
        style={{
          width: `calc(${innerRingSize.split(' ')[0]} * 1.25)`,
          height: `calc(${innerRingSize.split(' ')[1]} * 1.25)`,
          border: `0.5px solid rgba(110, 89, 165, ${intensity === 'vibrant' ? 0.20 : intensity === 'subtle' ? 0.08 : 0.14})`,
          animationDuration: '22s',
          animationDelay: '0.5s',
          opacity: 0.85,
          filter: 'blur(0.3px)'
        }}
      ></div>

      {/* Irregular morphing shape for added organic movement */}
      {intensity !== 'subtle' && (
        <div 
          className="absolute z-2 animate-morph-enhanced"
          style={{
            width: `calc(${outerRingSize.split(' ')[0]} * 1.3)`,
            height: `calc(${outerRingSize.split(' ')[1]} * 1.3)`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, 
              rgba(110, 89, 165, ${intensity === 'vibrant' ? 0.04 : 0.02}) 0%, 
              transparent 70%)`,
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            animationDuration: '15s'
          }}
        ></div>
      )}

      {/* Subtle golden plasma accent - for depth and warmth */}
      {intensity === 'vibrant' && (
        <div 
          className="absolute rounded-full animate-pulse-cellular z-4"
          style={{
            width: `calc(${innerRingSize.split(' ')[0]} * 0.9)`,
            height: `calc(${innerRingSize.split(' ')[1]} * 0.9)`,
            background: `radial-gradient(circle, 
              rgba(249, 215, 165, 0.08) 0%, 
              transparent 80%)`,
            animationDuration: '8s',
            filter: 'blur(1px)'
          }}
        ></div>
      )}
    </>
  );
};

export default AccentElements;
