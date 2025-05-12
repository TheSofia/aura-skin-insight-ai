
import { useState } from "react";
import Header from "@/components/Header";
import Onboarding from "@/components/Onboarding";
import FaceScan from "@/components/FaceScan";
import Processing from "@/components/Processing";
import ProductRecommendations from "@/components/ProductRecommendations";
import LoadingAnimation from "@/components/LoadingAnimation";
import { Toaster } from "@/components/ui/sonner";
import DynamicLogo from "@/components/DynamicLogo";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isManualPath, setIsManualPath] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Preparing your experience");

  // Enhanced step handlers with loading states and personalized messages
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
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(2); // Move to Processing
    }, 800);
  };

  const handleProcessingComplete = () => {
    setLoadingMessage("Finalizing your personalized recommendations");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Skip Skin Results page, go directly to Product Recommendations
      setCurrentStep(3);
    }, 1000);
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
    setTimeout(() => {
      setIsLoading(false);
      setIsManualPath(true); // Using manual path
      setCurrentStep(3); // Go directly to recommendations
    }, 1500);
  };

  // Enhanced loading state with improved animations
  if (isLoading) {
    return (
      <div className="app-container flex items-center justify-center">
        <div className="flex flex-col items-center">
          <LoadingAnimation size="md" message={loadingMessage} />
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
