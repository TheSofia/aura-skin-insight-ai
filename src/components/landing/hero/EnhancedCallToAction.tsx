
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
          border: '1px solid var(--dermaagent-charcoal-gray, #333333)',
          color: 'var(--dermaagent-graphite-black, #1A1A1A)',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 0 0 0 rgba(26, 26, 26, 0)',
        }}
      >
        {buttonText.displayedText || "\u00A0"}
        
        <style jsx>{`
          .enhanced-cta-button {
            position: relative;
            isolation: isolate;
          }
          
          /* Soft blurred frame effect on hover - subtle outer glow */
          .enhanced-cta-button:hover {
            box-shadow: 0 0 12px 2px rgba(26, 26, 26, 0.15);
            border-color: var(--dermaagent-graphite-black, #1A1A1A);
          }
          
          /* Focus state for accessibility - similar soft glow */
          .enhanced-cta-button:focus {
            outline: none;
            box-shadow: 0 0 12px 2px rgba(26, 26, 26, 0.18);
            border-color: var(--dermaagent-graphite-black, #1A1A1A);
          }
          
          /* Click/Active state - slightly intensified glow */
          .enhanced-cta-button:active {
            box-shadow: 0 0 8px 1px rgba(26, 26, 26, 0.12);
            transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          /* Maintain clean appearance and contrast */
          .enhanced-cta-button:hover,
          .enhanced-cta-button:focus,
          .enhanced-cta-button:active {
            background: var(--dermaagent-pale-paper-white, #FFFFFF) !important;
            color: var(--dermaagent-graphite-black, #1A1A1A) !important;
          }
          
          /* Smooth transitions for all states */
          .enhanced-cta-button {
            transition: box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                        border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1);
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
