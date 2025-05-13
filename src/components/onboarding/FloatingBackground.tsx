
import { useEffect, useState } from "react";

type FloatingElementProps = {
  animationState: {
    uiElements: boolean;
  };
};

const FloatingBackground = ({ animationState }: FloatingElementProps) => {
  // State for dynamic floating background elements with refined visibility and more sophisticated properties
  const [floatingElements, setFloatingElements] = useState(Array(15).fill(0).map(() => {  // Increased from 12 to 15 elements
    // Generate position with a bias toward the center (avoiding sides)
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    
    // Shift most elements toward the center zone (25-75% of screen width)
    if (Math.random() > 0.3) {
      x = Math.random() * 50 + 25; // 25-75% of screen width
      y = Math.random() * 50 + 25; // 25-75% of screen height
    }
    
    // Dynamic color assignment with refined visibility - more distinct forms, subtler colors
    let color;
    let opacity;
    
    if (x < 25 || x > 75 || y < 25 || y > 75) {
      // Edge zones: refined whites and light grays
      color = Math.random() > 0.6 ? 'translucent-white' : 'dark-white';
      // Subtle opacity range for edges but still visible
      opacity = Math.random() * 0.15 + 0.35; // 0.35-0.5 range
    } else {
      // Central zone: allow some accent colors mixed with translucent whites
      const colorRandom = Math.random();
      if (colorRandom > 0.85) { // Only 15% chance for accent colors in central area
        color = colorRandom > 0.92 ? 'accent' : (Math.random() > 0.5 ? 'deep-blue' : 'deepOrange');
        // Subtle opacity for accent colors but maintaining form visibility
        opacity = Math.random() * 0.1 + 0.18; // 0.18-0.28 range
      } else {
        color = Math.random() > 0.5 ? 'translucent-white' : 'dark-white';
        // Slightly more visible whites/grays for better texture
        opacity = Math.random() * 0.18 + 0.42; // 0.42-0.6 range
      }
    }
    
    return {
      x,
      y,
      size: Math.random() * 2.8 + 1.6, // Slightly enhanced size for better visibility
      speed: Math.random() * 5 + 4, // Enhanced floating speed for more cellular movement
      delay: Math.random() * 2,
      opacity,
      color,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() * 3 - 1) * 0.5, // Refined rotation speed
      scale: Math.random() * 0.15 + 0.92, // Scale variation for dynamic feel
      // Enhanced dynamic properties for cellular movement
      drift: Math.random() * 6 + 2, // How far it drifts horizontally
      driftSpeed: Math.random() * 8 + 15, // How fast it drifts
      pulseSpeed: Math.random() * 4 + 3, // Speed of pulsing animation
      animationType: Math.random() > 0.5 ? 'cellular' : 'float', // More cellular movement (50%)
      hoverable: Math.random() > 0.7 // 30% of elements have hover interaction
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
            x: el.x + (Math.random() * 0.35 - 0.175),
            y: el.y + (Math.random() * 0.35 - 0.175),
            // Apply subtle opacity fluctuations to mimic cellular activity
            opacity: Math.max(0.15, Math.min(0.65, el.opacity + (Math.random() * 0.05 - 0.025)))
          };
        }
        return el;
      }));
    }, 2800); // Slightly slower update interval for more scientific, less flashy movement
    
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
          borderColorClass = 'border border-[#E8E8E8]/35'; // Very subtle border
        } else if (el.color === 'accent') {
          // Extremely refined color intensity for accent elements
          bgColorClass = 'bg-aurascan-accent/12'; // Refined from 10%
          borderColorClass = 'border border-aurascan-accent/18'; // Refined from 15%
        } else if (el.color === 'deep-blue') {
          bgColorClass = 'bg-aurascan-deep-blue/10'; // Refined from 8%
          borderColorClass = 'border border-aurascan-deep-blue/15'; // Refined from 12%
        } else {
          // dark-orange with refined intensity
          bgColorClass = 'bg-aurascan-dark-orange/12'; // Refined from 10%
          borderColorClass = 'border border-aurascan-dark-orange/16'; // Refined from 12%
        }

        // Determine animation type for more sophisticated laboratory-like movement
        let animationClass = '';
        if (el.animationType === 'cellular') {
          animationClass = 'animate-cellular-motion';
        } else {
          animationClass = 'animate-float-enhanced';
        }
        
        // Add hover interaction for some elements
        const hoverClass = el.hoverable ? 'hover:scale-110 hover:opacity-80 cursor-pointer' : '';
            
        return (
          <div 
            key={i}
            className={`absolute rounded-full transition-all duration-1500 ${bgColorClass} ${borderColorClass} ${animationClass} ${hoverClass}`}
            style={{
              width: `${el.size}rem`,
              height: `${el.size}rem`,
              left: `${el.x}%`,
              top: `${el.y}%`,
              opacity: el.opacity,
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.speed}s`,
              transform: 'scale(0) rotate(0deg)',
              transition: 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1.5s ease-in-out, scale 0.3s ease-out',
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
              }, 100 * i);
            }}
          />
        );
      })}
    </>
  );
};

export default FloatingBackground;
