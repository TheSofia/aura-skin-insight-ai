
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
      className="absolute inset-0 w-full h-full opacity-40" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
      style={{
        filter: `blur(${0.5 + cursorIntensity}px)`,
        opacity: 0.3 + cursorGlow * 0.4,
      }}
    >
      <defs>
        <linearGradient id="enhancedNeuralGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={`rgba(255, 135, 67, 0)`} />
          <stop offset="50%" stopColor={`rgba(255, 135, 67, ${0.4 * cursorGlow})`} />
          <stop offset="100%" stopColor={`rgba(255, 135, 67, 0)`} />
        </linearGradient>
        <linearGradient id="enhancedNeuralGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={`rgba(0, 79, 77, 0)`} />
          <stop offset="50%" stopColor={`rgba(0, 79, 77, ${0.35 * cursorGlow})`} />
          <stop offset="100%" stopColor={`rgba(0, 79, 77, 0)`} />
        </linearGradient>
        <linearGradient id="enhancedNeuralGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={`rgba(62, 49, 102, 0)`} />
          <stop offset="50%" stopColor={`rgba(62, 49, 102, ${0.3 * cursorGlow})`} />
          <stop offset="100%" stopColor={`rgba(62, 49, 102, 0)`} />
        </linearGradient>
      </defs>
      
      {/* Enhanced flowing neural pathways */}
      <path d="M10,20 Q30,10 50,15 Q70,20 90,25" stroke="url(#enhancedNeuralGradient1)" strokeWidth="0.4" fill="none">
        <animate attributeName="stroke-dasharray" values="0,200;100,100;0,200" dur="12s" repeatCount="indefinite" />
      </path>
      <path d="M15,45 Q35,35 55,40 Q75,45 95,50" stroke="url(#enhancedNeuralGradient2)" strokeWidth="0.35" fill="none">
        <animate attributeName="stroke-dasharray" values="0,200;80,120;0,200" dur="15s" repeatCount="indefinite" />
      </path>
      <path d="M5,70 Q25,60 45,65 Q65,70 85,75" stroke="url(#enhancedNeuralGradient3)" strokeWidth="0.3" fill="none">
        <animate attributeName="stroke-dasharray" values="0,200;120,80;0,200" dur="18s" repeatCount="indefinite" />
      </path>
      
      {/* Enhanced pulsing connection nodes */}
      <circle cx="25" cy="20" r="2" fill={`rgba(255, 135, 67, ${0.6 * cursorGlow})`}>
        <animate attributeName="r" values="1.5;4;1.5" dur="8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;1;0.4" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle cx="75" cy="70" r="1.8" fill={`rgba(0, 79, 77, ${0.5 * cursorGlow})`}>
        <animate attributeName="r" values="1;3.5;1" dur="10s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.9;0.3" dur="10s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="45" r="2.2" fill={`rgba(62, 49, 102, ${0.4 * cursorGlow})`}>
        <animate attributeName="r" values="1.2;4.5;1.2" dur="12s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="12s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};

export default NeuralNetwork;
