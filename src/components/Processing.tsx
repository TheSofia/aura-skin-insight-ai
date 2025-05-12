
import { useEffect } from 'react';
import DynamicLogo from './DynamicLogo';

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
      <div className="w-full max-w-md">
        <div className="relative w-64 h-64 mx-auto mb-12">
          {/* Background light */}
          <div className="absolute inset-0 rounded-full bg-white shadow-light"></div>
          
          {/* Morphing visualization */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="morphing-shape--teal w-40 h-40 opacity-90"></div>
            
            {/* Overlapping circular elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-aurascan-teal/20 animate-rotate-slow" style={{ animationDuration: '20s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-aurascan-teal/30 animate-rotate-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            
            {/* Glowing center point */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-aurascan-teal shadow-teal animate-glow-teal z-10"></div>

            {/* Scan line */}
            <div className="absolute inset-x-0 top-0 h-full overflow-hidden">
              <div className="scan-line-teal w-full animate-scanning"></div>
            </div>
            
            {/* Floating particles */}
            {Array(8).fill(0).map((_, i) => (
              <div 
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-aurascan-teal/70 animate-float"
                style={{
                  left: `${30 + (i * 6)}%`,
                  top: `${20 + (i * 8)}%`,
                  animationDuration: `${2 + i * 0.5}s`,
                  animationDelay: `${i * 0.25}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Center logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <DynamicLogo colorScheme="teal" size="lg" />
          </div>
        </div>
        
        <h2 className="text-3xl font-clash font-medium text-center mb-3 text-aurascan-dark-grey">Analyzing Your Skin</h2>
        <p className="text-aurascan-medium-grey text-center mb-10">
          Our advanced AI is creating your unique profile and personalized recommendations.
        </p>
        
        <div className="space-y-8">
          <div className="h-1 rounded-full bg-aurascan-light-grey overflow-hidden border border-aurascan-light-grey">
            <div className="h-full bg-gradient-teal w-3/4 rounded-full animate-pulse-slow"></div>
          </div>
          
          <div className="text-xs font-medium flex justify-between">
            <span className="text-aurascan-teal">Analyzing skin texture and structure</span>
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
              <div key={i} className="flex items-center space-x-3 py-2">
                <div className={`w-5 h-5 rounded-full ${
                  step.done ? 'bg-aurascan-teal' : 'bg-aurascan-light-grey border border-aurascan-teal/30'
                } flex items-center justify-center text-xs text-white`}>
                  {step.done && "✓"}
                </div>
                <span className={`text-sm ${
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
