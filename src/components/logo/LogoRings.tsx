
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
      {/* Inner ring */}
      <div 
        className={`absolute ${innerRingSize} border-2 ${colorClasses.innerRing} rounded-full 
          ${animationClasses.innerRing} transition-transform duration-300 hover:border-opacity-100`}
        style={{
          animationDuration: animationStyle === 'cellular' ? '12s' : undefined,
          animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.4, 0, 0.6, 1)' : undefined
        }}
      ></div>
      
      {/* Outer ring */}
      <div 
        className={`absolute ${outerRingSize} border-2 ${colorClasses.outerRing} rounded-full 
          ${animationClasses.outerRing} transition-transform duration-300 hover:border-opacity-100`}
        style={{
          animationDuration: animationStyle === 'cellular' ? '15s' : undefined,
          animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.37, 0, 0.63, 1)' : undefined
        }}
      ></div>
    </>
  );
};

export default LogoRings;
