
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
      <div className="flex-1 overflow-auto px-8 py-8">
        <div className="max-w-md mx-auto">
          <div className="backdrop-blur-sm bg-gradient-to-r from-white to-gray-50 border border-gray-100 rounded-sm p-8 mb-10">
            <h2 className="text-2xl font-medium text-gray-900 mb-3 tracking-tight">Your Skin Analysis</h2>
            <p className="text-gray-600 leading-relaxed">
              Based on our AI analysis, we've identified these key concerns to address in your personalized skincare protocol:
            </p>
          </div>
          
          <div className="space-y-8">
            {results.map((concern, index) => (
              <div key={index} className="bg-white border-l-2 border-gray-200 rounded-none p-6 shadow-sm">
                <div className="flex justify-between mb-4">
                  <h3 className="font-medium text-gray-900 tracking-tight">{concern.name}</h3>
                  <span className={`
                    px-3 py-1 text-xs font-medium tracking-wide
                    ${concern.level < 30 ? 'text-[#2E8B57] bg-[#2E8B57]/5 border border-[#2E8B57]/20' : 
                      concern.level < 60 ? 'text-[#0A4F3D] bg-[#0A4F3D]/5 border border-[#0A4F3D]/20' : 
                      'text-[#CC5500] bg-[#CC5500]/5 border border-[#CC5500]/20'}
                  `}>
                    {getLevelText(concern.level)}
                  </span>
                </div>
                <div className="mb-4">
                  <Progress 
                    value={concern.level} 
                    className={`h-[2px] ${getLevelColor(concern.level)}`} 
                  />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{concern.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-8 border-t border-gray-100">
        <div className="max-w-md mx-auto">
          <Button 
            className="w-full bg-[#0A4F3D] hover:bg-[#0A4F3D]/90 text-white font-normal tracking-wide flex items-center justify-center gap-2"
            onClick={onViewRecommendations}
          >
            <span>View Personalized Recommendations</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkinResults;
