
import React from 'react';

type LightTendrilsProps = {
  isVisible: boolean;
  cursorProximity: number;
  tendrilCount?: number;
};

const LightTendrils: React.FC<LightTendrilsProps> = ({ 
  isVisible, 
  cursorProximity,
  tendrilCount = 12 
}) => {
  if (!isVisible) return null;
  
  return (
    <>
      {Array.from({ length: tendrilCount }).map((_, i) => {
        const angle = (i / tendrilCount) * 2 * Math.PI;
        // Length increases based on cursor proximity for a more interactive feel
        const length = 40 + Math.random() * 30 + (cursorProximity * 10);
        const width = 0.7 + Math.random() * 2.2 + (cursorProximity * 0.8);
        // Opacity increases based on cursor proximity
        const baseOpacity = 0.15 + Math.random() * 0.25;
        const dynamicOpacity = baseOpacity + (cursorProximity * 0.2);
        const duration = 20 + Math.random() * 15;
        const delay = Math.random() * 8;
        
        return (
          <div
            key={`tendril-${i}`}
            className="absolute top-1/2 left-1/2 origin-left"
            style={{
              width: `${length}%`,
              height: `${width}px`,
              opacity: dynamicOpacity,
              transform: `rotate(${angle}rad) translateX(15%)`,
              background: 'linear-gradient(to right, rgba(255,255,255,0.6), transparent)',
              filter: 'blur(2.5px)',
              animation: `pulse-slow ${duration}s infinite alternate ease-in-out`,
              animationDelay: `${delay}s`,
              transition: 'width 1.2s ease-out, opacity 1.2s ease-out',
            }}
          ></div>
        );
      })}
    </>
  );
};

export default LightTendrils;
