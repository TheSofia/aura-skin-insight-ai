
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type HeaderProps = {
  currentStep: number;
};

const Header = ({ currentStep }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-aurascan-purple/20 py-4 px-6 flex justify-between items-center backdrop-blur-xl bg-aurascan-deep-space/70">
      <div className="flex items-center">
        {/* Logo */}
        <div className="mr-3 relative w-8 h-8">
          <div className="absolute inset-0 bg-aurascan-purple/30 rounded-full animate-pulse-slow"></div>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
            <path d="M16 0L32 16L16 32L0 16L16 0Z" stroke="url(#mini-logo-gradient)" strokeWidth="2"/>
            <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="url(#mini-logo-gradient)"/>
            <defs>
              <linearGradient id="mini-logo-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9D00FF" />
                <stop offset="1" stopColor="#39FF14" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <h1 className="text-xl font-clash font-medium">
          <span className="text-white">Aura</span>
          <span className="neon-text">Scan</span>
          <span className="text-xs font-space ml-2 text-aurascan-gray">
            {currentStep === 0 && "/ Home"}
            {currentStep === 1 && "/ Face Scan"}
            {currentStep === 2 && "/ Processing"}
            {currentStep === 3 && "/ Results"}
            {currentStep === 4 && "/ Protocol"}
          </span>
        </h1>
      </div>

      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white hover:bg-aurascan-purple/20"
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 cosmic-card z-20 animate-fade-in">
          <nav className="py-2">
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-aurascan-purple/20 transition-colors">About</a>
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-aurascan-purple/20 transition-colors">Privacy Policy</a>
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-aurascan-purple/20 transition-colors">Terms of Service</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
