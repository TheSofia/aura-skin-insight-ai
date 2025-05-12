
import React, { forwardRef, useEffect, useState } from 'react';

type DynamicLogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  colorScheme?: 'accent' | 'coral' | 'cyan' | 'teal' | 'violet' | 'gradient';
  animationStyle?: 'float' | 'pulse' | 'rotate' | 'morph' | 'combined';
};

const DynamicLogo = forwardRef<HTMLDivElement, DynamicLogoProps>(({ 
  size = 'md', 
  className = '', 
  colorScheme = 'accent',
  animationStyle = 'combined'
}, ref) => {
  // For gradient colorScheme, add a color cycling effect
  const [gradientState, setGradientState] = useState(0);
  
  useEffect(() => {
    if (colorScheme === 'gradient') {
      const interval = setInterval(() => {
        setGradientState(prev => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [colorScheme]);

  // Dynamic size configuration
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  // Core dot size based on logo size
  const coreSizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
    xl: 'w-6 h-6'
  };

  // Inner ring size based on logo size
  const innerRingSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  // Outer ring size based on logo size
  const outerRingSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  // Get color classes based on the selected scheme
  const getColorClasses = () => {
    switch (colorScheme) {
      case 'coral':
        return {
          core: 'bg-aurascan-accent',
          innerRing: 'border-aurascan-accent/70',
          outerRing: 'border-aurascan-accent/40',
          glow: 'after:bg-aurascan-accent/30'
        };
      case 'cyan':
        return {
          core: 'bg-aurascan-dark-grey',
          innerRing: 'border-aurascan-dark-grey/70',
          outerRing: 'border-aurascan-dark-grey/40',
          glow: 'after:bg-aurascan-dark-grey/30'
        };
      case 'teal':
        return {
          core: 'bg-aurascan-deep-green',
          innerRing: 'border-aurascan-deep-green/70',
          outerRing: 'border-aurascan-deep-green/40',
          glow: 'after:bg-aurascan-deep-green/30'
        };
      case 'violet':
        return {
          core: 'bg-aurascan-dark-grey',
          innerRing: 'border-aurascan-dark-grey/70',
          outerRing: 'border-aurascan-dark-grey/40',
          glow: 'after:bg-aurascan-dark-grey/30'
        };
      case 'gradient':
        // Cycle through colors for gradient scheme
        if (gradientState === 0) {
          return {
            core: 'bg-gradient-to-r from-aurascan-accent to-aurascan-dark-orange',
            innerRing: 'border-aurascan-accent/70',
            outerRing: 'border-aurascan-deep-green/40',
            glow: 'after:bg-aurascan-accent/30'
          };
        } else if (gradientState === 1) {
          return {
            core: 'bg-gradient-to-r from-aurascan-dark-orange to-aurascan-deep-green',
            innerRing: 'border-aurascan-dark-orange/70',
            outerRing: 'border-aurascan-accent/40',
            glow: 'after:bg-aurascan-dark-orange/30'
          };
        } else {
          return {
            core: 'bg-gradient-to-r from-aurascan-deep-green to-aurascan-accent',
            innerRing: 'border-aurascan-deep-green/70',
            outerRing: 'border-aurascan-dark-orange/40',
            glow: 'after:bg-aurascan-deep-green/30'
          };
        }
      default:
        return {
          core: 'bg-aurascan-accent',
          innerRing: 'border-aurascan-accent/70',
          outerRing: 'border-aurascan-accent/40',
          glow: 'after:bg-aurascan-accent/30'
        };
    }
  };

  // Get animation classes based on the selected style
  const getAnimationClasses = () => {
    switch (animationStyle) {
      case 'float':
        return {
          core: 'animate-subtle-float',
          innerRing: '',
          outerRing: '',
          particles: 'animate-float'
        };
      case 'pulse':
        return {
          core: 'animate-subtle-pulse',
          innerRing: '',
          outerRing: '',
          particles: 'animate-pulse-dot'
        };
      case 'rotate':
        return {
          core: '',
          innerRing: 'animate-rotate-slow',
          outerRing: 'animate-rotate-slow',
          particles: 'animate-circular-motion'
        };
      case 'morph':
        return {
          core: 'animate-throb',
          innerRing: 'animate-morph',
          outerRing: '',
          particles: 'animate-float'
        };
      case 'combined':
      default:
        return {
          core: 'animate-subtle-pulse',
          innerRing: 'animate-circular-motion',
          outerRing: 'animate-circular-motion-reverse',
          particles: 'animate-float'
        };
    }
  };

  const colorClasses = getColorClasses();
  const animationClasses = getAnimationClasses();

  return (
    <div 
      className={`dot-logo relative ${sizeClasses[size]} ${className} ${animationClasses.core}`}
      role="presentation"
      ref={ref}
    >
      {/* Core dot with enhanced pulsing animation */}
      <div 
        className={`absolute ${coreSizes[size]} ${colorClasses.core} rounded-full ${animationClasses.core} z-10 
          after:content-[''] after:absolute after:inset-0 after:rounded-full ${colorClasses.glow} 
          after:blur-md after:transform after:scale-150 after:opacity-0 after:animate-subtle-glow
          transition-all duration-300 hover:transform hover:scale-110`}
      ></div>
      
      {/* Inner ring with enhanced circular animation */}
      <div 
        className={`absolute ${innerRingSizes[size]} border ${colorClasses.innerRing} rounded-full 
          ${animationClasses.innerRing} transition-transform duration-300 hover:border-opacity-100`}
      ></div>
      
      {/* Outer ring with reverse animation and enhanced interactivity */}
      <div 
        className={`absolute ${outerRingSizes[size]} border ${colorClasses.outerRing} rounded-full 
          ${animationClasses.outerRing} transition-transform duration-300 hover:border-opacity-70`}
      ></div>

      {/* Floating particles with enhanced animation */}
      <div className="absolute inset-0 overflow-visible">
        {Array(4).fill(0).map((_, i) => (
          <div 
            key={i}
            className={`absolute w-1 h-1 rounded-full ${colorClasses.core} ${animationClasses.particles} opacity-60
              transition-all duration-300 hover:opacity-100 hover:transform hover:scale-150`}
            style={{
              left: `${30 + (i * 15)}%`,
              top: `${20 + (i * 20)}%`,
              animationDuration: `${2 + i * 0.5}s`,
              animationDelay: `${i * 0.25}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
});

DynamicLogo.displayName = "DynamicLogo";

export default DynamicLogo;
