
import { Card } from "@/components/ui/card";
import { DiaryEntry } from "@/utils/skinDiaryUtils";

interface AIInsightsProps {
  entries: DiaryEntry[];
}

const AIInsights = ({ entries }: AIInsightsProps) => {
  return (
    <Card className="p-6 glass-card">
      <h2 className="text-xl mb-4 font-light tracking-wider">AI Insights</h2>
      
      {entries.length > 0 ? (
        <div className="space-y-3">
          <p className="text-sm">Based on your diary entries, DERMA.AGENT has detected:</p>
          
          <div className="p-3 border border-beautyagent-light-grey rounded-lg">
            <p className="text-sm font-medium mb-1">Hydration Patterns</p>
            <p className="text-xs text-beautyagent-medium-grey">Your skin appears more hydrated on days when you get 7+ hours of sleep.</p>
          </div>
          
          <div className="p-3 border border-beautyagent-light-grey rounded-lg">
            <p className="text-sm font-medium mb-1">Product Effectiveness</p>
            <p className="text-xs text-beautyagent-medium-grey">The hyaluronic acid serum appears in 70% of entries where you reported good skin texture.</p>
          </div>
          
          <div className="p-3 border border-beautyagent-light-grey rounded-lg">
            <p className="text-sm font-medium mb-1">Mood Correlation</p>
            <p className="text-xs text-beautyagent-medium-grey">Your skin concerns tend to decrease on days when you record a happy mood.</p>
          </div>
        </div>
      ) : (
        <p className="text-beautyagent-medium-grey text-sm">
          Add at least 3 diary entries to receive AI insights about your skin patterns and product effectiveness.
        </p>
      )}
    </Card>
  );
};

export default AIInsights;
