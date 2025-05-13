
import React, { forwardRef } from 'react';
import { AnimationStyle } from '../../utils/logoAnimations';
import { LogoSize } from '../../utils/logoSizes';
import { IntensityLevel, PageContext, getHoverAnimationClass, getIntensityStyles, getContextualAnimation, getWordmarkTextStyle } from '../../utils/logoIntensityStyles';

type LogoWrapperProps = {
  children: React.ReactNode;
  size: LogoSize;
  className?: string;
  animationStyle: AnimationStyle;
  showText?: boolean;
  intensity: IntensityLevel;
  isLandingPage?: boolean;
  isLoadingPage?: boolean;
  sizeClass: string;
};

const LogoWrapper = forwardRef<HTMLDivElement, LogoWrapperProps>(({ 
  children, 
  size, 
  className = '', 
  animationStyle, 
  showText = false,
  intensity,
  isLandingPage = false,
  isLoadingPage = false,
  sizeClass
}, ref) => {
  // Get hover animation class
  const hoverAnimationClass = getHoverAnimationClass();

  // Get contextual animation parameters
  const contextualAnimation = getContextualAnimation(intensity, { isLandingPage, isLoadingPage });

  // Get intensity styles
  const intensityStyles = getIntensityStyles(intensity, { isLandingPage, isLoadingPage });

  // Wordmark text style for ethereal effect
  const wordmarkTextStyle = getWordmarkTextStyle();

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
        {children}
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

LogoWrapper.displayName = "LogoWrapper";

export default LogoWrapper;
