
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
      // Drastically reduced particle count for barely-there textural effect (Knowledge Dataset requirement)
      const particles = generateCellularParticles(25); // Reduced from 120 to 25
      setCellElements(particles);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Drastically reduced cellular particle system - barely-there textural effect */}
      <div className="cellular-background-container opacity-20"> {/* Reduced opacity for subtlety */}
        {cellElements.map((particle) => (
          <CellularParticle key={particle.id} particle={particle} />
        ))}
      </div>
      
      {/* Ultra-subtle membrane overlay system */}
      <MembraneOverlays />
      
      {/* Extremely subtle atmospheric depth - Knowledge Dataset aligned */}
      <div 
        className="absolute inset-0 opacity-2" // Dramatically reduced opacity
        style={{
          background: `
            radial-gradient(circle at 20% 25%, rgba(236, 236, 236, 0.005) 0%, transparent 50%),
            radial-gradient(circle at 80% 75%, rgba(245, 245, 245, 0.003) 0%, transparent 60%),
            radial-gradient(circle at 45% 15%, rgba(44, 62, 115, 0.002) 0%, transparent 35%),
            radial-gradient(circle at 75% 35%, rgba(169, 50, 38, 0.001) 0%, transparent 40%)
          `,
          filter: 'blur(120px)',
          zIndex: 0
        }}
      />

      {/* Barely visible cellular grid pattern - ultra-subtle */}
      <div 
        className="absolute inset-0 opacity-1" // Extremely subtle
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 150px,
              rgba(236, 236, 236, 0.002) 150px,
              rgba(236, 236, 236, 0.002) 152px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 150px,
              rgba(236, 236, 236, 0.002) 150px,
              rgba(236, 236, 236, 0.002) 152px
            )
          `,
          filter: 'blur(2px)',
          zIndex: 0
        }}
      />
    </div>
  );
};

export default SubtleCellularBackground;
