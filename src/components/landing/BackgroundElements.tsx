
import React, { useEffect, useState } from "react";

const BackgroundElements = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Effect to handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position * 0.05); // Subtle movement factor
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Ambient gradients and orbital cells with parallax effect */}
      <div 
        className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-gradient-radial from-beautyagent-violet-titanium-glow to-transparent opacity-15 rounded-full filter blur-3xl animate-float parallax-layer"
        style={{ transform: `translateY(${scrollPosition * 0.3}px)` }}
      ></div>
      
      <div 
        className="absolute right-[-10%] top-[15%] w-[40vw] h-[40vw] bg-gradient-radial from-beautyagent-rose-quartz-glow to-transparent opacity-15 rounded-full filter blur-3xl animate-float-slow"
        style={{ transform: `translateY(${scrollPosition * 0.6}px)` }}
      ></div>
      
      <div 
        className="absolute left-[-5%] bottom-[10%] w-[35vw] h-[35vw] bg-gradient-radial from-beautyagent-cosmic-peach-glow to-transparent opacity-10 rounded-full filter blur-3xl animate-float-subtle"
        style={{ transform: `translateY(${scrollPosition * 0.4}px)` }}
      ></div>
      
      {/* Light refraction patterns */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => {
          const size = 5 + Math.random() * 20;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const opacity = 0.05 + Math.random() * 0.08;
          const duration = 50 + Math.random() * 40;
          const blur = 10 + Math.random() * 20;
          
          return (
            <div
              key={`refraction-${i}`}
              className="absolute rounded-full animate-pulse-slow"
              style={{
                width: `${size}vw`,
                height: `${size}vw`,
                left: `${posX}%`,
                top: `${posY}%`,
                background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
                opacity,
                filter: `blur(${blur}px)`,
                animationDuration: `${duration}s`,
                transform: `translateY(${scrollPosition * (0.2 + Math.random() * 0.3)}px)`,
              }}
            />
          );
        })}
      </div>
      
      {/* Subtle orbital cells with parallax effect */}
      <div 
        className="absolute w-3 h-3 rounded-full bg-white opacity-25 top-1/3 left-1/4 animate-cellular-drift"
        style={{ transform: `translateY(${scrollPosition * -0.2}px)` }}
      ></div>
      
      <div 
        className="absolute w-2 h-2 rounded-full bg-white opacity-15 top-1/2 right-1/3 animate-cellular-drift-slow"
        style={{ transform: `translateY(${scrollPosition * -0.3}px)` }}
      ></div>
      
      <div 
        className="absolute w-4 h-4 rounded-full bg-white opacity-10 bottom-1/4 left-1/3 animate-cellular-drift-fast"
        style={{ transform: `translateY(${scrollPosition * -0.15}px)` }}
      ></div>
      
      <div 
        className="absolute w-1 h-1 rounded-full bg-white opacity-20 top-2/3 right-1/4 animate-cellular-drift"
        style={{ transform: `translateY(${scrollPosition * -0.25}px)` }}
      ></div>
      
      {/* Ethereal light rays */}
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i / 5) * 2 * Math.PI;
        const length = 30 + Math.random() * 20;
        const width = 50 + Math.random() * 100;
        const posX = 50 + Math.cos(angle) * 30;
        const posY = 50 + Math.sin(angle) * 30;
        const opacity = 0.03 + Math.random() * 0.05;
        
        return (
          <div
            key={`ray-${i}`}
            className="absolute bg-gradient-to-t from-white via-white to-transparent"
            style={{
              width: `${width}px`,
              height: `${length}vh`,
              left: `${posX}%`,
              top: `${posY}%`,
              opacity,
              filter: 'blur(20px)',
              transform: `rotate(${angle + Math.PI/2}rad) translateY(${scrollPosition * 0.1}px)`,
            }}
          ></div>
        );
      })}
      
      {/* Atmospheric depth layer - subtle frosted glass effect */}
      <div 
        className="absolute inset-0 backdrop-blur-[1px] bg-beautyagent-plasma-white/5 animate-pulse-very-slow" 
        style={{ animationDuration: '30s' }}
      ></div>
    </div>
  );
};

export default BackgroundElements;
