
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
  // Adjust ring characteristics based on intensity and context for biologically elegant motion
  const getIntensityStyles = () => {
    // Base styles determined by intensity
    let baseStyles = {
      innerOpacity: 0.06,
      outerOpacity: 0.04,
      innerBorderOpacity: 0.15,
      outerBorderOpacity: 0.1,
      blurFactor: 0.5,
      innerDuration: '14s',
      outerDuration: '18s',
      membraneOpacity: 0.1,
      membraneBlur: 0.7
    };
    
    // Adjust for intensity levels
    switch (intensity) {
      case 'subtle':
        baseStyles = {
          innerOpacity: 0.04,
          outerOpacity: 0.025,
          innerBorderOpacity: 0.12,
          outerBorderOpacity: 0.07,
          blurFactor: 0.4,
          innerDuration: '17s',
          outerDuration: '20s',
          membraneOpacity: 0.07,
          membraneBlur: 0.5
        };
        break;
      case 'vibrant':
        baseStyles = {
          innerOpacity: 0.07,
          outerOpacity: 0.045,
          innerBorderOpacity: 0.18,
          outerBorderOpacity: 0.12,
          blurFactor: 0.6,
          innerDuration: '12s',
          outerDuration: '15s',
          membraneOpacity: 0.11,
          membraneBlur: 0.75
        };
        break;
      default: // medium - already set in baseStyles
        break;
    }
    
    // Apply landing page contextual adjustments - SUBTLE but STILL VISIBLE
    if (isLandingPage) {
      baseStyles = {
        ...baseStyles,
        innerOpacity: baseStyles.innerOpacity * 0.75, 
        outerOpacity: baseStyles.outerOpacity * 0.75, 
        innerBorderOpacity: baseStyles.innerBorderOpacity * 0.75, 
        outerBorderOpacity: baseStyles.outerBorderOpacity * 0.75, 
        blurFactor: baseStyles.blurFactor * 0.85,
        innerDuration: (parseFloat(baseStyles.innerDuration) * 1.15) + 's', 
        outerDuration: (parseFloat(baseStyles.outerDuration) * 1.15) + 's',
        membraneOpacity: baseStyles.membraneOpacity * 0.75,
        membraneBlur: baseStyles.membraneBlur * 0.85
      };
    }
    
    // Apply loading page adjustments (more visible rings)
    if (isLoadingPage) {
      baseStyles = {
        ...baseStyles,
        innerOpacity: baseStyles.innerOpacity * 1.35,
        outerOpacity: baseStyles.outerOpacity * 1.4,
        innerBorderOpacity: baseStyles.innerBorderOpacity * 1.25, 
        outerBorderOpacity: baseStyles.outerBorderOpacity * 1.3, 
        blurFactor: baseStyles.blurFactor * 1.15,
        innerDuration: (parseFloat(baseStyles.innerDuration) * 0.85) + 's',
        outerDuration: (parseFloat(baseStyles.outerDuration) * 0.85) + 's',
        membraneOpacity: baseStyles.membraneOpacity * 1.3,
        membraneBlur: baseStyles.membraneBlur * 1.15
      };
    }
    
    return baseStyles;
  };

  const intensityStyles = getIntensityStyles();

  // Always show all structural elements, just adjust visibility based on context
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
          animationDuration: '18s',
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
          animationDuration: '15s',
          animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
          opacity: isLandingPage ? 0.75 : 1,
        }}
      ></div>
      
      {/* Additional outer halo - subtle ethereal glow around entire structure */}
      <div
        className="absolute rounded-full animate-pulse-slow"
        style={{
          width: `calc(${outerRingSize.split(' ')[0]} * 1.2)`,
          height: `calc(${outerRingSize.split(' ')[1]} * 1.2)`,
          background: `radial-gradient(circle, rgba(255, 255, 255, ${intensityStyles.outerOpacity * 0.6}) 0%, transparent 85%)`,
          animationDuration: '22s',
          opacity: isLandingPage ? 0.6 : 0.85,
        }}
      ></div>
    </>
  );
};

export default LogoRings;

