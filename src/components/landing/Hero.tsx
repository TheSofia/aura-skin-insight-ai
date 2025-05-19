
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
  welcomeMessage: string;
}

const Hero = ({ isLoaded, showTyping, welcomeMessage }: HeroProps) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  
  // Define the intensity level correctly
  const logoIntensity: IntensityLevel = "medium";
  
  // Text animation states with more refined timing
  const [animationStates, setAnimationStates] = useState({
    discover: false,
    yourBest: false,
    version: false,
    subtitle: false,
    underlineVisible: false,
    ctaReady: false
  });

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
      setAnimationStates(prev => ({ ...prev, subtitle: true }));
    }, 3200)); // Longer pause before subtitle appears
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, underlineVisible: true }));
    }, 3600));
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, ctaReady: true }));
    }, 4000)); // Longer delay before CTA appears

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  // Parallax effect for headline on scroll - enhanced for more depth
  useEffect(() => {
    const handleScroll = () => {
      if (headlineRef.current) {
        const scrollPos = window.scrollY;
        const moveY = scrollPos * 0.25; // Enhanced subtle movement
        const opacityFactor = 1 - (scrollPos / 600); // Fade out more slowly
        const blurAmount = Math.min(3, scrollPos * 0.01); // More progressive blur effect
        const glowIntensity = Math.max(0, 0.3 - scrollPos * 0.0007); // Enhanced glow fades as user scrolls
        
        headlineRef.current.style.transform = `translateY(${-moveY}px) scale(${1 - scrollPos * 0.0003})`;
        headlineRef.current.style.opacity = `${Math.max(0, opacityFactor)}`;
        headlineRef.current.style.filter = `blur(${blurAmount}px)`;
        
        // Adjust glow on the "VERSION" text as user scrolls
        const versionElement = headlineRef.current.querySelector('.version-text') as HTMLElement;
        if (versionElement) {
          versionElement.style.textShadow = `0 0 ${15 + scrollPos * 0.08}px rgba(242, 150, 105, ${glowIntensity})`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      
      {/* Enhanced headline with refined animations */}
      <div ref={headlineRef} className="text-center mb-20 relative mt-24 pt-16">
        <h1 className="font-clash tracking-wider text-beautyagent-dark-grey">
          <span 
            className={`block text-5xl md:text-6xl lg:text-7xl font-light transition-all duration-1000 ease-out transform filter ${
              animationStates.discover ? 'opacity-70 translate-y-0 blur-[0.8px]' : 'opacity-0 translate-y-6 blur-md'
            }`}
          >
            DISCOVER
          </span>
          
          <span 
            className={`block text-5xl md:text-6xl lg:text-7xl font-light transition-all duration-1000 ease-out transform filter ${
              animationStates.yourBest ? 'opacity-70 translate-y-0 scale-100 blur-[0.8px]' : 'opacity-0 translate-y-4 scale-95 blur-md'
            }`}
            style={{ transitionDelay: '300ms' }}
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
              textShadow: '0 0 25px rgba(242, 150, 105, 0.25)'
            }}
          >
            VERSION
          </span>
        </h1>
        
        {/* Enhanced subtitle with better animation */}
        <p 
          className={`text-beautyagent-medium-grey text-lg md:text-xl mt-8 transition-all duration-1000 ease-out transform ${
            animationStates.subtitle ? 'opacity-80 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
          }`}
          style={{ 
            transitionDelay: '800ms',
            letterSpacing: '0.06em',
            fontWeight: 300
          }}
        >
          Powered by AI. Rooted in Ritual.
        </p>
      </div>
      
      {/* Welcoming message with typing indicator */}
      <div className="mb-12 h-6 flex justify-center items-center">
        {showTyping ? (
          <TypingIndicator visible={true} />
        ) : (
          <p 
            className={`text-beautyagent-medium-grey max-w-xl mx-auto transition-all duration-1000 ease-out transform ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            {welcomeMessage}
          </p>
        )}
      </div>
      
      {/* Enhanced Main CTA Button with ripple effect */}
      <RippleButton 
        className={`glass-button hover:bg-beautyagent-violet-titanium hover:text-white text-lg px-8 py-6 h-auto mb-6 transition-all duration-1200 ease-out transform ${
          animationStates.ctaReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } liquid-button plasma-glow`}
        style={{ transitionDelay: '1400ms' }}
        asChild
      >
        <Link to="/skin-mirror">
          Find My Skin Protocol
          <ArrowRight className="ml-2 h-5 w-5 animate-pulse-subtle" />
        </Link>
      </RippleButton>
      
      {/* Subcopy below CTA */}
      <p 
        className={`text-beautyagent-medium-grey text-sm mb-16 transition-all duration-1200 ease-out transform ${
          animationStates.ctaReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1600ms' }}
      >
        Upload a photo or describe your skin today
      </p>
    </div>
  );
};

export default Hero;
