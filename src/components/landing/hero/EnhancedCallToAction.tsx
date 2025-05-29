
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
        className="enhanced-cta-button px-8 py-3 text-base relative overflow-hidden interactive"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: '300',
          letterSpacing: '0.05em',
          borderRadius: '2px',
          minWidth: '200px',
          minHeight: '48px',
          background: 'var(--dermaagent-pale-paper-white, #FFFFFF)',
          border: '2px solid var(--dermaagent-charcoal-gray, #333333)',
          color: 'var(--dermaagent-graphite-black, #1A1A1A)',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {buttonText.displayedText || "\u00A0"}
        
        <style jsx>{`
          .enhanced-cta-button {
            position: relative;
            isolation: isolate;
          }
          
          /* Subtle frame motion on hover - border thickening and slight scale */
          .enhanced-cta-button:hover {
            border-width: 3px;
            transform: translateY(-1px) scale(1.02);
            box-shadow: 0 4px 12px rgba(26, 26, 26, 0.08);
          }
          
          /* Click/Active state - subtle press effect */
          .enhanced-cta-button:active {
            transform: translateY(0) scale(1.01);
            border-width: 2px;
            box-shadow: 0 2px 8px rgba(26, 26, 26, 0.06);
            transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          /* Focus state for accessibility */
          .enhanced-cta-button:focus {
            outline: none;
            border-width: 3px;
            box-shadow: 0 0 0 1px rgba(26, 26, 26, 0.1);
          }
          
          /* Subtle inner shadow for depth on interaction */
          .enhanced-cta-button:hover::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            box-shadow: inset 0 1px 2px rgba(26, 26, 26, 0.03);
            pointer-events: none;
            opacity: 1;
            transition: opacity 0.35s ease;
          }
          
          .enhanced-cta-button::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            box-shadow: inset 0 1px 2px rgba(26, 26, 26, 0.03);
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.35s ease;
          }
          
          /* Maintain text clarity and contrast */
          .enhanced-cta-button:hover,
          .enhanced-cta-button:focus,
          .enhanced-cta-button:active {
            background: var(--dermaagent-pale-paper-white, #FFFFFF) !important;
            color: var(--dermaagent-graphite-black, #1A1A1A) !important;
            border-color: var(--dermaagent-graphite-black, #1A1A1A) !important;
          }
          
          /* Smooth transitions for all states */
          .enhanced-cta-button,
          .enhanced-cta-button::before {
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          /* Ensure proper cursor interaction */
          .enhanced-cta-button {
            cursor: none; /* Let custom cursor handle this */
          }
        `}</style>
      </Button>
    </div>
  );
};

export default EnhancedCallToAction;
