
import React from 'react';
import { AnimationStyle } from '../../utils/logoAnimations';

type LogoRingsProps = {
  innerRingSize: string;
  outerRingSize: string;
  colorClasses: { innerRing: string; outerRing: string };
  animationClasses: { innerRing: string; outerRing: string };
  animationStyle: AnimationStyle;
  intensity?: 'subtle' | 'medium' | 'vibrant';
};

const LogoRings: React.FC<LogoRingsProps> = ({ 
  innerRingSize, 
  outerRingSize, 
  colorClasses, 
  animationClasses,
  animationStyle,
  intensity = 'medium'
}) => {
  // Adjust ring characteristics based on intensity
  const getIntensityStyles = () => {
    switch (intensity) {
      case 'subtle':
        return {
          innerOpacity: 0.04,
          outerOpacity: 0.03,
          innerBorderOpacity: 0.12,
          outerBorderOpacity: 0.08,
          blurFactor: 0.4,
          innerDuration: '14s',
          outerDuration: '18s'
        };
      case 'vibrant':
        return {
          innerOpacity: 0.08,
          outerOpacity: 0.05,
          innerBorderOpacity: 0.2,
          outerBorderOpacity: 0.15,
          blurFactor: 0.7,
          innerDuration: '10s',
          outerDuration: '12s'
        };
      default: // medium
        return {
          innerOpacity: 0.06,
          outerOpacity: 0.04,
          innerBorderOpacity: 0.15,
          outerBorderOpacity: 0.1,
          blurFactor: 0.5,
          innerDuration: '12s',
          outerDuration: '15s'
        };
    }
  };

  const intensityStyles = getIntensityStyles();

  return (
    <>
      {/* Inner ring with subtle clarity */}
      <div 
        className={`absolute ${innerRingSize} rounded-full ${animationClasses.innerRing} z-10
          transition-transform duration-300 backdrop-blur-[0.5px]`}
        style={{
          background: `rgba(255, 255, 255, ${intensityStyles.innerOpacity})`,
          boxShadow: `inset 0 0 0 1px rgba(255, 255, 255, ${intensityStyles.innerBorderOpacity})`,
          backdropFilter: `blur(${intensityStyles.blurFactor}px)`,
          animationDuration: animationStyle === 'cellular' ? intensityStyles.innerDuration : undefined,
          animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.4, 0, 0.6, 1)' : undefined,
        }}
      ></div>
      
      {/* Outer ring with subtle clarity */}
      <div 
        className={`absolute ${outerRingSize} rounded-full ${animationClasses.outerRing} 
          transition-transform duration-300 backdrop-blur-[0.2px]`}
        style={{
          background: `rgba(255, 255, 255, ${intensityStyles.outerOpacity})`,
          boxShadow: `inset 0 0 0 1px rgba(255, 255, 255, ${intensityStyles.outerBorderOpacity})`,
          backdropFilter: `blur(${intensityStyles.blurFactor * 0.4}px)`,
          animationDuration: animationStyle === 'cellular' ? intensityStyles.outerDuration : undefined,
          animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.37, 0, 0.63, 1)' : undefined,
        }}
      ></div>

      {/* Additional middle ring for more layered effect (visible only in medium and vibrant modes) */}
      {intensity !== 'subtle' && (
        <div 
          className={`absolute rounded-full animate-cellular-ring-drift z-5`}
          style={{
            width: `calc(${innerRingSize.split(' ')[0]} * 1.5)`,
            height: `calc(${innerRingSize.split(' ')[1]} * 1.5)`,
            background: `rgba(255, 255, 255, ${intensityStyles.innerOpacity * 0.7})`,
            boxShadow: `inset 0 0 0 1px rgba(255, 255, 255, ${intensityStyles.innerBorderOpacity * 0.7})`,
            backdropFilter: `blur(${intensityStyles.blurFactor * 0.6}px)`,
            animationDuration: '13s',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
          }}
        ></div>
      )}
    </>
  );
};

export default LogoRings;
