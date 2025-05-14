
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
      innerOpacity: 0.12,
      outerOpacity: 0.085,
      innerBorderOpacity: 0.26,
      outerBorderOpacity: 0.18,
      blurFactor: 0.5,
      innerDuration: '14s',
      outerDuration: '18s',
      membraneOpacity: 0.16,
      membraneBlur: 0.7
    };
    
    // Adjust for intensity levels but maintain higher visibility across all contexts
    switch (intensity) {
      case 'subtle':
        baseStyles = {
          innerOpacity: 0.10,
          outerOpacity: 0.07,
          innerBorderOpacity: 0.20,
          outerBorderOpacity: 0.14,
          blurFactor: 0.4,
          innerDuration: '20s',
          outerDuration: '24s',
          membraneOpacity: 0.13,
          membraneBlur: 0.5
        };
        break;
      case 'vibrant':
        baseStyles = {
          innerOpacity: 0.14,
          outerOpacity: 0.095,
          innerBorderOpacity: 0.30,
          outerBorderOpacity: 0.22,
          blurFactor: 0.6,
          innerDuration: '12s',
          outerDuration: '15s',
          membraneOpacity: 0.18,
          membraneBlur: 0.75
        };
        break;
      default: // medium - already set in baseStyles with improved values
        break;
    }
    
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
          opacity: 1,
        }}
      ></div>
      
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

      {/* NEW: Subtle violet accent ring - adding a hint of color */}
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

      {/* NEW: Irregular morphing shape for added organic movement */}
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

      {/* NEW: Subtle golden plasma accent - for depth and warmth */}
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

export default LogoRings;
