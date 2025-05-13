
import React from "react";
import { Button } from "@/components/ui/button";
import { ScanFace, ArrowRight, MessageSquare } from "lucide-react";

type ActionButtonsProps = {
  onGetStarted: () => void;
  onManualInput: () => void;
};

const ActionButtons = ({ onGetStarted, onManualInput }: ActionButtonsProps) => {
  return (
    <>
      {/* Primary call to action with improved color contrast for better readability */}
      <Button 
        className="bg-beautyagent-deeper-grey hover:bg-beautyagent-deeper-grey/90 text-white py-6 px-8 text-lg w-full sm:w-auto flex items-center justify-center gap-3 max-w-xs sm:max-w-none mb-6 opacity-0 animate-fade-in transition-all duration-400 shadow-subtle hover:shadow-accent transform hover:scale-[1.015]"
        size="pill-lg" 
        onClick={onGetStarted}
        style={{ 
          animationDelay: '1.8s', 
          animationFillMode: 'forwards'
        }}
      >
        <ScanFace className="h-5 w-5 animate-pulse-dot" />
        <span className="font-medium">Find My Skincare Protocol</span>
        <ArrowRight className="h-4 w-4 ml-1 animate-pulse-subtle" />
      </Button>
      
      {/* Alternative path with standardized text color and enhanced hover interaction */}
      <button
        onClick={onManualInput}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-beautyagent-medium-grey/30 text-beautyagent-dark-grey bg-white/50 hover:bg-beautyagent-deep-blue/8 hover:text-beautyagent-deep-blue hover:border-beautyagent-deep-blue/30 transition-all duration-300 text-sm font-light opacity-0 animate-fade-in group"
        style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
      >
        <MessageSquare className="h-4 w-4 text-beautyagent-dark-grey opacity-70 group-hover:text-beautyagent-deep-blue group-hover:opacity-100 transition-opacity animate-subtle-pulse" />
        <span>Prefer to describe your skin?</span>
      </button>
      
      {/* Standardized footer text color with refined font weight and hover states */}
      <p className="text-xs text-beautyagent-dark-grey mt-6 max-w-md font-light opacity-0 animate-fade-in" 
        style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}>
        By continuing, you agree to our <a href="#" className="text-beautyagent-dark-grey hover:text-beautyagent-accent underline-offset-4 hover:underline transition-all duration-200">Privacy Policy</a> and <a href="#" className="text-beautyagent-dark-grey hover:text-beautyagent-accent underline-offset-4 hover:underline transition-all duration-200">Terms of Service</a>.
      </p>
    </>
  );
};

export default ActionButtons;
