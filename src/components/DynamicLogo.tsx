
import React, { forwardRef } from 'react';
import LogoCore from './logo/LogoCore';
import LogoRings from './logo/LogoRings';
import LogoParticles from './logo/LogoParticles';
import LogoWrapper from './logo/LogoWrapper';
import useGradientState from '../hooks/useGradientState';
import { getColorClasses } from '../utils/logoColors';
import { getAnimationClasses, AnimationStyle } from '../utils/logoAnimations';
import { 
  getLogoSizeClasses,
  getCoreSizeClasses,
  getInnerRingSizeClasses,
  getOuterRingSizeClasses,
  LogoSize
} from '../utils/logoSizes';
import { IntensityLevel, getContextualAnimation, getIntensityStyles } from '../utils/logoIntensityStyles';

export type DynamicLogoProps = {
  size?: LogoSize;
  className?: string;
  colorScheme?: 'accent' | 'coral' | 'cyan' | 'teal' | 'violet' | 'gradient' | 'refined' | 'monochrome';
  animationStyle?: AnimationStyle;
  showText?: boolean;
  intensity?: IntensityLevel;
  isLandingPage?: boolean;
  isLoadingPage?: boolean;
};

const DynamicLogo = forwardRef<HTMLDivElement, DynamicLogoProps>(({ 
  size = 'md', 
  className = '', 
  colorScheme = 'gradient',  
  animationStyle = 'cellular', 
  showText = false,
  intensity = 'medium',
  isLandingPage = false,
  isLoadingPage = false
}, ref) => {
  // Use the gradient state hook for enhanced gradient colorScheme effect
  const gradientState = useGradientState(true);
  
  // Get size classes for different parts of the logo
  const sizeClass = getLogoSizeClasses(size);
  const coreSize = getCoreSizeClasses(size);
  const innerRingSize = getInnerRingSizeClasses(size);
  const outerRingSize = getOuterRingSizeClasses(size);
  
  // Get color and animation classes - standardized on cellular
  const colorClasses = getColorClasses(colorScheme, gradientState);
  const animationClasses = getAnimationClasses('cellular');

  return (
    <LogoWrapper
      size={size}
      className={className}
      animationStyle="cellular"
      showText={showText}
      intensity={intensity}
      isLandingPage={isLandingPage}
      isLoadingPage={isLoadingPage}
      sizeClass={sizeClass}
      ref={ref}
    >
      {/* Structural concentric rings - refined for cellular aesthetic */}
      <LogoRings 
        innerRingSize={innerRingSize}
        outerRingSize={outerRingSize}
        colorClasses={colorClasses}
        animationClasses={animationClasses}
        animationStyle="cellular"
        intensity={intensity}
        isLandingPage={isLandingPage}
        isLoadingPage={isLoadingPage}
      />
      
      {/* Core dot - refined with subtle gradient and inner highlight */}
      <LogoCore 
        coreSize={coreSize} 
        colorClasses={colorClasses} 
        animationClasses={animationClasses} 
        animationStyle="cellular"
        intensity={intensity}
        isLoadingPage={isLoadingPage}
      />
      
      {/* Refined orbital particles with biological movement */}
      <LogoParticles 
        colorClasses={colorClasses}
        animationClasses={animationClasses}
        animationStyle="cellular"
        intensity={intensity}
        particleOpacity={getContextualAnimation(intensity, { isLandingPage, isLoadingPage }).particleOpacity}
      />
      
      {/* Add a subtle outer glow effect - adjusted based on context */}
      <div className={`absolute inset-[-10%] rounded-full ${getIntensityStyles(intensity, { isLandingPage, isLoadingPage }).glow} animate-pulse-slow bg-gradient-radial from-beautyagent-accent/10 to-transparent`}></div>
    </LogoWrapper>
  );
});

DynamicLogo.displayName = "DynamicLogo";

export default DynamicLogo;
