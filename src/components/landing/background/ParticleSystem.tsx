
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
      {/* Layer 1: Large intelligent luminous particles */}
      {Array.from({ length: 20 }).map((_, i) => {
        const size = 12 + Math.random() * 20;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = 0.5 + Math.random() * 0.6;
        const duration = 18 + Math.random() * 22;
        
        return (
          <div
            key={`large-intelligent-particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${posX}%`,
              top: `${posY}%`,
              background: `radial-gradient(circle, 
                ${i % 4 === 0 ? `rgba(0, 166, 126, ${opacity * cursorGlow})` : 
                  i % 4 === 1 ? `rgba(255, 119, 69, ${opacity * cursorGlow * 0.9})` : 
                  i % 4 === 2 ? `rgba(62, 49, 102, ${opacity * cursorGlow * 0.8})` :
                  `rgba(233, 218, 174, ${opacity * cursorGlow * 1.1})`} 0%, 
                transparent 70%)`,
              opacity: opacity * (0.7 + cursorIntensity * 0.9),
              animation: `orbital-float ${duration}s infinite ease-in-out`,
              animationDelay: `${i * 0.9}s`,
              transform: `translateX(${(mousePosition.x - 0.5) * 20}px) translateY(${(mousePosition.y - 0.5) * 20}px) scale(${1 + cursorIntensity * 0.3})`,
              transition: 'transform 1.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 1.2s ease-out',
              filter: `blur(${0.8 - cursorGlow * 0.3}px) brightness(${1.3 + cursorGlow * 0.4})`,
              boxShadow: `0 0 ${size * 1.2}px ${
                i % 4 === 0 ? `rgba(0, 166, 126, ${0.4 * cursorGlow})` :
                i % 4 === 1 ? `rgba(255, 119, 69, ${0.35 * cursorGlow})` :
                i % 4 === 2 ? `rgba(62, 49, 102, ${0.3 * cursorGlow})` :
                `rgba(233, 218, 174, ${0.4 * cursorGlow})`
              }`,
            }}
          />
        );
      })}
      
      {/* Layer 2: Medium intelligent flowing particles */}
      {Array.from({ length: 35 }).map((_, i) => {
        const size = 6 + Math.random() * 12;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = 0.4 + Math.random() * 0.5;
        const duration = 12 + Math.random() * 18;
        
        return (
          <div
            key={`medium-intelligent-particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${posX}%`,
              top: `${posY}%`,
              background: `radial-gradient(circle, 
                ${i % 5 === 0 ? `rgba(0, 166, 126, ${opacity * cursorGlow})` : 
                  i % 5 === 1 ? `rgba(255, 119, 69, ${opacity * cursorGlow * 0.8})` : 
                  i % 5 === 2 ? `rgba(62, 49, 102, ${opacity * cursorGlow * 0.7})` :
                  i % 5 === 3 ? `rgba(233, 218, 174, ${opacity * cursorGlow * 0.9})` :
                  `rgba(230, 230, 230, ${opacity * cursorGlow * 0.6})`} 0%, 
                transparent 80%)`,
              opacity: opacity * (0.8 + cursorIntensity * 0.7),
              animation: `cellular-drift ${duration}s infinite linear`,
              animationDelay: `${i * 0.7}s`,
              transform: `translateX(${(mousePosition.x - 0.5) * 15}px) translateY(${(mousePosition.y - 0.5) * 15}px)`,
              transition: 'transform 1.5s cubic-bezier(0.19, 1, 0.22, 1)',
              filter: `blur(${0.4 - cursorGlow * 0.2}px) saturate(${1.4 + cursorIntensity * 0.3})`,
            }}
          />
        );
      })}
      
      {/* Layer 3: Micro intelligent shimmer particles */}
      {Array.from({ length: 60 }).map((_, i) => {
        const size = 2 + Math.random() * 4;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = 0.3 + Math.random() * 0.4;
        const duration = 8 + Math.random() * 12;
        
        return (
          <div
            key={`micro-intelligent-particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${posX}%`,
              top: `${posY}%`,
              background: `radial-gradient(circle, 
                ${i % 3 === 0 ? `rgba(233, 218, 174, ${opacity * cursorGlow * 1.2})` :
                  i % 3 === 1 ? `rgba(255, 255, 255, ${opacity * cursorGlow})` :
                  `rgba(0, 166, 126, ${opacity * cursorGlow * 0.8})`} 0%, 
                transparent 100%)`,
              opacity: opacity * (0.9 + cursorIntensity * 0.5),
              animation: `drift-particle ${duration}s infinite alternate ease-in-out`,
              animationDelay: `${i * 0.4}s`,
              transform: `translateX(${(mousePosition.x - 0.5) * 8}px) translateY(${(mousePosition.y - 0.5) * 8}px)`,
              transition: 'transform 1.2s cubic-bezier(0.19, 1, 0.22, 1)',
              filter: `blur(${0.2}px) brightness(${1.4 + cursorGlow * 0.4})`,
              boxShadow: `0 0 ${size * 3}px ${
                i % 3 === 0 ? `rgba(233, 218, 174, ${0.3 * cursorGlow})` :
                i % 3 === 1 ? `rgba(255, 255, 255, ${0.2 * cursorGlow})` :
                `rgba(0, 166, 126, ${0.25 * cursorGlow})`
              }`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleSystem;
