
import { useEffect, useState } from "react";

type FloatingElementProps = {
  animationState: {
    uiElements: boolean;
  };
};

const FloatingBackground = ({ animationState }: FloatingElementProps) => {
  // State for dynamic floating background elements with refined visibility and more sophisticated properties
  const [floatingElements, setFloatingElements] = useState(Array(25).fill(0).map(() => {  // Increased from 15 to 25 elements for more visual depth
    // Generate position with a broader distribution across the entire screen
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    
    // Create a more natural distribution pattern with subtle clusters and zones
    // More elements around the edges but some in central areas too
    if (Math.random() > 0.6) {
      if (Math.random() > 0.5) {
        // Side zones (left/right)
        x = Math.random() > 0.5 ? Math.random() * 20 : 80 + Math.random() * 20;
        y = Math.random() * 100;
      } else {
        // Top/bottom zones
        x = Math.random() * 100;
        y = Math.random() > 0.5 ? Math.random() * 20 : 80 + Math.random() * 20;
      }
    } else {
      // Center zone - more sparse distribution
      x = 20 + Math.random() * 60; // 20-80% of screen width
      y = 20 + Math.random() * 60; // 20-80% of screen height
    }
    
    // Enhanced color assignment with extremely refined visibility - more varied opacities
    let color;
    let opacity;
    
    // Create more variation in opacity levels for layered depth perception
    const opacityRandom = Math.random();
    
    if (x < 20 || x > 80 || y < 20 || y > 80) {
      // Edge zones: refined whites and light grays
      color = Math.random() > 0.75 ? 'translucent-white' : 'dark-white';
      // Extremely varied opacity range for edges - some barely visible
      opacity = opacityRandom * 0.2 + 0.25; // 0.25-0.45 range
    } else {
      // Central zone: primarily whites/grays with rare accent colors
      const colorRandom = Math.random();
      if (colorRandom > 0.92) { // Only 8% chance for accent colors in central area
        color = colorRandom > 0.96 ? 'accent' : (Math.random() > 0.5 ? 'deep-blue' : 'muted-violet');
        // Very subtle opacity for accent colors but maintaining form visibility
        opacity = opacityRandom * 0.08 + 0.12; // 0.12-0.20 range - extremely subtle
      } else {
        color = Math.random() > 0.6 ? 'translucent-white' : 'dark-white';
        // Very subtle whites/grays for better layered texture
        opacity = opacityRandom * 0.15 + 0.3; // 0.30-0.45 range
      }
    }
    
    // More varied sizes with emphasis on smaller elements
    const sizeRandom = Math.random();
    const size = sizeRandom * sizeRandom * 2.5 + 1.2; // Quadratic distribution favoring smaller cells
    
    return {
      x,
      y,
      size,
      speed: Math.random() * 6 + 8, // Enhanced floating speed range - slower overall for more elegance
      delay: Math.random() * 4, // Increased delay variance for more natural feels
      opacity,
      color,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() * 3 - 1) * 0.3, // Refined rotation speed - slower
      scale: Math.random() * 0.12 + 0.93, // Scale variation for dynamic feel
      // Enhanced dynamic properties for cellular movement
      drift: Math.random() * 5 + 2, // How far it drifts horizontally
      driftSpeed: Math.random() * 8 + 18, // How fast it drifts - slower
      pulseSpeed: Math.random() * 4 + 4, // Speed of pulsing animation - slower
      animationType: Math.random() > 0.3 ? 'cellular' : 'float', // More cellular movement (70%)
      hoverable: Math.random() > 0.65 // 35% of elements have hover interaction
    };
  }));

  // Effect for dynamic cellular movement - scientific lab-like motion with enhanced behavior
  useEffect(() => {
    if (!animationState.uiElements) return;
    
    // Update floating elements with subtle movements to simulate cellular drift
    const intervalId = setInterval(() => {
      setFloatingElements(prev => prev.map(el => {
        // Apply subtle drift to 50% of elements for a more gentle cellular motion
        if (Math.random() > 0.5) {
          return {
            ...el,
            // Apply refined position drift within a small range
            x: el.x + (Math.random() * 0.3 - 0.15), // Reduced drift amount for subtlety
            y: el.y + (Math.random() * 0.3 - 0.15), // Reduced drift amount for subtlety
            // Apply subtle opacity fluctuations to mimic cellular activity
            opacity: Math.max(0.12, Math.min(0.65, el.opacity + (Math.random() * 0.04 - 0.02)))
          };
        }
        return el;
      }));
    }, 3200); // Slower update interval for more scientific, less flashy movement
    
    return () => clearInterval(intervalId);
  }, [animationState.uiElements]);

  return (
    <>
      {animationState.uiElements && floatingElements.map((el, i) => {
        // Create more refined background colors based on position and color property
        let bgColorClass = '';
        let borderColorClass = '';
        
        // Apply different styling with refined color intensity
        if (el.color === 'translucent-white') {
          // Semi-transparent white with refined opacity
          bgColorClass = `bg-white/${Math.floor(el.opacity * 100)}`;
          borderColorClass = ''; // No border for translucent elements
        } else if (el.color === 'dark-white') {
          // "Dark White" (Light Grey / Off-White) with slightly increased contrast
          bgColorClass = 'bg-[#F1F1F1]'; // Lighter shade for more subtle visibility
          borderColorClass = 'border border-[#E8E8E8]/30'; // Very subtle border
        } else if (el.color === 'accent') {
          // Extremely refined color intensity for accent elements
          bgColorClass = 'bg-aurascan-accent/10'; // Extremely subtle
          borderColorClass = 'border border-aurascan-accent/15'; // Extremely subtle
        } else if (el.color === 'deep-blue') {
          bgColorClass = 'bg-aurascan-deep-blue/8'; // Extremely subtle
          borderColorClass = 'border border-aurascan-deep-blue/12'; // Extremely subtle
        } else if (el.color === 'muted-violet') {
          // New muted violet option
          bgColorClass = 'bg-[#7E69AB]/8'; // Extremely subtle
          borderColorClass = 'border border-[#7E69AB]/12'; // Extremely subtle
        }

        // Determine animation type for more sophisticated laboratory-like movement
        let animationClass = '';
        if (el.animationType === 'cellular') {
          animationClass = 'animate-cellular-motion';
        } else {
          animationClass = 'animate-float-enhanced';
        }
        
        // Add hover interaction for some elements - enhanced hover effect
        const hoverClass = el.hoverable ? 'hover:scale-110 hover:opacity-90 transition-all duration-500 cursor-pointer' : '';
            
        return (
          <div 
            key={i}
            className={`absolute rounded-full transition-all duration-1800 ${bgColorClass} ${borderColorClass} ${animationClass} ${hoverClass}`}
            style={{
              width: `${el.size}rem`,
              height: `${el.size}rem`,
              left: `${el.x}%`,
              top: `${el.y}%`,
              opacity: el.opacity,
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.speed}s`,
              transform: 'scale(0) rotate(0deg)',
              transition: 'transform 1.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1.8s ease-in-out, scale 0.5s ease-out',
            }}
            onAnimationStart={(e) => {
              // Start scaling and rotating animation with enhanced scientific dynamics
              setTimeout(() => {
                e.currentTarget.style.transform = `scale(${el.scale}) rotate(${el.rotation}deg)`;
                
                // Add additional subtle animation based on element type
                if (el.animationType === 'cellular') {
                  e.currentTarget.classList.add('animate-pulse-cellular');
                  e.currentTarget.style.animationDuration = `${el.pulseSpeed}s`;
                }
              }, 120 * i);
            }}
          />
        );
      })}
    </>
  );
};

export default FloatingBackground;
