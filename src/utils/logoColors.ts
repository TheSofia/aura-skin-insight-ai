
type ColorScheme = 'accent' | 'coral' | 'cyan' | 'teal' | 'violet' | 'gradient' | 'refined';

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
  switch (colorScheme) {
    case 'coral':
      return {
        core: 'bg-aurascan-accent',
        innerRing: 'bg-transparent',
        outerRing: 'bg-transparent',
        glow: 'after:bg-aurascan-accent/40'
      };
    case 'cyan':
      return {
        core: 'bg-aurascan-dark-grey',
        innerRing: 'bg-transparent',
        outerRing: 'bg-transparent',
        glow: 'after:bg-aurascan-dark-grey/40'
      };
    case 'teal':
      return {
        core: 'bg-aurascan-deep-blue',
        innerRing: 'bg-transparent',
        outerRing: 'bg-transparent',
        glow: 'after:bg-aurascan-deep-blue/40'
      };
    case 'violet':
      return {
        core: 'bg-aurascan-dark-grey',
        innerRing: 'bg-transparent',
        outerRing: 'bg-transparent',
        glow: 'after:bg-aurascan-dark-grey/40'
      };
    case 'refined':
      return {
        core: 'bg-aurascan-accent/90',
        innerRing: 'bg-transparent',
        outerRing: 'bg-transparent',
        glow: 'after:bg-aurascan-accent/30'
      };
    case 'gradient':
      // Enhanced cycle through vibrant colors for gradient scheme
      if (gradientState === 0) {
        return {
          core: 'bg-gradient-to-r from-aurascan-accent to-aurascan-dark-orange',
          innerRing: 'bg-transparent',
          outerRing: 'bg-transparent',
          glow: 'after:bg-aurascan-accent/40'
        };
      } else if (gradientState === 1) {
        return {
          core: 'bg-gradient-to-r from-aurascan-dark-orange to-aurascan-deep-blue',
          innerRing: 'bg-transparent',
          outerRing: 'bg-transparent',
          glow: 'after:bg-aurascan-dark-orange/40'
        };
      } else if (gradientState === 2) {
        return {
          core: 'bg-gradient-to-r from-aurascan-deep-blue to-aurascan-accent',
          innerRing: 'bg-transparent',
          outerRing: 'bg-transparent',
          glow: 'after:bg-aurascan-deep-blue/40'
        };
      } else {
        // Added a fourth state with mixed colors
        return {
          core: 'bg-gradient-to-tr from-aurascan-accent via-aurascan-deep-blue to-aurascan-dark-orange',
          innerRing: 'bg-transparent',
          outerRing: 'bg-transparent',
          glow: 'after:bg-gradient-to-r from-aurascan-accent/30 to-aurascan-deep-blue/30'
        };
      }
    default:
      return {
        core: 'bg-aurascan-accent',
        innerRing: 'bg-transparent',
        outerRing: 'bg-transparent',
        glow: 'after:bg-aurascan-accent/40'
      };
  }
};
