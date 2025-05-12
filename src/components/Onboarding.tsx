
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

type OnboardingProps = {
  onGetStarted: () => void;
};

const Onboarding = ({ onGetStarted }: OnboardingProps) => {
  const { toast } = useToast();
  
  return (
    <div className="flex flex-col items-center text-center px-6 py-10 space-y-12 animate-fade-in min-h-screen justify-center bg-aurascan-white">
      <div className="w-32 h-32 relative">
        {/* Dynamic Dot Logo */}
        <div className="absolute inset-0 rounded-full bg-white shadow-light flex items-center justify-center scale-150">
          {/* Central dot */}
          <div className="dot-logo__core scale-150"></div>
          {/* Inner ring */}
          <div className="dot-logo__ring dot-logo__ring--inner scale-150"></div>
          {/* Outer ring */}
          <div className="dot-logo__ring dot-logo__ring--outer scale-150"></div>
        </div>
      </div>
      
      <div className="max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-clash text-aurascan-dark-grey leading-tight">
          Welcome to <span className="coral-text">AuraScan</span>
        </h1>
        
        <p className="text-aurascan-medium-grey mx-auto mb-8 leading-relaxed">
          Discover your personalized skincare regimen powered by advanced AI analysis.
          Just take a photo, and we'll identify your skin concerns and recommend products tailored just for you.
        </p>
      </div>
      
      <div className="grid grid-cols-3 gap-6 w-full max-w-md">
        {[
          { icon: "📷", text: "Scan Face" },
          { icon: "🔍", text: "Analyze Skin" },
          { icon: "✨", text: "Get Recommendations" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center space-y-3 glass-light p-4 rounded-lg">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl bg-white shadow-light border border-aurascan-light-grey">
              {item.icon}
            </div>
            <span className="text-sm text-aurascan-medium-grey font-medium">{item.text}</span>
          </div>
        ))}
      </div>
      
      <div className="space-y-4 w-full max-w-md">
        <Button 
          className="w-full coral-button py-6 text-lg"
          onClick={onGetStarted}
        >
          Get Started
        </Button>
        
        <p className="text-xs text-aurascan-medium-grey px-6">
          By continuing, you agree to our <a href="#" className="text-aurascan-coral hover:text-aurascan-deep-coral transition-colors">Privacy Policy</a> and <a href="#" className="text-aurascan-coral hover:text-aurascan-deep-coral transition-colors">Terms of Service</a>. We use your photo only for analysis and do not store it permanently.
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
