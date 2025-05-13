
import { MatchResult, KeywordCategory } from './productFilteringTypes';
import { keywordMap } from './productKeywords';

/**
 * Analyzes input text to find matching categories from our keyword maps
 * @param input User's skin description input
 * @returns Object containing matched categories
 */
export const findMatchingCategories = (input: string): MatchResult => {
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
};

/**
 * Extracts all matched terms for highlighting in the UI
 * @param matches The match results from findMatchingCategories
 * @returns Array of unique terms to highlight
 */
export const extractMatchedTerms = (matches: MatchResult): string[] => {
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
  
  // Return unique matched terms
  return [...new Set(allMatchedTerms)];
};
