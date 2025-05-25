
import React from 'react';

type MembraneFlowsProps = {
  isVisible: boolean;
  cursorGlow: number;
  cursorIntensity: number;
  mousePosition: { x: number; y: number };
  scrollPosition: number;
};

const MembraneFlows: React.FC<MembraneFlowsProps> = ({ 
  isVisible, 
  cursorGlow, 
  cursorIntensity, 
  mousePosition, 
  scrollPosition 
}) => {
  return (
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
  );
};

export default MembraneFlows;
