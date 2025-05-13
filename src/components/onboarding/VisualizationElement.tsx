
import React from "react";

const VisualizationElement = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto flex justify-center opacity-0 animate-fade-in" 
         style={{ animationDelay: '2.4s', animationFillMode: 'forwards' }}>
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Abstract, morphing visualization with more vibrant colors but still sophisticated */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Primary morphing shape with more vibrant gradient including burnt orange */}
          <div className="morphing-shape w-56 h-56 md:w-72 md:h-72 animate-morph bg-gradient-to-tr from-beautyagent-accent/45 via-burnt-orange/40 to-beautyagent-deep-blue/42 border border-white/20 backdrop-blur-sm glow-soft"></div>
          
          {/* Overlapping circular elements with refined proportions and enhanced visibility */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-56 md:h-56 rounded-full border border-beautyagent-accent/45 animate-rotate-slow" style={{ animationDuration: '22s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full border border-beautyagent-deep-blue/50 animate-rotate-slow" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 rounded-full border border-burnt-orange/45 animate-rotate-slow" style={{ animationDuration: '15s' }}></div>
          
          {/* Expanded set of floating particles with improved visibility and burnt orange accents */}
          {Array(24).fill(0).map((_, i) => {  
            // More sophisticated color assignment with improved visibility and burnt orange accents
            const particleColor = i % 6 === 0 
              ? "bg-beautyagent-accent/40"
              : i % 6 === 1 
                ? "bg-beautyagent-deep-blue/38"
                : i % 6 === 2
                  ? "bg-burnt-orange/42"
                  : i % 6 === 3
                    ? "bg-white/40"
                    : i % 6 === 4
                      ? "bg-beautyagent-light-grey/35"
                      : "bg-beautyagent-muted-violet/32";
            
            // Enhanced hover effect with layered translucency
            const hoverColor = i % 6 === 0 
              ? "hover:bg-beautyagent-accent/60" 
              : i % 6 === 1 
                ? "hover:bg-beautyagent-deep-blue/55" 
                : i % 6 === 2
                  ? "hover:bg-burnt-orange/60"
                  : i % 6 === 3
                    ? "hover:bg-white/55"
                    : i % 6 === 4
                      ? "hover:bg-beautyagent-light-grey/50"
                      : "hover:bg-beautyagent-muted-violet/50";
                  
            // Create varying particle sizes to enhance layered effect
            const sizeVariant = i % 4 === 0 
              ? "w-2 h-2 md:w-2.5 md:h-2.5" 
              : i % 4 === 1
                ? "w-1.5 h-1.5 md:w-2 md:h-2"
                : i % 4 === 2
                  ? "w-3 h-3 md:w-3.5 md:h-3.5"
                  : "w-1 h-1 md:w-1.5 md:h-1.5";
                
            // Create varied animation durations
            const durationBase = 3.5 + (i % 5) * 0.7;
            
            // Create varied positions with better distribution
            const posX = 15 + (i * 3) + (i % 3 === 0 ? 5 : i % 3 === 1 ? -8 : 0);
            const posY = 10 + (i * 3) + (i % 4 === 0 ? 8 : i % 4 === 1 ? -5 : i % 4 === 2 ? 15 : 0);
            
            // Vary opacity based on size for layered depth effect - increased for better visibility
            const opacityValue = i % 4 === 2 ? 0.88 : (0.60 + (i % 5) * 0.08);
                
            return (
              <div 
                key={i}
                className={`absolute ${sizeVariant} rounded-full ${particleColor} ${hoverColor} ${i % 3 === 0 ? 'animate-cellular-motion' : 'animate-float-enhanced'} transition-all duration-700`}
                style={{
                  left: `${posX}%`,
                  top: `${posY}%`,
                  animationDuration: `${durationBase}s`,
                  animationDelay: `${i * 0.3}s`,
                  opacity: opacityValue,
                  zIndex: i % 4 === 2 ? 5 : 1,
                  boxShadow: i % 6 === 2 ? '0 0 8px rgba(194, 65, 12, 0.25)' : 
                             i % 6 === 0 ? '0 0 8px rgba(249, 115, 22, 0.25)' : 'none'
                }}
              ></div>
            );
          })}

          {/* More vibrant central glowing element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-to-r from-beautyagent-accent/70 via-burnt-orange/65 to-beautyagent-deep-blue/60 shadow-md z-10 animate-throb glow-accent"></div>
        </div>
      </div>
    </div>
  );
};

export default VisualizationElement;
