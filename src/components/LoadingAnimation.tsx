
import React, { useState, useEffect } from 'react';
import DynamicLogo from './DynamicLogo';

interface LoadingAnimationProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingAnimation = ({ message = "Processing", size = 'md' }: LoadingAnimationProps) => {
  // Enhanced state for controlling gradient transition
  const [gradientPosition, setGradientPosition] = useState(0);
  
  // Cycle through gradient positions more frequently
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 1) % 6); // Increased variety of positions
    }, 2000); // Faster transitions
    return () => clearInterval(interval);
  }, []);

  // Get the current gradient class with more vibrant colors
  const getGradientClass = () => {
    const gradients = [
      'bg-gradient-to-tr from-aurascan-accent/40 via-aurascan-medium-grey/10 to-aurascan-deep-green/30',
      'bg-gradient-to-bl from-aurascan-deep-green/40 via-aurascan-dark-grey/5 to-aurascan-accent/30',
      'bg-gradient-to-r from-aurascan-dark-orange/40 via-aurascan-light-grey/5 to-aurascan-deep-green/30',
      'bg-gradient-to-l from-aurascan-deep-green/40 via-aurascan-light-grey/5 to-aurascan-dark-orange/30',
      'bg-gradient-to-tl from-aurascan-accent/50 to-aurascan-deep-green/40',
      'bg-gradient-to-br from-aurascan-dark-orange/50 to-aurascan-accent/40',
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

  // New state for dynamic orbital rings animation
  const [orbitalPhase, setOrbitalPhase] = useState(0);
  
  // Update orbital animation phase
  useEffect(() => {
    const phaseInterval = setInterval(() => {
      setOrbitalPhase((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(phaseInterval);
  }, []);

  // Generate dynamic orbital speeds based on phase
  const getOrbitalStyle = (baseTime: number, index: number) => {
    const phaseMultiplier = orbitalPhase === 0 ? 1 : orbitalPhase === 1 ? 1.2 : 0.8;
    return {
      animationDuration: `${baseTime * phaseMultiplier}s`,
      animationDirection: index % 2 === 0 ? 'normal' : 'reverse',
      opacity: 0.6 + (orbitalPhase * 0.1)
    };
  };

  return (
    <div className="flex flex-col items-center justify-center animate-fade-in">
      <div className={`relative ${containerSizes[size]} mx-auto mb-6`}>
        {/* Background light with enhanced dynamic gradient */}
        <div className={`absolute inset-0 rounded-full opacity-90 transition-all duration-700 ease-in-out ${getGradientClass()} animate-pulse-slow`}></div>
        
        {/* Central dynamic logo with enhanced gradient coloring - now using the standardized DynamicLogo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <DynamicLogo 
            colorScheme="gradient" 
            animationStyle="cellular" 
            size={size === 'sm' ? 'md' : size === 'md' ? 'lg' : 'xl'} 
            intensity="vibrant"
          />
        </div>
        
        {/* Enhanced animated orbital rings with varied motion and vibrant colors */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 rounded-full border-2 border-aurascan-accent/30 animate-rotate-slow" 
               style={getOrbitalStyle(20, 0)}></div>
          <div className="absolute inset-2 rounded-full border-2 border-aurascan-deep-green/40 animate-rotate-slow" 
               style={getOrbitalStyle(15, 1)}></div>
          <div className="absolute inset-4 rounded-full border-2 border-aurascan-dark-orange/50 animate-rotate-slow" 
               style={getOrbitalStyle(10, 2)}></div>
          <div className="absolute inset-6 rounded-full border border-aurascan-accent/20 animate-rotate-slow" 
               style={getOrbitalStyle(12, 3)}></div>
          
          {/* Additional enhanced decorative elements with vibrant colors */}
          <div className="absolute w-full h-full animate-rotate-slow" style={getOrbitalStyle(25, 4)}>
            <div className="absolute top-0 left-1/2 w-3 h-3 rounded-full bg-aurascan-accent/60 animate-pulse-dot"></div>
            <div className="absolute bottom-0 left-1/2 w-3 h-3 rounded-full bg-aurascan-deep-green/60 animate-pulse-dot"></div>
            <div className="absolute left-0 top-1/2 w-3 h-3 rounded-full bg-aurascan-dark-orange/60 animate-pulse-dot"></div>
            <div className="absolute right-0 top-1/2 w-3 h-3 rounded-full bg-aurascan-accent/60 animate-pulse-dot"></div>
          </div>
        </div>
        
        {/* Enhanced data points floating around with "Dark White" and semi-transparent white mixed in */}
        {[...Array(24)].map((_, i) => { // Increased number of data points for more visual texture
          // Create a pattern with a mix of accent colors and the new "Dark White"/semi-transparent whites
          let bgColorClass;
          
          // Determine dot color - now including "Dark White" options for specific indexes
          if (i % 6 === 0) {
            // Semi-transparent white (Option B)
            bgColorClass = "bg-white/40"; // 40% opacity white
          } else if (i % 6 === 1) {
            // "Dark White" / Off-White (Option A)
            bgColorClass = "bg-[#F1F1F1]"; // Light grey / off-white
          } else if (i % 6 === 2) {
            bgColorClass = "bg-aurascan-accent";
          } else if (i % 6 === 3) {
            bgColorClass = "bg-aurascan-deep-green"; 
          } else if (i % 6 === 4) {
            // Another semi-transparent white with different opacity
            bgColorClass = "bg-white/60"; // 60% opacity white
          } else {
            bgColorClass = "bg-aurascan-dark-orange";
          }
          
          // Determine subtle border styling based on dot type for added texture
          const borderColorClass = i % 6 < 2 
            ? "" // No border for white/off-white dots for cleaner look
            : i % 6 === 2 
              ? "border border-aurascan-accent/30"
              : i % 6 === 3
                ? "border border-aurascan-deep-green/25"
                : "border border-aurascan-dark-orange/30";

          return (
            <div
              key={i}
              className={`absolute rounded-full ${bgColorClass} ${borderColorClass} animate-float data-point`}
              style={{
                width: `${(i % 3 === 0 ? 2 : i % 3 === 1 ? 2.5 : 1.8)}px`,
                height: `${(i % 3 === 0 ? 2 : i % 3 === 1 ? 2.5 : 1.8)}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${1.5 + Math.random() * 2}s`, // Faster animation
                animationDelay: `${i * 0.15}s`,
                opacity: i % 6 < 2 ? (0.5 + Math.random() * 0.3) : (0.6 + Math.random() * 0.4) // Different opacity ranges for white vs colored dots
              }}
            ></div>
          );
        })}
        
        {/* Enhanced scanning line effect with vibrant gradient */}
        <div className="absolute inset-x-0 top-0 h-full overflow-hidden rounded-full">
          <div className="h-1 bg-gradient-to-r from-transparent via-aurascan-accent to-transparent w-full animate-scanning"></div>
          {/* Additional scanning line for more dynamic effect */}
          <div className="h-1 bg-gradient-to-r from-transparent via-aurascan-deep-green to-transparent w-full animate-scanning" 
               style={{ animationDelay: '0.75s', opacity: 0.8 }}></div>
        </div>
        
        {/* Enhanced morphing shape behind everything with vibrant gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 opacity-20 animate-morph"
             style={{ 
               background: 'linear-gradient(225deg, rgba(249, 115, 22, 1) 0%, rgba(64, 62, 67, 0.5) 50%, rgba(22, 163, 74, 1) 100%)',
               animationDuration: '8s'
             }}></div>
      </div>
      
      {/* Message with standardized text color */}
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
