
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LandingHeader = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Skin Mirror', href: '/skin-mirror' },
    { label: 'Skin Diary', href: '/skin-diary' },
    { label: 'Beauty Exchange', href: '/beauty-exchange' },
    { label: 'Shop', href: '/shop' },
  ];

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="flex justify-between items-center">
        {/* Logo/Brand */}
        <div 
          className="cursor-pointer hover-target"
          onClick={() => navigate('/')}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: '300',
            letterSpacing: '0.02em',
            color: 'var(--dermaagent-charcoal-gray, #333333)',
          }}
        >
          <span className="text-lg">derma.agent</span>
        </div>

        {/* Navigation Dropdown */}
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover-target"
              style={{
                color: 'var(--dermaagent-charcoal-gray, #333333)',
                background: 'transparent',
                border: '1px solid var(--dermaagent-charcoal-gray, #333333)',
                borderRadius: '2px',
                width: '40px',
                height: '40px',
              }}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent
            align="end"
            className="w-48 mt-2"
            style={{
              background: 'var(--dermaagent-pale-paper-white, #FFFFFF)',
              border: '1px solid var(--dermaagent-charcoal-gray, #333333)',
              borderRadius: '2px',
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: '300',
              letterSpacing: '0.02em',
            }}
          >
            {navigationItems.map((item) => (
              <DropdownMenuItem
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="cursor-pointer hover-target"
                style={{
                  color: 'var(--dermaagent-charcoal-gray, #333333)',
                  padding: '12px 16px',
                }}
              >
                {item.label}
              </DropdownMenuItem>
            ))}
            
            {/* Divider */}
            <div 
              className="h-px mx-2 my-2"
              style={{
                background: 'var(--dermaagent-charcoal-gray, #333333)',
                opacity: 0.2,
              }}
            />
            
            {/* Additional Links */}
            <DropdownMenuItem
              className="cursor-pointer hover-target"
              style={{
                color: 'var(--dermaagent-charcoal-gray, #333333)',
                padding: '12px 16px',
                fontSize: '0.85em',
                opacity: 0.8,
              }}
            >
              About
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer hover-target"
              style={{
                color: 'var(--dermaagent-charcoal-gray, #333333)',
                padding: '12px 16px',
                fontSize: '0.85em',
                opacity: 0.8,
              }}
            >
              Privacy
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default LandingHeader;
