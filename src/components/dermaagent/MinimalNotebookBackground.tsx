
import React from 'react';

type MinimalNotebookBackgroundProps = {
  isVisible: boolean;
  intensity?: 'subtle' | 'medium' | 'enhanced';
  variant?: 'notebook-grid' | 'cellular-texture' | 'organic-flow';
  showCellularMotion?: boolean;
};

const MinimalNotebookBackground: React.FC<MinimalNotebookBackgroundProps> = ({
  isVisible,
  intensity = 'subtle',
  variant = 'cellular-texture',
  showCellularMotion = true
}) => {
  const getOpacityByIntensity = () => {
    switch (intensity) {
      case 'subtle':
        return 0.015;
      case 'medium':
        return 0.025;
      case 'enhanced':
        return 0.035;
      default:
        return 0.015;
    }
  };

  const getPatternByVariant = () => {
    switch (variant) {
      case 'notebook-grid':
        return {
          background: `
            linear-gradient(var(--dermaagent-notebook-lines) 0.5px, transparent 0.5px),
            linear-gradient(90deg, var(--dermaagent-notebook-lines) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '40px 40px',
        };
      case 'cellular-texture':
        return {
          background: 'var(--dermaagent-cellular-texture)',
          backgroundSize: '160px 160px',
        };
      case 'organic-flow':
        return {
          background: `radial-gradient(circle at 30% 30%, var(--dermaagent-cellular-beige) 0%, transparent 45%),
                      radial-gradient(circle at 70% 70%, var(--dermaagent-cellular-blue) 0%, transparent 40%),
                      radial-gradient(circle at 50% 85%, var(--dermaagent-cellular-ambient) 0%, transparent 35%)`,
          backgroundSize: '240px 240px, 200px 200px, 180px 180px',
        };
      default:
        return {
          background: 'var(--dermaagent-cellular-texture)',
          backgroundSize: '160px 160px',
        };
    }
  };

  const patternStyle = getPatternByVariant();

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: isVisible ? getOpacityByIntensity() : 0,
        transition: 'opacity 4s ease-out',
        ...patternStyle,
      }}
    >
      {/* Refined cellular motion overlay - ultra subtle */}
      {showCellularMotion && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating cellular elements - minimal and refined */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`cellular-${i}`}
              className="absolute rounded-full animate-cellular-drift"
              style={{
                width: `${Math.random() * 30 + 25}px`,
                height: `${Math.random() * 30 + 25}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  i % 3 === 0 
                    ? 'var(--dermaagent-cellular-beige)' 
                    : i % 3 === 1 
                      ? 'var(--dermaagent-cellular-blue)' 
                      : 'var(--dermaagent-cellular-ambient)'
                } 0%, transparent 70%)`,
                animationDelay: `${i * 4}s`,
                animationDuration: `${35 + i * 5}s`,
                filter: 'blur(3px)',
              }}
            />
          ))}
          
          {/* Ultra-subtle atmospheric gradient */}
          <div 
            className="absolute inset-0 animate-cellular-morph"
            style={{
              background: `conic-gradient(from 0deg at 40% 50%, 
                var(--dermaagent-cellular-beige) 0deg, 
                transparent 100deg, 
                var(--dermaagent-cellular-blue) 180deg, 
                transparent 280deg, 
                var(--dermaagent-cellular-ambient) 320deg, 
                transparent 360deg)`,
              filter: 'blur(6px)',
              opacity: 0.25,
              animationDuration: '60s',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MinimalNotebookBackground;
