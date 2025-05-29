
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
        background: 'var(--dermaagent-pale-paper-white)',
        fontFamily: "'Suisse Int'l', 'Neue Haas Unica', 'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Dynamic Cellular Background with subtle notebook texture integration */}
      <MinimalNotebookBackground 
        isVisible={isLoaded}
        intensity="subtle"
        variant="cellular-texture"
        showCellularMotion={true}
      />
      
      <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Hero Section with dynamic title animation and sophisticated aesthetic */}
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
