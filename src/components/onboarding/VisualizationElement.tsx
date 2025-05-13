
import React from "react";

const VisualizationElement = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto flex justify-center opacity-0 animate-fade-in" 
         style={{ animationDelay: '2.4s', animationFillMode: 'forwards' }}>
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Abstract, morphing visualization with softened colors and refined animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="morphing-shape w-48 h-48 md:w-64 md:h-64 opacity-70 animate-morph bg-gradient-to-tr from-aurascan-accent/15 via-aurascan-dark-orange/10 to-aurascan-deep-green/12"></div>
          
          {/* Overlapping circular elements with reduced color intensity */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full border border-aurascan-accent/20 animate-rotate-slow" style={{ animationDuration: '22s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full border border-aurascan-deep-green/25 animate-rotate-slow" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full border border-aurascan-dark-orange/20 animate-rotate-slow" style={{ animationDuration: '15s' }}></div>
          
          {/* Floating particles with significantly reduced color intensity and more ethereal feel */}
          {Array(10).fill(0).map((_, i) => {
            // More subtle, translucent color assignment with reduced intensity
            const particleColor = i % 3 === 0 
              ? "bg-aurascan-accent/20" 
              : i % 3 === 1 
                ? "bg-aurascan-deep-green/15" 
                : "bg-aurascan-dark-orange/15";
            
            // Reduced hover effect intensity
            const hoverColor = i % 3 === 0 
              ? "hover:bg-aurascan-accent/30" 
              : i % 3 === 1 
                ? "hover:bg-aurascan-deep-green/25" 
                : "hover:bg-aurascan-dark-orange/25";
                
            return (
              <div 
                key={i}
                className={`absolute w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${particleColor} ${hoverColor} animate-cellular-motion transition-all duration-500`}
                style={{
                  left: `${25 + (i * 5)}%`,
                  top: `${15 + (i * 7)}%`,
                  animationDuration: `${3.5 + i * 0.8}s`,
                  animationDelay: `${i * 0.4}s`,
                  opacity: 0.5 + (i % 3) * 0.1 // More subtle opacity range
                }}
              ></div>
            );
          })}

          {/* Central glowing element with reduced intensity but still maintaining visual focus */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-aurascan-accent/40 via-aurascan-dark-orange/30 to-aurascan-deep-green/35 shadow-sm z-10 animate-throb"></div>
        </div>
      </div>
    </div>
  );
};

export default VisualizationElement;
