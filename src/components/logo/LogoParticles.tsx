
import React from 'react';
import { AnimationStyle } from '../../utils/logoAnimations';

type LogoParticlesProps = {
  colorClasses: { core: string };
  animationClasses: { particles: string };
  animationStyle: AnimationStyle;
};

const LogoParticles: React.FC<LogoParticlesProps> = ({ 
  colorClasses, 
  animationClasses,
  animationStyle
}) => {
  return (
    <div className="absolute inset-0 overflow-visible">
      {Array(6).fill(0).map((_, i) => ( 
        <div 
          key={i}
          className={`absolute w-1.5 h-1.5 rounded-full ${colorClasses.core} ${animationClasses.particles} opacity-80
            transition-all duration-300 hover:opacity-100 hover:transform hover:scale-150`}
          style={{
            left: `${25 + (i * 10)}%`,
            top: `${15 + (i * 15)}%`,
            animationDuration: animationStyle === 'cellular' ? `${8.5 + i * 1.2}s` : `${1.5 + i * 0.4}s`, // Slower for cellular
            animationDelay: `${i * (animationStyle === 'cellular' ? 0.8 : 0.2)}s`,
            animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.4, 0, 0.6, 1)' : undefined
          }}
        ></div>
      ))}
    </div>
  );
};

export default LogoParticles;
