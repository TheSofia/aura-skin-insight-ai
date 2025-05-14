
import { Product } from '@/types/product';
import { MatchResult, ScoredProduct } from './productFilteringTypes';
import { ingredientToConcernMap } from './productKeywords';

/**
 * Calculates relevance scores for products based on matched keywords
 * @param productList List of products to score
 * @param matches Matched keywords from user input
 * @returns Array of scored products with relevance scores
 */
export const calculateProductRelevanceScores = (
  productList: Product[], 
  matches: MatchResult
): ScoredProduct[] => {
  return productList.map(product => {
    let score = 0;
    const matchedTerms: string[] = [];
    
    // Check for direct brand matches (highest weight)
    const brandMatches = matches.concerns.filter(concern => 
      product.brand.toLowerCase().includes(concern.toLowerCase()));
    
    if (brandMatches.length > 0) {
      score += 20;
      matchedTerms.push(...brandMatches);
    }
    
    // Check for direct ingredient matches (high weight)
    const ingredientMatches = matches.concerns.filter(concern => 
      product.keyIngredients.some(ingredient => 
        ingredient.toLowerCase().includes(concern.toLowerCase())
      )
    );
    
    if (ingredientMatches.length > 0) {
      score += 15;
      matchedTerms.push(...ingredientMatches);
    }
    
    // Check bestFor field (high weight - direct match to user needs)
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
};

/**
 * Filters and sorts products by relevance score
 * @param scoredProducts Array of scored products
 * @returns Array of sorted products by relevance
 */
export const getRelevantProducts = (scoredProducts: ScoredProduct[]): Product[] => {
  // Sort by score (descending) and extract only products with a meaningful score
  return scoredProducts
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.product);
};
