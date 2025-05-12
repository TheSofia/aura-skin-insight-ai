import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import DynamicLogo from "./DynamicLogo";
import { ScanFace, ArrowRight, MessageSquare } from "lucide-react";
import { useEffect, useState, useRef } from "react";

type OnboardingProps = {
  onGetStarted: () => void;
  onManualInput: () => void;
};

const Onboarding = ({ onGetStarted, onManualInput }: OnboardingProps) => {
  const { toast } = useToast();
  const logoRef = useRef<HTMLDivElement>(null);
  
  // State to control the animation sequence
  const [animationState, setAnimationState] = useState({
    discover: false,
    yourSkin: false,
    vitality: false,
    uiElements: false
  });

  // Enhanced floating background elements with increased visibility and dynamic properties
  // Increased count from 8 to 12 elements for slightly more visible texture
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
  
  // Trigger the animation sequence on component mount
  useEffect(() => {
    // Sequence the animations with appropriate timing
    const discoverTimer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, discover: true }));
    }, 300);
    
    const yourSkinTimer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, yourSkin: true }));
    }, 800);
    
    const vitalityTimer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, vitality: true }));
    }, 1300);
    
    const uiElementsTimer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, uiElements: true }));
    }, 1800);
    
    // Cleanup timers
    return () => {
      clearTimeout(discoverTimer);
      clearTimeout(yourSkinTimer);
      clearTimeout(vitalityTimer);
      clearTimeout(uiElementsTimer);
    };
  }, []);
  
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
    <div className="flex flex-col items-center text-center px-6 py-10 space-y-12 animate-fade-in min-h-screen justify-center bg-gradient-light relative overflow-hidden">
      {/* Enhanced floating background elements with dynamic cellular movement */}
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
      
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center relative z-10">
        {/* Updated logo with enhanced animation */}
        <DynamicLogo colorScheme="gradient" animationStyle="combined" size="lg" className="mb-8 animate-subtle-float" ref={logoRef}/>
        
        {/* Animated Title with Enhanced Sequential Reveal - Unified neutral text color */}
        <div className="relative mb-6 h-20 md:h-24 flex items-center justify-center overflow-hidden">
          <div className="relative">
            {/* Shadow text "Discover Your" with standardized neutral color */}
            <div className="absolute top-1 left-1 opacity-40">
              <span className={`inline-block font-clash font-light text-aurascan-dark-grey transition-all duration-700 ease-out
                ${animationState.discover ? 'translate-y-0 opacity-60' : 'translate-y-8 opacity-0'}`}>
                Discover{' '}
              </span>
              
              <span className={`inline-block font-clash font-light text-aurascan-dark-grey transition-all duration-700 ease-out delay-[300ms]
                ${animationState.yourSkin ? 'translate-y-0 opacity-60' : 'translate-y-8 opacity-0'}`}>
                Your{' '}
              </span>
            </div>
            
            {/* Primary text with sequential reveal and standardized neutral text color */}
            <div className="flex flex-wrap justify-center">
              <span className={`inline-block font-clash font-light text-4xl md:text-5xl lg:text-6xl text-aurascan-dark-grey transition-all duration-700 ease-out
                ${animationState.discover ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Discover{' '}
              </span>
              
              <span className={`inline-block font-clash font-light text-4xl md:text-5xl lg:text-6xl text-aurascan-dark-grey transition-all duration-700 ease-out delay-[300ms]
                ${animationState.yourSkin ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Your{' '}
              </span>
              
              {/* Modified: Changed from text-gradient to neutral text color with same animation */}
              <span className={`inline-block font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-aurascan-dark-grey transition-all duration-700 ease-out delay-[600ms]
                ${animationState.vitality ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Skin Vitality
              </span>
            </div>
          </div>
        </div>
        
        {/* Standardized description text color */}
        <p className="text-aurascan-dark-grey mx-auto mb-10 leading-relaxed text-lg max-w-md font-light opacity-0 animate-fade-in" 
           style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
          Experience personalized skincare powered by advanced AI analysis.
          Find your perfect skincare protocol with just one scan.
        </p>
        
        {/* Enhanced primary call to action with refined pulse animation and vibrant gradient - UPDATED TO PILL SHAPE */}
        <Button 
          className="bg-gradient-to-r from-aurascan-accent via-aurascan-dark-orange to-aurascan-deep-green hover:from-aurascan-dark-orange hover:via-aurascan-deep-green hover:to-aurascan-accent text-white py-6 px-8 text-lg w-full sm:w-auto flex items-center justify-center gap-3 max-w-xs sm:max-w-none mb-6 opacity-0 animate-fade-in transition-all duration-500 shadow-subtle hover:shadow-accent transform hover:scale-[1.03]"
          size="pill-lg" // Changed to pill-lg size to create fully rounded edges
          onClick={onGetStarted}
          style={{ 
            animationDelay: '1.8s', 
            animationFillMode: 'forwards',
            backgroundSize: '200% 100%'
          }}
        >
          <ScanFace className="h-5 w-5 animate-pulse-dot" />
          <span>Find My Skincare Protocol</span>
          <ArrowRight className="h-4 w-4 ml-1 animate-pulse-subtle" />
        </Button>
        
        {/* Alternative path with standardized text color and updated to pill shape */}
        <button
          onClick={onManualInput}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-aurascan-medium-grey/30 text-aurascan-dark-grey bg-white/50 hover:bg-aurascan-deep-green/10 hover:border-aurascan-deep-green/40 transition-all duration-300 text-sm font-light opacity-0 animate-fade-in group"
          style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
        >
          <MessageSquare className="h-4 w-4 text-aurascan-dark-grey opacity-70 group-hover:text-aurascan-deep-green group-hover:opacity-100 transition-opacity animate-subtle-pulse" />
          <span>Prefer to describe your skin?</span>
        </button>
        
        {/* Standardized footer text color */}
        <p className="text-xs text-aurascan-dark-grey mt-6 max-w-md font-light opacity-0 animate-fade-in" 
          style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}>
          By continuing, you agree to our <a href="#" className="text-aurascan-dark-grey hover:text-aurascan-accent underline-offset-4 hover:underline transition-colors">Privacy Policy</a> and <a href="#" className="text-aurascan-dark-grey hover:text-aurascan-accent underline-offset-4 hover:underline transition-colors">Terms of Service</a>.
        </p>
      </div>
      
      {/* Enhanced visualization element with more sophisticated animations */}
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
    </div>
  );
};

export default Onboarding;
