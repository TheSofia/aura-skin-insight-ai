
import React, { useState } from "react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

interface TypingTitleProps {
  isVisible: boolean;
}

const TypingTitle = ({ isVisible }: TypingTitleProps) => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [logoComplete, setLogoComplete] = useState(false);
  const [subtitleComplete, setSubtitleComplete] = useState(false);

  // Logo typing animation - ONE TIME ONLY
  const logoText = useTypingAnimation({
    text: "derma.agent",
    speed: 100,
    delay: isVisible ? 500 : 9999,
    showCursor: true,
    cursorBlinkCount: 2,
    onComplete: () => {
      setLogoComplete(true);
      // Start subtitle animation after logo completes
      const timer = setTimeout(() => {
        setShowSubtitle(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  });

  // Subtitle typing animation - ONE TIME ONLY
  const subtitle = useTypingAnimation({
    text: "AI-powered skincare intelligence",
    speed: 75,
    delay: showSubtitle ? 0 : 9999,
    showCursor: true,
    cursorBlinkCount: 3,
    onComplete: () => {
      setSubtitleComplete(true);
    }
  });

  return (
    <div className="text-center mb-12">
      {/* Main Title - With ONE-TIME typing animation */}
      <h1 
        className="text-3xl md:text-4xl lg:text-5xl mb-6"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: '300',
          letterSpacing: '0.15em',
          color: 'var(--dermaagent-graphite-black)',
          minHeight: '1.2em'
        }}
      >
        {/* Show either the typing animation OR the final static text */}
        {logoComplete ? "derma.agent" : logoText.displayedText}
        {/* Show cursor only during typing, fade out when complete */}
        {logoText.showTypingCursor && !logoComplete && (
          <span 
            className="animate-pulse"
            style={{
              color: 'var(--dermaagent-muted-mid-gray)',
              marginLeft: '2px'
            }}
          >
            |
          </span>
        )}
      </h1>
      
      {/* Subtitle - With ONE-TIME typing animation */}
      <p 
        className="text-lg md:text-xl"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: '300',
          letterSpacing: '0.02em',
          color: 'var(--dermaagent-charcoal-gray)',
          opacity: (subtitle.displayedText || subtitleComplete) ? 0.8 : 0,
          transition: 'opacity 0.3s ease-out',
          minHeight: '1.5em'
        }}
      >
        {/* Show either the typing animation OR the final static text */}
        {subtitleComplete ? "AI-powered skincare intelligence" : subtitle.displayedText}
        {/* Show cursor only during typing, fade out when complete */}
        {subtitle.showTypingCursor && !subtitleComplete && (
          <span 
            className="animate-pulse"
            style={{
              color: 'var(--dermaagent-muted-mid-gray)',
              marginLeft: '2px'
            }}
          >
            |
          </span>
        )}
      </p>
    </div>
  );
};

export default TypingTitle;
