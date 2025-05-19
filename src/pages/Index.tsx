
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";
import BackgroundElements from "@/components/landing/BackgroundElements";
import BackgroundLogo from "@/components/landing/BackgroundLogo";

const Index = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Effect to set page as loaded after a delay
  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Enhanced mouse movement tracking for global interactivity
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
        transition: 'background 1s cubic-bezier(0.19, 1, 0.22, 1)',
      }}
    >
      {/* Dynamic background logo centerpiece - enhanced with hypnotic movement */}
      <BackgroundLogo />
      
      {/* Enhanced atmospheric background elements */}
      <BackgroundElements mousePosition={mousePosition} />
      
      <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Hero Section - Now purified with only essential elements */}
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
