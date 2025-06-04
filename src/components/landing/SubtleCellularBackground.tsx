
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
    depthLayer: 'background' | 'middle' | 'foreground';
    speed: number;
  }>>([]);

  useEffect(() => {
    // Generate enhanced cellular particles with 3D depth layers and varied sizes
    const generateCells = () => {
      const cells = Array.from({ length: 120 }, (_, i) => {
        // Create natural distribution with enhanced clustering patterns
        const clusterCenters = [
          { x: 15, y: 25 }, { x: 65, y: 15 }, { x: 35, y: 55 }, 
          { x: 75, y: 70 }, { x: 20, y: 75 }, { x: 55, y: 40 },
          { x: 85, y: 30 }, { x: 10, y: 50 }, { x: 45, y: 80 }
        ];
        
        const cluster = clusterCenters[Math.floor(Math.random() * clusterCenters.length)];
        const clusterSpread = 20 + Math.random() * 30;
        
        const x = Math.max(2, Math.min(98, cluster.x + (Math.random() - 0.5) * clusterSpread));
        const y = Math.max(2, Math.min(98, cluster.y + (Math.random() - 0.5) * clusterSpread));
        
        // Enhanced size range for better depth perception - wider variation
        const depthRandom = Math.random();
        let depthLayer: 'background' | 'middle' | 'foreground';
        let size: number;
        let baseOpacity: number;
        let speed: number;
        
        if (depthRandom > 0.7) { // 30% foreground - larger, more visible
          depthLayer = 'foreground';
          size = 8 + Math.random() * 18; // 8-26px
          baseOpacity = 0.4 + Math.random() * 0.4; // 0.4-0.8
          speed = 0.8 + Math.random() * 0.4; // Faster movement
        } else if (depthRandom > 0.3) { // 40% middle - medium
          depthLayer = 'middle';
          size = 4 + Math.random() * 12; // 4-16px
          baseOpacity = 0.25 + Math.random() * 0.35; // 0.25-0.6
          speed = 0.6 + Math.random() * 0.3;
        } else { // 30% background - smaller, more subtle
          depthLayer = 'background';
          size = 2 + Math.random() * 8; // 2-10px
          baseOpacity = 0.1 + Math.random() * 0.25; // 0.1-0.35
          speed = 0.4 + Math.random() * 0.2; // Slower movement
        }
        
        // Enhanced opacity with depth variation
        const opacity = baseOpacity;
        
        // Varied animation timing for organic feel with speed variation
        const baseDuration = 30 + Math.random() * 40; // 30-70 seconds
        const duration = baseDuration / speed; // Adjust duration by speed
        const delay = Math.random() * 25; // 0-25 second delay
        
        // Enhanced color assignment with depth-based distribution
        let color: 'white' | 'light-grey' | 'accent' | 'ultra-subtle' | 'violet-hint' | 'orange-hint';
        const colorRandom = Math.random();
        
        // Foreground cells get more chance for accent colors
        if (depthLayer === 'foreground') {
          if (colorRandom > 0.93) { // 7% chance for violet hint
            color = 'violet-hint';
          } else if (colorRandom > 0.86) { // 7% chance for orange hint
            color = 'orange-hint';
          } else if (colorRandom > 0.75) { // 11% chance for accent
            color = 'accent';
          } else if (colorRandom > 0.5) { // 25% light grey
            color = 'light-grey';
          } else { // 50% white
            color = 'white';
          }
        } else {
          // Background and middle layers remain mostly neutral
          if (colorRandom > 0.97) { // 3% chance for violet hint
            color = 'violet-hint';
          } else if (colorRandom > 0.94) { // 3% chance for orange hint
            color = 'orange-hint';
          } else if (colorRandom > 0.85) { // 9% chance for accent
            color = 'accent';
          } else if (colorRandom > 0.55) { // 30% ultra-subtle
            color = 'ultra-subtle';
          } else if (colorRandom > 0.25) { // 30% light grey
            color = 'light-grey';
          } else { // 25% white
            color = 'white';
          }
        }
        
        // Enhanced motion types for more organic movement
        const motionTypes: Array<'drift' | 'float' | 'orbital' | 'morph' | 'cluster' | 'disperse'> = 
          ['drift', 'float', 'orbital', 'morph', 'cluster', 'disperse'];
        const motionType = motionTypes[Math.floor(Math.random() * motionTypes.length)];
        
        // Additional properties for enhanced organic movement
        const pathRadius = 8 + Math.random() * 30; // Larger orbital/cluster radius
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
          pulseOffset,
          depthLayer,
          speed
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
        // Enhanced color styling with depth-based opacity and subtle accent integration
        let colorClass = '';
        let backgroundStyle = '';
        let boxShadowStyle = '';
        
        // Depth-based opacity multiplier for 3D effect
        const depthOpacityMultiplier = cell.depthLayer === 'foreground' ? 1 : 
                                     cell.depthLayer === 'middle' ? 0.85 : 0.7;
        const finalOpacity = cell.opacity * depthOpacityMultiplier;
        
        switch (cell.color) {
          case 'white':
            colorClass = 'bg-white';
            backgroundStyle = `rgba(255, 255, 255, ${finalOpacity})`;
            boxShadowStyle = `0 0 ${cell.size * 0.9}px rgba(255, 255, 255, ${finalOpacity * 0.4})`;
            break;
          case 'light-grey':
            colorClass = 'bg-gray-100';
            backgroundStyle = `rgba(243, 244, 246, ${finalOpacity})`;
            boxShadowStyle = `0 0 ${cell.size * 0.7}px rgba(243, 244, 246, ${finalOpacity * 0.3})`;
            break;
          case 'ultra-subtle':
            colorClass = 'bg-gray-200';
            backgroundStyle = `rgba(229, 231, 235, ${finalOpacity})`;
            boxShadowStyle = `0 0 ${cell.size * 0.8}px rgba(229, 231, 235, ${finalOpacity * 0.25})`;
            break;
          case 'accent':
            colorClass = 'bg-gray-300';
            backgroundStyle = `rgba(209, 213, 219, ${finalOpacity})`;
            boxShadowStyle = `0 0 ${cell.size * 1.1}px rgba(209, 213, 219, ${finalOpacity * 0.5})`;
            break;
          case 'violet-hint':
            colorClass = 'bg-violet-100';
            backgroundStyle = `rgba(124, 58, 237, ${finalOpacity * 0.2})`;
            boxShadowStyle = `0 0 ${cell.size * 1.4}px rgba(124, 58, 237, ${finalOpacity * 0.15})`;
            break;
          case 'orange-hint':
            colorClass = 'bg-orange-100';
            backgroundStyle = `rgba(255, 119, 69, ${finalOpacity * 0.18})`;
            boxShadowStyle = `0 0 ${cell.size * 1.3}px rgba(255, 119, 69, ${finalOpacity * 0.12})`;
            break;
        }

        // Enhanced motion class assignment with depth-based speed
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

        // Dynamic border radius for organic shapes with enhanced variation
        const organicRadius = cell.motionType === 'morph' || cell.motionType === 'cluster' 
          ? `${35 + Math.sin(cell.pulseOffset) * 25}% ${65 - Math.sin(cell.pulseOffset) * 25}% ${45 + Math.cos(cell.pulseOffset) * 20}% ${55 - Math.cos(cell.pulseOffset) * 20}% / ${25 + Math.sin(cell.pulseOffset * 1.4) * 20}% ${75 - Math.sin(cell.pulseOffset * 1.4) * 20}% ${65 + Math.cos(cell.pulseOffset * 0.8) * 15}% ${35 - Math.cos(cell.pulseOffset * 0.8) * 15}%`
          : '50%';

        // Depth-based blur for 3D effect
        const depthBlur = cell.depthLayer === 'background' ? 'blur(0.8px)' : 
                         cell.depthLayer === 'middle' ? 'blur(0.4px)' : 'blur(0.2px)';

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
              opacity: finalOpacity,
              animationDuration: `${cell.duration}s`,
              animationDelay: `${cell.delay}s`,
              filter: depthBlur,
              transform: `scale(1) ${customTransform}`,
              borderRadius: organicRadius,
              boxShadow: boxShadowStyle,
              transition: 'all 0.4s ease-out',
              zIndex: cell.depthLayer === 'foreground' ? 3 : cell.depthLayer === 'middle' ? 2 : 1,
            }}
          />
        );
      })}
      
      {/* Enhanced multi-layered membrane overlay for sophisticated lab atmosphere */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-white/[0.06] to-transparent animate-pulse-cellular-minimal"
        style={{
          backgroundSize: '250% 250%',
          backgroundPosition: '50% 50%',
          animationDuration: '45s',
          zIndex: 1
        }}
      />
      
      {/* Secondary depth layer with enhanced organic patterns */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-gray-50/[0.04] via-transparent to-gray-100/[0.03] animate-cellular-drift"
        style={{
          backgroundSize: '400% 400%',
          backgroundPosition: '30% 70%',
          animationDuration: '65s',
          zIndex: 1
        }}
      />
      
      {/* Tertiary atmospheric layer for enhanced depth with subtle accent hints */}
      <div 
        className="absolute inset-0 bg-gradient-conic from-transparent via-violet-50/[0.02] to-transparent animate-cellular-morph"
        style={{
          backgroundSize: '350% 350%',
          backgroundPosition: '60% 40%',
          animationDuration: '80s',
          zIndex: 1
        }}
      />
      
      {/* Additional subtle orange accent layer for depth */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-orange-50/[0.015] via-transparent to-transparent animate-cellular-cluster"
        style={{
          backgroundSize: '300% 300%',
          backgroundPosition: '70% 30%',
          animationDuration: '95s',
          zIndex: 1
        }}
      />
    </div>
  );
};

export default SubtleCellularBackground;
