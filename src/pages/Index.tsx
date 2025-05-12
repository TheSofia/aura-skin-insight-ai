
import { useState } from "react";
import Header from "@/components/Header";
import Onboarding from "@/components/Onboarding";
import FaceScan from "@/components/FaceScan";
import Processing from "@/components/Processing";
import ProductRecommendations from "@/components/ProductRecommendations";
import LoadingAnimation from "@/components/LoadingAnimation";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isManualPath, setIsManualPath] = useState(false);

  // Simplified step handlers with loading states
  const handleGetStarted = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsManualPath(false); // Not using manual path
      setCurrentStep(1); // Move to Face Scan
    }, 800);
  };

  const handleScanComplete = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(2); // Move to Processing
    }, 600);
  };

  const handleProcessingComplete = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Skip Skin Results page, go directly to Product Recommendations
      setCurrentStep(3);
    }, 500);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setCurrentStep(currentStep - 1);
      }, 400);
    }
  };

  // Skip directly to recommendations (for manual path)
  const handleDirectToRecommendations = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsManualPath(true); // Using manual path
      setCurrentStep(3); // Go directly to recommendations
    }, 1200);
  };

  // Render loading state if needed
  if (isLoading) {
    return (
      <div className="app-container flex items-center justify-center">
        <LoadingAnimation size="md" message="Preparing your experience" />
        <Toaster />
      </div>
    );
  }

  return (
    <div className="app-container">
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
