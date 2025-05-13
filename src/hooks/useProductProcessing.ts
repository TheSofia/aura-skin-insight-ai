
import { Product } from '@/types/product';
import { findMatchingCategories, extractMatchedTerms } from '@/utils/productMatching';
import { calculateProductRelevanceScores, getRelevantProducts } from '@/utils/productScoring';
import { MatchResult } from '@/utils/productFilteringTypes';
import { ToastAction } from '../components/ui/toast';

type UseProductProcessingProps = {
  products: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setIsProcessing: React.Dispatch<React.SetStateAction<boolean>>;
  setHasFiltered: React.Dispatch<React.SetStateAction<boolean>>;
  setMatchedKeywords: React.Dispatch<React.SetStateAction<string[]>>;
  toast: any; // Using any for toast since it's an external import
};

export const useProductProcessing = ({
  products,
  setFilteredProducts,
  setIsProcessing,
  setHasFiltered,
  setMatchedKeywords,
  toast
}: UseProductProcessingProps) => {
  
  // Core filtering logic extracted for better organization
  const processFilteringLogic = (description: string, provideUserFeedback: (matches: MatchResult, resultCount: number) => void) => {
    // Find matching categories with enhanced algorithm
    const matches = findMatchingCategories(description);
    const hasMatches = Object.values(matches).some(array => array.length > 0);
    
    // If no matches found, show all products
    if (!hasMatches) {
      setFilteredProducts(products);
      setIsProcessing(false);
      setHasFiltered(true);
      toast({
        title: "No specific matches found",
        description: "Showing all products. Try terms like 'dry skin', 'acne' or 'anti-aging'.",
      });
      return;
    }
    
    // Extract matched terms for highlighting
    const uniqueMatchedTerms = extractMatchedTerms(matches);
    setMatchedKeywords(uniqueMatchedTerms);
    
    // Get scored and sorted products
    const scoredProducts = calculateProductRelevanceScores(products, matches);
    const relevantProducts = getRelevantProducts(scoredProducts);
    
    // Update state with filtered products
    setFilteredProducts(relevantProducts.length > 0 ? relevantProducts : products);
    setIsProcessing(false);
    setHasFiltered(true);
    
    // Give user feedback on what we found
    provideUserFeedback(matches, relevantProducts.length);
  };
  
  return { processFilteringLogic };
};
