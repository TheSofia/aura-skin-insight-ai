
import React, { useState } from "react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

interface TypingHeadlineProps {
  animationStates: {
    isTextVisible: boolean;
  };
  cursorProximity: number;
  headlineRef: React.RefObject<HTMLDivElement>;
}

const TypingHeadline = ({ animationStates, cursorProximity, headlineRef }: TypingHeadlineProps) => {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  // First line typing animation
  const firstLine = useTypingAnimation({
    text: "DISCOVER",
    speed: 70,
    delay: animationStates.isTextVisible ? 200 : 9999,
    showCursor: true,
    cursorBlinkCount: 2,
    onComplete: () => {
      setTimeout(() => setShowSecondLine(true), 300);
    }
  });

  // Second line typing animation
  const secondLine = useTypingAnimation({
    text: "YOUR BEST VERSION",
    speed: 65,
    delay: showSecondLine ? 0 : 9999,
    showCursor: true,
    cursorBlinkCount: 2,
    onComplete: () => {
      setTimeout(() => setShowSubtitle(true), 500);
    }
  });

  // Subtitle typing animation
  const subtitle = useTypingAnimation({
    text: "AI-powered skincare intelligence",
    speed: 55,
    delay: showSubtitle ? 0 : 9999,
    showCursor: true,
    cursorBlinkCount: 3
  });

  return (
    <div 
      ref={headlineRef}
      className="text-center mb-12 relative"
      style={{
        transform: `scale(${1 + cursorProximity * 0.015})`,
        transition: 'transform 0.4s ease-out',
      }}
    >
      {/* Main Headline - Typing Animation */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">
        {/* "DISCOVER" - Light gray typewriter style with typing */}
        <span 
          className="block dermaagent-headline-light"
          style={{
            lineHeight: '1.1',
            minHeight: '1.2em',
          }}
        >
          {firstLine.displayedText}
          {firstLine.showTypingCursor && (
            <span 
              className="animate-pulse"
              style={{
                color: 'var(--dermaagent-soft-olive)',
                marginLeft: '2px'
              }}
            >
              |
            </span>
          )}
        </span>
        
        {/* "YOUR BEST VERSION" - Strong contrast UI font with typing */}
        <span 
          className="block dermaagent-ui-text-medium"
          style={{
            lineHeight: '1.1',
            marginTop: '0.5rem',
            minHeight: '1.2em',
          }}
        >
          {secondLine.displayedText}
          {secondLine.showTypingCursor && (
            <span 
              className="animate-pulse"
              style={{
                color: 'var(--dermaagent-soft-olive)',
                marginLeft: '2px'
              }}
            >
              |
            </span>
          )}
        </span>
      </h1>
      
      {/* Subtitle with typing animation */}
      <p 
        className="text-lg md:text-xl dermaagent-ui-text"
        style={{
          fontWeight: '300',
          letterSpacing: '0.01em',
          minHeight: '1.5em',
          opacity: subtitle.displayedText ? 0.7 : 0,
          transition: 'opacity 0.3s ease-out'
        }}
      >
        {subtitle.displayedText}
        {subtitle.showTypingCursor && (
          <span 
            className="animate-pulse"
            style={{
              color: 'var(--dermaagent-soft-olive)',
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

export default TypingHeadline;
