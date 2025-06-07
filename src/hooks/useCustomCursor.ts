
import { useEffect, useState } from 'react';

export const useCustomCursor = () => {
  const [isCustomCursorEnabled, setIsCustomCursorEnabled] = useState(false);

  useEffect(() => {
    // Disable custom cursor - always use classic browser cursor
    setIsCustomCursorEnabled(false);
    
    // Remove any custom cursor classes from body
    document.body.classList.remove('custom-cursor-active');

    return () => {
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return { isCustomCursorEnabled };
};
