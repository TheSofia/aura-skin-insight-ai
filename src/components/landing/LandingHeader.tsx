
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container max-w-7xl mx-auto flex items-start justify-between p-6">
        {/* Top Left Navigation Box */}
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-sm hover:bg-white transition-all duration-200 text-gray-700 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Navigation Dropdown */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black/10 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-2">
                  <div className="px-3 py-2 text-sm font-medium text-gray-500 border-b border-gray-100 mb-2">
                    derma.agent
                  </div>
                  {navigationItems.map((item) => (
                    <button
                      key={item.name}
                      className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-150"
                      onClick={() => {
                        navigate(item.path);
                        setIsMenuOpen(false);
                      }}
                    >
                      <item.icon className="mr-3 h-4 w-4 text-gray-500" />
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
