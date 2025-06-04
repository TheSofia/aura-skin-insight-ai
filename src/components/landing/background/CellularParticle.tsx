
import React from 'react';
import { CellularParticle as CellularParticleType } from '@/utils/cellularParticleGenerator';

interface CellularParticleProps {
  particle: CellularParticleType;
}

const CellularParticle: React.FC<CellularParticleProps> = ({ particle }) => {
  // Enhanced color styling with sophisticated cellular appearance
  let backgroundStyle = '';
  let boxShadowStyle = '';
  let borderStyle = '';
  
  // Depth-based opacity and glow effects
  const depthOpacityMultiplier = particle.depthLayer === 'foreground' ? 1 : 
                               particle.depthLayer === 'middle' ? 0.8 : 0.6;
  const finalOpacity = particle.opacity * depthOpacityMultiplier;
  
  // Cellular membrane appearance with subtle internal structure
  switch (particle.color) {
    case 'white':
      backgroundStyle = `radial-gradient(ellipse at 35% 25%, rgba(255, 255, 255, ${finalOpacity * 0.9}) 0%, rgba(248, 250, 252, ${finalOpacity * 0.7}) 40%, rgba(241, 245, 249, ${finalOpacity * 0.5}) 80%, rgba(255, 255, 255, ${finalOpacity * 0.3}) 100%)`;
      boxShadowStyle = `0 0 ${particle.size * 0.8}px rgba(255, 255, 255, ${finalOpacity * 0.4}), inset 0 0 ${particle.size * 0.3}px rgba(255, 255, 255, ${finalOpacity * 0.2})`;
      borderStyle = `1px solid rgba(255, 255, 255, ${finalOpacity * 0.2})`;
      break;
    case 'light-grey':
      backgroundStyle = `radial-gradient(ellipse at 30% 20%, rgba(248, 250, 252, ${finalOpacity * 0.8}) 0%, rgba(241, 245, 249, ${finalOpacity * 0.6}) 45%, rgba(226, 232, 240, ${finalOpacity * 0.4}) 85%, rgba(248, 250, 252, ${finalOpacity * 0.2}) 100%)`;
      boxShadowStyle = `0 0 ${particle.size * 0.9}px rgba(241, 245, 249, ${finalOpacity * 0.3}), inset 0 0 ${particle.size * 0.4}px rgba(255, 255, 255, ${finalOpacity * 0.15})`;
      borderStyle = `1px solid rgba(241, 245, 249, ${finalOpacity * 0.25})`;
      break;
    case 'ultra-subtle':
      backgroundStyle = `radial-gradient(ellipse at 40% 30%, rgba(229, 231, 235, ${finalOpacity * 0.7}) 0%, rgba(209, 213, 219, ${finalOpacity * 0.5}) 50%, rgba(229, 231, 235, ${finalOpacity * 0.3}) 90%, rgba(243, 244, 246, ${finalOpacity * 0.1}) 100%)`;
      boxShadowStyle = `0 0 ${particle.size * 0.7}px rgba(229, 231, 235, ${finalOpacity * 0.25}), inset 0 0 ${particle.size * 0.3}px rgba(255, 255, 255, ${finalOpacity * 0.1})`;
      borderStyle = `1px solid rgba(229, 231, 235, ${finalOpacity * 0.2})`;
      break;
    case 'accent':
      backgroundStyle = `radial-gradient(ellipse at 25% 35%, rgba(209, 213, 219, ${finalOpacity * 0.8}) 0%, rgba(156, 163, 175, ${finalOpacity * 0.6}) 40%, rgba(209, 213, 219, ${finalOpacity * 0.4}) 80%, rgba(243, 244, 246, ${finalOpacity * 0.2}) 100%)`;
      boxShadowStyle = `0 0 ${particle.size * 1.1}px rgba(209, 213, 219, ${finalOpacity * 0.4}), inset 0 0 ${particle.size * 0.4}px rgba(255, 255, 255, ${finalOpacity * 0.2})`;
      borderStyle = `1px solid rgba(209, 213, 219, ${finalOpacity * 0.3})`;
      break;
    case 'violet-hint':
      backgroundStyle = `radial-gradient(ellipse at 45% 25%, rgba(139, 92, 246, ${finalOpacity * 0.15}) 0%, rgba(124, 58, 237, ${finalOpacity * 0.1}) 35%, rgba(248, 250, 252, ${finalOpacity * 0.6}) 70%, rgba(255, 255, 255, ${finalOpacity * 0.3}) 100%)`;
      boxShadowStyle = `0 0 ${particle.size * 1.3}px rgba(124, 58, 237, ${finalOpacity * 0.12}), inset 0 0 ${particle.size * 0.5}px rgba(139, 92, 246, ${finalOpacity * 0.08})`;
      borderStyle = `1px solid rgba(124, 58, 237, ${finalOpacity * 0.15})`;
      break;
    case 'orange-hint':
      backgroundStyle = `radial-gradient(ellipse at 35% 40%, rgba(251, 146, 60, ${finalOpacity * 0.12}) 0%, rgba(255, 119, 69, ${finalOpacity * 0.08}) 40%, rgba(254, 249, 195, ${finalOpacity * 0.5}) 75%, rgba(255, 255, 255, ${finalOpacity * 0.3}) 100%)`;
      boxShadowStyle = `0 0 ${particle.size * 1.2}px rgba(255, 119, 69, ${finalOpacity * 0.1}), inset 0 0 ${particle.size * 0.4}px rgba(251, 146, 60, ${finalOpacity * 0.06})`;
      borderStyle = `1px solid rgba(255, 119, 69, ${finalOpacity * 0.12})`;
      break;
  }

  // Enhanced motion class assignment based on cellular behavior
  let motionClass = '';
  let customTransform = '';
  
  switch (particle.motionType) {
    case 'drift':
      motionClass = 'animate-cellular-drift-organic';
      customTransform = `translateX(${particle.pathRadius}px)`;
      break;
    case 'morph':
      motionClass = 'animate-cellular-morph-advanced';
      break;
    case 'division':
      motionClass = 'animate-cellular-division';
      break;
    case 'respiration':
      motionClass = 'animate-cellular-respiration';
      break;
    case 'membrane':
      motionClass = 'animate-membrane-fluctuation';
      break;
    case 'cluster':
      motionClass = 'animate-cellular-cluster-interaction';
      break;
  }

  // Advanced organic border radius based on shape type
  let organicRadius = '';
  const baseRadius = 35 + Math.sin(particle.pulseOffset) * 20;
  const variation1 = 25 + Math.cos(particle.pulseOffset * 1.3) * 15;
  const variation2 = 45 + Math.sin(particle.pulseOffset * 0.7) * 25;
  const variation3 = 55 + Math.cos(particle.pulseOffset * 1.1) * 20;
  
  switch (particle.organicShape) {
    case 'amoeba':
      organicRadius = `${baseRadius}% ${100 - baseRadius}% ${variation2}% ${100 - variation2}% / ${variation1}% ${100 - variation1}% ${variation3}% ${100 - variation3}%`;
      break;
    case 'oval':
      organicRadius = `${baseRadius + 10}% ${100 - baseRadius - 10}% ${baseRadius + 5}% ${100 - baseRadius - 5}% / ${baseRadius - 5}% ${100 - baseRadius + 5}% ${baseRadius + 15}% ${100 - baseRadius - 15}%`;
      break;
    case 'irregular':
      organicRadius = `${variation1}% ${variation2}% ${variation3}% ${baseRadius}% / ${baseRadius + 10}% ${variation1 - 5}% ${variation2 + 8}% ${variation3 - 3}%`;
      break;
    case 'membrane':
      organicRadius = `${baseRadius + 5}% ${100 - baseRadius - 5}% ${baseRadius - 8}% ${100 - baseRadius + 8}% / ${baseRadius + 12}% ${100 - baseRadius - 12}% ${baseRadius}% ${100 - baseRadius}%`;
      break;
    case 'cluster':
      organicRadius = `${variation2}% ${100 - variation2}% ${baseRadius + 15}% ${100 - baseRadius - 15}% / ${variation3 - 10}% ${100 - variation3 + 10}% ${variation1 + 5}% ${100 - variation1 - 5}%`;
      break;
  }

  // Depth-based blur and effects for 3D cellular appearance
  const depthBlur = particle.depthLayer === 'background' ? 'blur(1.2px)' : 
                   particle.depthLayer === 'middle' ? 'blur(0.6px)' : 'blur(0.3px)';
  
  const depthBrightness = particle.depthLayer === 'foreground' ? 'brightness(1.1)' : 
                         particle.depthLayer === 'middle' ? 'brightness(1.05)' : 'brightness(1)';

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
        filter: `${depthBlur} ${depthBrightness}`,
        transform: `scale(1) ${customTransform}`,
        borderRadius: organicRadius,
        boxShadow: boxShadowStyle,
        border: borderStyle,
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: particle.depthLayer === 'foreground' ? 3 : particle.depthLayer === 'middle' ? 2 : 1,
        backdropFilter: 'blur(0.5px)',
        WebkitBackdropFilter: 'blur(0.5px)',
      }}
    >
      {/* Internal cellular structure for enhanced realism */}
      <div
        className="absolute inset-2 opacity-30"
        style={{
          background: `radial-gradient(circle at 60% 40%, rgba(255, 255, 255, 0.3) 0%, transparent 60%)`,
          borderRadius: `${baseRadius - 10}% ${100 - baseRadius + 10}% ${variation1}% ${100 - variation1}% / ${variation2 - 5}% ${100 - variation2 + 5}% ${baseRadius + 5}% ${100 - baseRadius - 5}%`,
          filter: 'blur(2px)',
        }}
      />
      
      {/* Cellular nucleus or core structure */}
      {particle.depthLayer === 'foreground' && (
        <div
          className="absolute"
          style={{
            width: `${particle.size * 0.2}px`,
            height: `${particle.size * 0.15}px`,
            left: '40%',
            top: '35%',
            background: `radial-gradient(ellipse, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)`,
            borderRadius: '50%',
            filter: 'blur(1px)',
            opacity: 0.6,
          }}
        />
      )}
    </div>
  );
};

export default CellularParticle;
