
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
      className="min-h-screen flex flex-col overflow-hidden"
      style={{
        // Enhanced background with more structure and depth
        background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
          rgba(253, 253, 253, 0.98) 0%, 
          rgba(230, 230, 230, 0.95) 50%,
          rgba(27, 27, 27, 0.1) 85%, 
          rgba(27, 27, 27, 0.05) 100%)`,
        transition: 'background 1.5s cubic-bezier(0.19, 1, 0.22, 1)',
      }}
    >
      {/* Dynamic background logo centerpiece with enhanced structure */}
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
      
      {/* Enhanced CTA with a floating chat input prompt at the bottom */}
      <div 
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 
          ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: '2000ms' }}
      >
        <div 
          className="flex items-center bg-beautyagent-midnight-graphite/90 backdrop-blur-sm border border-beautyagent-gold-light-start/20 
            rounded-full py-3 px-6 shadow-lg transition-all duration-300 hover:bg-beautyagent-midnight-graphite/95 
            hover:border-beautyagent-gold-light-start/30 hover:shadow-beautyagent-warm-amber/10
            cursor-pointer group"
        >
          <span 
            className="text-sm text-beautyagent-pure-bone-neutral mr-2 whitespace-nowrap transition-all duration-300 
              group-hover:text-beautyagent-deep-pearl-white"
          >
            Describe your skin today...
          </span>
          <div className="w-4 h-4 rounded-full bg-beautyagent-warm-amber animate-pulse-subtle"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
