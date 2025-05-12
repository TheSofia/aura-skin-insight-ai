
import React from "react";

type AnimatedTitleProps = {
  animationState: {
    discover: boolean;
    yourSkin: boolean;
    vitality: boolean;
  };
};

const AnimatedTitle = ({ animationState }: AnimatedTitleProps) => {
  return (
    <div className="relative mb-6 h-20 md:h-24 flex items-center justify-center overflow-hidden">
      <div className="relative">
        {/* Shadow text "Discover Your" with standardized neutral color */}
        <div className="absolute top-1 left-1 opacity-40">
          <span className={`inline-block font-clash font-light text-aurascan-dark-grey transition-all duration-700 ease-out
            ${animationState.discover ? 'translate-y-0 opacity-60' : 'translate-y-8 opacity-0'}`}>
            Discover{' '}
          </span>
          
          <span className={`inline-block font-clash font-light text-aurascan-dark-grey transition-all duration-700 ease-out delay-[300ms]
            ${animationState.yourSkin ? 'translate-y-0 opacity-60' : 'translate-y-8 opacity-0'}`}>
            Your{' '}
          </span>
        </div>
        
        {/* Primary text with sequential reveal and standardized neutral text color */}
        <div className="flex flex-wrap justify-center">
          <span className={`inline-block font-clash font-light text-4xl md:text-5xl lg:text-6xl text-aurascan-dark-grey transition-all duration-700 ease-out
            ${animationState.discover ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Discover{' '}
          </span>
          
          <span className={`inline-block font-clash font-light text-4xl md:text-5xl lg:text-6xl text-aurascan-dark-grey transition-all duration-700 ease-out delay-[300ms]
            ${animationState.yourSkin ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Your{' '}
          </span>
          
          {/* Modified: Changed from text-gradient to neutral text color with same animation */}
          <span className={`inline-block font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-aurascan-dark-grey transition-all duration-700 ease-out delay-[600ms]
            ${animationState.vitality ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Skin Vitality
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTitle;
