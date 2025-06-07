
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, BookOpen, Camera, Users, BeakerIcon } from 'lucide-react';

const LandingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Skin Mirror', path: '/skin-mirror', icon: Camera },
    { name: 'Skin Diary', path: '/skin-diary', icon: BookOpen },
    { name: 'Synaptic Flow', path: '/synaptic-flow', icon: Users },
    { name: 'Shop', path: '/shop', icon: ShoppingBag },
    { name: 'Custom Products', path: '/custom-product', icon: BeakerIcon }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container max-w-7xl mx-auto flex items-start justify-between p-6">
        {/* Top Left Navigation Box */}
        <div className="relative ml-1">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="amazement-button p-3 bg-white/90 backdrop-blur-sm border border-dermoagent-light-gray rounded-lg shadow-sm hover:bg-white transition-all duration-200 text-dermoagent-pale-black hover:text-dermoagent-deep-purple min-h-[48px] min-w-[48px]"
            style={{
              fontFamily: 'var(--dermoagent-primary-font)'
            }}
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
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-sm border border-dermoagent-light-gray rounded-lg shadow-lg z-50">
                <div className="p-2">
                  <div 
                    className="px-3 py-2 text-sm font-light text-dermoagent-dark-cool-grey border-b border-dermoagent-light-gray/50 mb-2"
                    style={{
                      fontFamily: 'var(--dermoagent-primary-font)',
                      letterSpacing: 'var(--dermoagent-letter-spacing-logo)'
                    }}
                  >
                    dermo.agent
                  </div>
                  {navigationItems.map((item) => (
                    <button
                      key={item.name}
                      className="amazement-nav-link w-full flex items-center px-3 py-3 text-sm text-dermoagent-pale-black hover:bg-dermoagent-ethereal-purple hover:text-dermoagent-deep-purple rounded-md transition-all duration-200 min-h-[44px]"
                      onClick={() => {
                        navigate(item.path);
                        setIsMenuOpen(false);
                      }}
                      style={{
                        fontFamily: 'var(--dermoagent-primary-font)',
                        letterSpacing: 'var(--dermoagent-letter-spacing-body)'
                      }}
                    >
                      <item.icon className="mr-3 h-4 w-4 text-dermoagent-dark-cool-grey" />
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
