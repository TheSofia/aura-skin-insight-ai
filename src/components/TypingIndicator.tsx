
import React from 'react';

type TypingIndicatorProps = {
  visible: boolean;
};

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ visible }) => {
  if (!visible) return null;
  
  return (
    <div className="flex justify-center -mt-8 mb-8 opacity-60">
      <div className="typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default TypingIndicator;
