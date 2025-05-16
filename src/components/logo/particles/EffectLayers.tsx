
import React from 'react';
import { IntensityLevel } from '../../../types/logo';

interface EffectLayersProps {
  intensity: IntensityLevel;
}

const EffectLayers: React.FC<EffectLayersProps> = ({ intensity }) => {
  return (
    <>
      {/* Enhanced central pulsing glow effect */}
      <div
        className="absolute rounded-full animate-pulse-cellular z-5"
        style={{
          width: '95%',
          height: '95%',
          left: '2.5%',
          top: '2.5%',
          background: 'radial-gradient(circle, rgba(242, 150, 105, 0.09) 0%, transparent 75%)',
          filter: 'blur(2px)',
          opacity: intensity === 'vibrant' ? 0.15 : intensity === 'subtle' ? 0.07 : 0.10,
          animationDuration: '12s',
        }}
      ></div>

      {/* Outer sonar rings that emanate periodically */}
      {intensity !== 'subtle' && (
        <div 
          className={`absolute rounded-full z-3`}
          style={{
            width: '90%',
            height: '90%',
            left: '5%',
            top: '5%',
            border: '0.5px solid rgba(255, 255, 255, 0.3)',
            opacity: 0,
            animation: 'sonar-ring 4s infinite',
            animationTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)',
            animationDelay: '1s'
          }}
        ></div>
      )}
      
      {intensity === 'vibrant' && (
        <div 
          className={`absolute rounded-full z-2`}
          style={{
            width: '85%',
            height: '85%',
            left: '7.5%',
            top: '7.5%',
            border: '0.5px solid rgba(110, 89, 165, 0.25)',
            opacity: 0,
            animation: 'sonar-ring 5s infinite',
            animationTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)',
            animationDelay: '2.5s'
          }}
        ></div>
      )}
    </>
  );
};

export default EffectLayers;
