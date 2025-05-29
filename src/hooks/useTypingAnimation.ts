
import { useState, useEffect, useRef } from 'react';

interface TypingAnimationOptions {
  text: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  cursorBlinkCount?: number;
  onComplete?: () => void;
}

export const useTypingAnimation = ({
  text,
  speed = 60,
  delay = 0,
  showCursor = true,
  cursorBlinkCount = 3,
  onComplete
}: TypingAnimationOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTypingCursor, setShowTypingCursor] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  
  const indexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const cursorTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Prevent re-execution if animation has already started
    if (!text || hasStarted) return;

    const startTyping = () => {
      setHasStarted(true); // Mark as started to prevent re-execution
      setIsTyping(true);
      setShowTypingCursor(showCursor);
      
      const typeNextCharacter = () => {
        if (indexRef.current < text.length) {
          setDisplayedText(text.slice(0, indexRef.current + 1));
          indexRef.current++;
          timeoutRef.current = setTimeout(typeNextCharacter, speed);
        } else {
          // Typing complete
          setIsTyping(false);
          
          if (showCursor && cursorBlinkCount > 0) {
            let blinkCount = 0;
            const blinkCursor = () => {
              if (blinkCount < cursorBlinkCount * 2) {
                setShowTypingCursor(prev => !prev);
                blinkCount++;
                cursorTimeoutRef.current = setTimeout(blinkCursor, 400);
              } else {
                // Animation fully complete - cursor fades out permanently
                setShowTypingCursor(false);
                setIsComplete(true);
                onComplete?.();
              }
            };
            blinkCursor();
          } else {
            setIsComplete(true);
            onComplete?.();
          }
        }
      };

      timeoutRef.current = setTimeout(typeNextCharacter, speed);
    };

    // Start animation only once after delay
    if (delay === 0) {
      startTyping();
    } else if (delay < 9999) { // 9999 is our "don't start" signal
      const delayTimer = setTimeout(startTyping, delay);
      return () => clearTimeout(delayTimer);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (cursorTimeoutRef.current) clearTimeout(cursorTimeoutRef.current);
    };
  }, [text, speed, delay, showCursor, cursorBlinkCount, onComplete, hasStarted]);

  return {
    displayedText,
    isTyping,
    showTypingCursor,
    isComplete
  };
};
