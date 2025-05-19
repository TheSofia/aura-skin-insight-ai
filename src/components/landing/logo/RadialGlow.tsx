
import React from 'react';

type RadialGlowProps = {
  isVisible: boolean;
  interactionIntensity: number;
  cursorProximity: number;
};

const RadialGlow: React.FC<RadialGlowProps> = ({ 
  isVisible, 
  interactionIntensity,
  cursorProximity
}) => {
  return (
    <div 
      className={`absolute inset-0 bg-radial-gradient from-white/50 via-transparent to-transparent transition-opacity duration-3000 ${
        isVisible ? 'opacity-60' : 'opacity-0'
      }`}
      style={{
        transform: `scale(${1 + interactionIntensity * 0.1 + cursorProximity * 0.1})`,
        opacity: 0.6 + interactionIntensity * 0.2 + cursorProximity * 0.15
      }}
    ></div>
  );
};

export default RadialGlow;
