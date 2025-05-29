
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";
import MinimalNotebookBackground from "@/components/dermaagent/MinimalNotebookBackground";
import CustomCursor from "@/components/ui/CustomCursor";

const Index = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Effect to set page as loaded after a delay for orchestrated animation reveal
  useEffect(() => {
    if (location.pathname === '/') {
      const backgroundTimer = setTimeout(() => {
        setIsLoaded(true);
      }, 400);
      
      return () => clearTimeout(backgroundTimer);
    }
  }, [location.pathname]);

  return (
    <div 
      ref={pageRef}
      className="min-h-screen flex flex-col overflow-hidden relative"
      style={{
        background: 'var(--dermaagent-notebook-base)',
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      {/* Custom Cellular Cursor */}
      <CustomCursor />
      
      {/* Premium Digital Notebook Background - Clean stripes without any scratch effects */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 28px,
              var(--dermaagent-notebook-line) 28px,
              var(--dermaagent-notebook-line) 29px
            ),
            linear-gradient(
              90deg,
              var(--dermaagent-notebook-margin) 0px,
              var(--dermaagent-notebook-margin) 1px,
              transparent 1px,
              transparent 90px
            )
          `,
          opacity: 0.3,
        }}
      />
      
      {/* Ultra-subtle cellular motion behind notebook stripes - completely clean */}
      <MinimalNotebookBackground 
        isVisible={isLoaded}
        intensity="subtle"
        variant="cellular-texture"
        showCellularMotion={true}
      />
      
      {/* Elegant page wrapper with enhanced spacing */}
      <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-6 py-16 relative z-10">
        {/* Hero Section with premium notebook aesthetic and refined animations */}
        <div className="animate-elegant-fade-in">
          <Hero
            isLoaded={isLoaded}
            showTyping={true}
          />
        </div>
        
        {/* Footer Section with delayed entrance */}
        <div className="animate-elegant-fade-in-delayed">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
