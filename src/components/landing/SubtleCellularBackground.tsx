
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
      // Significantly increased particle count for rich, immersive cellular environment
      const particles = generateCellularParticles(85);
      setCellElements(particles);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Enhanced cellular particle system with sophisticated organic motion */}
      <div className="cellular-background-container">
        {cellElements.map((particle) => (
          <CellularParticle key={particle.id} particle={particle} />
        ))}
      </div>
      
      {/* Enhanced membrane overlay system */}
      <MembraneOverlays />
      
      {/* Enhanced atmospheric depth with multiple layers */}
      <div 
        className="absolute inset-0 opacity-6"
        style={{
          background: `
            radial-gradient(circle at 25% 30%, rgba(255, 255, 255, 0.02) 0%, transparent 55%),
            radial-gradient(circle at 75% 70%, rgba(248, 250, 252, 0.015) 0%, transparent 65%),
            radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.008) 0%, transparent 40%),
            radial-gradient(circle at 80% 40%, rgba(251, 146, 60, 0.006) 0%, transparent 45%)
          `,
          filter: 'blur(100px)',
          zIndex: 0
        }}
      />

      {/* Additional subtle texture layer for enhanced depth */}
      <div 
        className="absolute inset-0 opacity-4"
        style={{
          background: `
            repeating-radial-gradient(circle at 30% 60%, 
              transparent 0%, 
              rgba(255, 255, 255, 0.003) 20%, 
              transparent 40%
            ),
            repeating-radial-gradient(circle at 70% 30%, 
              transparent 0%, 
              rgba(229, 231, 235, 0.005) 25%, 
              transparent 50%
            )
          `,
          filter: 'blur(150px)',
          zIndex: 0
        }}
      />
    </div>
  );
};

export default SubtleCellularBackground;
