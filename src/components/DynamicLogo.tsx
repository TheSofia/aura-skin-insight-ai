
import React from 'react';

type DynamicLogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  colorScheme?: 'accent' | 'coral' | 'cyan' | 'teal';
};

const DynamicLogo = ({ size = 'md', className = '', colorScheme = 'accent' }: DynamicLogoProps) => {
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
          outerRing: 'border-aurascan-accent/40'
        };
      case 'cyan':
        return {
          core: 'bg-aurascan-dark-grey',
          innerRing: 'border-aurascan-dark-grey/70',
          outerRing: 'border-aurascan-dark-grey/40'
        };
      case 'teal':
        return {
          core: 'bg-aurascan-medium-grey',
          innerRing: 'border-aurascan-medium-grey/70',
          outerRing: 'border-aurascan-medium-grey/40'
        };
      default:
        return {
          core: 'bg-aurascan-accent',
          innerRing: 'border-aurascan-accent/70',
          outerRing: 'border-aurascan-accent/40'
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <div 
      className={`dot-logo relative ${sizeClasses[size]} ${className}`}
      role="presentation"
    >
      {/* Core dot with enhanced pulse animation */}
      <div 
        className={`absolute ${coreSizes[size]} ${colorClasses.core} rounded-full animate-pulse-dot z-10 hover:animate-throb`}
      ></div>
      
      {/* Inner ring with enhanced circular animation */}
      <div 
        className={`absolute ${innerRingSizes[size]} border ${colorClasses.innerRing} rounded-full animate-circular-motion transition-transform duration-300 hover:scale-105`}
      ></div>
      
      {/* Outer ring with reverse animation */}
      <div 
        className={`absolute ${outerRingSizes[size]} border ${colorClasses.outerRing} rounded-full animate-circular-motion transition-transform duration-300 hover:scale-95`} 
        style={{ animationDirection: 'reverse', animationDuration: '6s' }}
      ></div>

      {/* Floating particles that appear on hover */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
        {Array(3).fill(0).map((_, i) => (
          <div 
            key={i}
            className={`absolute w-1 h-1 rounded-full ${colorClasses.core} animate-float`}
            style={{
              left: `${30 + (i * 15)}%`,
              top: `${20 + (i * 20)}%`,
              animationDuration: `${2 + i * 0.5}s`,
              animationDelay: `${i * 0.25}s`,
              opacity: 0.6
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DynamicLogo;
