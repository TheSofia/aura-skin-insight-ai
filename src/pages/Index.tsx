
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";
import MinimalNotebookBackground from "@/components/dermaagent/MinimalNotebookBackground";

const Index = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Effect to set page as loaded after a delay for orchestrated animation reveal
  useEffect(() => {
    if (location.pathname === '/') {
      const backgroundTimer = setTimeout(() => {
        setIsLoaded(true);
      }, 600);
      
      return () => clearTimeout(backgroundTimer);
    }
  }, [location.pathname]);

  return (
    <div 
      ref={pageRef}
      className="min-h-screen flex flex-col overflow-hidden relative"
      style={{
        background: 'var(--beautyagent-notebook-base)',
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      {/* Premium Digital Notebook Background - Stripes with subtle cellular motion */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 24px,
              var(--beautyagent-notebook-line) 24px,
              var(--beautyagent-notebook-line) 25px
            ),
            linear-gradient(
              90deg,
              var(--beautyagent-notebook-margin) 0px,
              var(--beautyagent-notebook-margin) 1px,
              transparent 1px,
              transparent 80px
            )
          `,
        }}
      />
      
      {/* Subtle cellular motion behind notebook stripes */}
      <MinimalNotebookBackground 
        isVisible={isLoaded}
        intensity="subtle"
        variant="cellular-texture"
        showCellularMotion={true}
      />
      
      <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Hero Section with premium notebook aesthetic and typing animations */}
        <Hero
          isLoaded={isLoaded}
          showTyping={true}
        />
        
        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
