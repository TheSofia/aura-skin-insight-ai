
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

  // State for floating background elements with enhanced properties
  const [floatingElements, setFloatingElements] = useState(Array(8).fill(0).map(() => ({
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    size: Math.random() * 4 + 1,
    speed: Math.random() * 4 + 3,
    delay: Math.random() * 2,
    opacity: Math.random() * 0.4 + 0.1,
    // New properties for enhanced visual effects
    color: Math.random() > 0.7 ? 'accent' : Math.random() > 0.5 ? 'green' : 'deepOrange',
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() * 2 - 1) * 0.5
  })));
  
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
  
  return (
    <div className="flex flex-col items-center text-center px-6 py-10 space-y-12 animate-fade-in min-h-screen justify-center bg-gradient-light relative overflow-hidden">
      {/* Enhanced color-varied floating background elements */}
      {animationState.uiElements && floatingElements.map((el, i) => {
        // Determine background color class based on color property
        const bgColorClass = el.color === 'accent' 
          ? 'bg-aurascan-accent/15' 
          : el.color === 'green' 
            ? 'bg-aurascan-deep-green/10' 
            : 'bg-aurascan-dark-orange/10';
            
        // Determine border color class based on color property
        const borderColorClass = el.color === 'accent' 
          ? 'border border-aurascan-accent/20' 
          : el.color === 'green' 
            ? 'border border-aurascan-deep-green/15' 
            : 'border border-aurascan-dark-orange/15';
            
        return (
          <div 
            key={i}
            className={`absolute rounded-full transition-all duration-1000 ${bgColorClass} ${borderColorClass}`}
            style={{
              width: `${el.size}rem`,
              height: `${el.size}rem`,
              left: `${el.x}%`,
              top: `${el.y}%`,
              opacity: el.opacity,
              animation: `float ${el.speed}s infinite ease-in-out, rotate-slow ${10 + el.rotationSpeed * 5}s linear infinite`,
              animationDelay: `${el.delay}s`,
              transform: 'scale(0) rotate(0deg)',
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            onAnimationStart={(e) => {
              // Start scaling and rotating animation
              setTimeout(() => {
                e.currentTarget.style.transform = `scale(1) rotate(${el.rotation}deg)`;
              }, 100 * i);
            }}
          />
        );
      })}
      
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center relative z-10">
        {/* Updated logo with new color scheme */}
        <DynamicLogo colorScheme={Math.random() > 0.5 ? "accent" : "teal"} size="lg" className="mb-8 animate-subtle-float" ref={logoRef}/>
        
        {/* Animated Title with Enhanced Sequential Reveal */}
        <div className="relative mb-6 h-20 md:h-24 flex items-center justify-center overflow-hidden">
          <div className="relative">
            {/* Shadow text "Discover Your" with enhanced gradient overlay */}
            <div className="absolute top-1 left-1 opacity-40">
              <span className={`inline-block font-clash font-light text-aurascan-medium-grey transition-all duration-700 ease-out
                ${animationState.discover ? 'translate-y-0 opacity-60' : 'translate-y-8 opacity-0'}`}>
                Discover{' '}
              </span>
              
              <span className={`inline-block font-clash font-light text-aurascan-medium-grey transition-all duration-700 ease-out delay-[300ms]
                ${animationState.yourSkin ? 'translate-y-0 opacity-60' : 'translate-y-8 opacity-0'}`}>
                Your{' '}
              </span>
            </div>
            
            {/* Primary text with sequential reveal and subtle gradient effect */}
            <div className="flex flex-wrap justify-center">
              <span className={`inline-block font-clash font-light text-4xl md:text-5xl lg:text-6xl text-aurascan-dark-grey transition-all duration-700 ease-out
                ${animationState.discover ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Discover{' '}
              </span>
              
              <span className={`inline-block font-clash font-light text-4xl md:text-5xl lg:text-6xl text-aurascan-dark-grey transition-all duration-700 ease-out delay-[300ms]
                ${animationState.yourSkin ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Your{' '}
              </span>
              
              <span className={`inline-block font-clash font-bold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-tr from-aurascan-accent to-aurascan-dark-orange bg-clip-text text-transparent transition-all duration-700 ease-out delay-[600ms]
                ${animationState.vitality ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Skin Vitality
              </span>
            </div>
          </div>
        </div>
        
        {/* Enhanced description text with subtle highlight */}
        <p className="text-aurascan-medium-grey mx-auto mb-10 leading-relaxed text-lg max-w-md font-light opacity-0 animate-fade-in" 
           style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
          Experience <span className="text-aurascan-dark-grey font-medium">personalized skincare</span> powered by advanced AI analysis.
          Find your perfect <span className="text-aurascan-deep-green">skincare protocol</span> with just one scan.
        </p>
        
        {/* Enhanced primary call to action with refined pulse animation and gradient */}
        <Button 
          className="bg-gradient-to-r from-aurascan-accent to-aurascan-dark-orange hover:from-aurascan-dark-orange hover:to-aurascan-accent text-white py-6 px-8 text-lg w-full sm:w-auto flex items-center justify-center gap-3 max-w-xs sm:max-w-none mb-6 opacity-0 animate-fade-in transition-all duration-300 shadow-subtle hover:shadow-accent transform hover:scale-[1.03]"
          onClick={onGetStarted}
          style={{ 
            animationDelay: '1.8s', 
            animationFillMode: 'forwards',
          }}
        >
          <ScanFace className="h-5 w-5" />
          <span>Find My Skincare Protocol</span>
          <ArrowRight className="h-4 w-4 ml-1 animate-pulse-subtle" />
        </Button>
        
        {/* Alternative path with enhanced design */}
        <button
          onClick={onManualInput}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-aurascan-medium-grey/30 text-aurascan-dark-grey bg-white/50 hover:bg-aurascan-deep-green/5 hover:border-aurascan-deep-green/30 transition-all duration-300 text-sm font-light opacity-0 animate-fade-in group"
          style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
        >
          <MessageSquare className="h-4 w-4 text-aurascan-deep-green opacity-70 group-hover:opacity-100 transition-opacity" />
          <span>Prefer to describe your skin?</span>
        </button>
        
        <p className="text-xs text-aurascan-medium-grey mt-6 max-w-md font-light opacity-0 animate-fade-in" style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}>
          By continuing, you agree to our <a href="#" className="text-aurascan-accent hover:text-aurascan-dark-orange underline-offset-4 hover:underline transition-colors">Privacy Policy</a> and <a href="#" className="text-aurascan-accent hover:text-aurascan-dark-orange underline-offset-4 hover:underline transition-colors">Terms of Service</a>.
        </p>
      </div>
      
      {/* Enhanced visualization element with more sophisticated animations */}
      <div className="w-full max-w-screen-lg mx-auto flex justify-center opacity-0 animate-fade-in" 
           style={{ animationDelay: '2.4s', animationFillMode: 'forwards' }}>
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Abstract, morphing visualization with enhanced animation and color */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="morphing-shape w-48 h-48 md:w-64 md:h-64 opacity-90 animate-morph bg-gradient-to-tr from-aurascan-accent/20 via-aurascan-dark-orange/10 to-aurascan-deep-green/15"></div>
            
            {/* Overlapping circular elements for depth with enhanced rotation and colors */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full border border-aurascan-accent/20 animate-rotate-slow" style={{ animationDuration: '20s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full border border-aurascan-deep-green/30 animate-rotate-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            
            {/* Enhanced floating particles with better transitions and varied colors */}
            {Array(8).fill(0).map((_, i) => {
              // Alternate between accent, deep green and dark orange for particles
              const particleColor = i % 3 === 0 
                ? "bg-aurascan-accent/70" 
                : i % 3 === 1 
                  ? "bg-aurascan-deep-green/70" 
                  : "bg-aurascan-dark-orange/70";
              
              const hoverColor = i % 3 === 0 
                ? "hover:bg-aurascan-accent" 
                : i % 3 === 1 
                  ? "hover:bg-aurascan-deep-green" 
                  : "hover:bg-aurascan-dark-orange";
                  
              return (
                <div 
                  key={i}
                  className={`absolute w-1 h-1 md:w-2 md:h-2 rounded-full ${particleColor} ${hoverColor} animate-float transition-all duration-300 hover:scale-150`}
                  style={{
                    left: `${30 + (i * 8)}%`,
                    top: `${20 + (i * 10)}%`,
                    animationDuration: `${3 + i * 0.5}s`,
                    animationDelay: `${i * 0.3}s`
                  }}
                ></div>
              );
            })}

            {/* Glowing center point with enhanced animation and color */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-aurascan-accent to-aurascan-dark-orange shadow-glow z-10 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
