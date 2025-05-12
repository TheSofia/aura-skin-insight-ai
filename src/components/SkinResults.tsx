
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
    if (level < 30) return "bg-[#2E8B57]";
    if (level < 60) return "bg-[#0A4F3D]";
    return "bg-[#CC5500]";
  };

  const getLevelBgClass = (level: number) => {
    if (level < 30) return "bg-[#2E8B57]/10 text-[#2E8B57]";
    if (level < 60) return "bg-[#0A4F3D]/10 text-[#0A4F3D]";
    return "bg-[#CC5500]/10 text-[#CC5500]";
  };

  return (
    <div className="flex flex-col h-full animate-fade-in bg-white text-gray-800">
      <div className="flex-1 overflow-auto px-6 py-16 md:px-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Logo emblem */}
          <div className="mb-12">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0A4F3D]">
              <path d="M20 0L40 20L20 40L0 20L20 0Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 10L30 20L20 30L10 20L20 10Z" fill="currentColor"/>
            </svg>
          </div>

          {/* Header */}
          <div className="relative mb-20">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
              Your Personalized Skin Profile
            </h1>
            <p className="text-gray-600 max-w-2xl leading-relaxed text-lg">
              Unlock the insights from your scan. Below is a breakdown of the key concerns our AI has
              identified, forming the foundation for your tailored skincare protocol.
            </p>
          </div>
          
          {/* Results */}
          <div className="space-y-24">
            {results.map((concern, index) => (
              <div key={index} className="relative grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                {/* Label column */}
                <div className="md:col-span-4 lg:col-span-3">
                  <h3 className="text-2xl font-medium text-gray-900 tracking-tight mb-3">{concern.name}</h3>
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
                      className="h-[3px] bg-gray-200"
                    />
                    <div 
                      className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 z-10 ${getLevelColorClass(concern.level)}`}
                      style={{ left: `${concern.level}%` }}
                    ></div>
                    <div className="absolute -bottom-5 left-0 text-xs text-gray-500 font-medium">0%</div>
                    <div className="absolute -bottom-5 right-0 text-xs text-gray-500 font-medium">100%</div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-base text-gray-700 leading-relaxed tracking-wide max-w-3xl">
                    {concern.description}
                  </p>
                  
                  {/* Geometric accent line */}
                  <div className="absolute right-0 top-0 h-full w-[1px] bg-gray-200 opacity-70 hidden md:block"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Data visualization */}
          <div className="mt-28 mb-16 relative h-96 overflow-hidden rounded-sm bg-gray-100/50 border border-gray-200">
            {/* Grid background */}
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 opacity-30">
              {Array(60).fill(0).map((_, i) => (
                <div key={i} className="border-[0.5px] border-gray-200"></div>
              ))}
            </div>
            
            {/* Abstract visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Layer 1: Rotating deep green rings */}
                <div className="absolute inset-0 border-2 border-[#0A4F3D] opacity-40 rounded-full" 
                     style={{ transform: 'scale(0.8) rotate(20deg)' }}></div>
                <div className="absolute inset-0 border border-[#0A4F3D] opacity-30 rounded-full" 
                     style={{ transform: 'scale(1.1) rotate(-10deg)' }}></div>
                
                {/* Layer 2: Inner burnt orange + white lines */}
                <div className="absolute inset-12 border border-[#CC5500] opacity-50" 
                     style={{ transform: 'rotate(35deg)' }}></div>
                <div className="absolute inset-16 border border-white opacity-70" 
                     style={{ transform: 'rotate(-25deg)' }}></div>
                
                {/* Layer 3: Central luminous point */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#2E8B57] opacity-90 z-10 animate-pulse-slow"></div>
                
                {/* Layer 4: Abstract geometric shapes */}
                <div className="absolute top-1/4 left-1/4 w-8 h-8 border-t-2 border-l-2 border-white opacity-80 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                <div className="absolute bottom-1/4 right-1/4 w-8 h-8 border-b-2 border-r-2 border-white opacity-80 transform translate-x-1/2 translate-y-1/2 rotate-45"></div>
                
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
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action button */}
      <div className="px-6 py-16 md:px-12 md:py-16 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <Button 
            className="w-full md:w-auto bg-[#0A4F3D] hover:bg-[#0A4F3D]/90 text-white font-semibold tracking-wider py-7 px-10 rounded-sm flex items-center justify-center gap-4 transition-colors duration-200"
            onClick={onViewRecommendations}
          >
            <span>VIEW PERSONALIZED PROTOCOL</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkinResults;
