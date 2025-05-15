
import React from "react";

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Ambient gradients and orbital cells */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-gradient-radial from-beautyagent-violet-titanium-glow to-transparent opacity-10 rounded-full filter blur-3xl animate-float parallax-layer"></div>
      <div className="absolute right-[-10%] top-[20%] w-[30vw] h-[30vw] bg-gradient-radial from-beautyagent-rose-quartz-glow to-transparent opacity-10 rounded-full filter blur-3xl animate-float-slow"></div>
      <div className="absolute left-[-5%] bottom-[10%] w-[25vw] h-[25vw] bg-gradient-radial from-beautyagent-cosmic-peach-glow to-transparent opacity-8 rounded-full filter blur-3xl animate-float-subtle"></div>
      
      {/* Subtle orbital cells */}
      <div className="absolute w-3 h-3 rounded-full bg-white opacity-30 top-1/3 left-1/4 animate-cellular-drift"></div>
      <div className="absolute w-2 h-2 rounded-full bg-white opacity-20 top-1/2 right-1/3 animate-cellular-drift-slow"></div>
      <div className="absolute w-4 h-4 rounded-full bg-white opacity-15 bottom-1/4 left-1/3 animate-cellular-drift-fast"></div>
      <div className="absolute w-1 h-1 rounded-full bg-white opacity-25 top-2/3 right-1/4 animate-cellular-drift"></div>
    </div>
  );
};

export default BackgroundElements;
