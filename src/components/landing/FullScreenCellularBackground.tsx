
import React, { useRef } from 'react';
import CellularCore from './background/CellularCore';
import MembraneFlows from './background/MembraneFlows';
import ParticleSystem from './background/ParticleSystem';
import LightRaySystem from './background/LightRaySystem';
import NeuralNetwork from './background/NeuralNetwork';
import EdgeFadeOverlay from './background/EdgeFadeOverlay';

type FullScreenCellularBackgroundProps = {
  isVisible: boolean;
  mousePosition: {x: number, y: number};
  scrollPosition: number;
};

const FullScreenCellularBackground: React.FC<FullScreenCellularBackgroundProps> = ({ 
  isVisible,
  mousePosition,
  scrollPosition
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Enhanced dynamic properties for cinematic experience
  const dynamicIntensity = Math.max(0.4, 1 - (scrollPosition / 3000));
  const parallaxOffset = scrollPosition * 0.15;
  const scaleVariation = 1 + (scrollPosition / 8000);
  
  // Enhanced cursor interaction intensity
  const cursorIntensity = Math.sqrt(
    Math.pow(mousePosition.x - 0.5, 2) + Math.pow(mousePosition.y - 0.5, 2)
  );
  const cursorGlow = 0.3 + (1 - cursorIntensity) * 0.7;
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      style={{
        opacity: isVisible ? dynamicIntensity : 0,
        transition: 'opacity 3s cubic-bezier(0.19, 1, 0.22, 1)',
        transform: `translateY(${parallaxOffset}px) scale(${scaleVariation})`,
        filter: `brightness(${0.9 + cursorGlow * 0.3})`,
      }}
    >
      {/* Large-scale cellular core structures - cinematic presence */}
      <CellularCore 
        isVisible={isVisible}
        cursorGlow={cursorGlow}
        scrollPosition={scrollPosition}
      />
      
      {/* Enhanced membrane wave structures - cinematic flow */}
      <MembraneFlows 
        isVisible={isVisible}
        cursorGlow={cursorGlow}
        cursorIntensity={cursorIntensity}
        mousePosition={mousePosition}
        scrollPosition={scrollPosition}
      />
      
      {/* Enhanced dynamic particle system - 3 layers for depth */}
      <ParticleSystem 
        cursorGlow={cursorGlow}
        cursorIntensity={cursorIntensity}
        mousePosition={mousePosition}
      />
      
      {/* Enhanced light ray system - cinematic atmosphere */}
      <LightRaySystem 
        cursorGlow={cursorGlow}
        cursorIntensity={cursorIntensity}
        scrollPosition={scrollPosition}
      />
      
      {/* Enhanced SVG neural network - connecting tissue */}
      <NeuralNetwork 
        cursorGlow={cursorGlow}
        cursorIntensity={cursorIntensity}
      />
      
      {/* Cinematic edge fade overlay */}
      <EdgeFadeOverlay />
    </div>
  );
};

export default FullScreenCellularBackground;
