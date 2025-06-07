
import React, { useState, useEffect } from 'react';

interface TypingTitleProps {
  isVisible: boolean;
}

const TypingTitle: React.FC<TypingTitleProps> = ({ isVisible }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const targetText = 'dermo.agent';
  
  useEffect(() => {
    if (!isVisible) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setDisplayText(targetText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [isVisible]);
  
  return (
    <div className="text-center mb-8">
      <h1 
        className={`text-5xl md:text-7xl font-light tracking-widest transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{
          fontFamily: 'var(--dermoagent-primary-font)',
          fontWeight: 'var(--dermoagent-logo-weight)',
          letterSpacing: 'var(--dermoagent-letter-spacing-logo)',
          color: 'var(--dermoagent-pale-black)'
        }}
      >
        {displayText}
        {!isTypingComplete && (
          <span className="animate-pulse text-dermoagent-deep-purple">|</span>
        )}
      </h1>
      
      <div className={`mt-4 transition-all duration-1000 delay-500 ${
        isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        <p 
          className="text-lg md:text-xl text-dermoagent-dark-cool-grey tracking-wide"
          style={{
            fontFamily: 'var(--dermoagent-primary-font)',
            letterSpacing: 'var(--dermoagent-letter-spacing-heading)'
          }}
        >
          Personalized Skincare Intelligence
        </p>
      </div>
    </div>
  );
};

export default TypingTitle;
