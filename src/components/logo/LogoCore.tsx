
import React from 'react';
import { AnimationStyle } from '../../utils/logoAnimations';

type LogoCoreProps = {
  coreSize: string;
  colorClasses: { core: string; glow: string };
  animationClasses: { core: string };
  animationStyle: AnimationStyle;
  intensity?: 'subtle' | 'medium' | 'vibrant';
  isLoadingPage?: boolean; // Added to identify loading page context
};

const LogoCore: React.FC<LogoCoreProps> = ({ 
  coreSize, 
  colorClasses, 
  animationClasses, 
  animationStyle,
  intensity = 'medium',
  isLoadingPage = false
}) => {
  // Adjust core characteristics based on intensity and page context
  const getIntensityStyles = () => {
    // Base styles based on intensity
    let baseStyles = {
      opacity: 0.95,
      brightness: 1.0,
      pulseMagnitude: '1s',
      glowOpacity: 0.8,
      glowSize: '-20%'
    };
    
    switch (intensity) {
      case 'subtle':
        baseStyles = {
          opacity: 0.85,
          brightness: 0.95,
          pulseMagnitude: '0.8s',
          glowOpacity: 0.65,
          glowSize: '-20%'
        };
        break;
      case 'vibrant':
        baseStyles = {
          opacity: 1,
          brightness: 1.1,
          pulseMagnitude: '1.2s',
          glowOpacity: 0.9,
          glowSize: '-15%'
        };
        break;
      default: // medium - already set
        break;
    }

    // Apply loading page contextual adjustments
    if (isLoadingPage) {
      return {
        ...baseStyles,
        brightness: baseStyles.brightness * 1.1, // 10% brighter on loading page
        pulseMagnitude: (parseFloat(baseStyles.pulseMagnitude) * 0.85) + 's', // 15% faster pulse on loading page
        glowOpacity: baseStyles.glowOpacity * 1.15, // 15% more glow on loading page
      };
    }

    return baseStyles;
  };

  const intensityStyles = getIntensityStyles();

  return (
    <div 
      className={`absolute ${coreSize} rounded-full ${animationClasses.core} z-20 
        transition-all duration-300 hover:scale-105`}
      style={{
        background: 'radial-gradient(circle at 40% 40%, var(--core-color-bright, rgba(249, 115, 22, 0.90)) 0%, var(--core-color, rgba(233, 99, 12, 0.95)) 100%)',
        boxShadow: '0 0 15px 4px rgba(249, 115, 22, 0.15)',
        animationDuration: isLoadingPage ? '7s' : '9s', // Faster animation on loading page
        animationTimingFunction: 'cubic-bezier(0.45, 0, 0.55, 1)',
        opacity: intensityStyles.opacity,
        filter: `brightness(${intensityStyles.brightness})`,
        // Fix for TypeScript error by using computed property names with type casting
        ['--core-color' as any]: 'rgba(233, 99, 12, 0.95)',
        ['--core-color-bright' as any]: 'rgba(249, 115, 22, 0.90)',
      }}
    >
      {/* Inner glow layer */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{ 
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
          opacity: intensityStyles.glowOpacity,
        }}
      ></div>
      
      {/* Subtle pulse effect */}
      <div 
        className="absolute inset-[-20%] rounded-full opacity-0 animate-pulse-subtle"
        style={{ 
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%)',
          animationDuration: intensityStyles.pulseMagnitude,
          inset: intensityStyles.glowSize,
        }}
      ></div>
    </div>
  );
};

export default LogoCore;
