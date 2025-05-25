
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
  );
};

export default LightRaySystem;
