
import React from 'react';

type AtmosphericParticlesProps = {
  isVisible: boolean;
  cursorProximity: number;
  particleCount?: number;
};

const AtmosphericParticles: React.FC<AtmosphericParticlesProps> = ({ 
  isVisible, 
  cursorProximity,
  particleCount = 28
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: particleCount }).map((_, i) => {
        const size = Math.random() * 5 + 1 + (cursorProximity * 1.5);
        const duration = Math.random() * 25 + 20;
        const delay = Math.random() * 8;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = startX + (Math.random() * 30 - 15);
        const endY = startY + (Math.random() * 30 - 15);
        
        // Dynamic opacity based on cursor proximity for a more interactive feel
        const baseOpacity = 0.5;
        const dynamicOpacity = baseOpacity + (cursorProximity * 0.2);
        
        return (
          <div
            key={i}
            className="absolute rounded-full animate-drift-particle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${startX}%`,
              top: `${startY}%`,
              animation: `drift-particle ${duration}s infinite alternate ease-in-out`,
              animationDelay: `${delay}s`,
              opacity: isVisible ? dynamicOpacity : 0,
              transition: 'opacity 3s ease-out, width 1s ease-out, height 1s ease-out',
              filter: 'blur(2px)',
              '--start-x': `${startX}%`,
              '--start-y': `${startY}%`,
              '--end-x': `${endX}%`,
              '--end-y': `${endY}%`,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
};

export default AtmosphericParticles;
