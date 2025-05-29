
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
        className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wider relative"
        style={{
          fontFamily: 'var(--dermaagent-primary-font)',
          fontWeight: 'var(--dermaagent-logo-weight)',
          color: 'var(--dermaagent-graphite-black)',
          letterSpacing: 'var(--dermaagent-letter-spacing-logo)',
          lineHeight: '1.1',
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
        }}
      >
        {/* Refined dermaAgent logotype with elegant casing and enhanced letterforms */}
        <span className="relative inline-block">
          {/* "derma" in lowercase with subtle enhancements */}
          <span className="relative">
            d
            <span 
              className="absolute top-1/2 left-0 w-0.5 h-1/4 bg-current opacity-20"
              style={{ transform: 'translateY(-50%) translateX(-1px)' }}
            />
          </span>
          <span className="relative">e</span>
          <span className="relative">r</span>
          <span className="relative">m</span>
          {/* Enhanced "a" with refined crossbar */}
          <span className="relative mx-0.5">
            <span className="relative">
              a
              <span 
                className="absolute top-1/2 left-1/2 w-2/3 h-0.5 bg-current opacity-40"
                style={{ 
                  transform: 'translateX(-50%) translateY(-15%)',
                  background: 'linear-gradient(90deg, transparent 0%, currentColor 25%, currentColor 75%, transparent 100%)'
                }}
              />
            </span>
          </span>
          {/* "Agent" with capital A and subtle refinements */}
          <span className="relative">
            A
            <span 
              className="absolute top-1/2 left-1/2 w-3/4 h-0.5 bg-current opacity-50"
              style={{ 
                transform: 'translateX(-50%) translateY(-10%)',
                background: 'linear-gradient(90deg, transparent 0%, currentColor 20%, currentColor 80%, transparent 100%)'
              }}
            />
          </span>
          <span className="relative">g</span>
          <span className="relative">e</span>
          <span className="relative">n</span>
          <span className="relative">t</span>
        </span>
      </h1>
      
      {/* Refined underline with elegant gradient effect */}
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
      >
        {/* Subtle elegant enhancement */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, 
              rgba(255, 255, 255, 0.08) 0%, 
              transparent 50%, 
              rgba(0, 0, 0, 0.03) 100%)`,
            borderRadius: '0.5px',
          }}
        />
      </div>
      
      {/* Optional subtle margin line - minimal notebook integration */}
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
