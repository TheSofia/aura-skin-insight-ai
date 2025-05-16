
import React from 'react';
import { AnimationStyle } from '../../../utils/logoAnimations';
import { IntensityStyles } from '../../../types/logo';

interface PrimaryRingsProps {
  innerRingSize: string;
  outerRingSize: string;
  animationClasses: { innerRing: string; outerRing: string };
  intensityStyles: IntensityStyles;
}

const PrimaryRings: React.FC<PrimaryRingsProps> = ({ 
  innerRingSize, 
  outerRingSize, 
  animationClasses, 
  intensityStyles 
}) => {
  return (
    <>
      {/* Inner ring with improved clarity */}
      <div 
        className={`absolute ${innerRingSize} rounded-full ${animationClasses.innerRing} z-10
          transition-all duration-500 backdrop-blur-[0.5px]`}
        style={{
          background: `rgba(255, 255, 255, ${intensityStyles.innerOpacity})`,
          boxShadow: `inset 0 0 0 1px rgba(255, 255, 255, ${intensityStyles.innerBorderOpacity})`,
          backdropFilter: `blur(${intensityStyles.blurFactor}px)`,
          animationDuration: intensityStyles.innerDuration,
          animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
        }}
      ></div>
      
      {/* Outer ring with improved clarity */}
      <div 
        className={`absolute ${outerRingSize} rounded-full ${animationClasses.outerRing} 
          transition-all duration-500 backdrop-blur-[0.2px]`}
        style={{
          background: `rgba(255, 255, 255, ${intensityStyles.outerOpacity})`,
          boxShadow: `inset 0 0 0 1px rgba(255, 255, 255, ${intensityStyles.outerBorderOpacity})`,
          backdropFilter: `blur(${intensityStyles.blurFactor * 0.4}px)`,
          animationDuration: intensityStyles.outerDuration,
          animationTimingFunction: 'cubic-bezier(0.45, 0, 0.55, 1)',
        }}
      ></div>

      {/* Middle ring - enhanced visibility */}
      <div 
        className={`absolute rounded-full animate-cellular-ring-drift z-5`}
        style={{
          width: `calc(${innerRingSize.split(' ')[0]} * 1.5)`,
          height: `calc(${innerRingSize.split(' ')[1]} * 1.5)`,
          background: `rgba(255, 255, 255, ${intensityStyles.innerOpacity * 0.7})`,
          boxShadow: `inset 0 0 0 1px rgba(255, 255, 255, ${intensityStyles.innerBorderOpacity * 0.7})`,
          backdropFilter: `blur(${intensityStyles.blurFactor * 0.6}px)`,
          animationDuration: '18s',
          animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
          opacity: 1,
        }}
      ></div>
    </>
  );
};

export default PrimaryRings;
