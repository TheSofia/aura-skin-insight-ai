
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Bookmark, BookmarkCheck } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import DynamicLogo from './DynamicLogo';

type Product = {
  id: string;
  name: string;
  brand: string;
  description: string;
  url: string;
  saved: boolean;
};

type ProductRecommendationsProps = {
  isManualPath?: boolean;
};

const ProductRecommendations = ({ isManualPath = false }: ProductRecommendationsProps) => {
  const { toast } = useToast();
  const [skinDescription, setSkinDescription] = useState<string>("");
  
  // Exact product list as mandated
  const [products, setProducts] = useState<Product[]>([
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
  ]);

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
        <div className="px-6 py-16 md:px-12">
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex items-center mb-8">
              <DynamicLogo colorScheme="cyan" size="sm" className="mr-4" />
              <h2 className="text-2xl font-clash font-medium text-aurascan-dark-grey">Your Personalized Protocol</h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-clash tracking-tight text-aurascan-dark-grey mb-6 leading-tight">
              <span className="font-bold">Premium Recommendations</span> <span className="font-light">For Your Skin</span>
            </h1>
            <p className="text-aurascan-medium-grey max-w-2xl leading-relaxed text-lg mb-8 font-light">
              Based on your skin analysis, we've curated these high-quality products specifically for your unique needs.
            </p>
            
            {/* Manual Input Text Area - only visible when coming via manual path */}
            {isManualPath && (
              <div className="w-full max-w-2xl mb-10 transition-all duration-300">
                <Textarea
                  placeholder="Tell us about your skin: type, concerns, goals..."
                  value={skinDescription}
                  onChange={handleSkinDescriptionChange}
                  className="resize-none border-aurascan-light-grey/50 rounded-md p-4 h-32 font-light text-base placeholder:text-aurascan-medium-grey/70 focus-visible:ring-aurascan-dark-grey/30 focus-visible:ring-offset-0"
                />
              </div>
            )}
          </div>
        </div>

        <div className="px-6 md:px-12 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {products.map(product => (
                <div 
                  key={product.id} 
                  className="frosted-card overflow-hidden p-6 transition-all hover:shadow-lg hover:translate-y-[-2px]"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="text-sm text-aurascan-dark-grey font-medium mb-1">{product.brand}</div>
                      <h3 className="font-clash text-2xl font-bold mb-2 text-aurascan-dark-grey">{product.name}</h3>
                      <p className="text-aurascan-medium-grey mb-4 font-light">{product.description}</p>
                      
                      <div className="flex items-center gap-4">
                        <Button 
                          className="bg-aurascan-dark-grey hover:bg-aurascan-dark-grey/90 text-white flex items-center gap-2"
                          onClick={() => window.open(product.url, '_blank')}
                        >
                          <span>Shop Now</span>
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        
                        <button 
                          className="flex items-center justify-center p-2 rounded-full hover:bg-aurascan-light-grey transition-colors duration-300"
                          onClick={() => toggleSaveProduct(product.id)}
                          aria-label={product.saved ? "Remove from library" : "Save to library"}
                        >
                          {product.saved ? (
                            <BookmarkCheck className="h-5 w-5 text-aurascan-dark-grey fill-aurascan-dark-grey transition-all duration-300" />
                          ) : (
                            <Bookmark className="h-5 w-5 text-aurascan-dark-grey transition-all duration-300" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 md:p-12 border-t border-aurascan-light-grey">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-aurascan-dark-grey mb-1">Your Product Library</h3>
              <p className="text-aurascan-medium-grey text-sm font-light">
                {getSavedProducts().length === 0 
                  ? "You haven't saved any products yet" 
                  : `You have ${getSavedProducts().length} saved products`}
              </p>
            </div>
            
            {getSavedProducts().length > 0 && (
              <Button 
                className="bg-aurascan-dark-grey text-white hover:bg-aurascan-dark-grey/90 transition-all duration-300"
                onClick={() => {
                  toast({
                    title: "View saved products",
                    description: "In a complete app, this would navigate to your saved products library."
                  });
                }}
              >
                View Saved Products
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRecommendations;
