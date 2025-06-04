
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
      // Significantly increased particle count for rich, immersive cellular lab environment
      const particles = generateCellularParticles(120);
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
      
      {/* Enhanced membrane overlay system for lab atmosphere */}
      <MembraneOverlays />
      
      {/* Enhanced atmospheric depth with multiple layers for lab ambiance */}
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          background: `
            radial-gradient(circle at 20% 25%, rgba(255, 255, 255, 0.025) 0%, transparent 50%),
            radial-gradient(circle at 80% 75%, rgba(248, 250, 252, 0.02) 0%, transparent 60%),
            radial-gradient(circle at 45% 15%, rgba(139, 92, 246, 0.01) 0%, transparent 35%),
            radial-gradient(circle at 75% 35%, rgba(251, 146, 60, 0.008) 0%, transparent 40%),
            radial-gradient(circle at 25% 65%, rgba(255, 255, 255, 0.015) 0%, transparent 45%),
            radial-gradient(circle at 65% 85%, rgba(229, 231, 235, 0.012) 0%, transparent 50%)
          `,
          filter: 'blur(80px)',
          zIndex: 0
        }}
      />

      {/* Additional lab-like texture layer for enhanced scientific depth */}
      <div 
        className="absolute inset-0 opacity-6"
        style={{
          background: `
            repeating-radial-gradient(circle at 25% 50%, 
              transparent 0%, 
              rgba(255, 255, 255, 0.004) 18%, 
              transparent 35%
            ),
            repeating-radial-gradient(circle at 75% 25%, 
              transparent 0%, 
              rgba(229, 231, 235, 0.006) 22%, 
              transparent 45%
            ),
            repeating-radial-gradient(circle at 50% 75%, 
              transparent 0%, 
              rgba(139, 92, 246, 0.003) 15%, 
              transparent 30%
            )
          `,
          filter: 'blur(120px)',
          zIndex: 0
        }}
      />

      {/* Subtle cellular grid pattern for scientific lab aesthetic */}
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 120px,
              rgba(255, 255, 255, 0.008) 120px,
              rgba(255, 255, 255, 0.008) 122px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 120px,
              rgba(255, 255, 255, 0.008) 120px,
              rgba(255, 255, 255, 0.008) 122px
            )
          `,
          filter: 'blur(1px)',
          zIndex: 0
        }}
      />
    </div>
  );
};

export default SubtleCellularBackground;
