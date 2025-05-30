import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, BookOpen, Camera, Users, BeakerIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Custom Products', path: '/custom-product', icon: BeakerIcon },
    { name: 'Shop', path: '/shop', icon: ShoppingBag },
    { name: 'Skin Diary', path: '/skin-diary', icon: BookOpen },
    { name: 'Skin Mirror', path: '/skin-mirror', icon: Camera },
    { name: 'Beauty Exchange', path: '/beauty-exchange', icon: Users }
  ];

  return (
    <header className="bg-beautyagent-off-white py-4 px-6">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-medium tracking-wider text-beautyagent-deeper-grey">
          BeautyAgent
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-beautyagent-medium-grey hover:text-beautyagent-deeper-grey focus:outline-none"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              className="text-beautyagent-medium-grey hover:text-beautyagent-deeper-grey hover:bg-beautyagent-light-grey/50"
              onClick={() => navigate(item.path)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu (Overlay) */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-beautyagent-off-white z-10 md:hidden">
            <div className="flex flex-col items-center justify-center h-full">
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="lg"
                  className="text-beautyagent-medium-grey hover:text-beautyagent-deeper-grey hover:bg-beautyagent-light-grey/50 py-4"
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false); // Close menu after navigation
                  }}
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default LandingHeader;
