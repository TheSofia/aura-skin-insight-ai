
import React from "react";
import PowerfulLogoHero from "./hero/PowerfulLogoHero";
import EnhancedCallToAction from "./hero/EnhancedCallToAction";

interface HeroProps {
  isLoaded: boolean;
  showTyping: boolean;
}

const Hero = ({ isLoaded }: HeroProps) => {
  return (
    <div className="flex flex-col items-center justify-center mb-16 relative z-10">
      {/* Powerful 3D Logo Hero */}
      <PowerfulLogoHero isVisible={isLoaded} />
      
      {/* Enhanced Call to Action */}
      <EnhancedCallToAction isVisible={isLoaded} />
    </div>
  );
};

export default Hero;
