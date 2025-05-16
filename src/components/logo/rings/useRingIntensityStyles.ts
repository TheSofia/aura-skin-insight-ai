
import { IntensityLevel, IntensityStyles } from '../../../types/logo';

export const useRingIntensityStyles = (
  intensity: IntensityLevel = 'medium',
  isLandingPage: boolean = false,
  isLoadingPage: boolean = false
): IntensityStyles => {
  // Base styles determined by intensity, but with improved visibility
  let baseStyles: IntensityStyles = {
    innerOpacity: 0.12,
    outerOpacity: 0.085,
    innerBorderOpacity: 0.26,
    outerBorderOpacity: 0.18,
    blurFactor: 0.5,
    innerDuration: '14s',
    outerDuration: '18s',
    membraneOpacity: 0.16,
    membraneBlur: 0.7,
    pulseFactor: 1.0
  };
  
  // Adjust for intensity levels but maintain higher visibility across all contexts
  switch (intensity) {
    case 'subtle':
      baseStyles = {
        innerOpacity: 0.10,
        outerOpacity: 0.07,
        innerBorderOpacity: 0.20,
        outerBorderOpacity: 0.14,
        blurFactor: 0.4,
        innerDuration: '20s',
        outerDuration: '24s',
        membraneOpacity: 0.13,
        membraneBlur: 0.5,
        pulseFactor: 0.8
      };
      break;
    case 'vibrant':
      baseStyles = {
        innerOpacity: 0.14,
        outerOpacity: 0.095,
        innerBorderOpacity: 0.30,
        outerBorderOpacity: 0.22,
        blurFactor: 0.6,
        innerDuration: '12s',
        outerDuration: '15s',
        membraneOpacity: 0.18,
        membraneBlur: 0.75,
        pulseFactor: 1.2
      };
      break;
    case 'hypnotic':
      baseStyles = {
        innerOpacity: 0.16,
        outerOpacity: 0.11,
        innerBorderOpacity: 0.35,
        outerBorderOpacity: 0.26,
        blurFactor: 0.7,
        innerDuration: '16s', 
        outerDuration: '22s',
        membraneOpacity: 0.22,
        membraneBlur: 0.9,
        pulseFactor: 1.4
      };
      break;
    default: // medium - already set in baseStyles with improved values
      break;
  }
  
  // Apply context-specific adjustments for landing page
  if (isLandingPage) {
    // For landing page, enhance the dreamy, hypnotic quality
    return {
      ...baseStyles,
      innerDuration: (parseFloat(baseStyles.innerDuration) * 1.3) + 's', // Slower, more mesmerizing motion
      outerDuration: (parseFloat(baseStyles.outerDuration) * 1.3) + 's',
      innerOpacity: baseStyles.innerOpacity * 1.1,
      outerOpacity: baseStyles.outerOpacity * 1.1,
      membraneOpacity: baseStyles.membraneOpacity * 1.15,
      membraneBlur: baseStyles.membraneBlur * 1.2,
      pulseFactor: baseStyles.pulseFactor * 1.15
    };
  }
  
  // Apply context-specific adjustments for loading page
  if (isLoadingPage) {
    // For loading page, make animation more dynamic and attention-grabbing
    return {
      ...baseStyles,
      innerDuration: (parseFloat(baseStyles.innerDuration) * 0.8) + 's', // Faster motion for loading context
      outerDuration: (parseFloat(baseStyles.outerDuration) * 0.8) + 's',
      innerOpacity: baseStyles.innerOpacity * 1.2,
      outerOpacity: baseStyles.outerOpacity * 1.2,
      innerBorderOpacity: baseStyles.innerBorderOpacity * 1.15,
      outerBorderOpacity: baseStyles.outerBorderOpacity * 1.15,
      pulseFactor: baseStyles.pulseFactor * 1.25
    };
  }
  
  return baseStyles;
};
