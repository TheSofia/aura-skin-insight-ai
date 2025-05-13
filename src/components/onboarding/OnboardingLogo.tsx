
import { useRef, useEffect, useState } from "react";
import DynamicLogo from "../DynamicLogo";

const OnboardingLogo = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Elegant entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <DynamicLogo 
          colorScheme="gradient" 
          animationStyle="cellular" 
          size="lg" 
          className="transition-transform duration-500" 
          ref={logoRef}
          showText={true}
          intensity="subtle"
          isLandingPage={false} // Changed from true to false to match loading page style
          isLoadingPage={false}
        />
      </div>
    </div>
  );
};

export default OnboardingLogo;
