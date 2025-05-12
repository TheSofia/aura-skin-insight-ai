
import React from "react";

const VisualizationElement = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto flex justify-center opacity-0 animate-fade-in" 
         style={{ animationDelay: '2.4s', animationFillMode: 'forwards' }}>
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Abstract, morphing visualization with enhanced animation and color */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="morphing-shape w-48 h-48 md:w-64 md:h-64 opacity-90 animate-morph bg-gradient-to-tr from-aurascan-accent/30 via-aurascan-dark-orange/20 to-aurascan-deep-green/25"></div>
          
          {/* Enhanced overlapping circular elements for depth with enhanced rotation and colors */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full border-2 border-aurascan-accent/40 animate-rotate-slow" style={{ animationDuration: '18s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-aurascan-deep-green/50 animate-rotate-slow" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-aurascan-dark-orange/60 animate-rotate-slow" style={{ animationDuration: '8s' }}></div>
          
          {/* Enhanced floating particles with better transitions and varied colors */}
          {Array(12).fill(0).map((_, i) => {
            // Alternate between accent, deep green and dark orange for particles
            const particleColor = i % 3 === 0 
              ? "bg-aurascan-accent" 
              : i % 3 === 1 
                ? "bg-aurascan-deep-green" 
                : "bg-aurascan-dark-orange";
            
            const hoverColor = i % 3 === 0 
              ? "hover:bg-aurascan-accent" 
              : i % 3 === 1 
                ? "hover:bg-aurascan-deep-green" 
                : "hover:bg-aurascan-dark-orange";
                
            return (
              <div 
                key={i}
                className={`absolute w-2 h-2 md:w-3 md:h-3 rounded-full ${particleColor} ${hoverColor} animate-float transition-all duration-300 hover:scale-150`}
                style={{
                  left: `${25 + (i * 5)}%`,
                  top: `${15 + (i * 7)}%`,
                  animationDuration: `${2.5 + i * 0.4}s`,
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0.8 + (i % 5) * 0.05 // Enhanced opacity
                }}
              ></div>
            );
          })}

          {/* Enhanced glowing center point with vibrant animation and color */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-aurascan-accent via-aurascan-dark-orange to-aurascan-deep-green shadow-glow z-10 animate-throb"></div>
        </div>
      </div>
    </div>
  );
};

export default VisualizationElement;
