
import React from 'react';
import { AnimationStyle } from '../../utils/logoAnimations';

type LogoParticlesProps = {
  colorClasses: { core: string };
  animationClasses: { particles: string };
  animationStyle: AnimationStyle;
  intensity?: 'subtle' | 'medium' | 'vibrant';
};

const LogoParticles: React.FC<LogoParticlesProps> = ({ 
  colorClasses, 
  animationClasses,
  animationStyle,
  intensity = 'medium'
}) => {
  // Adjust particle characteristics based on intensity
  const getIntensityFactor = () => {
    switch (intensity) {
      case 'subtle': return { count: 0.7, opacityFactor: 0.8, sizeFactor: 0.85, speedFactor: 1.3 };
      case 'vibrant': return { count: 1.3, opacityFactor: 1.2, sizeFactor: 1.15, speedFactor: 0.7 };
      default: return { count: 1, opacityFactor: 1, sizeFactor: 1, speedFactor: 1 }; // medium
    }
  };
  
  const intensityFactor = getIntensityFactor();

  // Create multiple sets of particles for a richer effect
  const particleSets = [
    // Inner orbiting particles - smaller, closer to core
    {
      count: Math.round(5 * intensityFactor.count),
      size: { base: 0.9 * intensityFactor.sizeFactor, variance: 0.2 },
      opacity: { base: 0.7 * intensityFactor.opacityFactor, variance: 0.15 },
      positionRadius: { min: 20, max: 35 },
      animationDuration: { base: 7 * intensityFactor.speedFactor, variance: 1.5 },
      orbitPath: 'inner', // Closer to core
    },
    // Outer flowing particles - slightly larger, more spread out
    {
      count: Math.round(6 * intensityFactor.count),
      size: { base: 1.1 * intensityFactor.sizeFactor, variance: 0.3 },
      opacity: { base: 0.6 * intensityFactor.opacityFactor, variance: 0.2 },
      positionRadius: { min: 30, max: 60 },
      animationDuration: { base: 9 * intensityFactor.speedFactor, variance: 2 },
      orbitPath: 'outer', // Further from core
    }
  ];

  // If using vibrant intensity, add an extra particle set for more dynamic effect
  if (intensity === 'vibrant') {
    particleSets.push({
      count: 4,
      size: { base: 1.3 * intensityFactor.sizeFactor, variance: 0.4 },
      opacity: { base: 0.75 * intensityFactor.opacityFactor, variance: 0.25 },
      positionRadius: { min: 25, max: 55 },
      animationDuration: { base: 8 * intensityFactor.speedFactor, variance: 1.8 },
      orbitPath: 'middle',
    });
  }

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
            
            // Determine color based on setIndex and particle index for more variety
            let particleColor;
            if ((setIndex + i) % 5 === 0) {
              particleColor = 'rgba(126, 105, 171, ' + opacity + ')'; // Muted violet
            } else if ((setIndex + i) % 5 === 1) {
              particleColor = 'rgba(194, 65, 12, ' + opacity + ')'; // Burnt orange
            } else {
              particleColor = 'rgba(249, 115, 22, ' + opacity + ')'; // Default accent
            }
            
            return (
              <div 
                key={`particle-${setIndex}-${i}`}
                className={`absolute rounded-full ${animationClasses.particles}
                  transition-all duration-500 hover:scale-110 hover:opacity-90`}
                style={{
                  width: `${size}rem`,
                  height: `${size}rem`,
                  left: `${posX}%`,
                  top: `${posY}%`,
                  background: `radial-gradient(circle at 30% 30%, 
                    ${particleColor} 0%, 
                    ${particleColor.replace(opacity.toString(), (opacity + 0.1).toString())} 80%)`,
                  boxShadow: `0 0 ${size * 2}px 0 ${particleColor.replace(opacity.toString(), (opacity / 3).toString())}`,
                  animationDuration: animationStyle === 'cellular' ? `${duration}s` : `${duration / 3}s`,
                  animationDelay: `${i * (animationStyle === 'cellular' ? 0.8 : 0.3)}s`,
                  animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.4, 0, 0.6, 1)' : undefined,
                  transform: 'translateZ(0)', // Force hardware acceleration
                  opacity: opacity,
                  filter: 'brightness(1.05)',
                }}
              >
                {/* Inner highlight for dimensionality */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6) 0%, transparent 70%)',
                    opacity: 0.8,
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
          width: '90%',
          height: '90%',
          left: '5%',
          top: '5%',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%)',
          filter: 'blur(2px)',
          opacity: intensity === 'vibrant' ? 0.12 : intensity === 'subtle' ? 0.05 : 0.08,
        }}
      ></div>
    </div>
  );
};

export default LogoParticles;
