
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
    <div className="absolute inset-0 scale-150 overflow-hidden">
      {/* Primary massive cellular cluster - intelligent breathing core */}
      <div 
        className="absolute left-1/2 top-1/2 w-[140vw] h-[140vh] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `radial-gradient(ellipse at center, 
            rgba(0, 166, 126, ${0.35 * cursorGlow}) 0%, 
            rgba(62, 49, 102, ${0.25 * cursorGlow}) 25%, 
            rgba(255, 119, 69, ${0.20 * cursorGlow}) 50%, 
            rgba(233, 218, 174, ${0.12 * cursorGlow}) 70%, 
            transparent 85%)`,
          borderRadius: '45% 55% 60% 40% / 50% 40% 60% 50%',
          transform: `scale(${1 + Math.sqrt(Math.pow(0.5 - 0.5, 2) + Math.pow(0.5 - 0.5, 2)) * 0.15}) rotate(${scrollPosition * 0.02}deg)`,
          transition: 'transform 2s cubic-bezier(0.19, 1, 0.22, 1)',
          animation: 'cellular-morph 20s infinite ease-in-out',
          filter: `brightness(${1.2 + cursorGlow * 0.3})`,
        }}
      />
      
      {/* Secondary intelligent cellular structures - interconnected network */}
      <div 
        className="absolute left-[20%] top-[25%] w-[80vw] h-[80vh] opacity-85"
        style={{
          background: `radial-gradient(ellipse at 35% 65%, 
            rgba(62, 49, 102, ${0.30 * cursorGlow}) 0%, 
            rgba(0, 166, 126, ${0.18 * cursorGlow}) 40%, 
            rgba(255, 119, 69, ${0.12 * cursorGlow}) 70%, 
            transparent 90%)`,
          borderRadius: '55% 45% 50% 50% / 45% 55% 50% 50%',
          transform: `rotate(${-scrollPosition * 0.015}deg) scale(${1 + cursorGlow * 0.08})`,
          animation: 'cellular-drift 30s infinite linear reverse',
          filter: `contrast(${1.1 + cursorGlow * 0.2})`,
        }}
      />
      
      <div 
        className="absolute right-[15%] bottom-[20%] w-[70vw] h-[70vh] opacity-80"
        style={{
          background: `radial-gradient(circle at 65% 35%, 
            rgba(255, 119, 69, ${0.32 * cursorGlow}) 0%, 
            rgba(0, 166, 126, ${0.22 * cursorGlow}) 35%, 
            rgba(62, 49, 102, ${0.15 * cursorGlow}) 65%, 
            transparent 85%)`,
          borderRadius: '50% 50% 45% 55% / 60% 40% 55% 45%',
          animation: 'cellular-morph 25s infinite ease-in-out reverse',
          filter: `saturate(${1.3 + cursorGlow * 0.4})`,
        }}
      />

      {/* Micro cellular clusters - intelligent detail layer */}
      <div 
        className="absolute left-[35%] top-[15%] w-[40vw] h-[40vh] opacity-70"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(233, 218, 174, ${0.25 * cursorGlow}) 0%, 
            rgba(255, 119, 69, ${0.15 * cursorGlow}) 50%, 
            transparent 80%)`,
          borderRadius: '60% 40% 55% 45% / 50% 50% 45% 55%',
          animation: 'pulse-cellular 18s infinite ease-in-out',
          transform: `scale(${0.9 + cursorGlow * 0.2})`,
        }}
      />

      <div 
        className="absolute right-[30%] top-[40%] w-[35vw] h-[35vh] opacity-65"
        style={{
          background: `radial-gradient(ellipse at 70% 30%, 
            rgba(0, 166, 126, ${0.20 * cursorGlow}) 0%, 
            rgba(62, 49, 102, ${0.12 * cursorGlow}) 60%, 
            transparent 85%)`,
          borderRadius: '45% 55% 50% 50% / 55% 45% 50% 50%',
          animation: 'cellular-drift 22s infinite linear',
          filter: `blur(${0.5 - cursorGlow * 0.2}px)`,
        }}
      />
    </div>
  );
};

export default CellularCore;
