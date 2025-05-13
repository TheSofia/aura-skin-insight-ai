
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
        background: 'radial-gradient(circle at 40% 40%, var(--core-color-bright, rgba(249, 115, 22, 0.90)) 0%, var(--core-color, rgba(233, 99, 12, 0.95)) 100%)',
        boxShadow: '0 0 15px 4px rgba(249, 115, 22, 0.15)',
        animationDuration: animationStyle === 'cellular' ? '7.5s' : undefined,
        animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.45, 0, 0.55, 1)' : undefined,
        // Fix for TypeScript error by using computed property names with type casting
        ['--core-color' as any]: 'rgba(233, 99, 12, 0.95)',
        ['--core-color-bright' as any]: 'rgba(249, 115, 22, 0.90)',
      }}
    >
      {/* Inner glow layer */}
      <div 
        className="absolute inset-0 rounded-full opacity-80"
        style={{ 
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
        }}
      ></div>
      
      {/* Subtle pulse effect */}
      <div 
        className="absolute inset-[-20%] rounded-full opacity-0 animate-pulse-subtle"
        style={{ 
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%)',
          animationDuration: '3s',
        }}
      ></div>
    </div>
  );
};

export default LogoCore;
