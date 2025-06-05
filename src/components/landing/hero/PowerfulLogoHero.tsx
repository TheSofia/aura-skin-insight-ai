
import React from "react";
import DermoAgentLogo3D from "../logo/DermoAgentLogo3D";

interface PowerfulLogoHeroProps {
  isVisible: boolean;
}

const PowerfulLogoHero: React.FC<PowerfulLogoHeroProps> = ({ isVisible }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-16 relative z-10">
      {/* Powerful 3D Logo Animation */}
      <div className="relative mb-8">
        <DermoAgentLogo3D 
          isVisible={isVisible}
          className="transform transition-all duration-2000 ease-out"
        />
      </div>

      {/* Subtle tagline that appears after logo completes */}
      <div 
        className={`text-center transition-all duration-1000 delay-3000 ${
          isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p 
          className="text-sm md:text-base tracking-wide text-depth-elegant"
          style={{
            fontFamily: 'var(--dermaagent-primary-font)',
            color: 'var(--dermaagent-dark-cool-grey)',
            fontWeight: '300',
            letterSpacing: '0.08em'
          }}
        >
          AI-Powered Personalized Skincare
        </p>
      </div>
    </div>
  );
};

export default PowerfulLogoHero;
