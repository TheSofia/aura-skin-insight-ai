
import React from 'react';

type BottomParticleSystemProps = {
  isVisible: boolean;
  cursorGlow: number;
  cursorIntensity: number;
};

const BottomParticleSystem: React.FC<BottomParticleSystemProps> = ({
  isVisible,
  cursorGlow,
  cursorIntensity
}) => {
  // Generate sophisticated particle configurations for organic motion
  const particleGroups = [
    // Primary cluster - central gravitational area
    {
      count: 8,
      baseRadius: 45,
      radiusVariance: 15,
      size: { min: 0.8, max: 1.4 },
      opacity: { min: 0.4, max: 0.7 },
      speed: { min: 12, max: 18 },
      colorType: 'muted-violet' as const,
      motionType: 'orbital' as const,
    },
    // Secondary floating particles
    {
      count: 12,
      baseRadius: 65,
      radiusVariance: 25,
      size: { min: 0.6, max: 1.1 },
      opacity: { min: 0.3, max: 0.6 },
      speed: { min: 15, max: 22 },
      colorType: 'translucent' as const,
      motionType: 'drift' as const,
    },
    // Accent particles with refined orange-red hints
    {
      count: 5,
      baseRadius: 35,
      radiusVariance: 20,
      size: { min: 0.9, max: 1.3 },
      opacity: { min: 0.35, max: 0.65 },
      speed: { min: 14, max: 20 },
      colorType: 'refined-orange' as const,
      motionType: 'pulse-drift' as const,
    },
    // Micro particles for depth
    {
      count: 15,
      baseRadius: 80,
      radiusVariance: 30,
      size: { min: 0.4, max: 0.8 },
      opacity: { min: 0.2, max: 0.45 },
      speed: { min: 18, max: 28 },
      colorType: 'translucent' as const,
      motionType: 'cellular-float' as const,
    }
  ];

  const getParticleColor = (colorType: string, opacity: number) => {
    switch (colorType) {
      case 'muted-violet':
        return `rgba(110, 89, 165, ${opacity * 0.8})`;
      case 'refined-orange':
        return `rgba(242, 150, 105, ${opacity * 0.7})`;
      case 'translucent':
      default:
        return `rgba(255, 255, 255, ${opacity * 0.85})`;
    }
  };

  const getMotionAnimation = (motionType: string, speed: number) => {
    switch (motionType) {
      case 'orbital':
        return `orbital-float ${speed}s infinite cubic-bezier(0.4, 0, 0.6, 1)`;
      case 'drift':
        return `cellular-drift ${speed}s infinite linear`;
      case 'pulse-drift':
        return `cellular-particle-float ${speed}s infinite ease-in-out`;
      case 'cellular-float':
      default:
        return `cellular-motion ${speed}s infinite ease-in-out`;
    }
  };

  return (
    <div 
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[280px] h-[280px] pointer-events-none"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 2s ease-out',
        filter: `brightness(${1 + cursorGlow * 0.2}) contrast(${1 + cursorIntensity * 0.1})`,
      }}
    >
      {/* Organic circular frame - subtle and sophisticated */}
      <div 
        className="absolute inset-0 rounded-full animate-cellular-morph"
        style={{
          background: 'radial-gradient(circle at 40% 35%, rgba(255, 255, 255, 0.08) 0%, rgba(110, 89, 165, 0.04) 40%, transparent 70%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(2px)',
        }}
      />

      {/* Dynamic particle system */}
      {particleGroups.map((group, groupIndex) => (
        <React.Fragment key={`particle-group-${groupIndex}`}>
          {Array(group.count).fill(0).map((_, particleIndex) => {
            // Generate organic positioning within the circular frame
            const angle = (particleIndex / group.count) * 2 * Math.PI + Math.sin(particleIndex * 0.7) * 0.3;
            const radius = group.baseRadius + (Math.sin(particleIndex * 1.2) + 1) / 2 * group.radiusVariance;
            
            const x = 50 + Math.cos(angle) * (radius / 140); // Normalize to percentage
            const y = 50 + Math.sin(angle) * (radius / 140);
            
            // Generate particle properties
            const size = group.size.min + Math.random() * (group.size.max - group.size.min);
            const opacity = group.opacity.min + Math.random() * (group.opacity.max - group.opacity.min);
            const speed = group.speed.min + Math.random() * (group.speed.max - group.speed.min);
            const delay = Math.random() * 8;
            
            const particleColor = getParticleColor(group.colorType, opacity);
            const animation = getMotionAnimation(group.motionType, speed);

            return (
              <div
                key={`particle-${groupIndex}-${particleIndex}`}
                className="absolute rounded-full will-change-transform"
                style={{
                  width: `${size}rem`,
                  height: `${size}rem`,
                  left: `${x}%`,
                  top: `${y}%`,
                  background: `radial-gradient(circle at 30% 30%, ${particleColor} 0%, ${particleColor.replace(opacity.toString(), (opacity * 0.3).toString())} 100%)`,
                  boxShadow: group.colorType !== 'translucent' 
                    ? `0 0 ${size * 3}px 0 ${particleColor.replace(opacity.toString(), (opacity * 0.4).toString())}`
                    : 'none',
                  animation,
                  animationDelay: `${delay}s`,
                  transform: 'translate(-50%, -50%)',
                  filter: 'brightness(1.1)',
                }}
              >
                {/* Inner highlight for dimensionality */}
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{ 
                    background: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.6) 0%, transparent 70%)',
                    opacity: 0.4,
                  }}
                />
              </div>
            );
          })}
        </React.Fragment>
      ))}

      {/* Subtle central energy field effect - no visible center dot */}
      <div 
        className="absolute inset-[25%] rounded-full animate-pulse-slow"
        style={{
          background: 'radial-gradient(circle at center, rgba(110, 89, 165, 0.06) 0%, transparent 60%)',
          opacity: 0.7,
        }}
      />

      {/* Atmospheric glow enhancement */}
      <div 
        className="absolute inset-[-20%] rounded-full animate-breathing"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
          opacity: 0.8,
        }}
      />
    </div>
  );
};

export default BottomParticleSystem;
