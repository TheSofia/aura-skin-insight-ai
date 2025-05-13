
import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { useToast } from "@/components/ui/use-toast";

export const useProductFiltering = (initialProducts: Product[]) => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [hasFiltered, setHasFiltered] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [skinDescription, setSkinDescription] = useState<string>("");

  // Function to handle skin description input
  const handleSkinDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSkinDescription(e.target.value);
    setIsTyping(true);
    
    // Clear typing indicator after short delay
    const typingTimer = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
    
    return () => clearTimeout(typingTimer);
  };

  // Enhanced function to process skin description and intelligently filter products
  const handleProcessSkinDescription = () => {
    if (!skinDescription.trim()) return;
    
    setIsProcessing(true);
    setHasFiltered(false);
    
    // Simulate processing delay with typing indicator
    setTimeout(() => {
      // Convert input to lowercase for case-insensitive matching
      const input = skinDescription.toLowerCase();
      
      // Define keyword categories for more intelligent matching
      const keywordMap = {
        skinTypes: {
          dry: ['dry', 'dehydrated', 'flaky', 'tight', 'parched'],
          oily: ['oily', 'greasy', 'shiny', 'excess oil', 'sebum'],
          combination: ['combination', 'combo', 'oily t-zone', 'mixed', 'partially oily'],
          sensitive: ['sensitive', 'reactive', 'irritated', 'easily irritated', 'redness'],
          normal: ['normal', 'balanced', 'regular'],
          aging: ['aging', 'mature', 'older', 'aged']
        },
        concerns: {
          acne: ['acne', 'breakouts', 'pimples', 'blemishes', 'zits', 'spots'],
          wrinkles: ['wrinkles', 'fine lines', 'creases', 'folds', 'crow\'s feet'],
          darkSpots: ['dark spots', 'hyperpigmentation', 'uneven tone', 'melasma', 'sun spots', 'age spots'],
          redness: ['redness', 'inflamed', 'inflammation', 'rosacea', 'flushed', 'red'],
          dullness: ['dull', 'tired', 'lackluster', 'lifeless', 'no glow'],
          texture: ['texture', 'rough', 'bumpy', 'uneven texture', 'smooth', 'refine']
        },
        goals: {
          hydration: ['hydration', 'moisturize', 'hydrate', 'moisture', 'quench'],
          antiAging: ['anti-aging', 'anti aging', 'youth', 'younger', 'rejuvenate', 'reduce wrinkles'],
          brightening: ['brighten', 'brightening', 'glow', 'glowing', 'radiance', 'radiant'],
          calming: ['calm', 'calming', 'soothe', 'soothing', 'reduce irritation'],
          firming: ['firm', 'firming', 'tighten', 'lifting', 'sagging']
        }
      };
      
      // Function to check if input contains any keywords from a category
      const containsKeywords = (keywordArray: string[]) => {
        return keywordArray.some(keyword => input.includes(keyword));
      };
      
      // Create a map of matched categories
      const matches = {
        skinTypes: Object.keys(keywordMap.skinTypes).filter(type => 
          containsKeywords(keywordMap.skinTypes[type as keyof typeof keywordMap.skinTypes])
        ),
        concerns: Object.keys(keywordMap.concerns).filter(concern => 
          containsKeywords(keywordMap.concerns[concern as keyof typeof keywordMap.concerns])
        ),
        goals: Object.keys(keywordMap.goals).filter(goal => 
          containsKeywords(keywordMap.goals[goal as keyof typeof keywordMap.goals])
        )
      };
      
      // If no matches found at all, display all products
      if (matches.skinTypes.length === 0 && matches.concerns.length === 0 && matches.goals.length === 0) {
        setFilteredProducts(products);
        setIsProcessing(false);
        setHasFiltered(true);
        toast({
          title: "No specific matches found",
          description: "Showing all available products. Try using terms like 'dry skin' or 'anti-aging'.",
        });
        return;
      }
      
      // Advanced filtering logic that ranks products by relevance
      const relevanceScores = products.map(product => {
        let score = 0;
        
        // Check bestFor matches with skin types
        matches.skinTypes.forEach(skinType => {
          if (product.bestFor.some(bf => bf.toLowerCase().includes(skinType.toLowerCase()))) {
            score += 5;
          }
        });
        
        // Check solutions matches with concerns and goals
        [...matches.concerns, ...matches.goals].forEach(term => {
          if (product.solutionsOffered.some(solution => 
            solution.toLowerCase().includes(term.toLowerCase()))) {
            score += 4;
          }
        });
        
        // Check useCase for any matches
        [...matches.skinTypes, ...matches.concerns, ...matches.goals].forEach(term => {
          if (product.useCase.toLowerCase().includes(term.toLowerCase())) {
            score += 3;
          }
        });
        
        return { product, score };
      });
      
      // Filter products with any score and sort by relevance
      const relevantProducts = relevanceScores
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => item.product);
      
      // If no products match the specific terms, show all products
      setFilteredProducts(relevantProducts.length > 0 ? relevantProducts : products);
      
      setIsProcessing(false);
      setHasFiltered(true);
      
      toast({
        title: "Analysis Complete",
        description: relevantProducts.length > 0 
          ? `We've found ${relevantProducts.length} products based on your needs` 
          : "We've tailored recommendations based on your skin description",
      });
    }, 1500);
  };

  // Function to toggle saved status of product
  const toggleSaveProduct = (productId: string) => {
    const updatedProducts = products.map(product => 
      product.id === productId 
        ? { ...product, saved: !product.saved } 
        : product
    );
    
    setProducts(updatedProducts);
    
    // Also update filtered products
    setFilteredProducts(filteredProducts.map(product => 
      product.id === productId 
        ? { ...product, saved: !product.saved } 
        : product
    ));
    
    const product = products.find(p => p.id === productId);
    if (product) {
      toast({
        title: product.saved ? "Removed from library" : "Added to library",
        description: product.saved ? `${product.productName} has been removed from your product library` : `${product.productName} has been added to your product library`,
      });
    }
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
    handleSkinDescriptionChange,
    handleProcessSkinDescription,
    toggleSaveProduct,
    getSavedProducts
  };
};
