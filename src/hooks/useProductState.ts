
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
    setRecommendationReasons
  };
};
