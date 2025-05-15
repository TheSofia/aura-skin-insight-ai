
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DynamicLogo from "@/components/DynamicLogo";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  // Effect to welcome users when they first arrive
  useEffect(() => {
    // Only show welcome message on initial load and at the landing page
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        toast("Welcome to BeautyAgent", {
          description: "Your AI-powered skin intelligence ecosystem",
          icon: "✨",
        });
        setIsLoaded(true);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Add ripple effect to buttons
  const handleRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    const left = event.clientX - rect.left;
    const top = event.clientY - rect.top;
    
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    ripple.className = 'ripple';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-beautyagent-plasma-white overflow-hidden">
      {/* Background animated cell clusters */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-beautyagent-rose-quartz-glow opacity-20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-beautyagent-violet-titanium-glow opacity-15 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-2/3 w-48 h-48 bg-beautyagent-cosmic-peach-glow opacity-20 rounded-full filter blur-3xl animate-float"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Logo centered at the top */}
        <div className="mb-16 animate-fade-in">
          <DynamicLogo 
            ref={logoRef}
            size="lg" 
            colorScheme="refined" 
            animationStyle="cellular" 
            intensity="vibrant" 
            isLandingPage={true}
          />
        </div>
        
        {/* Animated slogan with phased fade-in */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider">
            <span className="block animate-fade-sequence-1">Discover.</span>
            <span className="block animate-fade-sequence-2">Your Glow.</span>
            <span className="block animate-fade-sequence-3 text-beautyagent-violet-titanium">Intelligently.</span>
          </h1>
          
          <p className="mt-6 text-beautyagent-medium-grey max-w-xl mx-auto animate-fade-in delay-1000 opacity-0">
            An AI-powered beauty ecosystem designed to understand your unique skin journey and provide personalized guidance.
          </p>
        </div>
        
        {/* Main CTA Button */}
        <Button 
          className="ripple-button glass-button hover:bg-beautyagent-violet-titanium hover:text-white text-lg px-8 py-6 h-auto animate-fade-in delay-1500 opacity-0 liquid-button"
          onClick={handleRipple}
          asChild
        >
          <Link to="/skin-mirror">
            Find My Skincare Protocol
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        
        {/* Feature boxes */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 w-full animate-fade-in delay-2000 opacity-0">
          <Link to="/skin-mirror" className="glass-card p-6 hover-enhance depth-layer-2">
            <h3 className="text-xl font-light tracking-wider mb-3">Mirror My Skin</h3>
            <p className="text-beautyagent-medium-grey text-sm">
              Track your skin's journey with AI-powered photo analysis and visualize changes over time.
            </p>
          </Link>
          
          <Link to="/skin-diary" className="glass-card p-6 hover-enhance depth-layer-2">
            <h3 className="text-xl font-light tracking-wider mb-3">Skin Diary</h3>
            <p className="text-beautyagent-medium-grey text-sm">
              Record observations, track product reactions, and discover patterns in your skin's behavior.
            </p>
          </Link>
          
          <Link to="/beauty-exchange" className="glass-card p-6 hover-enhance depth-layer-2">
            <h3 className="text-xl font-light tracking-wider mb-3">BeautyExchange</h3>
            <p className="text-beautyagent-medium-grey text-sm">
              Connect with others, share insights, and exchange product experiences in a supportive community.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
