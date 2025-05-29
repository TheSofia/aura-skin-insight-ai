
import React, { useState } from "react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

interface TypingTitleProps {
  isVisible: boolean;
}

const TypingTitle = ({ isVisible }: TypingTitleProps) => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  // Main title typing animation
  const mainTitle = useTypingAnimation({
    text: "dermaAgent",
    speed: 80,
    delay: isVisible ? 500 : 9999,
    showCursor: true,
    cursorBlinkCount: 2,
    onComplete: () => {
      setTimeout(() => setShowSubtitle(true), 600);
    }
  });

  // Subtitle typing animation
  const subtitle = useTypingAnimation({
    text: "AI-powered skincare intelligence",
    speed: 60,
    delay: showSubtitle ? 0 : 9999,
    showCursor: true,
    cursorBlinkCount: 3
  });

  return (
    <div className="text-center mb-12">
      {/* Main Title */}
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
        {mainTitle.displayedText}
        {mainTitle.showTypingCursor && (
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
      
      {/* Subtitle */}
      <p 
        className="text-lg md:text-xl"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: '300',
          letterSpacing: '0.02em',
          color: 'var(--dermaagent-charcoal-gray)',
          opacity: subtitle.displayedText ? 0.8 : 0,
          transition: 'opacity 0.3s ease-out',
          minHeight: '1.5em'
        }}
      >
        {subtitle.displayedText}
        {subtitle.showTypingCursor && (
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
