
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
        {/* Shadow text with refined weight and standardized neutral color */}
        <div className="absolute top-1 left-1 opacity-40">
          <span className={`inline-block font-clash font-light text-beautyagent-dark-grey transition-all duration-700 ease-out
            ${animationState.discover ? 'translate-y-0 opacity-60' : 'translate-y-8 opacity-0'}`}>
            Discover{' '}
          </span>
          
          <span className={`inline-block font-clash font-light text-beautyagent-dark-grey transition-all duration-700 ease-out delay-[300ms]
            ${animationState.yourSkin ? 'translate-y-0 opacity-60' : 'translate-y-8 opacity-0'}`}>
            Your{' '}
          </span>
        </div>
        
        {/* Primary text with sequential reveal, standardized neutral text color, and refined font weights */}
        <div className="flex flex-wrap justify-center">
          <span className={`inline-block font-clash font-light text-4xl md:text-5xl lg:text-6xl text-beautyagent-dark-grey transition-all duration-700 ease-out
            ${animationState.discover ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Discover{' '}
          </span>
          
          <span className={`inline-block font-clash font-light text-4xl md:text-5xl lg:text-6xl text-beautyagent-dark-grey transition-all duration-700 ease-out delay-[300ms]
            ${animationState.yourSkin ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Your{' '}
          </span>
          
          <span className={`inline-block font-clash font-medium text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-beautyagent-accent to-beautyagent-deep-blue transition-all duration-700 ease-out delay-[600ms]
            ${animationState.vitality ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{
              backgroundSize: '200% 100%',
              animation: animationState.vitality ? 'shimmer-gradient 8s ease-in-out infinite' : 'none',
              animationDelay: '1.2s'
            }}>
            Skin Vitality
          </span>
        </div>
      </div>
      
      {/* Add a subtle animated underline */}
      <div 
        className={`absolute bottom-1 left-1/2 h-[2px] bg-gradient-to-r from-beautyagent-accent via-beautyagent-dark-orange to-beautyagent-deep-blue transition-all duration-1000 ease-in-out ${animationState.vitality ? 'w-40 md:w-56 opacity-40' : 'w-0 opacity-0'}`}
        style={{ 
          transform: 'translateX(-50%)',
          animationDelay: '1.8s',
          backgroundSize: '200% 100%',
          animation: animationState.vitality ? 'shimmer-gradient 8s ease-in-out infinite' : 'none',
        }}>
      </div>
    </div>
  );
};

export default AnimatedTitle;
