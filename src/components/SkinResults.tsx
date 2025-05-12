
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";

type SkinConcern = {
  name: string;
  level: number;
  description: string;
};

type SkinResultsProps = {
  onViewRecommendations: () => void;
};

const SkinResults = ({ onViewRecommendations }: SkinResultsProps) => {
  // Mock skin analysis results
  const [results] = useState<SkinConcern[]>([
    {
      name: "Dryness",
      level: 65,
      description: "Analysis indicates moderate dryness, suggesting a need for targeted hydration strategies to restore balance and comfort."
    },
    {
      name: "Sun Damage",
      level: 45,
      description: "Early indicators of past UV exposure. Focused care with protective and restorative agents is advised for luminous health."
    },
    {
      name: "Fine Lines",
      level: 30,
      description: "Minimal visible signs of aging. Proactive preventative measures are key to maintaining skin's youthful vitality."
    },
    {
      name: "Oiliness",
      level: 20,
      description: "Analysis shows low oil production. This profile benefits from products designed to nourish and support the skin barrier without heaviness."
    }
  ]);

  const getLevelText = (level: number) => {
    if (level < 30) return "Low";
    if (level < 60) return "Moderate";
    return "Elevated";
  };

  const getLevelColorClass = (level: number) => {
    if (level < 30) return "bg-aurascan-auroral-green";
    if (level < 60) return "bg-aurascan-stellar-gold";
    return "bg-aurascan-nebula-pink";
  };

  const getLevelBgClass = (level: number) => {
    if (level < 30) return "bg-aurascan-auroral-green/10 text-aurascan-auroral-green";
    if (level < 60) return "bg-aurascan-stellar-gold/10 text-aurascan-stellar-gold";
    return "bg-aurascan-nebula-pink/10 text-aurascan-nebula-pink";
  };

  return (
    <div className="flex flex-col h-full animate-fade-in font-space">
      <div className="flex-1 overflow-auto px-6 py-16 md:px-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Logo emblem */}
          <div className="mb-12">
            <div className="relative w-14 h-14">
              <div className="absolute inset-0 bg-aurascan-purple/30 rounded-full animate-pulse-slow"></div>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                <path d="M28 0L56 28L28 56L0 28L28 0Z" stroke="url(#logo-gradient)" strokeWidth="2"/>
                <path d="M28 14L42 28L28 42L14 28L28 14Z" fill="url(#logo-gradient)"/>
                <defs>
                  <linearGradient id="logo-gradient" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9D00FF" />
                    <stop offset="1" stopColor="#39FF14" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 animate-rotate-slow opacity-70 pointer-events-none">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="28" r="27" stroke="url(#ring-gradient)" strokeWidth="1" strokeDasharray="4 4"/>
                  <defs>
                    <linearGradient id="ring-gradient" x1="8" y1="8" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9D00FF" />
                      <stop offset="1" stopColor="#39FF14" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="relative mb-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Your Personalized <span className="text-transparent bg-clip-text bg-gradient-cosmic">Skin Profile</span>
            </h1>
            <p className="text-gray-300 max-w-2xl leading-relaxed text-lg">
              Unlock the insights from your scan. Below is a breakdown of the key concerns our AI has
              identified, forming the foundation for your tailored skincare protocol.
            </p>
          </div>
          
          {/* Results */}
          <div className="space-y-24">
            {results.map((concern, index) => (
              <div key={index} className="relative grid grid-cols-1 md:grid-cols-12 gap-12 items-start cosmic-card p-8">
                {/* Label column */}
                <div className="md:col-span-4 lg:col-span-3">
                  <h3 className="text-2xl font-medium text-white tracking-tight mb-3">{concern.name}</h3>
                  <div className={`inline-block px-4 py-1 text-sm font-semibold tracking-wider uppercase rounded-full ${getLevelBgClass(concern.level)}`}>
                    {getLevelText(concern.level)}
                  </div>
                </div>
                
                {/* Data column */}
                <div className="md:col-span-8 lg:col-span-9 relative">
                  {/* Progress visualization */}
                  <div className="mb-8 relative">
                    <Progress 
                      value={concern.level} 
                      className="h-[3px] bg-gray-800/50"
                      indicatorClassName={getLevelColorClass(concern.level)}
                    />
                    <div 
                      className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 z-10 animate-pulse-slow ${getLevelColorClass(concern.level)}`}
                      style={{ left: `${concern.level}%` }}
                    ></div>
                    <div className="absolute -bottom-5 left-0 text-xs text-gray-500 font-medium">0%</div>
                    <div className="absolute -bottom-5 right-0 text-xs text-gray-500 font-medium">100%</div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-base text-gray-300 leading-relaxed tracking-wide max-w-3xl">
                    {concern.description}
                  </p>
                  
                  {/* Geometric accent line */}
                  <div className="absolute right-0 top-0 h-full w-[1px] bg-aurascan-purple/20 opacity-70 hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Data visualization */}
          <div className="mt-28 mb-16 relative h-96 overflow-hidden rounded-lg glassmorphism p-4">
            {/* Grid background */}
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 opacity-20">
              {Array(60).fill(0).map((_, i) => (
                <div key={i} className="border-[0.5px] border-aurascan-purple/30"></div>
              ))}
            </div>
            
            {/* Abstract visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Layer 1: Rotating rings */}
                <div className="absolute inset-0 border-2 border-aurascan-purple/40 rounded-full animate-rotate-slow" 
                     style={{ transformOrigin: 'center', animationDuration: '30s' }}></div>
                <div className="absolute inset-0 border border-aurascan-auroral-green/30 rounded-full animate-rotate-slow" 
                     style={{ transform: 'scale(1.1)', transformOrigin: 'center', animationDuration: '25s', animationDirection: 'reverse' }}></div>
                
                {/* Layer 2: Inner dynamic shapes */}
                <div className="absolute inset-12 border border-aurascan-nebula-pink/50 animate-pulse-slow" 
                     style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
                <div className="absolute inset-16 border border-white/70 animate-pulse-slow" 
                     style={{ clipPath: 'polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)', animationDelay: '0.5s' }}></div>
                
                {/* Layer 3: Central luminous point */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-aurascan-purple shadow-neon animate-glow z-10"></div>
                
                {/* Layer 4: Abstract geometric shapes */}
                <div className="absolute top-1/4 left-1/4 w-8 h-8 border-t-2 border-l-2 border-aurascan-auroral-green/80 transform -translate-x-1/2 -translate-y-1/2 rotate-45 animate-float" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-8 h-8 border-b-2 border-r-2 border-aurascan-nebula-pink/80 transform translate-x-1/2 translate-y-1/2 rotate-45 animate-float" style={{ animationDelay: '0.7s' }}></div>
                
                {/* Data points representing skin concerns */}
                {results.map((concern, i) => (
                  <div 
                    key={i} 
                    className={`absolute border ${getLevelColorClass(concern.level).replace('bg-', 'border-')}`}
                    style={{
                      width: `${60 + concern.level * 0.5}px`,
                      height: `${60 + concern.level * 0.5}px`,
                      opacity: 0.6,
                      transform: `rotate(${i * 45}deg)`,
                      left: `${50 - concern.level * 0.25}%`,
                      top: `${50 - concern.level * 0.25}%`,
                      animation: 'float 4s infinite ease-in-out',
                      animationDelay: `${i * 0.25}s`
                    }}
                  ></div>
                ))}

                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {Array(10).fill(0).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-aurascan-purple/70 animate-float"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDuration: `${3 + Math.random() * 4}s`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action button */}
      <div className="px-6 py-16 md:px-12 md:py-16 border-t border-aurascan-purple/20">
        <div className="max-w-5xl mx-auto">
          <Button 
            className="w-full md:w-auto cosmic-button py-7 px-10 flex items-center justify-center gap-4"
            onClick={onViewRecommendations}
          >
            <span className="tracking-wider">VIEW PERSONALIZED PROTOCOL</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkinResults;
