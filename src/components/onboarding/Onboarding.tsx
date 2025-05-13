
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
    <div className="flex flex-col items-center text-center px-6 py-10 space-y-12 animate-fade-in min-h-screen justify-center bg-gradient-light relative overflow-hidden">
      {/* Enhanced floating background elements with dynamic cellular movement */}
      <FloatingBackground animationState={animationState} />
      
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center relative z-10">
        {/* Updated logo with enhanced animation and refined colors */}
        <DynamicLogo colorScheme="refined" animationStyle="subtle" size="lg" className="mb-8 animate-subtle-float hover:scale-105 transition-transform duration-300" ref={logoRef}/>
        
        {/* Animated Title with Enhanced Sequential Reveal and Refined Font Weight */}
        <AnimatedTitle animationState={animationState} />
        
        {/* Standardized description text with refined font weight */}
        <p className="text-aurascan-dark-grey mx-auto mb-10 leading-relaxed text-lg max-w-md font-light opacity-0 animate-fade-in" 
           style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
          Experience personalized skincare powered by advanced AI analysis.
          Find your perfect skincare protocol with just one scan.
        </p>
        
        {/* Action buttons component with refined interactions */}
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
