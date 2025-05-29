
import React from "react";
import TypingTitle from "./hero/TypingTitle";
import EnhancedCallToAction from "./hero/EnhancedCallToAction";

interface HeroProps {
  isLoaded: boolean;
  showTyping: boolean;
}

const Hero = ({ isLoaded }: HeroProps) => {
  return (
    <div className="flex flex-col items-center justify-center mb-16 relative z-10">
      {/* Typing Title */}
      <TypingTitle isVisible={isLoaded} />
      
      {/* Enhanced Call to Action */}
      <EnhancedCallToAction isVisible={isLoaded} />
    </div>
  );
};

export default Hero;
