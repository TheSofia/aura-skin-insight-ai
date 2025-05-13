
import { useRef } from "react";
import DynamicLogo from "../DynamicLogo";

const OnboardingLogo = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="flex items-center gap-3 mb-8">
      <DynamicLogo 
        colorScheme="gradient" 
        animationStyle="cellular" 
        size="lg" 
        className="transition-transform duration-500 hover-enhance" 
        ref={logoRef}
        showText={true}
        intensity="subtle" 
        isLandingPage={true}
        isLoadingPage={false}
      />
    </div>
  );
};

export default OnboardingLogo;
