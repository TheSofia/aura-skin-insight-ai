
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
      {/* Main Headline - Pure Monochrome IBM Plex Mono */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">
        {/* "DISCOVER" - Medium weight */}
        <span 
          className="block dermaagent-headline-light"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: '400',
            letterSpacing: '0.08em',
            lineHeight: '1.1',
            minHeight: '1.2em',
            color: 'var(--dermaagent-charcoal-gray)',
            textTransform: 'uppercase'
          }}
        >
          {firstLine.displayedText}
          {firstLine.showTypingCursor && (
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
        </span>
        
        {/* "YOUR BEST VERSION" - Bold weight */}
        <span 
          className="block dermaagent-headline"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: '500',
            letterSpacing: '0.08em',
            lineHeight: '1.1',
            marginTop: '0.5rem',
            minHeight: '1.2em',
            color: 'var(--dermaagent-graphite-black)',
            textTransform: 'uppercase'
          }}
        >
          {secondLine.displayedText}
          {secondLine.showTypingCursor && (
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
        </span>
      </h1>
      
      {/* Subtitle - Regular weight */}
      <p 
        className="text-lg md:text-xl dermaagent-ui-text"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: '300',
          letterSpacing: '0.02em',
          minHeight: '1.5em',
          opacity: subtitle.displayedText ? 0.7 : 0,
          transition: 'opacity 0.3s ease-out',
          color: 'var(--dermaagent-graphite-black)'
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

export default TypingHeadline;
