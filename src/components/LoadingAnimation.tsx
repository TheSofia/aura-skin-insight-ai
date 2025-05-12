
import React from 'react';
import DynamicLogo from './DynamicLogo';

interface LoadingAnimationProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingAnimation = ({ message = "Processing", size = 'md' }: LoadingAnimationProps) => {
  // Determine sizes based on the size prop
  const containerSizes = {
    sm: 'w-24 h-24',
    md: 'w-40 h-40',
    lg: 'w-64 h-64',
  };

  const messageSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className="flex flex-col items-center justify-center animate-fade-in">
      <div className={`relative ${containerSizes[size]} mx-auto mb-6`}>
        {/* Background light */}
        <div className="absolute inset-0 rounded-full bg-white shadow-light opacity-80"></div>
        
        {/* Central dynamic logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <DynamicLogo colorScheme="cyan" size={size === 'sm' ? 'md' : size === 'md' ? 'lg' : 'xl'} />
        </div>
        
        {/* Animated orbital rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
          <div className="absolute inset-0 rounded-full border border-aurascan-dark-grey/10 animate-rotate-slow" 
               style={{ animationDuration: '20s' }}></div>
          <div className="absolute inset-2 rounded-full border border-aurascan-dark-grey/15 animate-rotate-slow" 
               style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          <div className="absolute inset-4 rounded-full border border-aurascan-dark-grey/20 animate-rotate-slow" 
               style={{ animationDuration: '10s' }}></div>
        </div>
        
        {/* Data points floating around */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-aurascan-dark-grey/70 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0.3 + Math.random() * 0.5
            }}
          ></div>
        ))}
        
        {/* Scanning line effect */}
        <div className="absolute inset-x-0 top-0 h-full overflow-hidden rounded-full">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-aurascan-accent to-transparent w-full animate-scanning"></div>
        </div>
        
        {/* Morphing shape behind everything */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 opacity-10 animate-morph"
             style={{ 
               background: 'linear-gradient(225deg, rgba(64, 62, 67, 0.8) 0%, rgba(64, 62, 67, 0.9) 100%)',
             }}></div>
      </div>
      
      {message && (
        <p className={`text-aurascan-dark-grey ${messageSizes[size]} font-light animate-pulse-slow`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default LoadingAnimation;
