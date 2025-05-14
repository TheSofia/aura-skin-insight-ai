
import { Product } from '@/types/product';

// Enhanced product catalog with full collection of skincare products
export const initialProducts: Product[] = [
  {
    id: "p1",
    productName: "Active Botanical Serum",
    brand: "Vintner's Daughter",
    keyIngredients: ["Rose", "Lavender", "Geranium", "Jasmine", "other botanicals"],
    useCase: "For elasticity, deep nourishment, and skin repair.",
    bestFor: ["Dry, dull, and aging skin"],
    solutionsOffered: ["Improves elasticity", "Restores glow", "Nourishes deeply"],
    howToUse: "Press into skin as the last step or mix with cream.",
    links: {
      us: "https://vintnersdaughter.com/products/active-botanical-serum",
      eu: "https://vintnersdaughter.com/products/active-botanical-serum"
    },
    saved: false
  },
  {
    id: "p2",
    productName: "Liquid Peptides Advanced MP",
    brand: "Medik8",
    keyIngredients: ["Peptides", "Amino Acids"],
    useCase: "For skin renewal and anti-aging.",
    bestFor: ["Fine lines, wrinkles, and loss of firmness"],
    solutionsOffered: ["Strengthens the skin", "Boosts collagen production", "Restores youthfulness"],
    howToUse: "",
    links: {
      us: "https://www.medik8.com/us/liquid-peptides.html",
      eu: "https://www.medik8.com/products/liquid-peptides"
    },
    saved: false
  },
  {
    id: "p3",
    productName: "Crystal Retinal",
    brand: "Medik8",
    keyIngredients: ["Retinaldehyde"],
    useCase: "For targeted treatment for aging, pigmentation, and texture.",
    bestFor: ["Uneven skin tone, wrinkles, and rough texture"],
    solutionsOffered: ["Reduces fine lines", "Improves skin texture", "Brightens complexion"],
    howToUse: "Available in strengths 1/3/6/10/20. Start with lowest strength and build up. Apply PM after cleansing.",
    links: {
      us: "https://www.medik8.com/us/crystal-retinal.html",
      eu: "https://www.medik8.com/products/crystal-retinal"
    },
    saved: false
  },
  {
    id: "p4",
    productName: "C-Tetra® Luxe",
    brand: "Medik8",
    keyIngredients: ["Stabilized Vitamin C", "Antioxidants"],
    useCase: "For brightening and antioxidant protection.",
    bestFor: ["Dull, uneven skin"],
    solutionsOffered: ["Protects from free radicals", "Brightens and evens skin tone"],
    howToUse: "",
    links: {
      us: "https://www.medik8.com/us/c-tetra-luxe.html",
      eu: "https://www.medik8.com/products/c-tetra-luxe"
    },
    saved: false
  },
  {
    id: "p5",
    productName: "Sleep Glycolic",
    brand: "Medik8",
    keyIngredients: ["Glycolic Acid", "Peptides"],
    useCase: "For skin exfoliation and renewal.",
    bestFor: ["Rough, uneven skin"],
    solutionsOffered: ["Exfoliates dead skin cells", "Supports skin regeneration"],
    howToUse: "",
    links: {
      us: "https://www.medik8.com/us/sleep-glycolic.html",
      eu: "https://www.medik8.com/products/sleep-glycolic"
    },
    saved: false
  },
  {
    id: "p6",
    productName: "C-Tetra® Eye",
    brand: "Medik8",
    keyIngredients: ["Vitamin C", "Antioxidants"],
    useCase: "For under-eye concerns, fine lines.",
    bestFor: ["Dark circles, puffiness, and fine lines"],
    solutionsOffered: ["Brightens and smooths the delicate eye area"],
    howToUse: "",
    links: {
      us: "https://www.medik8.com/us/c-tetra-eye.html",
      eu: "https://www.medik8.com/products/c-tetra-eye"
    },
    saved: false
  },
  {
    id: "p7",
    productName: "Lipid-Balance Cleansing Oil™",
    brand: "Medik8",
    keyIngredients: ["Olive Oil", "Squalane"],
    useCase: "For gentle cleansing and hydration.",
    bestFor: ["Sensitive, dry skin"],
    solutionsOffered: ["Removes makeup and impurities while maintaining moisture balance"],
    howToUse: "",
    links: {
      us: "https://www.medik8.com/us/lipid-balance-cleansing-oil.html",
      eu: "https://www.medik8.com/products/lipid-balance-cleansing-oil"
    },
    saved: false
  },
  {
    id: "p8",
    productName: "Glycolic Acid 7% Exfoliating Toner",
    brand: "The Ordinary",
    keyIngredients: ["Glycolic Acid"],
    useCase: "For skin exfoliation.",
    bestFor: ["Uneven skin tone, dullness"],
    solutionsOffered: ["Exfoliates dead skin cells", "Brightens complexion"],
    howToUse: "",
    links: {
      us: "https://theordinary.com/en-us/glycolic-acid-7-exfoliating-toner-exfoliator-100418.html",
      eu: "https://theordinary.com/en-gb/glycolic-acid-7-exfoliating-toner-exfoliator-100418.html"
    },
    saved: false
  },
  {
    id: "p9",
    productName: "Natural Moisturizing Factors + PhytoCeramides Cream",
    brand: "The Ordinary",
    keyIngredients: ["Ceramides", "Fatty Acids"],
    useCase: "For deep hydration and moisture retention.",
    bestFor: ["Dry, sensitive skin"],
    solutionsOffered: ["Hydrates and restores the skin's natural moisture barrier"],
    howToUse: "",
    links: {
      us: "https://theordinary.com/en-us/natural-moisturizing-factors-phytoceramides-moisturizer-100439.html",
      eu: "https://theordinary.com/en-gb/natural-moisturizing-factors-phytoceramides-moisturizer-100439.html"
    },
    saved: false
  },
  {
    id: "p10",
    productName: "Niacinamide 10% + Zinc 1% Serum",
    brand: "The Ordinary",
    keyIngredients: ["Niacinamide", "Zinc"],
    useCase: "For skin texture, acne, and oil control.",
    bestFor: ["Oily, acne-prone skin"],
    solutionsOffered: ["Controls sebum production", "Reduces blemishes and redness"],
    howToUse: "",
    links: {
      us: "https://theordinary.com/en-us/niacinamide-10-zinc-1-serum-100436.html",
      eu: "https://theordinary.com/en-gb/niacinamide-10-zinc-1-serum-100436.html"
    },
    saved: false
  },
  {
    id: "p11",
    productName: "Multi-Peptide Serum for Hair Density",
    brand: "The Ordinary",
    keyIngredients: ["Peptides", "Biotin"],
    useCase: "For hair thinning and density improvement.",
    bestFor: ["Thinning hair or hair loss"],
    solutionsOffered: ["Improves hair growth", "Scalp health"],
    howToUse: "",
    links: {
      us: "https://theordinary.com/en-us/multi-peptide-serum-for-hair-density-hair-scalp-treatment-100432.html",
      eu: "https://theordinary.com/en-gb/multi-peptide-serum-for-hair-density-hair-scalp-treatment-100432.html"
    },
    saved: false
  },
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
  },
  {
    id: "p18",
    productName: "20% Vitamin C Brighten + Firm Serum",
    brand: "Allies of Skin",
    keyIngredients: ["20% Ethylated L-Ascorbic Acid", "Glutathione", "Superoxide Dismutase"],
    useCase: "For brightening and firming.",
    bestFor: ["Dullness", "Uneven skin tone", "Loss of firmness", "Dark spots"],
    solutionsOffered: ["Brightens intensely", "Firms and plumps", "Fades dark spots", "Provides antioxidant protection"],
    howToUse: "After cleansing and misting/toning, apply 2-4 pumps to face and neck. Follow with moisturizer and/or oil.",
    links: {
      us: "https://us.alliesofskin.com/products/20-vitamin-c-brighten-firm-serum",
      eu: "https://eu.allies.shop/products/20-vitamin-c-brighten-firm-serum"
    },
    saved: false
  },
  {
    id: "p19",
    productName: "Multi Peptides & GF Advanced Lifting Serum",
    brand: "Allies of Skin",
    keyIngredients: ["Multiple Peptides", "Growth Factors", "Antioxidants"],
    useCase: "For lifting and firming.",
    bestFor: ["Fine lines", "Wrinkles", "Sagging skin", "Loss of elasticity"],
    solutionsOffered: ["Firms and lifts skin", "Reduces wrinkles", "Improves elasticity and texture", "Hydrates"],
    howToUse: "After cleansing and misting/toning, apply 2-4 pumps to face and neck. Follow with moisturizer and/or oil.",
    links: {
      us: "https://us.alliesofskin.com/products/multi-peptides-gf-advanced-lifting-serum",
      eu: "https://eu.allies.shop/products/multi-peptides-gf-advanced-lifting-serum"
    },
    saved: false
  },
  {
    id: "p20",
    productName: "Peptides & Antioxidants Firming Daily Treatment",
    brand: "Allies of Skin",
    keyIngredients: ["Peptides", "Antioxidants", "Brighteners", "Hydrators"],
    useCase: "For daily anti-aging care.",
    bestFor: ["Aging skin", "Daily anti-aging prevention", "Dullness", "Fine lines"],
    solutionsOffered: ["Reduces fine lines", "Firms skin", "Enhances skin resilience", "Brightens", "Hydrates"],
    howToUse: "Use daily after cleansing, misting/toning, and serums. Dispense 1-2 pumps and apply to face and neck. Follow with SPF in the AM.",
    links: {
      us: "https://us.alliesofskin.com/products/peptides-antioxidants-firming-daily-treatment",
      eu: "https://eu.allies.shop/products/peptides-antioxidants-firming-daily-treatment"
    },
    saved: false
  },
  {
    id: "p21",
    productName: "Peptides & Omegas Firming Eye Cream",
    brand: "Allies of Skin",
    keyIngredients: ["Peptides", "Omega-rich oils", "Vitamin C"],
    useCase: "For eye area firming.",
    bestFor: ["Dark circles", "Puffiness", "Fine lines around eyes", "Loss of firmness"],
    solutionsOffered: ["Firms and brightens the delicate eye area", "Reduces puffiness and dark circles", "Hydrates"],
    howToUse: "Gently pat a small amount around the orbital bone, AM and PM.",
    links: {
      us: "https://us.alliesofskin.com/products/peptides-omegas-firming-eye-cream",
      eu: "https://eu.allies.shop/products/peptides-omegas-firming-eye-cream"
    },
    saved: false
  },
  {
    id: "p22",
    productName: "The One SPF 50 Invisible Sunscreen Gel",
    brand: "Allies of Skin",
    keyIngredients: ["Chemical Sunscreen Filters", "Antioxidants", "Vitamin C"],
    useCase: "For daily sun protection.",
    bestFor: ["All skin types needing daily broad-spectrum sun protection", "Those who dislike white cast"],
    solutionsOffered: ["Provides broad-spectrum SPF 50 protection", "Invisible finish", "Lightweight gel texture", "Antioxidant protection"],
    howToUse: "Apply generously as the last step in your skincare routine, 15 minutes before sun exposure. Reapply every 2 hours.",
    links: {
      us: "https://us.alliesofskin.com/products/the-one-spf-50-invisible-sunscreen-gel",
      eu: "https://eu.allies.shop/products/the-one-spf-50-invisible-sunscreen-gel"
    },
    saved: false
  },
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
  },
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
  },
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
