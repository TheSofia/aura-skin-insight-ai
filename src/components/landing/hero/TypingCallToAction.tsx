
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
          background: 'var(--dermaagent-muted-dusty-beige)',
          border: '1px solid var(--dermaagent-glass-border)',
          color: 'var(--dermaagent-graphite-black)',
          fontFamily: "'DermaAgent UI', 'Aeonik', 'Inter', system-ui, sans-serif",
          fontWeight: '300',
          letterSpacing: '0.01em',
          boxShadow: '0 2px 8px var(--dermaagent-glass-shadow)',
          minWidth: '200px',
          minHeight: '56px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--dermaagent-soft-olive)';
          e.currentTarget.style.borderColor = 'var(--dermaagent-soft-olive)';
          e.currentTarget.style.boxShadow = '0 4px 16px var(--dermaagent-glass-shadow), 0 0 0 1px var(--dermaagent-soft-olive)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--dermaagent-graphite-black)';
          e.currentTarget.style.borderColor = 'var(--dermaagent-glass-border)';
          e.currentTarget.style.boxShadow = '0 2px 8px var(--dermaagent-glass-shadow)';
        }}
      >
        {buttonText.displayedText || "\u00A0"} {/* Non-breaking space to maintain button height */}
      </Button>
    </div>
  );
};

export default TypingCallToAction;
