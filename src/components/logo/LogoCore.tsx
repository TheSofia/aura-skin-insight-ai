
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
      opacity: 0.98,
      brightness: 1.05,
      pulseMagnitude: '9s',
      glowOpacity: 0.80,
      glowSize: '-18%'
    };
    
    switch (intensity) {
      case 'subtle':
        baseStyles = {
          opacity: 0.92,
          brightness: 1.0,
          pulseMagnitude: '13s',
          glowOpacity: 0.70,
          glowSize: '-20%'
        };
        break;
      case 'vibrant':
        baseStyles = {
          opacity: 1,
          brightness: 1.08,
          pulseMagnitude: '7s',
          glowOpacity: 0.9,
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
        transition-all duration-500 bioluminescent-breathing`}
      style={{
        background: 'radial-gradient(circle at 35% 35%, var(--core-color-bright, rgba(242, 150, 105, 0.95)) 0%, var(--core-color, rgba(237, 137, 96, 0.98)) 100%)',
        boxShadow: '0 0 15px 4px rgba(242, 150, 105, 0.18)',
        animationDuration: intensityStyles.pulseMagnitude,
        animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
        opacity: intensityStyles.opacity,
        filter: `brightness(${intensityStyles.brightness})`,
        ['--core-color' as any]: 'rgba(237, 137, 96, 0.98)',
        ['--core-color-bright' as any]: 'rgba(242, 150, 105, 0.95)',
      }}
    >
      {/* Enhanced inner glow layer */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{ 
          background: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.92) 0%, transparent 80%)',
          opacity: intensityStyles.glowOpacity,
        }}
      ></div>
      
      {/* Enhanced subtle pulse effect */}
      <div 
        className="absolute inset-[-20%] rounded-full opacity-0 animate-pulse-subtle"
        style={{ 
          background: 'radial-gradient(circle, rgba(242, 150, 105, 0.40) 0%, transparent 80%)',
          animationDuration: intensityStyles.pulseMagnitude,
          inset: intensityStyles.glowSize,
        }}
      ></div>
      
      {/* Enhanced soft bloom effect */}
      <div 
        className="absolute inset-[-30%] rounded-full opacity-0 animate-pulse-cellular"
        style={{ 
          background: 'radial-gradient(circle, rgba(242, 150, 105, 0.20) 0%, transparent 90%)',
          animationDuration: (parseFloat(intensityStyles.pulseMagnitude) * 1.2) + 's',
          animationDelay: '0.5s',
        }}
      ></div>

      {/* NEW: Subtle violet accent glow for futuristic depth */}
      {intensity !== 'subtle' && (
        <div 
          className="absolute rounded-full opacity-0 animate-pulse-subtle"
          style={{ 
            inset: '-35%',
            background: 'radial-gradient(circle, rgba(110, 89, 165, 0.20) 0%, transparent 90%)',
            animationDuration: (parseFloat(intensityStyles.pulseMagnitude) * 1.5) + 's',
            animationDelay: '0.8s',
          }}
        ></div>
      )}

      {/* NEW: Inner energy core - simulates activity center */}
      <div 
        className="absolute rounded-full"
        style={{ 
          inset: '15%',
          background: 'radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.95) 0%, rgba(242, 200, 180, 0.8) 100%)',
          opacity: 0.9,
          animation: 'digital-breathing 3s infinite',
        }}
      ></div>
    </div>
  );
};

export default LogoCore;
