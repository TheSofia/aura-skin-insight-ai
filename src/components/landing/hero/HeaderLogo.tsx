
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
    <div className="absolute top-0 left-0 p-6 z-20">
      <Link to="/">
        <div className="pl-1">
          <DynamicLogo 
            ref={logoRef}
            size="sm" 
            colorScheme="refined" 
            animationStyle="cellular" 
            intensity={logoIntensity} 
            isLandingPage={true}
            showText={true}
          />
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
