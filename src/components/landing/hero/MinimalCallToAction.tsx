
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

interface MinimalCallToActionProps {
  isVisible: boolean;
}

const MinimalCallToAction = ({ isVisible }: MinimalCallToActionProps) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Typing animation for button text
  const buttonText = useTypingAnimation({
    text: "Begin Skin Analysis",
    speed: 80,
    delay: showButton ? 500 : 9999,
    showCursor: true,
    cursorBlinkCount: 3
  });

  // Typing animation for subtitle
  const subtitleText = useTypingAnimation({
    text: "AI-powered skincare intelligence",
    speed: 60,
    delay: showButton ? 2000 : 9999,
    showCursor: true,
    cursorBlinkCount: 2
  });

  return (
    <div 
      className={`text-center transition-all duration-1000 ${
        showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <Button
        className="px-8 py-4 text-base rounded-none transition-all duration-300 
          hover:scale-105 active:scale-95"
        style={{
          fontFamily: 'var(--beautyagent-primary-font)',
          fontWeight: 'var(--beautyagent-body-weight)',
          letterSpacing: 'var(--beautyagent-letter-spacing-body)',
          background: 'transparent',
          border: '1px solid var(--beautyagent-light-gray)',
          color: 'var(--beautyagent-graphite-black)',
          boxShadow: 'none',
          minWidth: '280px',
          minHeight: '56px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--beautyagent-light-gray)';
          e.currentTarget.style.borderColor = 'var(--beautyagent-charcoal-gray)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = 'var(--beautyagent-light-gray)';
        }}
      >
        {buttonText.displayedText}
        {buttonText.showTypingCursor && (
          <span 
            className="animate-pulse ml-1"
            style={{
              color: 'var(--beautyagent-charcoal-gray)',
            }}
          >
            |
          </span>
        )}
      </Button>
      
      {/* Typing subtitle with cursor */}
      <p 
        className="mt-6 text-sm"
        style={{
          fontFamily: 'var(--beautyagent-primary-font)',
          fontWeight: 'var(--beautyagent-body-weight)',
          color: 'var(--beautyagent-charcoal-gray)',
          letterSpacing: 'var(--beautyagent-letter-spacing-body)',
          minHeight: '1.5em',
          opacity: subtitleText.displayedText ? 0.8 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      >
        {subtitleText.displayedText}
        {subtitleText.showTypingCursor && (
          <span 
            className="animate-pulse ml-1"
            style={{
              color: 'var(--beautyagent-charcoal-gray)',
            }}
          >
            |
          </span>
        )}
      </p>
    </div>
  );
};

export default MinimalCallToAction;
