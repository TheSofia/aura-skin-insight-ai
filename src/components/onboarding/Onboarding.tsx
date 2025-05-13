
import { useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import DynamicLogo from "../DynamicLogo";
import useAnimationState from "./useAnimationState";
import FloatingBackground from "./FloatingBackground";
import AnimatedTitle from "./AnimatedTitle";
import ActionButtons from "./ActionButtons";
import VisualizationElement from "./VisualizationElement";
import OnboardingDescription from "./OnboardingDescription";

type OnboardingProps = {
  onGetStarted: () => void;
  onManualInput: () => void;
};

const Onboarding = ({ onGetStarted, onManualInput }: OnboardingProps) => {
  const { toast } = useToast();
  const logoRef = useRef<HTMLDivElement>(null);
  const animationState = useAnimationState();
  
  return (
    <div className="flex flex-col items-center text-center px-6 py-10 space-y-12 animate-fade-in min-h-screen justify-center bg-gradient-light relative overflow-hidden">
      {/* Enhanced floating background elements with dynamic cellular movement */}
      <FloatingBackground animationState={animationState} />
      
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center relative z-10">
        {/* Logo component */}
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
        
        {/* Animated Title */}
        <AnimatedTitle animationState={animationState} />
        
        {/* Description text */}
        <OnboardingDescription />
        
        {/* Action buttons component */}
        <ActionButtons 
          onGetStarted={onGetStarted} 
          onManualInput={onManualInput} 
        />
      </div>
      
      {/* Enhanced visualization element */}
      <VisualizationElement />
    </div>
  );
};

export default Onboarding;
