
import React from 'react';

type CursorEffectsProps = {
  isVisible: boolean;
  cursorProximity: number;
  interactionIntensity: number;
};

const CursorEffects: React.FC<CursorEffectsProps> = ({ 
  isVisible, 
  cursorProximity,
  interactionIntensity 
}) => {
  if (!isVisible) return null;
  
  return (
    <>
      {/* Interactive, cursor-responsive synaptic connections that form and dissolve */}
      {cursorProximity > 0.4 && Array.from({ length: 4 }).map((_, i) => {
        const angle1 = Math.random() * 2 * Math.PI;
        const angle2 = angle1 + (Math.random() * Math.PI - Math.PI/2);
        const distance = 15 + Math.random() * 25;
        
        const x1 = 50 + Math.cos(angle1) * distance;
        const y1 = 50 + Math.sin(angle1) * distance;
        const x2 = 50 + Math.cos(angle2) * distance;
        const y2 = 50 + Math.sin(angle2) * distance;
        
        const opacityFactor = (cursorProximity - 0.4) / 0.6;
        const synapseDuration = 3 + Math.random() * 2;
        
        return (
          <svg 
            key={`synapse-${i}`}
            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
            style={{ opacity: opacityFactor * 0.6 }}
          >
            <line
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="rgba(255, 255, 255, 0.5)"
              strokeWidth="0.5"
              strokeDasharray="3,3"
              style={{
                animation: `synapse-pulse ${synapseDuration}s infinite alternate ease-in-out`,
              }}
            />
          </svg>
        );
      })}

      {/* Dynamic cellular membrane that responds to cursor proximity */}
      <div
        className={`absolute rounded-full ${isVisible ? 'opacity-50' : 'opacity-0'}`}
        style={{
          width: `70%`,
          height: `70%`,
          background: `radial-gradient(circle, 
            rgba(255, 255, 255, ${0.03 + cursorProximity * 0.05}) 0%, 
            transparent 80%)`,
          border: `0.5px solid rgba(255, 255, 255, ${0.04 + cursorProximity * 0.05})`,
          filter: `blur(${3 - cursorProximity * 1.5}px)`,
          transition: 'opacity 2s ease-out, filter 1s ease-out, border 1s ease-out',
          animation: 'cellular-morph 25s infinite ease-in-out',
        }}
      ></div>
    </>
  );
};

export default CursorEffects;
