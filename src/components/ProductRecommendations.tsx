
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type Product = {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: string;
  image: string;
  link: string;
  concerns: string[];
};

type WellnessTip = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const ProductRecommendations = () => {
  const { toast } = useToast();
  
  // Mock product data
  const [products] = useState<Product[]>([
    {
      id: "p1",
      name: "Hydrating Serum",
      brand: "PharmaDerm",
      description: "Advanced hydrating formula with hyaluronic acid to replenish moisture and strengthen the skin barrier.",
      price: "$48",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=320&auto=format&fit=crop",
      link: "https://example.com/product1",
      concerns: ["Dryness", "Fine Lines"]
    },
    {
      id: "p2",
      name: "Vitamin C Brightening Cream",
      brand: "DermaScience",
      description: "Pharmaceutical-grade Vitamin C to reduce sun damage and even skin tone while providing antioxidant protection.",
      price: "$65",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=320&auto=format&fit=crop",
      link: "https://example.com/product2",
      concerns: ["Sun Damage", "Dryness"]
    },
    {
      id: "p3",
      name: "Retinol Night Treatment",
      brand: "MediSkin",
      description: "Gentle retinol formulation to reduce fine lines and improve skin texture overnight.",
      price: "$75",
      image: "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?q=80&w=320&auto=format&fit=crop",
      link: "https://example.com/product3",
      concerns: ["Fine Lines", "Sun Damage"]
    },
    {
      id: "p4",
      name: "Balancing Moisturizer",
      brand: "PharmaDerm",
      description: "Oil-free moisturizer that hydrates while maintaining skin's natural balance.",
      price: "$42",
      image: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=320&auto=format&fit=crop",
      link: "https://example.com/product4",
      concerns: ["Dryness", "Oiliness"]
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
  
  const handleProductClick = (productLink: string) => {
    // In a real app, this would redirect to an affiliate link
    toast({
      title: "Product selected",
      description: "In a real app, this would open the product page via an affiliate link"
    });
    console.log("Product link clicked:", productLink);
  };

  return (
    <div className="flex flex-col h-full animate-fade-in">
      <div className="flex-1 overflow-auto pb-6">
        <Tabs defaultValue="products" className="w-full">
          <div className="px-6 py-4 border-b border-aurascan-purple/20 sticky top-0 bg-aurascan-deep-space/80 backdrop-blur-xl z-10">
            <TabsList className="w-full bg-aurascan-cosmic-blue/50 border border-aurascan-purple/20">
              <TabsTrigger 
                value="products" 
                className="flex-1 data-[state=active]:bg-aurascan-purple data-[state=active]:text-white"
              >
                Products
              </TabsTrigger>
              <TabsTrigger 
                value="wellness" 
                className="flex-1 data-[state=active]:bg-aurascan-auroral-green data-[state=active]:text-aurascan-deep-space"
              >
                Wellness Tips
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="products" className="px-6 pt-6 focus-visible:outline-none focus-visible:ring-0">
            <div className="space-y-8 max-w-md mx-auto">
              <div className="cosmic-card p-6">
                <h2 className="text-xl font-clash font-medium mb-2 text-white">Your Personalized Recommendations</h2>
                <p className="text-sm text-gray-300">
                  Based on your skin analysis, we've selected these pharmaceutical-grade products to address your specific concerns.
                </p>
              </div>
              
              <div className="space-y-6">
                {products.map((product) => (
                  <div key={product.id} className="cosmic-card overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/3 h-40 md:h-auto relative">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-aurascan-deep-space/80 via-transparent to-transparent md:bg-gradient-to-t"></div>
                      </div>
                      <div className="w-full md:w-2/3 p-5">
                        <div className="text-xs text-aurascan-gray">{product.brand}</div>
                        <h3 className="font-clash text-lg font-medium mb-1 text-white">{product.name}</h3>
                        <div className="text-aurascan-purple font-medium mb-3">{product.price}</div>
                        <div className="flex gap-2 mb-3 flex-wrap">
                          {product.concerns.map((concern, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-aurascan-purple/20 rounded-full text-aurascan-purple">
                              {concern}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-300 mb-4">{product.description}</p>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-full text-xs flex gap-1 items-center justify-center border-aurascan-purple text-aurascan-purple hover:bg-aurascan-purple/20"
                          onClick={() => handleProductClick(product.link)}
                        >
                          <span>View Product</span>
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="wellness" className="px-6 pt-6 focus-visible:outline-none focus-visible:ring-0">
            <div className="space-y-8 max-w-md mx-auto">
              <div className="cosmic-card p-6">
                <h2 className="text-xl font-clash font-medium mb-2 text-white">Wellness Tips For Your Skin</h2>
                <p className="text-sm text-gray-300">
                  Complement your skincare routine with these lifestyle recommendations for healthier skin.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-5">
                {wellnessTips.map((tip) => (
                  <div key={tip.id} className="cosmic-card p-5">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-aurascan-purple/20 flex items-center justify-center text-xl mr-4 border border-aurascan-purple/40">
                        {tip.icon}
                      </div>
                      <div>
                        <h3 className="font-clash font-medium mb-1 text-white">{tip.title}</h3>
                        <p className="text-sm text-gray-300">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="p-6 border-t border-aurascan-purple/20">
        <div className="max-w-md mx-auto">
          <Button 
            className="w-full cosmic-button py-6"
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
