
import { useToast } from "@/components/ui/use-toast";
import useAnimationState from "./useAnimationState";
import FloatingBackground from "./FloatingBackground";
import AnimatedTitle from "./AnimatedTitle";
import ActionButtons from "./ActionButtons";
import VisualizationElement from "./VisualizationElement";
import OnboardingDescription from "./OnboardingDescription";
import OnboardingLogo from "./OnboardingLogo";

type OnboardingProps = {
  onGetStarted: () => void;
  onManualInput: () => void;
};

const Onboarding = ({ onGetStarted, onManualInput }: OnboardingProps) => {
  const { toast } = useToast();
  const animationState = useAnimationState();
  
  return (
    <div className="flex flex-col items-center text-center px-6 py-10 space-y-12 animate-fade-in min-h-screen justify-center bg-gradient-light relative overflow-hidden">
      {/* Enhanced floating background elements with dynamic cellular movement */}
      <FloatingBackground animationState={animationState} />
      
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center relative z-10">
        {/* Logo component */}
        <OnboardingLogo />
        
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
