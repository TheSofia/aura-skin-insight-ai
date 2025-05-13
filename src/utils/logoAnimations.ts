
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
  // Always use cellular for brand consistency
  return {
    core: 'animate-cellular-core-pulse',
    innerRing: 'animate-cellular-ring-drift',
    outerRing: 'animate-cellular-drift',
    particles: 'animate-orbital-float'
  };
};
