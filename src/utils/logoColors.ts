
type ColorScheme = 'accent' | 'coral' | 'cyan' | 'teal' | 'violet' | 'gradient' | 'refined';

type ColorClasses = {
  core: string;
  innerRing: string;
  outerRing: string;
  glow: string;
};

/**
 * Get color classes based on the selected color scheme
 */
export const getColorClasses = (colorScheme: ColorScheme, gradientState: number): ColorClasses => {
  switch (colorScheme) {
    case 'coral':
      return {
        core: 'bg-aurascan-accent',
        innerRing: 'border-aurascan-accent',
        outerRing: 'border-aurascan-accent/70',
        glow: 'after:bg-aurascan-accent/50'
      };
    case 'cyan':
      return {
        core: 'bg-aurascan-dark-grey',
        innerRing: 'border-aurascan-dark-grey',
        outerRing: 'border-aurascan-dark-grey/70',
        glow: 'after:bg-aurascan-dark-grey/50'
      };
    case 'teal':
      return {
        core: 'bg-aurascan-deep-blue',
        innerRing: 'border-aurascan-deep-blue',
        outerRing: 'border-aurascan-deep-blue/70',
        glow: 'after:bg-aurascan-deep-blue/50'
      };
    case 'violet':
      return {
        core: 'bg-aurascan-dark-grey',
        innerRing: 'border-aurascan-dark-grey',
        outerRing: 'border-aurascan-dark-grey/70',
        glow: 'after:bg-aurascan-dark-grey/50'
      };
    case 'refined':
      return {
        core: 'bg-aurascan-accent/90',
        innerRing: 'border-aurascan-accent/80',
        outerRing: 'border-aurascan-deep-blue/60',
        glow: 'after:bg-aurascan-accent/30'
      };
    case 'gradient':
      // Enhanced cycle through vibrant colors for gradient scheme
      if (gradientState === 0) {
        return {
          core: 'bg-gradient-to-r from-aurascan-accent to-aurascan-dark-orange',
          innerRing: 'border-aurascan-accent',
          outerRing: 'border-aurascan-deep-blue/70',
          glow: 'after:bg-aurascan-accent/50'
        };
      } else if (gradientState === 1) {
        return {
          core: 'bg-gradient-to-r from-aurascan-dark-orange to-aurascan-deep-blue',
          innerRing: 'border-aurascan-dark-orange',
          outerRing: 'border-aurascan-accent/70',
          glow: 'after:bg-aurascan-dark-orange/50'
        };
      } else if (gradientState === 2) {
        return {
          core: 'bg-gradient-to-r from-aurascan-deep-blue to-aurascan-accent',
          innerRing: 'border-aurascan-deep-blue',
          outerRing: 'border-aurascan-dark-orange/70',
          glow: 'after:bg-aurascan-deep-blue/50'
        };
      } else {
        // Added a fourth state with mixed colors
        return {
          core: 'bg-gradient-to-tr from-aurascan-accent via-aurascan-deep-blue to-aurascan-dark-orange',
          innerRing: 'border-aurascan-accent',
          outerRing: 'border-aurascan-deep-blue/70',
          glow: 'after:bg-gradient-to-r from-aurascan-accent/40 to-aurascan-deep-blue/40'
        };
      }
    default:
      return {
        core: 'bg-aurascan-accent',
        innerRing: 'border-aurascan-accent',
        outerRing: 'border-aurascan-accent/70',
        glow: 'after:bg-aurascan-accent/50'
      };
  }
};
