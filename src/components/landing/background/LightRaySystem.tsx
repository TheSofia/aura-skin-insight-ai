
import React from 'react';

type LightRaySystemProps = {
  cursorGlow: number;
  cursorIntensity: number;
  scrollPosition: number;
};

const LightRaySystem: React.FC<LightRaySystemProps> = ({ 
  cursorGlow, 
  cursorIntensity, 
  scrollPosition 
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * 2 * Math.PI;
        const length = 90 + Math.random() * 80;
        const width = 200 + Math.random() * 300;
        const posX = 50 + Math.cos(angle) * 35;
        const posY = 50 + Math.sin(angle) * 35;
        const opacity = 0.06 + Math.random() * 0.12;
        
        return (
          <div
            key={`enhanced-intelligent-ray-${i}`}
            className="absolute"
            style={{
              width: `${width}px`,
              height: `${length}vh`,
              left: `${posX}%`,
              top: `${posY}%`,
              background: `linear-gradient(to top, 
                transparent, 
                ${i % 4 === 0 ? `rgba(0, 166, 126, ${opacity * cursorGlow * 2.2})` :
                  i % 4 === 1 ? `rgba(255, 119, 69, ${opacity * cursorGlow * 2.0})` :
                  i % 4 === 2 ? `rgba(62, 49, 102, ${opacity * cursorGlow * 1.8})` :
                  `rgba(233, 218, 174, ${opacity * cursorGlow * 2.4})`}, 
                transparent)`,
              opacity: opacity * (1.2 + cursorIntensity * 1.5),
              filter: `blur(${25 - cursorGlow * 8}px) brightness(${1.3 + cursorIntensity * 0.4})`,
              transform: `rotate(${angle + Math.PI/2}rad) translateY(${scrollPosition * 0.04}px) scale(${1 + cursorIntensity * 0.3})`,
              transition: 'opacity 2.5s ease-out, transform 2.5s cubic-bezier(0.19, 1, 0.22, 1)',
              animation: `light-ray-pulse ${15 + i * 2.5}s infinite ease-in-out`,
              animationDelay: `${i * 2}s`,
              mixBlendMode: 'screen',
            }}
          />
        );
      })}
      
      {/* Enhanced connector light bridges */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle1 = Math.random() * 2 * Math.PI;
        const angle2 = angle1 + (Math.random() * Math.PI - Math.PI/2);
        const distance = 20 + Math.random() * 30;
        
        const x1 = 50 + Math.cos(angle1) * distance;
        const y1 = 50 + Math.sin(angle1) * distance;
        const x2 = 50 + Math.cos(angle2) * distance;
        const y2 = 50 + Math.sin(angle2) * distance;
        
        return (
          <svg 
            key={`light-bridge-${i}`}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ 
              opacity: 0.3 + cursorGlow * 0.4,
              filter: `blur(1px) brightness(${1.2 + cursorIntensity * 0.3})`
            }}
          >
            <defs>
              <linearGradient id={`bridge-gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor={
                  i % 3 === 0 ? `rgba(0, 166, 126, ${0.6 * cursorGlow})` :
                  i % 3 === 1 ? `rgba(255, 119, 69, ${0.5 * cursorGlow})` :
                  `rgba(233, 218, 174, ${0.7 * cursorGlow})`
                } />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <line
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke={`url(#bridge-gradient-${i})`}
              strokeWidth="1.5"
              style={{
                animation: `synapse-pulse ${8 + i * 2}s infinite ease-in-out`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          </svg>
        );
      })}
    </div>
  );
};

export default LightRaySystem;
