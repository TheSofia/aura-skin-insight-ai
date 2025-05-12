
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
      {/* Enhanced primary call to action with refined pulse animation and vibrant gradient - UPDATED TO PILL SHAPE */}
      <Button 
        className="bg-gradient-to-r from-aurascan-accent via-aurascan-dark-orange to-aurascan-deep-green hover:from-aurascan-dark-orange hover:via-aurascan-deep-green hover:to-aurascan-accent text-white py-6 px-8 text-lg w-full sm:w-auto flex items-center justify-center gap-3 max-w-xs sm:max-w-none mb-6 opacity-0 animate-fade-in transition-all duration-500 shadow-subtle hover:shadow-accent transform hover:scale-[1.03]"
        size="pill-lg" // Changed to pill-lg size to create fully rounded edges
        onClick={onGetStarted}
        style={{ 
          animationDelay: '1.8s', 
          animationFillMode: 'forwards',
          backgroundSize: '200% 100%'
        }}
      >
        <ScanFace className="h-5 w-5 animate-pulse-dot" />
        <span>Find My Skincare Protocol</span>
        <ArrowRight className="h-4 w-4 ml-1 animate-pulse-subtle" />
      </Button>
      
      {/* Alternative path with standardized text color and updated to pill shape */}
      <button
        onClick={onManualInput}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-aurascan-medium-grey/30 text-aurascan-dark-grey bg-white/50 hover:bg-aurascan-deep-green/10 hover:border-aurascan-deep-green/40 transition-all duration-300 text-sm font-light opacity-0 animate-fade-in group"
        style={{ animationDelay: '2s', animationFillMode: 'forwards' }}
      >
        <MessageSquare className="h-4 w-4 text-aurascan-dark-grey opacity-70 group-hover:text-aurascan-deep-green group-hover:opacity-100 transition-opacity animate-subtle-pulse" />
        <span>Prefer to describe your skin?</span>
      </button>
      
      {/* Standardized footer text color */}
      <p className="text-xs text-aurascan-dark-grey mt-6 max-w-md font-light opacity-0 animate-fade-in" 
        style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}>
        By continuing, you agree to our <a href="#" className="text-aurascan-dark-grey hover:text-aurascan-accent underline-offset-4 hover:underline transition-colors">Privacy Policy</a> and <a href="#" className="text-aurascan-dark-grey hover:text-aurascan-accent underline-offset-4 hover:underline transition-colors">Terms of Service</a>.
      </p>
    </>
  );
};

export default ActionButtons;
