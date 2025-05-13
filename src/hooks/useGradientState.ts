
import { useState, useEffect } from 'react';

/**
 * Hook to manage gradient state for the logo
 * @param isGradient Whether the logo is using gradient colors
 * @returns Current gradient state index
 */
const useGradientState = (isGradient: boolean): number => {
  const [gradientState, setGradientState] = useState(0);
  
  useEffect(() => {
    if (isGradient) {
      const interval = setInterval(() => {
        setGradientState(prev => (prev + 1) % 4); // Cycle through 4 states
      }, 2200); // Transition speed
      return () => clearInterval(interval);
    }
  }, [isGradient]);

  return gradientState;
};

export default useGradientState;
