
import React from 'react';

type ParticleSystemProps = {
  cursorGlow: number;
  cursorIntensity: number;
  mousePosition: { x: number; y: number };
};

const ParticleSystem: React.FC<ParticleSystemProps> = ({ 
  cursorGlow, 
  cursorIntensity, 
  mousePosition 
}) => {
  return (
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
  );
};

export default ParticleSystem;
