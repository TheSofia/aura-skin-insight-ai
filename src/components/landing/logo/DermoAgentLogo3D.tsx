
import React, { useState, useEffect, useRef } from 'react';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

interface DermoAgentLogo3DProps {
  isVisible: boolean;
  className?: string;
}

const DermoAgentLogo3D: React.FC<DermoAgentLogo3DProps> = ({ 
  isVisible, 
  className = '' 
}) => {
  const [showReinforcement, setShowReinforcement] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'typing' | 'settling' | 'reinforcing' | 'complete'>('typing');
  const logoRef = useRef<HTMLDivElement>(null);

  // Typing animation for "DERMO.AGENT"
  const logoTyping = useTypingAnimation({
    text: "DERMO.AGENT",
    speed: 120,
    delay: isVisible ? 800 : 9999,
    showCursor: false,
    onComplete: () => {
      setAnimationPhase('settling');
      setTimeout(() => {
        setAnimationPhase('reinforcing');
        setShowReinforcement(true);
        setTimeout(() => {
          setAnimationPhase('complete');
          setShowReinforcement(false);
        }, 1200);
      }, 400);
    }
  });

  return (
    <div 
      ref={logoRef}
      className={`relative ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Main Logo Container with 3D depth */}
      <div 
        className={`relative logo-3d-container transition-all duration-1000 ease-out ${
          animationPhase === 'complete' ? 'animate-float-3d' : ''
        }`}
        style={{
          transform: animationPhase === 'settling' ? 'rotateX(2deg) rotateY(-1deg)' : 
                    animationPhase === 'reinforcing' ? 'rotateX(0deg) rotateY(0deg) scale(1.02)' :
                    'rotateX(0deg) rotateY(0deg) scale(1)',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.320, 1)'
        }}
      >
        {/* Background depth layer for 3D effect */}
        <div 
          className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl font-light tracking-wider text-transparent"
          style={{
            fontFamily: 'var(--dermaagent-primary-font)',
            transform: 'translateZ(-8px) translateY(2px) translateX(2px)',
            textShadow: '0 0 20px rgba(0, 0, 0, 0.15)',
            background: 'linear-gradient(135deg, rgba(227, 227, 227, 0.3), rgba(169, 50, 38, 0.1))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text'
          }}
        >
          {logoTyping.displayedText}
        </div>

        {/* Mid depth layer for enhanced 3D */}
        <div 
          className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl font-light tracking-wider text-transparent"
          style={{
            fontFamily: 'var(--dermaagent-primary-font)',
            transform: 'translateZ(-4px) translateY(1px) translateX(1px)',
            background: 'linear-gradient(135deg, rgba(227, 227, 227, 0.5), rgba(44, 62, 115, 0.2))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text'
          }}
        >
          {logoTyping.displayedText}
        </div>

        {/* Main logo text with sophisticated styling */}
        <div 
          className="relative text-6xl md:text-7xl lg:text-8xl font-light tracking-wider text-3d-elegant"
          style={{
            fontFamily: 'var(--dermaagent-primary-font)',
            color: 'var(--dermaagent-pale-black)',
            transform: 'translateZ(0px)',
            textShadow: `
              0 1px 0 rgba(255, 255, 255, 0.4),
              0 2px 0 rgba(255, 255, 255, 0.3),
              0 3px 0 rgba(255, 255, 255, 0.2),
              0 4px 0 rgba(255, 255, 255, 0.1),
              0 5px 5px rgba(0, 0, 0, 0.05),
              0 0 20px rgba(169, 50, 38, 0.1)
            `,
            letterSpacing: '0.15em'
          }}
        >
          {logoTyping.displayedText.split('').map((char, index) => {
            const isDot = char === '.';
            return (
              <span
                key={index}
                className={`inline-block transition-all duration-500 ${
                  index < logoTyping.displayedText.length 
                    ? 'animate-character-arrive opacity-100' 
                    : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 80}ms`,
                  transform: isDot ? 'translateZ(4px)' : 'translateZ(2px)',
                  color: isDot && showReinforcement 
                    ? 'var(--dermaagent-primary-orange-red)' 
                    : 'inherit',
                  textShadow: isDot && showReinforcement
                    ? `0 0 10px var(--dermaagent-primary-orange-red), 
                       0 0 20px rgba(169, 50, 38, 0.3),
                       ${char !== '.' ? '0 1px 0 rgba(255, 255, 255, 0.4), 0 2px 0 rgba(255, 255, 255, 0.3), 0 3px 0 rgba(255, 255, 255, 0.2), 0 4px 0 rgba(255, 255, 255, 0.1), 0 5px 5px rgba(0, 0, 0, 0.05)' : ''}`
                    : 'inherit',
                  transition: 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)'
                }}
              >
                {char}
              </span>
            );
          })}
        </div>

        {/* Reinforcement energy pulse */}
        {showReinforcement && (
          <div 
            className="absolute inset-0 pointer-events-none animate-energy-pulse"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(169, 50, 38, 0.2), transparent)',
              transform: 'translateZ(6px)',
              borderRadius: '8px'
            }}
          />
        )}

        {/* Sophisticated highlight overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.1) 0%, 
              rgba(255, 255, 255, 0.05) 25%,
              transparent 50%,
              rgba(169, 50, 38, 0.02) 75%,
              rgba(44, 62, 115, 0.03) 100%)`,
            transform: 'translateZ(1px)',
            borderRadius: '4px',
            opacity: animationPhase === 'complete' ? 0.6 : 0,
            transition: 'opacity 1s ease-out'
          }}
        />
      </div>
    </div>
  );
};

export default DermoAgentLogo3D;
