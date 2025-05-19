
import React, { useRef } from "react";
import { useHeroAnimations } from "@/hooks/useHeroAnimations";
import { IntensityLevel } from "@/types/logo";
import HeaderLogo from "./hero/HeaderLogo";
import Headline from "./hero/Headline";
import CallToAction from "./hero/CallToAction";

interface HeroProps {
  isLoaded: boolean;
  showTyping: boolean;
  mousePosition?: { x: number, y: number };
}

const Hero = ({ isLoaded, mousePosition = { x: 0.5, y: 0.5 } }: HeroProps) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  
  // Define the intensity level correctly
  const logoIntensity: IntensityLevel = "medium";
  
  // Use our custom hook for animations
  const { animationStates, cursorProximity } = useHeroAnimations({
    headlineRef,
    mousePosition
  });

  return (
    <div className="flex flex-col items-center justify-center mb-16 relative z-10">
      {/* Smaller logo in header */}
      <HeaderLogo logoRef={logoRef} logoIntensity={logoIntensity} />
      
      {/* Enhanced headline with refined animations and cursor reactivity */}
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
