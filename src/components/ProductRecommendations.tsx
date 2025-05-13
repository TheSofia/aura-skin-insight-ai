
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import DynamicLogo from './DynamicLogo';
import { Product } from '@/types/product';
import ProductList from './ProductList';
import ProductLibrarySummary from './ProductLibrarySummary';
import SkinDescriptionInput from './SkinDescriptionInput';

type ProductRecommendationsProps = {
  isManualPath?: boolean;
};

// Initial product data
const initialProducts: Product[] = [
  {
    id: "p1",
    name: "Active Botanical Serum",
    brand: "Vintner's Daughter",
    description: "A powerful, multi-correctional face oil that delivers radiance and glow with 22 nutrient-rich botanicals.",
    url: "https://vintnersdaughter.com/products/active-botanical-serum",
    saved: false
  },
  {
    id: "p2",
    name: "Crystal Retinal",
    brand: "Medik8",
    description: "Advanced vitamin A serum that delivers visible results up to 11x faster than traditional retinol.",
    url: "https://www.medik8.com/products/crystal-retinal",
    saved: false
  },
  {
    id: "p3",
    name: "The Cream",
    brand: "Augustinus Bader",
    description: "An innovative face cream that supports cellular renewal and reduces signs of aging, powered by TFC8® technology.",
    url: "https://augustinusbader.com",
    saved: false
  },
  {
    id: "p4",
    name: "C E Ferulic",
    brand: "SkinCeuticals",
    description: "A vitamin C serum that delivers advanced environmental protection and improves the appearance of fine lines and wrinkles.",
    url: "https://www.skinceuticals.com/c-e-ferulic-635494263008.html",
    saved: false
  },
  {
    id: "p5",
    name: "Regenerating Skin Nectar",
    brand: "Alastin Skincare",
    description: "Supports skin's natural regenerative process and helps strengthen the skin barrier.",
    url: "https://alastin.com",
    saved: false
  },
  {
    id: "p6",
    name: "Pure Radiance Oil",
    brand: "True Botanicals",
    description: "A natural facial oil that delivers nutrients, hydration, and antioxidant benefits for radiant skin.",
    url: "https://truebotanicals.com",
    saved: false
  },
  {
    id: "p7",
    name: "The Blue Cocoon",
    brand: "May Lindstrom",
    description: "A concentrated balm that transforms into a fluid hydrating oil, calming irritation and reducing redness.",
    url: "https://www.maylindstrom.com/products/the-blue-cocoon",
    saved: false
  }
];

const ProductRecommendations = ({ isManualPath = false }: ProductRecommendationsProps) => {
  const { toast } = useToast();
  const [skinDescription, setSkinDescription] = useState<string>("");
  const [products, setProducts] = useState<Product[]>(initialProducts);

  // Function to handle skin description input
  const handleSkinDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSkinDescription(e.target.value);
  };

  // Function to toggle saved status of product
  const toggleSaveProduct = (productId: string) => {
    setProducts(products.map(product => 
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
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-clash font-light text-aurascan-dark-grey text-center mb-8">
              Your Personalized Protocol
            </h1>
            
            {/* Manual Input Text Area - only visible when coming via manual path */}
            {isManualPath && (
              <SkinDescriptionInput 
                value={skinDescription}
                onChange={handleSkinDescriptionChange}
              />
            )}
          </div>
        </div>

        <div className="px-6 md:px-12 py-8">
          <div className="max-w-5xl mx-auto">
            <ProductList 
              products={products}
              onToggleSave={toggleSaveProduct}
            />
          </div>
        </div>
      </div>
      
      <ProductLibrarySummary savedProducts={getSavedProducts()} />
    </div>
  );
};

export default ProductRecommendations;
