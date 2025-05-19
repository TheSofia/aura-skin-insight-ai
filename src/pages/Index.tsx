
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";
import BackgroundElements from "@/components/landing/BackgroundElements";
import CentralBackgroundLogo from "@/components/landing/logo/CentralBackgroundLogo";

const Index = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Effect to set page as loaded after a delay - extended for more dramatic animation
  useEffect(() => {
    if (location.pathname === '/') {
      // First establish the background
      const backgroundTimer = setTimeout(() => {
        setIsLoaded(true);
      }, 500);
      
      return () => clearTimeout(backgroundTimer);
    }
  }, [location.pathname]);

  // Enhanced mouse movement tracking for global interactivity with smoother response
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

  // Enhanced scroll position tracking with improved smoothing
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
      className="min-h-screen flex flex-col bg-gradient-radial from-beautyagent-plasma-white via-beautyagent-light-grey to-beautyagent-cosmic-peach-glow/5 overflow-hidden"
      style={{
        // Enhanced gradient with subtle animation based on mouse position
        background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
          rgba(255, 255, 255, 0.98) 0%, 
          rgba(246, 246, 247, 0.95) 50%,
          rgba(249, 216, 195, 0.1) 85%, 
          rgba(249, 216, 195, 0.05) 100%)`,
        transition: 'background 1.5s cubic-bezier(0.19, 1, 0.22, 1)',
      }}
    >
      {/* Dynamic background logo centerpiece with enhanced hypnotic movement */}
      <CentralBackgroundLogo 
        isVisible={isLoaded}
        mousePosition={mousePosition}
        scrollPosition={scrollPosition}
      />
      
      {/* Enhanced atmospheric background elements */}
      <BackgroundElements mousePosition={mousePosition} />
      
      <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Hero Section with refined typography and animations */}
        <Hero
          isLoaded={isLoaded}
          showTyping={false}
          mousePosition={mousePosition}
        />
        
        {/* Footer Section - Kept for essential links and information */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
