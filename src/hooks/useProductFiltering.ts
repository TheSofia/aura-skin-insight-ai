
import { useState } from 'react';
import { Product } from '@/types/product';
import { useToast } from "@/components/ui/use-toast";

// Advanced keyword categories with additional synonyms and related terms
const keywordMap = {
  skinTypes: {
    dry: ['dry', 'dehydrated', 'flaky', 'tight', 'parched', 'rough', 'cracked', 'chapped'],
    oily: ['oily', 'greasy', 'shiny', 'excess oil', 'sebum', 'slick', 'glossy', 'acne-prone'],
    combination: ['combination', 'combo', 'oily t-zone', 'mixed', 'partially oily', 't-zone'],
    sensitive: ['sensitive', 'reactive', 'irritated', 'easily irritated', 'redness', 'itchy', 'stinging'],
    normal: ['normal', 'balanced', 'regular', 'neither oily nor dry', 'even'],
    aging: ['aging', 'mature', 'older', 'aged', 'wrinkled', 'fine lines']
  },
  concerns: {
    acne: ['acne', 'breakouts', 'pimples', 'blemishes', 'zits', 'spots', 'cystic', 'blackheads', 'whiteheads'],
    wrinkles: ['wrinkles', 'fine lines', 'creases', 'folds', 'crow\'s feet', 'expression lines', 'aging signs'],
    darkSpots: ['dark spots', 'hyperpigmentation', 'uneven tone', 'melasma', 'sun spots', 'age spots', 'discoloration'],
    redness: ['redness', 'inflamed', 'inflammation', 'rosacea', 'flushed', 'red', 'irritation'],
    dullness: ['dull', 'tired', 'lackluster', 'lifeless', 'no glow', 'sallow', 'ashy', 'gray'],
    texture: ['texture', 'rough', 'bumpy', 'uneven texture', 'smooth', 'refine', 'sandpaper', 'granular']
  },
  goals: {
    hydration: ['hydration', 'moisturize', 'hydrate', 'moisture', 'quench', 'plump', 'dewy', 'juicy'],
    antiAging: ['anti-aging', 'anti aging', 'youth', 'younger', 'rejuvenate', 'reduce wrinkles', 'collagen', 'firmness'],
    brightening: ['brighten', 'brightening', 'glow', 'glowing', 'radiance', 'radiant', 'luminous', 'illuminating'],
    calming: ['calm', 'calming', 'soothe', 'soothing', 'reduce irritation', 'cooling', 'gentle'],
    firming: ['firm', 'firming', 'tighten', 'lifting', 'sagging', 'elasticity', 'bounce']
  }
};

export const useProductFiltering = (initialProducts: Product[]) => {
  const { toast } = useToast();
  const [products] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [hasFiltered, setHasFiltered] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [skinDescription, setSkinDescription] = useState<string>("");

  // Function to handle skin description input with debounced typing indicator
  const handleSkinDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSkinDescription(e.target.value);
    setIsTyping(true);
    
    // Clear typing indicator after short delay
    const typingTimer = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
    
    return () => clearTimeout(typingTimer);
  };

  // Enhanced function to process skin description with improved matching
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
    
    // Process with a small delay to show the processing state
    setTimeout(() => {
      filterProductsByDescription(skinDescription);
    }, 800);
  };
  
  // Separated filtering logic for better readability and maintainability
  const filterProductsByDescription = (description: string) => {
    // Convert input to lowercase for case-insensitive matching
    const input = description.toLowerCase();
    
    // Find matching categories using the enhanced keyword detection
    const matches = findMatchingCategories(input);
    
    // If no matches found, show all products and notify user
    if (isEmptyMatches(matches)) {
      setFilteredProducts(products);
      setIsProcessing(false);
      setHasFiltered(true);
      toast({
        title: "No specific matches found",
        description: "Showing all available products. Try using terms like 'dry skin' or 'anti-aging'.",
      });
      return;
    }
    
    // Calculate relevance scores for each product based on matches
    const scoredProducts = calculateProductRelevanceScores(products, matches);
    
    // Filter and sort products by relevance score
    const relevantProducts = scoredProducts
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.product);
    
    // Set filtered products - if none match specifically, show all
    setFilteredProducts(relevantProducts.length > 0 ? relevantProducts : products);
    setIsProcessing(false);
    setHasFiltered(true);
    
    // Notify user of results
    toast({
      title: "Analysis Complete",
      description: relevantProducts.length > 0 
        ? `Found ${relevantProducts.length} products that match your skin needs` 
        : "Showing all products - try describing specific skin concerns for better matches",
    });
  };
  
  // Find which categories in our keyword map match the input description
  const findMatchingCategories = (input: string) => {
    const results = {
      skinTypes: [] as string[],
      concerns: [] as string[],
      goals: [] as string[]
    };
    
    // Helper function to check if input contains keywords
    const containsKeywords = (keywordArray: string[]) => {
      return keywordArray.some(keyword => input.includes(keyword));
    };
    
    // Enhanced matching that gives weight to multi-word matches and phrase context
    Object.entries(keywordMap).forEach(([category, categoryData]) => {
      Object.entries(categoryData).forEach(([key, keywords]) => {
        if (containsKeywords(keywords)) {
          // @ts-ignore - We know this is valid due to our structure
          results[category].push(key);
        }
      });
    });
    
    return results;
  };
  
  // Check if no matches were found in any category
  const isEmptyMatches = (matches: { skinTypes: string[], concerns: string[], goals: string[] }) => {
    return matches.skinTypes.length === 0 && 
           matches.concerns.length === 0 && 
           matches.goals.length === 0;
  };
  
  // Calculate relevance scores for products based on matched keywords
  const calculateProductRelevanceScores = (
    productList: Product[], 
    matches: { skinTypes: string[], concerns: string[], goals: string[] }
  ) => {
    return productList.map(product => {
      let score = 0;
      
      // Weight matches in bestFor field higher (most important match)
      matches.skinTypes.forEach(skinType => {
        if (product.bestFor.some(bf => bf.toLowerCase().includes(skinType.toLowerCase()))) {
          score += 5;  // High priority match
        }
      });
      
      // Check if product explicitly solves the concerns or goals
      [...matches.concerns, ...matches.goals].forEach(term => {
        if (product.solutionsOffered.some(solution => 
          solution.toLowerCase().includes(term.toLowerCase()))) {
          score += 4;  // Medium-high priority match
        }
      });
      
      // Check general use case description
      [...matches.skinTypes, ...matches.concerns, ...matches.goals].forEach(term => {
        if (product.useCase.toLowerCase().includes(term.toLowerCase())) {
          score += 3;  // Medium priority match
        }
      });
      
      // Check match against key ingredients for specialized product formulations
      matches.concerns.forEach(concern => {
        if (product.keyIngredients.some(ingredient => {
          // Map concerns to ingredients that typically address them
          switch (concern) {
            case 'acne': return ['salicylic acid', 'benzoyl peroxide', 'tea tree', 'zinc'].some(i => 
              ingredient.toLowerCase().includes(i));
            case 'wrinkles': return ['retinol', 'peptide', 'collagen', 'vitamin c'].some(i => 
              ingredient.toLowerCase().includes(i));
            case 'darkSpots': return ['vitamin c', 'niacinamide', 'alpha arbutin', 'kojic'].some(i => 
              ingredient.toLowerCase().includes(i));
            default: return false;
          }
        })) {
          score += 2;  // Ingredient match bonus
        }
      });
      
      return { product, score };
    });
  };
  
  // Function to toggle saved status of product
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
    handleSkinDescriptionChange,
    handleProcessSkinDescription,
    toggleSaveProduct,
    getSavedProducts
  };
};
