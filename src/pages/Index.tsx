
import { useState } from "react";
import Header from "@/components/Header";
import Onboarding from "@/components/Onboarding";
import FaceScan from "@/components/FaceScan";
import Processing from "@/components/Processing";
import ProductRecommendations from "@/components/ProductRecommendations";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Simplified step handlers
  const handleGetStarted = () => {
    setCurrentStep(1); // Move to Face Scan
  };

  const handleScanComplete = () => {
    setCurrentStep(2); // Move to Processing
  };

  const handleProcessingComplete = () => {
    // Skip Skin Results page, go directly to Product Recommendations
    setCurrentStep(3);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Skip directly to recommendations (for manual path)
  const handleDirectToRecommendations = () => {
    setCurrentStep(3); // Go directly to recommendations
  };

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
        {currentStep === 3 && <ProductRecommendations />}
      </main>
      
      <Toaster />
    </div>
  );
};

export default Index;
