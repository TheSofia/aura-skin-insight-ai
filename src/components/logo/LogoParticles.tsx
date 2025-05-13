
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
      {Array(6).fill(0).map((_, i) => {
        // Create varied sizes for particles
        const size = 1.2 + (i % 3) * 0.2;
        
        return (
          <div 
            key={i}
            className={`absolute rounded-full ${animationClasses.particles} opacity-80
            transition-all duration-500 hover:opacity-100 hover:scale-125 group-hover:scale-110`}
            style={{
              width: `${size}rem`,
              height: `${size}rem`,
              left: `${25 + (i * 10)}%`,
              top: `${15 + (i * 15)}%`,
              background: 'radial-gradient(circle at 30% 30%, rgba(249, 115, 22, 0.9) 0%, rgba(249, 115, 22, 0.7) 100%)',
              boxShadow: '0 0 5px 0 rgba(249, 115, 22, 0.2)',
              animationDuration: animationStyle === 'cellular' ? `${8.5 + i * 1.2}s` : `${1.5 + i * 0.4}s`, // Slower for cellular
              animationDelay: `${i * (animationStyle === 'cellular' ? 0.8 : 0.2)}s`,
              animationTimingFunction: animationStyle === 'cellular' ? 'cubic-bezier(0.4, 0, 0.6, 1)' : undefined,
              transform: 'translateZ(0)' // Force hardware acceleration for smoother animation
            }}
          >
            {/* Add inner highlight for more dimensional feel */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{ 
                background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default LogoParticles;
