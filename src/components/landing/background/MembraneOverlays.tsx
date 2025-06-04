
import React from 'react';

const MembraneOverlays: React.FC = () => {
  return (
    <>
      {/* Primary cellular membrane layer with organic gradients */}
      <div 
        className="absolute inset-0 animate-cellular-respiration"
        style={{
          background: `
            radial-gradient(ellipse 800px 600px at 25% 35%, 
              rgba(255, 255, 255, 0.08) 0%, 
              rgba(248, 250, 252, 0.04) 30%, 
              transparent 60%
            ),
            radial-gradient(ellipse 600px 800px at 75% 65%, 
              rgba(124, 58, 237, 0.02) 0%, 
              rgba(139, 92, 246, 0.015) 25%, 
              transparent 50%
            )
          `,
          animationDuration: '50s',
          zIndex: 1
        }}
      />
      
      {/* Secondary organic flow layer with enhanced cellular movement */}
      <div 
        className="absolute inset-0 animate-cellular-morph-advanced"
        style={{
          background: `
            conic-gradient(from 45deg at 40% 30%, 
              transparent 0deg, 
              rgba(255, 119, 69, 0.015) 90deg, 
              rgba(255, 255, 255, 0.03) 180deg, 
              rgba(139, 92, 246, 0.01) 270deg, 
              transparent 360deg
            )
          `,
          animationDuration: '70s',
          zIndex: 1
        }}
      />
      
      {/* Tertiary cellular cluster layer for depth */}
      <div 
        className="absolute inset-0 animate-membrane-fluctuation"
        style={{
          background: `
            radial-gradient(ellipse 1000px 400px at 60% 20%, 
              rgba(241, 245, 249, 0.06) 0%, 
              rgba(226, 232, 240, 0.03) 40%, 
              transparent 70%
            ),
            radial-gradient(ellipse 400px 900px at 20% 80%, 
              rgba(255, 119, 69, 0.008) 0%, 
              rgba(251, 146, 60, 0.005) 35%, 
              transparent 65%
            )
          `,
          animationDuration: '85s',
          zIndex: 1
        }}
      />
      
      {/* Advanced cellular network overlay */}
      <div 
        className="absolute inset-0 animate-cellular-cluster-interaction"
        style={{
          background: `
            linear-gradient(135deg, 
              transparent 0%, 
              rgba(255, 255, 255, 0.02) 25%, 
              rgba(124, 58, 237, 0.008) 50%, 
              rgba(255, 255, 255, 0.015) 75%, 
              transparent 100%
            )
          `,
          animationDuration: '95s',
          zIndex: 1
        }}
      />
      
      {/* Subtle cellular membrane texture */}
      <div 
        className="absolute inset-0 animate-cellular-division"
        style={{
          background: `
            repeating-conic-gradient(from 0deg at 50% 50%, 
              transparent 0deg, 
              rgba(255, 255, 255, 0.005) 30deg, 
              transparent 60deg, 
              rgba(139, 92, 246, 0.003) 90deg, 
              transparent 120deg
            )
          `,
          animationDuration: '120s',
          zIndex: 1
        }}
      />
    </>
  );
};

export default MembraneOverlays;
