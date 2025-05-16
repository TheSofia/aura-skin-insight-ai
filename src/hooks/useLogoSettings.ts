
import { LogoSettings, IntensityLevel } from "@/types/logo";

export const useLogoSettings = (currentStep: number) => {
  // Base settings standardized on the cellular animation style
  const baseSettings = {
    colorScheme: 'gradient' as const,
    animationStyle: 'cellular' as const,
    size: 'md' as const,
  };
  
  switch (currentStep) {
    case 0: // Landing page - using the unified animation style
      return {
        ...baseSettings,
        intensity: 'medium' as IntensityLevel,
        size: 'lg' as const,
        isLandingPage: false, // For consistent visibility
        isLoadingPage: true // Apply the unified animation style
      };
    case 2: // Processing page - more vibrant with visible concentric rings
      return {
        ...baseSettings,
        intensity: 'vibrant' as IntensityLevel,
        size: 'lg' as const,
        isLandingPage: false,
        isLoadingPage: true // Apply the unified animation style
      };
    default: // Other pages - consistent medium intensity
      return {
        ...baseSettings,
        intensity: 'medium' as IntensityLevel,
        isLandingPage: false, 
        isLoadingPage: true // Apply the unified animation style
      };
  }
};

export default useLogoSettings;
