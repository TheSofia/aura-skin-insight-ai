
interface CellularParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: 'white' | 'light-grey' | 'accent' | 'ultra-subtle' | 'violet-hint' | 'orange-hint';
  motionType: 'drift' | 'morph' | 'division' | 'respiration' | 'membrane' | 'cluster' | 'lifecycle';
  pathRadius: number;
  pulseOffset: number;
  depthLayer: 'background' | 'middle' | 'foreground';
  speed: number;
  organicShape: 'amoeba' | 'oval' | 'irregular' | 'membrane' | 'cluster' | 'multi-lobed';
  growthPhase: number;
  interactionRadius: number;
  morphDirection: number;
  lifecyclePhase: number;
}

export const generateCellularParticles = (count: number = 85): CellularParticle[] => {
  // Enhanced cluster distribution for more organic spread across the entire canvas
  const clusterCenters = [
    { x: 8, y: 15 }, { x: 25, y: 8 }, { x: 45, y: 18 }, 
    { x: 62, y: 12 }, { x: 78, y: 25 }, { x: 92, y: 35 },
    { x: 85, y: 52 }, { x: 72, y: 68 }, { x: 55, y: 78 },
    { x: 38, y: 85 }, { x: 22, y: 75 }, { x: 12, y: 58 },
    { x: 18, y: 42 }, { x: 35, y: 35 }, { x: 52, y: 45 },
    { x: 68, y: 38 }, { x: 82, y: 58 }, { x: 65, y: 85 },
    { x: 15, y: 92 }, { x: 88, y: 15 }, { x: 5, y: 78 },
    { x: 95, y: 68 }, { x: 42, y: 8 }, { x: 75, y: 92 }
  ];

  return Array.from({ length: count }, (_, i) => {
    const cluster = clusterCenters[Math.floor(Math.random() * clusterCenters.length)];
    const clusterSpread = 15 + Math.random() * 35;
    
    const x = Math.max(1, Math.min(99, cluster.x + (Math.random() - 0.5) * clusterSpread));
    const y = Math.max(1, Math.min(99, cluster.y + (Math.random() - 0.5) * clusterSpread));
    
    // Enhanced depth distribution for richer layering
    const depthRandom = Math.random();
    let depthLayer: 'background' | 'middle' | 'foreground';
    let size: number;
    let baseOpacity: number;
    let speed: number;
    
    if (depthRandom > 0.85) { // 15% foreground - more visible, larger
      depthLayer = 'foreground';
      size = 22 + Math.random() * 35;
      baseOpacity = 0.55 + Math.random() * 0.2;
      speed = 0.7 + Math.random() * 0.25;
    } else if (depthRandom > 0.5) { // 35% middle
      depthLayer = 'middle';
      size = 14 + Math.random() * 25;
      baseOpacity = 0.35 + Math.random() * 0.25;
      speed = 0.55 + Math.random() * 0.25;
    } else { // 50% background
      depthLayer = 'background';
      size = 8 + Math.random() * 18;
      baseOpacity = 0.2 + Math.random() * 0.2;
      speed = 0.4 + Math.random() * 0.2;
    }
    
    const opacity = baseOpacity;
    const baseDuration = 35 + Math.random() * 50;
    const duration = baseDuration / speed;
    const delay = Math.random() * 35;
    
    // Enhanced color distribution with subtle accent integration
    let color: 'white' | 'light-grey' | 'accent' | 'ultra-subtle' | 'violet-hint' | 'orange-hint';
    const colorRandom = Math.random();
    
    if (depthLayer === 'foreground') {
      if (colorRandom > 0.94) {
        color = 'violet-hint';
      } else if (colorRandom > 0.88) {
        color = 'orange-hint';
      } else if (colorRandom > 0.72) {
        color = 'accent';
      } else if (colorRandom > 0.45) {
        color = 'light-grey';
      } else {
        color = 'white';
      }
    } else {
      if (colorRandom > 0.97) {
        color = 'violet-hint';
      } else if (colorRandom > 0.94) {
        color = 'orange-hint';
      } else if (colorRandom > 0.82) {
        color = 'accent';
      } else if (colorRandom > 0.6) {
        color = 'ultra-subtle';
      } else if (colorRandom > 0.35) {
        color = 'light-grey';
      } else {
        color = 'white';
      }
    }
    
    // Enhanced motion variety for more organic behavior
    const motionTypes: Array<'drift' | 'morph' | 'division' | 'respiration' | 'membrane' | 'cluster' | 'lifecycle'> = 
      ['drift', 'morph', 'division', 'respiration', 'membrane', 'cluster', 'lifecycle'];
    const motionType = motionTypes[Math.floor(Math.random() * motionTypes.length)];
    
    // More varied organic shapes including multi-lobed
    const organicShapes: Array<'amoeba' | 'oval' | 'irregular' | 'membrane' | 'cluster' | 'multi-lobed'> = 
      ['amoeba', 'oval', 'irregular', 'membrane', 'cluster', 'multi-lobed'];
    const organicShape = organicShapes[Math.floor(Math.random() * organicShapes.length)];
    
    const pathRadius = 10 + Math.random() * 25;
    const pulseOffset = Math.random() * Math.PI * 2;
    const growthPhase = Math.random() * Math.PI * 2;
    const interactionRadius = size * (1.6 + Math.random() * 0.6);
    const morphDirection = Math.random() * 360;
    const lifecyclePhase = Math.random() * Math.PI * 2;
    
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
      interactionRadius,
      morphDirection,
      lifecyclePhase
    };
  });
};

export type { CellularParticle };
