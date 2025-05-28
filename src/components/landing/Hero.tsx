
import React from "react";
import SimpleLogo from "./hero/SimpleLogo";
import MinimalCallToAction from "./hero/MinimalCallToAction";

interface HeroProps {
  isLoaded: boolean;
  showTyping: boolean;
  mousePosition?: { x: number, y: number };
}

const Hero = ({ isLoaded }: HeroProps) => {
  return (
    <div className="flex flex-col items-center justify-center mb-16 relative z-10">
      {/* New minimalist logo - no headline */}
      <SimpleLogo isVisible={isLoaded} />
      
      {/* Minimal call to action */}
      <MinimalCallToAction isVisible={isLoaded} />
    </div>
  );
};

export default Hero;
