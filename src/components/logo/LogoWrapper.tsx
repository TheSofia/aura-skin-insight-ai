
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
  // Get hover animation class - refined for biological elegance
  const hoverAnimationClass = getHoverAnimationClass();

  // Get contextual animation parameters
  const contextualAnimation = getContextualAnimation(intensity, { isLandingPage, isLoadingPage });

  // Get intensity styles
  const intensityStyles = getIntensityStyles(intensity, { isLandingPage, isLoadingPage });

  // Wordmark text style for ethereal effect
  const wordmarkTextStyle = getWordmarkTextStyle();

  // Adjust layout for different screen sizes and showText option
  const layoutClasses = showText 
    ? isLandingPage 
      ? 'flex flex-col items-center gap-2' 
      : 'flex items-center md:flex-row gap-3'
    : '';

  return (
    <div className={layoutClasses}>
      <div 
        className={`dot-logo relative ${sizeClass} ${className} ${animationStyle === 'cellular' ? 'animate-cellular-drift' : ''} ${hoverAnimationClass} ${intensityStyles.opacity}`}
        role="presentation"
        ref={ref}
        style={{
          animationDuration: contextualAnimation.cellSpeed,
          animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
          backdropFilter: 'blur(0.5px)',
        }}
      >
        {children}
      </div>
      
      {showText && (
        <div 
          className={`font-clash font-light text-beautyagent-dark-grey animate-fade-in tracking-wide ${
            isLandingPage ? 'text-xl md:text-2xl mt-2' : 'text-lg md:text-xl'
          }`}
          style={{
            animationDelay: '0.5s', 
            animationFillMode: 'forwards',
            letterSpacing: '0.02em',
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
