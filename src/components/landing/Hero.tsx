
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import CustomCursor from '@/components/ui/CustomCursor';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { useHeroAnimations } from '@/hooks/useHeroAnimations';

interface HeroProps {
  isLoaded?: boolean;
  showTyping?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLoaded = false, showTyping = true }) => {
  const navigate = useNavigate();
  const headlineRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Use hero animations hook
  const { animationStates, cursorProximity } = useHeroAnimations({ 
    headlineRef, 
    mousePosition 
  });
  
  // Track mouse position for reactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { displayedText } = useTypingAnimation({
    text: "Experience the future of personalized skincare through intelligent analysis and custom formulations.",
    speed: 50,
    delay: isLoaded && showTyping ? 2000 : 9999
  });

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] space-y-8 px-4">
      {/* Main Logo - Scaled down by 12% */}
      <div 
        ref={headlineRef}
        className={`text-center transition-all duration-2000 ease-out transform ${
          animationStates.isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          transform: `scale(0.73) translateY(${animationStates.isTextVisible ? '0' : '32px'})`,
          filter: `blur(${Math.max(0, 2 - cursorProximity * 2)}px)`,
        }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-gray-800 dermaagent-logo mb-2">
          d e r m a . a g e n t
        </h1>
        
        {/* Version Highlight */}
        <div 
          className={`inline-flex items-center px-3 py-1 rounded-full bg-gray-100/50 backdrop-blur-sm transition-all duration-1000 ${
            animationStates.showVersionHighlight ? 'opacity-60 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <Sparkles className="w-3 h-3 text-gray-600 mr-1" />
          <span className="text-xs text-gray-600 dermaagent-ui-text-subtle">
            AI-Powered Skincare Intelligence
          </span>
        </div>
      </div>

      {/* Typing Description */}
      <div 
        className={`max-w-2xl text-center transition-all duration-1500 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="text-lg md:text-xl text-gray-600 dermaagent-ui-text leading-relaxed">
          {showTyping ? (
            <>
              {displayedText}
              {displayedText.length < "Experience the future of personalized skincare through intelligent analysis and custom formulations.".length && (
                <span className="animate-pulse text-gray-800">|</span>
              )}
            </>
          ) : (
            "Experience the future of personalized skincare through intelligent analysis and custom formulations."
          )}
        </p>
      </div>

      {/* Call to Action */}
      <div 
        className={`flex flex-col sm:flex-row gap-4 transition-all duration-2000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: showTyping ? '3500ms' : '1000ms' }}
      >
        <Button
          onClick={() => navigate('/custom-product')}
          className="dermaagent-button px-8 py-3 text-base rounded-lg border hover:bg-gray-50 transition-all duration-300 group"
        >
          Create Custom Product
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        
        <Button
          onClick={() => navigate('/shop')}
          variant="outline"
          className="dermaagent-button px-8 py-3 text-base rounded-lg bg-transparent border border-gray-300 hover:bg-gray-50 transition-all duration-300"
        >
          Browse Shop
        </Button>
      </div>

      {/* Subtle bottom hint */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-2000 ease-out ${
          isLoaded ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: showTyping ? '4000ms' : '1500ms' }}
      >
        <p className="text-sm text-gray-500 dermaagent-ui-text-subtle">
          Access all features through the menu
        </p>
      </div>
    </div>
  );
};

export default Hero;
