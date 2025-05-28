
import React, { useState, useEffect } from "react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

interface TypingBottomCTAProps {
  isLoaded: boolean;
}

const TypingBottomCTA = ({ isLoaded }: TypingBottomCTAProps) => {
  const [showCTA, setShowCTA] = useState(false);

  // Start CTA animation after page loads
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowCTA(true);
      }, 5000); // Show after other animations complete
      
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  // CTA text typing animation
  const ctaText = useTypingAnimation({
    text: "Find My Skin Protocol",
    speed: 75,
    delay: showCTA ? 500 : 9999,
    showCursor: false
  });

  return (
    <div 
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 
        ${showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div 
        className="flex items-center backdrop-blur-sm border rounded-full py-3 px-8 shadow-lg transition-all duration-500 
          hover:shadow-xl cursor-pointer group dermaagent-button"
        style={{
          background: 'var(--dermaagent-glass-overlay)',
          borderColor: 'var(--dermaagent-glass-border)',
          boxShadow: '0 2px 12px var(--dermaagent-glass-shadow)',
          minWidth: '220px',
          justifyContent: 'center'
        }}
      >
        <span 
          className="text-sm whitespace-nowrap transition-all duration-500 
            group-hover:tracking-wider dermaagent-ui-text"
          style={{
            fontWeight: '300',
            minWidth: '180px',
            textAlign: 'center'
          }}
        >
          {ctaText.displayedText || "\u00A0"}
        </span>
        <div 
          className={`w-3 h-3 rounded-full ml-3 transition-opacity duration-500 ${
            ctaText.displayedText ? 'animate-pulse-subtle opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'var(--dermaagent-interactive-gradient)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default TypingBottomCTA;
