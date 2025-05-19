
import { useState } from 'react';
import { Product } from '@/types/product';

export const useProductState = (initialProducts: Product[]) => {
  const [products] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [hasFiltered, setHasFiltered] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [skinDescription, setSkinDescription] = useState<string>("");
  const [matchedKeywords, setMatchedKeywords] = useState<string[]>([]);
  const [recommendationReasons, setRecommendationReasons] = useState<Record<string, string>>({});
  const [savedProductIds, setSavedProductIds] = useState<string[]>([]);
  
  // Function to toggle a product as saved/unsaved
  const toggleSaveProduct = (productId: string) => {
    setSavedProductIds(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };
  
  // Function to get saved products
  const getSavedProducts = () => {
    return products.filter(product => 
      savedProductIds.includes(product.id) || product.saved
    );
  };
  
  // Function to handle processing description
  const handleProcessInput = (input: string) => {
    // This would normally process the input and filter products
    // For now, just a placeholder that marks all products as relevant
    setFilteredProducts(products);
    setHasFiltered(!!input);
  };
  
  // Function to clear filters
  const handleClearFilters = () => {
    setFilteredProducts(products);
    setHasFiltered(false);
    setSkinDescription("");
    setMatchedKeywords([]);
  };
  
  return {
    products,
    filteredProducts,
    setFilteredProducts,
    isProcessing,
    setIsProcessing,
    hasFiltered,
    setHasFiltered,
    isTyping,
    setIsTyping,
    skinDescription,
    setSkinDescription,
    matchedKeywords,
    setMatchedKeywords,
    recommendationReasons,
    setRecommendationReasons,
    savedProductIds,
    toggleSaveProduct,
    getSavedProducts,
    handleProcessInput,
    handleClearFilters
  };
};
