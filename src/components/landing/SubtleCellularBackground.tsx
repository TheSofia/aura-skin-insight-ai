
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
      // Significantly increased particle count for richer ambient animation
      const particles = generateCellularParticles(45);
      setCellElements(particles);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Enhanced cellular particle system with independent motion */}
      <div className="cellular-background-container">
        {cellElements.map((particle) => (
          <CellularParticle key={particle.id} particle={particle} />
        ))}
      </div>
      
      {/* Enhanced membrane overlay system */}
      <MembraneOverlays />
      
      {/* Enhanced atmospheric depth */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          background: `
            radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.025) 0%, transparent 60%),
            radial-gradient(circle at 70% 60%, rgba(248, 250, 252, 0.02) 0%, transparent 70%)
          `,
          filter: 'blur(120px)',
          zIndex: 0
        }}
      />
    </div>
  );
};

export default SubtleCellularBackground;
