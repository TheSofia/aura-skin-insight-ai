
import { useState } from "react";
import Header from "@/components/Header";
import Onboarding from "@/components/Onboarding";
import FaceScan from "@/components/FaceScan";
import Processing from "@/components/Processing";
import SkinResults from "@/components/SkinResults";
import ProductRecommendations from "@/components/ProductRecommendations";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Define step handlers
  const handleGetStarted = () => {
    setCurrentStep(1); // Move to Face Scan
  };

  const handleScanComplete = () => {
    setCurrentStep(2); // Move to Processing
  };

  const handleProcessingComplete = () => {
    setCurrentStep(3); // Move to Skin Results
  };

  const handleViewRecommendations = () => {
    setCurrentStep(4); // Move directly to Product Recommendations
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Allow skipping to recommendations in some cases
  const handleDirectToRecommendations = () => {
    setCurrentStep(4); // Skip directly to recommendations
  };

  return (
    <div className="app-container">
      {currentStep > 0 && <Header currentStep={currentStep} />}
      
      <main className="flex-1 flex flex-col">
        {currentStep === 0 && <Onboarding onGetStarted={handleGetStarted} />}
        {currentStep === 1 && <FaceScan onScanComplete={handleScanComplete} onBack={handleBack} />}
        {currentStep === 2 && <Processing onProcessingComplete={handleProcessingComplete} />}
        {currentStep === 3 && <SkinResults onViewRecommendations={handleViewRecommendations} />}
        {currentStep === 4 && <ProductRecommendations />}
      </main>
      
      <Toaster />
    </div>
  );
};

export default Index;
