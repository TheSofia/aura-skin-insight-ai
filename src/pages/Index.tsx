
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Onboarding from "@/components/onboarding/Onboarding";
import FaceScan from "@/components/FaceScan";
import Processing from "@/components/Processing";
import ProductRecommendations from "@/components/ProductRecommendations";
import LoadingAnimation from "@/components/LoadingAnimation";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isManualPath, setIsManualPath] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Preparing your experience");
  const location = useLocation();

  // Effect to welcome users when they first arrive
  useEffect(() => {
    // Only show welcome message on initial load and at the landing page
    if (currentStep === 0 && location.pathname === '/') {
      const timer = setTimeout(() => {
        toast("Welcome to BeautyAgent", {
          description: "Discover your personalized skincare journey",
          icon: "✨",
        });
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [currentStep, location.pathname]);

  // Enhanced step handlers with loading states and personalized messages with gradual transitions
  const handleGetStarted = () => {
    setLoadingMessage("Preparing scan environment");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsManualPath(false); // Not using manual path
      setCurrentStep(1); // Move to Face Scan
    }, 1200);
  };

  const handleScanComplete = () => {
    setLoadingMessage("Processing your skin data");
    setIsLoading(true);
    
    // Create a sequence of loading messages for a more engaging experience
    const messages = [
      { message: "Processing your skin data", delay: 0 },
      { message: "Analyzing skin texture", delay: 800 },
      { message: "Identifying unique patterns", delay: 1600 },
      { message: "Finalizing analysis", delay: 2400 }
    ];
    
    // Show messages sequentially
    messages.forEach(({ message, delay }) => {
      setTimeout(() => {
        setLoadingMessage(message);
      }, delay);
    });
    
    // After all messages, proceed to next step
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(2); // Move to Processing
    }, 3200);
  };

  const handleProcessingComplete = () => {
    setLoadingMessage("Finalizing your personalized recommendations");
    setIsLoading(true);
    
    // Create a sequence of loading messages
    const messages = [
      { message: "Finalizing your personalized recommendations", delay: 0 },
      { message: "Matching with optimal products", delay: 1000 },
      { message: "Creating your custom protocol", delay: 2000 }
    ];
    
    // Show messages sequentially
    messages.forEach(({ message, delay }) => {
      setTimeout(() => {
        setLoadingMessage(message);
      }, delay);
    });
    
    setTimeout(() => {
      setIsLoading(false);
      // Skip Skin Results page, go directly to Product Recommendations
      setCurrentStep(3);
    }, 3000);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setLoadingMessage("Returning to previous step");
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setCurrentStep(currentStep - 1);
      }, 600);
    }
  };

  // Skip directly to recommendations (for manual path)
  const handleDirectToRecommendations = () => {
    setLoadingMessage("Preparing personalized recommendations");
    setIsLoading(true);
    
    // Create a sequence of loading messages for manual path
    const messages = [
      { message: "Preparing personalized recommendations", delay: 0 },
      { message: "Processing your description", delay: 800 },
      { message: "Analyzing skin concerns", delay: 1600 },
      { message: "Generating recommendations", delay: 2400 }
    ];
    
    // Show messages sequentially
    messages.forEach(({ message, delay }) => {
      setTimeout(() => {
        setLoadingMessage(message);
      }, delay);
    });
    
    setTimeout(() => {
      setIsLoading(false);
      setIsManualPath(true); // Using manual path
      setCurrentStep(3); // Go directly to recommendations
      
      // Show a toast notification for the manual path
      toast.success("Manual analysis complete", {
        description: "Your personalized recommendations are ready",
      });
    }, 3300);
  };

  // Enhanced loading state with improved animations and cellular visual effects
  if (isLoading) {
    return (
      <div className="app-container flex items-center justify-center bg-gradient-light">
        <div className="flex flex-col items-center max-w-md text-center">
          <LoadingAnimation size="md" message={loadingMessage} />
          <p className="text-beautyagent-medium-grey text-sm mt-8 max-w-xs">
            We're creating a personalized experience just for you. This will only take a moment.
          </p>
        </div>
        <Toaster />
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Only show header on steps after onboarding */}
      {currentStep > 0 && <Header currentStep={currentStep} />}
      
      <main className="flex-1 flex flex-col">
        {currentStep === 0 && (
          <Onboarding 
            onGetStarted={handleGetStarted} 
            onManualInput={handleDirectToRecommendations}
          />
        )}
        {currentStep === 1 && <FaceScan onScanComplete={handleScanComplete} onBack={handleBack} />}
        {currentStep === 2 && <Processing onProcessingComplete={handleProcessingComplete} />}
        {currentStep === 3 && <ProductRecommendations isManualPath={isManualPath} />}
      </main>
      
      <Toaster />
    </div>
  );
};

export default Index;
