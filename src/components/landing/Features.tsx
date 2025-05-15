
import React from "react";
import { Link } from "react-router-dom";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Features = () => {
  const { setRefs } = useScrollAnimations();
  
  return (
    <div className="grid md:grid-cols-3 gap-6 w-full mt-8">
      {/* Feature 1 - Mirror My Skin */}
      <div 
        className="opacity-0 transform transition-all duration-500"
        ref={(el) => setRefs(el, 0)}
      >
        <Link 
          to="/skin-mirror" 
          className="glass-card hover-enhance depth-layer-2 p-6 block h-full overflow-hidden"
        >
          <div className="relative overflow-hidden rounded-lg mb-3 aspect-video bg-gradient-to-br from-beautyagent-plasma-white-light to-beautyagent-plasma-white">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-beautyagent-rose-quartz-glow opacity-50 animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-1 bg-beautyagent-rose-quartz-glow animate-scanning rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-light tracking-wider mb-2 text-beautyagent-dark-grey">Mirror My Skin</h3>
          <p className="text-beautyagent-medium-grey text-sm">
            Track your skin's journey with AI-powered analysis and visualize changes over time.
          </p>
        </Link>
      </div>
      
      {/* Feature 2 - Skin Diary */}
      <div 
        className="opacity-0 transform transition-all duration-500"
        ref={(el) => setRefs(el, 1)}
      >
        <Link 
          to="/skin-diary" 
          className="glass-card hover-enhance depth-layer-2 p-6 block h-full overflow-hidden"
        >
          <div className="relative overflow-hidden rounded-lg mb-3 aspect-video bg-gradient-to-br from-beautyagent-plasma-white-light to-beautyagent-plasma-white">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-beautyagent-cosmic-peach-glow opacity-50 animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-t-2 border-r-2 border-beautyagent-cosmic-peach-light opacity-60 animate-spin-slow rounded-full"></div>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-light tracking-wider mb-2 text-beautyagent-dark-grey">Skin Diary</h3>
          <p className="text-beautyagent-medium-grey text-sm">
            Record observations, track product reactions, and discover patterns in your skin's behavior.
          </p>
        </Link>
      </div>
      
      {/* Feature 3 - BeautyExchange */}
      <div 
        className="opacity-0 transform transition-all duration-500"
        ref={(el) => setRefs(el, 2)}
      >
        <Link 
          to="/beauty-exchange" 
          className="glass-card hover-enhance depth-layer-2 p-6 block h-full overflow-hidden"
        >
          <div className="relative overflow-hidden rounded-lg mb-3 aspect-video bg-gradient-to-br from-beautyagent-plasma-white-light to-beautyagent-plasma-white">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-beautyagent-violet-titanium-glow opacity-50 animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center grid grid-cols-2 gap-2 opacity-60">
                <div className="w-3 h-3 rounded-full bg-beautyagent-violet-titanium-light animate-pulse-cellular"></div>
                <div className="w-3 h-3 rounded-full bg-beautyagent-violet-titanium-light animate-pulse-cellular" style={{ animationDelay: '0.4s' }}></div>
                <div className="w-3 h-3 rounded-full bg-beautyagent-violet-titanium-light animate-pulse-cellular" style={{ animationDelay: '0.6s' }}></div>
                <div className="w-3 h-3 rounded-full bg-beautyagent-violet-titanium-light animate-pulse-cellular" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-light tracking-wider mb-2 text-beautyagent-dark-grey">BeautyExchange</h3>
          <p className="text-beautyagent-medium-grey text-sm">
            Connect with others, share insights, and exchange product experiences in our supportive community.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Features;
