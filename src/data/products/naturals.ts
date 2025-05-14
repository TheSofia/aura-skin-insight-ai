
import { Product } from '@/types/product';

// Natural skincare products
export const naturalProducts: Product[] = [
  {
    id: "p30",
    productName: "Pure Radiance Oil",
    brand: "True Botanicals",
    keyIngredients: ["Chia Seed Oil", "Kiwi Seed Oil", "Passion Fruit Oil", "Rosehip Oil"],
    useCase: "For nourishing, anti-aging, and hydration.",
    bestFor: ["Dull, dry, and aging skin", "All skin types, including sensitive and acne-prone"],
    solutionsOffered: ["Deeply moisturizes and nourishes", "Boosts radiance and glow", "Reduces appearance of fine lines", "Calms redness"],
    howToUse: "Apply 2-10 drops to cleansed skin AM and PM.",
    links: {
      us: "https://truebotanicals.com/products/pure-radiance-oil",
      eu: "https://truebotanicals.com/products/pure-radiance-oil"
    },
    saved: false
  },
  {
    id: "p31",
    productName: "Renewing Cleanser",
    brand: "True Botanicals",
    keyIngredients: ["Green Tea Extract", "White Tea Extract", "Aloe Vera", "Green Gilt"],
    useCase: "For gentle cleansing and skin soothing.",
    bestFor: ["Sensitive skin", "Normal to dry skin", "Mature skin"],
    solutionsOffered: ["Gently cleanses without stripping", "Removes impurities and makeup", "Calms and hydrates skin", "Soothes irritation"],
    howToUse: "Massage onto damp skin, then rinse.",
    links: {
      us: "https://truebotanicals.com/products/renew-nutrient-mist",
      eu: "https://truebotanicals.com/products/renew-nutrient-mist"
    },
    saved: false
  },
  {
    id: "p32",
    productName: "Vitamin C Booster",
    brand: "True Botanicals",
    keyIngredients: ["L-Ascorbic Acid (Vitamin C powder)", "Ferulic Acid"],
    useCase: "For brightening and evening out skin tone.",
    bestFor: ["Dull skin", "Uneven skin tone", "Dark spots", "Loss of firmness"],
    solutionsOffered: ["Brightens skin complexion", "Reduces appearance of dark spots", "Boosts collagen production", "Provides antioxidant protection"],
    howToUse: "Mix a small amount (pea-sized) of powder with serum or moisturizer in palm before applying to skin.",
    links: {
      us: "https://truebotanicals.com/products/vitamin-c-booster",
      eu: "https://truebotanicals.com/products/vitamin-c-booster"
    },
    saved: false
  },
  {
    id: "p33",
    productName: "Blue Cocoon",
    brand: "May Lindstrom Skin",
    keyIngredients: ["Blue Tansy", "Camellia Seed Oil", "Shea Butter", "Marula Oil"],
    useCase: "For skin calming, anti-inflammatory relief, and deep nourishment.",
    bestFor: ["Sensitive, irritated, inflamed skin", "Dryness", "Redness", "Stressed skin"],
    solutionsOffered: ["Soothes redness and calms irritation", "Provides intense hydration and nourishment", "Reduces inflammation", "Acts as a beauty balm concentrate"],
    howToUse: "Melt a pea-sized amount between fingertips, then gently press into cleansed skin. Can be used as a moisturizer or targeted treatment.",
    links: {
      us: "https://www.maylindstrom.com/products/the-blue-cocoon",
      eu: "https://www.maylindstrom.com/products/the-blue-cocoon"
    },
    saved: false
  }
];
