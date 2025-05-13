
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

// Initial product data with keywords added for filtering
const initialProducts: Product[] = [
  {
    id: "p1",
    name: "Active Botanical Serum",
    brand: "Vintner's Daughter",
    description: "A powerful, multi-correctional face oil that delivers radiance and glow with 22 nutrient-rich botanicals.",
    url: "https://vintnersdaughter.com/products/active-botanical-serum",
    saved: false,
    keywords: ["dry", "radiance", "glow", "oil", "natural", "botanical"]
  },
  {
    id: "p2",
    name: "Crystal Retinal",
    brand: "Medik8",
    description: "Advanced vitamin A serum that delivers visible results up to 11x faster than traditional retinol.",
    url: "https://www.medik8.com/products/crystal-retinal",
    saved: false,
    keywords: ["aging", "anti-aging", "wrinkles", "fine lines", "retinol", "vitamin a"]
  },
  {
    id: "p3",
    name: "The Cream",
    brand: "Augustinus Bader",
    description: "An innovative face cream that supports cellular renewal and reduces signs of aging, powered by TFC8® technology.",
    url: "https://augustinusbader.com",
    saved: false,
    keywords: ["moisturizer", "hydration", "aging", "renewal", "premium", "luxury"]
  },
  {
    id: "p4",
    name: "C E Ferulic",
    brand: "SkinCeuticals",
    description: "A vitamin C serum that delivers advanced environmental protection and improves the appearance of fine lines and wrinkles.",
    url: "https://www.skinceuticals.com/c-e-ferulic-635494263008.html",
    saved: false,
    keywords: ["vitamin c", "brightening", "protection", "antioxidant", "fine lines", "dark spots"]
  },
  {
    id: "p5",
    name: "Regenerating Skin Nectar",
    brand: "Alastin Skincare",
    description: "Supports skin's natural regenerative process and helps strengthen the skin barrier.",
    url: "https://alastin.com",
    saved: false,
    keywords: ["regenerating", "barrier", "sensitive", "healing", "post-procedure", "calming"]
  },
  {
    id: "p6",
    name: "Pure Radiance Oil",
    brand: "True Botanicals",
    description: "A natural facial oil that delivers nutrients, hydration, and antioxidant benefits for radiant skin.",
    url: "https://truebotanicals.com",
    saved: false,
    keywords: ["oil", "radiance", "glow", "hydration", "dry", "natural"]
  },
  {
    id: "p7",
    name: "The Blue Cocoon",
    brand: "May Lindstrom",
    description: "A concentrated balm that transforms into a fluid hydrating oil, calming irritation and reducing redness.",
    url: "https://www.maylindstrom.com/products/the-blue-cocoon",
    saved: false,
    keywords: ["sensitive", "redness", "calming", "irritation", "soothing", "hydration"]
  }
];

const ProductRecommendations = ({ isManualPath = false }: ProductRecommendationsProps) => {
  const { toast } = useToast();
  const [skinDescription, setSkinDescription] = useState<string>("");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Function to handle skin description input
  const handleSkinDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSkinDescription(e.target.value);
  };

  // Function to process skin description and filter products
  const handleProcessSkinDescription = () => {
    if (!skinDescription.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      // Convert input to lowercase for case-insensitive matching
      const input = skinDescription.toLowerCase();
      
      // Extract keywords from the skin description
      const keyTerms = [
        "dry", "oily", "combination", "sensitive", "acne", "aging", "anti-aging", 
        "wrinkles", "fine lines", "dark spots", "pigmentation", "redness", 
        "hydration", "glow", "radiance", "brightening", "firming", "calming"
      ];
      
      // Find the terms that match the user's input
      const matchedTerms = keyTerms.filter(term => input.includes(term));
      
      // If no specific terms matched, display all products
      if (matchedTerms.length === 0) {
        setFilteredProducts(products);
      } else {
        // Filter products based on the matched terms
        const relevantProducts = products.filter(product => 
          product.keywords?.some(keyword => 
            matchedTerms.some(term => keyword.includes(term))
          )
        );
        
        // If no products match the specific terms, show all products
        setFilteredProducts(relevantProducts.length > 0 ? relevantProducts : products);
      }
      
      setIsProcessing(false);
      
      toast({
        title: "Analysis Complete",
        description: "We've tailored recommendations based on your skin description",
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
        description: product.saved ? `${product.name} has been removed from your product library` : `${product.name} has been added to your product library`,
      });
    }
  };
  
  // Get list of saved products
  const getSavedProducts = () => products.filter(product => product.saved);

  return (
    <div className="flex flex-col h-full animate-fade-in bg-white">
      <div className="flex-1 overflow-auto pb-6">
        <div className="p-8 md:p-12 flex justify-center">
          <DynamicLogo colorScheme="refined" animationStyle="cellular" size="md" />
        </div>
        
        <div className="px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-clash font-light text-aurascan-dark-grey mb-8">
              Your Personalized Protocol
            </h1>
            
            {/* Manual Input Text Area - only visible when coming via manual path */}
            {isManualPath && (
              <SkinDescriptionInput 
                value={skinDescription}
                onChange={handleSkinDescriptionChange}
                onSubmit={handleProcessSkinDescription}
              />
            )}
          </div>
        </div>

        <div className="px-6 md:px-12 py-8">
          <div className="max-w-5xl mx-auto">
            {isProcessing ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-12 h-12 mb-4">
                  <div className="w-full h-full rounded-full border-2 border-t-aurascan-accent border-r-aurascan-accent border-b-transparent border-l-transparent animate-spin"></div>
                </div>
                <p className="text-aurascan-dark-grey font-light">Analyzing your skin needs...</p>
              </div>
            ) : (
              <ProductList 
                products={isManualPath ? filteredProducts : products}
                onToggleSave={toggleSaveProduct}
              />
            )}
          </div>
        </div>
      </div>
      
      <ProductLibrarySummary savedProducts={getSavedProducts()} />
    </div>
  );
};

export default ProductRecommendations;
