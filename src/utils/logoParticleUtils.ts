
import { AnimationStyle } from './logoAnimations';
import { IntensityLevel } from '../types/logo';

/**
 * Gets intensity factors based on the selected intensity level
 */
export const getIntensityFactor = (intensity: IntensityLevel = 'medium') => {
  switch (intensity) {
    case 'subtle': return { count: 0.8, opacityFactor: 0.7, sizeFactor: 0.9, speedFactor: 1.4 };
    case 'vibrant': return { count: 1.3, opacityFactor: 1.2, sizeFactor: 1.15, speedFactor: 0.75 };
    default: return { count: 1.1, opacityFactor: 1.1, sizeFactor: 1.05, speedFactor: 0.95 };
  }
};

/**
 * Generate particle base color with opacity
 */
export const getParticleColor = (setIndex: number, i: number, opacity: number) => {
  if ((setIndex + i) % 6 === 0) {
    return `rgba(247, 215, 195, ${opacity * 0.94})`;
  } else if ((setIndex + i) % 6 === 1) {
    return `rgba(255, 176, 141, ${opacity * 0.85})`;
  } else if ((setIndex + i) % 6 === 2) {
    return `rgba(255, 198, 173, ${opacity * 0.9})`;
  } else if ((setIndex + i) % 6 === 3) {
    return `rgba(242, 150, 105, ${opacity * 0.75})`;
  } else {
    return `rgba(255, 255, 255, ${opacity * 0.95})`;
  }
};

/**
 * Generate particle set configurations for different orbits
 */
export const getParticleSets = (
  intensity: IntensityLevel = 'medium',
  particleOpacity?: number
) => {
  const intensityFactor = getIntensityFactor(intensity);

  // Create base particle sets
  const particleSets = [
    // Inner orbiting particles
    {
      count: Math.round(5 * intensityFactor.count),
      size: { base: 0.9 * intensityFactor.sizeFactor, variance: 0.25 },
      opacity: { 
        base: particleOpacity !== undefined ? 
          particleOpacity * 1.1 : 
          0.6 * intensityFactor.opacityFactor,
        variance: 0.15 
      },
      positionRadius: { min: 18, max: 35 },
      animationDuration: { base: 10 * intensityFactor.speedFactor, variance: 2 },
      orbitPath: 'inner',
    },
    // Outer flowing particles
    {
      count: Math.round(7 * intensityFactor.count),
      size: { base: 1.1 * intensityFactor.sizeFactor, variance: 0.3 },
      opacity: { 
        base: particleOpacity !== undefined ? 
          particleOpacity * 0.95 : 
          0.55 * intensityFactor.opacityFactor,
        variance: 0.2 
      },
      positionRadius: { min: 28, max: 60 },
      animationDuration: { base: 13 * intensityFactor.speedFactor, variance: 2.5 },
      orbitPath: 'outer',
    },
    // Middle layer particles for more depth
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
      count: 4,
      size: { base: 1.25 * intensityFactor.sizeFactor, variance: 0.35 },
      opacity: { 
        base: particleOpacity !== undefined ? 
          particleOpacity * 1.15 : 
          0.75 * intensityFactor.opacityFactor,
        variance: 0.2 
      },
      positionRadius: { min: 23, max: 50 },
      animationDuration: { base: 9.5 * intensityFactor.speedFactor, variance: 2.2 },
      orbitPath: 'dynamic',
    });
  }

  return particleSets;
};
