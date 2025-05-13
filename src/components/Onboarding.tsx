
import { useToast } from "@/components/ui/use-toast";
import { useRef } from "react";
import DynamicLogo from "./DynamicLogo";
import useAnimationState from "./onboarding/useAnimationState";
import FloatingBackground from "./onboarding/FloatingBackground";
import AnimatedTitle from "./onboarding/AnimatedTitle";
import ActionButtons from "./onboarding/ActionButtons";
import VisualizationElement from "./onboarding/VisualizationElement";

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
        {/* Simplified logo with monochromatic scheme to reduce competition with bottom animations */}
        <div className="flex items-center gap-3 mb-8">
          <DynamicLogo 
            colorScheme="monochrome" 
            animationStyle="subtle" 
            size="lg" 
            className="transition-transform duration-500 hover-enhance glow-minimal" 
            ref={logoRef}
            showText={true}
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
