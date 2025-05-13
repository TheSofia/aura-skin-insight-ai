
import { LogoSettings } from "@/types/logo";

export const useLogoSettings = (currentStep: number) => {
  // Base settings common to all contexts - standardized on the cellular animation style
  const baseSettings = {
    colorScheme: 'gradient' as const,
    animationStyle: 'cellular' as const,
    size: 'md' as const,
  };
  
  switch (currentStep) {
    case 0: // Landing page - more visible with settings similar to loading page
      return {
        ...baseSettings,
        intensity: 'medium' as const, // Changed from subtle to medium for better visibility
        size: 'lg' as const,
        isLandingPage: false, // This increases ring visibility
        isLoadingPage: true // This enhances overall visibility
      };
    case 2: // Processing page - more vibrant with visible concentric rings
      return {
        ...baseSettings,
        intensity: 'vibrant' as const,
        size: 'lg' as const,
        isLandingPage: false,
        isLoadingPage: true // This enhances ring visibility
      };
    default: // Other pages - medium intensity
      return {
        ...baseSettings,
        intensity: 'medium' as const,
        isLandingPage: false,
        isLoadingPage: false
      };
  }
};

export default useLogoSettings;
