
import { Product } from '@/types/product';

// Enhanced product data with full details
export const initialProducts: Product[] = [
  {
    id: "p1",
    productName: "Active Botanical Serum",
    brand: "Vintner's Daughter",
    keyIngredients: ["Grapeseed Oil", "Hazelnut Oil", "Bergamot Peel Oil", "Rose Absolute"],
    useCase: "Multi-correctional face oil for radiant, healthy skin.",
    bestFor: ["All Skin Types", "Dullness", "Uneven Texture", "Dehydration"],
    solutionsOffered: ["Hydration", "Brightening", "Balancing", "Anti-aging support"],
    howToUse: "Apply 5-6 drops to palms, rub together to activate, and press into face and neck. Use morning and night after cleansing.",
    links: {
      us: "https://vintnersdaughter.com/products/active-botanical-serum",
      eu: "https://www.cultbeauty.co.uk/vintners-daughter-active-botanical-serum-30ml/11799583.html"
    },
    saved: false
  },
  {
    id: "p2",
    productName: "Crystal Retinal",
    brand: "Medik8",
    keyIngredients: ["Stabilized Retinaldehyde", "Hyaluronic Acid", "Vitamin E", "Glycerin"],
    useCase: "Advanced vitamin A serum that delivers visible results up to 11x faster than traditional retinol.",
    bestFor: ["Aging Skin", "Fine Lines", "Wrinkles", "Uneven Texture"],
    solutionsOffered: ["Anti-aging", "Skin Renewal", "Collagen Production", "Texture Improvement"],
    howToUse: "Apply in the evening to clean, dry skin. Follow with moisturizer. Build up frequency gradually.",
    links: {
      us: "https://www.medik8.com/us/crystal-retinal.html",
      eu: "https://www.medik8.com/crystal-retinal.html"
    },
    saved: false
  },
  {
    id: "p3",
    productName: "The Cream",
    brand: "Augustinus Bader",
    keyIngredients: ["TFC8® Technology", "Vitamin A", "Vitamin C", "Amino Acids"],
    useCase: "An innovative face cream that supports cellular renewal and reduces signs of aging.",
    bestFor: ["All Skin Types", "Aging Skin", "Dullness", "Dehydration"],
    solutionsOffered: ["Hydration", "Renewal", "Anti-aging", "Radiance"],
    howToUse: "Apply morning and evening to clean, dry skin. Use as your complete skincare regime for optimal results.",
    imageUrl: "https://cdn.shopify.com/s/files/1/0582/5321/3703/files/AB-The-Cream-EU-Closed-30ML.png",
    links: {
      us: "https://augustinusbader.com/us/en/products/the-cream",
      eu: "https://augustinusbader.com/eu/en/products/the-cream"
    },
    saved: false
  },
  {
    id: "p4",
    productName: "C E Ferulic",
    brand: "SkinCeuticals",
    keyIngredients: ["15% L-Ascorbic Acid", "1% Vitamin E", "0.5% Ferulic Acid"],
    useCase: "A vitamin C serum that delivers advanced environmental protection and improves the appearance of fine lines and wrinkles.",
    bestFor: ["Normal", "Dry", "Sensitive", "Aging Skin"],
    solutionsOffered: ["Antioxidant Protection", "Brightening", "Fine Lines", "Dark Spots"],
    howToUse: "Apply 4-5 drops to dry face, neck, and chest in the morning after cleansing and toning. Follow with sunscreen.",
    links: {
      us: "https://www.skinceuticals.com/c-e-ferulic-635494263008.html",
      eu: "https://www.skinceuticals.co.uk/c-e-ferulic/c-e-ferulic,en_GB,pd.html"
    },
    saved: false
  },
  {
    id: "p5",
    productName: "Regenerating Skin Nectar",
    brand: "Alastin Skincare",
    keyIngredients: ["TriHex Technology®", "Silver Mushroom", "Arnica Montana", "Vitamin E"],
    useCase: "Supports skin's natural regenerative process and helps strengthen the skin barrier.",
    bestFor: ["Post-Procedure Skin", "Sensitive Skin", "Compromised Skin", "Aging Skin"],
    solutionsOffered: ["Recovery", "Healing", "Calming", "Barrier Support"],
    howToUse: "Apply twice daily to clean skin. Ideal for use before and after procedures to support healing.",
    links: {
      us: "https://alastin.com/products/regenerating-skin-nectar-with-trihex-technology",
      eu: ""
    },
    saved: false
  },
  {
    id: "p6",
    productName: "Pure Radiance Oil",
    brand: "True Botanicals",
    keyIngredients: ["Chia Seed Oil", "Kiwi Seed Oil", "Passion Fruit Oil", "Papaya Seed Oil"],
    useCase: "A natural facial oil that delivers nutrients, hydration, and antioxidant benefits for radiant skin.",
    bestFor: ["Dry Skin", "Dull Skin", "Dehydrated Skin", "Sensitive Skin"],
    solutionsOffered: ["Radiance", "Hydration", "Nourishment", "Soothing"],
    howToUse: "Apply 2-10 drops on clean skin morning and night. Can be mixed with moisturizer or used alone.",
    links: {
      us: "https://truebotanicals.com/products/renew-pure-radiance-oil",
      eu: ""
    },
    saved: false
  },
  {
    id: "p7",
    productName: "The Blue Cocoon",
    brand: "May Lindstrom",
    keyIngredients: ["Blue Tansy", "Camellia Seed Oil", "Shea Butter", "Cocoa Butter"],
    useCase: "A concentrated balm that transforms into a fluid hydrating oil, calming irritation and reducing redness.",
    bestFor: ["Sensitive Skin", "Reactive Skin", "Inflamed Skin", "Dry Skin"],
    solutionsOffered: ["Calming", "Anti-inflammatory", "Hydrating", "Soothing"],
    howToUse: "Warm a small amount between fingers until it transforms into oil. Press onto clean face. Use as needed.",
    links: {
      us: "https://www.maylindstrom.com/products/the-blue-cocoon",
      eu: "https://www.cultbeauty.co.uk/may-lindstrom-the-blue-cocoon/11221270.html"
    },
    saved: false
  },
  {
    id: "p8",
    productName: "Advanced Night Repair Serum",
    brand: "Estée Lauder",
    keyIngredients: ["Hyaluronic Acid", "Chronolux Power Signal Technology", "Antioxidants"],
    useCase: "Innovative nighttime renewal serum that works while you sleep to deliver visible repair.",
    bestFor: ["All Skin Types", "Aging Skin", "Dryness", "Dullness"],
    solutionsOffered: ["Hydration", "Lines & Wrinkles", "Firmness", "Radiance"],
    howToUse: "Apply a few drops on clean skin before your moisturizer at night. Can also be used in the morning.",
    links: {
      us: "https://www.esteelauder.com/product/681/77491/product-catalog/skincare/skincare-collections/advanced-night-repair/synchronized-multi-recovery-complex",
      eu: "https://www.esteelauder.co.uk/product/684/77491/product-catalog/skincare/skincare-collections/advanced-night-repair/synchronized-multi-recovery-complex"
    },
    saved: false
  }
];
