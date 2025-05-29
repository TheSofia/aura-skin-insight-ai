
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
        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest uppercase relative"
        style={{
          fontFamily: 'var(--beautyagent-primary-font)',
          fontWeight: 'var(--beautyagent-logo-weight)',
          color: 'var(--beautyagent-graphite-black)',
          letterSpacing: 'var(--beautyagent-letter-spacing-logo)',
          lineHeight: '1.1',
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
        }}
      >
        {/* Custom letterform adjustments for distinctiveness */}
        <span className="relative inline-block">
          {/* B with subtle enhancement */}
          <span className="relative">
            B
            <span 
              className="absolute top-1/2 left-0 w-0.5 h-1/3 bg-current opacity-30"
              style={{ transform: 'translateY(-50%) translateX(-2px)' }}
            />
          </span>
          EAUTY
          {/* A with custom crossbar styling */}
          <span className="relative mx-1">
            <span className="relative">
              A
              <span 
                className="absolute top-1/2 left-1/2 w-3/4 h-0.5 bg-current opacity-60"
                style={{ 
                  transform: 'translateX(-50%) translateY(-10%)',
                  background: 'linear-gradient(90deg, transparent 0%, currentColor 20%, currentColor 80%, transparent 100%)'
                }}
              />
            </span>
          </span>
          {/* G with subtle enhancement */}
          <span className="relative">
            G
            <span 
              className="absolute top-1/2 right-1/4 w-1/4 h-0.5 bg-current opacity-50"
              style={{ transform: 'translateY(-20%)' }}
            />
          </span>
          ENT
        </span>
      </h1>
      
      {/* Enhanced notebook-style underline with gradient effect */}
      <div 
        className="mx-auto mt-6 transition-all duration-1500 relative"
        style={{
          width: isVisible ? '160px' : '0px',
          height: '2px',
          background: `linear-gradient(90deg, 
            transparent 0%, 
            var(--beautyagent-light-gray) 10%, 
            var(--beautyagent-charcoal-gray) 50%, 
            var(--beautyagent-light-gray) 90%, 
            transparent 100%)`,
          opacity: 0.8,
        }}
      >
        {/* Subtle embossed effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, 
              rgba(255, 255, 255, 0.1) 0%, 
              transparent 50%, 
              rgba(0, 0, 0, 0.05) 100%)`,
            borderRadius: '1px',
          }}
        />
      </div>
      
      {/* Optional subtle brand mark - minimal notebook margin line integration */}
      <div 
        className={`absolute left-0 top-0 bottom-0 transition-all duration-2000 ${
          isVisible ? 'opacity-20' : 'opacity-0'
        }`}
        style={{
          width: '1px',
          background: 'var(--beautyagent-light-gray)',
          marginLeft: '10%',
        }}
      />
    </div>
  );
};

export default SimpleLogo;
