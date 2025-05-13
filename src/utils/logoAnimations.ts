
export type AnimationStyle = 'float' | 'pulse' | 'rotate' | 'morph' | 'combined' | 'subtle' | 'cellular';

type AnimationClasses = {
  core: string;
  innerRing: string;
  outerRing: string;
  particles: string;
};

/**
 * Get animation classes based on the selected animation style
 * Enhanced with refined cellular animation options
 */
export const getAnimationClasses = (animationStyle: AnimationStyle): AnimationClasses => {
  switch (animationStyle) {
    case 'float':
      return {
        core: 'animate-subtle-float',
        innerRing: 'animate-float',
        outerRing: 'animate-float',
        particles: 'animate-float'
      };
    case 'pulse':
      return {
        core: 'animate-pulse-dot',
        innerRing: 'animate-pulse-slow',
        outerRing: 'animate-pulse-slow',
        particles: 'animate-pulse-dot'
      };
    case 'rotate':
      return {
        core: 'animate-subtle-pulse',
        innerRing: 'animate-rotate-slow',
        outerRing: 'animate-rotate-slow',
        particles: 'animate-circular-motion'
      };
    case 'morph':
      return {
        core: 'animate-throb',
        innerRing: 'animate-morph',
        outerRing: 'animate-rotate-slow',
        particles: 'animate-float'
      };
    case 'subtle':
      return {
        core: 'animate-subtle-pulse',
        innerRing: 'animate-rotate-slow',
        outerRing: 'animate-rotate-slow',
        particles: 'animate-float-subtle'
      };
    case 'cellular':
      // Enhanced cellular animation style with slower, more organic movement
      return {
        core: 'animate-cellular-core-pulse',
        innerRing: 'animate-cellular-ring-drift',
        outerRing: 'animate-cellular-drift',
        particles: 'animate-cellular-particle-float'
      };
    case 'combined':
    default:
      return {
        core: 'animate-pulse-dot', // More pronounced pulse
        innerRing: 'animate-circular-motion',
        outerRing: 'animate-circular-motion-reverse',
        particles: 'animate-float'
      };
  }
};
