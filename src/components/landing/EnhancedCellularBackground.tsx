
import React, { useEffect, useState } from 'react';

interface EnhancedCellularBackgroundProps {
  isVisible?: boolean;
  intensity?: 'subtle' | 'moderate' | 'dynamic';
  showDataStreams?: boolean;
}

const EnhancedCellularBackground: React.FC<EnhancedCellularBackgroundProps> = ({ 
  isVisible = true,
  intensity = 'moderate',
  showDataStreams = true
}) => {
  const [cellularElements, setCellularElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    animationType: string;
    opacity: number;
    color: string;
    delay: number;
  }>>([]);

  useEffect(() => {
    if (!isVisible) return;

    const elementCount = intensity === 'subtle' ? 15 : intensity === 'moderate' ? 25 : 40;
    
    const elements = Array.from({ length: elementCount }, (_, i) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // Deep Purple color variations
      const colors = [
        'bg-dermoagent-deep-purple/10',
        'bg-dermoagent-muted-violet/12',
        'bg-dermoagent-indigo/8',
        'bg-dermoagent-amethyst/15',
        'bg-dermoagent-ethereal-purple/20',
        'bg-dermoagent-cellular-purple/25'
      ];
      
      const animationTypes = [
        'cellular-drift-purple-enhanced',
        'cellular-cluster-formation-enhanced',
        'neural-network-pulse',
        'membrane-oscillation-enhanced',
        'micro-orbital-intelligence'
      ];
      
      return {
        id: i,
        x,
        y,
        size: Math.random() * 3 + 1,
        animationType: animationTypes[Math.floor(Math.random() * animationTypes.length)],
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5
      };
    });
    
    setCellularElements(elements);
  }, [isVisible, intensity]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden cellular-enhanced-container">
      {/* Main Cellular Field */}
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
              animationDelay: `${element.delay}s`
            }}
          />
        ))}
      </div>

      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
        <defs>
          <linearGradient id="neuralGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(107, 70, 193, 0)" />
            <stop offset="50%" stopColor="rgba(107, 70, 193, 0.4)" />
            <stop offset="100%" stopColor="rgba(107, 70, 193, 0)" />
          </linearGradient>
          <linearGradient id="neuralGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
          </linearGradient>
        </defs>
        
        {/* Dynamic Neural Connections */}
        <path d="M10,30 Q50,10 90,30" stroke="url(#neuralGradient1)" strokeWidth="0.5" fill="none">
          <animate attributeName="d" 
                   values="M10,30 Q50,10 90,30;M10,30 Q50,20 90,30;M10,30 Q50,10 90,30" 
                   dur="8s" 
                   repeatCount="indefinite" />
        </path>
        <path d="M20,70 Q60,50 80,70" stroke="url(#neuralGradient2)" strokeWidth="0.5" fill="none">
          <animate attributeName="d" 
                   values="M20,70 Q60,50 80,70;M20,70 Q60,60 80,70;M20,70 Q60,50 80,70" 
                   dur="6s" 
                   repeatCount="indefinite" />
        </path>
        
        {/* Neural Nodes */}
        <circle cx="25" cy="25" r="2" fill="rgba(107, 70, 193, 0.5)">
          <animate attributeName="r" values="1;3;1" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="75" cy="75" r="2" fill="rgba(139, 92, 246, 0.5)">
          <animate attributeName="r" values="1;2.5;1" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Data Stream Lines */}
      {showDataStreams && (
        <div className="absolute inset-0">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={`stream-${i}`}
              className="absolute w-full h-px particle-stream-flow"
              style={{
                top: `${20 + i * 30}%`,
                animationDelay: `${i * 1.5}s`,
                background: 'linear-gradient(90deg, transparent, rgba(107, 70, 193, 0.6), transparent)'
              }}
            />
          ))}
        </div>
      )}

      {/* Ambient Glow Layers */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(107, 70, 193, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.02) 0%, transparent 60%),
            radial-gradient(circle at 60% 20%, rgba(124, 58, 237, 0.025) 0%, transparent 40%)
          `,
          filter: 'blur(60px)',
        }}
      />

      {/* Membrane Layer */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={`membrane-${i}`}
            className="absolute membrane-oscillation-enhanced"
            style={{
              left: `${15 + i * 25}%`,
              top: `${10 + i * 20}%`,
              width: `${20 + i * 10}vw`,
              height: `${20 + i * 10}vh`,
              background: `rgba(${107 + i * 10}, ${70 + i * 15}, ${193 + i * 5}, ${0.05 + i * 0.02})`,
              borderRadius: '50%',
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default EnhancedCellularBackground;
