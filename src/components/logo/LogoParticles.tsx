
import React from 'react';
import { AnimationStyle } from '../../utils/logoAnimations';

type LogoParticlesProps = {
  colorClasses: { core: string };
  animationClasses: { particles: string };
  animationStyle: AnimationStyle;
  intensity?: 'subtle' | 'medium' | 'vibrant';
  particleOpacity?: number;
};

const LogoParticles: React.FC<LogoParticlesProps> = ({ 
  colorClasses, 
  animationClasses,
  animationStyle,
  intensity = 'medium',
  particleOpacity
}) => {
  // Adjust particle characteristics based on intensity for more biological elegance
  const getIntensityFactor = () => {
    switch (intensity) {
      case 'subtle': return { count: 0.7, opacityFactor: 0.6, sizeFactor: 0.85, speedFactor: 1.5 };
      case 'vibrant': return { count: 1.2, opacityFactor: 1.1, sizeFactor: 1.1, speedFactor: 0.8 };
      default: return { count: 1, opacityFactor: 1, sizeFactor: 1, speedFactor: 1 }; // medium
    }
  };
  
  const intensityFactor = getIntensityFactor();

  // Create multiple sets of particles for a richer, more organic effect
  const particleSets = [
    // Inner orbiting particles - smaller, closer to core
    {
      count: Math.round(4 * intensityFactor.count),
      size: { base: 0.8 * intensityFactor.sizeFactor, variance: 0.2 },
      opacity: { 
        base: particleOpacity !== undefined ? 
          particleOpacity : 
          0.5 * intensityFactor.opacityFactor,
        variance: 0.15 
      },
      positionRadius: { min: 20, max: 35 },
      animationDuration: { base: 11 * intensityFactor.speedFactor, variance: 1.5 }, // Slowed down motion
      orbitPath: 'inner', // Closer to core
    },
    // Outer flowing particles - slightly larger, more spread out - lighter, peach-toned to match image
    {
      count: Math.round(6 * intensityFactor.count), // Increased count for more particles like in image
      size: { base: 1.0 * intensityFactor.sizeFactor, variance: 0.25 },
      opacity: { 
        base: particleOpacity !== undefined ? 
          particleOpacity * 0.85 : 
          0.45 * intensityFactor.opacityFactor,
        variance: 0.2 
      },
      positionRadius: { min: 30, max: 60 },
      animationDuration: { base: 14 * intensityFactor.speedFactor, variance: 2 }, 
      orbitPath: 'outer', // Further from core
    }
  ];

  // If using vibrant intensity, add an extra particle set for more dynamic effect
  if (intensity === 'vibrant') {
    particleSets.push({
      count: 3,
      size: { base: 1.2 * intensityFactor.sizeFactor, variance: 0.3 },
      opacity: { 
        base: particleOpacity !== undefined ? 
          particleOpacity * 1.05 : 
          0.7 * intensityFactor.opacityFactor, 
        variance: 0.2 
      },
      positionRadius: { min: 25, max: 50 },
      animationDuration: { base: 10 * intensityFactor.speedFactor, variance: 2 },
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
            
            // Generate unique positions based on orbit path - more organic positioning
            const angle = (i / set.count) * 2 * Math.PI;
            const radius = set.positionRadius.min + (i % 3) * 
              ((set.positionRadius.max - set.positionRadius.min) / 2);
            
            const posX = 50 + Math.cos(angle) * radius;
            const posY = 50 + Math.sin(angle) * radius;
            
            // Unique animation duration for varied, natural movement
            const duration = set.animationDuration.base + i * set.animationDuration.variance;
            
            // Modified color scheme to match screenshot - focused on peach/orange tones
            let particleColor;
            if ((setIndex + i) % 6 === 0) {
              particleColor = 'rgba(247, 215, 195, ' + opacity * 0.9 + ')'; // Light peach
            } else if ((setIndex + i) % 6 === 1) {
              particleColor = 'rgba(255, 176, 141, ' + opacity * 0.8 + ')'; // Medium peach
            } else if ((setIndex + i) % 6 === 2) {
              particleColor = 'rgba(255, 198, 173, ' + opacity * 0.85 + ')'; // Soft peach
            } else if ((setIndex + i) % 6 === 3) {
              particleColor = 'rgba(242, 150, 105, ' + opacity * 0.7 + ')'; // Darker peach
            } else {
              particleColor = 'rgba(255, 255, 255, ' + opacity * 0.9 + ')'; // White/off-white particles
            }
            
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
                    ${particleColor.replace(opacity.toString(), (opacity * 0.9).toString())} 80%)`,
                  boxShadow: `0 0 ${size * 1.5}px 0 ${particleColor.replace(opacity.toString(), (opacity / 5).toString())}`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${i * 0.7}s`,
                  animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
                  transform: 'translateZ(0)',
                  opacity: opacity,
                  filter: 'brightness(1.02)',
                }}
              >
                {/* Inner highlight for dimensionality */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.7) 0%, transparent 75%)',
                    opacity: 0.6,
                  }}
                ></div>
              </div>
            );
          })}
        </React.Fragment>
      ))}
      
      {/* Enhanced central pulsing glow effect - more subtle */}
      <div
        className="absolute rounded-full animate-pulse-cellular z-5"
        style={{
          width: '95%',
          height: '95%',
          left: '2.5%',
          top: '2.5%',
          background: 'radial-gradient(circle, rgba(242, 150, 105, 0.06) 0%, transparent 75%)', // Changed to peach color
          filter: 'blur(2px)',
          opacity: intensity === 'vibrant' ? 0.12 : intensity === 'subtle' ? 0.04 : 0.07,
          animationDuration: '12s',
        }}
      ></div>
    </div>
  );
};

export default LogoParticles;
