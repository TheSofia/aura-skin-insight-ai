
import React, { useState, useEffect } from 'react';
import DynamicLogo from './DynamicLogo';

interface LoadingAnimationProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingAnimation = ({ message = "Processing", size = 'md' }: LoadingAnimationProps) => {
  // State for controlling gradient transition
  const [gradientPosition, setGradientPosition] = useState(0);
  
  // Cycle through gradient positions
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Get the current gradient class
  const getGradientClass = () => {
    const gradients = [
      'bg-gradient-to-tr from-aurascan-accent/20 via-aurascan-medium-grey/10 to-aurascan-deep-green/20',
      'bg-gradient-to-bl from-aurascan-deep-green/20 via-aurascan-dark-grey/10 to-aurascan-accent/20',
      'bg-gradient-to-r from-aurascan-dark-orange/20 via-aurascan-light-grey/10 to-aurascan-deep-green/20',
      'bg-gradient-to-l from-aurascan-deep-green/20 via-aurascan-light-grey/10 to-aurascan-dark-orange/20',
    ];
    return gradients[gradientPosition];
  };

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
        {/* Background light with dynamic gradient */}
        <div className={`absolute inset-0 rounded-full opacity-80 transition-all duration-1000 ease-in-out ${getGradientClass()}`}></div>
        
        {/* Central dynamic logo with gradient coloring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <DynamicLogo 
            colorScheme="gradient" 
            animationStyle="combined" 
            size={size === 'sm' ? 'md' : size === 'md' ? 'lg' : 'xl'} 
          />
        </div>
        
        {/* Animated orbital rings with enhanced motion and colors */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 rounded-full border border-aurascan-accent/10 animate-rotate-slow" 
               style={{ animationDuration: '20s' }}></div>
          <div className="absolute inset-2 rounded-full border border-aurascan-deep-green/15 animate-rotate-slow" 
               style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
          <div className="absolute inset-4 rounded-full border border-aurascan-dark-orange/20 animate-rotate-slow" 
               style={{ animationDuration: '10s' }}></div>
          
          {/* Additional decorative elements with varied colors */}
          <div className="absolute w-full h-full animate-rotate-slow" style={{ animationDuration: '25s' }}>
            <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-aurascan-accent/20"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-aurascan-deep-green/20"></div>
          </div>
        </div>
        
        {/* Enhanced data points floating around with varied colors */}
        {[...Array(12)].map((_, i) => {
          // Create a pattern of different colors for the data points
          const bgColorClass = i % 3 === 0 
            ? "bg-aurascan-accent/70" 
            : i % 3 === 1 
              ? "bg-aurascan-deep-green/70" 
              : "bg-aurascan-dark-orange/70";

          return (
            <div
              key={i}
              className={`absolute w-1.5 h-1.5 rounded-full ${bgColorClass} animate-float data-point`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 3}s`,
                animationDelay: `${i * 0.2}s`,
                opacity: 0.3 + Math.random() * 0.5
              }}
            ></div>
          );
        })}
        
        {/* Enhanced scanning line effect with gradient */}
        <div className="absolute inset-x-0 top-0 h-full overflow-hidden rounded-full">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-aurascan-accent to-transparent w-full animate-scanning"></div>
        </div>
        
        {/* Morphing shape behind everything with gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 opacity-10 animate-morph"
             style={{ 
               background: 'linear-gradient(225deg, rgba(249, 115, 22, 0.8) 0%, rgba(64, 62, 67, 0.9) 50%, rgba(22, 163, 74, 0.8) 100%)',
             }}></div>
      </div>
      
      {message && (
        <p className={`text-aurascan-dark-grey ${messageSizes[size]} font-light animate-pulse-slow`}>
          {message}
          <span className="inline-block animate-pulse-dot ml-1">...</span>
        </p>
      )}
    </div>
  );
};

export default LoadingAnimation;
