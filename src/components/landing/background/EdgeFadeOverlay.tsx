
import React from 'react';

const EdgeFadeOverlay: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse at center, 
          transparent 25%, 
          rgba(253, 253, 253, 0.03) 50%, 
          rgba(253, 253, 253, 0.08) 75%, 
          rgba(253, 253, 253, 0.15) 90%, 
          rgba(253, 253, 253, 0.25) 100%)`,
      }}
    />
  );
};

export default EdgeFadeOverlay;
