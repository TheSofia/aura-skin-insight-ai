
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
        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest uppercase"
        style={{
          fontFamily: 'var(--beautyagent-primary-font)',
          fontWeight: 'var(--beautyagent-logo-weight)',
          color: 'var(--beautyagent-graphite-black)',
          letterSpacing: 'var(--beautyagent-letter-spacing-logo)',
          lineHeight: '1.1',
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
        }}
      >
        BEAUTYAGENT
      </h1>
      
      {/* Notebook-style underline */}
      <div 
        className="mx-auto mt-4 transition-all duration-1000"
        style={{
          width: isVisible ? '140px' : '0px',
          height: '1px',
          background: 'var(--beautyagent-light-gray)',
          opacity: 0.6,
        }}
      />
    </div>
  );
};

export default SimpleLogo;
