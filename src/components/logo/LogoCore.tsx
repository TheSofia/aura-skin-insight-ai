
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
      className={`absolute ${coreSize} rounded-full ${animationClasses.core} z-20 
        transition-all duration-300 hover:scale-105`}
      style={{
        background: 'radial-gradient(circle at 40% 40%, var(--core-color-bright, rgba(249, 115, 22, 0.85)) 0%, var(--core-color, rgba(233, 99, 12, 0.9)) 100%)',
        boxShadow: '0 0 15px 2px rgba(249, 115, 22, 0.12)',
        animationDuration: animationStyle === 'cellular' ? '7.5s' : undefined,
        animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.45, 0, 0.55, 1)' : undefined,
        // Fix for TypeScript error by using computed property names with type casting
        ['--core-color' as any]: 'rgba(233, 99, 12, 0.9)',
        ['--core-color-bright' as any]: 'rgba(249, 115, 22, 0.85)',
      }}
    >
      {/* Inner glow layer */}
      <div 
        className="absolute inset-0 rounded-full opacity-70"
        style={{ 
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.5) 0%, transparent 70%)',
        }}
      ></div>
    </div>
  );
};

export default LogoCore;
