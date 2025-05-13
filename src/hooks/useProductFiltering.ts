import { useState, useCallback } from 'react';
import { Product } from '@/types/product';
import { useToast } from "@/components/ui/use-toast";
import { findMatchingCategories, extractMatchedTerms } from '@/utils/productMatching';
import { calculateProductRelevanceScores, getRelevantProducts } from '@/utils/productScoring';
import { MatchResult } from '@/utils/productFilteringTypes';
import { useProductProcessing } from './useProductProcessing';
import { useProductState } from './useProductState';
import { useProductToasts } from './useProductToasts';

export const useProductFiltering = (initialProducts: Product[]) => {
  const { toast } = useToast();
  
  // Use extracted hooks for state management
  const { 
    products, 
    filteredProducts, 
    setFilteredProducts,
    skinDescription, 
    setSkinDescription,
    isProcessing,
    setIsProcessing,
    hasFiltered,
    setHasFiltered, 
    isTyping,
    setIsTyping,
    matchedKeywords,
    setMatchedKeywords
  } = useProductState(initialProducts);
  
  // Use processing hook
  const { processFilteringLogic } = useProductProcessing({
    products,
    setFilteredProducts,
    setIsProcessing,
    setHasFiltered,
    setMatchedKeywords,
    toast
  });
  
  // Use toasts hook
  const { provideUserFeedback } = useProductToasts(toast);

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
      processFilteringLogic(skinDescription, provideUserFeedback);
    }, 800);
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
