
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DynamicLogo from "@/components/DynamicLogo";
import { ArrowRight } from "lucide-react";
import TypingIndicator from "@/components/TypingIndicator";

const Index = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const logoRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

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

  // Setup intersection observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all feature cards
    featureRefs.current.forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        featureRefs.current.forEach((ref) => {
          if (ref) observerRef.current?.unobserve(ref);
        });
      }
    };
  }, []);

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
      {/* Enhanced background animated cell clusters with parallax effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-beautyagent-rose-quartz-glow opacity-20 rounded-full filter blur-3xl animate-float parallax-layer parallax-deep"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-beautyagent-violet-titanium-glow opacity-15 rounded-full filter blur-3xl animate-float-slow parallax-layer parallax-middle"></div>
        <div className="absolute bottom-1/4 left-2/3 w-48 h-48 bg-beautyagent-cosmic-peach-glow opacity-20 rounded-full filter blur-3xl animate-float parallax-layer parallax-shallow"></div>
        
        {/* Additional subtle cellular elements */}
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-beautyagent-violet-titanium-glow opacity-30 rounded-full filter blur-lg animate-pulse-subtle"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-beautyagent-rose-quartz-glow opacity-25 rounded-full filter blur-md animate-float-subtle"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Logo centered at the top with enhanced animation */}
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
        
        {/* Enhanced animated slogan with phased fade-in */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-liquid">
            <span className="block animate-fade-sequence-1">Discover.</span>
            <span className="block animate-fade-sequence-2">Your Glow.</span>
            <span className="block animate-fade-sequence-3 text-beautyagent-violet-titanium text-bioluminescent">Intelligently.</span>
          </h1>
          
          <div className="mt-6 h-6 flex justify-center items-center">
            {showTyping ? (
              <TypingIndicator visible={true} />
            ) : (
              <p className="text-beautyagent-medium-grey max-w-xl mx-auto animate-fade-in delay-1000 opacity-0">
                {welcomeMessage}
              </p>
            )}
          </div>
        </div>
        
        {/* Enhanced Main CTA Button with liquid animation */}
        <Button 
          className="ripple-button glass-button hover:bg-beautyagent-violet-titanium hover:text-white text-lg px-8 py-6 h-auto animate-fade-in delay-1500 opacity-0 liquid-button plasma-glow"
          onClick={handleRipple}
          asChild
        >
          <Link to="/skin-mirror">
            Find My Skincare Protocol
            <ArrowRight className="ml-2 h-5 w-5 animate-pulse-subtle" />
          </Link>
        </Button>
        
        {/* Enhanced feature boxes with improved animations - with TypeScript error fix */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 w-full">
          {/* Feature 1 - Fixed TypeScript error by properly using a div with ref */}
          <div 
            className="opacity-0 transform transition-all duration-500"
            ref={el => featureRefs.current[0] = el}
          >
            <Link 
              to="/skin-mirror" 
              className="glass-card p-6 hover-enhance depth-layer-2 block h-full"
            >
              <div className="relative overflow-hidden rounded-lg mb-3 aspect-video bg-gradient-to-br from-beautyagent-plasma-white-light to-beautyagent-plasma-white">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-beautyagent-violet-titanium-glow opacity-50 animate-pulse-slow"></div>
                </div>
              </div>
              <h3 className="text-xl font-light tracking-wider mb-3 text-beautyagent-dark-grey">Mirror My Skin</h3>
              <p className="text-beautyagent-medium-grey text-sm">
                Track your skin's journey with AI-powered photo analysis and visualize changes over time.
              </p>
            </Link>
          </div>
          
          {/* Feature 2 - Fixed TypeScript error by properly using a div with ref */}
          <div 
            className="opacity-0 transform transition-all duration-500"
            ref={el => featureRefs.current[1] = el}
          >
            <Link 
              to="/skin-diary" 
              className="glass-card p-6 hover-enhance depth-layer-2 block h-full"
            >
              <div className="relative overflow-hidden rounded-lg mb-3 aspect-video bg-gradient-to-br from-beautyagent-plasma-white-light to-beautyagent-plasma-white">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-beautyagent-rose-quartz-glow opacity-50 animate-pulse-slow"></div>
                </div>
              </div>
              <h3 className="text-xl font-light tracking-wider mb-3 text-beautyagent-dark-grey">Skin Diary</h3>
              <p className="text-beautyagent-medium-grey text-sm">
                Record observations, track product reactions, and discover patterns in your skin's behavior.
              </p>
            </Link>
          </div>
          
          {/* Feature 3 - Fixed TypeScript error by properly using a div with ref */}
          <div 
            className="opacity-0 transform transition-all duration-500"
            ref={el => featureRefs.current[2] = el}
          >
            <Link 
              to="/beauty-exchange" 
              className="glass-card p-6 hover-enhance depth-layer-2 block h-full"
            >
              <div className="relative overflow-hidden rounded-lg mb-3 aspect-video bg-gradient-to-br from-beautyagent-plasma-white-light to-beautyagent-plasma-white">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-beautyagent-cosmic-peach-glow opacity-50 animate-pulse-slow"></div>
                </div>
              </div>
              <h3 className="text-xl font-light tracking-wider mb-3 text-beautyagent-dark-grey">BeautyExchange</h3>
              <p className="text-beautyagent-medium-grey text-sm">
                Connect with others, share insights, and exchange product experiences in a supportive community.
              </p>
            </Link>
          </div>
        </div>
        
        {/* Subtle footer signifier */}
        <div className="mt-24 text-beautyagent-medium-grey text-xs opacity-60 animate-fade-in delay-2000 opacity-0">
          <p>A new era of beauty intelligence</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
