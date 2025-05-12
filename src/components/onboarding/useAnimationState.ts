
import { useState, useEffect } from "react";

export const useAnimationState = () => {
  // State to control the animation sequence
  const [animationState, setAnimationState] = useState({
    discover: false,
    yourSkin: false,
    vitality: false,
    uiElements: false
  });

  // Trigger the animation sequence on component mount
  useEffect(() => {
    // Sequence the animations with appropriate timing
    const discoverTimer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, discover: true }));
    }, 300);
    
    const yourSkinTimer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, yourSkin: true }));
    }, 800);
    
    const vitalityTimer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, vitality: true }));
    }, 1300);
    
    const uiElementsTimer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, uiElements: true }));
    }, 1800);
    
    // Cleanup timers
    return () => {
      clearTimeout(discoverTimer);
      clearTimeout(yourSkinTimer);
      clearTimeout(vitalityTimer);
      clearTimeout(uiElementsTimer);
    };
  }, []);

  return animationState;
};

export default useAnimationState;
