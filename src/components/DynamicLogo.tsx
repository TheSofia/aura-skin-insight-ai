
import React from 'react';

type DynamicLogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
};

const DynamicLogo = ({ size = 'md', className = '' }: DynamicLogoProps) => {
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

  return (
    <div className={`dot-logo relative ${sizeClasses[size]} ${className}`}>
      {/* Core dot */}
      <div className={`absolute ${coreSizes[size]} bg-aurascan-accent rounded-full animate-pulse-dot z-10`}></div>
      
      {/* Inner ring */}
      <div className={`absolute ${innerRingSizes[size]} border border-aurascan-accent/70 rounded-full animate-circular-motion`}></div>
      
      {/* Outer ring */}
      <div className={`absolute ${outerRingSizes[size]} border border-aurascan-accent/40 rounded-full animate-circular-motion`} 
           style={{ animationDirection: 'reverse', animationDuration: '6s' }}></div>
    </div>
  );
};

export default DynamicLogo;
