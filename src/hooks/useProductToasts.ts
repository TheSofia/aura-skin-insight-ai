
import { MatchResult } from '@/utils/productFilteringTypes';
import { useToast } from "@/hooks/use-toast";

export const useProductToasts = () => { 
  const { toast } = useToast();
  
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
