
import React, { useEffect, useState } from 'react';

interface SubtleCellularBackgroundProps {
  isVisible?: boolean;
}

const SubtleCellularBackground: React.FC<SubtleCellularBackgroundProps> = ({ 
  isVisible = true 
}) => {
  const [cellElements, setCellElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    duration: number;
    delay: number;
    color: 'white' | 'light-grey' | 'accent';
  }>>([]);

  useEffect(() => {
    // Generate subtle cellular particles with lab-like distribution
    const generateCells = () => {
      const cells = Array.from({ length: 28 }, (_, i) => {
        // Create natural distribution across the viewport
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Subtle size variation (very small particles)
        const size = 1.5 + Math.random() * 3; // 1.5-4.5px
        
        // Opacity variation for depth
        const opacity = 0.15 + Math.random() * 0.25; // 0.15-0.4
        
        // Slow, ambient animation timing
        const duration = 35 + Math.random() * 25; // 35-60 seconds
        const delay = Math.random() * 20; // 0-20 second delay
        
        // Color assignment - predominantly neutral with rare accents
        let color: 'white' | 'light-grey' | 'accent';
        const colorRandom = Math.random();
        if (colorRandom > 0.92) { // 8% chance for subtle accent
          color = 'accent';
        } else if (colorRandom > 0.6) { // 32% light grey
          color = 'light-grey';
        } else { // 60% white/transparent
          color = 'white';
        }
        
        return {
          id: i,
          x,
          y,
          size,
          opacity,
          duration,
          delay,
          color
        };
      });
      
      setCellElements(cells);
    };

    if (isVisible) {
      generateCells();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {cellElements.map((cell) => {
        // Color styling based on type
        let colorClass = '';
        let backgroundStyle = '';
        
        switch (cell.color) {
          case 'white':
            colorClass = 'bg-white';
            backgroundStyle = `rgba(255, 255, 255, ${cell.opacity})`;
            break;
          case 'light-grey':
            colorClass = 'bg-gray-100';
            backgroundStyle = `rgba(243, 244, 246, ${cell.opacity})`;
            break;
          case 'accent':
            colorClass = 'bg-gray-200';
            backgroundStyle = `rgba(229, 231, 235, ${cell.opacity * 0.8})`;
            break;
        }

        return (
          <div
            key={cell.id}
            className={`absolute rounded-full animate-cellular-drift-minimal ${colorClass}`}
            style={{
              width: `${cell.size}px`,
              height: `${cell.size}px`,
              left: `${cell.x}%`,
              top: `${cell.y}%`,
              background: backgroundStyle,
              opacity: cell.opacity,
              animationDuration: `${cell.duration}s`,
              animationDelay: `${cell.delay}s`,
              filter: 'blur(0.5px)',
              transform: 'scale(0)',
              transition: 'transform 2s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            onAnimationStart={(e) => {
              // Safe entrance animation with null check
              if (e.currentTarget) {
                setTimeout(() => {
                  if (e.currentTarget && e.currentTarget.style) {
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }, 100);
              }
            }}
          />
        );
      })}
      
      {/* Subtle membrane-like overlay for lab atmosphere */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-white/[0.02] to-transparent animate-pulse-cellular-minimal"
        style={{
          backgroundSize: '400% 400%',
          backgroundPosition: '50% 50%',
          animationDuration: '45s'
        }}
      />
    </div>
  );
};

export default SubtleCellularBackground;
