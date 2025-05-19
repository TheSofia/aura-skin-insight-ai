
import React from "react";
import DynamicLogo from "@/components/DynamicLogo";
import { IntensityLevel } from "@/types/logo";

interface HeaderLogoProps {
  logoRef: React.RefObject<HTMLDivElement>;
  logoIntensity: IntensityLevel;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ logoRef, logoIntensity }) => {
  return (
    <div className="absolute top-0 left-0 p-4 md:p-6 z-20">
      <div className="flex items-center gap-2">
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
    </div>
  );
};

export default HeaderLogo;
