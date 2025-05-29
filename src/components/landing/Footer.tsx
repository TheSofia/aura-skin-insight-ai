
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 text-center">
      <div className="flex flex-col items-center space-y-6">
        {/* Navigation Links with enhanced hover effects */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm">
          <a 
            href="#about" 
            className="footer-link hover-target dermaagent-ui-text-subtle hover:dermaagent-text-hover transition-colors"
          >
            About
          </a>
          <a 
            href="#science" 
            className="footer-link hover-target dermaagent-ui-text-subtle hover:dermaagent-text-hover transition-colors"
          >
            Science
          </a>
          <a 
            href="#privacy" 
            className="footer-link hover-target dermaagent-ui-text-subtle hover:dermaagent-text-hover transition-colors"
          >
            Privacy
          </a>
          <a 
            href="#contact" 
            className="footer-link hover-target dermaagent-ui-text-subtle hover:dermaagent-text-hover transition-colors"
          >
            Contact
          </a>
        </nav>
        
        {/* Copyright Notice */}
        <p 
          className="text-xs opacity-60"
          style={{
            fontFamily: 'var(--dermaagent-primary-font)',
            color: 'var(--dermaagent-charcoal-gray)',
            letterSpacing: '0.02em',
          }}
        >
          © 2024 dermaAgent. Intelligent skincare analysis.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
