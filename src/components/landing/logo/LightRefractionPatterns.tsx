
import React from 'react';

type LightRefractionPatternsProps = {
  isVisible: boolean;
  cursorProximity: number;
  patternCount?: number;
};

const LightRefractionPatterns: React.FC<LightRefractionPatternsProps> = ({ 
  isVisible, 
  cursorProximity,
  patternCount = 5
}) => {
  if (!isVisible) return null;
  
  return (
    <>
      {Array.from({ length: patternCount }).map((_, i) => {
        const size = 20 + Math.random() * 40 + (cursorProximity * 15);
        const posX = Math.random() * 80 + 10; // Keep within 10-90% range
        const posY = Math.random() * 80 + 10;
        const baseOpacity = 0.05 + Math.random() * 0.1;
        const dynamicOpacity = baseOpacity + (cursorProximity * 0.08);
        const duration = 30 + Math.random() * 20;
        
        return (
          <div
            key={`caustic-${i}`}
            className="absolute rounded-full animate-radial-pulse"
            style={{
              width: `${size}%`,
              height: `${size}%`,
              left: `${posX}%`,
              top: `${posY}%`,
              background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
              opacity: dynamicOpacity,
              filter: 'blur(20px)',
              animationDuration: `${duration}s`,
              transition: 'width 1.5s ease-out, height 1.5s ease-out, opacity 1.5s ease-out',
            }}
          ></div>
        );
      })}
    </>
  );
};

export default LightRefractionPatterns;
