
import { useEffect } from 'react';
import LoadingAnimation from './LoadingAnimation';

type ProcessingProps = {
  onProcessingComplete: () => void;
};

const Processing = ({ onProcessingComplete }: ProcessingProps) => {
  useEffect(() => {
    // Simulate processing time with a timeout
    const timer = setTimeout(() => {
      onProcessingComplete();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onProcessingComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 animate-fade-in bg-gradient-light">
      <div className="w-full max-w-md text-center">
        <LoadingAnimation size="lg" message="Analyzing Your Skin" />
        
        <h2 className="text-3xl font-clash font-medium text-center mb-3 text-aurascan-dark-grey mt-8">Creating Your Protocol</h2>
        <p className="text-aurascan-medium-grey text-center mb-10 font-light">
          Our advanced AI is analyzing your skin data and preparing personalized recommendations.
        </p>
        
        <div className="space-y-8">
          <div className="h-1 rounded-full bg-aurascan-light-grey overflow-hidden border border-aurascan-light-grey">
            <div className="h-full bg-gradient-to-r from-aurascan-dark-grey to-aurascan-dark-grey/70 w-3/4 rounded-full animate-pulse-slow"></div>
          </div>
          
          <div className="text-xs font-medium flex justify-between">
            <span className="text-aurascan-dark-grey">Creating your personalized protocol</span>
            <span className="text-aurascan-medium-grey">75%</span>
          </div>
          
          {/* Processing steps */}
          <div className="space-y-4">
            {[
              { text: "Mapping facial contours", done: true },
              { text: "Identifying skin characteristics", done: true },
              { text: "Analyzing skin concerns", done: true },
              { text: "Generating personalized protocol", done: false }
            ].map((step, i) => (
              <div key={i} className="flex items-center space-x-3 py-2 transition-all hover:bg-white hover:bg-opacity-50 rounded-md px-2">
                <div className={`w-5 h-5 rounded-full transition-all duration-300 ${
                  step.done ? 'bg-aurascan-dark-grey' : 'bg-aurascan-light-grey border border-aurascan-dark-grey/30'
                } flex items-center justify-center text-xs text-white`}>
                  {step.done && "✓"}
                </div>
                <span className={`text-sm transition-colors duration-300 ${
                  step.done ? 'text-aurascan-dark-grey' : 'text-aurascan-medium-grey'
                }`}>{step.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processing;
