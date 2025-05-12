
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

type OnboardingProps = {
  onGetStarted: () => void;
};

const Onboarding = ({ onGetStarted }: OnboardingProps) => {
  const { toast } = useToast();
  
  return (
    <div className="flex flex-col items-center text-center px-6 py-10 space-y-8 animate-fade-in">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-aurascan-purple to-aurascan-soft-blue flex items-center justify-center">
        <div className="text-4xl text-white">✨</div>
      </div>
      
      <h1 className="text-3xl font-semibold text-aurascan-deep-purple">Welcome to AuraScan</h1>
      
      <p className="text-aurascan-gray max-w-md mx-auto">
        Discover your personalized skincare regimen powered by advanced AI analysis.
        Just take a photo, and we'll identify your skin concerns and recommend products tailored just for you.
      </p>
      
      <div className="grid grid-cols-3 gap-6 w-full max-w-md">
        {[
          { icon: "📷", text: "Scan Face" },
          { icon: "🔍", text: "Analyze Skin" },
          { icon: "✨", text: "Get Recommendations" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-aurascan-soft-purple flex items-center justify-center text-xl">
              {item.icon}
            </div>
            <span className="text-xs text-aurascan-gray font-medium">{item.text}</span>
          </div>
        ))}
      </div>
      
      <div className="space-y-4 w-full max-w-md">
        <Button 
          className="w-full bg-aurascan-purple hover:bg-aurascan-purple/90 text-white"
          onClick={onGetStarted}
        >
          Get Started
        </Button>
        
        <p className="text-xs text-aurascan-gray px-6">
          By continuing, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a>. We use your photo only for analysis and do not store it permanently.
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
