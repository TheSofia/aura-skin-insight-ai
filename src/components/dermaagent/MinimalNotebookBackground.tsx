
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
        return 0.008;
      case 'medium':
        return 0.015;
      case 'enhanced':
        return 0.025;
      default:
        return 0.008;
    }
  };

  const getPatternByVariant = () => {
    switch (variant) {
      case 'notebook-grid':
        return {
          background: `
            linear-gradient(var(--dermaagent-light-gray) 0.5px, transparent 0.5px),
            linear-gradient(90deg, var(--dermaagent-light-gray) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '40px 40px',
        };
      case 'cellular-texture':
        return {
          background: 'transparent',
          backgroundSize: '200px 200px',
        };
      case 'organic-flow':
        return {
          background: `radial-gradient(circle at 35% 35%, var(--dermaagent-cellular-ambient) 0%, transparent 50%),
                      radial-gradient(circle at 65% 65%, var(--dermaagent-cellular-soft) 0%, transparent 45%)`,
          backgroundSize: '300px 300px, 250px 250px',
        };
      default:
        return {
          background: 'transparent',
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
        transition: 'opacity 3s ease-out',
        ...patternStyle,
      }}
    >
      {/* Ultra-refined cellular motion overlay - completely clean and subtle */}
      {showCellularMotion && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Minimal floating cellular elements - pristine and elegant */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`cellular-${i}`}
              className="absolute rounded-full animate-cellular-background-drift"
              style={{
                width: `${Math.random() * 25 + 20}px`,
                height: `${Math.random() * 25 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  i % 2 === 0 
                    ? 'var(--dermaagent-cellular-ambient)' 
                    : 'var(--dermaagent-cellular-soft)'
                } 0%, transparent 80%)`,
                animationDelay: `${i * 6}s`,
                animationDuration: `${45 + i * 8}s`,
                filter: 'blur(4px)',
              }}
            />
          ))}
          
          {/* Ultra-subtle atmospheric gradient - completely clean */}
          <div 
            className="absolute inset-0 animate-cellular-drift-ultra-slow"
            style={{
              background: `conic-gradient(from 0deg at 45% 55%, 
                var(--dermaagent-cellular-ambient) 0deg, 
                transparent 120deg, 
                var(--dermaagent-cellular-soft) 200deg, 
                transparent 300deg, 
                var(--dermaagent-cellular-ambient) 340deg, 
                transparent 360deg)`,
              filter: 'blur(8px)',
              opacity: 0.15,
              animationDuration: '80s',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MinimalNotebookBackground;
