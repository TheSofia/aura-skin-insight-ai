
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";
import FullScreenCellularBackground from "@/components/landing/FullScreenCellularBackground";
import CellularBackgroundTexture from "@/components/dermaagent/CellularBackgroundTexture";

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
      }, 500);
      
      return () => clearTimeout(backgroundTimer);
    }
  }, [location.pathname]);

  // Enhanced mouse movement tracking for global interactivity
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (pageRef.current) {
        const rect = pageRef.current.getBoundingClientRect();
        
        // Calculate normalized position (0-1) for the position within the viewport
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        // Apply easing for smoother transitions
        setMousePosition(prev => ({ 
          x: prev.x + (x - prev.x) * 0.1, 
          y: prev.y + (y - prev.y) * 0.1 
        }));
      }
    };
    
    // Use requestAnimationFrame for smoother tracking
    let animationId: number;
    const smoothMouseTracking = () => {
      window.addEventListener('mousemove', handleMouseMove);
      animationId = requestAnimationFrame(smoothMouseTracking);
    };
    
    smoothMouseTracking();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Enhanced scroll position tracking
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollPosition(lastScrollY);
          ticking = false;
        });
        
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={pageRef}
      className="min-h-screen flex flex-col overflow-hidden relative"
      style={{
        background: 'var(--dermaagent-notebook-gradient)',
        fontFamily: "'DermaAgent UI', 'Outfit', 'Inter', system-ui, sans-serif",
      }}
    >
      {/* DermaAgent Cellular Background Texture - Notebook Style */}
      <CellularBackgroundTexture 
        isVisible={isLoaded}
        intensity="subtle"
        variant="microstructure"
      />
      
      {/* Enhanced full-screen cellular background animation - now refined for DermaAgent */}
      <FullScreenCellularBackground 
        isVisible={isLoaded}
        mousePosition={mousePosition}
        scrollPosition={scrollPosition}
      />
      
      {/* DermaAgent brand name at top with sophisticated typography */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-30">
        <h1 
          className={`text-xl font-light tracking-wide transition-all duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            fontFamily: "'DermaAgent Typewriter', 'JetBrains Mono', 'Source Code Pro', monospace",
            color: 'var(--dermaagent-deep-ink-black)',
            textShadow: '0 0 12px rgba(255, 255, 255, 0.9), 0 0 20px rgba(255, 255, 255, 0.5)',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
            letterSpacing: '0.05em',
          }}
        >
          DermaAgent
        </h1>
      </div>
      
      <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Hero Section with DermaAgent styling */}
        <Hero
          isLoaded={isLoaded}
          showTyping={false}
          mousePosition={mousePosition}
        />
        
        {/* Footer Section */}
        <Footer />
      </div>
      
      {/* Enhanced DermaAgent CTA with sophisticated notebook aesthetic */}
      <div 
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: '2000ms' }}
      >
        <div 
          className="flex items-center backdrop-blur-sm border rounded-full py-3 px-6 shadow-lg transition-all duration-300 
            hover:shadow-xl cursor-pointer group"
          style={{
            background: 'var(--dermaagent-glass-overlay)',
            borderColor: 'var(--dermaagent-glass-border)',
            boxShadow: '0 8px 32px var(--dermaagent-glass-shadow), 0 0 20px var(--dermaagent-cellular-amber)',
            fontFamily: "'DermaAgent UI', 'Outfit', 'Inter', system-ui, sans-serif",
          }}
        >
          <span 
            className="text-sm mr-2 whitespace-nowrap transition-all duration-300 
              group-hover:tracking-wide"
            style={{
              color: 'var(--dermaagent-deep-ink-black)',
              fontWeight: '400',
            }}
          >
            Analyze your skin today...
          </span>
          <div 
            className="w-4 h-4 rounded-full animate-pulse-subtle"
            style={{
              background: 'var(--dermaagent-amber-gradient)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
