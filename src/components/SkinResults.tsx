
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
      description: "Moderate dryness detected. Your skin appears to need additional hydration."
    },
    {
      name: "Sun Damage",
      level: 45,
      description: "Early signs of UV exposure visible. Consider products with sun protection."
    },
    {
      name: "Fine Lines",
      level: 30,
      description: "Minimal signs of aging. Preventative care recommended."
    },
    {
      name: "Oiliness",
      level: 20,
      description: "Low oil production detected. Your skin tends to be on the dry side."
    }
  ]);

  const getLevelText = (level: number) => {
    if (level < 30) return "Low";
    if (level < 60) return "Moderate";
    return "High";
  };

  const getLevelColor = (level: number) => {
    if (level < 30) return "bg-[#2E8B57]"; // Forest Green for low
    if (level < 60) return "bg-[#0A4F3D]"; // Deeper Jade Green for moderate
    return "bg-[#CC5500]"; // Burnt Orange for high
  };

  return (
    <div className="flex flex-col h-full animate-fade-in bg-white text-gray-900">
      <div className="flex-1 overflow-auto p-8 md:p-12">
        <div className="max-w-3xl mx-auto">
          {/* Header with geometric accent */}
          <div className="relative mb-16">
            <div className="absolute -top-2 left-0 w-12 h-[2px] bg-[#0A4F3D]"></div>
            <h2 className="text-3xl font-light tracking-tight text-gray-900 mb-6">Skin Analysis</h2>
            <p className="text-gray-500 max-w-xl leading-relaxed">
              Based on our advanced AI analysis, we've identified these key concerns that define your unique skin profile.
              Each data point has been carefully evaluated to create your personalized protocol.
            </p>
          </div>
          
          <div className="space-y-16">
            {results.map((concern, index) => (
              <div key={index} className="relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left column - metadata */}
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-medium text-gray-900 tracking-tight mb-1">{concern.name}</h3>
                    <div className={`
                      inline-flex px-3 py-1 text-[11px] font-medium tracking-wider uppercase
                      ${concern.level < 30 ? 'text-[#2E8B57]' : 
                        concern.level < 60 ? 'text-[#0A4F3D]' : 
                        'text-[#CC5500]'}
                    `}>
                      {getLevelText(concern.level)}
                    </div>
                  </div>
                  
                  {/* Right column - data visualization and description */}
                  <div className="md:col-span-9">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs text-gray-400 font-medium">0</div>
                        <div className="text-xs text-gray-400 font-medium">100</div>
                      </div>
                      <div className="relative h-[1px] bg-gray-100">
                        <Progress 
                          value={concern.level} 
                          className={`absolute top-0 left-0 h-[3px] ${getLevelColor(concern.level)}`}
                        />
                        <div 
                          className={`absolute w-2 h-2 rounded-full -top-[3px] transform -translate-x-1/2`}
                          style={{ 
                            left: `${concern.level}%`,
                            backgroundColor: concern.level < 30 ? '#2E8B57' : 
                                          concern.level < 60 ? '#0A4F3D' : 
                                          '#CC5500'
                          }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed tracking-wide max-w-xl">
                      {concern.description}
                    </p>
                    
                    {/* Geometric accent line */}
                    <div 
                      className={`absolute right-0 top-0 h-full w-[1px]
                        ${concern.level < 30 ? 'bg-[#2E8B57]/20' : 
                          concern.level < 60 ? 'bg-[#0A4F3D]/20' : 
                          'bg-[#CC5500]/20'}
                      `}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Abstract data visualization */}
          <div className="mt-20 mb-12 relative h-64 overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-white opacity-90"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="grid grid-cols-4 gap-1 w-full h-full opacity-20">
                {Array(16).fill(0).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-gray-200"></div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {results.map((concern, i) => (
                    <div 
                      key={i} 
                      className={`absolute ${getLevelColor(concern.level).replace('bg-', 'border-')} border-2`}
                      style={{
                        width: `${80 + concern.level * 0.4}px`,
                        height: `${80 + concern.level * 0.4}px`,
                        borderRadius: `${concern.level}%`,
                        top: `${50 - concern.level * 0.25}%`,
                        left: `${50 - concern.level * 0.25}%`,
                        transform: `rotate(${i * 45}deg)`,
                        opacity: 0.7,
                      }}
                    ></div>
                  ))}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-[#0A4F3D]/20"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-[#0A4F3D]/40"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0A4F3D]/60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-8 py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <Button 
            className="w-full md:w-auto bg-[#0A4F3D] hover:bg-[#0A4F3D]/90 text-white font-normal tracking-wider py-6 px-8 rounded-sm flex items-center justify-center gap-3"
            onClick={onViewRecommendations}
          >
            <span>VIEW PERSONALIZED PROTOCOL</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkinResults;
