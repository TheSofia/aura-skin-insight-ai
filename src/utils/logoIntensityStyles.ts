
import { LogoSize } from './logoSizes';

/**
 * Types for intensity and context controls
 */
export type IntensityLevel = 'subtle' | 'medium' | 'vibrant' | 'hypnotic';
export type PageContext = {
  isLandingPage?: boolean;
  isLoadingPage?: boolean; 
};

/**
 * Gets animation parameters based on page context and intensity
 */
export const getContextualAnimation = (
  intensity: IntensityLevel = 'medium',
  { isLoadingPage = false, isLandingPage = false }: PageContext = {}
) => {
  if (isLoadingPage) {
    // Loading page: more dynamic animation
    return {
      cellSpeed: intensity === 'subtle' ? '7s' : 
                 intensity === 'vibrant' ? '5s' : 
                 intensity === 'hypnotic' ? '4s' : '6s',
      particleOpacity: intensity === 'subtle' ? 0.7 : 
                       intensity === 'vibrant' ? 0.9 : 
                       intensity === 'hypnotic' ? 0.95 : 0.8,
    };
  } else if (isLandingPage) {
    // Landing page: gentler, more ethereal animation
    return {
      cellSpeed: intensity === 'subtle' ? '11s' : 
                 intensity === 'vibrant' ? '9s' : 
                 intensity === 'hypnotic' ? '8s' : '10s', // Even slower for landing page
      particleOpacity: intensity === 'subtle' ? 0.5 : 
                       intensity === 'vibrant' ? 0.7 : 
                       intensity === 'hypnotic' ? 0.8 : 0.6, // More translucent for landing page
    };
  } else {
    // Default for other pages: balanced animation
    return {
      cellSpeed: intensity === 'subtle' ? '9s' : 
                 intensity === 'vibrant' ? '7s' : 
                 intensity === 'hypnotic' ? '6s' : '8s',
      particleOpacity: intensity === 'subtle' ? 0.6 : 
                       intensity === 'vibrant' ? 0.8 : 
                       intensity === 'hypnotic' ? 0.85 : 0.7,
    };
  }
};

/**
 * Get intensity styles based on the selected intensity level and page context
 */
export const getIntensityStyles = (
  intensity: IntensityLevel = 'medium',
  { isLandingPage = false, isLoadingPage = false }: PageContext = {}
) => {
  // Base styles
  const baseIntensity = {
    subtle: {
      opacity: 'opacity-80',
      animationDuration: 'animation-slow',
      particleOpacity: 0.6,
      glow: 'opacity-20'
    },
    vibrant: {
      opacity: 'opacity-100',
      animationDuration: 'animation-fast',
      particleOpacity: 0.9,
      glow: 'opacity-40'
    },
    medium: {
      opacity: 'opacity-90',
      animationDuration: 'animation-normal',
      particleOpacity: 0.75,
      glow: 'opacity-30'
    },
    hypnotic: {
      opacity: 'opacity-100',
      animationDuration: 'animation-very-slow',
      particleOpacity: 1.0,
      glow: 'opacity-50'
    }
  };

  // Get base style based on intensity
  const baseStyle = baseIntensity[intensity] || baseIntensity.medium;
  
  // Apply contextual refinements
  if (isLandingPage) {
    // For landing page: more ethereal, gentler appearance with enhanced glow
    return {
      ...baseStyle,
      opacity: intensity === 'hypnotic' ? 'opacity-85' : 
               intensity === 'subtle' ? 'opacity-70' : 'opacity-75', // More translucent on landing page
      particleOpacity: baseStyle.particleOpacity * (intensity === 'hypnotic' ? 0.95 : 0.85), // More translucent particles
      glow: `opacity-${intensity === 'hypnotic' ? '45' : Math.max(10, parseInt(baseStyle.glow.split('-')[1]) * 0.7)}` // Enhanced glow for hypnotic
    };
  } else if (isLoadingPage) {
    // For loading page: more vibrant, dynamic appearance 
    return {
      ...baseStyle,
      particleOpacity: baseStyle.particleOpacity * 1.1, // More visible particles
      glow: `opacity-${Math.min(45, parseInt(baseStyle.glow.split('-')[1]) * 1.2)}` // Enhanced glow
    };
  }
  
  // Default for other pages
  return baseStyle;
};

/**
 * Generate enhanced ethereal text effect styles for the wordmark
 */
export const getWordmarkTextStyle = () => {
  return {
    textShadow: '0 0 0.5px rgba(64, 62, 67, 0.3), 0 0 1px rgba(64, 62, 67, 0.2), 0 0 2px rgba(64, 62, 67, 0.1)',
    letterSpacing: '0.02em',
    filter: 'blur(0.2px)', // Very subtle blur for ethereal effect
  };
};

/**
 * Generate hover animation class for logo
 */
export const getHoverAnimationClass = () => {
  return 'group transition-all duration-500 hover:scale-[1.02] hover:filter hover:brightness-[1.03]';
};
