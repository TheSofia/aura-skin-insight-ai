
import React from "react";

interface SimpleLogoProps {
  isVisible: boolean;
}

const SimpleLogo = ({ isVisible }: SimpleLogoProps) => {
  return (
    <div 
      className={`text-center mb-16 transition-all duration-2000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h1 
        className={`text-5xl md:text-6xl lg:text-7xl font-light tracking-wider relative ${
          isVisible ? 'animate-logo-breathe' : ''
        }`}
        style={{
          fontFamily: 'var(--dermaagent-primary-font)',
          fontWeight: 'var(--dermaagent-logo-weight)',
          color: 'var(--dermaagent-graphite-black)',
          letterSpacing: 'var(--dermaagent-letter-spacing-logo)',
          lineHeight: '1.1',
        }}
      >
        {/* Clean "dermaAgent" logotype with sophisticated futuristic motion */}
        <span className="relative inline-block overflow-hidden">
          {/* Individual letterforms with enhanced spacing for elegance */}
          <span className="relative logo-letterform-enhance">d</span>
          <span className="relative logo-letterform-enhance">e</span>
          <span className="relative logo-letterform-enhance">r</span>
          <span className="relative logo-letterform-enhance">m</span>
          <span className="relative logo-letterform-enhance">a</span>
          <span className="relative logo-letterform-enhance">A</span>
          <span className="relative logo-letterform-enhance">g</span>
          <span className="relative logo-letterform-enhance">e</span>
          <span className="relative logo-letterform-enhance">n</span>
          <span className="relative logo-letterform-enhance">t</span>
          
          {/* Sophisticated shimmer light wave effect */}
          <span 
            className={`absolute inset-0 ${
              isVisible ? 'animate-logo-shimmer-sophisticated' : ''
            }`}
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(26, 26, 26, 0.15) 30%, rgba(255, 255, 255, 0.4) 50%, rgba(26, 26, 26, 0.15) 70%, transparent 100%)',
              backgroundSize: '200% 100%',
              transform: 'translateX(-100%)',
              filter: 'blur(0.5px)',
            }}
          />
          
          {/* Elegant typewriter cursor blink - signature detail */}
          <span 
            className={`ml-2 inline-block w-0.5 h-full bg-current ${
              isVisible ? 'animate-cursor-blink-elegant' : 'opacity-0'
            }`}
            style={{
              animationDelay: '4s',
              animationDuration: '1.2s',
              animationIterationCount: '2',
              opacity: 0.7,
            }}
          />
        </span>
      </h1>
      
      {/* Clean underline with refined gradient */}
      <div 
        className="mx-auto mt-8 transition-all duration-2000 relative"
        style={{
          width: isVisible ? '200px' : '0px',
          height: '1px',
          background: `linear-gradient(90deg, 
            transparent 0%, 
            var(--dermaagent-light-gray) 20%, 
            var(--dermaagent-charcoal-gray) 50%, 
            var(--dermaagent-light-gray) 80%, 
            transparent 100%)`,
          opacity: 0.4,
        }}
      />
      
      {/* Minimal notebook margin line - perfectly clean */}
      <div 
        className={`absolute left-0 top-0 bottom-0 transition-all duration-2000 ${
          isVisible ? 'opacity-10' : 'opacity-0'
        }`}
        style={{
          width: '1px',
          background: 'var(--dermaagent-light-gray)',
          marginLeft: '8%',
        }}
      />
    </div>
  );
};

export default SimpleLogo;
