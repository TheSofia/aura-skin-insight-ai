
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
  // Enhanced visibility for a consistent look across all pages
  const getIntensityStyles = () => {
    // Base styles determined by intensity, but with improved visibility
    let baseStyles = {
      innerOpacity: 0.12, // Increased visibility
      outerOpacity: 0.085, // Increased visibility
      innerBorderOpacity: 0.26, // Increased visibility
      outerBorderOpacity: 0.18, // Increased visibility
      blurFactor: 0.5,
      innerDuration: '14s',
      outerDuration: '18s',
      membraneOpacity: 0.16, // Increased visibility
      membraneBlur: 0.7
    };
    
    // Adjust for intensity levels but maintain higher visibility across all contexts
    switch (intensity) {
      case 'subtle':
        baseStyles = {
          innerOpacity: 0.10, // Increased from 0.06 for better visibility
          outerOpacity: 0.07, // Increased from 0.04 for better visibility
          innerBorderOpacity: 0.20, // Increased from 0.14 for better visibility
          outerBorderOpacity: 0.14, // Increased from 0.09 for better visibility
          blurFactor: 0.4,
          innerDuration: '20s',
          outerDuration: '24s',
          membraneOpacity: 0.13, // Increased from 0.08 for better visibility
          membraneBlur: 0.5
        };
        break;
      case 'vibrant':
        baseStyles = {
          innerOpacity: 0.14, // Increased from 0.09 for better visibility
          outerOpacity: 0.095, // Increased from 0.055 for better visibility
          innerBorderOpacity: 0.30, // Increased from 0.22 for better visibility
          outerBorderOpacity: 0.22, // Increased from 0.14 for better visibility
          blurFactor: 0.6,
          innerDuration: '12s',
          outerDuration: '15s',
          membraneOpacity: 0.18, // Increased from 0.13 for better visibility
          membraneBlur: 0.75
        };
        break;
      default: // medium - already set in baseStyles with improved values
        break;
    }
    
    // All contexts now show consistent rings with improved visibility
    return baseStyles;
  };

  const intensityStyles = getIntensityStyles();

  return (
    <>
      {/* Enhanced semi-transparent irregular cellular membrane - refined for biological elegance */}
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
          opacity: 1, // Always fully visible for consistency
        }}
      ></div>
      
      {/* Additional outer halo - enhanced glow */}
      <div
        className="absolute rounded-full animate-pulse-slow"
        style={{
          width: `calc(${outerRingSize.split(' ')[0]} * 1.2)`,
          height: `calc(${outerRingSize.split(' ')[1]} * 1.2)`,
          background: `radial-gradient(circle, rgba(255, 255, 255, ${intensityStyles.outerOpacity * 0.8}) 0%, transparent 85%)`, // Increased from 0.6 to 0.8
          animationDuration: '25s',
          opacity: 0.9, // Increased from 0.85 for better visibility
        }}
      ></div>

      {/* New additional pulsing ring for more fluidity and layering */}
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

      {/* New outer ethereal ring that slowly rotates */}
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

export default LogoRings;
