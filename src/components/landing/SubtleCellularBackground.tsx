
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
    color: 'white' | 'light-grey' | 'accent' | 'ultra-subtle' | 'violet-hint' | 'orange-hint';
    motionType: 'drift' | 'float' | 'orbital' | 'morph' | 'cluster' | 'disperse';
    pathRadius: number;
    pulseOffset: number;
  }>>([]);

  useEffect(() => {
    // Generate sophisticated cellular particles with enhanced lab-like distribution
    const generateCells = () => {
      const cells = Array.from({ length: 85 }, (_, i) => {
        // Create natural distribution with clustering patterns
        const clusterCenters = [
          { x: 20, y: 30 }, { x: 70, y: 20 }, { x: 40, y: 60 }, 
          { x: 80, y: 75 }, { x: 15, y: 80 }, { x: 60, y: 45 }
        ];
        
        const cluster = clusterCenters[Math.floor(Math.random() * clusterCenters.length)];
        const clusterSpread = 25 + Math.random() * 20;
        
        const x = Math.max(5, Math.min(95, cluster.x + (Math.random() - 0.5) * clusterSpread));
        const y = Math.max(5, Math.min(95, cluster.y + (Math.random() - 0.5) * clusterSpread));
        
        // Enhanced size range for better visibility and depth
        const size = 3 + Math.random() * 12; // 3-15px range
        
        // Improved opacity for better visibility while maintaining subtlety
        const opacity = 0.25 + Math.random() * 0.5; // 0.25-0.75 range
        
        // Varied animation timing for organic feel
        const duration = 25 + Math.random() * 35; // 25-60 seconds
        const delay = Math.random() * 20; // 0-20 second delay
        
        // Enhanced color assignment with subtle accent integration
        let color: 'white' | 'light-grey' | 'accent' | 'ultra-subtle' | 'violet-hint' | 'orange-hint';
        const colorRandom = Math.random();
        if (colorRandom > 0.96) { // 4% chance for violet hint
          color = 'violet-hint';
        } else if (colorRandom > 0.92) { // 4% chance for orange hint
          color = 'orange-hint';
        } else if (colorRandom > 0.85) { // 7% chance for subtle accent
          color = 'accent';
        } else if (colorRandom > 0.65) { // 20% ultra-subtle
          color = 'ultra-subtle';
        } else if (colorRandom > 0.35) { // 30% light grey
          color = 'light-grey';
        } else { // 35% white/transparent
          color = 'white';
        }
        
        // Enhanced motion types for more organic movement
        const motionTypes: Array<'drift' | 'float' | 'orbital' | 'morph' | 'cluster' | 'disperse'> = 
          ['drift', 'float', 'orbital', 'morph', 'cluster', 'disperse'];
        const motionType = motionTypes[Math.floor(Math.random() * motionTypes.length)];
        
        // Additional properties for enhanced organic movement
        const pathRadius = 10 + Math.random() * 25; // Orbital/cluster radius
        const pulseOffset = Math.random() * Math.PI * 2; // Phase offset for pulsing
        
        return {
          id: i,
          x,
          y,
          size,
          opacity,
          duration,
          delay,
          color,
          motionType,
          pathRadius,
          pulseOffset
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
        // Enhanced color styling with subtle accent integration
        let colorClass = '';
        let backgroundStyle = '';
        let boxShadowStyle = '';
        
        switch (cell.color) {
          case 'white':
            colorClass = 'bg-white';
            backgroundStyle = `rgba(255, 255, 255, ${cell.opacity})`;
            boxShadowStyle = `0 0 ${cell.size * 0.8}px rgba(255, 255, 255, ${cell.opacity * 0.3})`;
            break;
          case 'light-grey':
            colorClass = 'bg-gray-100';
            backgroundStyle = `rgba(243, 244, 246, ${cell.opacity})`;
            boxShadowStyle = `0 0 ${cell.size * 0.6}px rgba(243, 244, 246, ${cell.opacity * 0.25})`;
            break;
          case 'ultra-subtle':
            colorClass = 'bg-gray-200';
            backgroundStyle = `rgba(229, 231, 235, ${cell.opacity})`;
            boxShadowStyle = `0 0 ${cell.size * 0.7}px rgba(229, 231, 235, ${cell.opacity * 0.2})`;
            break;
          case 'accent':
            colorClass = 'bg-gray-300';
            backgroundStyle = `rgba(209, 213, 219, ${cell.opacity})`;
            boxShadowStyle = `0 0 ${cell.size}px rgba(209, 213, 219, ${cell.opacity * 0.4})`;
            break;
          case 'violet-hint':
            colorClass = 'bg-violet-100';
            backgroundStyle = `rgba(124, 58, 237, ${cell.opacity * 0.15})`;
            boxShadowStyle = `0 0 ${cell.size * 1.2}px rgba(124, 58, 237, ${cell.opacity * 0.1})`;
            break;
          case 'orange-hint':
            colorClass = 'bg-orange-100';
            backgroundStyle = `rgba(255, 119, 69, ${cell.opacity * 0.12})`;
            boxShadowStyle = `0 0 ${cell.size * 1.1}px rgba(255, 119, 69, ${cell.opacity * 0.08})`;
            break;
        }

        // Enhanced motion class assignment
        let motionClass = '';
        let customTransform = '';
        
        switch (cell.motionType) {
          case 'drift':
            motionClass = 'animate-cellular-drift-minimal';
            break;
          case 'float':
            motionClass = 'animate-cellular-particle-float';
            break;
          case 'orbital':
            motionClass = 'animate-orbital-motion';
            customTransform = `translateX(${cell.pathRadius}px)`;
            break;
          case 'morph':
            motionClass = 'animate-cellular-morph';
            break;
          case 'cluster':
            motionClass = 'animate-cellular-cluster';
            break;
          case 'disperse':
            motionClass = 'animate-cellular-disperse';
            break;
        }

        // Dynamic border radius for organic shapes
        const organicRadius = cell.motionType === 'morph' || cell.motionType === 'cluster' 
          ? `${40 + Math.sin(cell.pulseOffset) * 20}% ${60 - Math.sin(cell.pulseOffset) * 20}% ${50 + Math.cos(cell.pulseOffset) * 15}% ${50 - Math.cos(cell.pulseOffset) * 15}% / ${30 + Math.sin(cell.pulseOffset * 1.3) * 15}% ${70 - Math.sin(cell.pulseOffset * 1.3) * 15}% ${60 + Math.cos(cell.pulseOffset * 0.7) * 10}% ${40 - Math.cos(cell.pulseOffset * 0.7) * 10}%`
          : '50%';

        return (
          <div
            key={cell.id}
            className={`absolute ${motionClass} ${colorClass}`}
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
              transform: `scale(1) ${customTransform}`,
              borderRadius: organicRadius,
              boxShadow: boxShadowStyle,
              transition: 'all 0.3s ease-out',
            }}
          />
        );
      })}
      
      {/* Enhanced multi-layered membrane overlay for sophisticated lab atmosphere */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-white/[0.04] to-transparent animate-pulse-cellular-minimal"
        style={{
          backgroundSize: '300% 300%',
          backgroundPosition: '50% 50%',
          animationDuration: '50s'
        }}
      />
      
      {/* Secondary depth layer with enhanced organic patterns */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-gray-50/[0.03] via-transparent to-gray-100/[0.02] animate-cellular-drift"
        style={{
          backgroundSize: '500% 500%',
          backgroundPosition: '30% 70%',
          animationDuration: '70s'
        }}
      />
      
      {/* Tertiary atmospheric layer for enhanced depth */}
      <div 
        className="absolute inset-0 bg-gradient-conic from-transparent via-violet-50/[0.015] to-transparent animate-cellular-morph"
        style={{
          backgroundSize: '400% 400%',
          backgroundPosition: '60% 40%',
          animationDuration: '90s'
        }}
      />
    </div>
  );
};

export default SubtleCellularBackground;
