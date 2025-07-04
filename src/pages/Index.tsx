
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";
import LandingHeader from "@/components/landing/LandingHeader";
import CustomCursor from "@/components/ui/CustomCursor";
import SubtleCellularBackground from "@/components/landing/SubtleCellularBackground";
import { useCustomCursor } from "@/hooks/useCustomCursor";

const Index = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  const { isCustomCursorEnabled } = useCustomCursor();
  
  // Effect to set page as loaded after a delay for orchestrated animation reveal
  useEffect(() => {
    try {
      if (location.pathname === '/') {
        const backgroundTimer = setTimeout(() => {
          setIsLoaded(true);
        }, 400);
        
        return () => clearTimeout(backgroundTimer);
      }
    } catch (error) {
      console.error("Error loading home page:", error);
      setHasError(true);
      setIsLoaded(true);
    }
  }, [location.pathname]);

  // Error boundary for graceful error handling
  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center p-8">
          <h1 className="text-2xl font-light tracking-wider text-gray-800 mb-4">
            Welcome to derma.agent
          </h1>
          <p className="text-gray-600 mb-6">
            Your AI-powered skincare companion is loading...
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Conditional Custom Cursor - only on supported devices */}
      {isCustomCursorEnabled && <CustomCursor />}
      
      {/* Optimized Cellular Background Animation */}
      <SubtleCellularBackground isVisible={isLoaded} />
      
      {/* Landing Page Header with Navigation */}
      <LandingHeader />
      
      <div 
        ref={pageRef}
        className="min-h-screen flex flex-col overflow-hidden relative"
        style={{
          background: 'var(--dermaagent-notebook-base)',
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      >
        {/* Static School Notebook Background */}
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
              )
            `,
            opacity: 0.3,
          }}
        />
        
        {/* Page content wrapper */}
        <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-8 py-20 relative z-10">
          {/* Hero Section */}
          <div className="animate-elegant-fade-in">
            <Hero
              isLoaded={isLoaded}
              showTyping={true}
            />
          </div>
          
          {/* Footer Section */}
          <div className="animate-elegant-fade-in-delayed">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
