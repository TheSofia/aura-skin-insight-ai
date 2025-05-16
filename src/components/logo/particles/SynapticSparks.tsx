
import React from 'react';
import { IntensityLevel } from '../../../types/logo';

interface SynapticSparksProps {
  intensity: IntensityLevel;
}

const SynapticSparks: React.FC<SynapticSparksProps> = ({ intensity }) => {
  // New synaptic sparks for neural connection visualization
  const synapticSparks = intensity !== 'subtle' ? Array(intensity === 'vibrant' ? 3 : 2).fill(0) : [];

  if (synapticSparks.length === 0) return null;

  return (
    <>
      {synapticSparks.map((_, i) => {
        // Create random paths for synaptic sparks
        const startAngle = Math.random() * 2 * Math.PI;
        const endAngle = startAngle + (Math.random() * Math.PI - Math.PI/2);
        
        const startRadius = 15 + Math.random() * 25;
        const endRadius = 15 + Math.random() * 25;
        
        const startX = 50 + Math.cos(startAngle) * startRadius;
        const startY = 50 + Math.sin(startAngle) * startRadius;
        const endX = 50 + Math.cos(endAngle) * endRadius;
        const endY = 50 + Math.sin(endAngle) * endRadius;

        // Animation duration varies for organic feel
        const animDuration = 1.5 + Math.random() * 1.5;
        
        // Choose a color for the spark - subtle purples and oranges
        const colors = [
          'rgba(110, 89, 165, 0.8)',  // Purple
          'rgba(242, 150, 105, 0.7)', // Orange
          'rgba(249, 115, 22, 0.65)'  // Brighter orange
        ];
        const sparkColor = colors[i % colors.length];
        
        return (
          <React.Fragment key={`spark-${i}`}>
            {/* The actual spark particle */}
            <div 
              className="absolute rounded-full z-20"
              style={{
                width: '0.35rem',
                height: '0.35rem',
                background: sparkColor,
                boxShadow: `0 0 4px 1px ${sparkColor}`,
                opacity: 0,
                left: `${startX}%`,
                top: `${startY}%`,
                animation: `synaptic-spark ${animDuration}s infinite`,
                animationDelay: `${i * 2 + Math.random() * 2}s`,
              }}
            ></div>
            
            {/* The path that the spark follows */}
            <svg 
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              style={{ opacity: 0.6 }}
            >
              <path
                d={`M ${startX} ${startY} Q ${(startX + endX) / 2 + (Math.random() * 10 - 5)} ${(startY + endY) / 2 + (Math.random() * 10 - 5)}, ${endX} ${endY}`}
                stroke={sparkColor}
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="3,3"
                style={{
                  opacity: 0,
                  animation: `neural-path ${animDuration}s infinite`,
                  animationDelay: `${i * 2 + Math.random() * 2}s`,
                }}
              />
            </svg>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default SynapticSparks;
