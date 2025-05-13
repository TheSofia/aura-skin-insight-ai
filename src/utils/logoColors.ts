
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
        core: 'bg-beautyagent-accent',
        innerRing: 'bg-transparent',
        outerRing: 'bg-transparent',
        glow: 'after:bg-beautyagent-accent/45'
      };
    case 'cyan':
      return {
        core: 'bg-beautyagent-dark-grey',
        innerRing: 'bg-transparent',
        outerRing: 'bg-transparent',
        glow: 'after:bg-beautyagent-dark-grey/45'
      };
    case 'teal':
      return {
        core: 'bg-beautyagent-deep-blue',
        innerRing: 'bg-transparent',
        outerRing: 'bg-transparent',
        glow: 'after:bg-beautyagent-deep-blue/45'
      };
    case 'violet':
      return {
        core: 'bg-beautyagent-dark-grey',
        innerRing: 'bg-transparent',
        outerRing: 'bg-transparent',
        glow: 'after:bg-beautyagent-dark-grey/45'
      };
    case 'refined':
      return {
        core: 'bg-beautyagent-accent/90',
        innerRing: 'bg-transparent',
        outerRing: 'bg-transparent',
        glow: 'after:bg-beautyagent-accent/35'
      };
    case 'gradient':
      // Enhanced cycle through vibrant colors for gradient scheme
      if (gradientState === 0) {
        return {
          core: 'bg-gradient-to-r from-beautyagent-accent to-beautyagent-dark-orange',
          innerRing: 'bg-transparent',
          outerRing: 'bg-transparent',
          glow: 'after:bg-beautyagent-accent/45'
        };
      } else if (gradientState === 1) {
        return {
          core: 'bg-gradient-to-r from-beautyagent-dark-orange to-beautyagent-deep-blue',
          innerRing: 'bg-transparent',
          outerRing: 'bg-transparent',
          glow: 'after:bg-beautyagent-dark-orange/45'
        };
      } else if (gradientState === 2) {
        return {
          core: 'bg-gradient-to-r from-beautyagent-deep-blue to-beautyagent-accent',
          innerRing: 'bg-transparent',
          outerRing: 'bg-transparent',
          glow: 'after:bg-beautyagent-deep-blue/45'
        };
      } else {
        // Added a fourth state with mixed colors
        return {
          core: 'bg-gradient-to-tr from-beautyagent-accent via-beautyagent-deep-blue to-beautyagent-dark-orange',
          innerRing: 'bg-transparent',
          outerRing: 'bg-transparent',
          glow: 'after:bg-gradient-to-r from-beautyagent-accent/35 to-beautyagent-deep-blue/35'
        };
      }
    default:
      return {
        core: 'bg-beautyagent-accent',
        innerRing: 'bg-transparent',
        outerRing: 'bg-transparent',
        glow: 'after:bg-beautyagent-accent/45'
      };
  }
};
