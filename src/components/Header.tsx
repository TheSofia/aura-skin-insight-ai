
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import DynamicLogo from './DynamicLogo';

type HeaderProps = {
  currentStep: number;
};

const Header = ({ currentStep }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Determine the color scheme based on the current step
  const getColorScheme = () => {
    switch (currentStep) {
      case 1: return 'cyan';
      case 2: return 'teal';  
      case 3: return 'violet';
      case 4: return 'coral';
      default: return 'coral';
    }
  };
  
  const colorScheme = getColorScheme();

  return (
    <header className="relative z-50 border-b border-aurascan-light-grey py-3 px-6 flex justify-between items-center backdrop-blur-xl bg-white/90 shadow-light">
      <div className="flex items-center gap-3">
        {/* Dynamic Dot Logo with color scheme */}
        <DynamicLogo colorScheme={colorScheme as 'coral' | 'cyan' | 'teal' | 'violet'} size="sm" />
        
        <h1 className="text-xl font-clash font-medium">
          <span className="text-aurascan-dark-grey">Aura</span>
          <span className={`text-aurascan-${colorScheme}`}>Scan</span>
          <span className="text-xs font-space ml-2 text-aurascan-medium-grey">
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
        className={`text-aurascan-dark-grey hover:bg-aurascan-${colorScheme}/10`}
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 glass-card z-20 animate-fade-in">
          <nav className="py-2">
            <a href="#" className={`block px-4 py-2 text-sm text-aurascan-dark-grey hover:bg-aurascan-${colorScheme}/10 transition-colors`}>About</a>
            <a href="#" className={`block px-4 py-2 text-sm text-aurascan-dark-grey hover:bg-aurascan-${colorScheme}/10 transition-colors`}>Privacy Policy</a>
            <a href="#" className={`block px-4 py-2 text-sm text-aurascan-dark-grey hover:bg-aurascan-${colorScheme}/10 transition-colors`}>Terms of Service</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
