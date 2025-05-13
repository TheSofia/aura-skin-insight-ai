
import React from 'react';
import { AnimationStyle } from '../../utils/logoAnimations';

type LogoCoreProps = {
  coreSize: string;
  colorClasses: { core: string; glow: string };
  animationClasses: { core: string };
  animationStyle: AnimationStyle;
};

const LogoCore: React.FC<LogoCoreProps> = ({ 
  coreSize, 
  colorClasses, 
  animationClasses, 
  animationStyle 
}) => {
  return (
    <div 
      className={`absolute ${coreSize} ${colorClasses.core} rounded-full ${animationClasses.core} z-10 
        after:content-[''] after:absolute after:inset-0 after:rounded-full ${colorClasses.glow} 
        after:blur-md after:transform after:scale-150 after:opacity-0 after:animate-subtle-glow
        transition-all duration-300 hover:transform hover:scale-125`}
      style={{
        animationDuration: animationStyle === 'cellular' ? '7.5s' : undefined,
        animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.45, 0, 0.55, 1)' : undefined
      }}
    ></div>
  );
};

export default LogoCore;
