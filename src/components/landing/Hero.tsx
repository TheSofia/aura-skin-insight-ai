
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import DynamicLogo from "@/components/DynamicLogo";
import TypingIndicator from "@/components/TypingIndicator";
import { RippleButton } from "@/components/ui/ripple-button";

interface HeroProps {
  isLoaded: boolean;
  showTyping: boolean;
  welcomeMessage: string;
}

const Hero = ({ isLoaded, showTyping, welcomeMessage }: HeroProps) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  
  // Text animation states
  const [animationStates, setAnimationStates] = useState({
    discover: false,
    yourBest: false,
    version: false,
    underlineVisible: false
  });

  // Effect for headline animation sequence
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    // Sequence the headline animations
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, discover: true }));
    }, 800));
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, yourBest: true }));
    }, 1200));
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, version: true }));
    }, 1600));
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, underlineVisible: true }));
    }, 2000));

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  // Parallax effect for headline on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (headlineRef.current) {
        const scrollPos = window.scrollY;
        const moveY = scrollPos * 0.15; // Subtle movement
        headlineRef.current.style.transform = `translateY(${-moveY}px) scale(${1 - scrollPos * 0.0005})`;
        headlineRef.current.style.opacity = `${1 - (scrollPos / 500)}`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mb-16">
      {/* Logo prominently displayed ABOVE headline */}
      <div className="mb-8 animate-fade-in">
        <DynamicLogo 
          ref={logoRef}
          size="lg" 
          colorScheme="refined" 
          animationStyle="cellular" 
          intensity="vibrant" 
          isLandingPage={true}
          showText={true}
        />
        
        {/* Animated underline for logo */}
        <div className={`mx-auto h-[1px] mt-2 bg-gradient-to-r from-transparent via-beautyagent-amber-shimmer to-transparent transition-all duration-1000 ease-out ${animationStates.underlineVisible ? 'w-48 opacity-80' : 'w-0 opacity-0'} animate-pulse-subtle`}></div>
      </div>
      
      {/* New headline "DISCOVER YOUR BEST VERSION" with refined animations */}
      <div ref={headlineRef} className="text-center mb-16 relative">
        <h1 className="font-clash tracking-wider text-beautyagent-dark-grey">
          <span 
            className={`block text-4xl md:text-5xl lg:text-6xl font-light transition-all duration-700 ease-out transform ${
              animationStates.discover ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
            }`}
          >
            DISCOVER
          </span>
          
          <span 
            className={`block text-4xl md:text-5xl lg:text-6xl font-light transition-all duration-700 ease-out transform ${
              animationStates.yourBest ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-2 scale-95 blur-sm'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            YOUR BEST
          </span>
          
          <span 
            className={`block text-4xl md:text-5xl lg:text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-beautyagent-burnt-orange to-beautyagent-violet-titanium transition-all duration-700 ease-out transform ${
              animationStates.version ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
            }`}
            style={{ 
              transitionDelay: '400ms',
              backgroundSize: '200% 100%',
              animation: animationStates.version ? 'shimmer-gradient 8s ease-in-out infinite' : 'none',
              animationDelay: '0.8s',
              textShadow: '0 0 20px rgba(126, 105, 171, 0.15)'
            }}
          >
            VERSION
          </span>
        </h1>
      </div>
      
      {/* Welcoming message with typing indicator */}
      <div className="mb-10 h-6 flex justify-center items-center">
        {showTyping ? (
          <TypingIndicator visible={true} />
        ) : (
          <p className="text-beautyagent-medium-grey max-w-xl mx-auto animate-fade-in opacity-0">
            {welcomeMessage}
          </p>
        )}
      </div>
      
      {/* Enhanced Main CTA Button with ripple effect */}
      <RippleButton 
        className="glass-button hover:bg-beautyagent-violet-titanium hover:text-white text-lg px-8 py-6 h-auto mb-6 animate-fade-in opacity-0 delay-1500 liquid-button plasma-glow"
        asChild
      >
        <Link to="/skin-mirror">
          Find My Skin Protocol
          <ArrowRight className="ml-2 h-5 w-5 animate-pulse-subtle" />
        </Link>
      </RippleButton>
      
      {/* Subcopy below CTA */}
      <p className="text-beautyagent-medium-grey text-sm mb-16 animate-fade-in opacity-0 delay-1800">
        Upload a photo or describe your skin today
      </p>
    </div>
  );
};

export default Hero;
