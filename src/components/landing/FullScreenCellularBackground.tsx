
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
  
  // Enhanced dynamic properties for award-winning cinematic experience
  const dynamicIntensity = Math.max(0.5, 1.2 - (scrollPosition / 2500));
  const parallaxOffset = scrollPosition * 0.12;
  const scaleVariation = 1 + (scrollPosition / 6000);
  
  // Enhanced cursor interaction intensity with intelligent responsiveness
  const cursorIntensity = Math.sqrt(
    Math.pow(mousePosition.x - 0.5, 2) + Math.pow(mousePosition.y - 0.5, 2)
  );
  const cursorGlow = 0.4 + (1 - cursorIntensity) * 0.8;
  
  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      style={{
        opacity: isVisible ? dynamicIntensity : 0,
        transition: 'opacity 2.5s cubic-bezier(0.19, 1, 0.22, 1)',
        transform: `translateY(${parallaxOffset}px) scale(${scaleVariation})`,
        filter: `brightness(${1.0 + cursorGlow * 0.4}) contrast(${1.1 + cursorIntensity * 0.2}) saturate(${1.3 + cursorGlow * 0.3})`,
      }}
    >
      {/* Enhanced large-scale intelligent cellular core structures */}
      <CellularCore 
        isVisible={isVisible}
        cursorGlow={cursorGlow}
        scrollPosition={scrollPosition}
      />
      
      {/* Enhanced intelligent membrane wave structures with fluid dynamics */}
      <MembraneFlows 
        isVisible={isVisible}
        cursorGlow={cursorGlow}
        cursorIntensity={cursorIntensity}
        mousePosition={mousePosition}
        scrollPosition={scrollPosition}
      />
      
      {/* Enhanced intelligent dynamic particle system - 3 layers for cinematic depth */}
      <ParticleSystem 
        cursorGlow={cursorGlow}
        cursorIntensity={cursorIntensity}
        mousePosition={mousePosition}
      />
      
      {/* Enhanced intelligent light ray system with connector bridges */}
      <LightRaySystem 
        cursorGlow={cursorGlow}
        cursorIntensity={cursorIntensity}
        scrollPosition={scrollPosition}
      />
      
      {/* Enhanced intelligent SVG neural network - living connective tissue */}
      <NeuralNetwork 
        cursorGlow={cursorGlow}
        cursorIntensity={cursorIntensity}
      />
      
      {/* Refined cinematic edge fade overlay for seamless integration */}
      <EdgeFadeOverlay />
    </div>
  );
};

export default FullScreenCellularBackground;
