
import React from 'react';
import { AnimationStyle } from '../../utils/logoAnimations';

type LogoRingsProps = {
  innerRingSize: string;
  outerRingSize: string;
  colorClasses: { innerRing: string; outerRing: string };
  animationClasses: { innerRing: string; outerRing: string };
  animationStyle: AnimationStyle;
  intensity?: 'subtle' | 'medium' | 'vibrant';
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
  // Adjusted to match the loading page screenshot - more visible rings regardless of context
  const getIntensityStyles = () => {
    // Base styles determined by intensity
    let baseStyles = {
      innerOpacity: 0.08, // Increased from 0.06 to match loading page
      outerOpacity: 0.05, // Increased from 0.04 to match loading page
      innerBorderOpacity: 0.18, // Increased from 0.15 to match loading page
      outerBorderOpacity: 0.12, // Increased from 0.1 to match loading page
      blurFactor: 0.5,
      innerDuration: '14s',
      outerDuration: '18s',
      membraneOpacity: 0.12, // Increased from 0.1 to match loading page
      membraneBlur: 0.7
    };
    
    // Adjust for intensity levels
    switch (intensity) {
      case 'subtle':
        baseStyles = {
          innerOpacity: 0.06, // Increased from 0.03 to match loading page
          outerOpacity: 0.04, // Increased from 0.02 to match loading page
          innerBorderOpacity: 0.14, // Increased from 0.09 to match loading page
          outerBorderOpacity: 0.09, // Increased from 0.06 to match loading page
          blurFactor: 0.4,
          innerDuration: '20s',
          outerDuration: '24s',
          membraneOpacity: 0.08, // Increased from 0.05 to match loading page
          membraneBlur: 0.5
        };
        break;
      case 'vibrant':
        baseStyles = {
          innerOpacity: 0.09, // Increased from 0.07 to match loading page
          outerOpacity: 0.055, // Increased from 0.045 to match loading page
          innerBorderOpacity: 0.22, // Increased from 0.18 to match loading page
          outerBorderOpacity: 0.14, // Increased from 0.12 to match loading page
          blurFactor: 0.6,
          innerDuration: '12s',
          outerDuration: '15s',
          membraneOpacity: 0.13, // Increased from 0.11 to match loading page
          membraneBlur: 0.75
        };
        break;
      default: // medium - already set in baseStyles
        break;
    }
    
    // All contexts now show rings with similar visibility to match loading page
    return baseStyles;
  };

  const intensityStyles = getIntensityStyles();

  return (
    <>
      {/* Semi-transparent irregular cellular membrane - refined for biological elegance */}
      <div 
        className="absolute rounded-full animate-cellular-motion z-5"
        style={{
          width: `calc(${innerRingSize.split(' ')[0]} * 2.2)`,
          height: `calc(${innerRingSize.split(' ')[1]} * 2.2)`,
          background: `radial-gradient(circle, rgba(255, 255, 255, ${intensityStyles.membraneOpacity * 1.2}) 0%, rgba(255, 255, 255, ${intensityStyles.membraneOpacity * 0.8}) 40%, rgba(255, 255, 255, ${intensityStyles.membraneOpacity * 0.3}) 70%, transparent 100%)`,
          backdropFilter: `blur(${intensityStyles.membraneBlur}px)`,
          animationDuration: '22s',
          animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
        }}
      ></div>

      {/* Inner ring with subtle clarity - refined for organic feel */}
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
      
      {/* Outer ring with subtle clarity - enhanced organic motion */}
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

      {/* Middle ring - always show regardless of context - refined biological motion */}
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
          opacity: 1, // Always fully visible to match loading page
        }}
      ></div>
      
      {/* Additional outer halo - subtle ethereal glow around entire structure */}
      <div
        className="absolute rounded-full animate-pulse-slow"
        style={{
          width: `calc(${outerRingSize.split(' ')[0]} * 1.2)`,
          height: `calc(${outerRingSize.split(' ')[1]} * 1.2)`,
          background: `radial-gradient(circle, rgba(255, 255, 255, ${intensityStyles.outerOpacity * 0.6}) 0%, transparent 85%)`,
          animationDuration: '25s',
          opacity: 0.85, // Always more visible to match loading page
        }}
      ></div>
    </>
  );
};

export default LogoRings;
