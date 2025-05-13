
import { Product } from '@/types/product';

// Types for keyword matching and filtering
export type KeywordCategory = 'skinTypes' | 'concerns' | 'goals';

export type MatchResult = {
  [K in KeywordCategory]: string[];
};

export type ScoredProduct = {
  product: Product;
  score: number;
  matchedTerms: string[];
};
