
import React from 'react';

type CellularBackgroundTextureProps = {
  isVisible: boolean;
  intensity?: 'subtle' | 'medium' | 'enhanced';
  variant?: 'graph-paper' | 'microstructure' | 'organic';
};

const CellularBackgroundTexture: React.FC<CellularBackgroundTextureProps> = ({
  isVisible,
  intensity = 'subtle',
  variant = 'microstructure'
}) => {
  const getOpacityByIntensity = () => {
    switch (intensity) {
      case 'subtle':
        return 0.03;
      case 'medium':
        return 0.05;
      case 'enhanced':
        return 0.08;
      default:
        return 0.03;
    }
  };

  const getPatternByVariant = () => {
    switch (variant) {
      case 'graph-paper':
        return {
          background: `
            linear-gradient(var(--dermaagent-light-gray) 1px, transparent 1px),
            linear-gradient(90deg, var(--dermaagent-light-gray) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        };
      case 'microstructure':
        return {
          background: 'var(--dermaagent-cellular-texture)',
          backgroundSize: '200px 200px',
        };
      case 'organic':
        return {
          background: `radial-gradient(circle at 25% 25%, var(--dermaagent-cellular-amber) 0%, transparent 50%),
                      radial-gradient(circle at 75% 75%, var(--dermaagent-cellular-emerald) 0%, transparent 50%),
                      radial-gradient(circle at 50% 80%, var(--dermaagent-cellular-sapphire) 0%, transparent 40%)`,
          backgroundSize: '300px 300px, 250px 250px, 200px 200px',
        };
      default:
        return {
          background: 'var(--dermaagent-cellular-texture)',
          backgroundSize: '200px 200px',
        };
    }
  };

  const patternStyle = getPatternByVariant();

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: isVisible ? getOpacityByIntensity() : 0,
        transition: 'opacity 2s ease-out',
        ...patternStyle,
      }}
    >
      {/* Ambient cellular motion overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating cellular elements */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`cellular-${i}`}
            className="absolute rounded-full animate-cellular-drift"
            style={{
              width: `${Math.random() * 60 + 40}px`,
              height: `${Math.random() * 60 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 
                  ? 'var(--dermaagent-cellular-amber)' 
                  : i % 3 === 1 
                    ? 'var(--dermaagent-cellular-emerald)' 
                    : 'var(--dermaagent-cellular-sapphire)'
              } 0%, transparent 70%)`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${20 + i * 3}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}
        
        {/* Subtle light patterns */}
        <div 
          className="absolute inset-0 animate-cellular-morph"
          style={{
            background: `conic-gradient(from 0deg at 30% 40%, 
              var(--dermaagent-cellular-amber) 0deg, 
              transparent 60deg, 
              var(--dermaagent-cellular-emerald) 120deg, 
              transparent 180deg, 
              var(--dermaagent-cellular-sapphire) 240deg, 
              transparent 300deg)`,
            filter: 'blur(3px)',
            opacity: 0.4,
            animationDuration: '45s',
          }}
        />
      </div>
    </div>
  );
};

export default CellularBackgroundTexture;
