
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
      // Reduced particle count for more sophisticated, larger cellular forms
      const particles = generateCellularParticles(60);
      setCellElements(particles);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Cellular particle system with organic morphing */}
      {cellElements.map((particle) => (
        <CellularParticle key={particle.id} particle={particle} />
      ))}
      
      {/* Enhanced membrane overlay system */}
      <MembraneOverlays />
      
      {/* Subtle cellular atmosphere enhancement */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, 
              rgba(255, 255, 255, 0.02) 0%, 
              transparent 70%
            )
          `,
          filter: 'blur(100px)',
          zIndex: 0
        }}
      />
    </div>
  );
};

export default SubtleCellularBackground;
