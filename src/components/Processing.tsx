
import { useEffect } from 'react';

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
    <div className="flex flex-col items-center justify-center h-full p-6 animate-fade-in">
      <div className="w-full max-w-md">
        <div className="relative w-64 h-64 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-aurascan-soft-purple/30 animate-pulse-slow"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl">✨</div>
          </div>
          <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden">
            <div className="scan-line w-full animate-scanning"></div>
          </div>
        </div>
        
        <h2 className="text-xl font-medium text-center mb-2">Analyzing Your Skin</h2>
        <p className="text-aurascan-gray text-center mb-8">
          Our AI is examining your photo to identify skin concerns and create your personalized recommendations.
        </p>
        
        <div className="space-y-4">
          <div className="h-2 rounded-full bg-aurascan-light-gray overflow-hidden">
            <div className="h-full bg-aurascan-purple w-3/4 rounded-full animate-pulse"></div>
          </div>
          
          <div className="text-xs text-aurascan-gray flex justify-between">
            <span>Analyzing texture...</span>
            <span>75%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processing;
