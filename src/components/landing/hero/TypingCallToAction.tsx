
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

interface TypingCallToActionProps {
  animationStates: {
    isTextVisible: boolean;
  };
  cursorProximity: number;
}

const TypingCallToAction = ({ animationStates, cursorProximity }: TypingCallToActionProps) => {
  const [showButton, setShowButton] = useState(false);

  // Start button animation after a delay
  useEffect(() => {
    if (animationStates.isTextVisible) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 3500); // Show after headline completes
      
      return () => clearTimeout(timer);
    }
  }, [animationStates.isTextVisible]);

  // Button text typing animation
  const buttonText = useTypingAnimation({
    text: "Find My Skin Protocol",
    speed: 80,
    delay: showButton ? 500 : 9999,
    showCursor: false
  });

  return (
    <div 
      className={`transition-all duration-1000 ${
        showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{
        transform: `scale(${1 + cursorProximity * 0.01})`,
      }}
    >
      <Button
        className="dermaagent-button px-8 py-4 text-base rounded-lg transition-all duration-500 
          hover:scale-105 active:scale-95"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: '300',
          letterSpacing: '0.02em',
          background: 'var(--dermaagent-pale-paper-white)',
          border: '1px solid var(--dermaagent-light-gray)',
          color: 'var(--dermaagent-graphite-black)',
          boxShadow: '0 1px 3px rgba(26, 26, 26, 0.03)',
          minWidth: '200px',
          minHeight: '56px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--dermaagent-light-gray)';
          e.currentTarget.style.borderColor = 'var(--dermaagent-muted-mid-gray)';
          e.currentTarget.style.boxShadow = '0 2px 6px rgba(26, 26, 26, 0.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--dermaagent-pale-paper-white)';
          e.currentTarget.style.borderColor = 'var(--dermaagent-light-gray)';
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(26, 26, 26, 0.03)';
        }}
      >
        {buttonText.displayedText || "\u00A0"}
      </Button>
    </div>
  );
};

export default TypingCallToAction;
