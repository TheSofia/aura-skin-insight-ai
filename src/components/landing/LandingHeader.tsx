
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
    <header className="fixed top-0 right-0 z-50">
      {/* Navigation positioned to align with CTA button */}
      <div 
        className="absolute"
        style={{
          top: 'calc(50vh - 120px)', // Position above the CTA button area
          right: 'calc(50vw - 100px)', // Align with right edge of CTA button
          transform: 'translateX(100px)', // Fine-tune right edge alignment
        }}
      >
        {/* Navigation Dropdown - Aligned with CTA button */}
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
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
              boxShadow: '0 4px 12px rgba(26, 26, 26, 0.1)',
            }}
          >
            {navigationItems.map((item) => (
              <DropdownMenuItem
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="cursor-pointer hover-target transition-all duration-200"
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
              className="cursor-pointer hover-target transition-all duration-200"
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
              className="cursor-pointer hover-target transition-all duration-200"
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
