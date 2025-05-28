
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
        className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-wider"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: '500',
          color: 'var(--dermaagent-graphite-black)',
          letterSpacing: '0.12em',
          lineHeight: '1.1',
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
        }}
      >
        DERMAAGENT
      </h1>
      
      {/* Subtle underline */}
      <div 
        className="mx-auto mt-4 transition-all duration-1000"
        style={{
          width: isVisible ? '120px' : '0px',
          height: '1px',
          background: 'var(--dermaagent-light-gray)',
          opacity: 0.4,
        }}
      />
    </div>
  );
};

export default SimpleLogo;
