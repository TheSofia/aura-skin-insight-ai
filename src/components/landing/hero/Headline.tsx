
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
        transform: `scale(${1 + cursorProximity * 0.015})`,
        transition: 'transform 0.4s ease-out',
      }}
    >
      {/* Main Headline - Refined DermaAgent Typography */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">
        {/* "DISCOVER" - Light gray typewriter style */}
        <span 
          className={`block dermaagent-headline-light transition-all duration-2000 ${
            animationStates.isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionDelay: '200ms',
            lineHeight: '1.1',
          }}
        >
          DISCOVER
        </span>
        
        {/* "YOUR BEST VERSION" - Strong contrast UI font */}
        <span 
          className={`block dermaagent-ui-text-medium transition-all duration-2000 ${
            animationStates.isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          } ${
            animationStates.showVersionHighlight ? 'dermaagent-text-gradient' : ''
          }`}
          style={{
            transitionDelay: '800ms',
            lineHeight: '1.1',
            marginTop: '0.5rem',
          }}
        >
          YOUR BEST VERSION
        </span>
      </h1>
      
      {/* Subtle subtitle */}
      <p 
        className={`text-lg md:text-xl transition-all duration-2000 dermaagent-ui-text ${
          animationStates.isTextVisible ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{
          transitionDelay: '1200ms',
          fontWeight: '300',
          letterSpacing: '0.01em',
        }}
      >
        AI-powered skincare intelligence
      </p>
    </div>
  );
};

export default Headline;
