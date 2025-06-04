
import { useEffect, useState } from 'react';

export const useCustomCursor = () => {
  const [isCustomCursorEnabled, setIsCustomCursorEnabled] = useState(false);

  useEffect(() => {
    // Check if device supports hover (desktop/laptop)
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    
    // Enable custom cursor only on supported devices
    setIsCustomCursorEnabled(supportsHover);
    
    // Add class to body for conditional cursor hiding
    if (supportsHover) {
      document.body.classList.add('custom-cursor-active');
    } else {
      document.body.classList.remove('custom-cursor-active');
    }

    return () => {
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return { isCustomCursorEnabled };
};
