
import React, { useEffect, useState } from "react";

interface BackgroundElementsProps {
  mousePosition?: { x: number, y: number };
}

const BackgroundElements: React.FC<BackgroundElementsProps> = ({ mousePosition = { x: 0.5, y: 0.5 } }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoverIntensity, setHoverIntensity] = useState(0);
  
  // Effect to handle parallax effect on scroll and mouse movement
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position * 0.05); // Subtle movement factor
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Calculate hover intensity based on mouse position
  useEffect(() => {
    // Center-based intensity calculation
    const distX = mousePosition.x - 0.5;
    const distY = mousePosition.y - 0.5;
    const distance = Math.sqrt(distX * distX + distY * distY);
    const maxDistance = Math.sqrt(0.5 * 0.5 + 0.5 * 0.5);
    const normalizedDistance = Math.min(1, distance / maxDistance);
    
    // Closer to center = higher intensity
    const intensity = 1 - normalizedDistance;
    setHoverIntensity(intensity * 0.5); // Scale down for subtlety
  }, [mousePosition]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Ambient gradients and orbital cells with parallax effect and mouse reactivity */}
      <div 
        className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-gradient-radial from-beautyagent-violet-titanium-glow to-transparent opacity-15 rounded-full filter blur-3xl animate-float parallax-layer"
        style={{ 
          transform: `translateY(${scrollPosition * 0.3}px) translateX(${(mousePosition.x - 0.5) * -20}px) translateY(${(mousePosition.y - 0.5) * -20}px)`,
          opacity: 0.15 + hoverIntensity * 0.1
        }}
      ></div>
      
      <div 
        className="absolute right-[-10%] top-[15%] w-[40vw] h-[40vw] bg-gradient-radial from-beautyagent-rose-quartz-glow to-transparent opacity-15 rounded-full filter blur-3xl animate-float-slow"
        style={{ 
          transform: `translateY(${scrollPosition * 0.6}px) translateX(${(mousePosition.x - 0.5) * -15}px) translateY(${(mousePosition.y - 0.5) * -15}px)`,
          opacity: 0.15 + hoverIntensity * 0.08
        }}
      ></div>
      
      <div 
        className="absolute left-[-5%] bottom-[10%] w-[35vw] h-[35vw] bg-gradient-radial from-beautyagent-cosmic-peach-glow to-transparent opacity-10 rounded-full filter blur-3xl animate-float-subtle"
        style={{ 
          transform: `translateY(${scrollPosition * 0.4}px) translateX(${(mousePosition.x - 0.5) * -25}px) translateY(${(mousePosition.y - 0.5) * -25}px)`,
          opacity: 0.10 + hoverIntensity * 0.12
        }}
      ></div>
      
      {/* Light refraction patterns with enhanced reactivity */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => {
          const size = 5 + Math.random() * 20 + (hoverIntensity * 10);
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const baseOpacity = 0.05 + Math.random() * 0.08;
          const dynamicOpacity = baseOpacity + (hoverIntensity * 0.1);
          const duration = 50 + Math.random() * 40;
          const blur = 10 + Math.random() * 20;
          
          // Calculate distance from mouse for proximity effect
          const dx = (posX / 100) - mousePosition.x;
          const dy = (posY / 100) - mousePosition.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const proximity = 1 - Math.min(1, dist / 0.5); // 0 = far, 1 = close
          
          return (
            <div
              key={`refraction-${i}`}
              className="absolute rounded-full animate-pulse-slow"
              style={{
                width: `${size + proximity * 5}vw`,
                height: `${size + proximity * 5}vw`,
                left: `${posX}%`,
                top: `${posY}%`,
                background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
                opacity: dynamicOpacity,
                filter: `blur(${blur}px)`,
                animationDuration: `${duration}s`,
                transform: `translateY(${scrollPosition * (0.2 + Math.random() * 0.3)}px) scale(${1 + proximity * 0.15})`,
                transition: 'width 1.5s ease-out, height 1.5s ease-out, opacity 1.5s ease-out, transform 1.5s ease-out',
              }}
            />
          );
        })}
      </div>
      
      {/* Subtle orbital cells with parallax effect and enhanced reactivity */}
      <div 
        className="absolute w-3 h-3 rounded-full bg-white opacity-25 top-1/3 left-1/4 animate-cellular-drift"
        style={{ 
          transform: `translateY(${scrollPosition * -0.2}px) translateX(${(mousePosition.x - 0.5) * -40}px) translateY(${(mousePosition.y - 0.5) * -40}px)`,
          opacity: 0.25 + hoverIntensity * 0.15
        }}
      ></div>
      
      <div 
        className="absolute w-2 h-2 rounded-full bg-white opacity-15 top-1/2 right-1/3 animate-cellular-drift-slow"
        style={{ 
          transform: `translateY(${scrollPosition * -0.3}px) translateX(${(mousePosition.x - 0.5) * -30}px) translateY(${(mousePosition.y - 0.5) * -30}px)`,
          opacity: 0.15 + hoverIntensity * 0.1
        }}
      ></div>
      
      <div 
        className="absolute w-4 h-4 rounded-full bg-white opacity-10 bottom-1/4 left-1/3 animate-cellular-drift-fast"
        style={{ 
          transform: `translateY(${scrollPosition * -0.15}px) translateX(${(mousePosition.x - 0.5) * -35}px) translateY(${(mousePosition.y - 0.5) * -35}px)`,
          opacity: 0.10 + hoverIntensity * 0.12
        }}
      ></div>
      
      <div 
        className="absolute w-1 h-1 rounded-full bg-white opacity-20 top-2/3 right-1/4 animate-cellular-drift"
        style={{ 
          transform: `translateY(${scrollPosition * -0.25}px) translateX(${(mousePosition.x - 0.5) * -25}px) translateY(${(mousePosition.y - 0.5) * -25}px)`,
          opacity: 0.20 + hoverIntensity * 0.08
        }}
      ></div>
      
      {/* Ethereal light rays with enhanced reactivity */}
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i / 5) * 2 * Math.PI;
        const baseLength = 30 + Math.random() * 20;
        const dynamicLength = baseLength + (hoverIntensity * 15);
        const width = 50 + Math.random() * 100;
        const posX = 50 + Math.cos(angle) * 30;
        const posY = 50 + Math.sin(angle) * 30;
        const baseOpacity = 0.03 + Math.random() * 0.05;
        const dynamicOpacity = baseOpacity + (hoverIntensity * 0.07);
        
        return (
          <div
            key={`ray-${i}`}
            className="absolute bg-gradient-to-t from-white via-white to-transparent animate-light-ray"
            style={{
              width: `${width}px`,
              height: `${dynamicLength}vh`,
              left: `${posX}%`,
              top: `${posY}%`,
              opacity: dynamicOpacity,
              filter: 'blur(20px)',
              transform: `rotate(${angle + Math.PI/2}rad) translateY(${scrollPosition * 0.1}px)`,
              transition: 'height 1.5s ease-out, opacity 1.5s ease-out',
            }}
          ></div>
        );
      })}
      
      {/* New: Dynamic membrane effect that subtly responds to mouse movement */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-white/2 to-transparent animate-pulse-very-slow"
        style={{ 
          backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
          backgroundSize: '200% 200%',
          opacity: 0.05 + hoverIntensity * 0.03,
          transition: 'background-position 1s ease-out, opacity 1s ease-out',
        }}
      ></div>
      
      {/* New: Subtle caustic light patterns that follow mouse movement */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.07) 0%, transparent 40%)`,
          opacity: hoverIntensity * 0.3,
          filter: 'blur(40px)',
          transition: 'background 1.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 1.5s ease-out',
        }}
      ></div>
      
      {/* Atmospheric depth layer - subtle frosted glass effect */}
      <div 
        className="absolute inset-0 backdrop-blur-[1px] bg-beautyagent-plasma-white/5 animate-pulse-very-slow" 
        style={{ animationDuration: '30s' }}
      ></div>
    </div>
  );
};

export default BackgroundElements;
