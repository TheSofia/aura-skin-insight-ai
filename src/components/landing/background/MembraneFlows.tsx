
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
      {/* Primary intelligent membrane flow - wave-like dynamics */}
      <div 
        className="absolute top-0 left-0 w-[160%] h-[200%] opacity-75"
        style={{
          background: `linear-gradient(125deg, 
            transparent 0%, 
            rgba(255, 119, 69, ${0.18 * cursorGlow}) 15%, 
            rgba(0, 166, 126, ${0.14 * cursorGlow}) 35%, 
            rgba(62, 49, 102, ${0.10 * cursorGlow}) 55%, 
            rgba(233, 218, 174, ${0.08 * cursorGlow}) 75%, 
            transparent 90%)`,
          transform: `translateY(${-scrollPosition * 0.06}px) rotateZ(${mousePosition.x * 2}deg) scale(${1 + cursorIntensity * 0.08})`,
          borderRadius: '40% 60% 50% 50% / 30% 70% 60% 40%',
          transition: 'transform 2.5s cubic-bezier(0.19, 1, 0.22, 1)',
          animation: 'structural-cell-motion 35s infinite ease-in-out',
          filter: `brightness(${1.1 + cursorGlow * 0.3}) contrast(${1.2 + cursorIntensity * 0.2})`,
        }}
      />
      
      {/* Secondary membrane flow - counter intelligent movement */}
      <div 
        className="absolute bottom-0 right-0 w-[150%] h-[180%] opacity-65"
        style={{
          background: `linear-gradient(315deg, 
            transparent 0%, 
            rgba(62, 49, 102, ${0.20 * cursorGlow}) 20%, 
            rgba(0, 166, 126, ${0.16 * cursorGlow}) 40%, 
            rgba(255, 119, 69, ${0.12 * cursorGlow}) 60%, 
            rgba(233, 218, 174, ${0.08 * cursorGlow}) 80%, 
            transparent 95%)`,
          transform: `translateY(${scrollPosition * 0.04}px) rotateZ(${-mousePosition.y * 1.5}deg) scale(${1 + cursorGlow * 0.1})`,
          borderRadius: '55% 45% 40% 60% / 50% 50% 45% 55%',
          transition: 'transform 3s cubic-bezier(0.19, 1, 0.22, 1)',
          animation: 'cellular-drift-slow 40s infinite linear',
          filter: `saturate(${1.4 + cursorGlow * 0.3})`,
        }}
      />
      
      {/* Tertiary wave layer - micro intelligent details */}
      <div 
        className="absolute left-[25%] top-[35%] w-[110%] h-[130%] opacity-50"
        style={{
          background: `radial-gradient(ellipse at center, 
            rgba(233, 218, 174, ${0.12 * cursorGlow}) 0%, 
            rgba(255, 119, 69, ${0.08 * cursorGlow}) 30%, 
            rgba(0, 166, 126, ${0.06 * cursorGlow}) 60%, 
            transparent 85%)`,
          transform: `rotate(${scrollPosition * 0.008}deg) scale(${0.9 + cursorIntensity * 0.25})`,
          animation: 'pulse-cellular 25s infinite ease-in-out',
          filter: `blur(${1 - cursorGlow * 0.3}px)`,
        }}
      />

      {/* Advanced connector filaments layer */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `conic-gradient(from ${scrollPosition * 0.1}deg at 50% 50%, 
            transparent 0deg,
            rgba(0, 166, 126, ${0.1 * cursorGlow}) 45deg,
            transparent 90deg,
            rgba(255, 119, 69, ${0.08 * cursorGlow}) 135deg,
            transparent 180deg,
            rgba(62, 49, 102, ${0.06 * cursorGlow}) 225deg,
            transparent 270deg,
            rgba(233, 218, 174, ${0.05 * cursorGlow}) 315deg,
            transparent 360deg)`,
          animation: 'cellular-drift 50s infinite linear',
          filter: `blur(2px) brightness(${1.2 + cursorIntensity * 0.4})`,
        }}
      />
    </div>
  );
};

export default MembraneFlows;
