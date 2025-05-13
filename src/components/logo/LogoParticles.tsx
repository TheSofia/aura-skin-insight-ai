
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
  // Adjust particle characteristics with enhanced visibility and organic motion
  const getIntensityFactor = () => {
    switch (intensity) {
      case 'subtle': return { count: 0.8, opacityFactor: 0.7, sizeFactor: 0.9, speedFactor: 1.4 }; // Enhanced from previous values
      case 'vibrant': return { count: 1.3, opacityFactor: 1.2, sizeFactor: 1.15, speedFactor: 0.75 }; // Enhanced from previous values
      default: return { count: 1.1, opacityFactor: 1.1, sizeFactor: 1.05, speedFactor: 0.95 }; // Enhanced medium intensity
    }
  };
  
  const intensityFactor = getIntensityFactor();

  // Create multiple sets of particles with enhanced visibility and more organic motion
  const particleSets = [
    // Inner orbiting particles - enhanced visibility
    {
      count: Math.round(5 * intensityFactor.count), // Increased from 4
      size: { base: 0.9 * intensityFactor.sizeFactor, variance: 0.25 }, // Increased size
      opacity: { 
        base: particleOpacity !== undefined ? 
          particleOpacity * 1.1 : // Enhanced visibility
          0.6 * intensityFactor.opacityFactor, // Increased from 0.5
        variance: 0.15 
      },
      positionRadius: { min: 18, max: 35 }, // Adjusted for more organic distribution
      animationDuration: { base: 10 * intensityFactor.speedFactor, variance: 2 }, // Adjusted for more varied movement
      orbitPath: 'inner',
    },
    // Outer flowing particles - enhanced visibility
    {
      count: Math.round(7 * intensityFactor.count), // Increased from 6
      size: { base: 1.1 * intensityFactor.sizeFactor, variance: 0.3 }, // Increased size
      opacity: { 
        base: particleOpacity !== undefined ? 
          particleOpacity * 0.95 : 
          0.55 * intensityFactor.opacityFactor, // Increased from 0.45
        variance: 0.2 
      },
      positionRadius: { min: 28, max: 60 }, // Adjusted for more organic distribution
      animationDuration: { base: 13 * intensityFactor.speedFactor, variance: 2.5 }, // Adjusted for more varied movement
      orbitPath: 'outer',
    },
    // New middle layer particles for more depth and complexity
    {
      count: Math.round(4 * intensityFactor.count),
      size: { base: 1.0 * intensityFactor.sizeFactor, variance: 0.25 },
      opacity: { 
        base: particleOpacity !== undefined ? 
          particleOpacity * 1.0 : 
          0.5 * intensityFactor.opacityFactor,
        variance: 0.18
      },
      positionRadius: { min: 22, max: 45 },
      animationDuration: { base: 11.5 * intensityFactor.speedFactor, variance: 2.2 },
      orbitPath: 'middle',
    }
  ];

  // Add extra particle set for vibrant intensity
  if (intensity === 'vibrant') {
    particleSets.push({
      count: 4, // Increased from 3
      size: { base: 1.25 * intensityFactor.sizeFactor, variance: 0.35 }, // Enhanced
      opacity: { 
        base: particleOpacity !== undefined ? 
          particleOpacity * 1.15 : // Enhanced
          0.75 * intensityFactor.opacityFactor, // Increased from 0.7
        variance: 0.2 
      },
      positionRadius: { min: 23, max: 50 },
      animationDuration: { base: 9.5 * intensityFactor.speedFactor, variance: 2.2 },
      orbitPath: 'dynamic', // New orbit path for more varied, dynamic movement
    });
  }

  return (
    <div className="absolute inset-0 overflow-visible">
      {particleSets.map((set, setIndex) => (
        <React.Fragment key={`particle-set-${setIndex}`}>
          {Array(set.count).fill(0).map((_, i) => {
            // Generate varied properties for each particle with enhanced organic positioning
            const size = set.size.base + (Math.sin(i * 0.7) + 1) * set.size.variance; // More natural size variation
            const opacity = set.opacity.base - (Math.cos(i * 0.5) + 1)/2 * set.opacity.variance; // More natural opacity variation
            
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
            
            // Enhanced peach/orange color scheme with better visibility
            let particleColor;
            if ((setIndex + i) % 6 === 0) {
              particleColor = 'rgba(247, 215, 195, ' + opacity * 0.94 + ')'; // Enhanced from 0.9
            } else if ((setIndex + i) % 6 === 1) {
              particleColor = 'rgba(255, 176, 141, ' + opacity * 0.85 + ')'; // Enhanced from 0.8
            } else if ((setIndex + i) % 6 === 2) {
              particleColor = 'rgba(255, 198, 173, ' + opacity * 0.9 + ')'; // Enhanced from 0.85
            } else if ((setIndex + i) % 6 === 3) {
              particleColor = 'rgba(242, 150, 105, ' + opacity * 0.75 + ')'; // Enhanced from 0.7
            } else {
              particleColor = 'rgba(255, 255, 255, ' + opacity * 0.95 + ')'; // Enhanced from 0.9
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
                    ${particleColor.replace(opacity.toString(), (opacity * 0.92).toString())} 80%)`, // Enhanced from 0.9
                  boxShadow: `0 0 ${size * 1.7}px 0 ${particleColor.replace(opacity.toString(), (opacity / 4.5).toString())}`, // Enhanced glow
                  animationDuration: `${duration}s`,
                  animationDelay: `${i * 0.7 + Math.sin(i) * 0.3}s`, // More organic variation in delays
                  animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
                  transform: 'translateZ(0)',
                  opacity: opacity,
                  filter: 'brightness(1.04)', // Enhanced from 1.02
                }}
              >
                {/* Enhanced inner highlight for dimensionality */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.75) 0%, transparent 75%)', // Enhanced from 0.7
                    opacity: 0.65, // Enhanced from 0.6
                  }}
                ></div>
              </div>
            );
          })}
        </React.Fragment>
      ))}
      
      {/* Enhanced central pulsing glow effect */}
      <div
        className="absolute rounded-full animate-pulse-cellular z-5"
        style={{
          width: '95%',
          height: '95%',
          left: '2.5%',
          top: '2.5%',
          background: 'radial-gradient(circle, rgba(242, 150, 105, 0.09) 0%, transparent 75%)', // Enhanced from 0.06
          filter: 'blur(2px)',
          opacity: intensity === 'vibrant' ? 0.15 : intensity === 'subtle' ? 0.07 : 0.10, // Enhanced values
          animationDuration: '12s',
        }}
      ></div>
    </div>
  );
};

export default LogoParticles;
