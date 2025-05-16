
import { Product } from '@/types/product';
import { MatchResult } from '@/utils/productFilteringTypes';

/**
 * Generates personalized recommendation reasons for products based on matches and user input
 */
export function generateRecommendationReasons(
  products: Product[],
  matches: MatchResult,
  userDescription: string
): Record<string, string> {
  const reasons: Record<string, string> = {};
  const skinTypes = matches.skinTypes || [];
  const concerns = matches.concerns || [];
  const goals = matches.goals || [];

  // Get aspects from the description for more natural language
  const mentionedAspects = [...skinTypes, ...concerns, ...goals];
  const hasDryness = mentionedAspects.some(a => 
    ['dry', 'dehydrated', 'flaky', 'tight'].includes(a.toLowerCase()));
  const hasOiliness = mentionedAspects.some(a => 
    ['oily', 'excess oil', 'shine', 'greasy'].includes(a.toLowerCase()));
  const hasSensitivity = mentionedAspects.some(a => 
    ['sensitive', 'irritated', 'redness', 'reactive'].includes(a.toLowerCase()));
  const hasAcne = mentionedAspects.some(a => 
    ['acne', 'breakouts', 'pimples', 'blemishes'].includes(a.toLowerCase()));
  const hasAging = mentionedAspects.some(a => 
    ['aging', 'wrinkles', 'fine lines', 'mature'].includes(a.toLowerCase()));
  const hasDullness = mentionedAspects.some(a => 
    ['dull', 'brightness', 'glow', 'radiance'].includes(a.toLowerCase()));
  
  // Generate a reason for each product
  products.forEach(product => {
    let reason = '';
    
    // Check product properties to generate relevant reasons
    const containsHydration = 
      product.keyIngredients.some(i => ['hyaluronic acid', 'glycerin', 'ceramides', 'squalane'].includes(i.toLowerCase())) ||
      product.bestFor.some(b => b.toLowerCase().includes('dry')) ||
      product.solutionsOffered.some(s => s.toLowerCase().includes('hydrat'));
      
    const containsOilControl = 
      product.keyIngredients.some(i => ['niacinamide', 'salicylic acid', 'zinc'].includes(i.toLowerCase())) ||
      product.bestFor.some(b => b.toLowerCase().includes('oily')) ||
      product.solutionsOffered.some(s => s.toLowerCase().includes('oil'));
    
    const containsAcneTreatment = 
      product.keyIngredients.some(i => ['salicylic acid', 'benzoyl peroxide', 'tea tree'].includes(i.toLowerCase())) ||
      product.bestFor.some(b => b.toLowerCase().includes('acne')) ||
      product.solutionsOffered.some(s => s.toLowerCase().includes('acne') || s.toLowerCase().includes('breakout'));
    
    const containsAntiAging = 
      product.keyIngredients.some(i => ['retinol', 'peptides', 'vitamin c', 'bakuchiol'].includes(i.toLowerCase())) ||
      product.bestFor.some(b => b.toLowerCase().includes('aging') || b.toLowerCase().includes('mature')) ||
      product.solutionsOffered.some(s => 
        s.toLowerCase().includes('wrinkle') || 
        s.toLowerCase().includes('firm') ||
        s.toLowerCase().includes('fine line'));
    
    const containsBrighten = 
      product.keyIngredients.some(i => ['vitamin c', 'niacinamide', 'alpha arbutin', 'kojic acid'].includes(i.toLowerCase())) ||
      product.bestFor.some(b => b.toLowerCase().includes('brighten') || b.toLowerCase().includes('glow') || b.toLowerCase().includes('radiance')) ||
      product.solutionsOffered.some(s => 
        s.toLowerCase().includes('brighten') || 
        s.toLowerCase().includes('glow') ||
        s.toLowerCase().includes('radiance'));
    
    const containsSoothing = 
      product.keyIngredients.some(i => ['aloe vera', 'centella asiatica', 'chamomile', 'oat', 'calendula'].includes(i.toLowerCase())) ||
      product.bestFor.some(b => b.toLowerCase().includes('sensitive') || b.toLowerCase().includes('soothe')) ||
      product.solutionsOffered.some(s => 
        s.toLowerCase().includes('calm') || 
        s.toLowerCase().includes('soothe') ||
        s.toLowerCase().includes('sensitive'));
    
    // Match product properties with user needs to create personalized reasons
    if (hasDryness && containsHydration) {
      reason = `This product offers the hydration your skin needs with ${getMainIngredient(product)} to address dryness and dehydration.`;
    } else if (hasOiliness && containsOilControl) {
      reason = `With key ingredients like ${getMainIngredient(product)}, this helps balance oil production while maintaining skin health.`;
    } else if (hasAcne && containsAcneTreatment) {
      reason = `Specially formulated with ${getMainIngredient(product)} to help clear breakouts and prevent new ones from forming.`;
    } else if (hasAging && containsAntiAging) {
      reason = `Contains effective anti-aging ingredients like ${getMainIngredient(product)} to address fine lines and improve skin elasticity.`;
    } else if (hasDullness && containsBrighten) {
      reason = `${getMainIngredient(product)} in this formula will help restore radiance and even skin tone for a glowing complexion.`;
    } else if (hasSensitivity && containsSoothing) {
      reason = `Gentle formulation with ${getMainIngredient(product)} to calm and soothe sensitive skin while reducing redness.`;
    } else {
      // Default reason based on product properties
      reason = `This ${product.brand} product is well-suited for your skin concerns with its ${getMainIngredient(product)} formulation.`;
    }
    
    reasons[product.id] = reason;
  });
  
  return reasons;
}

// Helper function to get a main ingredient to highlight
function getMainIngredient(product: Product): string {
  if (!product.keyIngredients.length) return 'specialized';
  
  const preferredIngredients = [
    'retinol', 'hyaluronic acid', 'vitamin c', 'niacinamide', 'peptides', 
    'ceramides', 'salicylic acid', 'azelaic acid', 'bakuchiol', 'squalane'
  ];
  
  // Try to find a well-known ingredient first
  for (const preferred of preferredIngredients) {
    const found = product.keyIngredients.find(i => 
      i.toLowerCase().includes(preferred.toLowerCase()));
    if (found) return found;
  }
  
  // Fall back to first ingredient
  return product.keyIngredients[0];
}
