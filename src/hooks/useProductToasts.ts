
import { MatchResult } from '@/utils/productFilteringTypes';

export const useProductToasts = (toast: any) => { // Using any for toast since it's an external import
  
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
  
  return { provideUserFeedback };
};
