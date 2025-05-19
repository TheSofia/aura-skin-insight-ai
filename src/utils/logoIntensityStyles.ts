
import { IntensityLevel } from '@/types/logo';

export type PageContext = {
  isLandingPage?: boolean;
  isLoadingPage?: boolean;
};

/**
 * Get the hover animation class for the logo
 */
export const getHoverAnimationClass = () => {
  return 'hover:scale-105 transition-transform duration-300';
};

/**
 * Get contextual animation parameters based on intensity and page context
 */
export const getContextualAnimation = (
  intensity: IntensityLevel,
  { isLandingPage = false, isLoadingPage = false }: PageContext
) => {
  let particleOpacity = 0.65;
  let cellSpeed = '20s';
  
  // Define the base values for each intensity level
  switch (intensity) {
    case 'subtle':
      particleOpacity = 0.5;
      cellSpeed = '28s';
      break;
    case 'vibrant':
      particleOpacity = 0.75;
      cellSpeed = '16s';
      break;
    case 'hypnotic':
      particleOpacity = 0.85;
      cellSpeed = '14s';
      break;
    default: // medium
      particleOpacity = 0.65;
      cellSpeed = '20s';
  }

  // Adjust values based on page context
  if (isLandingPage) {
    particleOpacity = Math.min(1.0, particleOpacity * 1.2);
    cellSpeed = (parseInt(cellSpeed) * 1.1) + 's'; // Slightly slower for landing
  }
  
  if (isLoadingPage) {
    particleOpacity = Math.min(1.0, particleOpacity * 1.3);
    cellSpeed = (parseInt(cellSpeed) * 0.75) + 's'; // Faster for loading
  }
  
  return { particleOpacity, cellSpeed };
};

/**
 * Get intensity-based style classes and values
 */
export const getIntensityStyles = (
  intensity: IntensityLevel,
  { isLandingPage = false, isLoadingPage = false }: PageContext
) => {
  // Adjust appearance based on intensity
  let glow = 'bg-transparent';
  let opacity = '';

  switch (intensity) {
    case 'subtle':
      glow = 'after:bg-beautyagent-accent/10';
      opacity = 'opacity-85';
      break;
    case 'vibrant':
      glow = 'after:bg-beautyagent-accent/25';
      opacity = 'opacity-100';
      break;
    case 'hypnotic':
      glow = 'after:bg-gradient-to-r from-beautyagent-accent/30 to-beautyagent-deep-blue/30';
      opacity = 'opacity-100';
      break;
    default: // medium
      glow = 'after:bg-beautyagent-accent/15';
      opacity = 'opacity-90';
  }

  // Enhanced for landing page - more pronounced
  if (isLandingPage) {
    switch (intensity) {
      case 'subtle':
        glow = 'after:bg-gradient-to-r from-beautyagent-accent/15 to-beautyagent-deep-blue/10';
        break;
      case 'vibrant':
        glow = 'after:bg-gradient-to-r from-beautyagent-accent/35 to-beautyagent-deep-blue/30';
        break;
      case 'hypnotic':
        glow = 'after:bg-gradient-to-r from-beautyagent-accent/40 to-beautyagent-deep-blue/35';
        break;
      default: // medium
        glow = 'after:bg-gradient-to-r from-beautyagent-accent/25 to-beautyagent-deep-blue/20';
    }
  }

  // Enhanced loading state - even more pronounced
  if (isLoadingPage) {
    switch (intensity) {
      case 'subtle':
        glow = 'after:bg-gradient-to-r from-beautyagent-accent/20 to-beautyagent-deep-blue/15';
        break;
      case 'vibrant':
        glow = 'after:bg-gradient-to-r from-beautyagent-accent/40 to-beautyagent-deep-blue/35';
        break;
      case 'hypnotic':
        glow = 'after:bg-gradient-to-r from-beautyagent-accent/45 to-beautyagent-deep-blue/40';
        break;
      default: // medium
        glow = 'after:bg-gradient-to-r from-beautyagent-accent/30 to-beautyagent-deep-blue/25';
    }
  }

  return { glow, opacity };
};

/**
 * Get wordmark text style
 */
export const getWordmarkTextStyle = () => {
  return {
    textShadow: '0 0 12px rgba(255, 255, 255, 0.5)',
    transition: 'all 0.5s ease',
  };
};
