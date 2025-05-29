
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
        {/* Clean "dermaAgent" logotype with subtle animation enhancements */}
        <span className="relative inline-block overflow-hidden">
          {/* "derma" in lowercase with clean letterforms */}
          <span className="relative">d</span>
          <span className="relative">e</span>
          <span className="relative">r</span>
          <span className="relative">m</span>
          <span className="relative">a</span>
          {/* "Agent" with capital A and clean styling */}
          <span className="relative">A</span>
          <span className="relative">g</span>
          <span className="relative">e</span>
          <span className="relative">n</span>
          <span className="relative">t</span>
          
          {/* Subtle shimmer light pass effect */}
          <span 
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 ${
              isVisible ? 'animate-logo-shimmer' : ''
            }`}
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
              transform: 'translateX(-100%)',
            }}
          />
          
          {/* Subtle typewriter cursor blink at the end */}
          <span 
            className={`ml-1 inline-block w-0.5 h-full bg-current ${
              isVisible ? 'animate-cursor-blink' : 'opacity-0'
            }`}
            style={{
              animationDelay: '3s',
              animationDuration: '1s',
              animationIterationCount: '3',
            }}
          />
        </span>
      </h1>
      
      {/* Clean underline with elegant gradient effect */}
      <div 
        className="mx-auto mt-8 transition-all duration-1800 relative"
        style={{
          width: isVisible ? '180px' : '0px',
          height: '1px',
          background: `linear-gradient(90deg, 
            transparent 0%, 
            var(--dermaagent-light-gray) 15%, 
            var(--dermaagent-charcoal-gray) 50%, 
            var(--dermaagent-light-gray) 85%, 
            transparent 100%)`,
          opacity: 0.6,
        }}
      />
      
      {/* Clean margin line - minimal notebook integration */}
      <div 
        className={`absolute left-0 top-0 bottom-0 transition-all duration-2000 ${
          isVisible ? 'opacity-15' : 'opacity-0'
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
