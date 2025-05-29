
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

interface EnhancedCallToActionProps {
  isVisible: boolean;
}

const EnhancedCallToAction = ({ isVisible }: EnhancedCallToActionProps) => {
  const [showButton, setShowButton] = useState(false);

  // Start button animation after title completes
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 4500); // Show after title animations complete
      
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Button text typing animation
  const buttonText = useTypingAnimation({
    text: "Begin Skin Analysis",
    speed: 70,
    delay: showButton ? 500 : 9999,
    showCursor: false
  });

  return (
    <div 
      className={`transition-all duration-1000 ${
        showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <Button
        className="dermaagent-elegant-button dermaagent-box-element hover-target px-8 py-3 text-base"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: '300',
          letterSpacing: '0.05em',
          borderRadius: '2px',
          minWidth: '200px',
          minHeight: '48px'
        }}
      >
        {buttonText.displayedText || "\u00A0"}
      </Button>
    </div>
  );
};

export default EnhancedCallToAction;
