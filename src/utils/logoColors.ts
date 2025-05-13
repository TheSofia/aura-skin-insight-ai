
type ColorScheme = 'accent' | 'coral' | 'cyan' | 'teal' | 'violet' | 'gradient' | 'refined' | 'monochrome';

type ColorClasses = {
  core: string;
  innerRing: string;
  outerRing: string;
  glow: string;
};

/**
 * Get color classes based on the selected color scheme
 * With enhanced styling for a more refined, high-end look
 */
export const getColorClasses = (colorScheme: ColorScheme, gradientState: number): ColorClasses => {
  // Defaulting to gradient for brand consistency
  if (colorScheme !== 'gradient' && colorScheme !== 'refined') {
    colorScheme = 'gradient';
  }
  
  // Enhanced gradient colorscheme - refined and sophisticated
  if (gradientState === 0) {
    return {
      core: 'bg-gradient-to-r from-beautyagent-accent to-beautyagent-dark-orange',
      innerRing: 'bg-transparent',
      outerRing: 'bg-transparent',
      glow: 'after:bg-beautyagent-accent/35'
    };
  } else if (gradientState === 1) {
    return {
      core: 'bg-gradient-to-r from-beautyagent-dark-orange to-beautyagent-deep-blue',
      innerRing: 'bg-transparent',
      outerRing: 'bg-transparent',
      glow: 'after:bg-beautyagent-dark-orange/35'
    };
  } else if (gradientState === 2) {
    return {
      core: 'bg-gradient-to-r from-beautyagent-deep-blue to-beautyagent-muted-violet',
      innerRing: 'bg-transparent',
      outerRing: 'bg-transparent',
      glow: 'after:bg-beautyagent-deep-blue/35'
    };
  } else {
    // Added a fourth state with mixed colors for more organic transitions
    return {
      core: 'bg-gradient-to-tr from-beautyagent-accent via-beautyagent-deep-blue to-beautyagent-muted-violet',
      innerRing: 'bg-transparent',
      outerRing: 'bg-transparent',
      glow: 'after:bg-gradient-to-r from-beautyagent-accent/30 to-beautyagent-deep-blue/30'
    };
  }
};

