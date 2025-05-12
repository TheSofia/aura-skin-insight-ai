
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
          <div className="px-6 py-4 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-sm z-10">
            <TabsList className="w-full">
              <TabsTrigger value="products" className="flex-1">Products</TabsTrigger>
              <TabsTrigger value="wellness" className="flex-1">Wellness Tips</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="products" className="px-6 pt-6 focus-visible:outline-none focus-visible:ring-0">
            <div className="space-y-6 max-w-md mx-auto">
              <div className="bg-gradient-to-br from-aurascan-purple/10 to-aurascan-soft-blue/10 rounded-xl p-5">
                <h2 className="text-lg font-medium mb-2">Your Personalized Recommendations</h2>
                <p className="text-sm text-aurascan-gray">
                  Based on your skin analysis, we've selected these pharmaceutical-grade products to address your specific concerns.
                </p>
              </div>
              
              <div className="space-y-4">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl overflow-hidden border border-gray-100">
                    <div className="flex">
                      <div className="w-1/3 h-32">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <div className="text-xs text-aurascan-gray">{product.brand}</div>
                        <h3 className="font-medium mb-1">{product.name}</h3>
                        <div className="text-aurascan-purple font-medium mb-2">{product.price}</div>
                        <div className="flex gap-1 mb-2">
                          {product.concerns.map((concern, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 bg-aurascan-soft-purple/20 rounded-full text-aurascan-purple">
                              {concern}
                            </span>
                          ))}
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="mt-1 w-full text-xs flex gap-1 items-center justify-center border-aurascan-purple text-aurascan-purple hover:bg-aurascan-soft-purple/10"
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
            <div className="space-y-6 max-w-md mx-auto">
              <div className="bg-gradient-to-br from-aurascan-soft-pink/10 to-aurascan-soft-blue/10 rounded-xl p-5">
                <h2 className="text-lg font-medium mb-2">Wellness Tips For Your Skin</h2>
                <p className="text-sm text-aurascan-gray">
                  Complement your skincare routine with these lifestyle recommendations for healthier skin.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {wellnessTips.map((tip) => (
                  <div key={tip.id} className="bg-white rounded-xl p-5 border border-gray-100">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-aurascan-soft-purple/20 flex items-center justify-center text-xl mr-4">
                        {tip.icon}
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{tip.title}</h3>
                        <p className="text-sm text-aurascan-gray">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="p-6 border-t border-gray-100">
        <div className="max-w-md mx-auto">
          <Button 
            className="w-full bg-aurascan-purple hover:bg-aurascan-purple/90 text-white"
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
