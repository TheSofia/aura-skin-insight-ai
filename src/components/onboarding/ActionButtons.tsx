
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
      {/* Primary call to action with enhanced biomorphic animations */}
      <Button 
        className="btn-premium btn-ethereal py-6 px-8 text-lg w-full sm:w-auto flex items-center justify-center gap-3 max-w-xs sm:max-w-none mb-6 opacity-0 animate-fade-in transition-all duration-500 shadow-subtle hover:shadow-dark-purple-glow plasma-glow"
        size="pill-lg" 
        onClick={onGetStarted}
        style={{ 
          animationDelay: '1.8s', 
          animationFillMode: 'forwards'
        }}
      >
        <div className="btn-shimmer"></div>
        <ScanFace className="h-5 w-5 text-white bioluminescent-breathing" />
        <span className="font-medium text-white tracking-wide">Find My Skincare Protocol</span>
        <ArrowRight className="h-4 w-4 ml-1 text-white animate-pulse-subtle" />
      </Button>
      
      {/* Alternative path with enhanced hover interaction */}
      <button
        onClick={onManualInput}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-beautyagent-medium-grey/30 text-beautyagent-dark-grey bg-white/50 hover:bg-burnt-orange/8 hover:text-burnt-orange hover:border-burnt-orange/30 transition-all duration-500 text-sm font-light opacity-0 animate-fade-in group neural-pulse synaptic-focus"
        style={{ 
          animationDelay: '2s', 
          animationFillMode: 'forwards', 
          backdropFilter: 'blur(4px)'
        }}
      >
        <MessageSquare className="h-4 w-4 text-beautyagent-dark-grey opacity-70 group-hover:text-burnt-orange group-hover:opacity-100 transition-opacity animate-subtle-pulse" />
        <span className="tracking-wide">Prefer to describe your skin?</span>
      </button>
      
      {/* Enhanced footer text with subtle animations */}
      <p className="text-xs text-beautyagent-dark-grey mt-6 max-w-md font-light opacity-0 animate-fade-in" 
        style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}>
        By continuing, you agree to our <a href="#" className="text-beautyagent-dark-grey hover:text-burnt-orange underline-offset-4 hover:underline transition-all duration-300 smart-metallic">Privacy Policy</a> and <a href="#" className="text-beautyagent-dark-grey hover:text-burnt-orange underline-offset-4 hover:underline transition-all duration-300 smart-metallic">Terms of Service</a>.
      </p>
    </>
  );
};

export default ActionButtons;
