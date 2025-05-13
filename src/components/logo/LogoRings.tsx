
import React from 'react';
import { AnimationStyle } from '../../utils/logoAnimations';

type LogoRingsProps = {
  innerRingSize: string;
  outerRingSize: string;
  colorClasses: { innerRing: string; outerRing: string };
  animationClasses: { innerRing: string; outerRing: string };
  animationStyle: AnimationStyle;
};

const LogoRings: React.FC<LogoRingsProps> = ({ 
  innerRingSize, 
  outerRingSize, 
  colorClasses, 
  animationClasses,
  animationStyle
}) => {
  return (
    <>
      {/* Inner ring with subtle clarity */}
      <div 
        className={`absolute ${innerRingSize} rounded-full ${animationClasses.innerRing} z-10
          transition-transform duration-300 backdrop-blur-[0.5px]`}
        style={{
          background: 'rgba(255, 255, 255, 0.06)',
          boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(0.5px)',
          animationDuration: animationStyle === 'cellular' ? '12s' : undefined,
          animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.4, 0, 0.6, 1)' : undefined,
        }}
      ></div>
      
      {/* Outer ring with subtle clarity */}
      <div 
        className={`absolute ${outerRingSize} rounded-full ${animationClasses.outerRing} 
          transition-transform duration-300 backdrop-blur-[0.2px]`}
        style={{
          background: 'rgba(255, 255, 255, 0.04)',
          boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(0.2px)',
          animationDuration: animationStyle === 'cellular' ? '15s' : undefined,
          animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.37, 0, 0.63, 1)' : undefined,
        }}
      ></div>
    </>
  );
};

export default LogoRings;
