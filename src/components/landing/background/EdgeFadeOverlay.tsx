
import React from 'react';

const EdgeFadeOverlay: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse at center, 
          transparent 30%, 
          rgba(253, 253, 253, 0.05) 60%, 
          rgba(253, 253, 253, 0.15) 85%, 
          rgba(253, 253, 253, 0.25) 100%)`,
      }}
    />
  );
};

export default EdgeFadeOverlay;
