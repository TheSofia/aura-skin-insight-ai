
import { Product } from '@/types/product';

// SPF and sun protection products
export const spfProducts: Product[] = [
  {
    id: "p28",
    productName: "SPF 30 Mineral Sunscreen Facial Serum",
    brand: "TruSkin",
    keyIngredients: ["Zinc Oxide (Non-Nano)", "Vitamin E", "Hyaluronic Acid", "Aloe Vera"],
    useCase: "For mineral sun protection and anti-aging.",
    bestFor: ["Sensitive skin", "Daily sun protection", "All skin types preferring mineral sunscreen"],
    solutionsOffered: ["Provides broad-spectrum UVA/UVB SPF 30 protection", "Lightweight serum texture", "Nourishes and hydrates", "Soothes skin"],
    howToUse: "Apply liberally 15 minutes before sun exposure. Reapply at least every 2 hours.",
    links: {
      us: "https://truskin.com/products/mineral-sunscreen-spf-30",
      eu: "https://truskin.com/products/mineral-sunscreen-spf-30"
    },
    saved: false
  },
  {
    id: "p29",
    productName: "Rejuran Healer",
    brand: "Rejuran",
    keyIngredients: ["Polydeoxyribonucleotide (PDRN) / Polynucleotide (PN) derived from Salmon DNA"],
    useCase: "For intensive skin regeneration, rejuvenation, and repair (often clinic-based treatment).",
    bestFor: ["Aging skin", "Fine lines and wrinkles", "Scars (including acne scars)", "Poor skin texture", "Dehydrated skin", "Post-procedure healing"],
    solutionsOffered: ["Stimulates skin regeneration and repair", "Improves skin texture and elasticity", "Reduces fine lines", "Enhances hydration", "Promotes wound healing"],
    howToUse: "Typically administered via micro-injections by a medical professional in a clinic setting. Topical versions may exist for at-home care but core product is injectable.",
    links: {
      us: "https://rejuranskin.com",
      eu: "https://rejuranskin.com"
    },
    saved: false
  }
];
