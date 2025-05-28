
import React from "react";

interface HeadlineProps {
  animationStates: {
    isTextVisible: boolean;
    showVersionHighlight: boolean;
  };
  cursorProximity: number;
  headlineRef: React.RefObject<HTMLDivElement>;
}

const Headline = ({ animationStates, cursorProximity, headlineRef }: HeadlineProps) => {
  return (
    <div 
      ref={headlineRef}
      className="text-center mb-12 relative"
      style={{
        transform: `scale(${1 + cursorProximity * 0.02})`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      {/* Main Headline - DermaAgent Typewriter Style */}
      <h1 
        className={`text-4xl md:text-5xl lg:text-6xl mb-6 transition-all duration-2000 dermaagent-headline ${
          animationStates.isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          color: 'var(--dermaagent-graphite-black)',
          lineHeight: '1.1',
          letterSpacing: '0.04em',
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        }}
      >
        <span className="block">DISCOVER</span>
        <span className="block">YOUR BEST</span>
        <span 
          className={`block typewriter-cursor ${
            animationStates.showVersionHighlight ? 'dermaagent-text-gradient' : ''
          }`}
          style={{
            transition: 'all 1s ease-out',
          }}
        >
          VERSION
        </span>
      </h1>
      
      {/* Subtle subtitle */}
      <p 
        className={`text-lg md:text-xl transition-all duration-2000 dermaagent-ui-text ${
          animationStates.isTextVisible ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{
          transitionDelay: '500ms',
          fontWeight: '300',
          letterSpacing: '0.02em',
          color: 'var(--dermaagent-charcoal-gray)',
        }}
      >
        AI-powered skincare intelligence
      </p>
    </div>
  );
};

export default Headline;
