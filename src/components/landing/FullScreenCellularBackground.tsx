
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
  
  // Enhanced dynamic properties for cinematic experience
  const dynamicIntensity = Math.max(0.4, 1 - (scrollPosition / 3000));
  const parallaxOffset = scrollPosition * 0.15;
  const scaleVariation = 1 + (scrollPosition / 8000);
  
  // Enhanced cursor interaction intensity
  const cursorIntensity = Math.sqrt(
    Math.pow(mousePosition.x - 0.5, 2) + Math.pow(mousePosition.y - 0.5, 2)
  );
  const cursorGlow = 0.3 + (1 - cursorIntensity) * 0.7;
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      style={{
        opacity: isVisible ? dynamicIntensity : 0,
        transition: 'opacity 3s cubic-bezier(0.19, 1, 0.22, 1)',
        transform: `translateY(${parallaxOffset}px) scale(${scaleVariation})`,
        filter: `brightness(${0.9 + cursorGlow * 0.3})`,
      }}
    >
      {/* Large-scale cellular core structures - cinematic presence */}
      <div className="absolute inset-0 scale-125">
        {/* Primary massive cellular cluster - center stage */}
        <div 
          className="absolute left-1/2 top-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: `radial-gradient(ellipse at center, 
              rgba(62, 49, 102, ${0.25 * cursorGlow}) 0%, 
              rgba(255, 135, 67, ${0.18 * cursorGlow}) 25%, 
              rgba(0, 79, 77, ${0.15 * cursorGlow}) 50%, 
              rgba(233, 218, 174, ${0.08 * cursorGlow}) 70%, 
              transparent 85%)`,
            borderRadius: '45% 55% 60% 40% / 50% 40% 60% 50%',
            transform: `scale(${1 + cursorIntensity * 0.1}) rotate(${scrollPosition * 0.03}deg)`,
            transition: 'transform 2s cubic-bezier(0.19, 1, 0.22, 1)',
            animation: 'cellular-morph 25s infinite ease-in-out',
          }}
        />
        
        {/* Secondary large cellular structures - supporting cast */}
        <div 
          className="absolute left-[15%] top-[20%] w-[70vw] h-[70vh] opacity-80"
          style={{
            background: `radial-gradient(ellipse at 30% 70%, 
              rgba(0, 79, 77, ${0.20 * cursorGlow}) 0%, 
              rgba(62, 49, 102, ${0.12 * cursorGlow}) 40%, 
              rgba(255, 135, 67, ${0.08 * cursorGlow}) 70%, 
              transparent 90%)`,
            borderRadius: '60% 40% 45% 55% / 40% 60% 50% 50%',
            transform: `rotate(${-scrollPosition * 0.02}deg)`,
            animation: 'cellular-drift 35s infinite linear reverse',
          }}
        />
        
        <div 
          className="absolute right-[10%] bottom-[15%] w-[60vw] h-[60vh] opacity-75"
          style={{
            background: `radial-gradient(circle at 70% 30%, 
              rgba(255, 135, 67, ${0.22 * cursorGlow}) 0%, 
              rgba(156, 28, 61, ${0.15 * cursorGlow}) 35%, 
              rgba(62, 49, 102, ${0.10 * cursorGlow}) 65%, 
              transparent 85%)`,
            borderRadius: '50% 50% 40% 60% / 55% 45% 60% 40%',
            animation: 'cellular-morph 30s infinite ease-in-out reverse',
          }}
        />
      </div>
      
      {/* Enhanced membrane wave structures - cinematic flow */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary flowing membrane - large scale */}
        <div 
          className="absolute top-0 left-0 w-[150%] h-[180%] opacity-60"
          style={{
            background: `linear-gradient(135deg, 
              transparent 0%, 
              rgba(255, 135, 67, ${0.12 * cursorGlow}) 20%, 
              rgba(62, 49, 102, ${0.08 * cursorGlow}) 40%, 
              rgba(0, 79, 77, ${0.06 * cursorGlow}) 60%, 
              transparent 80%)`,
            transform: `translateY(${-scrollPosition * 0.08}px) rotateZ(${mousePosition.x * 3}deg) scale(${1 + cursorIntensity * 0.05})`,
            borderRadius: '40% 60% 50% 50% / 30% 70% 60% 40%',
            transition: 'transform 3s cubic-bezier(0.19, 1, 0.22, 1)',
            animation: 'structural-cell-motion 45s infinite ease-in-out',
          }}
        />
        
        {/* Secondary membrane flow - counter movement */}
        <div 
          className="absolute bottom-0 right-0 w-[140%] h-[160%] opacity-50"
          style={{
            background: `linear-gradient(225deg, 
              transparent 0%, 
              rgba(0, 79, 77, ${0.14 * cursorGlow}) 25%, 
              rgba(233, 218, 174, ${0.10 * cursorGlow}) 50%, 
              rgba(255, 135, 67, ${0.06 * cursorGlow}) 75%, 
              transparent 95%)`,
            transform: `translateY(${scrollPosition * 0.05}px) rotateZ(${-mousePosition.y * 2}deg)`,
            borderRadius: '55% 45% 40% 60% / 50% 50% 45% 55%',
            transition: 'transform 3.5s cubic-bezier(0.19, 1, 0.22, 1)',
            animation: 'cellular-drift-slow 50s infinite linear',
          }}
        />
        
        {/* Tertiary wave layer - micro details */}
        <div 
          className="absolute left-[20%] top-[30%] w-[100%] h-[120%] opacity-40"
          style={{
            background: `radial-gradient(ellipse at center, 
              rgba(156, 28, 61, ${0.08 * cursorGlow}) 0%, 
              rgba(62, 49, 102, ${0.05 * cursorGlow}) 40%, 
              transparent 70%)`,
            transform: `rotate(${scrollPosition * 0.01}deg) scale(${0.8 + cursorIntensity * 0.3})`,
            animation: 'pulse-cellular 20s infinite ease-in-out',
          }}
        />
      </div>
      
      {/* Enhanced dynamic particle system - 5 layers for depth */}
      <div className="absolute inset-0">
        {/* Layer 1: Large luminous particles */}
        {Array.from({ length: 16 }).map((_, i) => {
          const size = 8 + Math.random() * 15;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const opacity = 0.4 + Math.random() * 0.5;
          const duration = 20 + Math.random() * 25;
          
          return (
            <div
              key={`large-particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${posX}%`,
                top: `${posY}%`,
                background: `radial-gradient(circle, 
                  ${i % 3 === 0 ? `rgba(255, 135, 67, ${opacity * cursorGlow})` : 
                    i % 3 === 1 ? `rgba(0, 79, 77, ${opacity * cursorGlow * 0.8})` : 
                    `rgba(62, 49, 102, ${opacity * cursorGlow * 0.9})`} 0%, 
                  transparent 70%)`,
                opacity: opacity * (0.6 + cursorIntensity * 0.8),
                animation: `orbital-float ${duration}s infinite ease-in-out`,
                animationDelay: `${i * 0.8}s`,
                transform: `translateX(${(mousePosition.x - 0.5) * 15}px) translateY(${(mousePosition.y - 0.5) * 15}px)`,
                transition: 'transform 2s cubic-bezier(0.19, 1, 0.22, 1), opacity 1.5s ease-out',
                filter: 'blur(1px)',
                boxShadow: `0 0 ${size * 0.8}px rgba(255, 135, 67, ${0.3 * cursorGlow})`,
              }}
            />
          );
        })}
        
        {/* Layer 2: Medium flowing particles */}
        {Array.from({ length: 24 }).map((_, i) => {
          const size = 4 + Math.random() * 8;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const opacity = 0.3 + Math.random() * 0.4;
          const duration = 15 + Math.random() * 20;
          
          return (
            <div
              key={`medium-particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${posX}%`,
                top: `${posY}%`,
                background: `radial-gradient(circle, 
                  ${i % 4 === 0 ? `rgba(233, 218, 174, ${opacity * cursorGlow})` : 
                    i % 4 === 1 ? `rgba(255, 135, 67, ${opacity * cursorGlow * 0.7})` : 
                    i % 4 === 2 ? `rgba(0, 79, 77, ${opacity * cursorGlow * 0.6})` :
                    `rgba(255, 209, 196, ${opacity * cursorGlow * 0.8})`} 0%, 
                  transparent 80%)`,
                opacity: opacity * (0.7 + cursorIntensity * 0.6),
                animation: `cellular-drift ${duration}s infinite linear`,
                animationDelay: `${i * 0.6}s`,
                transform: `translateX(${(mousePosition.x - 0.5) * 10}px) translateY(${(mousePosition.y - 0.5) * 10}px)`,
                transition: 'transform 1.8s cubic-bezier(0.19, 1, 0.22, 1)',
                filter: 'blur(0.5px)',
              }}
            />
          );
        })}
        
        {/* Layer 3: Micro shimmer particles */}
        {Array.from({ length: 40 }).map((_, i) => {
          const size = 1 + Math.random() * 3;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const opacity = 0.2 + Math.random() * 0.3;
          const duration = 10 + Math.random() * 15;
          
          return (
            <div
              key={`micro-particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${posX}%`,
                top: `${posY}%`,
                background: `radial-gradient(circle, 
                  rgba(255, 255, 255, ${opacity * cursorGlow}) 0%, 
                  rgba(233, 218, 174, ${opacity * cursorGlow * 0.6}) 50%,
                  transparent 100%)`,
                opacity: opacity * (0.8 + cursorIntensity * 0.4),
                animation: `drift-particle ${duration}s infinite alternate ease-in-out`,
                animationDelay: `${i * 0.3}s`,
                transform: `translateX(${(mousePosition.x - 0.5) * 5}px) translateY(${(mousePosition.y - 0.5) * 5}px)`,
                transition: 'transform 1.5s cubic-bezier(0.19, 1, 0.22, 1)',
                filter: 'blur(0.3px)',
                boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, ${0.2 * cursorGlow})`,
              }}
            />
          );
        })}
      </div>
      
      {/* Enhanced light ray system - cinematic atmosphere */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * 2 * Math.PI;
          const length = 80 + Math.random() * 60;
          const width = 150 + Math.random() * 200;
          const posX = 50 + Math.cos(angle) * 30;
          const posY = 50 + Math.sin(angle) * 30;
          const opacity = 0.04 + Math.random() * 0.08;
          
          return (
            <div
              key={`enhanced-ray-${i}`}
              className="absolute"
              style={{
                width: `${width}px`,
                height: `${length}vh`,
                left: `${posX}%`,
                top: `${posY}%`,
                background: `linear-gradient(to top, 
                  transparent, 
                  ${i % 3 === 0 ? `rgba(255, 135, 67, ${opacity * cursorGlow * 2})` :
                    i % 3 === 1 ? `rgba(0, 79, 77, ${opacity * cursorGlow * 1.8})` :
                    `rgba(62, 49, 102, ${opacity * cursorGlow * 1.5})`}, 
                  transparent)`,
                opacity: opacity * (1 + cursorIntensity * 1.2),
                filter: 'blur(35px)',
                transform: `rotate(${angle + Math.PI/2}rad) translateY(${scrollPosition * 0.03}px) scale(${1 + cursorIntensity * 0.2})`,
                transition: 'opacity 3s ease-out, transform 3s cubic-bezier(0.19, 1, 0.22, 1)',
                animation: `light-ray-pulse ${20 + i * 3}s infinite ease-in-out`,
                animationDelay: `${i * 2.5}s`,
              }}
            />
          );
        })}
      </div>
      
      {/* Enhanced SVG neural network - connecting tissue */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-40" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        style={{
          filter: `blur(${0.5 + cursorIntensity}px)`,
          opacity: 0.3 + cursorGlow * 0.4,
        }}
      >
        <defs>
          <linearGradient id="enhancedNeuralGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={`rgba(255, 135, 67, 0)`} />
            <stop offset="50%" stopColor={`rgba(255, 135, 67, ${0.4 * cursorGlow})`} />
            <stop offset="100%" stopColor={`rgba(255, 135, 67, 0)`} />
          </linearGradient>
          <linearGradient id="enhancedNeuralGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={`rgba(0, 79, 77, 0)`} />
            <stop offset="50%" stopColor={`rgba(0, 79, 77, ${0.35 * cursorGlow})`} />
            <stop offset="100%" stopColor={`rgba(0, 79, 77, 0)`} />
          </linearGradient>
          <linearGradient id="enhancedNeuralGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={`rgba(62, 49, 102, 0)`} />
            <stop offset="50%" stopColor={`rgba(62, 49, 102, ${0.3 * cursorGlow})`} />
            <stop offset="100%" stopColor={`rgba(62, 49, 102, 0)`} />
          </linearGradient>
        </defs>
        
        {/* Enhanced flowing neural pathways */}
        <path d="M10,20 Q30,10 50,15 Q70,20 90,25" stroke="url(#enhancedNeuralGradient1)" strokeWidth="0.4" fill="none">
          <animate attributeName="stroke-dasharray" values="0,200;100,100;0,200" dur="12s" repeatCount="indefinite" />
        </path>
        <path d="M15,45 Q35,35 55,40 Q75,45 95,50" stroke="url(#enhancedNeuralGradient2)" strokeWidth="0.35" fill="none">
          <animate attributeName="stroke-dasharray" values="0,200;80,120;0,200" dur="15s" repeatCount="indefinite" />
        </path>
        <path d="M5,70 Q25,60 45,65 Q65,70 85,75" stroke="url(#enhancedNeuralGradient3)" strokeWidth="0.3" fill="none">
          <animate attributeName="stroke-dasharray" values="0,200;120,80;0,200" dur="18s" repeatCount="indefinite" />
        </path>
        
        {/* Enhanced pulsing connection nodes */}
        <circle cx="25" cy="20" r="2" fill={`rgba(255, 135, 67, ${0.6 * cursorGlow})`}>
          <animate attributeName="r" values="1.5;4;1.5" dur="8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;1;0.4" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="75" cy="70" r="1.8" fill={`rgba(0, 79, 77, ${0.5 * cursorGlow})`}>
          <animate attributeName="r" values="1;3.5;1" dur="10s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="45" r="2.2" fill={`rgba(62, 49, 102, ${0.4 * cursorGlow})`}>
          <animate attributeName="r" values="1.2;4.5;1.2" dur="12s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="12s" repeatCount="indefinite" />
        </circle>
      </svg>
      
      {/* Cinematic edge fade overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, 
            transparent 30%, 
            rgba(253, 253, 253, 0.05) 60%, 
            rgba(253, 253, 253, 0.15) 85%, 
            rgba(253, 253, 253, 0.25) 100%)`,
        }}
      />
    </div>
  );
};

export default FullScreenCellularBackground;
