
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

export const generateCellularParticles = (count: number = 120): CellularParticle[] => {
  // Enhanced cluster distribution for more organic spread
  const clusterCenters = [
    { x: 15, y: 25 }, { x: 35, y: 15 }, { x: 55, y: 30 }, 
    { x: 75, y: 20 }, { x: 85, y: 45 }, { x: 65, y: 60 },
    { x: 45, y: 75 }, { x: 25, y: 85 }, { x: 10, y: 65 },
    { x: 90, y: 25 }, { x: 80, y: 70 }, { x: 20, y: 50 },
    { x: 60, y: 10 }, { x: 40, y: 40 }, { x: 70, y: 80 }
  ];

  return Array.from({ length: count }, (_, i) => {
    const cluster = clusterCenters[Math.floor(Math.random() * clusterCenters.length)];
    const clusterSpread = 20 + Math.random() * 40;
    
    const x = Math.max(2, Math.min(98, cluster.x + (Math.random() - 0.5) * clusterSpread));
    const y = Math.max(2, Math.min(98, cluster.y + (Math.random() - 0.5) * clusterSpread));
    
    // Enhanced depth distribution for richer layering
    const depthRandom = Math.random();
    let depthLayer: 'background' | 'middle' | 'foreground';
    let size: number;
    let baseOpacity: number;
    let speed: number;
    
    if (depthRandom > 0.8) { // 20% foreground - larger, more visible
      depthLayer = 'foreground';
      size = 25 + Math.random() * 40;
      baseOpacity = 0.6 + Math.random() * 0.25;
      speed = 0.8 + Math.random() * 0.3;
    } else if (depthRandom > 0.45) { // 35% middle
      depthLayer = 'middle';
      size = 15 + Math.random() * 28;
      baseOpacity = 0.4 + Math.random() * 0.3;
      speed = 0.6 + Math.random() * 0.3;
    } else { // 45% background
      depthLayer = 'background';
      size = 8 + Math.random() * 20;
      baseOpacity = 0.25 + Math.random() * 0.25;
      speed = 0.4 + Math.random() * 0.25;
    }
    
    const opacity = baseOpacity;
    const baseDuration = 40 + Math.random() * 60;
    const duration = baseDuration / speed;
    const delay = Math.random() * 40;
    
    // Enhanced color distribution with subtle accent integration
    let color: 'white' | 'light-grey' | 'accent' | 'ultra-subtle' | 'violet-hint' | 'orange-hint';
    const colorRandom = Math.random();
    
    if (depthLayer === 'foreground') {
      if (colorRandom > 0.92) {
        color = 'violet-hint';
      } else if (colorRandom > 0.84) {
        color = 'orange-hint';
      } else if (colorRandom > 0.7) {
        color = 'accent';
      } else if (colorRandom > 0.45) {
        color = 'light-grey';
      } else {
        color = 'white';
      }
    } else {
      if (colorRandom > 0.96) {
        color = 'violet-hint';
      } else if (colorRandom > 0.92) {
        color = 'orange-hint';
      } else if (colorRandom > 0.8) {
        color = 'accent';
      } else if (colorRandom > 0.55) {
        color = 'ultra-subtle';
      } else if (colorRandom > 0.3) {
        color = 'light-grey';
      } else {
        color = 'white';
      }
    }
    
    // Enhanced motion variety for more organic behavior
    const motionTypes: Array<'drift' | 'morph' | 'division' | 'respiration' | 'membrane' | 'cluster'> = 
      ['drift', 'morph', 'division', 'respiration', 'membrane', 'cluster'];
    const motionType = motionTypes[Math.floor(Math.random() * motionTypes.length)];
    
    // More varied organic shapes
    const organicShapes: Array<'amoeba' | 'oval' | 'irregular' | 'membrane' | 'cluster'> = 
      ['amoeba', 'oval', 'irregular', 'membrane', 'cluster'];
    const organicShape = organicShapes[Math.floor(Math.random() * organicShapes.length)];
    
    const pathRadius = 12 + Math.random() * 30;
    const pulseOffset = Math.random() * Math.PI * 2;
    const growthPhase = Math.random() * Math.PI * 2;
    const interactionRadius = size * (1.8 + Math.random() * 0.7);
    
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
