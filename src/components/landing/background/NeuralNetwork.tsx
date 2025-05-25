
import React from 'react';

type NeuralNetworkProps = {
  cursorGlow: number;
  cursorIntensity: number;
};

const NeuralNetwork: React.FC<NeuralNetworkProps> = ({ 
  cursorGlow, 
  cursorIntensity 
}) => {
  return (
    <svg 
      className="absolute inset-0 w-full h-full opacity-50" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
      style={{
        filter: `blur(${0.3 + cursorIntensity * 0.7}px) brightness(${1.3 + cursorGlow * 0.4})`,
        opacity: 0.4 + cursorGlow * 0.5,
      }}
    >
      <defs>
        <linearGradient id="enhancedIntelligentGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={`rgba(0, 166, 126, 0)`} />
          <stop offset="50%" stopColor={`rgba(0, 166, 126, ${0.5 * cursorGlow})`} />
          <stop offset="100%" stopColor={`rgba(0, 166, 126, 0)`} />
        </linearGradient>
        <linearGradient id="enhancedIntelligentGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={`rgba(255, 119, 69, 0)`} />
          <stop offset="50%" stopColor={`rgba(255, 119, 69, ${0.45 * cursorGlow})`} />
          <stop offset="100%" stopColor={`rgba(255, 119, 69, 0)`} />
        </linearGradient>
        <linearGradient id="enhancedIntelligentGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={`rgba(62, 49, 102, 0)`} />
          <stop offset="50%" stopColor={`rgba(62, 49, 102, ${0.4 * cursorGlow})`} />
          <stop offset="100%" stopColor={`rgba(62, 49, 102, 0)`} />
        </linearGradient>
        <radialGradient id="nodeGradient1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={`rgba(233, 218, 174, ${0.8 * cursorGlow})`} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      
      {/* Enhanced intelligent flowing neural pathways */}
      <path d="M5,15 Q25,8 45,12 Q65,18 85,22 Q95,25 100,30" stroke="url(#enhancedIntelligentGradient1)" strokeWidth="0.6" fill="none">
        <animate attributeName="stroke-dasharray" values="0,300;150,150;0,300" dur="10s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;1;0.3" dur="10s" repeatCount="indefinite" />
      </path>
      <path d="M10,40 Q30,32 50,38 Q70,44 90,48 Q95,50 100,55" stroke="url(#enhancedIntelligentGradient2)" strokeWidth="0.5" fill="none">
        <animate attributeName="stroke-dasharray" values="0,300;120,180;0,300" dur="12s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.9;0.2" dur="12s" repeatCount="indefinite" />
      </path>
      <path d="M0,65 Q20,58 40,62 Q60,68 80,72 Q90,75 100,80" stroke="url(#enhancedIntelligentGradient3)" strokeWidth="0.4" fill="none">
        <animate attributeName="stroke-dasharray" values="0,300;180,120;0,300" dur="14s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.25;0.8;0.25" dur="14s" repeatCount="indefinite" />
      </path>
      
      {/* Interconnected vertical pathways */}
      <path d="M20,10 Q22,30 25,50 Q28,70 30,90" stroke="url(#enhancedIntelligentGradient1)" strokeWidth="0.3" fill="none">
        <animate attributeName="stroke-dasharray" values="0,200;100,100;0,200" dur="16s" repeatCount="indefinite" />
      </path>
      <path d="M70,5 Q72,25 75,45 Q78,65 80,85 Q82,95 85,100" stroke="url(#enhancedIntelligentGradient2)" strokeWidth="0.3" fill="none">
        <animate attributeName="stroke-dasharray" values="0,200;80,120;0,200" dur="18s" repeatCount="indefinite" />
      </path>
      
      {/* Enhanced intelligent pulsing connection nodes */}
      <circle cx="25" cy="18" r="3" fill="url(#nodeGradient1)">
        <animate attributeName="r" values="2;6;2" dur="6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;1;0.5" dur="6s" repeatCount="indefinite" />
      </circle>
      <circle cx="75" cy="68" r="2.5" fill={`rgba(0, 166, 126, ${0.7 * cursorGlow})`}>
        <animate attributeName="r" values="1.5;5.5;1.5" dur="8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;1;0.4" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="42" r="3.5" fill={`rgba(255, 119, 69, ${0.6 * cursorGlow})`}>
        <animate attributeName="r" values="2;7;2" dur="10s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="10s" repeatCount="indefinite" />
      </circle>
      <circle cx="85" cy="25" r="2.8" fill={`rgba(62, 49, 102, ${0.5 * cursorGlow})`}>
        <animate attributeName="r" values="1.8;5.8;1.8" dur="7s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="7s" repeatCount="indefinite" />
      </circle>
      
      {/* Micro connection sparks */}
      <circle cx="40" cy="30" r="1.5" fill={`rgba(233, 218, 174, ${0.8 * cursorGlow})`}>
        <animate attributeName="r" values="0.5;3;0.5" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="55" r="1.2" fill={`rgba(255, 255, 255, ${0.6 * cursorGlow})`}>
        <animate attributeName="r" values="0.8;2.5;0.8" dur="5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default NeuralNetwork;
