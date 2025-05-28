
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";
import FullScreenCellularBackground from "@/components/landing/FullScreenCellularBackground";
import MinimalNotebookBackground from "@/components/dermaagent/MinimalNotebookBackground";
import TypingBottomCTA from "@/components/landing/TypingBottomCTA";

const Index = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
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

  // Mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (pageRef.current) {
        const rect = pageRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll position tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={pageRef}
      className="min-h-screen flex flex-col overflow-hidden relative notebook-grid-bg"
      style={{
        background: 'var(--dermaagent-pale-paper-white)',
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      {/* DermaAgent Minimal Notebook Background with ultra-subtle grid */}
      <MinimalNotebookBackground 
        isVisible={isLoaded}
        intensity="subtle"
        variant="notebook-grid"
        showCellularMotion={true}
      />
      
      {/* Pure monochrome cellular background animation */}
      <FullScreenCellularBackground 
        isVisible={isLoaded}
        mousePosition={mousePosition}
        scrollPosition={scrollPosition}
      />
      
      <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Hero Section with new logo and minimal design */}
        <Hero
          isLoaded={isLoaded}
          showTyping={false}
          mousePosition={mousePosition}
        />
        
        {/* Footer Section */}
        <Footer />
      </div>
      
      {/* Typing Bottom CTA */}
      <TypingBottomCTA isLoaded={isLoaded} />
    </div>
  );
};

export default Index;
