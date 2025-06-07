
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
        }, 300);
        
        return () => clearTimeout(backgroundTimer);
      }
    } catch (error) {
      console.error("Error loading Dermo.Agent home page:", error);
      setHasError(true);
      setIsLoaded(true);
    }
  }, [location.pathname]);

  // Error boundary for graceful error handling
  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center p-8">
          <h1 
            className="text-2xl font-light tracking-wider text-dermoagent-pale-black mb-4"
            style={{
              fontFamily: 'var(--dermoagent-primary-font)',
              letterSpacing: 'var(--dermoagent-letter-spacing-logo)'
            }}
          >
            Welcome to dermo.agent
          </h1>
          <p 
            className="text-dermoagent-dark-cool-grey mb-6"
            style={{
              fontFamily: 'var(--dermoagent-primary-font)',
              letterSpacing: 'var(--dermoagent-letter-spacing-body)'
            }}
          >
            Your AI-powered skincare intelligence is loading...
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="amazement-button px-6 py-2 bg-dermoagent-primary-orange-red text-white rounded hover:bg-dermoagent-burnt-orange transition-colors min-h-[44px]"
            style={{
              fontFamily: 'var(--dermoagent-primary-font)'
            }}
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Enhanced Cellular Background Animation */}
      <SubtleCellularBackground isVisible={isLoaded} intensity="subtle" />
      
      {/* Landing Page Header with Navigation */}
      <LandingHeader />
      
      <div 
        ref={pageRef}
        className="min-h-screen flex flex-col overflow-hidden relative amazement-page"
        style={{
          background: 'var(--dermoagent-notebook-base)',
          fontFamily: 'var(--dermoagent-primary-font)',
        }}
      >
        {/* Refined School Notebook Background */}
        <div 
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 28px,
                var(--dermoagent-light-gray) 28px,
                var(--dermoagent-light-gray) 29px
              )
            `,
            opacity: 0.25,
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
