
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import DynamicLogo from "./DynamicLogo";
import { Scan } from "lucide-react";

type OnboardingProps = {
  onGetStarted: () => void;
};

const Onboarding = ({ onGetStarted }: OnboardingProps) => {
  const { toast } = useToast();
  
  return (
    <div className="flex flex-col items-center text-center px-6 py-10 space-y-12 animate-fade-in min-h-screen justify-center bg-white">
      <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="relative order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <DynamicLogo colorScheme="cyan" size="lg" className="mb-8" />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-clash text-aurascan-dark-grey leading-tight">
            Discover Your <span className="text-aurascan-dark-grey">Skin Vitality</span>
          </h1>
          
          <p className="text-aurascan-medium-grey mx-auto md:mx-0 mb-8 leading-relaxed text-lg max-w-md">
            Experience personalized skincare powered by advanced AI analysis.
            Just one scan reveals your unique profile and tailored recommendations.
          </p>
          
          <Button 
            className="bg-aurascan-dark-grey hover:bg-aurascan-dark-grey/90 text-white py-6 px-8 text-lg w-full md:w-auto flex items-center justify-center gap-3"
            onClick={onGetStarted}
          >
            <Scan className="h-5 w-5" />
            <span>Analyze My Skin</span>
          </Button>
          
          <p className="text-xs text-aurascan-medium-grey mt-6 max-w-md">
            By continuing, you agree to our <a href="#" className="text-aurascan-dark-grey hover:text-aurascan-dark-grey/80 transition-colors">Privacy Policy</a> and <a href="#" className="text-aurascan-dark-grey hover:text-aurascan-dark-grey/80 transition-colors">Terms of Service</a>.
          </p>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Abstract, morphing visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="morphing-shape w-48 h-48 md:w-64 md:h-64 opacity-90"></div>
              
              {/* Overlapping circular elements for depth */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full border border-aurascan-dark-grey/20 animate-rotate-slow" style={{ animationDuration: '20s' }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full border border-aurascan-dark-grey/30 animate-rotate-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              
              {/* Glowing center point */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-aurascan-dark-grey shadow-glow z-10"></div>
              
              {/* Floating particles */}
              {Array(6).fill(0).map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-aurascan-dark-grey/70 animate-float"
                  style={{
                    left: `${30 + (i * 10)}%`,
                    top: `${20 + (i * 12)}%`,
                    animationDuration: `${3 + i}s`,
                    animationDelay: `${i * 0.5}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Simplified process steps */}
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="grid grid-cols-3 gap-8">
          {[
            { icon: "📷", text: "AI Scan", desc: "Capture your skin profile instantly" },
            { icon: "🔍", text: "Analysis", desc: "AI identifies your unique needs" },
            { icon: "✨", text: "Solutions", desc: "Get personalized product recommendations" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center space-y-3 glass-card p-6 transition-all hover:shadow-xl hover:translate-y-[-2px]">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl bg-white shadow-light border border-aurascan-light-grey">
                {item.icon}
              </div>
              <h3 className="text-base font-medium text-aurascan-dark-grey">{item.text}</h3>
              <span className="text-sm text-aurascan-medium-grey">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
