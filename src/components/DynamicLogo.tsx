
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
  colorScheme?: 'accent' | 'coral' | 'cyan' | 'teal' | 'violet' | 'gradient' | 'refined';
  animationStyle?: AnimationStyle;
};

const DynamicLogo = forwardRef<HTMLDivElement, DynamicLogoProps>(({ 
  size = 'md', 
  className = '', 
  colorScheme = 'accent',
  animationStyle = 'combined'
}, ref) => {
  // Use the gradient state hook for enhanced gradient colorScheme effect
  const gradientState = useGradientState(colorScheme === 'gradient');
  
  // Get size classes for different parts of the logo
  const sizeClass = getLogoSizeClasses(size);
  const coreSize = getCoreSizeClasses(size);
  const innerRingSize = getInnerRingSizeClasses(size);
  const outerRingSize = getOuterRingSizeClasses(size);
  
  // Get color and animation classes
  const colorClasses = getColorClasses(colorScheme, gradientState);
  const animationClasses = getAnimationClasses(animationStyle);

  // Define sophisticated hover animation for the logo
  const hoverAnimationClass = useMemo(() => {
    return 'group transition-all duration-500 hover:scale-[1.02]';
  }, []);

  return (
    <div 
      className={`dot-logo relative ${sizeClass} ${className} ${animationStyle === 'cellular' ? 'animate-cellular-drift' : ''} ${hoverAnimationClass}`}
      role="presentation"
      ref={ref}
      style={{
        animationDuration: animationStyle === 'cellular' ? '8s' : undefined,
        animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.4, 0, 0.6, 1)' : undefined
      }}
    >
      {/* Core dot - enhanced with gradient and inner highlight */}
      <LogoCore 
        coreSize={coreSize} 
        colorClasses={colorClasses} 
        animationClasses={animationClasses} 
        animationStyle={animationStyle}
      />
      
      {/* Inner and outer rings - no border, subtle highlight instead */}
      <LogoRings 
        innerRingSize={innerRingSize}
        outerRingSize={outerRingSize}
        colorClasses={colorClasses}
        animationClasses={animationClasses}
        animationStyle={animationStyle}
      />
      
      {/* Floating particles - enhanced with more organic movement */}
      <LogoParticles 
        colorClasses={colorClasses}
        animationClasses={animationClasses}
        animationStyle={animationStyle}
      />
    </div>
  );
});

DynamicLogo.displayName = "DynamicLogo";

export default DynamicLogo;
