
import React, { forwardRef, useMemo } from 'react';
import LogoCore from './logo/LogoCore';
import LogoRings from './logo/LogoRings';
import LogoParticles from './logo/LogoParticles';
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

export type DynamicLogoProps = {
  size?: LogoSize;
  className?: string;
  colorScheme?: 'accent' | 'coral' | 'cyan' | 'teal' | 'violet' | 'gradient' | 'refined' | 'monochrome';
  animationStyle?: AnimationStyle;
  showText?: boolean;
  intensity?: 'subtle' | 'medium' | 'vibrant';
  isLandingPage?: boolean; // Identifies the landing page context for ring visibility
  isLoadingPage?: boolean; // Added to specifically identify loading page context
};

const DynamicLogo = forwardRef<HTMLDivElement, DynamicLogoProps>(({ 
  size = 'md', 
  className = '', 
  colorScheme = 'gradient', // Standardized to gradient for consistency
  animationStyle = 'cellular', // Standardized to cellular for brand identity
  showText = false,
  intensity = 'medium',
  isLandingPage = false,
  isLoadingPage = false
}, ref) => {
  // Use the gradient state hook for enhanced gradient colorScheme effect
  const gradientState = useGradientState(true); // Always use gradient for standardization
  
  // Get size classes for different parts of the logo
  const sizeClass = getLogoSizeClasses(size);
  const coreSize = getCoreSizeClasses(size);
  const innerRingSize = getInnerRingSizeClasses(size);
  const outerRingSize = getOuterRingSizeClasses(size);
  
  // Get color and animation classes
  const colorClasses = getColorClasses(colorScheme, gradientState);
  
  // Standardize on cellular animation style for brand consistency
  const animationClasses = getAnimationClasses('cellular');

  // Define sophisticated hover animation for the logo
  const hoverAnimationClass = useMemo(() => {
    return 'group transition-all duration-500 hover:scale-[1.02] hover:filter hover:brightness-[1.03]';
  }, []);

  // Contextually adjust animation parameters based on the page context
  const getContextualAnimation = () => {
    if (isLoadingPage) {
      // Loading page: more dynamic animation
      return {
        cellSpeed: intensity === 'subtle' ? '7s' : intensity === 'vibrant' ? '5s' : '6s',
        particleOpacity: intensity === 'subtle' ? 0.7 : intensity === 'vibrant' ? 0.9 : 0.8,
      };
    } else if (isLandingPage) {
      // Landing page: gentler, more ethereal animation
      return {
        cellSpeed: intensity === 'subtle' ? '11s' : intensity === 'vibrant' ? '9s' : '10s', // Even slower for landing page
        particleOpacity: intensity === 'subtle' ? 0.5 : intensity === 'vibrant' ? 0.7 : 0.6, // More translucent for landing page
      };
    } else {
      // Default for other pages: balanced animation
      return {
        cellSpeed: intensity === 'subtle' ? '9s' : intensity === 'vibrant' ? '7s' : '8s',
        particleOpacity: intensity === 'subtle' ? 0.6 : intensity === 'vibrant' ? 0.8 : 0.7,
      };
    }
  };

  const contextualAnimation = getContextualAnimation();

  // Adjust opacity and animation speed based on intensity and context
  const getIntensityStyles = () => {
    // Base styles
    const baseIntensity = {
      subtle: {
        opacity: 'opacity-80',
        animationDuration: 'animation-slow',
        particleOpacity: 0.6,
        glow: 'opacity-20'
      },
      vibrant: {
        opacity: 'opacity-100',
        animationDuration: 'animation-fast',
        particleOpacity: 0.9,
        glow: 'opacity-40'
      },
      medium: {
        opacity: 'opacity-90',
        animationDuration: 'animation-normal',
        particleOpacity: 0.75,
        glow: 'opacity-30'
      }
    };

    // Get base style based on intensity
    const baseStyle = baseIntensity[intensity] || baseIntensity.medium;
    
    // Apply contextual refinements
    if (isLandingPage) {
      // For landing page: more ethereal, gentler appearance
      return {
        ...baseStyle,
        opacity: intensity === 'subtle' ? 'opacity-70' : 'opacity-75', // Even more translucent on landing page
        particleOpacity: baseStyle.particleOpacity * 0.85, // More translucent particles
        glow: `opacity-${Math.max(10, parseInt(baseStyle.glow.split('-')[1]) * 0.7)}` // Subtler glow
      };
    } else if (isLoadingPage) {
      // For loading page: more vibrant, dynamic appearance 
      return {
        ...baseStyle,
        particleOpacity: baseStyle.particleOpacity * 1.1, // More visible particles
        glow: `opacity-${Math.min(45, parseInt(baseStyle.glow.split('-')[1]) * 1.2)}` // Enhanced glow
      };
    }
    
    // Default for other pages
    return baseStyle;
  };

  const intensityStyles = getIntensityStyles();

  // New: Ethereal text effect styles for the wordmark
  const wordmarkTextStyle = {
    textShadow: '0 0 0.5px rgba(64, 62, 67, 0.3), 0 0 1px rgba(64, 62, 67, 0.2), 0 0 2px rgba(64, 62, 67, 0.1)',
    letterSpacing: '0.02em',
  };

  return (
    <div className={`flex items-center ${showText ? 'flex-col md:flex-row' : ''} gap-3`}>
      <div 
        className={`dot-logo relative ${sizeClass} ${className} ${animationStyle === 'cellular' ? 'animate-cellular-drift' : ''} ${hoverAnimationClass} ${intensityStyles.opacity}`}
        role="presentation"
        ref={ref}
        style={{
          animationDuration: contextualAnimation.cellSpeed,
          animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
          backdropFilter: 'blur(0.5px)',
        }}
      >
        {/* Structural concentric rings - provides the foundational structure */}
        <LogoRings 
          innerRingSize={innerRingSize}
          outerRingSize={outerRingSize}
          colorClasses={colorClasses}
          animationClasses={animationClasses}
          animationStyle="cellular" // Standardize on cellular animation
          intensity={intensity}
          isLandingPage={isLandingPage} // Controls ring visibility for landing page
          isLoadingPage={isLoadingPage} // Identifies the loading page context
        />
        
        {/* Core dot - refined with subtle gradient and inner highlight */}
        <LogoCore 
          coreSize={coreSize} 
          colorClasses={colorClasses} 
          animationClasses={animationClasses} 
          animationStyle="cellular" // Standardize on cellular animation
          intensity={intensity}
          isLoadingPage={isLoadingPage}
        />
        
        {/* Refined orbital particles - cellular, sophisticated movement */}
        <LogoParticles 
          colorClasses={colorClasses}
          animationClasses={animationClasses}
          animationStyle="cellular" // Standardize on cellular animation
          intensity={intensity}
          particleOpacity={contextualAnimation.particleOpacity}
        />
        
        {/* Add a subtle outer glow effect - adjusted based on context */}
        <div className={`absolute inset-[-10%] rounded-full ${intensityStyles.glow} animate-pulse-slow bg-gradient-radial from-beautyagent-accent/10 to-transparent`}></div>
      </div>
      
      {showText && (
        <div 
          className="font-clash font-light text-beautyagent-dark-grey text-xl md:text-2xl animate-fade-in" 
          style={{
            animationDelay: '0.5s', 
            animationFillMode: 'forwards',
            ...wordmarkTextStyle
          }}
        >
          beautyAgent
        </div>
      )}
    </div>
  );
});

DynamicLogo.displayName = "DynamicLogo";

export default DynamicLogo;
