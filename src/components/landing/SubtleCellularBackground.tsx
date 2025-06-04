
import React, { useEffect, useState } from 'react';
import { generateCellularParticles, CellularParticle as CellularParticleType } from '@/utils/cellularParticleGenerator';
import CellularParticle from './background/CellularParticle';
import MembraneOverlays from './background/MembraneOverlays';

interface SubtleCellularBackgroundProps {
  isVisible?: boolean;
}

const SubtleCellularBackground: React.FC<SubtleCellularBackgroundProps> = ({ 
  isVisible = true 
}) => {
  const [cellElements, setCellElements] = useState<CellularParticleType[]>([]);

  useEffect(() => {
    if (isVisible) {
      // Optimized particle count for smooth performance
      const particles = generateCellularParticles(25);
      setCellElements(particles);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Optimized cellular particle system with performance monitoring */}
      <div className="cellular-background-container">
        {cellElements.map((particle) => (
          <CellularParticle key={particle.id} particle={particle} />
        ))}
      </div>
      
      {/* Optimized membrane overlay system */}
      <MembraneOverlays />
      
      {/* Subtle atmosphere enhancement */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 70%)`,
          filter: 'blur(100px)',
          zIndex: 0
        }}
      />
    </div>
  );
};

export default SubtleCellularBackground;
