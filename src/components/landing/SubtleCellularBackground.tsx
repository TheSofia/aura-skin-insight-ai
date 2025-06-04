
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
      const cells = Array.from({ length: 60 }, (_, i) => {
        // Create natural distribution across the viewport with clusters
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Increased size for better visibility
        const size = 2 + Math.random() * 8; // 2-10px
        
        // Increased opacity for better visibility
        const opacity = 0.15 + Math.random() * 0.4; // 0.15-0.55
        
        // Slow, ambient animation timing for lab atmosphere
        const duration = 30 + Math.random() * 25; // 30-55 seconds
        const delay = Math.random() * 15; // 0-15 second delay
        
        // Enhanced color assignment - predominantly neutral with rare subtle accents
        let color: 'white' | 'light-grey' | 'accent' | 'ultra-subtle';
        const colorRandom = Math.random();
        if (colorRandom > 0.92) { // 8% chance for extremely subtle accent
          color = 'accent';
        } else if (colorRandom > 0.75) { // 17% ultra-subtle
          color = 'ultra-subtle';
        } else if (colorRandom > 0.45) { // 30% light grey
          color = 'light-grey';
        } else { // 45% white/transparent
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
            colorClass = 'bg-gray-100';
            backgroundStyle = `rgba(243, 244, 246, ${cell.opacity})`;
            break;
          case 'ultra-subtle':
            colorClass = 'bg-gray-200';
            backgroundStyle = `rgba(229, 231, 235, ${cell.opacity})`;
            break;
          case 'accent':
            colorClass = 'bg-gray-300';
            backgroundStyle = `rgba(209, 213, 219, ${cell.opacity})`;
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
              filter: 'blur(0.5px)',
              transform: 'scale(1)', // Always visible
              borderRadius: cell.motionType === 'morph' ? '40% 60% 50% 50% / 30% 70% 60% 40%' : '50%',
            }}
          />
        );
      })}
      
      {/* Enhanced membrane-like overlay for sophisticated lab atmosphere */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-white/[0.03] to-transparent animate-pulse-cellular-minimal"
        style={{
          backgroundSize: '400% 400%',
          backgroundPosition: '50% 50%',
          animationDuration: '45s'
        }}
      />
      
      {/* Additional depth layer with ultra-subtle particle clusters */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-gray-50/[0.02] via-transparent to-gray-100/[0.015] animate-cellular-drift"
        style={{
          backgroundSize: '600% 600%',
          backgroundPosition: '30% 70%',
          animationDuration: '60s'
        }}
      />
    </div>
  );
};

export default SubtleCellularBackground;
