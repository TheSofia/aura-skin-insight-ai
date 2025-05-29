
import React from "react";

interface SimpleLogoProps {
  isVisible: boolean;
}

const SimpleLogo = ({ isVisible }: SimpleLogoProps) => {
  return (
    <div 
      className={`text-center mb-12 transition-all duration-2000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h1 
        className={`text-2xl md:text-3xl lg:text-4xl font-light tracking-wider relative ${
          isVisible ? 'animate-logo-breathe' : ''
        }`}
        style={{
          fontFamily: 'var(--dermaagent-primary-font)',
          fontWeight: 'var(--dermaagent-logo-weight)',
          color: 'var(--dermaagent-graphite-black)',
          letterSpacing: '0.25em',
          lineHeight: '1.1',
        }}
      >
        {/* Clean "d e r m a . a g e n t" logotype - reduced size for better proportion */}
        <span className="relative inline-block overflow-hidden">
          {/* Individual letterforms with enhanced spacing for elegance - all lowercase */}
          <span className="relative logo-letterform-enhance">d</span>
          <span className="mx-1.5"></span>
          <span className="relative logo-letterform-enhance">e</span>
          <span className="mx-1.5"></span>
          <span className="relative logo-letterform-enhance">r</span>
          <span className="mx-1.5"></span>
          <span className="relative logo-letterform-enhance">m</span>
          <span className="mx-1.5"></span>
          <span className="relative logo-letterform-enhance">a</span>
          <span className="mx-2"></span>
          <span className="relative logo-letterform-enhance">.</span>
          <span className="mx-2"></span>
          <span className="relative logo-letterform-enhance">a</span>
          <span className="mx-1.5"></span>
          <span className="relative logo-letterform-enhance">g</span>
          <span className="mx-1.5"></span>
          <span className="relative logo-letterform-enhance">e</span>
          <span className="mx-1.5"></span>
          <span className="relative logo-letterform-enhance">n</span>
          <span className="mx-1.5"></span>
          <span className="relative logo-letterform-enhance">t</span>
        </span>
      </h1>
      
      {/* Clean underline with refined gradient - smaller for proportionality */}
      <div 
        className="mx-auto mt-6 transition-all duration-2000 relative"
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
    </div>
  );
};

export default SimpleLogo;
