
import React, { useEffect, useRef, useState } from "react";
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
  // Split "YOUR BEST VERSION" into separate parts for advanced animation control
  const [hoverState, setHoverState] = useState(false);
  
  // Refs for measuring and animating text elements
  const discoverRef = useRef<HTMLSpanElement>(null);
  const yourBestRef = useRef<HTMLSpanElement>(null);
  const versionRef = useRef<HTMLSpanElement>(null);

  // Dynamic styles based on scroll and cursor position
  const getTextShadow = () => {
    const baseGlow = '0 0 15px rgba(255, 255, 255, 0.2)';
    const dynamicGlow = `0 0 ${20 + cursorProximity * 10}px rgba(255, 255, 255, ${0.15 + cursorProximity * 0.1})`;
    return `${baseGlow}, ${dynamicGlow}`;
  };

  // Subtle text expansion on hover
  const handleMouseEnter = () => setHoverState(true);
  const handleMouseLeave = () => setHoverState(false);

  return (
    <div 
      ref={headlineRef} 
      className="text-center mb-20 relative mt-24 pt-16 select-none"
      style={{ 
        transformStyle: 'preserve-3d', 
        perspective: '1000px',
        transition: 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)'
      }}
    >
      <h1 className="font-clash relative z-10">
        {/* "DISCOVER" - The Evocative Whisper */}
        <span 
          ref={discoverRef}
          className={`font-light block text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider transition-all duration-1500 ease-out transform filter ${
            animationStates.discover ? 'opacity-70 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-md'
          }`}
          style={{
            fontFamily: "'Canela Text', serif",
            fontStyle: "italic",
            fontWeight: 300,
            letterSpacing: "0.05em",
            transformStyle: 'preserve-3d',
            transform: `translateZ(${cursorProximity * -5}px)`,
            opacity: animationStates.discover ? 0.6 - cursorProximity * 0.1 : 0,
            color: '#E0E0E0',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.15)',
            WebkitBackdropFilter: 'blur(0.5px)',
            backdropFilter: 'blur(0.5px)',
          }}
        >
          DISCOVER
        </span>
        
        {/* "YOUR BEST VERSION" - The Empowering Clarity */}
        <span 
          className="block transition-all duration-1000 ease-out relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ 
            transformStyle: 'preserve-3d',
            marginTop: '0.5rem',
          }}
        >
          <motion.span 
            ref={yourBestRef}
            className={`inline-block text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-medium transition-all duration-1000 ease-out transform ${
              animationStates.yourBest ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 500,
              letterSpacing: hoverState ? "-0.005em" : "-0.01em",
              background: 'linear-gradient(to bottom, #FFFFFF 20%, #FFD1C4 95%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              textShadow: getTextShadow(),
              transitionDelay: '400ms',
              transformStyle: 'preserve-3d',
              transform: `translateZ(${cursorProximity * 8}px)`,
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.05))',
            }}
            animate={{
              letterSpacing: hoverState ? "-0.005em" : "-0.01em",
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.19, 1, 0.22, 1]  // Ease settings for natural motion
            }}
          >
            YOUR BEST 
          </motion.span>
          
          <motion.span 
            ref={versionRef}
            className={`inline-block text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-medium ml-0 sm:ml-3 md:ml-4 transition-all duration-1000 ease-out transform ${
              animationStates.version ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 500,
              letterSpacing: hoverState ? "-0.005em" : "-0.01em",
              background: 'linear-gradient(to bottom, #FFFFFF 0%, #FFD1C4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              textShadow: getTextShadow(),
              transitionDelay: '600ms',
              transformStyle: 'preserve-3d',
              transform: `translateZ(${cursorProximity * 10}px)`,
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.05))',
            }}
            animate={{
              letterSpacing: hoverState ? "-0.005em" : "-0.01em",
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.19, 1, 0.22, 1]  // Ease settings for natural motion
            }}
          >
            VERSION
          </motion.span>
          
          {/* Light shimmer effect overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-0"
            style={{
              animation: animationStates.yourBest ? 'shimmer-gradient 8s ease-in-out infinite' : 'none',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transform: 'skewX(-20deg)',
              animationDelay: '1s',
            }}
          />
        </span>
      </h1>
      
      {/* Neural glow paths that occasionally appear behind text */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute w-full h-full opacity-0 animate-radial-pulse"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 220, 180, 0.15) 0%, transparent 70%)',
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute w-3/4 h-1/2 top-1/4 left-[12.5%] opacity-0 animate-light-ray"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(218, 196, 255, 0.1), transparent)',
            animationDelay: '8s',
          }}
        />
      </div>
    </div>
  );
};

export default Headline;
