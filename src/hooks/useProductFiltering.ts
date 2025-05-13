import { useState, useCallback } from 'react';
import { Product } from '@/types/product';
import { useToast } from "@/components/ui/use-toast";

// Enhanced keyword categorization with weighted terms and synonyms
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

// Mapping of common ingredients to skin concerns they address
const ingredientToConcernMap = {
  'retinol': ['wrinkles', 'texture', 'aging', 'acne'],
  'vitamin c': ['brightening', 'darkSpots', 'antiAging'],
  'niacinamide': ['pores', 'texture', 'redness', 'acne'],
  'hyaluronic acid': ['hydration', 'dry'],
  'glycolic acid': ['texture', 'dullness', 'darkSpots'],
  'salicylic acid': ['acne', 'oily', 'blackheads'],
  'ceramides': ['hydration', 'barrier', 'sensitive'],
  'peptides': ['firming', 'antiAging'],
  'azelaic acid': ['redness', 'acne', 'darkSpots'],
  'bakuchiol': ['antiAging', 'sensitive'],
  'squalane': ['hydration', 'sensitive', 'dry'],
  'zinc': ['oily', 'acne']
};

// Types for clarity and better autocomplete
type KeywordCategory = 'skinTypes' | 'concerns' | 'goals';
type MatchResult = {
  [K in KeywordCategory]: string[];
};
type ScoredProduct = {
  product: Product;
  score: number;
  matchedTerms: string[];
};

export const useProductFiltering = (initialProducts: Product[]) => {
  const { toast } = useToast();
  const [products] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [hasFiltered, setHasFiltered] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [skinDescription, setSkinDescription] = useState<string>("");
  const [matchedKeywords, setMatchedKeywords] = useState<string[]>([]);

  // Memoize matching for better performance
  const findMatchingCategories = useCallback((input: string): MatchResult => {
    const results: MatchResult = {
      skinTypes: [],
      concerns: [],
      goals: []
    };
    
    // Normalize input for more accurate matching
    const normalizedInput = input.toLowerCase();
    const words = normalizedInput.split(/\s+/);
    
    // Process each category
    Object.entries(keywordMap).forEach(([category, categoryData]) => {
      Object.entries(categoryData).forEach(([key, keywords]) => {
        // Check for exact phrase matches (weighted higher)
        const hasExactMatch = keywords.some(keyword => 
          normalizedInput.includes(keyword));
          
        // Check for partial word matches (weighted lower)
        const hasPartialMatch = !hasExactMatch && keywords.some(keyword => 
          words.some(word => keyword.includes(word) && word.length > 3));
          
        if (hasExactMatch || hasPartialMatch) {
          // @ts-ignore - We know this is valid due to our structure
          results[category as KeywordCategory].push(key);
        }
      });
    });
    
    return results;
  }, []);

  // Calculate relevance scores with improved algorithm
  const calculateProductRelevanceScores = useCallback((
    productList: Product[], 
    matches: MatchResult
  ): ScoredProduct[] => {
    // Extract all matched terms for highlighting
    const allMatchedTerms: string[] = [];
    Object.values(matches).forEach(categoryMatches => {
      categoryMatches.forEach(match => {
        allMatchedTerms.push(match);
        // Also add the keywords that led to this match
        Object.entries(keywordMap).forEach(([category, categoryData]) => {
          // @ts-ignore - We know this is valid due to our structure
          const keywords = categoryData[match];
          if (keywords) {
            allMatchedTerms.push(...keywords);
          }
        });
      });
    });
    
    // Unique matched terms
    const uniqueMatchedTerms = [...new Set(allMatchedTerms)];
    setMatchedKeywords(uniqueMatchedTerms);
    
    return productList.map(product => {
      let score = 0;
      const matchedTerms: string[] = [];
      
      // Check bestFor field (highest weight - direct match to user needs)
      matches.skinTypes.forEach(skinType => {
        product.bestFor.forEach(bf => {
          if (bf.toLowerCase().includes(skinType.toLowerCase())) {
            score += 10;
            matchedTerms.push(bf);
          }
        });
      });
      
      // Check solutionsOffered (high weight - directly solves user concerns)
      [...matches.concerns, ...matches.goals].forEach(term => {
        product.solutionsOffered.forEach(solution => {
          if (solution.toLowerCase().includes(term.toLowerCase())) {
            score += 8;
            matchedTerms.push(solution);
          }
        });
      });
      
      // Check useCase (medium weight - product description matches need)
      [...matches.skinTypes, ...matches.concerns, ...matches.goals].forEach(term => {
        if (product.useCase.toLowerCase().includes(term.toLowerCase())) {
          score += 5;
          matchedTerms.push(term);
        }
      });
      
      // Ingredient-based matching (medium-high weight - specific ingredients)
      product.keyIngredients.forEach(ingredient => {
        const ingredientLower = ingredient.toLowerCase();
        Object.entries(ingredientToConcernMap).forEach(([key, concerns]) => {
          if (ingredientLower.includes(key)) {
            // Check if ingredient addresses any matched concerns
            concerns.forEach(concern => {
              if (
                matches.skinTypes.includes(concern) || 
                matches.concerns.includes(concern) || 
                matches.goals.includes(concern)
              ) {
                score += 7;
                matchedTerms.push(ingredient);
              }
            });
          }
        });
      });
      
      // Give small boost to products with images as they'll display better
      if (product.imageUrl) {
        score += 1;
      }
      
      return { product, score, matchedTerms: [...new Set(matchedTerms)] };
    });
  }, []);

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
    
    // Get scored and sorted products
    const scoredProducts = calculateProductRelevanceScores(products, matches);
    
    // Sort by score (descending) and extract only products with a meaningful score
    const relevantProducts = scoredProducts
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.product);
    
    // Update state with filtered products
    setFilteredProducts(relevantProducts.length > 0 ? relevantProducts : products);
    setIsProcessing(false);
    setHasFiltered(true);
    
    // Give user feedback on what we found
    if (relevantProducts.length > 0) {
      const matchCategories = [];
      if (matches.skinTypes.length > 0) matchCategories.push("skin types");
      if (matches.concerns.length > 0) matchCategories.push("concerns");
      if (matches.goals.length > 0) matchCategories.push("goals");
      
      toast({
        title: `Found ${relevantProducts.length} matching products`,
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
