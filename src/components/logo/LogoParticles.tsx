
import React from 'react';
import { AnimationStyle } from '../../utils/logoAnimations';

type LogoParticlesProps = {
  colorClasses: { core: string };
  animationClasses: { particles: string };
  animationStyle: AnimationStyle;
  intensity?: 'subtle' | 'medium' | 'vibrant';
  particleOpacity?: number;
};

const LogoParticles: React.FC<LogoParticlesProps> = ({ 
  colorClasses, 
  animationClasses,
  animationStyle,
  intensity = 'medium',
  particleOpacity
}) => {
  // Adjust particle characteristics with enhanced visibility and organic motion
  const getIntensityFactor = () => {
    switch (intensity) {
      case 'subtle': return { count: 0.8, opacityFactor: 0.7, sizeFactor: 0.9, speedFactor: 1.4 };
      case 'vibrant': return { count: 1.3, opacityFactor: 1.2, sizeFactor: 1.15, speedFactor: 0.75 };
      default: return { count: 1.1, opacityFactor: 1.1, sizeFactor: 1.05, speedFactor: 0.95 };
    }
  };
  
  const intensityFactor = getIntensityFactor();

  // Create multiple sets of particles with enhanced visibility and more organic motion
  const particleSets = [
    // Inner orbiting particles
    {
      count: Math.round(5 * intensityFactor.count),
      size: { base: 0.9 * intensityFactor.sizeFactor, variance: 0.25 },
      opacity: { 
        base: particleOpacity !== undefined ? 
          particleOpacity * 1.1 : 
          0.6 * intensityFactor.opacityFactor,
        variance: 0.15 
      },
      positionRadius: { min: 18, max: 35 },
      animationDuration: { base: 10 * intensityFactor.speedFactor, variance: 2 },
      orbitPath: 'inner',
    },
    // Outer flowing particles
    {
      count: Math.round(7 * intensityFactor.count),
      size: { base: 1.1 * intensityFactor.sizeFactor, variance: 0.3 },
      opacity: { 
        base: particleOpacity !== undefined ? 
          particleOpacity * 0.95 : 
          0.55 * intensityFactor.opacityFactor,
        variance: 0.2 
      },
      positionRadius: { min: 28, max: 60 },
      animationDuration: { base: 13 * intensityFactor.speedFactor, variance: 2.5 },
      orbitPath: 'outer',
    },
    // Middle layer particles for more depth
    {
      count: Math.round(4 * intensityFactor.count),
      size: { base: 1.0 * intensityFactor.sizeFactor, variance: 0.25 },
      opacity: { 
        base: particleOpacity !== undefined ? 
          particleOpacity * 1.0 : 
          0.5 * intensityFactor.opacityFactor,
        variance: 0.18
      },
      positionRadius: { min: 22, max: 45 },
      animationDuration: { base: 11.5 * intensityFactor.speedFactor, variance: 2.2 },
      orbitPath: 'middle',
    }
  ];

  // Add extra particle set for vibrant intensity
  if (intensity === 'vibrant') {
    particleSets.push({
      count: 4,
      size: { base: 1.25 * intensityFactor.sizeFactor, variance: 0.35 },
      opacity: { 
        base: particleOpacity !== undefined ? 
          particleOpacity * 1.15 : 
          0.75 * intensityFactor.opacityFactor,
        variance: 0.2 
      },
      positionRadius: { min: 23, max: 50 },
      animationDuration: { base: 9.5 * intensityFactor.speedFactor, variance: 2.2 },
      orbitPath: 'dynamic',
    });
  }

  // New synaptic sparks for neural connection visualization
  const synapticSparks = intensity !== 'subtle' ? Array(intensity === 'vibrant' ? 3 : 2).fill(0) : [];

  return (
    <div className="absolute inset-0 overflow-visible">
      {/* Standard particles */}
      {particleSets.map((set, setIndex) => (
        <React.Fragment key={`particle-set-${setIndex}`}>
          {Array(set.count).fill(0).map((_, i) => {
            // Generate varied properties for each particle with enhanced organic positioning
            const size = set.size.base + (Math.sin(i * 0.7) + 1) * set.size.variance;
            const opacity = set.opacity.base - (Math.cos(i * 0.5) + 1)/2 * set.opacity.variance;
            
            // Generate unique positions with more organic, non-linear distribution
            let angle, radius;
            
            if (set.orbitPath === 'dynamic') {
              // Dynamic positioning for extra organic feel
              angle = (i / set.count) * 2 * Math.PI + Math.sin(i * 0.8) * 0.3;
              radius = set.positionRadius.min + 
                (Math.sin(i * 1.2) + 1)/2 * (set.positionRadius.max - set.positionRadius.min);
            } else {
              // Enhanced organic positioning for standard orbits
              angle = (i / set.count) * 2 * Math.PI + Math.sin(i * 0.5) * 0.2;
              radius = set.positionRadius.min + 
                (i % 3 + Math.sin(i * 0.7) + 1)/3 * (set.positionRadius.max - set.positionRadius.min);
            }
            
            const posX = 50 + Math.cos(angle) * radius;
            const posY = 50 + Math.sin(angle) * radius;
            
            // Unique animation duration with more natural variation
            const duration = set.animationDuration.base + 
              (Math.sin(i * 0.9) + 1)/2 * set.animationDuration.variance;
            
            // Enhanced peach/orange color scheme with better visibility
            let particleColor;
            if ((setIndex + i) % 6 === 0) {
              particleColor = 'rgba(247, 215, 195, ' + opacity * 0.94 + ')';
            } else if ((setIndex + i) % 6 === 1) {
              particleColor = 'rgba(255, 176, 141, ' + opacity * 0.85 + ')';
            } else if ((setIndex + i) % 6 === 2) {
              particleColor = 'rgba(255, 198, 173, ' + opacity * 0.9 + ')';
            } else if ((setIndex + i) % 6 === 3) {
              particleColor = 'rgba(242, 150, 105, ' + opacity * 0.75 + ')';
            } else {
              particleColor = 'rgba(255, 255, 255, ' + opacity * 0.95 + ')';
            }
            
            return (
              <div 
                key={`particle-${setIndex}-${i}`}
                className={`absolute rounded-full ${animationClasses.particles}
                  transition-all duration-500 will-change-transform`}
                style={{
                  width: `${size}rem`,
                  height: `${size}rem`,
                  left: `${posX}%`,
                  top: `${posY}%`,
                  background: `radial-gradient(circle at 30% 30%, 
                    ${particleColor} 0%, 
                    ${particleColor.replace(opacity.toString(), (opacity * 0.92).toString())} 80%)`,
                  boxShadow: `0 0 ${size * 1.7}px 0 ${particleColor.replace(opacity.toString(), (opacity / 4.5).toString())}`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${i * 0.7 + Math.sin(i) * 0.3}s`,
                  animationTimingFunction: 'cubic-bezier(0.42, 0, 0.58, 1)',
                  transform: 'translateZ(0)',
                  opacity: opacity,
                  filter: 'brightness(1.04)',
                }}
              >
                {/* Enhanced inner highlight for dimensionality */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.75) 0%, transparent 75%)',
                    opacity: 0.65,
                  }}
                ></div>
              </div>
            );
          })}
        </React.Fragment>
      ))}
      
      {/* Enhanced central pulsing glow effect */}
      <div
        className="absolute rounded-full animate-pulse-cellular z-5"
        style={{
          width: '95%',
          height: '95%',
          left: '2.5%',
          top: '2.5%',
          background: 'radial-gradient(circle, rgba(242, 150, 105, 0.09) 0%, transparent 75%)',
          filter: 'blur(2px)',
          opacity: intensity === 'vibrant' ? 0.15 : intensity === 'subtle' ? 0.07 : 0.10,
          animationDuration: '12s',
        }}
      ></div>

      {/* NEW: Synaptic sparks traveling between particles - neural connection visualization */}
      {synapticSparks.map((_, i) => {
        // Create random paths for synaptic sparks
        const startAngle = Math.random() * 2 * Math.PI;
        const endAngle = startAngle + (Math.random() * Math.PI - Math.PI/2);
        
        const startRadius = 15 + Math.random() * 25;
        const endRadius = 15 + Math.random() * 25;
        
        const startX = 50 + Math.cos(startAngle) * startRadius;
        const startY = 50 + Math.sin(startAngle) * startRadius;
        const endX = 50 + Math.cos(endAngle) * endRadius;
        const endY = 50 + Math.sin(endAngle) * endRadius;

        // Animation duration varies for organic feel
        const animDuration = 1.5 + Math.random() * 1.5;
        
        // Choose a color for the spark - subtle purples and oranges
        const colors = [
          'rgba(110, 89, 165, 0.8)',  // Purple
          'rgba(242, 150, 105, 0.7)', // Orange
          'rgba(249, 115, 22, 0.65)'  // Brighter orange
        ];
        const sparkColor = colors[i % colors.length];
        
        return (
          <React.Fragment key={`spark-${i}`}>
            {/* The actual spark particle */}
            <div 
              className="absolute rounded-full z-20"
              style={{
                width: '0.35rem',
                height: '0.35rem',
                background: sparkColor,
                boxShadow: `0 0 4px 1px ${sparkColor}`,
                opacity: 0,
                left: `${startX}%`,
                top: `${startY}%`,
                animation: `synaptic-spark ${animDuration}s infinite`,
                animationDelay: `${i * 2 + Math.random() * 2}s`,
              }}
            ></div>
            
            {/* The path that the spark follows */}
            <svg 
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              style={{ opacity: 0.6 }}
            >
              <path
                d={`M ${startX} ${startY} Q ${(startX + endX) / 2 + (Math.random() * 10 - 5)} ${(startY + endY) / 2 + (Math.random() * 10 - 5)}, ${endX} ${endY}`}
                stroke={sparkColor}
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="3,3"
                style={{
                  opacity: 0,
                  animation: `neural-path ${animDuration}s infinite`,
                  animationDelay: `${i * 2 + Math.random() * 2}s`,
                }}
              />
            </svg>
          </React.Fragment>
        );
      })}
      
      {/* NEW: Outer sonar rings that emanate periodically */}
      {intensity !== 'subtle' && (
        <div 
          className={`absolute rounded-full z-3`}
          style={{
            width: '90%',
            height: '90%',
            left: '5%',
            top: '5%',
            border: '0.5px solid rgba(255, 255, 255, 0.3)',
            opacity: 0,
            animation: 'sonar-ring 4s infinite',
            animationTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)',
            animationDelay: '1s'
          }}
        ></div>
      )}
      
      {intensity === 'vibrant' && (
        <div 
          className={`absolute rounded-full z-2`}
          style={{
            width: '85%',
            height: '85%',
            left: '7.5%',
            top: '7.5%',
            border: '0.5px solid rgba(110, 89, 165, 0.25)',
            opacity: 0,
            animation: 'sonar-ring 5s infinite',
            animationTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)',
            animationDelay: '2.5s'
          }}
        ></div>
      )}
    </div>
  );
};

export default LogoParticles;
