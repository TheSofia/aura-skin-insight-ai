
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
  const headlineRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Text animation states
  const [animationStates, setAnimationStates] = useState({
    discover: false,
    yourBest: false,
    version: false,
    underlineVisible: false
  });

  // Effect for headline animation sequence
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    // Sequence the headline animations
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, discover: true }));
    }, 800));
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, yourBest: true }));
    }, 1200));
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, version: true }));
    }, 1600));
    
    timers.push(setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, underlineVisible: true }));
    }, 2000));

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

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
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    // Observe the headline for parallax effect
    if (headlineRef.current) {
      headlineRef.current.classList.add('transition-all', 'duration-1000');
    }

    // Observe all feature cards with cascade delay
    featureRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.transitionDelay = `${(index + 1) * 100}ms`;
        observerRef.current?.observe(ref);
      }
    });

    // Cleanup on unmount
    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observerRef.current?.unobserve(ref);
      });
    };
  }, []);

  // Parallax effect for headline on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (headlineRef.current) {
        const scrollPos = window.scrollY;
        const moveY = scrollPos * 0.15; // Subtle movement
        headlineRef.current.style.transform = `translateY(${-moveY}px) scale(${1 - scrollPos * 0.0005})`;
        headlineRef.current.style.opacity = `${1 - (scrollPos / 500)}`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      {/* Enhanced atmospheric background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient gradients and orbital cells */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-gradient-radial from-beautyagent-violet-titanium-glow to-transparent opacity-10 rounded-full filter blur-3xl animate-float parallax-layer"></div>
        <div className="absolute right-[-10%] top-[20%] w-[30vw] h-[30vw] bg-gradient-radial from-beautyagent-rose-quartz-glow to-transparent opacity-10 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute left-[-5%] bottom-[10%] w-[25vw] h-[25vw] bg-gradient-radial from-beautyagent-cosmic-peach-glow to-transparent opacity-8 rounded-full filter blur-3xl animate-float-subtle"></div>
        
        {/* Subtle orbital cells */}
        <div className="absolute w-3 h-3 rounded-full bg-white opacity-30 top-1/3 left-1/4 animate-cellular-drift"></div>
        <div className="absolute w-2 h-2 rounded-full bg-white opacity-20 top-1/2 right-1/3 animate-cellular-drift-slow"></div>
        <div className="absolute w-4 h-4 rounded-full bg-white opacity-15 bottom-1/4 left-1/3 animate-cellular-drift-fast"></div>
        <div className="absolute w-1 h-1 rounded-full bg-white opacity-25 top-2/3 right-1/4 animate-cellular-drift"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        {/* Logo prominently displayed ABOVE headline */}
        <div className="mb-8 animate-fade-in">
          <DynamicLogo 
            ref={logoRef}
            size="lg" 
            colorScheme="refined" 
            animationStyle="cellular" 
            intensity="vibrant" 
            isLandingPage={true}
            showText={true}
          />
          
          {/* Animated underline for logo */}
          <div className={`mx-auto h-[1px] mt-2 bg-gradient-to-r from-transparent via-beautyagent-amber-shimmer to-transparent transition-all duration-1000 ease-out ${animationStates.underlineVisible ? 'w-48 opacity-80' : 'w-0 opacity-0'} animate-pulse-subtle`}></div>
        </div>
        
        {/* New headline "DISCOVER YOUR BEST VERSION" with refined animations */}
        <div ref={headlineRef} className="text-center mb-16 relative">
          <h1 className="font-clash tracking-wider text-beautyagent-dark-grey">
            <span 
              className={`block text-4xl md:text-5xl lg:text-6xl font-light transition-all duration-700 ease-out transform ${
                animationStates.discover ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
              }`}
            >
              DISCOVER
            </span>
            
            <span 
              className={`block text-4xl md:text-5xl lg:text-6xl font-light transition-all duration-700 ease-out transform ${
                animationStates.yourBest ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-2 scale-95 blur-sm'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              YOUR BEST
            </span>
            
            <span 
              className={`block text-4xl md:text-5xl lg:text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-beautyagent-burnt-orange to-beautyagent-violet-titanium transition-all duration-700 ease-out transform ${
                animationStates.version ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
              }`}
              style={{ 
                transitionDelay: '400ms',
                backgroundSize: '200% 100%',
                animation: animationStates.version ? 'shimmer-gradient 8s ease-in-out infinite' : 'none',
                animationDelay: '0.8s',
                textShadow: '0 0 20px rgba(126, 105, 171, 0.15)'
              }}
            >
              VERSION
            </span>
          </h1>
        </div>
        
        {/* Welcoming message with typing indicator */}
        <div className="mb-10 h-6 flex justify-center items-center">
          {showTyping ? (
            <TypingIndicator visible={true} />
          ) : (
            <p className="text-beautyagent-medium-grey max-w-xl mx-auto animate-fade-in opacity-0">
              {welcomeMessage}
            </p>
          )}
        </div>
        
        {/* Enhanced Main CTA Button with ripple effect */}
        <Button 
          className="ripple-button glass-button hover:bg-beautyagent-violet-titanium hover:text-white text-lg px-8 py-6 h-auto mb-6 animate-fade-in opacity-0 delay-1500 liquid-button plasma-glow"
          onClick={handleRipple}
          asChild
        >
          <Link to="/skin-mirror">
            Find My Skin Protocol
            <ArrowRight className="ml-2 h-5 w-5 animate-pulse-subtle" />
          </Link>
        </Button>
        
        {/* Subcopy below CTA */}
        <p className="text-beautyagent-medium-grey text-sm mb-16 animate-fade-in opacity-0 delay-1800">
          Upload a photo or describe your skin today
        </p>
        
        {/* Refined feature section using glass cards with soft animations */}
        <div className="grid md:grid-cols-3 gap-6 w-full mt-8">
          {/* Feature 1 - Mirror My Skin */}
          <div 
            className="opacity-0 transform transition-all duration-500"
            ref={el => featureRefs.current[0] = el}
          >
            <Link 
              to="/skin-mirror" 
              className="glass-card hover-enhance depth-layer-2 p-6 block h-full overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-lg mb-3 aspect-video bg-gradient-to-br from-beautyagent-plasma-white-light to-beautyagent-plasma-white">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-beautyagent-rose-quartz-glow opacity-50 animate-pulse-slow"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-1 bg-beautyagent-rose-quartz-glow animate-scanning rounded-full opacity-60"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-light tracking-wider mb-2 text-beautyagent-dark-grey">Mirror My Skin</h3>
              <p className="text-beautyagent-medium-grey text-sm">
                Track your skin's journey with AI-powered analysis and visualize changes over time.
              </p>
            </Link>
          </div>
          
          {/* Feature 2 - Skin Diary */}
          <div 
            className="opacity-0 transform transition-all duration-500"
            ref={el => featureRefs.current[1] = el}
          >
            <Link 
              to="/skin-diary" 
              className="glass-card hover-enhance depth-layer-2 p-6 block h-full overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-lg mb-3 aspect-video bg-gradient-to-br from-beautyagent-plasma-white-light to-beautyagent-plasma-white">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-beautyagent-cosmic-peach-glow opacity-50 animate-pulse-slow"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-t-2 border-r-2 border-beautyagent-cosmic-peach-light opacity-60 animate-spin-slow rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-light tracking-wider mb-2 text-beautyagent-dark-grey">Skin Diary</h3>
              <p className="text-beautyagent-medium-grey text-sm">
                Record observations, track product reactions, and discover patterns in your skin's behavior.
              </p>
            </Link>
          </div>
          
          {/* Feature 3 - BeautyExchange */}
          <div 
            className="opacity-0 transform transition-all duration-500"
            ref={el => featureRefs.current[2] = el}
          >
            <Link 
              to="/beauty-exchange" 
              className="glass-card hover-enhance depth-layer-2 p-6 block h-full overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-lg mb-3 aspect-video bg-gradient-to-br from-beautyagent-plasma-white-light to-beautyagent-plasma-white">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-beautyagent-violet-titanium-glow opacity-50 animate-pulse-slow"></div>
                  <div className="absolute inset-0 flex items-center justify-center grid grid-cols-2 gap-2 opacity-60">
                    <div className="w-3 h-3 rounded-full bg-beautyagent-violet-titanium-light animate-pulse-cellular"></div>
                    <div className="w-3 h-3 rounded-full bg-beautyagent-violet-titanium-light animate-pulse-cellular" style={{ animationDelay: '0.4s' }}></div>
                    <div className="w-3 h-3 rounded-full bg-beautyagent-violet-titanium-light animate-pulse-cellular" style={{ animationDelay: '0.6s' }}></div>
                    <div className="w-3 h-3 rounded-full bg-beautyagent-violet-titanium-light animate-pulse-cellular" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-light tracking-wider mb-2 text-beautyagent-dark-grey">BeautyExchange</h3>
              <p className="text-beautyagent-medium-grey text-sm">
                Connect with others, share insights, and exchange product experiences in our supportive community.
              </p>
            </Link>
          </div>
        </div>
        
        {/* Minimalist Footer */}
        <footer className="mt-24 text-center w-full">
          <p className="text-beautyagent-medium-grey text-xs opacity-60 mb-2">
            Designed with light. Powered by AI.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-beautyagent-medium-grey hover:text-beautyagent-violet-titanium transition-colors">
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-beautyagent-medium-grey/30 hover:border-beautyagent-violet-titanium/60 group transition-all">
                <span className="transform group-hover:scale-110 transition-transform">
                  IG
                </span>
              </span>
            </a>
            <a href="#" className="text-beautyagent-medium-grey hover:text-beautyagent-violet-titanium transition-colors">
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-beautyagent-medium-grey/30 hover:border-beautyagent-violet-titanium/60 group transition-all">
                <span className="transform group-hover:scale-110 transition-transform">
                  FB
                </span>
              </span>
            </a>
            <a href="#" className="text-beautyagent-medium-grey hover:text-beautyagent-violet-titanium transition-colors">
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-beautyagent-medium-grey/30 hover:border-beautyagent-violet-titanium/60 group transition-all">
                <span className="transform group-hover:scale-110 transition-transform">
                  TW
                </span>
              </span>
            </a>
          </div>
          <div className="mt-6 flex justify-center space-x-4 text-xs text-beautyagent-medium-grey/60">
            <a href="#" className="hover:text-beautyagent-violet-titanium transition-colors">Terms</a>
            <a href="#" className="hover:text-beautyagent-violet-titanium transition-colors">Privacy</a>
            <a href="#" className="hover:text-beautyagent-violet-titanium transition-colors">Contact</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
