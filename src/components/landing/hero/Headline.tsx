
import React, { useState } from "react";
import { motion } from "framer-motion";

interface HeadlineProps {
  animationStates: {
    discover: boolean;
    yourBest: boolean;
    version: boolean;
    underlineVisible: boolean;
    ctaReady: boolean;
  };
  cursorProximity: number;
  headlineRef: React.RefObject<HTMLDivElement>;
}

const Headline: React.FC<HeadlineProps> = ({ 
  animationStates, 
  cursorProximity,
  headlineRef 
}) => {
  const [hoverState, setHoverState] = useState(false);

  // Dynamic styles based on cursor proximity
  const getTextShadow = () => {
    const baseGlow = '0 0 15px rgba(255, 255, 255, 0.2)';
    const dynamicGlow = `0 0 ${20 + cursorProximity * 10}px rgba(255, 255, 255, ${0.15 + cursorProximity * 0.1})`;
    return `${baseGlow}, ${dynamicGlow}`;
  };

  // Hover handlers
  const handleMouseEnter = () => setHoverState(true);
  const handleMouseLeave = () => setHoverState(false);

  return (
    <div 
      ref={headlineRef} 
      className="text-center mb-20 relative mt-24 pt-16 select-none"
      style={{ 
        transformStyle: 'preserve-3d', 
        perspective: '1000px',
      }}
    >
      <h1 className="font-clash relative z-10">
        {/* "DISCOVER" - The Evocative Whisper (Serif, Light, Ethereal) */}
        <motion.span 
          className={`font-light block text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider transition-all duration-1500 ease-out transform ${
            animationStates.discover ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{
            fontFamily: "'Canela Text', serif",
            fontStyle: "italic",
            fontWeight: 300,
            letterSpacing: "0.05em",
            transformStyle: 'preserve-3d',
            transform: `translateZ(${cursorProximity * -5}px)`,
            color: '#D0D0D0',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.15)',
            filter: animationStates.discover 
              ? 'blur(0px) brightness(1)' 
              : 'blur(8px) brightness(0.7)',
            transition: 'all 1.5s cubic-bezier(0.19, 1, 0.22, 1)',
          }}
          animate={{
            filter: animationStates.discover 
              ? 'blur(0px) brightness(1)' 
              : 'blur(8px) brightness(0.7)',
          }}
          transition={{ 
            duration: 1.5, 
            ease: [0.19, 1, 0.22, 1] 
          }}
        >
          DISCOVER
        </motion.span>
        
        {/* "YOUR BEST VERSION" - The Empowering Clarity (Sans-serif, Strong) */}
        <div 
          className="block transition-all duration-1000 ease-out relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ 
            transformStyle: 'preserve-3d',
            marginTop: '1rem',
          }}
        >
          <motion.span 
            className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium transition-all duration-1000 ease-out transform ${
              animationStates.yourBest ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 500,
              letterSpacing: hoverState ? "-0.005em" : "-0.01em",
              background: 'linear-gradient(to bottom, #FDFDFD 0%, #FFD1C4 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundClip: 'text',
              textShadow: getTextShadow(),
              transitionDelay: '400ms',
              transformStyle: 'preserve-3d',
              transform: `translateZ(${cursorProximity * 8}px) translateY(${animationStates.yourBest ? 0 : 40}px)`,
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.05))',
            }}
            animate={{
              letterSpacing: hoverState ? "-0.005em" : "-0.01em",
              transform: `translateZ(${cursorProximity * 8}px) translateY(${animationStates.yourBest ? 0 : 40}px)`,
            }}
            transition={{ 
              duration: 2.5, 
              ease: [0.19, 1, 0.22, 1] 
            }}
          >
            YOUR BEST VERSION
            
            {/* Glow trail effect that sweeps across during animation */}
            <span 
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-beautyagent-warm-amber/30 to-transparent 
                transition-all duration-2000 ease-out ${
                animationStates.yourBest ? 'translate-x-full opacity-0' : '-translate-x-full opacity-100'
              }`}
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 135, 67, 0.4), transparent)',
                filter: 'blur(20px)',
                animationDelay: '600ms',
              }}
            />
          </motion.span>
          
          {/* Subheadline */}
          <motion.div 
            className={`text-sm md:text-base font-light mt-4 tracking-wide transition-all duration-1000 ease-out ${
              animationStates.version ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 300,
              color: '#E6E6E6',
              transitionDelay: '1000ms',
            }}
            animate={{
              opacity: animationStates.version ? 0.7 : 0,
              y: animationStates.version ? 0 : 16,
            }}
            transition={{ 
              duration: 1, 
              ease: [0.19, 1, 0.22, 1] 
            }}
          >
            Welcome to skin intelligence. Ritual meets precision.
          </motion.div>
        </div>
      </h1>
      
      {/* Enhanced neural glow paths behind text */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute w-full h-full opacity-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 135, 67, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            opacity: animationStates.yourBest ? 0.7 : 0,
            scale: animationStates.yourBest ? 1 : 0.8,
          }}
          transition={{ 
            duration: 2, 
            ease: [0.19, 1, 0.22, 1],
            delay: 1.5
          }}
        />
        
        <motion.div 
          className="absolute w-3/4 h-1/2 top-1/4 left-[12.5%] opacity-0"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(233, 218, 174, 0.1), transparent)',
          }}
          animate={{
            opacity: animationStates.version ? 0.5 : 0,
            x: animationStates.version ? 0 : -100,
          }}
          transition={{ 
            duration: 3, 
            ease: [0.19, 1, 0.22, 1],
            delay: 2
          }}
        />
      </div>
    </div>
  );
};

export default Headline;
