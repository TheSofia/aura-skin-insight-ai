
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
    if (level < 30) return "bg-aurascan-soft-blue";
    if (level < 60) return "bg-aurascan-light-purple";
    return "bg-aurascan-soft-pink";
  };

  return (
    <div className="flex flex-col h-full animate-fade-in">
      <div className="flex-1 overflow-auto px-6 py-6">
        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-aurascan-purple/10 to-aurascan-soft-blue/10 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-semibold text-aurascan-deep-purple mb-2">Your Skin Analysis</h2>
            <p className="text-aurascan-gray">
              Based on our AI analysis, we've identified these key concerns to address in your skincare routine:
            </p>
          </div>
          
          <div className="space-y-6">
            {results.map((concern, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">{concern.name}</h3>
                  <span className={`
                    px-2 py-1 text-xs rounded-full 
                    ${concern.level < 30 ? 'bg-aurascan-soft-blue/20 text-blue-700' : 
                      concern.level < 60 ? 'bg-aurascan-light-purple/20 text-purple-700' : 
                      'bg-aurascan-soft-pink/20 text-pink-700'}
                  `}>
                    {getLevelText(concern.level)}
                  </span>
                </div>
                <Progress value={concern.level} className="h-2 mb-3" indicatorClassName={getLevelColor(concern.level)} />
                <p className="text-sm text-aurascan-gray">{concern.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-100">
        <div className="max-w-md mx-auto">
          <Button 
            className="w-full bg-aurascan-purple hover:bg-aurascan-purple/90 text-white flex items-center justify-center gap-2"
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
