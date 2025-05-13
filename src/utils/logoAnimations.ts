
export type AnimationStyle = 'float' | 'pulse' | 'rotate' | 'morph' | 'combined' | 'subtle' | 'cellular';

type AnimationClasses = {
  core: string;
  innerRing: string;
  outerRing: string;
  particles: string;
};

/**
 * Get animation classes based on the selected animation style
 * Enhanced with refined cellular animation options for biologically elegant motion
 */
export const getAnimationClasses = (animationStyle: AnimationStyle): AnimationClasses => {
  // Default to cellular for brand consistency
  if (animationStyle !== 'cellular') {
    animationStyle = 'cellular';
  }
  
  // Refined cellular animation system for a more ethereal, sophisticated look
  return {
    core: 'animate-cellular-core-pulse',
    innerRing: 'animate-cellular-ring-drift',
    outerRing: 'animate-cellular-drift',
    particles: 'animate-orbital-float'
  };
};
