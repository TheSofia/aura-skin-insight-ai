
import React, { useRef } from "react";
import { useHeroAnimations } from "@/hooks/useHeroAnimations";
import Headline from "./hero/Headline";
import CallToAction from "./hero/CallToAction";

interface HeroProps {
  isLoaded: boolean;
  showTyping: boolean;
  mousePosition?: { x: number, y: number };
}

const Hero = ({ isLoaded, mousePosition = { x: 0.5, y: 0.5 } }: HeroProps) => {
  const headlineRef = useRef<HTMLDivElement>(null);
  
  // Use our custom hook for animations
  const { animationStates, cursorProximity } = useHeroAnimations({
    headlineRef,
    mousePosition
  });

  return (
    <div className="flex flex-col items-center justify-center mb-16 relative z-10">
      {/* Enhanced headline with refined animations and cursor reactivity - NO LOGO */}
      <Headline 
        animationStates={animationStates} 
        cursorProximity={cursorProximity}
        headlineRef={headlineRef}
      />
      
      {/* Call to action button and minimal subcopy */}
      <CallToAction 
        animationStates={animationStates}
        cursorProximity={cursorProximity}
      />
    </div>
  );
};

export default Hero;
