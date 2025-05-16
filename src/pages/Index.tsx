
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import BackgroundElements from "@/components/landing/BackgroundElements";
import BackgroundLogo from "@/components/landing/BackgroundLogo";

const Index = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  
  // Effect to welcome users when they first arrive
  useEffect(() => {
    // Only show welcome message on initial load and at the landing page
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setShowTyping(true);
        
        setTimeout(() => {
          setShowTyping(false);
          setWelcomeMessage("Your AI-powered skin intelligence ecosystem");
          
          toast("Welcome to BeautyAgent", {
            description: "Your beauty companion awaits",
            icon: "✨",
          });
          setIsLoaded(true);
        }, 2000);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-radial from-beautyagent-plasma-white to-beautyagent-light-grey overflow-hidden">
      {/* Dynamic background logo centerpiece */}
      <BackgroundLogo />
      
      {/* Enhanced atmospheric background elements */}
      <BackgroundElements />
      
      <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Hero Section */}
        <Hero
          isLoaded={isLoaded}
          showTyping={showTyping}
          welcomeMessage={welcomeMessage}
        />
        
        {/* Features Section */}
        <Features />
        
        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
