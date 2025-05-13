
import React from 'react';
import { AnimationStyle } from '../../utils/logoAnimations';

type LogoRingsProps = {
  innerRingSize: string;
  outerRingSize: string;
  colorClasses: { innerRing: string; outerRing: string };
  animationClasses: { innerRing: string; outerRing: string };
  animationStyle: AnimationStyle;
  intensity?: 'subtle' | 'medium' | 'vibrant';
  isLandingPage?: boolean; // Controls ring visibility for landing page
  isLoadingPage?: boolean; // Added to specifically identify loading page context
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
  // Adjust ring characteristics based on intensity and context
  const getIntensityStyles = () => {
    // Base styles determined by intensity
    let baseStyles = {
      innerOpacity: 0.06,
      outerOpacity: 0.04,
      innerBorderOpacity: 0.15,
      outerBorderOpacity: 0.1,
      blurFactor: 0.5,
      innerDuration: '12s',
      outerDuration: '15s',
      membraneOpacity: 0.1, // Added membrane element opacity
      membraneBlur: 0.7 // Added membrane blur factor
    };
    
    // Adjust for intensity levels
    switch (intensity) {
      case 'subtle':
        baseStyles = {
          innerOpacity: 0.04,
          outerOpacity: 0.03,
          innerBorderOpacity: 0.12,
          outerBorderOpacity: 0.08,
          blurFactor: 0.4,
          innerDuration: '14s',
          outerDuration: '18s',
          membraneOpacity: 0.08,
          membraneBlur: 0.6
        };
        break;
      case 'vibrant':
        baseStyles = {
          innerOpacity: 0.08,
          outerOpacity: 0.05,
          innerBorderOpacity: 0.2,
          outerBorderOpacity: 0.15,
          blurFactor: 0.7,
          innerDuration: '10s',
          outerDuration: '12s',
          membraneOpacity: 0.12,
          membraneBlur: 0.8
        };
        break;
      default: // medium - already set in baseStyles
        break;
    }
    
    // Apply landing page contextual adjustments - SUBTLE but STILL VISIBLE
    if (isLandingPage) {
      baseStyles = {
        ...baseStyles,
        innerOpacity: baseStyles.innerOpacity * 0.7, // 30% more transparent on landing page
        outerOpacity: baseStyles.outerOpacity * 0.7, // 30% more transparent on landing page
        innerBorderOpacity: baseStyles.innerBorderOpacity * 0.7, // 30% more transparent on landing page
        outerBorderOpacity: baseStyles.outerBorderOpacity * 0.7, // 30% more transparent on landing page
        blurFactor: baseStyles.blurFactor * 0.8, // More subtle blur for landing page
        innerDuration: (parseFloat(baseStyles.innerDuration) * 1.2) + 's', // 20% slower on landing page for gentler motion
        outerDuration: (parseFloat(baseStyles.outerDuration) * 1.2) + 's', // 20% slower on landing page for gentler motion
        membraneOpacity: baseStyles.membraneOpacity * 0.7, // 30% more transparent membrane on landing page
        membraneBlur: baseStyles.membraneBlur * 0.8 // More subtle membrane blur for landing page
      };
    }
    
    // Apply loading page adjustments (more visible rings)
    if (isLoadingPage) {
      baseStyles = {
        ...baseStyles,
        innerOpacity: baseStyles.innerOpacity * 1.4, // 40% more visible on loading page
        outerOpacity: baseStyles.outerOpacity * 1.5, // 50% more visible on loading page
        innerBorderOpacity: baseStyles.innerBorderOpacity * 1.3, // 30% more visible on loading page
        outerBorderOpacity: baseStyles.outerBorderOpacity * 1.4, // 40% more visible on loading page
        blurFactor: baseStyles.blurFactor * 1.2, // Enhanced blur for loading page
        innerDuration: (parseFloat(baseStyles.innerDuration) * 0.9) + 's', // 10% faster on loading page
        outerDuration: (parseFloat(baseStyles.outerDuration) * 0.9) + 's', // 10% faster on loading page
        membraneOpacity: baseStyles.membraneOpacity * 1.4, // 40% more visible membrane on loading page
        membraneBlur: baseStyles.membraneBlur * 1.2 // Enhanced membrane blur for loading page
      };
    }
    
    return baseStyles;
  };

  const intensityStyles = getIntensityStyles();

  // Always show all structural elements, just adjust visibility based on context
  return (
    <>
      {/* Semi-transparent irregular circular membrane that surrounds the cells */}
      <div 
        className="absolute rounded-full animate-cellular-motion z-5"
        style={{
          width: `calc(${innerRingSize.split(' ')[0]} * 2.2)`,
          height: `calc(${innerRingSize.split(' ')[1]} * 2.2)`,
          background: `radial-gradient(circle, rgba(255, 255, 255, ${intensityStyles.membraneOpacity * 1.2}) 0%, rgba(255, 255, 255, ${intensityStyles.membraneOpacity * 0.8}) 40%, rgba(255, 255, 255, ${intensityStyles.membraneOpacity * 0.3}) 70%, transparent 100%)`,
          backdropFilter: `blur(${intensityStyles.membraneBlur}px)`,
          animationDuration: '17s',
          animationTimingFunction: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
        }}
      ></div>

      {/* Inner ring with subtle clarity */}
      <div 
        className={`absolute ${innerRingSize} rounded-full ${animationClasses.innerRing} z-10
          transition-transform duration-300 backdrop-blur-[0.5px]`}
        style={{
          background: `rgba(255, 255, 255, ${intensityStyles.innerOpacity})`,
          boxShadow: `inset 0 0 0 1px rgba(255, 255, 255, ${intensityStyles.innerBorderOpacity})`,
          backdropFilter: `blur(${intensityStyles.blurFactor}px)`,
          animationDuration: intensityStyles.innerDuration,
          animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
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
          animationDuration: intensityStyles.outerDuration,
          animationTimingFunction: 'cubic-bezier(0.37, 0, 0.63, 1)',
        }}
      ></div>

      {/* Middle ring - always show regardless of context */}
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
          opacity: isLandingPage ? 0.7 : 1, // Slightly more subtle on landing page but still visible
        }}
      ></div>
      
      {/* Additional outer halo - subtle glow around entire structure */}
      <div
        className="absolute rounded-full animate-pulse-slow"
        style={{
          width: `calc(${outerRingSize.split(' ')[0]} * 1.2)`,
          height: `calc(${outerRingSize.split(' ')[1]} * 1.2)`,
          background: `radial-gradient(circle, rgba(255, 255, 255, ${intensityStyles.outerOpacity * 0.6}) 0%, transparent 80%)`,
          animationDuration: '20s',
          opacity: isLandingPage ? 0.5 : 0.8, // More subtle on landing page
        }}
      ></div>
    </>
  );
};

export default LogoRings;
