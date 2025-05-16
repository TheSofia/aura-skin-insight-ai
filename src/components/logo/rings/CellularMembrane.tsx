
import React from 'react';
import { IntensityStyles } from '../../../types/logo';

interface CellularMembraneProps {
  innerRingSize: string;
  intensityStyles: IntensityStyles;
}

const CellularMembrane: React.FC<CellularMembraneProps> = ({ innerRingSize, intensityStyles }) => {
  const pulseFactor = intensityStyles.pulseFactor || 1.0;
  
  return (
    <div 
      className="absolute rounded-full animate-cellular-motion z-5"
      style={{
        width: `calc(${innerRingSize.split(' ')[0]} * 2.2)`,
        height: `calc(${innerRingSize.split(' ')[1]} * 2.2)`,
        background: `radial-gradient(circle, rgba(255, 255, 255, ${intensityStyles.membraneOpacity * 1.2}) 0%, rgba(255, 255, 255, ${intensityStyles.membraneOpacity * 0.8}) 40%, rgba(255, 255, 255, ${intensityStyles.membraneOpacity * 0.3}) 70%, transparent 100%)`,
        backdropFilter: `blur(${intensityStyles.membraneBlur}px)`,
        animationDuration: `${22 / Math.sqrt(pulseFactor)}s`,
        animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
      }}
    ></div>
  );
};

export default CellularMembrane;
