
import React from 'react';

type CellularCoreProps = {
  isVisible: boolean;
  cursorGlow: number;
  scrollPosition: number;
};

const CellularCore: React.FC<CellularCoreProps> = ({ 
  isVisible, 
  cursorGlow, 
  scrollPosition 
}) => {
  return (
    <div className="absolute inset-0 scale-125">
      {/* Primary massive cellular cluster - center stage */}
      <div 
        className="absolute left-1/2 top-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `radial-gradient(ellipse at center, 
            rgba(62, 49, 102, ${0.25 * cursorGlow}) 0%, 
            rgba(255, 135, 67, ${0.18 * cursorGlow}) 25%, 
            rgba(0, 79, 77, ${0.15 * cursorGlow}) 50%, 
            rgba(233, 218, 174, ${0.08 * cursorGlow}) 70%, 
            transparent 85%)`,
          borderRadius: '45% 55% 60% 40% / 50% 40% 60% 50%',
          transform: `scale(${1 + Math.sqrt(Math.pow(0.5 - 0.5, 2) + Math.pow(0.5 - 0.5, 2)) * 0.1}) rotate(${scrollPosition * 0.03}deg)`,
          transition: 'transform 2s cubic-bezier(0.19, 1, 0.22, 1)',
          animation: 'cellular-morph 25s infinite ease-in-out',
        }}
      />
      
      {/* Secondary large cellular structures - supporting cast */}
      <div 
        className="absolute left-[15%] top-[20%] w-[70vw] h-[70vh] opacity-80"
        style={{
          background: `radial-gradient(ellipse at 30% 70%, 
            rgba(0, 79, 77, ${0.20 * cursorGlow}) 0%, 
            rgba(62, 49, 102, ${0.12 * cursorGlow}) 40%, 
            rgba(255, 135, 67, ${0.08 * cursorGlow}) 70%, 
            transparent 90%)`,
          borderRadius: '60% 40% 45% 55% / 40% 60% 50% 50%',
          transform: `rotate(${-scrollPosition * 0.02}deg)`,
          animation: 'cellular-drift 35s infinite linear reverse',
        }}
      />
      
      <div 
        className="absolute right-[10%] bottom-[15%] w-[60vw] h-[60vh] opacity-75"
        style={{
          background: `radial-gradient(circle at 70% 30%, 
            rgba(255, 135, 67, ${0.22 * cursorGlow}) 0%, 
            rgba(156, 28, 61, ${0.15 * cursorGlow}) 35%, 
            rgba(62, 49, 102, ${0.10 * cursorGlow}) 65%, 
            transparent 85%)`,
          borderRadius: '50% 50% 40% 60% / 55% 45% 60% 40%',
          animation: 'cellular-morph 30s infinite ease-in-out reverse',
        }}
      />
    </div>
  );
};

export default CellularCore;
