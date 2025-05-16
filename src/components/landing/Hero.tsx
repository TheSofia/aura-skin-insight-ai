
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
    subtitle: false,
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
      setAnimationStates(prev => ({ ...prev, subtitle: true }));
    }, 2200));
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, underlineVisible: true }));
    }, 2600));

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
    <div className="flex flex-col items-center justify-center mb-16 relative z-10">
      {/* Smaller logo in header */}
      <div className="absolute top-0 left-0 p-4 md:p-6 z-20">
        <div className="flex items-center gap-2">
          <DynamicLogo 
            ref={logoRef}
            size="sm" 
            colorScheme="refined" 
            animationStyle="cellular" 
            intensity="medium" 
            isLandingPage={true}
            showText={true}
          />
        </div>
      </div>
      
      {/* New headline with refined animations */}
      <div ref={headlineRef} className="text-center mb-16 relative mt-20 pt-16">
        <h1 className="font-clash tracking-wider text-beautyagent-dark-grey">
          <span 
            className={`block text-4xl md:text-5xl lg:text-6xl font-light transition-all duration-700 ease-out transform filter ${
              animationStates.discover ? 'opacity-80 translate-y-0 blur-[0.5px]' : 'opacity-0 translate-y-4 blur-sm'
            }`}
          >
            DISCOVER
          </span>
          
          <span 
            className={`block text-4xl md:text-5xl lg:text-6xl font-light transition-all duration-700 ease-out transform filter ${
              animationStates.yourBest ? 'opacity-80 translate-y-0 scale-100 blur-[0.5px]' : 'opacity-0 translate-y-2 scale-95 blur-sm'
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
        
        {/* Added subtitle */}
        <p 
          className={`text-beautyagent-medium-grey text-sm md:text-base mt-6 transition-all duration-700 ease-out transform ${
            animationStates.subtitle ? 'opacity-70 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          Powered by AI. Rooted in Ritual.
        </p>
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
