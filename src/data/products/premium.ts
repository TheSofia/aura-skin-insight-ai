
import { Product } from '@/types/product';

// Premium skincare products
export const premiumProducts: Product[] = [
  {
    id: "p12",
    productName: "The Rich Cream",
    brand: "Augustinus Bader",
    keyIngredients: ["TFC8®", "Squalane"],
    useCase: "For intensive hydration and anti-aging.",
    bestFor: ["Dry, aging, and stressed skin"],
    solutionsOffered: ["Rejuvenates skin", "Reduces wrinkles", "Deeply hydrates"],
    howToUse: "",
    imageUrl: "https://cdn.shopify.com/s/files/1/0582/5321/3703/files/AB-The-Rich-Cream-EU-Closed-30ML.png",
    links: {
      us: "https://augustinusbader.com/us/en/the-rich-cream",
      eu: "https://augustinusbader.com/eu/en/the-rich-cream"
    },
    saved: false
  },
  {
    id: "p13",
    productName: "The Hydrogel Face Mask",
    brand: "Augustinus Bader",
    keyIngredients: ["TFC8®", "Aloe Vera"],
    useCase: "For skin hydration and replenishment.",
    bestFor: ["Dehydrated, dull skin"],
    solutionsOffered: ["Boosts hydration", "Brightens", "Improves skin texture"],
    howToUse: "",
    links: {
      us: "https://augustinusbader.com/us/en/the-hydrogel-face-mask",
      eu: "https://augustinusbader.com/eu/en/the-hydrogel-face-mask"
    },
    saved: false
  },
  {
    id: "p14",
    productName: "C E Ferulic Vitamin C Serum",
    brand: "SkinCeuticals",
    keyIngredients: ["Vitamin C", "Ferulic Acid", "Vitamin E"],
    useCase: "For brightening and anti-aging.",
    bestFor: ["Dull, uneven skin tone, wrinkles"],
    solutionsOffered: ["Provides antioxidant protection", "Brightens", "Smooths skin texture"],
    howToUse: "",
    links: {
      us: "https://www.skinceuticals.com/c-e-ferulic-635494263008.html",
      eu: "https://www.skinceuticals.co.uk/skincare/facial-serums/c-e-ferulic-vitamin-c-serum/SCC_0001.html"
    },
    saved: false
  },
  {
    id: "p15",
    productName: "Phloretin CF",
    brand: "SkinCeuticals",
    keyIngredients: ["Phloretin", "Vitamin C", "Ferulic Acid"],
    useCase: "For antioxidant protection and targeting discoloration.",
    bestFor: ["Discoloration", "Fine lines", "Uneven skin tone", "Normal, oily, combination skin"],
    solutionsOffered: ["Provides advanced environmental protection", "Diminishes discoloration", "Refines texture"],
    howToUse: "In the morning after cleansing and toning, apply 4-5 drops to a dry face, neck, and chest before other anti-aging skincare products.",
    links: {
      us: "https://www.skinceuticals.com/skincare/facial-serums/phloretin-cf-635494272000.html",
      eu: "https://www.skinceuticals.co.uk/skincare/facial-serums/phloretin-c-f-vitamin-c-serum/SCC_0002.html"
    },
    saved: false
  },
  {
    id: "p16",
    productName: "Silymarin CF",
    brand: "SkinCeuticals",
    keyIngredients: ["Silymarin", "L-Ascorbic Acid (Vitamin C)", "Ferulic Acid", "Salicylic Acid"],
    useCase: "For oil control, blemishes, and anti-aging for oily skin types.",
    bestFor: ["Oily and acne-prone skin", "Aging skin"],
    solutionsOffered: ["Provides environmental protection", "Reduces oiliness", "Refines skin texture", "Improves skin clarity and fine lines"],
    howToUse: "In the morning after cleansing and toning, apply 4-5 drops to a dry face, neck, and chest before other skincare products.",
    links: {
      us: "https://www.skinceuticals.com/skincare/facial-serums/silymarin-cf-05060420000087.html",
      eu: "https://www.skinceuticals.co.uk/skincare/facial-serums/silymarin-cf/SKC_0015.html"
    },
    saved: false
  },
  {
    id: "p17",
    productName: "Ultra Facial Defense SPF 50",
    brand: "SkinCeuticals",
    keyIngredients: ["Mexoryl® SX and XL (chemical filters)", "Tinosorb S (chemical filter)"],
    useCase: "For broad-spectrum sun protection.",
    bestFor: ["All skin types needing daily broad-spectrum sun protection"],
    solutionsOffered: ["Shields from UVA and UVB rays", "Prevents premature aging and pigmentation", "Hydrates"],
    howToUse: "Apply before sun exposure. Reapply frequently and generously to maintain protection, especially after swimming, perspiring or toweling.",
    links: {
      us: "https://www.skinceuticals.com/sunscreen/ultra-facial-defense-spf-50-883140021125.html",
      eu: "https://www.skinceuticals.co.uk/sunscreen/ultra-facial-uv-defense-spf-50-sunscreen/SC_0001.html"
    },
    saved: false
  }
];
