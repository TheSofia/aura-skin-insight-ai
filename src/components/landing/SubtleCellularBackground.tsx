
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
    color: 'white' | 'light-grey' | 'accent' | 'ultra-subtle';
    motionType: 'drift' | 'float' | 'orbital' | 'morph';
  }>>([]);

  useEffect(() => {
    // Generate sophisticated cellular particles with lab-like distribution
    const generateCells = () => {
      const cells = Array.from({ length: 45 }, (_, i) => {
        // Create natural distribution across the viewport with clusters
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Varied size for depth and organic feel
        const size = 1.2 + Math.random() * 4.5; // 1.2-5.7px
        
        // Sophisticated opacity variation for depth layers
        const opacity = 0.08 + Math.random() * 0.25; // 0.08-0.33
        
        // Slow, ambient animation timing for lab atmosphere
        const duration = 45 + Math.random() * 35; // 45-80 seconds
        const delay = Math.random() * 25; // 0-25 second delay
        
        // Enhanced color assignment - predominantly neutral with rare subtle accents
        let color: 'white' | 'light-grey' | 'accent' | 'ultra-subtle';
        const colorRandom = Math.random();
        if (colorRandom > 0.95) { // 5% chance for extremely subtle accent
          color = 'accent';
        } else if (colorRandom > 0.85) { // 10% ultra-subtle
          color = 'ultra-subtle';
        } else if (colorRandom > 0.55) { // 30% light grey
          color = 'light-grey';
        } else { // 55% white/transparent
          color = 'white';
        }
        
        // Motion type for organic movement patterns
        const motionTypes: Array<'drift' | 'float' | 'orbital' | 'morph'> = ['drift', 'float', 'orbital', 'morph'];
        const motionType = motionTypes[Math.floor(Math.random() * motionTypes.length)];
        
        return {
          id: i,
          x,
          y,
          size,
          opacity,
          duration,
          delay,
          color,
          motionType
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
        // Enhanced color styling based on type with lab-appropriate palette
        let colorClass = '';
        let backgroundStyle = '';
        
        switch (cell.color) {
          case 'white':
            colorClass = 'bg-white';
            backgroundStyle = `rgba(255, 255, 255, ${cell.opacity})`;
            break;
          case 'light-grey':
            colorClass = 'bg-gray-50';
            backgroundStyle = `rgba(249, 250, 251, ${cell.opacity})`;
            break;
          case 'ultra-subtle':
            colorClass = 'bg-gray-100';
            backgroundStyle = `rgba(243, 244, 246, ${cell.opacity * 0.7})`;
            break;
          case 'accent':
            colorClass = 'bg-gray-200';
            backgroundStyle = `rgba(229, 231, 235, ${cell.opacity * 0.6})`;
            break;
        }

        // Motion class based on motion type
        let motionClass = '';
        switch (cell.motionType) {
          case 'drift':
            motionClass = 'animate-cellular-drift-minimal';
            break;
          case 'float':
            motionClass = 'animate-cellular-particle-float';
            break;
          case 'orbital':
            motionClass = 'animate-orbital-motion';
            break;
          case 'morph':
            motionClass = 'animate-cellular-morph';
            break;
        }

        return (
          <div
            key={cell.id}
            className={`absolute rounded-full ${motionClass} ${colorClass}`}
            style={{
              width: `${cell.size}px`,
              height: `${cell.size}px`,
              left: `${cell.x}%`,
              top: `${cell.y}%`,
              background: backgroundStyle,
              opacity: cell.opacity,
              animationDuration: `${cell.duration}s`,
              animationDelay: `${cell.delay}s`,
              filter: 'blur(0.3px)',
              transform: 'scale(0)',
              transition: 'transform 3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              borderRadius: cell.motionType === 'morph' ? '40% 60% 50% 50% / 30% 70% 60% 40%' : '50%',
            }}
            onAnimationStart={(e) => {
              // Gentle entrance animation
              if (e.currentTarget) {
                setTimeout(() => {
                  if (e.currentTarget && e.currentTarget.style) {
                    e.currentTarget.style.transform = 'scale(1)';
                  }
                }, 200);
              }
            }}
          />
        );
      })}
      
      {/* Enhanced membrane-like overlay for sophisticated lab atmosphere */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-white/[0.015] to-transparent animate-pulse-cellular-minimal"
        style={{
          backgroundSize: '600% 600%',
          backgroundPosition: '50% 50%',
          animationDuration: '60s'
        }}
      />
      
      {/* Additional depth layer with ultra-subtle particle clusters */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-gray-50/[0.008] via-transparent to-gray-100/[0.005] animate-cellular-drift"
        style={{
          backgroundSize: '800% 800%',
          backgroundPosition: '30% 70%',
          animationDuration: '80s'
        }}
      />
    </div>
  );
};

export default SubtleCellularBackground;
