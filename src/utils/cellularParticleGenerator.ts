
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

export const generateCellularParticles = (count: number = 120): CellularParticle[] => {
  // Enhanced cluster distribution for rich cellular environment across entire canvas
  const clusterCenters = [
    { x: 5, y: 10 }, { x: 15, y: 5 }, { x: 25, y: 15 }, { x: 35, y: 8 }, 
    { x: 45, y: 20 }, { x: 55, y: 12 }, { x: 65, y: 25 }, { x: 75, y: 18 },
    { x: 85, y: 30 }, { x: 95, y: 22 }, { x: 92, y: 45 }, { x: 88, y: 55 },
    { x: 78, y: 65 }, { x: 68, y: 75 }, { x: 58, y: 85 }, { x: 48, y: 78 },
    { x: 38, y: 88 }, { x: 28, y: 82 }, { x: 18, y: 75 }, { x: 8, y: 68 },
    { x: 12, y: 58 }, { x: 22, y: 48 }, { x: 32, y: 38 }, { x: 42, y: 28 },
    { x: 52, y: 35 }, { x: 62, y: 42 }, { x: 72, y: 52 }, { x: 82, y: 62 },
    { x: 15, y: 35 }, { x: 25, y: 45 }, { x: 35, y: 55 }, { x: 45, y: 65 },
    { x: 55, y: 70 }, { x: 65, y: 60 }, { x: 75, y: 40 }, { x: 85, y: 35 }
  ];

  return Array.from({ length: count }, (_, i) => {
    const cluster = clusterCenters[Math.floor(Math.random() * clusterCenters.length)];
    const clusterSpread = 12 + Math.random() * 28;
    
    const x = Math.max(1, Math.min(99, cluster.x + (Math.random() - 0.5) * clusterSpread));
    const y = Math.max(1, Math.min(99, cluster.y + (Math.random() - 0.5) * clusterSpread));
    
    // Enhanced depth distribution for richer layering
    const depthRandom = Math.random();
    let depthLayer: 'background' | 'middle' | 'foreground';
    let size: number;
    let baseOpacity: number;
    let speed: number;
    
    if (depthRandom > 0.88) { // 12% foreground - more visible, larger
      depthLayer = 'foreground';
      size = 18 + Math.random() * 28;
      baseOpacity = 0.6 + Math.random() * 0.25;
      speed = 0.8 + Math.random() * 0.3;
    } else if (depthRandom > 0.55) { // 33% middle
      depthLayer = 'middle';
      size = 12 + Math.random() * 20;
      baseOpacity = 0.4 + Math.random() * 0.3;
      speed = 0.6 + Math.random() * 0.3;
    } else { // 55% background
      depthLayer = 'background';
      size = 6 + Math.random() * 15;
      baseOpacity = 0.25 + Math.random() * 0.25;
      speed = 0.5 + Math.random() * 0.25;
    }
    
    const opacity = baseOpacity;
    const baseDuration = 30 + Math.random() * 45;
    const duration = baseDuration / speed;
    const delay = Math.random() * 30;
    
    // Enhanced color distribution with subtle accent integration
    let color: 'white' | 'light-grey' | 'accent' | 'ultra-subtle' | 'violet-hint' | 'orange-hint';
    const colorRandom = Math.random();
    
    if (depthLayer === 'foreground') {
      if (colorRandom > 0.92) {
        color = 'violet-hint';
      } else if (colorRandom > 0.85) {
        color = 'orange-hint';
      } else if (colorRandom > 0.65) {
        color = 'accent';
      } else if (colorRandom > 0.4) {
        color = 'light-grey';
      } else {
        color = 'white';
      }
    } else {
      if (colorRandom > 0.96) {
        color = 'violet-hint';
      } else if (colorRandom > 0.92) {
        color = 'orange-hint';
      } else if (colorRandom > 0.78) {
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
    const motionTypes: Array<'drift' | 'morph' | 'division' | 'respiration' | 'membrane' | 'cluster' | 'lifecycle'> = 
      ['drift', 'morph', 'division', 'respiration', 'membrane', 'cluster', 'lifecycle'];
    const motionType = motionTypes[Math.floor(Math.random() * motionTypes.length)];
    
    // More varied organic shapes
    const organicShapes: Array<'amoeba' | 'oval' | 'irregular' | 'membrane' | 'cluster' | 'multi-lobed'> = 
      ['amoeba', 'oval', 'irregular', 'membrane', 'cluster', 'multi-lobed'];
    const organicShape = organicShapes[Math.floor(Math.random() * organicShapes.length)];
    
    const pathRadius = 8 + Math.random() * 20;
    const pulseOffset = Math.random() * Math.PI * 2;
    const growthPhase = Math.random() * Math.PI * 2;
    const interactionRadius = size * (1.4 + Math.random() * 0.8);
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
