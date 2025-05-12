
import { useEffect, useState } from "react";

type FloatingElementProps = {
  animationState: {
    uiElements: boolean;
  };
};

const FloatingBackground = ({ animationState }: FloatingElementProps) => {
  // State for dynamic floating background elements with increased visibility and dynamic properties
  const [floatingElements, setFloatingElements] = useState(Array(12).fill(0).map(() => {
    // Generate position with a bias toward the center (avoiding sides)
    // This creates a more central focus with fewer elements on the edges
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    
    // Shift most elements toward the center zone (25-75% of screen width)
    if (Math.random() > 0.3) { // 70% of elements will be more central
      x = Math.random() * 50 + 25; // 25-75% of screen width
      y = Math.random() * 50 + 25; // 25-75% of screen height
    }
    
    // Dynamic color assignment with more subtle visibility
    // For position-based color assignment with cellular aesthetic
    let color;
    let opacity;
    
    if (x < 25 || x > 75 || y < 25 || y > 75) {
      // Edge zones: only very subtle, translucent whites and light grays
      color = Math.random() > 0.5 ? 'translucent-white' : 'dark-white';
      // Slightly increased opacity for better visibility (0.3-0.6 range)
      opacity = Math.random() * 0.3 + 0.3;
    } else {
      // Central zone: allow some accent colors mixed with translucent whites
      const colorRandom = Math.random();
      if (colorRandom > 0.7) { // 30% chance for accent colors in central area
        color = colorRandom > 0.85 ? 'accent' : (Math.random() > 0.5 ? 'green' : 'deepOrange');
        // Slightly more visible but still subtle (0.25-0.45 range)
        opacity = Math.random() * 0.2 + 0.25;
      } else {
        color = Math.random() > 0.5 ? 'translucent-white' : 'dark-white';
        // Medium visibility (0.35-0.6 range)
        opacity = Math.random() * 0.25 + 0.35;
      }
    }
    
    return {
      x,
      y,
      size: Math.random() * 3.5 + 1.5, // Slightly increased size for better visibility
      speed: Math.random() * 4 + 3, // Base floating speed
      delay: Math.random() * 2,
      opacity,
      color,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() * 3 - 1) * 0.8, // Slightly increased rotation speed
      scale: Math.random() * 0.2 + 0.9, // Scale variation for dynamic feel
      // New dynamic properties
      drift: Math.random() * 8 + 2, // How far it drifts horizontally
      driftSpeed: Math.random() * 5 + 10, // How fast it drifts
      pulseSpeed: Math.random() * 3 + 2, // Speed of pulsing animation
      animationType: Math.random() > 0.5 ? 'cellular' : 'float' // Alternate between animation types
    };
  }));

  // Effect for dynamic cellular movement
  useEffect(() => {
    if (!animationState.uiElements) return;
    
    // Update floating elements with subtle movements to simulate cellular drift
    const intervalId = setInterval(() => {
      setFloatingElements(prev => prev.map(el => {
        // Only apply subtle drift to some elements to maintain balance
        if (Math.random() > 0.7) {
          return {
            ...el,
            // Apply very subtle position drift within a small range
            x: el.x + (Math.random() * 0.4 - 0.2),
            y: el.y + (Math.random() * 0.4 - 0.2),
            // Apply subtle opacity fluctuations to mimic cellular activity
            opacity: Math.max(0.2, Math.min(0.65, el.opacity + (Math.random() * 0.08 - 0.04)))
          };
        }
        return el;
      }));
    }, 2000); // Update every 2 seconds for subtle movement
    
    return () => clearInterval(intervalId);
  }, [animationState.uiElements]);

  return (
    <>
      {animationState.uiElements && floatingElements.map((el, i) => {
        // Create more refined background colors based on position and color property
        let bgColorClass = '';
        let borderColorClass = '';
        
        // Apply different styling based on color type - more visible but still subtle
        if (el.color === 'translucent-white') {
          // Semi-transparent white with enhanced opacity for better visibility
          bgColorClass = `bg-white/${Math.floor(el.opacity * 100)}`;
          borderColorClass = ''; // No border for translucent elements
        } else if (el.color === 'dark-white') {
          // "Dark White" (Light Grey / Off-White) with slightly increased contrast
          bgColorClass = 'bg-[#ECECEC]'; // Slightly darker shade for better visibility
          borderColorClass = 'border border-[#DADADA]/30'; // Slightly more visible border
        } else if (el.color === 'accent') {
          // Vibrant colors only for central elements, with slightly increased opacity
          bgColorClass = 'bg-aurascan-accent/20'; // Increased from 15% to 20%
          borderColorClass = 'border border-aurascan-accent/25'; // Increased from 20% to 25%
        } else if (el.color === 'green') {
          bgColorClass = 'bg-aurascan-deep-green/15'; // Increased from 10% to 15%
          borderColorClass = 'border border-aurascan-deep-green/20'; // Increased from 15% to 20%
        } else {
          // dark-orange
          bgColorClass = 'bg-aurascan-dark-orange/20'; // Increased from 15% to 20%
          borderColorClass = 'border border-aurascan-dark-orange/25'; // Increased from 20% to 25%
        }

        // Determine animation type based on element property
        let animationClass = '';
        if (el.animationType === 'cellular') {
          animationClass = 'animate-cellular-motion';
        } else {
          animationClass = 'animate-float-enhanced';
        }
            
        return (
          <div 
            key={i}
            className={`absolute rounded-full transition-all duration-1000 ${bgColorClass} ${borderColorClass} ${animationClass}`}
            style={{
              width: `${el.size}rem`,
              height: `${el.size}rem`,
              left: `${el.x}%`,
              top: `${el.y}%`,
              opacity: el.opacity,
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.speed}s`,
              transform: 'scale(0) rotate(0deg)',
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1.2s ease-in-out',
            }}
            onAnimationStart={(e) => {
              // Start scaling and rotating animation with enhanced dynamics
              setTimeout(() => {
                e.currentTarget.style.transform = `scale(${el.scale}) rotate(${el.rotation}deg)`;
                
                // Add additional subtle animation based on element type
                if (el.animationType === 'cellular') {
                  e.currentTarget.classList.add('animate-pulse-cellular');
                  e.currentTarget.style.animationDuration = `${el.pulseSpeed}s`;
                }
              }, 80 * i);
            }}
          />
        );
      })}
    </>
  );
};

export default FloatingBackground;
