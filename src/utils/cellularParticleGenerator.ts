
interface CellularParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: 'white' | 'light-grey' | 'accent' | 'ultra-subtle' | 'violet-hint' | 'orange-hint';
  motionType: 'drift' | 'float' | 'orbital' | 'morph' | 'cluster' | 'disperse';
  pathRadius: number;
  pulseOffset: number;
  depthLayer: 'background' | 'middle' | 'foreground';
  speed: number;
}

export const generateCellularParticles = (count: number = 120): CellularParticle[] => {
  const clusterCenters = [
    { x: 15, y: 25 }, { x: 65, y: 15 }, { x: 35, y: 55 }, 
    { x: 75, y: 70 }, { x: 20, y: 75 }, { x: 55, y: 40 },
    { x: 85, y: 30 }, { x: 10, y: 50 }, { x: 45, y: 80 }
  ];

  return Array.from({ length: count }, (_, i) => {
    const cluster = clusterCenters[Math.floor(Math.random() * clusterCenters.length)];
    const clusterSpread = 20 + Math.random() * 30;
    
    const x = Math.max(2, Math.min(98, cluster.x + (Math.random() - 0.5) * clusterSpread));
    const y = Math.max(2, Math.min(98, cluster.y + (Math.random() - 0.5) * clusterSpread));
    
    // Enhanced size range for better depth perception
    const depthRandom = Math.random();
    let depthLayer: 'background' | 'middle' | 'foreground';
    let size: number;
    let baseOpacity: number;
    let speed: number;
    
    if (depthRandom > 0.7) { // 30% foreground
      depthLayer = 'foreground';
      size = 8 + Math.random() * 18;
      baseOpacity = 0.4 + Math.random() * 0.4;
      speed = 0.8 + Math.random() * 0.4;
    } else if (depthRandom > 0.3) { // 40% middle
      depthLayer = 'middle';
      size = 4 + Math.random() * 12;
      baseOpacity = 0.25 + Math.random() * 0.35;
      speed = 0.6 + Math.random() * 0.3;
    } else { // 30% background
      depthLayer = 'background';
      size = 2 + Math.random() * 8;
      baseOpacity = 0.1 + Math.random() * 0.25;
      speed = 0.4 + Math.random() * 0.2;
    }
    
    const opacity = baseOpacity;
    const baseDuration = 30 + Math.random() * 40;
    const duration = baseDuration / speed;
    const delay = Math.random() * 25;
    
    // Enhanced color assignment with depth-based distribution
    let color: 'white' | 'light-grey' | 'accent' | 'ultra-subtle' | 'violet-hint' | 'orange-hint';
    const colorRandom = Math.random();
    
    if (depthLayer === 'foreground') {
      if (colorRandom > 0.93) {
        color = 'violet-hint';
      } else if (colorRandom > 0.86) {
        color = 'orange-hint';
      } else if (colorRandom > 0.75) {
        color = 'accent';
      } else if (colorRandom > 0.5) {
        color = 'light-grey';
      } else {
        color = 'white';
      }
    } else {
      if (colorRandom > 0.97) {
        color = 'violet-hint';
      } else if (colorRandom > 0.94) {
        color = 'orange-hint';
      } else if (colorRandom > 0.85) {
        color = 'accent';
      } else if (colorRandom > 0.55) {
        color = 'ultra-subtle';
      } else if (colorRandom > 0.25) {
        color = 'light-grey';
      } else {
        color = 'white';
      }
    }
    
    const motionTypes: Array<'drift' | 'float' | 'orbital' | 'morph' | 'cluster' | 'disperse'> = 
      ['drift', 'float', 'orbital', 'morph', 'cluster', 'disperse'];
    const motionType = motionTypes[Math.floor(Math.random() * motionTypes.length)];
    
    const pathRadius = 8 + Math.random() * 30;
    const pulseOffset = Math.random() * Math.PI * 2;
    
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
      speed
    };
  });
};

export type { CellularParticle };
