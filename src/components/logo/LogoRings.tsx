
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
      {/* Inner ring with refined border - thinner, more subtle */}
      <div 
        className={`absolute ${innerRingSize} ${colorClasses.innerRing} rounded-full 
          ${animationClasses.innerRing} transition-transform duration-300 hover:opacity-90`}
        style={{
          animationDuration: animationStyle === 'cellular' ? '12s' : undefined,
          animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.4, 0, 0.6, 1)' : undefined,
          boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.3)', // Extremely subtle inner highlight instead of border
          border: 'none' // Remove the border completely
        }}
      ></div>
      
      {/* Outer ring with refined border - thinner, more subtle */}
      <div 
        className={`absolute ${outerRingSize} ${colorClasses.outerRing} rounded-full 
          ${animationClasses.outerRing} transition-transform duration-300 hover:opacity-90`}
        style={{
          animationDuration: animationStyle === 'cellular' ? '15s' : undefined,
          animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.37, 0, 0.63, 1)' : undefined,
          boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.2)', // Extremely subtle inner highlight instead of border
          border: 'none' // Remove the border completely
        }}
      ></div>
    </>
  );
};

export default LogoRings;
