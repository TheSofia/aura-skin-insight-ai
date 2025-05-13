
import { useRef } from "react";
import DynamicLogo from "../DynamicLogo";
import useAnimationState from "./useAnimationState";
import FloatingBackground from "./FloatingBackground";
import AnimatedTitle from "./AnimatedTitle";
import ActionButtons from "./ActionButtons";
import VisualizationElement from "./VisualizationElement";

type OnboardingProps = {
  onGetStarted: () => void;
  onManualInput: () => void;
};

const Onboarding = ({ onGetStarted, onManualInput }: OnboardingProps) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const animationState = useAnimationState();
  
  return (
    <div className="flex flex-col items-center text-center px-6 py-10 space-y-12 animate-fade-in min-h-screen justify-center bg-gradient-dynamic relative overflow-hidden">
      {/* Enhanced floating background elements with dynamic cellular movement - increased cell count */}
      <FloatingBackground animationState={animationState} />
      
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center relative z-10">
        {/* Updated logo to match loading screen animation - using the exact cellular animation with refined parameters for landing context */}
        <div className="flex items-center gap-3 mb-8">
          <DynamicLogo 
            colorScheme="gradient" 
            animationStyle="cellular" 
            size="lg" 
            className="transition-transform duration-500 hover-enhance" 
            ref={logoRef}
            showText={true}
            intensity="subtle" // Gentler animation for landing page
            isLandingPage={true} // Special flag to make rings nearly invisible
            isLoadingPage={false} // Not a loading page
          />
        </div>
        
        {/* Animated Title with Enhanced Sequential Reveal and Refined Font Weight */}
        <AnimatedTitle animationState={animationState} />
        
        {/* Standardized description text with refined font weight and hover interaction */}
        <p className="text-beautyagent-dark-grey mx-auto mb-10 leading-relaxed text-lg max-w-md font-light opacity-0 animate-fade-in hover-accent-text" 
           style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
          Experience personalized skincare powered by advanced AI analysis.
          Find your perfect skincare protocol with just one scan.
        </p>
        
        {/* Action buttons component with refined interactions - enhanced hover states */}
        <ActionButtons 
          onGetStarted={onGetStarted} 
          onManualInput={onManualInput} 
        />
      </div>
      
      {/* Enhanced visualization element with more pronounced form and increased dynamism */}
      <VisualizationElement />
    </div>
  );
};

export default Onboarding;
