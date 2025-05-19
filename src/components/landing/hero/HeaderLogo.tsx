
import React from "react";
import DynamicLogo from "@/components/DynamicLogo";
import { IntensityLevel } from "@/types/logo";
import { Link } from "react-router-dom";

interface HeaderLogoProps {
  logoRef: React.RefObject<HTMLDivElement>;
  logoIntensity: IntensityLevel;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ logoRef, logoIntensity }) => {
  return (
    <div className="absolute top-0 left-0 p-4 md:p-6 z-20">
      <div className="flex items-center gap-2">
        <Link to="/">
          <DynamicLogo 
            ref={logoRef}
            size="sm" 
            colorScheme="refined" 
            animationStyle="cellular" 
            intensity={logoIntensity} 
            isLandingPage={true}
            showText={true}
          />
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex ml-8 gap-6">
          <Link to="/skin-mirror" className="text-beautyagent-dark-grey hover:text-beautyagent-accent transition-colors">
            Skin Mirror
          </Link>
          <Link to="/skin-diary" className="text-beautyagent-dark-grey hover:text-beautyagent-accent transition-colors">
            Skin Diary
          </Link>
          <Link to="/shop" className="text-beautyagent-dark-grey hover:text-beautyagent-accent transition-colors">
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogo;
