
import React from 'react';
import { getParticleColor, getParticleSets } from '../../../utils/logoParticleUtils';
import { IntensityLevel } from '../../../types/logo';

interface StandardParticlesProps {
  animationClasses: { particles: string };
  intensity: IntensityLevel;
  particleOpacity?: number;
}

const StandardParticles: React.FC<StandardParticlesProps> = ({ 
  animationClasses,
  intensity,
  particleOpacity
}) => {
  const particleSets = getParticleSets(intensity, particleOpacity);

  return (
    <>
      {particleSets.map((set, setIndex) => (
        <React.Fragment key={`particle-set-${setIndex}`}>
          {Array(set.count).fill(0).map((_, i) => {
            // Generate varied properties for each particle with enhanced organic positioning
            const size = set.size.base + (Math.sin(i * 0.7) + 1) * set.size.variance;
            const opacity = set.opacity.base - (Math.cos(i * 0.5) + 1)/2 * set.opacity.variance;
            
            // Generate unique positions with more organic, non-linear distribution
            let angle, radius;
            
            if (set.orbitPath === 'dynamic') {
              // Dynamic positioning for extra organic feel
              angle = (i / set.count) * 2 * Math.PI + Math.sin(i * 0.8) * 0.3;
              radius = set.positionRadius.min + 
                (Math.sin(i * 1.2) + 1)/2 * (set.positionRadius.max - set.positionRadius.min);
            } else {
              // Enhanced organic positioning for standard orbits
              angle = (i / set.count) * 2 * Math.PI + Math.sin(i * 0.5) * 0.2;
              radius = set.positionRadius.min + 
                (i % 3 + Math.sin(i * 0.7) + 1)/3 * (set.positionRadius.max - set.positionRadius.min);
            }
            
            const posX = 50 + Math.cos(angle) * radius;
            const posY = 50 + Math.sin(angle) * radius;
            
            // Unique animation duration with more natural variation
            const duration = set.animationDuration.base + 
              (Math.sin(i * 0.9) + 1)/2 * set.animationDuration.variance;
            
            // Enhanced color scheme with better visibility
            const particleColor = getParticleColor(setIndex, i, opacity);
            
            return (
              <div 
                key={`particle-${setIndex}-${i}`}
                className={`absolute rounded-full ${animationClasses.particles}
                  transition-all duration-500 will-change-transform`}
                style={{
                  width: `${size}rem`,
                  height: `${size}rem`,
                  left: `${posX}%`,
                  top: `${posY}%`,
                  background: `radial-gradient(circle at 30% 30%, 
                    ${particleColor} 0%, 
                    ${particleColor.replace(opacity.toString(), (opacity * 0.92).toString())} 80%)`,
                  boxShadow: `0 0 ${size * 1.7}px 0 ${particleColor.replace(opacity.toString(), (opacity / 4.5).toString())}`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${i * 0.7 + Math.sin(i) * 0.3}s`,
                  animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
                  transform: 'translateZ(0)',
                  opacity: opacity,
                  filter: 'brightness(1.04)',
                }}
              >
                {/* Enhanced inner highlight for dimensionality */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.75) 0%, transparent 75%)',
                    opacity: 0.65,
                  }}
                ></div>
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </>
  );
};

export default StandardParticles;
