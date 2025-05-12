
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Bookmark, BookmarkPlus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import DynamicLogo from './DynamicLogo';

type Product = {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: string;
  image: string;
  link: string;
  concerns: string[];
  saved?: boolean;
};

type WellnessTip = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const ProductRecommendations = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<string>("recommendations");
  
  // Mock product data
  const [products, setProducts] = useState<Product[]>([
    {
      id: "p1",
      name: "Hydrating Serum",
      brand: "PharmaDerm",
      description: "Advanced hydrating formula with hyaluronic acid to replenish moisture and strengthen the skin barrier.",
      price: "$48",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=320&auto=format&fit=crop",
      link: "https://example.com/product1",
      concerns: ["Dryness", "Fine Lines"],
      saved: false
    },
    {
      id: "p2",
      name: "Vitamin C Brightening Cream",
      brand: "DermaScience",
      description: "Pharmaceutical-grade Vitamin C to reduce sun damage and even skin tone while providing antioxidant protection.",
      price: "$65",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=320&auto=format&fit=crop",
      link: "https://example.com/product2",
      concerns: ["Sun Damage", "Dryness"],
      saved: false
    },
    {
      id: "p3",
      name: "Retinol Night Treatment",
      brand: "MediSkin",
      description: "Gentle retinol formulation to reduce fine lines and improve skin texture overnight.",
      price: "$75",
      image: "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?q=80&w=320&auto=format&fit=crop",
      link: "https://example.com/product3",
      concerns: ["Fine Lines", "Sun Damage"],
      saved: false
    },
    {
      id: "p4",
      name: "Balancing Moisturizer",
      brand: "PharmaDerm",
      description: "Oil-free moisturizer that hydrates while maintaining skin's natural balance.",
      price: "$42",
      image: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=320&auto=format&fit=crop",
      link: "https://example.com/product4",
      concerns: ["Dryness", "Oiliness"],
      saved: false
    }
  ]);
  
  // Mock wellness tips
  const [wellnessTips] = useState<WellnessTip[]>([
    {
      id: "w1",
      icon: "💧",
      title: "Stay Hydrated",
      description: "Drink at least 8 glasses of water daily to maintain skin hydration from within."
    },
    {
      id: "w2",
      icon: "🛡️",
      title: "Daily Sunscreen",
      description: "Apply SPF 30+ every day, even when indoors, to prevent further sun damage."
    },
    {
      id: "w3",
      icon: "🥗",
      title: "Antioxidant-Rich Diet",
      description: "Include berries, leafy greens, and nuts in your diet to fight signs of aging."
    },
    {
      id: "w4",
      icon: "💤",
      title: "Quality Sleep",
      description: "Aim for 7-8 hours of quality sleep to allow skin cells to regenerate."
    }
  ]);

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
  
  const handleProductClick = (productLink: string) => {
    // In a real app, this would redirect to an affiliate link
    toast({
      title: "Product selected",
      description: "In a real app, this would open the product page via an affiliate link"
    });
    console.log("Product link clicked:", productLink);
  };

  const getSavedProducts = () => {
    return products.filter(product => product.saved);
  };

  const renderProductCard = (product: Product) => (
    <div key={product.id} className="frosted-card overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="relative h-52">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
          <div className="absolute bottom-2 left-2">
            <div className="flex gap-2 mb-1 flex-wrap">
              {product.concerns.map((concern, i) => (
                <span key={i} className="text-xs px-3 py-1 bg-white/90 rounded-full text-aurascan-dark-grey font-medium">
                  {concern}
                </span>
              ))}
            </div>
          </div>
          
          {/* Save button */}
          <button 
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center transition-all hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              toggleSaveProduct(product.id);
            }}
          >
            {product.saved ? (
              <Bookmark className="h-4 w-4 text-aurascan-dark-grey fill-aurascan-dark-grey" />
            ) : (
              <BookmarkPlus className="h-4 w-4 text-aurascan-dark-grey" />
            )}
          </button>
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <div className="text-xs text-aurascan-dark-grey font-medium mb-1">{product.brand}</div>
          <h3 className="font-clash text-xl font-medium mb-1 text-aurascan-dark-grey">{product.name}</h3>
          <div className="text-aurascan-dark-grey font-medium mb-4">{product.price}</div>
          
          <p className="text-sm text-aurascan-medium-grey mb-6 flex-1">{product.description}</p>
          
          <Button 
            variant="outline" 
            className="w-full flex gap-1 items-center justify-center border-aurascan-dark-grey text-aurascan-dark-grey hover:bg-aurascan-dark-grey/10"
            onClick={() => handleProductClick(product.link)}
          >
            <span>View Product</span>
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full animate-fade-in bg-white">
      <div className="flex-1 overflow-auto pb-6">
        <div className="px-6 py-16 md:px-12">
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex items-center mb-8">
              <DynamicLogo colorScheme="cyan" size="sm" className="mr-4" />
              <h2 className="text-2xl font-clash font-medium text-aurascan-dark-grey">Your Personalized Protocol</h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-aurascan-dark-grey mb-6 leading-tight">
              Curated Just <span className="text-aurascan-dark-grey">For You</span>
            </h1>
            <p className="text-aurascan-medium-grey max-w-2xl leading-relaxed text-lg mb-8">
              Based on your skin analysis, we've designed this personalized regimen to address your unique needs and elevate your skincare routine.
            </p>
          </div>
        </div>

        <Tabs 
          defaultValue="recommendations" 
          className="w-full" 
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <div className="px-6 md:px-12 sticky top-0 bg-white/80 backdrop-blur-xl z-10 py-2">
            <div className="max-w-5xl mx-auto">
              <TabsList className="w-full bg-aurascan-light-grey border border-aurascan-light-grey h-14">
                <TabsTrigger 
                  value="recommendations" 
                  className="flex-1 data-[state=active]:bg-aurascan-dark-grey data-[state=active]:text-white"
                >
                  Recommendations
                </TabsTrigger>
                <TabsTrigger 
                  value="library"
                  className="flex-1 data-[state=active]:bg-aurascan-dark-grey data-[state=active]:text-white"
                >
                  My Product Library
                </TabsTrigger>
                <TabsTrigger 
                  value="wellness" 
                  className="flex-1 data-[state=active]:bg-aurascan-dark-grey data-[state=active]:text-white"
                >
                  Wellness Tips
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          
          <div className="px-6 md:px-12 py-8">
            <div className="max-w-5xl mx-auto">
              <TabsContent value="recommendations" className="focus-visible:outline-none focus-visible:ring-0 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {products.map(product => renderProductCard(product))}
                </div>
              </TabsContent>
              
              <TabsContent value="library" className="focus-visible:outline-none focus-visible:ring-0 space-y-8">
                {getSavedProducts().length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {getSavedProducts().map(product => renderProductCard(product))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Bookmark className="w-12 h-12 mx-auto mb-4 text-aurascan-medium-grey" />
                    <h3 className="text-xl font-medium text-aurascan-dark-grey mb-2">Your Product Library is Empty</h3>
                    <p className="text-aurascan-medium-grey mb-6">Save products you're interested in by clicking the bookmark icon</p>
                    <Button 
                      variant="outline"
                      className="border-aurascan-dark-grey text-aurascan-dark-grey hover:bg-aurascan-dark-grey/10"
                      onClick={() => setActiveTab("recommendations")}
                    >
                      Browse Recommendations
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="wellness" className="focus-visible:outline-none focus-visible:ring-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {wellnessTips.map((tip) => (
                    <div key={tip.id} className="frosted-card p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-aurascan-dark-grey/10 flex items-center justify-center text-xl border border-aurascan-dark-grey/20">
                          {tip.icon}
                        </div>
                        <div>
                          <h3 className="font-clash text-xl font-medium mb-2 text-aurascan-dark-grey">{tip.title}</h3>
                          <p className="text-sm text-aurascan-medium-grey">{tip.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
      
      <div className="p-6 md:p-12 border-t border-aurascan-light-grey">
        <div className="max-w-5xl mx-auto">
          <Button 
            className="w-full md:w-auto bg-aurascan-dark-grey text-white hover:bg-aurascan-dark-grey/90 py-6 px-8"
            onClick={() => {
              // In a real app, this would navigate to a screen to save results or restart
              toast({
                title: "Scan complete",
                description: "Your personalized recommendations are ready!"
              });
            }}
          >
            Save My Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductRecommendations;
