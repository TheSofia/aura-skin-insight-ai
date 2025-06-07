
import React, { useEffect, useState } from 'react';

interface SubtleCellularBackgroundProps {
  isVisible?: boolean;
  intensity?: 'minimal' | 'subtle' | 'moderate';
}

const SubtleCellularBackground: React.FC<SubtleCellularBackgroundProps> = ({ 
  isVisible = true,
  intensity = 'subtle'
}) => {
  const [cellularElements, setCellularElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    animationType: string;
    delay: number;
    color: string;
    rotationSpeed: number;
  }>>([]);

  useEffect(() => {
    if (!isVisible) return;

    const elementCount = intensity === 'minimal' ? 12 : intensity === 'subtle' ? 18 : 28;
    
    const elements = Array.from({ length: elementCount }, (_, i) => {
      // Create natural distribution with some clustering
      let x = Math.random() * 100;
      let y = Math.random() * 100;
      
      // Create subtle clustering patterns
      if (Math.random() > 0.7) {
        // Edge zones for peripheral activity
        if (Math.random() > 0.5) {
          x = Math.random() > 0.5 ? Math.random() * 15 : 85 + Math.random() * 15;
        } else {
          y = Math.random() > 0.5 ? Math.random() * 15 : 85 + Math.random() * 15;
        }
      }
      
      // Color selection - muted palette with violet accents
      const colors = [
        'bg-white/30',           // Semi-transparent white
        'bg-gray-100/40',        // Light grey
        'bg-dermoagent-ethereal-purple/60',  // Muted violet
        'bg-dermoagent-cellular-purple/80',  // Subtle purple
        'bg-dermoagent-light-purple/50',     // Light purple accent
        'bg-white/20'            // Very subtle white
      ];
      
      const animationTypes = [
        'cellular-drift-purple-enhanced',
        'cellular-cluster-formation-enhanced',
        'membrane-oscillation-enhanced',
        'micro-orbital-intelligence'
      ];
      
      return {
        id: i,
        x,
        y,
        size: Math.random() * 2.5 + 0.8, // Varied sizes from small to medium
        opacity: Math.random() * 0.4 + 0.2, // Subtle opacity range
        animationType: animationTypes[Math.floor(Math.random() * animationTypes.length)],
        delay: Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotationSpeed: (Math.random() * 2 - 1) * 0.5
      };
    });
    
    setCellularElements(elements);
  }, [isVisible, intensity]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main cellular field */}
      <div className="absolute inset-0">
        {cellularElements.map((element) => (
          <div
            key={element.id}
            className={`absolute rounded-full ${element.color} ${element.animationType}`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}rem`,
              height: `${element.size}rem`,
              opacity: element.opacity,
              animationDelay: `${element.delay}s`,
              filter: 'blur(0.5px)',
              backdropFilter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Ambient neural network patterns */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
        <defs>
          <linearGradient id="neuralConnection1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(107, 70, 193, 0)" />
            <stop offset="50%" stopColor="rgba(107, 70, 193, 0.3)" />
            <stop offset="100%" stopColor="rgba(107, 70, 193, 0)" />
          </linearGradient>
          <linearGradient id="neuralConnection2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.25)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
          </linearGradient>
        </defs>
        
        {/* Organic connection paths */}
        <path d="M15,25 Q45,15 75,25" stroke="url(#neuralConnection1)" strokeWidth="0.3" fill="none">
          <animate attributeName="d" 
                   values="M15,25 Q45,15 75,25;M15,25 Q45,25 75,25;M15,25 Q45,15 75,25" 
                   dur="12s" 
                   repeatCount="indefinite" />
        </path>
        <path d="M25,65 Q55,45 85,65" stroke="url(#neuralConnection2)" strokeWidth="0.3" fill="none">
          <animate attributeName="d" 
                   values="M25,65 Q55,45 85,65;M25,65 Q55,55 85,65;M25,65 Q55,45 85,65" 
                   dur="10s" 
                   repeatCount="indefinite" />
        </path>
        
        {/* Neural nodes */}
        <circle cx="30" cy="30" r="1.5" fill="rgba(107, 70, 193, 0.4)">
          <animate attributeName="r" values="1;2;1" dur="6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="70" r="1.5" fill="rgba(139, 92, 246, 0.4)">
          <animate attributeName="r" values="1;1.8;1" dur="8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="8s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Microfluidic flow streams */}
      <div className="absolute inset-0">
        {Array.from({ length: 2 }, (_, i) => (
          <div
            key={`flow-${i}`}
            className="absolute w-full h-px"
            style={{
              top: `${25 + i * 35}%`,
              animationDelay: `${i * 2}s`,
              background: 'linear-gradient(90deg, transparent, rgba(107, 70, 193, 0.4), transparent)',
              animation: 'particle-stream-flow 8s linear infinite'
            }}
          />
        ))}
      </div>

      {/* Ambient glow overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 25% 35%, rgba(107, 70, 193, 0.02) 0%, transparent 60%),
            radial-gradient(circle at 75% 65%, rgba(139, 92, 246, 0.015) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.01) 0%, transparent 40%)
          `,
          filter: 'blur(40px)',
        }}
      />
    </div>
  );
};

export default SubtleCellularBackground;
