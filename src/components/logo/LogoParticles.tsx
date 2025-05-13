
import React from 'react';
import { AnimationStyle } from '../../utils/logoAnimations';

type LogoParticlesProps = {
  colorClasses: { core: string };
  animationClasses: { particles: string };
  animationStyle: AnimationStyle;
};

const LogoParticles: React.FC<LogoParticlesProps> = ({ 
  colorClasses, 
  animationClasses,
  animationStyle
}) => {
  // Create multiple sets of particles for a richer effect
  const particleSets = [
    // Inner orbiting particles - smaller, closer to core
    {
      count: 4,
      size: { base: 0.8, variance: 0.2 },
      opacity: { base: 0.65, variance: 0.15 },
      positionRadius: { min: 20, max: 35 },
      animationDuration: { base: 7, variance: 1.5 },
      orbitPath: 'inner', // Closer to core
    },
    // Outer flowing particles - slightly larger, more spread out
    {
      count: 5,
      size: { base: 1.0, variance: 0.3 },
      opacity: { base: 0.55, variance: 0.2 },
      positionRadius: { min: 30, max: 60 },
      animationDuration: { base: 9, variance: 2 },
      orbitPath: 'outer', // Further from core
    }
  ];

  return (
    <div className="absolute inset-0 overflow-visible">
      {particleSets.map((set, setIndex) => (
        <React.Fragment key={`particle-set-${setIndex}`}>
          {Array(set.count).fill(0).map((_, i) => {
            // Generate varied properties for each particle
            const size = set.size.base + (i % 3) * set.size.variance;
            const opacity = set.opacity.base - (i % 3) * set.opacity.variance;
            
            // Generate unique positions based on orbit path
            const angle = (i / set.count) * 2 * Math.PI;
            const radius = set.positionRadius.min + (i % 3) * 
              ((set.positionRadius.max - set.positionRadius.min) / 2);
            
            const posX = 50 + Math.cos(angle) * radius;
            const posY = 50 + Math.sin(angle) * radius;
            
            // Unique animation duration for varied movement
            const duration = set.animationDuration.base + i * set.animationDuration.variance;
            
            return (
              <div 
                key={`particle-${setIndex}-${i}`}
                className={`absolute rounded-full ${animationClasses.particles}
                  transition-all duration-500`}
                style={{
                  width: `${size}rem`,
                  height: `${size}rem`,
                  left: `${posX}%`,
                  top: `${posY}%`,
                  background: `radial-gradient(circle at 30% 30%, 
                    rgba(249, 115, 22, ${opacity - 0.1}) 0%, 
                    rgba(233, 99, 12, ${opacity}) 80%)`,
                  boxShadow: `0 0 ${size * 2}px 0 rgba(249, 115, 22, ${opacity / 4})`,
                  animationDuration: animationStyle === 'cellular' ? `${duration}s` : `${duration / 3}s`,
                  animationDelay: `${i * (animationStyle === 'cellular' ? 0.8 : 0.3)}s`,
                  animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.4, 0, 0.6, 1)' : undefined,
                  transform: 'translateZ(0)', // Force hardware acceleration
                  opacity: opacity,
                }}
              >
                {/* Inner highlight for dimensionality */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.5) 0%, transparent 70%)',
                    opacity: 0.7,
                  }}
                ></div>
              </div>
            );
          })}
        </React.Fragment>
      ))}
      
      {/* Additional central pulsing glow effect */}
      <div
        className="absolute rounded-full animate-pulse-cellular z-5"
        style={{
          width: '80%',
          height: '80%',
          left: '10%',
          top: '10%',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, transparent 70%)',
          filter: 'blur(2px)',
        }}
      ></div>
    </div>
  );
};

export default LogoParticles;
