
import { useState, useEffect } from 'react';
import DynamicLogo from './DynamicLogo';
import ProductLibrarySummary from './ProductLibrarySummary';
import RecommendationEngine from './recommendations/RecommendationEngine';
import './TypingIndicator.css';
import { useToast } from '@/hooks/use-toast';
import { IntensityLevel } from '@/types/logo';

type ProductRecommendationsProps = {
  isManualPath?: boolean;
  photoUrl?: string;
  initialDescription?: string;
};

const ProductRecommendations = ({ 
  isManualPath = false, 
  photoUrl, 
  initialDescription 
}: ProductRecommendationsProps) => {
  const { toast } = useToast();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  // Show welcome toast on initial load
  useEffect(() => {
    if (isInitialLoad) {
      setTimeout(() => {
        toast({
          title: "Welcome to BeautyAgent",
          description: "Discover your personalized skincare recommendations"
        });
        setIsInitialLoad(false);
      }, 800);
    }
  }, [isInitialLoad, toast]);
  
  // Define the intensity level correctly
  const logoIntensity: IntensityLevel = "medium";

  return (
    <div className="flex flex-col h-full animate-fade-in bg-white">
      <div className="flex-1 overflow-auto pb-6">
        <div className="p-8 md:p-12 flex justify-center">
          <DynamicLogo 
            colorScheme="refined" 
            animationStyle="cellular" 
            size="md" 
            showText={true} 
            intensity={logoIntensity}
          />
        </div>
        
        {/* Recommendation Engine */}
        <RecommendationEngine 
          photoMode={!!photoUrl}
          initialDescription={initialDescription}
          photoUrl={photoUrl}
        />
      </div>
      
      <ProductLibrarySummary savedProducts={[]} />
    </div>
  );
};

export default ProductRecommendations;
