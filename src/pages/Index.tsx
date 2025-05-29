
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";
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
    <>
      {/* Cellular Cursor Component */}
      <CustomCursor />
      
      <div 
        ref={pageRef}
        className="min-h-screen flex flex-col overflow-hidden relative"
        style={{
          background: 'var(--dermaagent-notebook-base)',
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        {/* Static School Notebook Background - Clean horizontal stripes with margin line */}
        <div 
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 27px,
                #E3E3E3 27px,
                #E3E3E3 28px
              ),
              linear-gradient(
                90deg,
                #E3E3E3 88px,
                #E3E3E3 90px,
                transparent 90px,
                transparent 100%
              )
            `,
            opacity: 0.3,
          }}
        />
        
        {/* Elegant page wrapper with enhanced spacing for luxury notebook feel */}
        <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-8 py-20 relative z-10">
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
    </>
  );
};

export default Index;
