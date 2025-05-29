
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";
import MinimalNotebookBackground from "@/components/dermaagent/MinimalNotebookBackground";

const Index = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Effect to set page as loaded after a delay
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
      className="min-h-screen flex flex-col overflow-hidden relative notebook-grid-bg"
      style={{
        background: 'var(--dermaagent-pale-paper-white)',
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      {/* Pure Notebook Background - NO cellular animation on landing page */}
      <MinimalNotebookBackground 
        isVisible={isLoaded}
        intensity="subtle"
        variant="notebook-grid"
        showCellularMotion={false}
      />
      
      <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Hero Section with pure notebook aesthetic */}
        <Hero
          isLoaded={isLoaded}
          showTyping={false}
        />
        
        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
