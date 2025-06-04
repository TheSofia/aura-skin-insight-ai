
interface CellularParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: 'white' | 'light-grey' | 'accent' | 'ultra-subtle' | 'violet-hint' | 'orange-hint';
  motionType: 'drift' | 'morph' | 'division' | 'respiration' | 'membrane' | 'cluster';
  pathRadius: number;
  pulseOffset: number;
  depthLayer: 'background' | 'middle' | 'foreground';
  speed: number;
  organicShape: 'amoeba' | 'oval' | 'irregular' | 'membrane' | 'cluster';
  growthPhase: number;
  interactionRadius: number;
}

export const generateCellularParticles = (count: number = 80): CellularParticle[] => {
  // Reduced count for more sophisticated, larger cellular forms
  const clusterCenters = [
    { x: 20, y: 30 }, { x: 70, y: 20 }, { x: 40, y: 60 }, 
    { x: 80, y: 75 }, { x: 15, y: 80 }, { x: 60, y: 45 },
    { x: 90, y: 35 }, { x: 25, y: 15 }, { x: 50, y: 85 }
  ];

  return Array.from({ length: count }, (_, i) => {
    const cluster = clusterCenters[Math.floor(Math.random() * clusterCenters.length)];
    const clusterSpread = 25 + Math.random() * 35;
    
    const x = Math.max(5, Math.min(95, cluster.x + (Math.random() - 0.5) * clusterSpread));
    const y = Math.max(5, Math.min(95, cluster.y + (Math.random() - 0.5) * clusterSpread));
    
    // Enhanced size range for more prominent cellular forms
    const depthRandom = Math.random();
    let depthLayer: 'background' | 'middle' | 'foreground';
    let size: number;
    let baseOpacity: number;
    let speed: number;
    
    if (depthRandom > 0.75) { // 25% foreground - larger, more visible
      depthLayer = 'foreground';
      size = 20 + Math.random() * 35;
      baseOpacity = 0.5 + Math.random() * 0.3;
      speed = 0.7 + Math.random() * 0.3;
    } else if (depthRandom > 0.4) { // 35% middle
      depthLayer = 'middle';
      size = 12 + Math.random() * 25;
      baseOpacity = 0.35 + Math.random() * 0.25;
      speed = 0.5 + Math.random() * 0.3;
    } else { // 40% background
      depthLayer = 'background';
      size = 6 + Math.random() * 18;
      baseOpacity = 0.2 + Math.random() * 0.2;
      speed = 0.3 + Math.random() * 0.2;
    }
    
    const opacity = baseOpacity;
    const baseDuration = 35 + Math.random() * 50;
    const duration = baseDuration / speed;
    const delay = Math.random() * 30;
    
    // Enhanced color assignment with subtle accent integration
    let color: 'white' | 'light-grey' | 'accent' | 'ultra-subtle' | 'violet-hint' | 'orange-hint';
    const colorRandom = Math.random();
    
    if (depthLayer === 'foreground') {
      if (colorRandom > 0.9) {
        color = 'violet-hint';
      } else if (colorRandom > 0.8) {
        color = 'orange-hint';
      } else if (colorRandom > 0.65) {
        color = 'accent';
      } else if (colorRandom > 0.4) {
        color = 'light-grey';
      } else {
        color = 'white';
      }
    } else {
      if (colorRandom > 0.95) {
        color = 'violet-hint';
      } else if (colorRandom > 0.9) {
        color = 'orange-hint';
      } else if (colorRandom > 0.75) {
        color = 'accent';
      } else if (colorRandom > 0.5) {
        color = 'ultra-subtle';
      } else if (colorRandom > 0.25) {
        color = 'light-grey';
      } else {
        color = 'white';
      }
    }
    
    // Enhanced motion types for organic cellular behavior
    const motionTypes: Array<'drift' | 'morph' | 'division' | 'respiration' | 'membrane' | 'cluster'> = 
      ['drift', 'morph', 'division', 'respiration', 'membrane', 'cluster'];
    const motionType = motionTypes[Math.floor(Math.random() * motionTypes.length)];
    
    // Organic shape variations
    const organicShapes: Array<'amoeba' | 'oval' | 'irregular' | 'membrane' | 'cluster'> = 
      ['amoeba', 'oval', 'irregular', 'membrane', 'cluster'];
    const organicShape = organicShapes[Math.floor(Math.random() * organicShapes.length)];
    
    const pathRadius = 10 + Math.random() * 25;
    const pulseOffset = Math.random() * Math.PI * 2;
    const growthPhase = Math.random() * Math.PI * 2;
    const interactionRadius = size * (1.5 + Math.random() * 0.5);
    
    return {
      id: i,
      x,
      y,
      size,
      opacity,
      duration,
      delay,
      color,
      motionType,
      pathRadius,
      pulseOffset,
      depthLayer,
      speed,
      organicShape,
      growthPhase,
      interactionRadius
    };
  });
};

export type { CellularParticle };
