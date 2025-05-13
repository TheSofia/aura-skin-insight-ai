
import { AnimationStyle } from "@/utils/logoAnimations";

export type IntensityLevel = 'subtle' | 'medium' | 'vibrant';

export type LogoSettings = {
  colorScheme: 'gradient' | 'monochrome' | 'refined';
  animationStyle: AnimationStyle;
  size: 'sm' | 'md' | 'lg';
  intensity: IntensityLevel;
  isLandingPage: boolean;
  isLoadingPage: boolean;
};
