
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

type OnboardingProps = {
  onGetStarted: () => void;
};

const Onboarding = ({ onGetStarted }: OnboardingProps) => {
  const { toast } = useToast();
  
  return (
    <div className="flex flex-col items-center text-center px-6 py-10 space-y-12 animate-fade-in min-h-screen justify-center bg-aurascan-deep-space">
      <div className="w-32 h-32 relative">
        {/* Main logo circle with gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-cosmic animate-pulse-slow"></div>
        
        {/* Animated rings */}
        <div className="absolute inset-[-15px] border border-aurascan-purple/20 rounded-full animate-rotate-slow"></div>
        <div className="absolute inset-[-30px] border border-aurascan-purple/10 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
        
        {/* Central icon */}
        <div className="absolute inset-0 flex items-center justify-center text-5xl">✨</div>
      </div>
      
      <div className="max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-clash text-white leading-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-cosmic">AuraScan</span>
        </h1>
        
        <p className="text-gray-300 mx-auto mb-8 leading-relaxed">
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
          <div key={i} className="flex flex-col items-center space-y-3 cosmic-card p-4 rounded-lg">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl bg-aurascan-cosmic-blue/80 border border-aurascan-purple/30">
              {item.icon}
            </div>
            <span className="text-sm text-gray-300 font-medium">{item.text}</span>
          </div>
        ))}
      </div>
      
      <div className="space-y-4 w-full max-w-md">
        <Button 
          className="w-full cosmic-button py-6 text-lg"
          onClick={onGetStarted}
        >
          Get Started
        </Button>
        
        <p className="text-xs text-gray-400 px-6">
          By continuing, you agree to our <a href="#" className="text-aurascan-purple hover:text-aurascan-purple/80 transition-colors">Privacy Policy</a> and <a href="#" className="text-aurascan-purple hover:text-aurascan-purple/80 transition-colors">Terms of Service</a>. We use your photo only for analysis and do not store it permanently.
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
