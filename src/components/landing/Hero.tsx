
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import DynamicLogo from "@/components/DynamicLogo";
import TypingIndicator from "@/components/TypingIndicator";
import { RippleButton } from "@/components/ui/ripple-button";
import { IntensityLevel } from "@/types/logo";

interface HeroProps {
  isLoaded: boolean;
  showTyping: boolean;
  mousePosition?: { x: number, y: number };
}

const Hero = ({ isLoaded, showTyping, mousePosition = { x: 0.5, y: 0.5 } }: HeroProps) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  
  // Define the intensity level correctly
  const logoIntensity: IntensityLevel = "medium";
  
  // Text animation states with more refined timing
  const [animationStates, setAnimationStates] = useState({
    discover: false,
    yourBest: false,
    version: false,
    underlineVisible: false,
    ctaReady: false
  });

  // Enhanced cursor proximity tracking for interactive animations
  const [cursorProximity, setCursorProximity] = useState(0);

  // Effect for headline animation sequence
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    // Sequence the headline animations with more dramatic timing
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, discover: true }));
    }, 1200)); // Delayed start for more impact
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, yourBest: true }));
    }, 1800)); // Further spacing between elements
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, version: true }));
    }, 2400)); // Further spacing for dramatic reveal
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, underlineVisible: true }));
    }, 3600));
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, ctaReady: true }));
    }, 4000)); // Longer delay before CTA appears

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  // Parallax effect for headline on scroll - enhanced for more depth and mouse interactivity
  useEffect(() => {
    // Calculate cursor proximity to headline
    const updateCursorProximity = () => {
      if (!headlineRef.current) return;
      
      const rect = headlineRef.current.getBoundingClientRect();
      const headlineCenter = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
      
      // Normalize mouse position to page coordinates
      const pageWidth = window.innerWidth;
      const pageHeight = window.innerHeight;
      const mouseX = mousePosition.x * pageWidth;
      const mouseY = mousePosition.y * pageHeight;
      
      // Calculate distance from mouse to headline center
      const dx = mouseX - headlineCenter.x;
      const dy = mouseY - headlineCenter.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Convert to proximity (1 = close, 0 = far)
      const maxDistance = Math.sqrt(pageWidth * pageWidth + pageHeight * pageHeight) / 2;
      const proximity = 1 - Math.min(1, distance / maxDistance);
      setCursorProximity(proximity);
    };
    
    const handleScroll = () => {
      if (headlineRef.current) {
        const scrollPos = window.scrollY;
        const moveY = scrollPos * 0.25; // Enhanced subtle movement
        const opacityFactor = 1 - (scrollPos / 600); // Fade out more slowly
        const blurAmount = Math.min(3, scrollPos * 0.01); // More progressive blur effect
        const glowIntensity = Math.max(0, 0.3 - scrollPos * 0.0007); // Enhanced glow fades as user scrolls
        
        // Add subtle tilt based on mouse position for 3D effect
        const tiltX = (mousePosition.x - 0.5) * 4; // -2 to 2 degrees
        const tiltY = (mousePosition.y - 0.5) * -4;
        
        headlineRef.current.style.transform = `translateY(${-moveY}px) scale(${1 - scrollPos * 0.0003}) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
        headlineRef.current.style.opacity = `${Math.max(0, opacityFactor)}`;
        headlineRef.current.style.filter = `blur(${blurAmount}px)`;
        headlineRef.current.style.perspective = '1000px';
        headlineRef.current.style.transformStyle = 'preserve-3d';
        
        // Adjust glow on the "VERSION" text based on cursor proximity and scroll
        const versionElement = headlineRef.current.querySelector('.version-text') as HTMLElement;
        if (versionElement) {
          const dynamicGlow = 15 + scrollPos * 0.08 + (cursorProximity * 10);
          versionElement.style.textShadow = `0 0 ${dynamicGlow}px rgba(242, 150, 105, ${glowIntensity + cursorProximity * 0.15})`;
        }
        
        // Update cursor proximity
        updateCursorProximity();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', updateCursorProximity);
    updateCursorProximity(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', updateCursorProximity);
    };
  }, [mousePosition, cursorProximity]);

  return (
    <div className="flex flex-col items-center justify-center mb-16 relative z-10">
      {/* Smaller logo in header */}
      <div className="absolute top-0 left-0 p-4 md:p-6 z-20">
        <div className="flex items-center gap-2">
          <DynamicLogo 
            ref={logoRef}
            size="sm" 
            colorScheme="refined" 
            animationStyle="cellular" 
            intensity={logoIntensity} 
            isLandingPage={true}
            showText={true}
          />
        </div>
      </div>
      
      {/* Enhanced headline with refined animations and cursor reactivity */}
      <div 
        ref={headlineRef} 
        className="text-center mb-20 relative mt-24 pt-16"
        style={{ 
          transformStyle: 'preserve-3d', 
          perspective: '1000px',
          transition: 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)'
        }}
      >
        <h1 className="font-clash tracking-wider text-beautyagent-dark-grey">
          <span 
            className={`block text-5xl md:text-6xl lg:text-7xl font-light transition-all duration-1000 ease-out transform filter ${
              animationStates.discover ? 'opacity-70 translate-y-0 blur-[0.8px]' : 'opacity-0 translate-y-6 blur-md'
            }`}
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(${cursorProximity * -5}px)`,
              opacity: animationStates.discover ? 0.7 - cursorProximity * 0.1 : 0
            }}
          >
            DISCOVER
          </span>
          
          <span 
            className={`block text-5xl md:text-6xl lg:text-7xl font-light transition-all duration-1000 ease-out transform filter ${
              animationStates.yourBest ? 'opacity-70 translate-y-0 scale-100 blur-[0.8px]' : 'opacity-0 translate-y-4 scale-95 blur-md'
            }`}
            style={{ 
              transitionDelay: '300ms',
              transformStyle: 'preserve-3d',
              transform: `translateZ(${cursorProximity * 0}px)`,
              opacity: animationStates.yourBest ? 0.7 - cursorProximity * 0.05 : 0
            }}
          >
            YOUR BEST
          </span>
          
          <span 
            className={`version-text block text-5xl md:text-6xl lg:text-7xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-beautyagent-burnt-orange to-beautyagent-violet-titanium transition-all duration-1000 ease-out transform ${
              animationStates.version ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-md'
            }`}
            style={{ 
              transitionDelay: '600ms',
              backgroundSize: '200% 100%',
              animation: animationStates.version ? 'shimmer-gradient 10s ease-in-out infinite' : 'none',
              animationDelay: '1s',
              textShadow: `0 0 ${25 + cursorProximity * 15}px rgba(242, 150, 105, ${0.25 + cursorProximity * 0.2})`,
              transformStyle: 'preserve-3d',
              transform: `translateZ(${cursorProximity * 10}px)`
            }}
          >
            VERSION
          </span>
        </h1>
      </div>
      
      {/* Enhanced Main CTA Button with ripple effect and cursor reactivity */}
      <RippleButton 
        className={`glass-button hover:bg-beautyagent-violet-titanium hover:text-white text-lg px-8 py-6 h-auto mb-6 transition-all duration-1200 ease-out transform ${
          animationStates.ctaReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } liquid-button plasma-glow`}
        style={{ 
          transitionDelay: '1400ms',
          transform: animationStates.ctaReady ? 
            `translateY(0) scale(${1 + cursorProximity * 0.05})` : 
            'translateY(6px) scale(1)',
          boxShadow: `0 8px 24px -8px rgba(34, 31, 38, ${0.2 + cursorProximity * 0.1})`,
          transition: 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)'
        }}
        asChild
      >
        <Link to="/skin-mirror">
          Find My Skin Protocol
          <ArrowRight className="ml-2 h-5 w-5 animate-pulse-subtle" />
        </Link>
      </RippleButton>
      
      {/* Minimal subcopy for CTA - retained but minimalist */}
      <p 
        className={`text-beautyagent-medium-grey text-xs font-light mb-16 transition-all duration-1200 ease-out transform ${
          animationStates.ctaReady ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ 
          transitionDelay: '1600ms',
          letterSpacing: '0.03em',
          opacity: animationStates.ctaReady ? 0.7 + cursorProximity * 0.1 : 0
        }}
      >
        Upload a photo or describe your skin today
      </p>
    </div>
  );
};

export default Hero;
