
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";
import FullScreenCellularBackground from "@/components/landing/FullScreenCellularBackground";
import MinimalNotebookBackground from "@/components/dermaagent/MinimalNotebookBackground";

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
      }, 800);
      
      return () => clearTimeout(backgroundTimer);
    }
  }, [location.pathname]);

  // Enhanced mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (pageRef.current) {
        const rect = pageRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        setMousePosition(prev => ({ 
          x: prev.x + (x - prev.x) * 0.08, 
          y: prev.y + (y - prev.y) * 0.08 
        }));
      }
    };
    
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
        fontFamily: "'DermaAgent UI', 'Aeonik', 'Inter', system-ui, sans-serif",
      }}
    >
      {/* DermaAgent Minimal Notebook Background */}
      <MinimalNotebookBackground 
        isVisible={isLoaded}
        intensity="subtle"
        variant="cellular-texture"
        showCellularMotion={true}
      />
      
      {/* Enhanced full-screen cellular background animation */}
      <FullScreenCellularBackground 
        isVisible={isLoaded}
        mousePosition={mousePosition}
        scrollPosition={scrollPosition}
      />
      
      {/* DermaAgent brand name - minimal typewriter style */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-30">
        <h1 
          className={`text-xl font-light tracking-wide transition-all duration-1500 dermaagent-headline ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            color: 'var(--dermaagent-graphite-black)',
            textShadow: '0 0 8px rgba(253, 253, 253, 0.8)',
            filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05))',
            letterSpacing: '0.05em',
          }}
        >
          DermaAgent
        </h1>
      </div>
      
      <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Hero Section with DermaAgent minimal styling */}
        <Hero
          isLoaded={isLoaded}
          showTyping={false}
          mousePosition={mousePosition}
        />
        
        {/* Footer Section */}
        <Footer />
      </div>
      
      {/* Enhanced DermaAgent CTA with notebook aesthetic */}
      <div 
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1500 
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: '2500ms' }}
      >
        <div 
          className="flex items-center backdrop-blur-sm border rounded-full py-3 px-8 shadow-lg transition-all duration-500 
            hover:shadow-xl cursor-pointer group dermaagent-button"
          style={{
            background: 'var(--dermaagent-glass-overlay)',
            borderColor: 'var(--dermaagent-glass-border)',
            boxShadow: '0 4px 20px var(--dermaagent-glass-shadow)',
          }}
        >
          <span 
            className="text-sm mr-3 whitespace-nowrap transition-all duration-500 
              group-hover:tracking-wider dermaagent-ui-text"
            style={{
              fontWeight: '300',
            }}
          >
            Find My Skin Protocol
          </span>
          <div 
            className="w-3 h-3 rounded-full animate-pulse-subtle"
            style={{
              background: 'var(--dermaagent-emerald-gradient)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
