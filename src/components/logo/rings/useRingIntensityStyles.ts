
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
    membraneBlur: 0.7
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
        membraneBlur: 0.5
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
        membraneBlur: 0.75
      };
      break;
    default: // medium - already set in baseStyles with improved values
      break;
  }
  
  return baseStyles;
};
