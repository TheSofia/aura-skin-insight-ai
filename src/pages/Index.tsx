
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
        background: '#F9F8F7',
        fontFamily: "'IBM Plex Mono', monospace",
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
      
      {/* DermaAgent Logo - Bold Monospace */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30">
        <h1 
          className={`text-3xl md:text-4xl font-bold tracking-widest transition-all duration-2000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: '700',
            color: '#1A1A1A',
            textShadow: '0 1px 2px rgba(249, 248, 247, 0.8)',
            filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05))',
            letterSpacing: '0.15em',
          }}
        >
          DERMAAGENT
        </h1>
      </div>
      
      <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Hero Section with DermaAgent refined styling */}
        <Hero
          isLoaded={isLoaded}
          showTyping={false}
          mousePosition={mousePosition}
        />
        
        {/* Footer Section */}
        <Footer />
      </div>
      
      {/* Typing Bottom CTA - Fixed with isLoaded prop */}
      <TypingBottomCTA isLoaded={isLoaded} />
    </div>
  );
};

export default Index;
