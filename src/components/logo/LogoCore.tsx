
import React from 'react';
import { AnimationStyle } from '../../utils/logoAnimations';

type LogoCoreProps = {
  coreSize: string;
  colorClasses: { core: string; glow: string };
  animationClasses: { core: string };
  animationStyle: AnimationStyle;
  intensity?: 'subtle' | 'medium' | 'vibrant';
  isLoadingPage?: boolean;
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
      pulseMagnitude: '9s',
      glowOpacity: 0.75,
      glowSize: '-18%'
    };
    
    switch (intensity) {
      case 'subtle':
        baseStyles = {
          opacity: 0.85,
          brightness: 0.92,
          pulseMagnitude: '11s',
          glowOpacity: 0.6,
          glowSize: '-20%'
        };
        break;
      case 'vibrant':
        baseStyles = {
          opacity: 1,
          brightness: 1.05,
          pulseMagnitude: '7s',
          glowOpacity: 0.85,
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
        brightness: baseStyles.brightness * 1.08, 
        pulseMagnitude: (parseFloat(baseStyles.pulseMagnitude) * 0.85) + 's', 
        glowOpacity: baseStyles.glowOpacity * 1.1, 
      };
    }

    return baseStyles;
  };

  const intensityStyles = getIntensityStyles();

  return (
    <div 
      className={`absolute ${coreSize} rounded-full ${animationClasses.core} z-20 
        transition-all duration-500`}
      style={{
        background: 'radial-gradient(circle at 35% 35%, var(--core-color-bright, rgba(224, 95, 20, 0.90)) 0%, var(--core-color, rgba(201, 76, 16, 0.95)) 100%)',
        boxShadow: '0 0 15px 3px rgba(224, 95, 20, 0.12)',
        animationDuration: intensityStyles.pulseMagnitude,
        animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
        opacity: intensityStyles.opacity,
        filter: `brightness(${intensityStyles.brightness})`,
        ['--core-color' as any]: 'rgba(201, 76, 16, 0.95)',
        ['--core-color-bright' as any]: 'rgba(224, 95, 20, 0.90)',
      }}
    >
      {/* Inner glow layer - refined highlight */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{ 
          background: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.9) 0%, transparent 80%)',
          opacity: intensityStyles.glowOpacity,
        }}
      ></div>
      
      {/* Subtle pulse effect - more biologically elegant */}
      <div 
        className="absolute inset-[-20%] rounded-full opacity-0 animate-pulse-subtle"
        style={{ 
          background: 'radial-gradient(circle, rgba(224, 95, 20, 0.35) 0%, transparent 80%)',
          animationDuration: intensityStyles.pulseMagnitude,
          inset: intensityStyles.glowSize,
        }}
      ></div>
      
      {/* Additional soft bloom effect */}
      <div 
        className="absolute inset-[-30%] rounded-full opacity-0 animate-pulse-cellular"
        style={{ 
          background: 'radial-gradient(circle, rgba(224, 95, 20, 0.15) 0%, transparent 90%)',
          animationDuration: (parseFloat(intensityStyles.pulseMagnitude) * 1.2) + 's',
          animationDelay: '0.5s',
        }}
      ></div>
    </div>
  );
};

export default LogoCore;

