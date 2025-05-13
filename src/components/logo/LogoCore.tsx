
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
      className={`absolute ${coreSize} rounded-full ${animationClasses.core} z-10 
        transition-all duration-300 hover:scale-105`}
      style={{
        background: 'radial-gradient(circle at 40% 40%, var(--core-color-bright, #FF8C42) 0%, var(--core-color, #F97316) 100%)',
        boxShadow: '0 0 10px 0 rgba(249, 115, 22, 0.15)', // Subtle glow instead of outline
        animationDuration: animationStyle === 'cellular' ? '7.5s' : undefined,
        animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.45, 0, 0.55, 1)' : undefined,
        // Add CSS variables for dynamic color management with default values
        '--core-color': '#F97316',
        '--core-color-bright': '#FF8C42',
      }}
      
      // Add enhanced layered glow effect instead of an outline
      // This creates a more sophisticated, dimensional look without a harsh border
    >
      {/* Inner glow layer */}
      <div 
        className="absolute inset-0 rounded-full opacity-70"
        style={{ 
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
        }}
      ></div>
    </div>
  );
};

export default LogoCore;
