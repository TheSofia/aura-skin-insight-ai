import { useState, useCallback } from 'react';
import { Product } from '@/types/product';
import { useToast } from "@/components/ui/use-toast";
import { findMatchingCategories, extractMatchedTerms } from '@/utils/productMatching';
import { calculateProductRelevanceScores, getRelevantProducts } from '@/utils/productScoring';
import { MatchResult } from '@/utils/productFilteringTypes';

export const useProductFiltering = (initialProducts: Product[]) => {
  const { toast } = useToast();
  const [products] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [hasFiltered, setHasFiltered] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [skinDescription, setSkinDescription] = useState<string>("");
  const [matchedKeywords, setMatchedKeywords] = useState<string[]>([]);

  // Better debounced filtering approach
  const handleSkinDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSkinDescription(e.target.value);
    setIsTyping(true);
    
    // Clear typing indicator after short delay
    const typingTimer = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
    
    return () => clearTimeout(typingTimer);
  };

  // Process description with improved feedback
  const handleProcessSkinDescription = () => {
    if (!skinDescription.trim()) {
      toast({
        title: "Empty description",
        description: "Please describe your skin concerns to get personalized recommendations.",
      });
      return;
    }
    
    setIsProcessing(true);
    setHasFiltered(false);
    setMatchedKeywords([]);
    
    // Process with a small delay to show the processing state
    setTimeout(() => {
      processFilteringLogic(skinDescription);
    }, 800);
  };
  
  // Core filtering logic extracted for better organization
  const processFilteringLogic = (description: string) => {
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
  
  // Separate function to provide toast feedback
  const provideUserFeedback = (matches: MatchResult, resultCount: number) => {
    if (resultCount > 0) {
      const matchCategories = [];
      if (matches.skinTypes.length > 0) matchCategories.push("skin types");
      if (matches.concerns.length > 0) matchCategories.push("concerns");
      if (matches.goals.length > 0) matchCategories.push("goals");
      
      toast({
        title: `Found ${resultCount} matching products`,
        description: `Products are matched to your ${matchCategories.join(", ")}.`,
      });
    } else {
      toast({
        title: "No exact matches",
        description: "Showing all products. Try different keywords for better results.",
      });
    }
  };
  
  // Toggle saved status function (keeping existing functionality)
  const toggleSaveProduct = (productId: string) => {
    const updatedProducts = products.map(product => 
      product.id === productId 
        ? { ...product, saved: !product.saved } 
        : product
    );
    
    // Update both product arrays to maintain consistency
    const updatedFilteredProducts = filteredProducts.map(product => 
      product.id === productId 
        ? { ...product, saved: !product.saved } 
        : product
    );
    
    // Find the product for toast notification
    const product = products.find(p => p.id === productId);
    if (product) {
      const isSaving = !product.saved;
      toast({
        title: isSaving ? "Added to library" : "Removed from library",
        description: isSaving 
          ? `${product.productName} has been added to your product library` 
          : `${product.productName} has been removed from your product library`,
      });
    }
    
    // Update state with new arrays
    setFilteredProducts(updatedFilteredProducts);
  };
  
  // Get list of saved products
  const getSavedProducts = () => products.filter(product => product.saved);

  return {
    products,
    filteredProducts,
    skinDescription,
    isProcessing,
    hasFiltered,
    isTyping,
    matchedKeywords,
    handleSkinDescriptionChange,
    handleProcessSkinDescription,
    toggleSaveProduct,
    getSavedProducts
  };
};
