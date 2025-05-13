
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type HeaderProps = {
  currentStep: number;
};

const Header = ({ currentStep }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed w-full z-50 border-b transition-all duration-300 py-3 px-6 flex justify-between items-center backdrop-blur-xl ${
        scrolled 
          ? 'bg-white/90 shadow-light border-beautyagent-light-grey' 
          : 'bg-white/70 border-transparent'
      }`}
    >
      <div className="flex items-center gap-3 group">
        <h1 className="text-xl font-clash font-medium">
          <span className="text-beautyagent-dark-grey">Beauty</span>
          <span className="text-beautyagent-accent">Agent</span>
          <span className="text-xs font-space ml-2 text-beautyagent-medium-grey opacity-80 transition-opacity duration-300 group-hover:opacity-100">
            {currentStep === 0 && "/ Home"}
            {currentStep === 1 && "/ Face Scan"}
            {currentStep === 2 && "/ Processing"}
            {currentStep === 3 && "/ Results"}
            {currentStep === 4 && "/ Protocol"}
          </span>
        </h1>
      </div>

      {/* Interactive menu button */}
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-beautyagent-dark-grey hover:bg-beautyagent-accent/10 hover:text-beautyagent-accent transition-all duration-300"
      >
        {isMenuOpen ? (
          <X className="h-5 w-5 transition-transform duration-300 rotate-90 hover:rotate-0" />
        ) : (
          <Menu className="h-5 w-5 transition-transform duration-300 hover:rotate-90" />
        )}
      </Button>

      {/* Enhanced dropdown menu with animations */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 glass-card z-20 animate-fade-in overflow-hidden">
          <nav className="py-2">
            {[
              { label: "About", href: "#" },
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                className="block px-4 py-2 text-sm text-beautyagent-dark-grey hover:bg-beautyagent-accent/10 transition-all duration-200"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center space-x-2">
                  <span className="w-1 h-1 rounded-full bg-beautyagent-accent opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
                  <span className="transition-transform duration-300 hover:translate-x-1">{item.label}</span>
                </div>
              </a>
            ))}
          </nav>
          
          {/* Decorative animated elements */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-beautyagent-accent/30 to-transparent"></div>
          <div className="absolute -bottom-2 right-6 w-1 h-1 rounded-full bg-beautyagent-accent/80 animate-float"></div>
          <div className="absolute -bottom-4 right-12 w-1 h-1 rounded-full bg-beautyagent-accent/50 animate-float" style={{ animationDelay: '0.5s' }}></div>
        </div>
      )}
    </header>
  );
};

export default Header;
