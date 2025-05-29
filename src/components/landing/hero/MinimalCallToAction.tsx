
import React from "react";
import { Button } from "@/components/ui/button";

interface MinimalCallToActionProps {
  isVisible: boolean;
}

const MinimalCallToAction = ({ isVisible }: MinimalCallToActionProps) => {
  return (
    <div 
      className={`text-center transition-all duration-2000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        animationDelay: '1s',
      }}
    >
      {/* Clean subtitle */}
      <p 
        className="text-lg md:text-xl mb-8 transition-all duration-2000"
        style={{
          fontFamily: 'var(--dermaagent-primary-font)',
          fontWeight: 'var(--dermaagent-body-weight)',
          color: 'var(--dermaagent-charcoal-gray)',
          letterSpacing: '0.02em',
          lineHeight: '1.6',
          opacity: isVisible ? 0.8 : 0,
        }}
      >
        AI-powered skincare intelligence
      </p>
      
      {/* Enhanced interaction button with refined color accent and hover target class */}
      <Button
        className={`dermaagent-elegant-button dermaagent-box-element hover-target px-8 py-3 text-base transition-all duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          fontFamily: 'var(--dermaagent-primary-font)',
          fontWeight: 'var(--dermaagent-body-weight)',
          letterSpacing: '0.05em',
          borderRadius: '2px',
          animationDelay: '1.5s',
        }}
      >
        Begin Skin Analysis
      </Button>
    </div>
  );
};

export default MinimalCallToAction;
