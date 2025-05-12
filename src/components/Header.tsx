
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

type HeaderProps = {
  currentStep: number;
};

const Header = ({ currentStep }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative border-b border-gray-100 py-4 px-6 flex justify-between items-center bg-white/80 backdrop-blur-sm">
      <div className="flex items-center">
        <h1 className="text-xl font-medium text-aurascan-purple">
          {currentStep === 0 && "AuraScan"}
          {currentStep === 1 && "Face Scan"}
          {currentStep === 2 && "Processing"}
          {currentStep === 3 && "Your Results"}
          {currentStep === 4 && "Recommendations"}
        </h1>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 animate-fade-in">
          <nav className="py-2">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-aurascan-light-gray">About</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-aurascan-light-gray">Privacy Policy</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-aurascan-light-gray">Terms of Service</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
