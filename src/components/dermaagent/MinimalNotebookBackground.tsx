
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
        return 0.02;
      case 'medium':
        return 0.04;
      case 'enhanced':
        return 0.06;
      default:
        return 0.02;
    }
  };

  const getPatternByVariant = () => {
    switch (variant) {
      case 'notebook-grid':
        return {
          background: `
            linear-gradient(var(--dermaagent-ruling-line) 0.5px, transparent 0.5px),
            linear-gradient(90deg, var(--dermaagent-ruling-line) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '24px 24px',
        };
      case 'cellular-texture':
        return {
          background: 'var(--dermaagent-cellular-texture)',
          backgroundSize: '180px 180px',
        };
      case 'organic-flow':
        return {
          background: `radial-gradient(circle at 30% 30%, var(--dermaagent-cellular-beige) 0%, transparent 40%),
                      radial-gradient(circle at 70% 70%, var(--dermaagent-cellular-emerald) 0%, transparent 35%),
                      radial-gradient(circle at 50% 85%, var(--dermaagent-cellular-soft) 0%, transparent 30%)`,
          backgroundSize: '280px 280px, 240px 240px, 200px 200px',
        };
      default:
        return {
          background: 'var(--dermaagent-cellular-texture)',
          backgroundSize: '180px 180px',
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
      {/* Ambient cellular motion overlay - very subtle */}
      {showCellularMotion && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating cellular elements - minimal and elegant */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`cellular-${i}`}
              className="absolute rounded-full animate-cellular-drift"
              style={{
                width: `${Math.random() * 40 + 30}px`,
                height: `${Math.random() * 40 + 30}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${
                  i % 3 === 0 
                    ? 'var(--dermaagent-cellular-beige)' 
                    : i % 3 === 1 
                      ? 'var(--dermaagent-cellular-emerald)' 
                      : 'var(--dermaagent-cellular-soft)'
                } 0%, transparent 70%)`,
                animationDelay: `${i * 3}s`,
                animationDuration: `${25 + i * 4}s`,
                filter: 'blur(2px)',
              }}
            />
          ))}
          
          {/* Subtle atmospheric gradient */}
          <div 
            className="absolute inset-0 animate-cellular-morph"
            style={{
              background: `conic-gradient(from 0deg at 35% 45%, 
                var(--dermaagent-cellular-beige) 0deg, 
                transparent 80deg, 
                var(--dermaagent-cellular-emerald) 160deg, 
                transparent 240deg, 
                var(--dermaagent-cellular-soft) 300deg, 
                transparent 360deg)`,
              filter: 'blur(4px)',
              opacity: 0.3,
              animationDuration: '50s',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MinimalNotebookBackground;
