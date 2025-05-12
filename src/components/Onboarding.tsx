
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import DynamicLogo from "./DynamicLogo";
import { ScanFace } from "lucide-react";
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

  // State for floating background elements
  const [floatingElements, setFloatingElements] = useState(Array(6).fill(0).map(() => ({
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    size: Math.random() * 4 + 1,
    speed: Math.random() * 4 + 3,
    delay: Math.random() * 2,
    opacity: Math.random() * 0.4 + 0.1
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
    <div className="flex flex-col items-center text-center px-6 py-10 space-y-12 animate-fade-in min-h-screen justify-center bg-white relative overflow-hidden">
      {/* Enhanced floating background elements */}
      {animationState.uiElements && floatingElements.map((el, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-aurascan-dark-grey/10 transition-all duration-1000"
          style={{
            width: `${el.size}rem`,
            height: `${el.size}rem`,
            left: `${el.x}%`,
            top: `${el.y}%`,
            opacity: el.opacity,
            animation: `float ${el.speed}s infinite ease-in-out`,
            animationDelay: `${el.delay}s`,
            transform: 'scale(0)',
            transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          onAnimationStart={(e) => {
            // Start scaling animation
            setTimeout(() => {
              e.currentTarget.style.transform = 'scale(1)';
            }, 100 * i);
          }}
        />
      ))}
      
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center relative z-10">
        <DynamicLogo colorScheme="cyan" size="lg" className="mb-8 animate-subtle-float" ref={logoRef}/>
        
        {/* Animated Title with Sequential Reveal */}
        <div className="relative mb-6 h-20 md:h-24 flex items-center justify-center overflow-hidden">
          <div className="relative">
            {/* Shadow text "Discover Your" */}
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
            
            {/* Primary text with sequential reveal */}
            <div className="flex flex-wrap justify-center">
              <span className={`inline-block font-clash font-light text-4xl md:text-5xl lg:text-6xl text-aurascan-dark-grey transition-all duration-700 ease-out
                ${animationState.discover ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Discover{' '}
              </span>
              
              <span className={`inline-block font-clash font-light text-4xl md:text-5xl lg:text-6xl text-aurascan-dark-grey transition-all duration-700 ease-out delay-[300ms]
                ${animationState.yourSkin ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Your{' '}
              </span>
              
              <span className={`inline-block font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-aurascan-dark-grey transition-all duration-700 ease-out delay-[600ms]
                ${animationState.vitality ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                Skin Vitality
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-aurascan-medium-grey mx-auto mb-10 leading-relaxed text-lg max-w-md font-light opacity-0 animate-fade-in" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
          Experience personalized skincare powered by advanced AI analysis.
          Find your perfect skincare protocol with just one scan.
        </p>
        
        {/* Enhanced primary call to action with pulse animation */}
        <Button 
          className="bg-aurascan-dark-grey hover:bg-aurascan-dark-grey/90 text-white py-6 px-8 text-lg w-full sm:w-auto flex items-center justify-center gap-3 max-w-xs sm:max-w-none mb-6 opacity-0 animate-fade-in hover:scale-105 transition-transform duration-300 animate-pulse-slow"
          onClick={onGetStarted}
          style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
        >
          <ScanFace className="h-5 w-5" />
          <span>Find My Skincare Protocol</span>
        </Button>
        
        {/* Alternative path with enhanced animation */}
        <button
          onClick={onManualInput}
          className="text-aurascan-dark-grey hover:text-aurascan-dark-grey/80 transition-colors hover:underline text-sm font-light opacity-0 animate-fade-in"
          style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
        >
          Prefer to describe your skin?
        </button>
        
        <p className="text-xs text-aurascan-medium-grey mt-6 max-w-md font-light opacity-0 animate-fade-in" style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}>
          By continuing, you agree to our <a href="#" className="text-aurascan-dark-grey hover:text-aurascan-dark-grey/80 transition-colors">Privacy Policy</a> and <a href="#" className="text-aurascan-dark-grey hover:text-aurascan-dark-grey/80 transition-colors">Terms of Service</a>.
        </p>
      </div>
      
      {/* Enhanced visualization element with more animation */}
      <div className="w-full max-w-screen-lg mx-auto flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: '2.4s', animationFillMode: 'forwards' }}>
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Abstract, morphing visualization with enhanced animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="morphing-shape w-48 h-48 md:w-64 md:h-64 opacity-90 animate-morph"></div>
            
            {/* Overlapping circular elements for depth with enhanced rotation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full border border-aurascan-dark-grey/20 animate-rotate-slow" style={{ animationDuration: '20s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full border border-aurascan-dark-grey/30 animate-rotate-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            
            {/* Enhanced floating particles with better transitions */}
            {Array(8).fill(0).map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-aurascan-dark-grey/70 animate-float transition-all duration-300 hover:scale-150 hover:bg-aurascan-dark-grey"
                style={{
                  left: `${30 + (i * 8)}%`,
                  top: `${20 + (i * 10)}%`,
                  animationDuration: `${3 + i * 0.5}s`,
                  animationDelay: `${i * 0.3}s`
                }}
              ></div>
            ))}

            {/* Glowing center point with enhanced animation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-aurascan-dark-grey shadow-glow z-10 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
