
import React from "react";

interface CallToActionProps {
  animationStates: {
    discover: boolean;
    yourBest: boolean;
    version: boolean;
    underlineVisible: boolean;
    ctaReady: boolean;
  };
  cursorProximity: number;
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  animationStates, 
  cursorProximity 
}) => {
  return (
    <div 
      className={`flex flex-col items-center transition-all duration-1000 ease-out transform ${
        animationStates.ctaReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: '800ms',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Main CTA Button with enhanced styling */}
      <button 
        className="mb-6 py-3 px-8 rounded-lg text-sm sm:text-base font-medium transition-all duration-500 
          relative overflow-hidden group hover:shadow-lg transform hover:scale-105 active:scale-95"
        style={{
          background: 'var(--beautyagent-sapphire-violet)',
          color: 'var(--beautyagent-gold-light-end)',
          boxShadow: '0 4px 20px rgba(62, 49, 102, 0.2)',
          transform: `perspective(1000px) translateZ(${cursorProximity * 10}px)`,
          transition: 'all 0.6s cubic-bezier(0.19, 1, 0.22, 1)'
        }}
      >
        {/* Inner glow that animates on hover */}
        <span 
          className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-30 transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle at center, rgba(253, 230, 191, 0.8) 0%, transparent 70%)'
          }}
        />
        
        Find My Skin Protocol
        
        {/* Ripple effect on click */}
        <span className="absolute inset-0 pointer-events-none" onClick={e => {
          const button = e.currentTarget.parentElement;
          if (!button) return;

          const circle = document.createElement('span');
          const diameter = Math.max(button.clientWidth, button.clientHeight);
          const radius = diameter / 2;

          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left - radius;
          const y = e.clientY - rect.top - radius;

          circle.style.width = circle.style.height = `${diameter}px`;
          circle.style.left = `${x}px`;
          circle.style.top = `${y}px`;
          circle.style.position = 'absolute';
          circle.style.borderRadius = '50%';
          circle.style.backgroundColor = 'rgba(255, 230, 191, 0.3)';
          circle.style.transform = 'scale(0)';
          circle.style.animation = 'ripple 0.8s linear';

          const existingRipple = button.querySelector('.ripple');
          if (existingRipple) {
            existingRipple.remove();
          }
          
          circle.classList.add('ripple');
          button.appendChild(circle);
          
          setTimeout(() => {
            if (circle.parentNode === button) {
              button.removeChild(circle);
            }
          }, 800);
        }} />
      </button>
      
      <div className="w-12 h-0.5 mb-6 opacity-40" 
        style={{
          background: 'linear-gradient(to right, transparent, var(--beautyagent-pure-bone-neutral), transparent)'
        }}
      />
      
      <p 
        className="text-center text-xs sm:text-sm opacity-70 max-w-xs"
        style={{
          color: 'var(--beautyagent-pure-bone-neutral)',
          transform: `translateZ(${cursorProximity * 5}px)`,
          transition: 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)'
        }}
      >
        Your personalized skincare journey begins with a simple scan or question.
      </p>
    </div>
  );
};

export default CallToAction;
