
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { RippleButton } from "@/components/ui/ripple-button";

interface CallToActionProps {
  animationStates: {
    ctaReady: boolean;
  };
  cursorProximity: number;
}

const CallToAction: React.FC<CallToActionProps> = ({ animationStates, cursorProximity }) => {
  return (
    <>
      {/* Enhanced Main CTA Button with ripple effect and cursor reactivity */}
      <RippleButton 
        className={`glass-button hover:bg-beautyagent-violet-titanium hover:text-white text-lg px-8 py-6 h-auto mb-6 transition-all duration-1200 ease-out transform ${
          animationStates.ctaReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        } liquid-button plasma-glow`}
        style={{ 
          transitionDelay: '1400ms',
          transform: animationStates.ctaReady ? 
            `translateY(0) scale(${1 + cursorProximity * 0.05})` : 
            'translateY(6px) scale(1)',
          boxShadow: `0 8px 24px -8px rgba(34, 31, 38, ${0.2 + cursorProximity * 0.1})`,
          transition: 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)'
        }}
        asChild
      >
        <Link to="/skin-mirror">
          Find My Skin Protocol
          <ArrowRight className="ml-2 h-5 w-5 animate-pulse-subtle" />
        </Link>
      </RippleButton>
      
      {/* Minimal subcopy for CTA - retained in a minimal form as it supports the CTA functionality */}
      <p 
        className={`text-beautyagent-medium-grey text-xs font-light mb-16 transition-all duration-1200 ease-out transform ${
          animationStates.ctaReady ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ 
          transitionDelay: '1600ms',
          letterSpacing: '0.03em',
          opacity: animationStates.ctaReady ? 0.7 + cursorProximity * 0.1 : 0
        }}
      >
        Upload a photo or describe your skin today
      </p>
    </>
  );
};

export default CallToAction;
