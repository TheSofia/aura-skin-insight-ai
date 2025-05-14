
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
      <div 
        className={`transition-all duration-1200 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
        }`}
        style={{ 
          filter: isVisible ? 'blur(0px)' : 'blur(4px)',
          transition: 'opacity 1s ease-out, transform 1.2s cubic-bezier(0.19, 1, 0.22, 1), filter 1s ease-out'
        }}
      >
        <DynamicLogo 
          colorScheme="gradient" 
          animationStyle="cellular" 
          size="lg" 
          className="transition-transform duration-700" 
          ref={logoRef}
          showText={true}
          intensity="medium" 
          isLandingPage={false} 
          isLoadingPage={true}
        />
      </div>
    </div>
  );
};

export default OnboardingLogo;
