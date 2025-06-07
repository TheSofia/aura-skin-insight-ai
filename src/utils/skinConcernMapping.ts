
// Knowledge Dataset: Skincare & Product Knowledge Base Implementation

export interface SkinConcern {
  concern: string;
  keywords: string[];
  relatedIngredients: string[];
  recommendedProductTypes: string[];
}

export interface UserGoal {
  goal: string;
  keywords: string[];
  relatedConcerns: string[];
}

// Identifiable Skin Concerns (Knowledge Dataset Section III.1)
export const skinConcerns: SkinConcern[] = [
  {
    concern: 'Dryness',
    keywords: ['dry', 'dehydrated', 'flaky', 'tight', 'rough', 'desert', 'parched'],
    relatedIngredients: ['Hyaluronic Acid', 'Ceramides', 'Glycerin', 'Squalane', 'Shea Butter'],
    recommendedProductTypes: ['moisturizer', 'serum', 'face oil', 'hydrating toner']
  },
  {
    concern: 'Dehydration',
    keywords: ['dehydrated', 'lacks moisture', 'thirsty', 'dull', 'tight after cleansing'],
    relatedIngredients: ['Hyaluronic Acid', 'Sodium PCA', 'Glycerin', 'Aloe Vera'],
    recommendedProductTypes: ['hydrating serum', 'essence', 'moisturizer', 'face mist']
  },
  {
    concern: 'Oiliness',
    keywords: ['oily', 'greasy', 'shiny', 'excess oil', 'sebum', 'combination'],
    relatedIngredients: ['Niacinamide', 'Salicylic Acid', 'Tea Tree', 'Zinc'],
    recommendedProductTypes: ['cleanser', 'toner', 'serum', 'lightweight moisturizer']
  },
  {
    concern: 'Enlarged Pores',
    keywords: ['large pores', 'visible pores', 'pores', 'textured', 'uneven texture'],
    relatedIngredients: ['Niacinamide', 'Salicylic Acid', 'Retinol', 'AHA'],
    recommendedProductTypes: ['serum', 'exfoliant', 'toner', 'primer']
  },
  {
    concern: 'Sun Damage',
    keywords: ['sun damage', 'age spots', 'sun spots', 'photo damage', 'brown spots'],
    relatedIngredients: ['Vitamin C', 'Kojic Acid', 'Arbutin', 'Retinol', 'Hydroquinone'],
    recommendedProductTypes: ['serum', 'cream', 'treatment', 'sunscreen']
  },
  {
    concern: 'Hyperpigmentation',
    keywords: ['dark spots', 'pigmentation', 'melasma', 'uneven tone', 'discoloration'],
    relatedIngredients: ['Vitamin C', 'Kojic Acid', 'Arbutin', 'Licorice Root', 'Alpha Arbutin'],
    recommendedProductTypes: ['serum', 'cream', 'treatment', 'exfoliant']
  },
  {
    concern: 'Signs of Aging',
    keywords: ['wrinkles', 'fine lines', 'aging', 'mature', 'sagging', 'loss of firmness'],
    relatedIngredients: ['Retinol', 'Peptides', 'Vitamin C', 'Hyaluronic Acid', 'Collagen'],
    recommendedProductTypes: ['serum', 'cream', 'eye cream', 'treatment']
  },
  {
    concern: 'Redness',
    keywords: ['red', 'redness', 'irritated', 'inflamed', 'reactive', 'rosacea'],
    relatedIngredients: ['Niacinamide', 'Centella Asiatica', 'Aloe Vera', 'Chamomile', 'Green Tea'],
    recommendedProductTypes: ['serum', 'cream', 'cleanser', 'mask']
  },
  {
    concern: 'Sensitivity',
    keywords: ['sensitive', 'reactive', 'easily irritated', 'delicate', 'fragile'],
    relatedIngredients: ['Ceramides', 'Oatmeal', 'Aloe Vera', 'Chamomile', 'Panthenol'],
    recommendedProductTypes: ['gentle cleanser', 'cream', 'serum', 'barrier repair']
  },
  {
    concern: 'Acne',
    keywords: ['acne', 'breakouts', 'pimples', 'blemishes', 'spots', 'comedones'],
    relatedIngredients: ['Salicylic Acid', 'Benzoyl Peroxide', 'Tea Tree', 'Niacinamide', 'Retinol'],
    recommendedProductTypes: ['cleanser', 'serum', 'treatment', 'spot treatment']
  }
];

// User-Stated Goals/Needs (Knowledge Dataset Section III.2)
export const userGoals: UserGoal[] = [
  {
    goal: 'Glow',
    keywords: ['glow', 'glowing', 'radiant', 'radiance', 'luminous', 'bright', 'brightness'],
    relatedConcerns: ['Dullness', 'Hyperpigmentation', 'Dehydration']
  },
  {
    goal: 'Hydration',
    keywords: ['hydration', 'moisture', 'hydrating', 'moisturizing', 'plump', 'plumping'],
    relatedConcerns: ['Dryness', 'Dehydration', 'Fine Lines']
  },
  {
    goal: 'Anti-aging',
    keywords: ['anti-aging', 'anti-ageing', 'wrinkle reduction', 'firmness', 'lifting', 'youth'],
    relatedConcerns: ['Signs of Aging', 'Loss of Firmness', 'Fine Lines']
  },
  {
    goal: 'Soothing',
    keywords: ['soothing', 'calming', 'reduce redness', 'comfort', 'gentle', 'healing'],
    relatedConcerns: ['Redness', 'Sensitivity', 'Irritation']
  },
  {
    goal: 'Even Tone',
    keywords: ['even skin tone', 'fade dark spots', 'brighten', 'uniform', 'balanced'],
    relatedConcerns: ['Hyperpigmentation', 'Sun Damage', 'Uneven Tone']
  },
  {
    goal: 'Clear Skin',
    keywords: ['clear skin', 'acne control', 'blemish-free', 'smooth', 'clean'],
    relatedConcerns: ['Acne', 'Blemishes', 'Enlarged Pores']
  }
];

// Enhanced keyword matching function for AI recommendations
export const matchUserInputToConcerns = (userInput: string): {
  matchedConcerns: SkinConcern[];
  matchedGoals: UserGoal[];
  confidence: number;
} => {
  const input = userInput.toLowerCase();
  const matchedConcerns: SkinConcern[] = [];
  const matchedGoals: UserGoal[] = [];
  let totalMatches = 0;

  // Match skin concerns
  skinConcerns.forEach(concern => {
    const matches = concern.keywords.filter(keyword => input.includes(keyword.toLowerCase()));
    if (matches.length > 0) {
      matchedConcerns.push(concern);
      totalMatches += matches.length;
    }
  });

  // Match user goals
  userGoals.forEach(goal => {
    const matches = goal.keywords.filter(keyword => input.includes(keyword.toLowerCase()));
    if (matches.length > 0) {
      matchedGoals.push(goal);
      totalMatches += matches.length;
    }
  });

  // Calculate confidence based on number of matches and input length
  const confidence = Math.min(totalMatches / Math.max(input.split(' ').length, 1), 1);

  return {
    matchedConcerns,
    matchedGoals,
    confidence
  };
};
