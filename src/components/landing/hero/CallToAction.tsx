
import React from "react";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  animationStates: {
    isTextVisible: boolean;
  };
  cursorProximity: number;
}

const CallToAction = ({ animationStates, cursorProximity }: CallToActionProps) => {
  return (
    <div 
      className={`transition-all duration-2000 ${
        animationStates.isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{
        transitionDelay: '1000ms',
        transform: `scale(${1 + cursorProximity * 0.015})`,
      }}
    >
      <Button
        className="dermaagent-button px-8 py-4 text-base rounded-lg transition-all duration-500 
          hover:scale-105 active:scale-95"
        style={{
          background: 'var(--dermaagent-glass-overlay)',
          border: '1px solid var(--dermaagent-glass-border)',
          color: 'var(--dermaagent-graphite-black)',
          fontFamily: "'DermaAgent UI', 'Aeonik', 'Inter', system-ui, sans-serif",
          fontWeight: '300',
          letterSpacing: '0.02em',
          boxShadow: '0 4px 16px var(--dermaagent-glass-shadow)',
          backdropFilter: 'blur(8px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--dermaagent-emerald-dust)';
          e.currentTarget.style.borderColor = 'var(--dermaagent-emerald-dust)';
          e.currentTarget.style.boxShadow = '0 6px 24px var(--dermaagent-glass-shadow), 0 0 0 1px var(--dermaagent-emerald-dust)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--dermaagent-graphite-black)';
          e.currentTarget.style.borderColor = 'var(--dermaagent-glass-border)';
          e.currentTarget.style.boxShadow = '0 4px 16px var(--dermaagent-glass-shadow)';
        }}
      >
        Find My Skin Protocol
      </Button>
    </div>
  );
};

export default CallToAction;
