
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface MinimalCallToActionProps {
  isVisible: boolean;
}

const MinimalCallToAction = ({ isVisible }: MinimalCallToActionProps) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div 
      className={`text-center transition-all duration-1000 ${
        showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <Button
        className="px-8 py-4 text-base rounded-none transition-all duration-300 
          hover:scale-105 active:scale-95"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: '300',
          letterSpacing: '0.05em',
          background: 'transparent',
          border: '1px solid var(--dermaagent-light-gray)',
          color: 'var(--dermaagent-graphite-black)',
          boxShadow: 'none',
          minWidth: '240px',
          minHeight: '56px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--dermaagent-light-gray)';
          e.currentTarget.style.borderColor = 'var(--dermaagent-charcoal-gray)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = 'var(--dermaagent-light-gray)';
        }}
      >
        Begin Skin Analysis
      </Button>
      
      {/* Minimal subtitle */}
      <p 
        className="mt-6 text-sm opacity-60"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: '300',
          color: 'var(--dermaagent-charcoal-gray)',
          letterSpacing: '0.02em',
        }}
      >
        AI-powered skincare intelligence
      </p>
    </div>
  );
};

export default MinimalCallToAction;
