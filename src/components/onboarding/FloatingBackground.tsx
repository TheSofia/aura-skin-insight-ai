
import { useEffect, useState } from "react";

type FloatingElementProps = {
  animationState: {
    uiElements: boolean;
  };
};

const FloatingBackground = ({ animationState }: FloatingElementProps) => {
  // State for dynamic floating background elements with refined visibility and more sophisticated properties
  const [floatingElements, setFloatingElements] = useState(Array(32).fill(0).map(() => {  // Increased from 25 to 32 elements for more visual depth
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
    
    // Enhanced color assignment with improved visibility
    let color;
    let opacity;
    
    // Create more variation in opacity levels for layered depth perception
    const opacityRandom = Math.random();
    
    if (x < 20 || x > 80 || y < 20 || y > 80) {
      // Edge zones: refined whites and light grays
      color = Math.random() > 0.75 ? 'translucent-white' : 'dark-white';
      // Improved opacity range for edges - more visible
      opacity = opacityRandom * 0.25 + 0.40; // 0.40-0.65 range (increased)
    } else {
      // Central zone: primarily whites/grays with rare accent colors
      const colorRandom = Math.random();
      if (colorRandom > 0.85) { // 15% chance for accent colors in central area
        color = colorRandom > 0.92 ? 'accent' : (Math.random() > 0.5 ? 'deep-blue' : 'muted-violet');
        // Improved opacity for accent colors
        opacity = opacityRandom * 0.15 + 0.25; // 0.25-0.40 range (increased)
      } else {
        color = Math.random() > 0.6 ? 'translucent-white' : 'dark-white';
        // Improved opacity for whites/grays
        opacity = opacityRandom * 0.20 + 0.40; // 0.40-0.60 range (increased)
      }
    }
    
    // More varied sizes with emphasis on smaller elements
    const sizeRandom = Math.random();
    const size = sizeRandom * sizeRandom * 2.8 + 1.4; // Quadratic distribution favoring smaller cells, slightly larger overall
    
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
      hoverable: Math.random() > 0.65, // 35% of elements have hover interaction
      glow: Math.random() > 0.85 // 15% of elements have a subtle glow
    };
  }));

  // Effect for dynamic cellular movement - scientific lab-like motion with enhanced behavior
  useEffect(() => {
    if (!animationState.uiElements) return;
    
    // Update floating elements with subtle movements to simulate cellular drift
    const intervalId = setInterval(() => {
      setFloatingElements(prev => prev.map(el => {
        // Apply subtle drift to 60% of elements for a more gentle cellular motion
        if (Math.random() > 0.4) {
          return {
            ...el,
            // Apply refined position drift within a small range
            x: el.x + (Math.random() * 0.35 - 0.175), // Subtle drift amount
            y: el.y + (Math.random() * 0.35 - 0.175), // Subtle drift amount
            // Apply subtle opacity fluctuations to mimic cellular activity
            opacity: Math.max(0.2, Math.min(0.8, el.opacity + (Math.random() * 0.05 - 0.025)))
          };
        }
        return el;
      }));
    }, 2800); // Slower update interval for more scientific, less flashy movement
    
    return () => clearInterval(intervalId);
  }, [animationState.uiElements]);

  return (
    <>
      {animationState.uiElements && floatingElements.map((el, i) => {
        // Create more refined background colors based on position and color property
        let bgColorClass = '';
        let borderColorClass = '';
        let glowClass = el.glow ? 'glow-subtle' : '';
        
        // Apply different styling with refined color intensity and improved visibility
        if (el.color === 'translucent-white') {
          // Semi-transparent white with improved opacity
          bgColorClass = `bg-white/${Math.floor(el.opacity * 130)}`; // Multiplier increased for better visibility
          borderColorClass = ''; // No border for translucent elements
        } else if (el.color === 'dark-white') {
          // "Dark White" (Light Grey / Off-White) with slightly increased contrast
          bgColorClass = 'bg-[#F1F1F1]'; // Lighter shade for more subtle visibility
          borderColorClass = 'border border-[#E8E8E8]/50'; // Increased from /40 to /50
        } else if (el.color === 'accent') {
          // Improved color intensity for accent elements
          bgColorClass = 'bg-beautyagent-accent/20'; // Increased from /15 to /20
          borderColorClass = 'border border-beautyagent-accent/25'; // Increased from /20 to /25
        } else if (el.color === 'deep-blue') {
          bgColorClass = 'bg-beautyagent-deep-blue/15'; // Increased from /12 to /15
          borderColorClass = 'border border-beautyagent-deep-blue/22'; // Increased from /18 to /22
        } else if (el.color === 'muted-violet') {
          // New muted violet option with improved visibility
          bgColorClass = 'bg-beautyagent-muted-violet/15'; // Increased from /12 to /15
          borderColorClass = 'border border-beautyagent-muted-violet/22'; // Increased from /18 to /22
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
            className={`absolute rounded-full transition-all duration-1800 ${bgColorClass} ${borderColorClass} ${animationClass} ${hoverClass} ${glowClass}`}
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
              backdropFilter: el.color === 'translucent-white' ? 'blur(1px)' : 'none',
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
