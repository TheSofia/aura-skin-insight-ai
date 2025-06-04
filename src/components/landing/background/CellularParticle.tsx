
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
                               particle.depthLayer === 'middle' ? 0.85 : 0.7;
  const finalOpacity = particle.opacity * depthOpacityMultiplier;
  
  // Enhanced cellular membrane appearance with subtle accent integration
  switch (particle.color) {
    case 'white':
      backgroundStyle = `radial-gradient(ellipse at 32% 28%, rgba(255, 255, 255, ${finalOpacity * 0.95}) 0%, rgba(248, 250, 252, ${finalOpacity * 0.8}) 35%, rgba(241, 245, 249, ${finalOpacity * 0.6}) 70%, rgba(255, 255, 255, ${finalOpacity * 0.4}) 100%)`;
      boxShadowStyle = `0 0 ${particle.size * 0.9}px rgba(255, 255, 255, ${finalOpacity * 0.5}), inset 0 0 ${particle.size * 0.4}px rgba(255, 255, 255, ${finalOpacity * 0.25})`;
      borderStyle = `1px solid rgba(255, 255, 255, ${finalOpacity * 0.3})`;
      break;
    case 'light-grey':
      backgroundStyle = `radial-gradient(ellipse at 28% 25%, rgba(248, 250, 252, ${finalOpacity * 0.9}) 0%, rgba(241, 245, 249, ${finalOpacity * 0.75}) 40%, rgba(226, 232, 240, ${finalOpacity * 0.55}) 75%, rgba(248, 250, 252, ${finalOpacity * 0.3}) 100%)`;
      boxShadowStyle = `0 0 ${particle.size * 1.0}px rgba(241, 245, 249, ${finalOpacity * 0.4}), inset 0 0 ${particle.size * 0.45}px rgba(255, 255, 255, ${finalOpacity * 0.2})`;
      borderStyle = `1px solid rgba(241, 245, 249, ${finalOpacity * 0.35})`;
      break;
    case 'ultra-subtle':
      backgroundStyle = `radial-gradient(ellipse at 38% 32%, rgba(229, 231, 235, ${finalOpacity * 0.8}) 0%, rgba(209, 213, 219, ${finalOpacity * 0.6}) 45%, rgba(229, 231, 235, ${finalOpacity * 0.4}) 80%, rgba(243, 244, 246, ${finalOpacity * 0.2}) 100%)`;
      boxShadowStyle = `0 0 ${particle.size * 0.8}px rgba(229, 231, 235, ${finalOpacity * 0.35}), inset 0 0 ${particle.size * 0.35}px rgba(255, 255, 255, ${finalOpacity * 0.15})`;
      borderStyle = `1px solid rgba(229, 231, 235, ${finalOpacity * 0.25})`;
      break;
    case 'accent':
      backgroundStyle = `radial-gradient(ellipse at 30% 35%, rgba(209, 213, 219, ${finalOpacity * 0.85}) 0%, rgba(156, 163, 175, ${finalOpacity * 0.7}) 38%, rgba(209, 213, 219, ${finalOpacity * 0.5}) 75%, rgba(243, 244, 246, ${finalOpacity * 0.3}) 100%)`;
      boxShadowStyle = `0 0 ${particle.size * 1.2}px rgba(209, 213, 219, ${finalOpacity * 0.5}), inset 0 0 ${particle.size * 0.5}px rgba(255, 255, 255, ${finalOpacity * 0.25})`;
      borderStyle = `1px solid rgba(209, 213, 219, ${finalOpacity * 0.4})`;
      break;
    case 'violet-hint':
      backgroundStyle = `radial-gradient(ellipse at 42% 28%, rgba(139, 92, 246, ${finalOpacity * 0.15}) 0%, rgba(124, 58, 237, ${finalOpacity * 0.1}) 30%, rgba(248, 250, 252, ${finalOpacity * 0.65}) 65%, rgba(255, 255, 255, ${finalOpacity * 0.35}) 100%)`;
      boxShadowStyle = `0 0 ${particle.size * 1.3}px rgba(124, 58, 237, ${finalOpacity * 0.12}), inset 0 0 ${particle.size * 0.55}px rgba(139, 92, 246, ${finalOpacity * 0.08})`;
      borderStyle = `1px solid rgba(124, 58, 237, ${finalOpacity * 0.18})`;
      break;
    case 'orange-hint':
      backgroundStyle = `radial-gradient(ellipse at 35% 42%, rgba(251, 146, 60, ${finalOpacity * 0.12}) 0%, rgba(255, 119, 69, ${finalOpacity * 0.08}) 35%, rgba(254, 249, 195, ${finalOpacity * 0.55}) 70%, rgba(255, 255, 255, ${finalOpacity * 0.35}) 100%)`;
      boxShadowStyle = `0 0 ${particle.size * 1.25}px rgba(255, 119, 69, ${finalOpacity * 0.1}), inset 0 0 ${particle.size * 0.5}px rgba(251, 146, 60, ${finalOpacity * 0.06})`;
      borderStyle = `1px solid rgba(255, 119, 69, ${finalOpacity * 0.12})`;
      break;
  }

  // Enhanced motion class assignment
  let motionClass = '';
  let customTransform = '';
  
  switch (particle.motionType) {
    case 'drift':
      motionClass = 'animate-cellular-drift-enhanced';
      customTransform = `translateX(${particle.pathRadius}px)`;
      break;
    case 'morph':
      motionClass = 'animate-cellular-morph-enhanced';
      break;
    case 'division':
      motionClass = 'animate-cellular-division';
      break;
    case 'respiration':
      motionClass = 'animate-cellular-respiration-enhanced';
      break;
    case 'membrane':
      motionClass = 'animate-membrane-fluctuation-enhanced';
      break;
    case 'cluster':
      motionClass = 'animate-cellular-cluster-interaction';
      break;
    case 'lifecycle':
      motionClass = 'animate-cellular-lifecycle';
      break;
  }

  // Enhanced organic border radius with more variation including multi-lobed shapes
  let organicRadius = '';
  const baseRadius = 40 + Math.sin(particle.pulseOffset) * 25;
  const variation1 = 30 + Math.cos(particle.pulseOffset * 1.4) * 20;
  const variation2 = 50 + Math.sin(particle.pulseOffset * 0.8) * 30;
  const variation3 = 60 + Math.cos(particle.pulseOffset * 1.2) * 25;
  const variation4 = 35 + Math.sin(particle.pulseOffset * 1.6) * 15;
  
  switch (particle.organicShape) {
    case 'amoeba':
      organicRadius = `${baseRadius}% ${100 - baseRadius}% ${variation2}% ${100 - variation2}% / ${variation1}% ${100 - variation1}% ${variation3}% ${100 - variation3}%`;
      break;
    case 'oval':
      organicRadius = `${baseRadius + 15}% ${100 - baseRadius - 15}% ${baseRadius + 8}% ${100 - baseRadius - 8}% / ${baseRadius - 8}% ${100 - baseRadius + 8}% ${baseRadius + 20}% ${100 - baseRadius - 20}%`;
      break;
    case 'irregular':
      organicRadius = `${variation1}% ${variation2}% ${variation3}% ${baseRadius}% / ${baseRadius + 15}% ${variation1 - 8}% ${variation2 + 12}% ${variation3 - 5}%`;
      break;
    case 'membrane':
      organicRadius = `${baseRadius + 8}% ${100 - baseRadius - 8}% ${baseRadius - 12}% ${100 - baseRadius + 12}% / ${baseRadius + 18}% ${100 - baseRadius - 18}% ${baseRadius}% ${100 - baseRadius}%`;
      break;
    case 'cluster':
      organicRadius = `${variation2}% ${100 - variation2}% ${baseRadius + 20}% ${100 - baseRadius - 20}% / ${variation3 - 15}% ${100 - variation3 + 15}% ${variation1 + 8}% ${100 - variation1 - 8}%`;
      break;
    case 'multi-lobed':
      organicRadius = `${variation1}% ${variation4}% ${variation2}% ${variation3}% ${baseRadius}% ${100 - baseRadius}% ${variation4 + 10}% ${variation1 - 5}% / ${variation2 + 8}% ${variation3 - 12}% ${baseRadius + 5}% ${variation4 + 15}% ${variation1 - 8}% ${variation2}% ${100 - variation3}% ${baseRadius - 10}%`;
      break;
  }

  // Enhanced depth-based effects
  const depthBlur = particle.depthLayer === 'background' ? 'blur(1.2px)' : 
                   particle.depthLayer === 'middle' ? 'blur(0.6px)' : 'blur(0.3px)';
  
  const depthBrightness = particle.depthLayer === 'foreground' ? 'brightness(1.12)' : 
                         particle.depthLayer === 'middle' ? 'brightness(1.06)' : 'brightness(1.02)';

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
        backdropFilter: 'blur(0.6px)',
        WebkitBackdropFilter: 'blur(0.6px)',
      }}
    >
      {/* Enhanced internal cellular structure */}
      <div
        className="absolute inset-2 opacity-35"
        style={{
          background: `radial-gradient(circle at 65% 35%, rgba(255, 255, 255, 0.35) 0%, transparent 60%)`,
          borderRadius: `${baseRadius - 15}% ${100 - baseRadius + 15}% ${variation1}% ${100 - variation1}% / ${variation2 - 8}% ${100 - variation2 + 8}% ${baseRadius + 8}% ${100 - baseRadius - 8}%`,
          filter: 'blur(2px)',
        }}
      />
      
      {/* Enhanced cellular nucleus for larger cells */}
      {particle.depthLayer === 'foreground' && particle.size > 25 && (
        <div
          className="absolute"
          style={{
            width: `${particle.size * 0.22}px`,
            height: `${particle.size * 0.18}px`,
            left: '40%',
            top: '35%',
            background: `radial-gradient(ellipse, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.12) 100%)`,
            borderRadius: '65%',
            filter: 'blur(1px)',
            opacity: 0.6,
          }}
        />
      )}

      {/* Additional organelle for accent colored cells */}
      {(particle.color === 'violet-hint' || particle.color === 'orange-hint') && particle.size > 20 && (
        <div
          className="absolute"
          style={{
            width: `${particle.size * 0.15}px`,
            height: `${particle.size * 0.12}px`,
            left: '60%',
            top: '25%',
            background: particle.color === 'violet-hint' 
              ? `radial-gradient(ellipse, rgba(139, 92, 246, 0.2) 0%, transparent 70%)`
              : `radial-gradient(ellipse, rgba(251, 146, 60, 0.15) 0%, transparent 70%)`,
            borderRadius: '80%',
            filter: 'blur(1.5px)',
            opacity: 0.4,
          }}
        />
      )}
    </div>
  );
};

export default CellularParticle;
