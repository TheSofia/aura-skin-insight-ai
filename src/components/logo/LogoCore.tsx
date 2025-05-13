
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
  // Adjust core characteristics with improved visibility across all contexts
  const getIntensityStyles = () => {
    // Enhanced base styles for better visibility
    let baseStyles = {
      opacity: 0.98, // Increased from 0.95
      brightness: 1.05, // Increased from 1.0
      pulseMagnitude: '9s',
      glowOpacity: 0.80, // Increased from 0.75
      glowSize: '-18%'
    };
    
    switch (intensity) {
      case 'subtle':
        baseStyles = {
          opacity: 0.92, // Increased from 0.85 for better visibility
          brightness: 1.0, // Increased from 0.95 for better visibility
          pulseMagnitude: '13s',
          glowOpacity: 0.70, // Increased from 0.6 for better visibility
          glowSize: '-20%'
        };
        break;
      case 'vibrant':
        baseStyles = {
          opacity: 1,
          brightness: 1.08, // Increased from 1.05
          pulseMagnitude: '7s',
          glowOpacity: 0.9, // Increased from 0.85
          glowSize: '-15%'
        };
        break;
      default: // medium - already enhanced in baseStyles
        break;
    }

    // Apply consistent enhanced appearance for all contexts
    return {
      ...baseStyles,
      brightness: baseStyles.brightness * 1.05, 
      pulseMagnitude: (parseFloat(baseStyles.pulseMagnitude) * 0.9) + 's', 
      glowOpacity: baseStyles.glowOpacity * 1.05, 
    };
  };

  const intensityStyles = getIntensityStyles();

  return (
    <div 
      className={`absolute ${coreSize} rounded-full ${animationClasses.core} z-20 
        transition-all duration-500`}
      style={{
        background: 'radial-gradient(circle at 35% 35%, var(--core-color-bright, rgba(242, 150, 105, 0.95)) 0%, var(--core-color, rgba(237, 137, 96, 0.98)) 100%)', // Increased opacity
        boxShadow: '0 0 15px 4px rgba(242, 150, 105, 0.18)', // Increased from 0.14 to 0.18, size from 3px to 4px
        animationDuration: intensityStyles.pulseMagnitude,
        animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
        opacity: intensityStyles.opacity,
        filter: `brightness(${intensityStyles.brightness})`,
        ['--core-color' as any]: 'rgba(237, 137, 96, 0.98)', // Increased from 0.95 to 0.98
        ['--core-color-bright' as any]: 'rgba(242, 150, 105, 0.95)', // Increased from 0.92 to 0.95
      }}
    >
      {/* Enhanced inner glow layer */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{ 
          background: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.92) 0%, transparent 80%)', // Increased from 0.9 to 0.92
          opacity: intensityStyles.glowOpacity,
        }}
      ></div>
      
      {/* Enhanced subtle pulse effect */}
      <div 
        className="absolute inset-[-20%] rounded-full opacity-0 animate-pulse-subtle"
        style={{ 
          background: 'radial-gradient(circle, rgba(242, 150, 105, 0.40) 0%, transparent 80%)', // Increased from 0.35 to 0.40
          animationDuration: intensityStyles.pulseMagnitude,
          inset: intensityStyles.glowSize,
        }}
      ></div>
      
      {/* Enhanced soft bloom effect */}
      <div 
        className="absolute inset-[-30%] rounded-full opacity-0 animate-pulse-cellular"
        style={{ 
          background: 'radial-gradient(circle, rgba(242, 150, 105, 0.20) 0%, transparent 90%)', // Increased from 0.15 to 0.20
          animationDuration: (parseFloat(intensityStyles.pulseMagnitude) * 1.2) + 's',
          animationDelay: '0.5s',
        }}
      ></div>
    </div>
  );
};

export default LogoCore;
