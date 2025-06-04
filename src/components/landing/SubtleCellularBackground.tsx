
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
      // Significantly reduced particle count for better performance
      const particles = generateCellularParticles(35);
      setCellElements(particles);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Optimized cellular particle system */}
      {cellElements.map((particle) => (
        <CellularParticle key={particle.id} particle={particle} />
      ))}
      
      {/* Simplified membrane overlay system */}
      <MembraneOverlays />
      
      {/* Subtle atmosphere enhancement - optimized */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.015) 0%, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />
    </div>
  );
};

export default SubtleCellularBackground;
