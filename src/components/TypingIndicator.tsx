
import React, { useEffect, useState } from 'react';

type TypingIndicatorProps = {
  visible: boolean;
  message?: string;
};

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ visible, message = "Thinking" }) => {
  const [isMounted, setIsMounted] = useState(false);

  // Add mount animation effect
  useEffect(() => {
    if (visible) {
      setIsMounted(true);
    } else {
      const timer = setTimeout(() => {
        setIsMounted(false);
      }, 300); // Delay unmount for exit animation
      
      return () => clearTimeout(timer);
    }
  }, [visible]);
  
  if (!isMounted && !visible) return null;

  return (
    <div 
      className={`typing-indicator ${visible ? 'typing-visible' : 'typing-hidden'}`}
      aria-live="polite"
      aria-label="BeautyAgent is thinking"
    >
      {message && <span className="typing-text">{message}</span>}
      <span className="typing-dot"></span>
      <span className="typing-dot"></span>
      <span className="typing-dot"></span>
    </div>
  );
};

export default TypingIndicator;
