
import React, { useState } from "react";
import Header from "@/components/Header";
import Onboarding from "@/components/onboarding/Onboarding";
import FaceScan from "@/components/FaceScan";
import Processing from "@/components/Processing";
import ProductRecommendations from "@/components/ProductRecommendations";
import LoadingScreen from "@/components/LoadingScreen";
import useLoadingState from "@/hooks/useLoadingState";
import useLogoSettings from "@/hooks/useLogoSettings";
import { toast } from "sonner";

const AppFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isManualPath, setIsManualPath] = useState(false);
  const { isLoading, loadingMessage, startLoading } = useLoadingState();
  const logoSettings = useLogoSettings(currentStep);

  // Enhanced step handlers with loading states and personalized messages with gradual transitions
  const handleGetStarted = async () => {
    await startLoading("Preparing scan environment", 1200);
    setIsManualPath(false); // Not using manual path
    setCurrentStep(1); // Move to Face Scan
  };

  const handleScanComplete = async () => {
    // Create a sequence of loading messages for a more engaging experience
    const messages = [
      { message: "Processing your skin data", delay: 0 },
      { message: "Analyzing skin texture", delay: 800 },
      { message: "Identifying unique patterns", delay: 1600 },
      { message: "Finalizing analysis", delay: 2400 }
    ];
    
    await startLoading("Processing your skin data", 3200, messages);
    setCurrentStep(2); // Move to Processing
  };

  const handleProcessingComplete = async () => {
    // Create a sequence of loading messages
    const messages = [
      { message: "Finalizing your personalized recommendations", delay: 0 },
      { message: "Matching with optimal products", delay: 1000 },
      { message: "Creating your custom protocol", delay: 2000 }
    ];
    
    await startLoading("Finalizing your personalized recommendations", 3000, messages);
    // Skip Skin Results page, go directly to Product Recommendations
    setCurrentStep(3);
  };

  const handleBack = async () => {
    if (currentStep > 0) {
      await startLoading("Returning to previous step", 600);
      setCurrentStep(currentStep - 1);
    }
  };

  // Skip directly to recommendations (for manual path)
  const handleDirectToRecommendations = async () => {
    // Create a sequence of loading messages for manual path
    const messages = [
      { message: "Preparing personalized recommendations", delay: 0 },
      { message: "Processing your description", delay: 800 },
      { message: "Analyzing skin concerns", delay: 1600 },
      { message: "Generating recommendations", delay: 2400 }
    ];
    
    await startLoading("Preparing personalized recommendations", 3300, messages);
    setIsManualPath(true); // Using manual path
    setCurrentStep(3); // Go directly to recommendations
    
    // Show a toast notification for the manual path
    toast.success("Manual analysis complete", {
      description: "Your personalized recommendations are ready",
    });
  };

  // Enhanced loading state with the standardized logo
  if (isLoading) {
    return <LoadingScreen loadingMessage={loadingMessage} />;
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
    </div>
  );
};

export default AppFlow;
