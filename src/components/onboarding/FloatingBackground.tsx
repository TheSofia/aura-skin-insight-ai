
import { useEffect, useState } from "react";

type FloatingElementProps = {
  animationState: {
    uiElements: boolean;
  };
};

const FloatingBackground = ({ animationState }: FloatingElementProps) => {
  // State for dynamic floating background elements with subtle visibility and dynamic properties
  const [floatingElements, setFloatingElements] = useState(Array(12).fill(0).map(() => {
    // Generate position with a bias toward the center (avoiding sides)
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    
    // Shift most elements toward the center zone (25-75% of screen width)
    if (Math.random() > 0.3) {
      x = Math.random() * 50 + 25; // 25-75% of screen width
      y = Math.random() * 50 + 25; // 25-75% of screen height
    }
    
    // Dynamic color assignment with more subtle visibility
    let color;
    let opacity;
    
    if (x < 25 || x > 75 || y < 25 || y > 75) {
      // Edge zones: only very subtle, translucent whites and light grays
      color = Math.random() > 0.5 ? 'translucent-white' : 'dark-white';
      // Subtle opacity range for edges
      opacity = Math.random() * 0.2 + 0.3; // 0.3-0.5 range
    } else {
      // Central zone: allow some accent colors mixed with translucent whites
      const colorRandom = Math.random();
      if (colorRandom > 0.85) { // Only 15% chance for accent colors in central area (reduced)
        color = colorRandom > 0.92 ? 'accent' : (Math.random() > 0.5 ? 'green' : 'deepOrange');
        // Very subtle opacity for accent colors
        opacity = Math.random() * 0.1 + 0.15; // 0.15-0.25 range (reduced)
      } else {
        color = Math.random() > 0.5 ? 'translucent-white' : 'dark-white';
        // Slightly more visible whites/grays for better texture
        opacity = Math.random() * 0.2 + 0.4; // 0.4-0.6 range
      }
    }
    
    return {
      x,
      y,
      size: Math.random() * 2.5 + 1.5, // Slightly reduced size for subtlety
      speed: Math.random() * 5 + 4, // Enhanced floating speed for more cellular movement
      delay: Math.random() * 2,
      opacity,
      color,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() * 3 - 1) * 0.5, // Reduced rotation speed for subtlety
      scale: Math.random() * 0.15 + 0.9, // Scale variation for dynamic feel
      // Dynamic properties for cellular movement
      drift: Math.random() * 6 + 2, // How far it drifts horizontally
      driftSpeed: Math.random() * 8 + 15, // How fast it drifts (slower, more scientific)
      pulseSpeed: Math.random() * 4 + 3, // Speed of pulsing animation (slower)
      animationType: Math.random() > 0.6 ? 'cellular' : 'float' // More cellular movement (60%)
    };
  }));

  // Effect for dynamic cellular movement - more subtle, scientific lab-like motion
  useEffect(() => {
    if (!animationState.uiElements) return;
    
    // Update floating elements with subtle movements to simulate cellular drift
    const intervalId = setInterval(() => {
      setFloatingElements(prev => prev.map(el => {
        // Apply subtle drift to 50% of elements for a more gentle cellular motion
        if (Math.random() > 0.5) {
          return {
            ...el,
            // Apply very subtle position drift within a small range
            x: el.x + (Math.random() * 0.3 - 0.15),
            y: el.y + (Math.random() * 0.3 - 0.15),
            // Apply subtle opacity fluctuations to mimic cellular activity
            opacity: Math.max(0.15, Math.min(0.6, el.opacity + (Math.random() * 0.04 - 0.02)))
          };
        }
        return el;
      }));
    }, 3000); // Slower update interval for more scientific, less flashy movement
    
    return () => clearInterval(intervalId);
  }, [animationState.uiElements]);

  return (
    <>
      {animationState.uiElements && floatingElements.map((el, i) => {
        // Create more refined background colors based on position and color property
        let bgColorClass = '';
        let borderColorClass = '';
        
        // Apply different styling with significantly reduced color intensity
        if (el.color === 'translucent-white') {
          // Semi-transparent white with refined opacity
          bgColorClass = `bg-white/${Math.floor(el.opacity * 100)}`;
          borderColorClass = ''; // No border for translucent elements
        } else if (el.color === 'dark-white') {
          // "Dark White" (Light Grey / Off-White) with slightly increased contrast
          bgColorClass = 'bg-[#F1F1F1]'; // Lighter shade for more subtle visibility
          borderColorClass = 'border border-[#E8E8E8]/30'; // Very subtle border
        } else if (el.color === 'accent') {
          // Extremely reduced color intensity for accent elements
          bgColorClass = 'bg-aurascan-accent/10'; // Decreased from 20% to 10%
          borderColorClass = 'border border-aurascan-accent/15'; // Decreased from 25% to 15%
        } else if (el.color === 'green') {
          bgColorClass = 'bg-aurascan-deep-green/8'; // Decreased from 15% to 8%
          borderColorClass = 'border border-aurascan-deep-green/12'; // Decreased from 20% to 12%
        } else {
          // dark-orange with greatly reduced intensity
          bgColorClass = 'bg-aurascan-dark-orange/10'; // Decreased from 20% to 10%
          borderColorClass = 'border border-aurascan-dark-orange/12'; // Decreased from 25% to 12%
        }

        // Determine animation type for more sophisticated laboratory-like movement
        let animationClass = '';
        if (el.animationType === 'cellular') {
          animationClass = 'animate-cellular-motion';
        } else {
          animationClass = 'animate-float-enhanced';
        }
            
        return (
          <div 
            key={i}
            className={`absolute rounded-full transition-all duration-1500 ${bgColorClass} ${borderColorClass} ${animationClass}`}
            style={{
              width: `${el.size}rem`,
              height: `${el.size}rem`,
              left: `${el.x}%`,
              top: `${el.y}%`,
              opacity: el.opacity,
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.speed}s`,
              transform: 'scale(0) rotate(0deg)',
              transition: 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1.5s ease-in-out',
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
