
import React from "react";

interface HeadlineProps {
  animationStates: {
    discover: boolean;
    yourBest: boolean;
    version: boolean;
    underlineVisible: boolean;
    ctaReady: boolean;
  };
  cursorProximity: number;
  headlineRef: React.RefObject<HTMLDivElement>;
}

const Headline: React.FC<HeadlineProps> = ({ 
  animationStates, 
  cursorProximity,
  headlineRef 
}) => {
  return (
    <div 
      ref={headlineRef} 
      className="text-center mb-20 relative mt-24 pt-16"
      style={{ 
        transformStyle: 'preserve-3d', 
        perspective: '1000px',
        transition: 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)'
      }}
    >
      <h1 className="font-clash tracking-wider text-beautyagent-dark-grey">
        <span 
          className={`block text-5xl md:text-6xl lg:text-7xl font-light transition-all duration-1000 ease-out transform filter ${
            animationStates.discover ? 'opacity-70 translate-y-0 blur-[0.8px]' : 'opacity-0 translate-y-6 blur-md'
          }`}
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(${cursorProximity * -5}px)`,
            opacity: animationStates.discover ? 0.7 - cursorProximity * 0.1 : 0
          }}
        >
          DISCOVER
        </span>
        
        <span 
          className={`block text-5xl md:text-6xl lg:text-7xl font-light transition-all duration-1000 ease-out transform filter ${
            animationStates.yourBest ? 'opacity-70 translate-y-0 scale-100 blur-[0.8px]' : 'opacity-0 translate-y-4 scale-95 blur-md'
          }`}
          style={{ 
            transitionDelay: '300ms',
            transformStyle: 'preserve-3d',
            transform: `translateZ(${cursorProximity * 0}px)`,
            opacity: animationStates.yourBest ? 0.7 - cursorProximity * 0.05 : 0
          }}
        >
          YOUR BEST
        </span>
        
        <span 
          className={`version-text block text-5xl md:text-6xl lg:text-7xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-beautyagent-burnt-orange to-beautyagent-violet-titanium transition-all duration-1000 ease-out transform ${
            animationStates.version ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-md'
          }`}
          style={{ 
            transitionDelay: '600ms',
            backgroundSize: '200% 100%',
            animation: animationStates.version ? 'shimmer-gradient 10s ease-in-out infinite' : 'none',
            animationDelay: '1s',
            textShadow: `0 0 ${25 + cursorProximity * 15}px rgba(242, 150, 105, ${0.25 + cursorProximity * 0.2})`,
            transformStyle: 'preserve-3d',
            transform: `translateZ(${cursorProximity * 10}px)`
          }}
        >
          VERSION
        </span>
      </h1>
    </div>
  );
};

export default Headline;
