
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
          {/* Background glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-cosmic/30 animate-pulse-slow"></div>
          
          {/* Rotating rings */}
          <div className="absolute inset-0 border border-aurascan-purple/40 rounded-full animate-rotate-slow" style={{ animationDuration: '20s' }}></div>
          <div className="absolute inset-[-10px] border border-aurascan-purple/20 rounded-full animate-rotate-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
          <div className="absolute inset-[-20px] border border-aurascan-auroral-green/10 rounded-full animate-rotate-slow" style={{ animationDuration: '30s' }}></div>
          
          {/* Central content */}
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <div className="text-6xl mb-2 animate-float">✨</div>
            <div className="text-aurascan-purple text-lg font-clash animate-pulse-slow">Analyzing</div>
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
                className="absolute w-1 h-1 rounded-full bg-aurascan-purple/70 animate-float"
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
        
        <h2 className="text-2xl font-clash font-medium text-center mb-2 text-white">Analyzing Your Skin</h2>
        <p className="text-gray-300 text-center mb-10">
          Our AI is examining your photo to identify skin concerns and create your personalized recommendations.
        </p>
        
        <div className="space-y-4">
          <div className="h-1 rounded-full bg-aurascan-deep-space overflow-hidden border border-aurascan-purple/30">
            <div className="h-full bg-gradient-cosmic w-3/4 rounded-full animate-pulse-slow"></div>
          </div>
          
          <div className="text-xs text-gray-400 flex justify-between">
            <span className="text-aurascan-purple">Analyzing texture...</span>
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
                  step.done ? 'bg-aurascan-purple' : 'bg-gray-800 border border-aurascan-purple/30'
                } flex items-center justify-center text-xs`}>
                  {step.done && "✓"}
                </div>
                <span className={`text-sm ${
                  step.done ? 'text-white' : 'text-gray-400'
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
