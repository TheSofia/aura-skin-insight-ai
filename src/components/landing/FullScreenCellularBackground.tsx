
import React, { useEffect, useRef } from 'react';

type FullScreenCellularBackgroundProps = {
  isVisible: boolean;
  mousePosition: {x: number, y: number};
  scrollPosition: number;
};

const FullScreenCellularBackground: React.FC<FullScreenCellularBackgroundProps> = ({ 
  isVisible,
  mousePosition,
  scrollPosition
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate dynamic properties for parallax and interaction
  const dynamicIntensity = Math.max(0.2, 1 - (scrollPosition / 2000));
  const parallaxOffset = scrollPosition * 0.1;
  
  // Cursor interaction intensity
  const cursorIntensity = Math.sqrt(
    Math.pow(mousePosition.x - 0.5, 2) + Math.pow(mousePosition.y - 0.5, 2)
  );
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      style={{
        opacity: isVisible ? dynamicIntensity : 0,
        transition: 'opacity 2s cubic-bezier(0.19, 1, 0.22, 1)',
        transform: `translateY(${parallaxOffset}px)`,
      }}
    >
      {/* Primary cellular core structures - large, organic forms */}
      <div className="absolute inset-0">
        {/* Central core cluster */}
        <div 
          className="absolute left-1/2 top-1/2 w-[80vw] h-[80vh] -translate-x-1/2 -translate-y-1/2 opacity-80"
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 135, 67, 0.12) 0%, rgba(62, 49, 102, 0.08) 40%, transparent 70%)',
            borderRadius: '60% 40% 50% 60% / 50% 70% 40% 60%',
            transform: `scale(${1 + cursorIntensity * 0.05}) rotate(${scrollPosition * 0.02}deg)`,
            transition: 'transform 1.5s cubic-bezier(0.19, 1, 0.22, 1)',
          }}
        />
        
        {/* Secondary cellular structures */}
        <div 
          className="absolute left-[20%] top-[25%] w-[40vw] h-[40vh] opacity-60 animate-cellular-drift"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 79, 77, 0.1) 0%, rgba(233, 218, 174, 0.06) 50%, transparent 80%)',
            borderRadius: '40% 60% 45% 55% / 60% 40% 50% 50%',
          }}
        />
        
        <div 
          className="absolute right-[15%] bottom-[20%] w-[35vw] h-[35vh] opacity-70 animate-cellular-drift-slow"
          style={{
            background: 'radial-gradient(circle at 30% 70%, rgba(156, 28, 61, 0.08) 0%, rgba(255, 135, 67, 0.06) 60%, transparent 85%)',
            borderRadius: '55% 45% 40% 60% / 45% 55% 60% 40%',
          }}
        />
      </div>
      
      {/* Flowing membrane wave structures */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary membrane wave */}
        <div 
          className="absolute top-0 left-0 w-full h-[150%] opacity-40"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(255, 135, 67, 0.05) 25%, rgba(62, 49, 102, 0.04) 50%, transparent 75%)',
            transform: `translateY(${-scrollPosition * 0.05}px) rotateZ(${mousePosition.x * 2}deg)`,
            borderRadius: '50% 50% 45% 55% / 60% 40% 50% 50%',
            transition: 'transform 2s cubic-bezier(0.19, 1, 0.22, 1)',
          }}
        />
        
        {/* Secondary membrane flow */}
        <div 
          className="absolute bottom-0 right-0 w-full h-[120%] opacity-35"
          style={{
            background: 'linear-gradient(225deg, transparent 0%, rgba(0, 79, 77, 0.06) 30%, rgba(233, 218, 174, 0.04) 60%, transparent 90%)',
            transform: `translateY(${scrollPosition * 0.03}px) rotateZ(${-mousePosition.y * 1.5}deg)`,
            borderRadius: '45% 55% 50% 50% / 40% 60% 55% 45%',
            transition: 'transform 2.5s cubic-bezier(0.19, 1, 0.22, 1)',
          }}
        />
      </div>
      
      {/* Dynamic particle system with organic movement */}
      <div className="absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => {
          const size = 2 + Math.random() * 8;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const opacity = 0.15 + Math.random() * 0.25;
          const duration = 15 + Math.random() * 20;
          
          // Color variation based on index
          let particleColor;
          if (i % 4 === 0) {
            particleColor = 'rgba(255, 135, 67, 0.4)'; // Warm Amber
          } else if (i % 4 === 1) {
            particleColor = 'rgba(0, 79, 77, 0.35)'; // Emerald
          } else if (i % 4 === 2) {
            particleColor = 'rgba(62, 49, 102, 0.3)'; // Sapphire
          } else {
            particleColor = 'rgba(233, 218, 174, 0.4)'; // Gold-Light
          }
          
          return (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full animate-orbital-float"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${posX}%`,
                top: `${posY}%`,
                background: `radial-gradient(circle, ${particleColor} 0%, transparent 70%)`,
                opacity: opacity * (0.8 + cursorIntensity * 0.4),
                animationDuration: `${duration}s`,
                animationDelay: `${i * 0.5}s`,
                transform: `translateX(${(mousePosition.x - 0.5) * 10}px) translateY(${(mousePosition.y - 0.5) * 10}px)`,
                transition: 'transform 1.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 1s ease-out',
              }}
            />
          );
        })}
      </div>
      
      {/* Subtle light ray pulses */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i / 6) * 2 * Math.PI;
          const length = 60 + Math.random() * 40;
          const width = 100 + Math.random() * 150;
          const posX = 50 + Math.cos(angle) * 25;
          const posY = 50 + Math.sin(angle) * 25;
          const opacity = 0.02 + Math.random() * 0.04;
          
          return (
            <div
              key={`ray-${i}`}
              className="absolute animate-light-ray"
              style={{
                width: `${width}px`,
                height: `${length}vh`,
                left: `${posX}%`,
                top: `${posY}%`,
                background: 'linear-gradient(to top, transparent, rgba(255, 135, 67, 0.6), transparent)',
                opacity: opacity * (1 + cursorIntensity * 0.5),
                filter: 'blur(25px)',
                transform: `rotate(${angle + Math.PI/2}rad) translateY(${scrollPosition * 0.02}px)`,
                transition: 'opacity 2s ease-out, transform 2s cubic-bezier(0.19, 1, 0.22, 1)',
                animationDelay: `${i * 2}s`,
              }}
            />
          );
        })}
      </div>
      
      {/* Edge fade overlay for soft boundaries */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(253, 253, 253, 0.1) 70%, rgba(253, 253, 253, 0.3) 100%)',
        }}
      />
      
      {/* SVG-based neural connection network */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-25" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        style={{
          filter: 'blur(1px)',
        }}
      >
        <defs>
          <linearGradient id="neuralGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 135, 67, 0)" />
            <stop offset="50%" stopColor="rgba(255, 135, 67, 0.2)" />
            <stop offset="100%" stopColor="rgba(255, 135, 67, 0)" />
          </linearGradient>
          <linearGradient id="neuralGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 79, 77, 0)" />
            <stop offset="50%" stopColor="rgba(0, 79, 77, 0.15)" />
            <stop offset="100%" stopColor="rgba(0, 79, 77, 0)" />
          </linearGradient>
        </defs>
        
        {/* Flowing neural pathways */}
        <path d="M15,25 Q50,15 85,30" stroke="url(#neuralGradient1)" strokeWidth="0.3" fill="none">
          <animate attributeName="stroke-dasharray" values="0,100;50,50;0,100" dur="8s" repeatCount="indefinite" />
        </path>
        <path d="M20,50 Q60,30 90,55" stroke="url(#neuralGradient2)" strokeWidth="0.25" fill="none">
          <animate attributeName="stroke-dasharray" values="0,100;40,60;0,100" dur="12s" repeatCount="indefinite" />
        </path>
        <path d="M10,75 Q45,85 80,70" stroke="url(#neuralGradient1)" strokeWidth="0.2" fill="none">
          <animate attributeName="stroke-dasharray" values="0,100;60,40;0,100" dur="10s" repeatCount="indefinite" />
        </path>
        
        {/* Pulsing connection nodes */}
        <circle cx="25" cy="25" r="1.5" fill="rgba(255, 135, 67, 0.4)">
          <animate attributeName="r" values="1;2.5;1" dur="6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="75" cy="70" r="1.2" fill="rgba(0, 79, 77, 0.4)">
          <animate attributeName="r" values="1;2;1" dur="8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="45" r="1.8" fill="rgba(62, 49, 102, 0.3)">
          <animate attributeName="r" values="1;3;1" dur="10s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="10s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default FullScreenCellularBackground;
