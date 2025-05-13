
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const VisualizationElement = () => {
  // State for particles - dynamic elements that will replace static dot
  const [particles, setParticles] = useState<Array<{
    id: number;
    size: number;
    x: number; 
    y: number;
    opacity: number;
    speed: number;
    direction: number;
    color: string;
    glow: boolean;
  }>>([]);

  // Generate particles on component mount
  useEffect(() => {
    // Create 12-18 particles with varied properties - increased count to match screenshot better
    const particleCount = Math.floor(Math.random() * 8) + 14; // Slightly increased for better density
    const newParticles = Array.from({ length: particleCount }).map((_, index) => {
      // Random position within circle boundaries (using polar coordinates for better distribution)
      const radius = Math.random() * 0.6; // Keep within 60% of container radius for tighter grouping like in screenshot
      const angle = Math.random() * Math.PI * 2;
      // Convert polar to cartesian coordinates (centered at 50%)
      const x = 50 + radius * Math.cos(angle) * 30;
      const y = 50 + radius * Math.sin(angle) * 30;
      
      // Random size between 3-9px - adjusted for more variation like in screenshot
      const size = Math.random() * 6 + 3;
      
      // Random opacity between 0.2-0.7 - adjusted for better visibility
      const opacity = Math.random() * 0.5 + 0.2;
      
      // Movement properties
      const speed = Math.random() * 0.6 + 0.2; // Slower, gentler movement to match screenshot
      const direction = Math.random() * Math.PI * 2; // Random initial direction
      
      // Color selection - focused more on peach/orange tones like in screenshot
      const colorRandom = Math.random();
      let color;
      
      if (colorRandom > 0.75) {
        // 25% chance for muted peach
        color = "peach";
      } else if (colorRandom > 0.45) {
        // 30% chance for burnt orange
        color = "burnt-orange";
      } else {
        // 45% chance for light peach/whites
        color = Math.random() > 0.5 ? "light-peach" : "white";
      }
      
      // Some particles have subtle glow
      const glow = Math.random() > 0.6;
      
      return {
        id: index,
        size,
        x,
        y,
        opacity,
        speed,
        direction,
        color,
        glow
      };
    });
    
    setParticles(newParticles);
  }, []);

  // Animation for particles movement
  useEffect(() => {
    // Create animation frame for particle movement
    const animationFrame = requestAnimationFrame(function animate() {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Calculate new position with biomorphic movement
          // Complex movement pattern to create organic, cell-like motion
          // Particles tend to drift in circular/orbital patterns with slight variations
          
          // Calculate distance from center (50,50)
          const dx = particle.x - 50;
          const dy = particle.y - 50;
          const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
          
          // Direction adjustment based on orbital tendency
          // Creates a gentle orbital/gravitational effect
          const orbitalInfluence = Math.max(0, (30 - distanceFromCenter) / 30) * 0.01;
          const newDirection = particle.direction + 
            (Math.atan2(dy, dx) + Math.PI/2) * orbitalInfluence;
          
          // Calculate new position with some randomness for organic feel
          const randomFactor = (Math.random() - 0.5) * 0.08; // Reduced randomness for more stable movement
          const newX = particle.x + Math.cos(newDirection) * particle.speed + randomFactor;
          const newY = particle.y + Math.sin(newDirection) * particle.speed + randomFactor;
          
          // Boundary check - keep particles within outer rim
          const newDx = newX - 50;
          const newDy = newY - 50;
          const newDistance = Math.sqrt(newDx * newDx + newDy * newDy);
          
          // If particle would go outside boundary, adjust
          if (newDistance > 30) { // Tighter boundaries to match screenshot
            // Reflect back or redirect toward center
            return {
              ...particle,
              direction: Math.atan2(-newDy, -newDx) + Math.random() * 0.15 - 0.075 // Reduced randomness
            };
          }
          
          return {
            ...particle,
            x: newX,
            y: newY,
            direction: newDirection + randomFactor
          };
        })
      );
      
      requestAnimationFrame(animate);
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-64 md:h-96 pointer-events-none overflow-hidden">
      {/* Main circular biomorphic container - aligned with screenshot appearance */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4
                    w-[60vh] h-[60vh] max-w-[700px] max-h-[700px] min-w-[300px] min-h-[300px]
                    morphing-shape bg-gradient-light opacity-40 backdrop-blur-sm
                    border border-white/10">
        
        {/* Concentric circles to match screenshot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[85%] h-[85%] rounded-full border border-gray-200/10"></div>
          <div className="absolute w-[70%] h-[70%] rounded-full border border-gray-200/15"></div>
          <div className="absolute w-[55%] h-[55%] rounded-full border border-gray-200/20"></div>
          <div className="absolute w-[40%] h-[40%] rounded-full border border-gray-200/25"></div>
        </div>
        
        {/* Semi-transparent irregular membrane shape like in screenshot */}
        <div className="absolute w-[75%] h-[75%] left-[12.5%] top-[12.5%] rounded-full 
                      opacity-30 animate-cellular-motion"
             style={{
               background: 'radial-gradient(circle at 60% 40%, rgba(236, 236, 236, 0.2) 0%, rgba(236, 236, 236, 0.1) 40%, rgba(236, 236, 236, 0.05) 70%, transparent 100%)',
               backdropFilter: 'blur(0.5px)',
               animationDuration: '17s',
             }}>
        </div>
        
        {/* Dynamic particles with subtle motion */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className={cn(
              "absolute rounded-full transition-all duration-1000",
              particle.glow ? "glow-subtle" : "",
              {
                "bg-white/80": particle.color === "white",
                "bg-[#fcf0e6]/80": particle.color === "light-peach",
                "bg-[#f9ad7e]/60": particle.color === "peach",
                "bg-[#f97316]/50": particle.color === "burnt-orange"
              }
            )}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              transform: 'translate(-50%, -50%)',
              filter: particle.glow ? 
                `blur(${particle.size/4}px) brightness(1.2)` : 
                `blur(${particle.size/8}px)`
            }}
          />
        ))}
        
        {/* Subtle cellular rim highlight effect */}
        <div className="absolute inset-0 rounded-full opacity-40
                      bg-gradient-radial from-transparent via-transparent to-white/10" />
      </div>
    </div>
  );
};

export default VisualizationElement;
