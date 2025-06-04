
import React from 'react';
import { CellularParticle as CellularParticleType } from '@/utils/cellularParticleGenerator';

interface CellularParticleProps {
  particle: CellularParticleType;
}

const CellularParticle: React.FC<CellularParticleProps> = ({ particle }) => {
  // Enhanced color styling with depth-based opacity and subtle accent integration
  let backgroundStyle = '';
  let boxShadowStyle = '';
  
  // Depth-based opacity multiplier for 3D effect
  const depthOpacityMultiplier = particle.depthLayer === 'foreground' ? 1 : 
                               particle.depthLayer === 'middle' ? 0.85 : 0.7;
  const finalOpacity = particle.opacity * depthOpacityMultiplier;
  
  switch (particle.color) {
    case 'white':
      backgroundStyle = `rgba(255, 255, 255, ${finalOpacity})`;
      boxShadowStyle = `0 0 ${particle.size * 0.9}px rgba(255, 255, 255, ${finalOpacity * 0.4})`;
      break;
    case 'light-grey':
      backgroundStyle = `rgba(243, 244, 246, ${finalOpacity})`;
      boxShadowStyle = `0 0 ${particle.size * 0.7}px rgba(243, 244, 246, ${finalOpacity * 0.3})`;
      break;
    case 'ultra-subtle':
      backgroundStyle = `rgba(229, 231, 235, ${finalOpacity})`;
      boxShadowStyle = `0 0 ${particle.size * 0.8}px rgba(229, 231, 235, ${finalOpacity * 0.25})`;
      break;
    case 'accent':
      backgroundStyle = `rgba(209, 213, 219, ${finalOpacity})`;
      boxShadowStyle = `0 0 ${particle.size * 1.1}px rgba(209, 213, 219, ${finalOpacity * 0.5})`;
      break;
    case 'violet-hint':
      backgroundStyle = `rgba(124, 58, 237, ${finalOpacity * 0.2})`;
      boxShadowStyle = `0 0 ${particle.size * 1.4}px rgba(124, 58, 237, ${finalOpacity * 0.15})`;
      break;
    case 'orange-hint':
      backgroundStyle = `rgba(255, 119, 69, ${finalOpacity * 0.18})`;
      boxShadowStyle = `0 0 ${particle.size * 1.3}px rgba(255, 119, 69, ${finalOpacity * 0.12})`;
      break;
  }

  // Enhanced motion class assignment with depth-based speed
  let motionClass = '';
  let customTransform = '';
  
  switch (particle.motionType) {
    case 'drift':
      motionClass = 'animate-cellular-drift-minimal';
      break;
    case 'float':
      motionClass = 'animate-cellular-particle-float';
      break;
    case 'orbital':
      motionClass = 'animate-orbital-motion';
      customTransform = `translateX(${particle.pathRadius}px)`;
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
  const organicRadius = particle.motionType === 'morph' || particle.motionType === 'cluster' 
    ? `${35 + Math.sin(particle.pulseOffset) * 25}% ${65 - Math.sin(particle.pulseOffset) * 25}% ${45 + Math.cos(particle.pulseOffset) * 20}% ${55 - Math.cos(particle.pulseOffset) * 20}% / ${25 + Math.sin(particle.pulseOffset * 1.4) * 20}% ${75 - Math.sin(particle.pulseOffset * 1.4) * 20}% ${65 + Math.cos(particle.pulseOffset * 0.8) * 15}% ${35 - Math.cos(particle.pulseOffset * 0.8) * 15}%`
    : '50%';

  // Depth-based blur for 3D effect
  const depthBlur = particle.depthLayer === 'background' ? 'blur(0.8px)' : 
                   particle.depthLayer === 'middle' ? 'blur(0.4px)' : 'blur(0.2px)';

  return (
    <div
      className={`absolute ${motionClass}`}
      style={{
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        background: backgroundStyle,
        opacity: finalOpacity,
        animationDuration: `${particle.duration}s`,
        animationDelay: `${particle.delay}s`,
        filter: depthBlur,
        transform: `scale(1) ${customTransform}`,
        borderRadius: organicRadius,
        boxShadow: boxShadowStyle,
        transition: 'all 0.4s ease-out',
        zIndex: particle.depthLayer === 'foreground' ? 3 : particle.depthLayer === 'middle' ? 2 : 1,
      }}
    />
  );
};

export default CellularParticle;
