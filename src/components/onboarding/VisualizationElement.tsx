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
    // Create 12-18 particles with varied properties
    const particleCount = Math.floor(Math.random() * 7) + 12;
    const newParticles = Array.from({ length: particleCount }).map((_, index) => {
      // Random position within circle boundaries (using polar coordinates for better distribution)
      const radius = Math.random() * 0.7; // Keep within 70% of container radius
      const angle = Math.random() * Math.PI * 2;
      // Convert polar to cartesian coordinates (centered at 50%)
      const x = 50 + radius * Math.cos(angle) * 30;
      const y = 50 + radius * Math.sin(angle) * 30;
      
      // Random size between 2-8px
      const size = Math.random() * 6 + 2;
      
      // Random opacity between 0.15-0.65
      const opacity = Math.random() * 0.5 + 0.15;
      
      // Movement properties
      const speed = Math.random() * 0.8 + 0.3; // Slow, gentle movement
      const direction = Math.random() * Math.PI * 2; // Random initial direction
      
      // Color selection - mix of whites and subtle accent colors
      const colorRandom = Math.random();
      let color;
      
      if (colorRandom > 0.82) {
        // ~18% chance for muted violet
        color = "beautyagent-muted-violet";
      } else if (colorRandom > 0.65) {
        // ~17% chance for burnt orange
        color = "burnt-orange";
      } else {
        // 65% chance for whites/off-whites
        color = Math.random() > 0.5 ? "white" : "light-grey";
      }
      
      // Some particles have subtle glow
      const glow = Math.random() > 0.7;
      
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
          const randomFactor = (Math.random() - 0.5) * 0.1;
          const newX = particle.x + Math.cos(newDirection) * particle.speed + randomFactor;
          const newY = particle.y + Math.sin(newDirection) * particle.speed + randomFactor;
          
          // Boundary check - keep particles within outer rim
          const newDx = newX - 50;
          const newDy = newY - 50;
          const newDistance = Math.sqrt(newDx * newDx + newDy * newDy);
          
          // If particle would go outside boundary, adjust
          if (newDistance > 36) {
            // Reflect back or redirect toward center
            return {
              ...particle,
              direction: Math.atan2(-newDy, -newDx) + Math.random() * 0.2 - 0.1
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
      {/* Main circular biomorphic container - preserved from original design */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4
                    w-[60vh] h-[60vh] max-w-[700px] max-h-[700px] min-w-[300px] min-h-[300px]
                    morphing-shape bg-gradient-light opacity-40 backdrop-blur-sm
                    border border-white/10">
        {/* No more static central dot */}
        
        {/* Dynamic particles with subtle motion */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className={cn(
              "absolute rounded-full transition-all duration-1000",
              particle.glow ? "glow-subtle" : "",
              {
                "bg-white/60": particle.color === "white",
                "bg-beautyagent-light-grey/60": particle.color === "light-grey",
                "bg-beautyagent-muted-violet/40": particle.color === "beautyagent-muted-violet",
                "bg-burnt-orange/35": particle.color === "burnt-orange"
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
