
import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import DynamicLogo from './DynamicLogo';
import { Product } from '@/types/product';
import ProductList from './ProductList';
import ProductLibrarySummary from './ProductLibrarySummary';
import SkinDescriptionInput from './SkinDescriptionInput';

type ProductRecommendationsProps = {
  isManualPath?: boolean;
};

// Enhanced product data with full details
const initialProducts: Product[] = [
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

const ProductRecommendations = ({ isManualPath = false }: ProductRecommendationsProps) => {
  const { toast } = useToast();
  const [skinDescription, setSkinDescription] = useState<string>("");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [hasFiltered, setHasFiltered] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // Function to handle skin description input
  const handleSkinDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSkinDescription(e.target.value);
    setIsTyping(true);
    
    // Clear typing indicator after short delay
    const typingTimer = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
    
    return () => clearTimeout(typingTimer);
  };

  // Enhanced function to process skin description and intelligently filter products
  const handleProcessSkinDescription = () => {
    if (!skinDescription.trim()) return;
    
    setIsProcessing(true);
    setHasFiltered(false);
    
    // Simulate processing delay with typing indicator
    setTimeout(() => {
      // Convert input to lowercase for case-insensitive matching
      const input = skinDescription.toLowerCase();
      
      // Define keyword categories for more intelligent matching
      const keywordMap = {
        skinTypes: {
          dry: ['dry', 'dehydrated', 'flaky', 'tight', 'parched'],
          oily: ['oily', 'greasy', 'shiny', 'excess oil', 'sebum'],
          combination: ['combination', 'combo', 'oily t-zone', 'mixed', 'partially oily'],
          sensitive: ['sensitive', 'reactive', 'irritated', 'easily irritated', 'redness'],
          normal: ['normal', 'balanced', 'regular'],
          aging: ['aging', 'mature', 'older', 'aged']
        },
        concerns: {
          acne: ['acne', 'breakouts', 'pimples', 'blemishes', 'zits', 'spots'],
          wrinkles: ['wrinkles', 'fine lines', 'creases', 'folds', 'crow\'s feet'],
          darkSpots: ['dark spots', 'hyperpigmentation', 'uneven tone', 'melasma', 'sun spots', 'age spots'],
          redness: ['redness', 'inflamed', 'inflammation', 'rosacea', 'flushed', 'red'],
          dullness: ['dull', 'tired', 'lackluster', 'lifeless', 'no glow'],
          texture: ['texture', 'rough', 'bumpy', 'uneven texture', 'smooth', 'refine']
        },
        goals: {
          hydration: ['hydration', 'moisturize', 'hydrate', 'moisture', 'quench'],
          antiAging: ['anti-aging', 'anti aging', 'youth', 'younger', 'rejuvenate', 'reduce wrinkles'],
          brightening: ['brighten', 'brightening', 'glow', 'glowing', 'radiance', 'radiant'],
          calming: ['calm', 'calming', 'soothe', 'soothing', 'reduce irritation'],
          firming: ['firm', 'firming', 'tighten', 'lifting', 'sagging']
        }
      };
      
      // Function to check if input contains any keywords from a category
      const containsKeywords = (keywordArray: string[]) => {
        return keywordArray.some(keyword => input.includes(keyword));
      };
      
      // Create a map of matched categories
      const matches = {
        skinTypes: Object.keys(keywordMap.skinTypes).filter(type => 
          containsKeywords(keywordMap.skinTypes[type as keyof typeof keywordMap.skinTypes])
        ),
        concerns: Object.keys(keywordMap.concerns).filter(concern => 
          containsKeywords(keywordMap.concerns[concern as keyof typeof keywordMap.concerns])
        ),
        goals: Object.keys(keywordMap.goals).filter(goal => 
          containsKeywords(keywordMap.goals[goal as keyof typeof keywordMap.goals])
        )
      };
      
      // If no matches found at all, display all products
      if (matches.skinTypes.length === 0 && matches.concerns.length === 0 && matches.goals.length === 0) {
        setFilteredProducts(products);
        setIsProcessing(false);
        setHasFiltered(true);
        toast({
          title: "No specific matches found",
          description: "Showing all available products. Try using terms like 'dry skin' or 'anti-aging'.",
        });
        return;
      }
      
      // Advanced filtering logic that ranks products by relevance
      const relevanceScores = products.map(product => {
        let score = 0;
        
        // Check bestFor matches with skin types
        matches.skinTypes.forEach(skinType => {
          if (product.bestFor.some(bf => bf.toLowerCase().includes(skinType.toLowerCase()))) {
            score += 5;
          }
        });
        
        // Check solutions matches with concerns and goals
        [...matches.concerns, ...matches.goals].forEach(term => {
          if (product.solutionsOffered.some(solution => 
            solution.toLowerCase().includes(term.toLowerCase()))) {
            score += 4;
          }
        });
        
        // Check useCase for any matches
        [...matches.skinTypes, ...matches.concerns, ...matches.goals].forEach(term => {
          if (product.useCase.toLowerCase().includes(term.toLowerCase())) {
            score += 3;
          }
        });
        
        return { product, score };
      });
      
      // Filter products with any score and sort by relevance
      const relevantProducts = relevanceScores
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => item.product);
      
      // If no products match the specific terms, show all products
      setFilteredProducts(relevantProducts.length > 0 ? relevantProducts : products);
      
      setIsProcessing(false);
      setHasFiltered(true);
      
      toast({
        title: "Analysis Complete",
        description: relevantProducts.length > 0 
          ? `We've found ${relevantProducts.length} products based on your needs` 
          : "We've tailored recommendations based on your skin description",
      });
    }, 1500);
  };

  // Function to toggle saved status of product
  const toggleSaveProduct = (productId: string) => {
    const updatedProducts = products.map(product => 
      product.id === productId 
        ? { ...product, saved: !product.saved } 
        : product
    );
    
    setProducts(updatedProducts);
    
    // Also update filtered products
    setFilteredProducts(filteredProducts.map(product => 
      product.id === productId 
        ? { ...product, saved: !product.saved } 
        : product
    ));
    
    const product = products.find(p => p.id === productId);
    if (product) {
      toast({
        title: product.saved ? "Removed from library" : "Added to library",
        description: product.saved ? `${product.productName} has been removed from your product library` : `${product.productName} has been added to your product library`,
      });
    }
  };
  
  // Get list of saved products
  const getSavedProducts = () => products.filter(product => product.saved);

  return (
    <div className="flex flex-col h-full animate-fade-in bg-white">
      <div className="flex-1 overflow-auto pb-6">
        <div className="p-8 md:p-12 flex justify-center">
          <DynamicLogo colorScheme="refined" animationStyle="cellular" size="md" showText={true} />
        </div>
        
        <div className="px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-clash font-light text-beautyagent-dark-grey mb-8">
              Your Personalized Protocol
            </h1>
            
            {/* Manual Input Text Area - always visible in this version */}
            <SkinDescriptionInput 
              value={skinDescription}
              onChange={handleSkinDescriptionChange}
              onSubmit={handleProcessSkinDescription}
              isProcessing={isProcessing}
            />
            
            {/* Live typing indicator */}
            {isTyping && !isProcessing && (
              <div className="flex justify-center -mt-8 mb-8 opacity-60">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="px-6 md:px-12 py-8">
          <div className="max-w-3xl mx-auto">
            {isProcessing ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-12 h-12 mb-4">
                  <div className="w-full h-full rounded-full border-2 border-t-beautyagent-accent border-r-beautyagent-accent border-b-transparent border-l-transparent animate-spin"></div>
                </div>
                <p className="text-beautyagent-dark-grey font-light">Analyzing your skin needs...</p>
              </div>
            ) : (
              <ProductList 
                products={filteredProducts}
                onToggleSave={toggleSaveProduct}
                isFiltered={hasFiltered}
              />
            )}
          </div>
        </div>
      </div>
      
      <ProductLibrarySummary savedProducts={getSavedProducts()} />
      
      {/* Fix: Remove the jsx prop from style tag */}
      <style>{`
        .typing-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }
        
        .typing-indicator span {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #9F9EA1;
          animation: typing-indicator 1.4s infinite ease-in-out both;
        }
        
        .typing-indicator span:nth-child(1) {
          animation-delay: -0.32s;
        }
        
        .typing-indicator span:nth-child(2) {
          animation-delay: -0.16s;
        }
        
        @keyframes typing-indicator {
          0%, 80%, 100% { 
            transform: scale(0);
          }
          40% { 
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ProductRecommendations;
