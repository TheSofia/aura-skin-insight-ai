
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
        <div className="relative w-64 h-64 mx-auto mb-12">
          {/* Background light */}
          <div className="absolute inset-0 rounded-full bg-white shadow-light"></div>
          
          {/* Rotating rings */}
          <div className="absolute inset-0 border border-aurascan-coral/40 rounded-full animate-rotate-slow" style={{ animationDuration: '20s' }}></div>
          <div className="absolute inset-[-10px] border border-aurascan-coral/20 rounded-full animate-rotate-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
          <div className="absolute inset-[-20px] border border-aurascan-light-coral/10 rounded-full animate-rotate-slow" style={{ animationDuration: '30s' }}></div>
          
          {/* Central content */}
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <div className="dot-logo scale-150 mb-2">
              <div className="dot-logo__core"></div>
              <div className="dot-logo__ring dot-logo__ring--inner"></div>
              <div className="dot-logo__ring dot-logo__ring--outer"></div>
            </div>
            <div className="text-aurascan-coral text-lg font-clash animate-pulse-slow mt-8">Analyzing</div>
          </div>
          
          {/* Scan line */}
          <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden">
            <div className="scan-line w-full animate-scanning"></div>
          </div>
          
          {/* Particles */}
          <div className="absolute inset-[-30px] overflow-hidden">
            {Array(15).fill(0).map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 rounded-full bg-aurascan-coral/70 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${2 + Math.random() * 4}s`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <h2 className="text-2xl font-clash font-medium text-center mb-2 text-aurascan-dark-grey">Analyzing Your Skin</h2>
        <p className="text-aurascan-medium-grey text-center mb-10">
          Our AI is examining your photo to identify skin concerns and create your personalized recommendations.
        </p>
        
        <div className="space-y-4">
          <div className="h-1 rounded-full bg-aurascan-light-grey overflow-hidden border border-aurascan-light-grey">
            <div className="h-full bg-gradient-coral w-3/4 rounded-full animate-pulse-slow"></div>
          </div>
          
          <div className="text-xs text-aurascan-medium-grey flex justify-between">
            <span className="text-aurascan-coral">Analyzing texture...</span>
            <span>75%</span>
          </div>
          
          {/* Processing steps */}
          <div className="mt-8 space-y-2">
            {[
              { text: "Skin texture analysis", done: true },
              { text: "Identifying key concerns", done: true },
              { text: "Calculating personalized recommendations", done: false },
              { text: "Preparing results", done: false }
            ].map((step, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className={`w-4 h-4 rounded-full ${
                  step.done ? 'bg-aurascan-coral' : 'bg-aurascan-light-grey border border-aurascan-coral/30'
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
