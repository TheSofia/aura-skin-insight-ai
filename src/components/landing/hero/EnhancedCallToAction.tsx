
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
        className="enhanced-cta-button px-8 py-3 text-base relative overflow-hidden"
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
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {buttonText.displayedText || "\u00A0"}
        
        {/* Underline effect */}
        <span 
          className="absolute bottom-0 left-1/2 h-0.5 bg-current transform -translate-x-1/2 transition-all duration-300 ease-out"
          style={{
            width: '0%',
            background: '#6A5ACD',
          }}
        />
        
        <style jsx>{`
          .enhanced-cta-button::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            width: 0;
            height: 2px;
            background: #6A5ACD;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            transform: translateX(-50%);
          }
          
          .enhanced-cta-button:hover {
            background: linear-gradient(135deg, #6A5ACD 0%, #7B68EE 100%) !important;
            color: white !important;
            border-color: #6A5ACD !important;
            box-shadow: 0 6px 20px rgba(106, 90, 205, 0.25);
            transform: translateY(-2px) scale(1.02);
          }
          
          .enhanced-cta-button:hover::after {
            width: 90%;
            background: rgba(255, 255, 255, 0.8);
          }
          
          .enhanced-cta-button:active {
            transform: translateY(0) scale(1.01);
            box-shadow: 0 4px 15px rgba(106, 90, 205, 0.3);
            background: linear-gradient(135deg, #5B4B9D 0%, #6A5ACD 100%) !important;
          }
          
          .enhanced-cta-button:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(106, 90, 205, 0.3);
          }
        `}</style>
      </Button>
    </div>
  );
};

export default EnhancedCallToAction;
