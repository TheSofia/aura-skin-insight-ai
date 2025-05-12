
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
    if (level < 30) return "bg-[#00FFFF]"; // Electric Blue for low
    if (level < 60) return "bg-[#FF00FF]"; // Magenta for moderate
    return "bg-[#FFD700]"; // Gold for high
  };

  return (
    <div className="flex flex-col h-full animate-fade-in bg-black text-white">
      <div className="flex-1 overflow-auto px-6 py-6">
        <div className="max-w-md mx-auto">
          <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-2">Your Skin Analysis</h2>
            <p className="text-white/70">
              Based on our AI analysis, we've identified these key concerns to address in your skincare routine:
            </p>
          </div>
          
          <div className="space-y-6">
            {results.map((concern, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-md p-5">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-white">{concern.name}</h3>
                  <span className={`
                    px-2 py-1 text-xs rounded-sm 
                    ${concern.level < 30 ? 'bg-[#00FFFF]/20 text-[#00FFFF]' : 
                      concern.level < 60 ? 'bg-[#FF00FF]/20 text-[#FF00FF]' : 
                      'bg-[#FFD700]/20 text-[#FFD700]'}
                  `}>
                    {getLevelText(concern.level)}
                  </span>
                </div>
                <Progress 
                  value={concern.level} 
                  className={`h-1 mb-3 bg-white/10 ${getLevelColor(concern.level)}`} 
                />
                <p className="text-sm text-white/70">{concern.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6 border-t border-white/10">
        <div className="max-w-md mx-auto">
          <Button 
            className="w-full bg-[#00FFFF] hover:bg-[#00FFFF]/90 text-black font-medium flex items-center justify-center gap-2"
            onClick={onViewRecommendations}
          >
            <span>View Recommendations</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkinResults;
