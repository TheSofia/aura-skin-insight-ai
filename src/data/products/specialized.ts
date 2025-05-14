
import { Product } from '@/types/product';

// Specialized skincare products
export const specializedProducts: Product[] = [
  {
    id: "p23",
    productName: "Shaant Balancing Oil Control Cream",
    brand: "Codex Labs – Shaant Collection",
    keyIngredients: ["Patented ShaantComplex™", "Niacinamide", "Zinc PCA"],
    useCase: "For oil control and balance.",
    bestFor: ["Oily, acne-prone skin", "Combination skin"],
    solutionsOffered: ["Controls excess oil and shine", "Balances skin microbiome", "Reduces acne breakouts and inflammation", "Minimizes pores"],
    howToUse: "Apply a thin layer to cleansed face and neck, AM and PM.",
    links: {
      us: "https://codexlabs.com/collections/shaant/products/shaant-balancing-oil-control-cream",
      eu: "https://eu.codexlabs.com/collections/shaant/products/shaant-balancing-oil-control-cream"
    },
    saved: false
  },
  {
    id: "p24",
    productName: "Shaant Clarifying Cleanser",
    brand: "Codex Labs – Shaant Collection",
    keyIngredients: ["Patented ShaantComplex™", "Salicylic Acid", "Willow Bark Extract"],
    useCase: "For gentle cleansing and clarifying.",
    bestFor: ["Acne-prone and oily skin", "Congested skin"],
    solutionsOffered: ["Deeply cleanses pores", "Gently exfoliates", "Soothes and calms inflammation", "Reduces breakouts"],
    howToUse: "Massage onto damp skin, then rinse thoroughly. Use AM and PM.",
    links: {
      us: "https://codexlabs.com/collections/shaant/products/shaant-clarifying-cleanser",
      eu: "https://eu.codexlabs.com/collections/shaant/products/shaant-clarifying-cleanser"
    },
    saved: false
  },
  {
    id: "p25",
    productName: "Moisture Melt Serum Balm",
    brand: "Timebeam Beauty – Skin Longevity Line",
    keyIngredients: ["Proprietary Peptide Complex", "Ceramides", "Shea Butter", "Squalane"],
    useCase: "For deep hydration and skin repair.",
    bestFor: ["Dry, sensitive, mature skin", "Compromised skin barrier"],
    solutionsOffered: ["Provides intense, lasting moisture", "Soothes and repairs skin barrier", "Reduces redness and irritation", "Improves skin texture"],
    howToUse: "Warm a small amount between fingertips and gently press onto face, neck, and décolleté. Can be used AM/PM.",
    links: {
      us: "https://timebeambeauty.com/products/moisture-melt",
      eu: "https://timebeambeauty.com/products/moisture-melt"
    },
    saved: false
  },
  {
    id: "p26",
    productName: "Skinbeam Milky Serum",
    brand: "Timebeam Beauty – Skin Longevity Line",
    keyIngredients: ["Proprietary Peptide Complex", "Niacinamide", "Hyaluronic Acid", "Vitamin E"],
    useCase: "For hydration and skin smoothing.",
    bestFor: ["All skin types, especially dry or dehydrated skin", "Dullness", "Uneven texture"],
    solutionsOffered: ["Deeply hydrates and plumps", "Smooths skin texture", "Boosts radiance", "Strengthens skin barrier"],
    howToUse: "Apply to cleansed skin AM and PM before moisturizer.",
    links: {
      us: "https://timebeambeauty.com/products/skinbeam-milky-serum",
      eu: "https://timebeambeauty.com/products/skinbeam-milky-serum"
    },
    saved: false
  },
  {
    id: "p27",
    productName: "Phyla Acne Phage Serum",
    brand: "Phyla",
    keyIngredients: ["PHAGESTECH™ (Proprietary C. acnes bacteriophages)", "Niacinamide", "Hyaluronic Acid"],
    useCase: "For acne treatment and prevention using phage technology.",
    bestFor: ["Acne-prone skin", "Persistent breakouts", "Inflamed acne", "Sensitive acneic skin"],
    solutionsOffered: ["Targets and reduces C. acnes bacteria", "Reduces breakouts and inflammation", "Balances skin microbiome", "Calms redness"],
    howToUse: "Apply 1-2 pumps to clean, dry skin twice daily. Let absorb before other products.",
    links: {
      us: "https://phylabiotics.com/products/phyla-phage-serum",
      eu: "https://phylabiotics.com/products/phyla-phage-serum"
    },
    saved: false
  }
];
