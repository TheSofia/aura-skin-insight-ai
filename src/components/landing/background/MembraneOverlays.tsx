
import React from 'react';

const MembraneOverlays: React.FC = () => {
  return (
    <>
      {/* Enhanced multi-layered membrane overlay for sophisticated lab atmosphere */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-white/[0.06] to-transparent animate-pulse-cellular-minimal"
        style={{
          backgroundSize: '250% 250%',
          backgroundPosition: '50% 50%',
          animationDuration: '45s',
          zIndex: 1
        }}
      />
      
      {/* Secondary depth layer with enhanced organic patterns */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-gray-50/[0.04] via-transparent to-gray-100/[0.03] animate-cellular-drift"
        style={{
          backgroundSize: '400% 400%',
          backgroundPosition: '30% 70%',
          animationDuration: '65s',
          zIndex: 1
        }}
      />
      
      {/* Tertiary atmospheric layer for enhanced depth with subtle accent hints */}
      <div 
        className="absolute inset-0 bg-gradient-conic from-transparent via-violet-50/[0.02] to-transparent animate-cellular-morph"
        style={{
          backgroundSize: '350% 350%',
          backgroundPosition: '60% 40%',
          animationDuration: '80s',
          zIndex: 1
        }}
      />
      
      {/* Additional subtle orange accent layer for depth */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-orange-50/[0.015] via-transparent to-transparent animate-cellular-cluster"
        style={{
          backgroundSize: '300% 300%',
          backgroundPosition: '70% 30%',
          animationDuration: '95s',
          zIndex: 1
        }}
      />
    </>
  );
};

export default MembraneOverlays;
