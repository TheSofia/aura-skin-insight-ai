
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
      outerDuration: '15s'
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
          outerDuration: '18s'
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
          outerDuration: '12s'
        };
        break;
      default: // medium - already set in baseStyles
        break;
    }
    
    // First apply landing page adjustments - make rings nearly invisible
    if (isLandingPage) {
      baseStyles = {
        ...baseStyles,
        innerOpacity: baseStyles.innerOpacity * 0.3, // 70% more transparent on landing page
        outerOpacity: baseStyles.outerOpacity * 0.25, // 75% more transparent on landing page
        innerBorderOpacity: baseStyles.innerBorderOpacity * 0.3, // 70% more transparent on landing page
        outerBorderOpacity: baseStyles.outerBorderOpacity * 0.25, // 75% more transparent on landing page
        blurFactor: baseStyles.blurFactor * 0.5 // More subtle blur for landing page
      };
    }
    
    // Then apply loading page adjustments (more visible rings)
    if (isLoadingPage) {
      baseStyles = {
        ...baseStyles,
        innerOpacity: baseStyles.innerOpacity * 1.4, // 40% more visible on loading page
        outerOpacity: baseStyles.outerOpacity * 1.5, // 50% more visible on loading page
        innerBorderOpacity: baseStyles.innerBorderOpacity * 1.3, // 30% more visible on loading page
        outerBorderOpacity: baseStyles.outerBorderOpacity * 1.4, // 40% more visible on loading page
        blurFactor: baseStyles.blurFactor * 1.2, // Enhanced blur for loading page
        innerDuration: (parseFloat(baseStyles.innerDuration) * 0.9) + 's', // 10% faster on loading page
        outerDuration: (parseFloat(baseStyles.outerDuration) * 0.9) + 's' // 10% faster on loading page
      };
    }
    
    return baseStyles;
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

      {/* Additional middle ring for more layered effect (visible only in medium and vibrant modes, and always visible on loading page) */}
      {(intensity !== 'subtle' || isLoadingPage) && (
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
            opacity: isLandingPage ? 0.7 : 1, // More subtle on landing page
          }}
        ></div>
      )}
    </>
  );
};

export default LogoRings;
