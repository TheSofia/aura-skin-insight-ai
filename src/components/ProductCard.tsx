
import { Button } from "@/components/ui/button";
import { ExternalLink, Bookmark, BookmarkCheck } from "lucide-react";
import { Product } from "@/types/product";
import { useState } from "react";
import { Card } from "@/components/ui/card";

type ProductCardProps = {
  product: Product;
  onToggleSave: (productId: string) => void;
};

const ProductCard = ({ product, onToggleSave }: ProductCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card 
      className="overflow-hidden p-6 transition-all hover:shadow-lg hover:translate-y-[-2px] bg-white border border-beautyagent-light-grey rounded-lg"
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left side: Image if available */}
        {product.imageUrl && (
          <div className="md:w-1/4 flex-shrink-0">
            <div className="relative aspect-square bg-beautyagent-off-white rounded-md overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={`${product.productName} by ${product.brand}`}
                className="absolute inset-0 w-full h-full object-contain p-2"
              />
            </div>
          </div>
        )}
        
        {/* Right side: Product information */}
        <div className="flex-1">
          <div className="text-sm text-beautyagent-dark-grey font-light mb-1">{product.brand}</div>
          <h3 className="font-clash text-xl font-light mb-4 text-beautyagent-dark-grey">{product.productName}</h3>
          
          <div className="mb-4">
            <p className="text-sm font-light text-beautyagent-dark-grey line-clamp-2">{product.useCase}</p>
          </div>
          
          {expanded && (
            <div className="space-y-4 mt-4 text-sm font-light text-beautyagent-dark-grey">
              {/* Key Ingredients */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-beautyagent-medium-grey mb-1">Key Ingredients</h4>
                <div className="flex flex-wrap gap-1">
                  {product.keyIngredients.map((ingredient, index) => (
                    <span key={index} className="inline-block px-2 py-1 bg-beautyagent-off-white rounded-full text-xs">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Best For */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-beautyagent-medium-grey mb-1">Best For</h4>
                <div className="flex flex-wrap gap-1">
                  {product.bestFor.map((benefit, index) => (
                    <span key={index} className="inline-block px-2 py-1 bg-beautyagent-off-white rounded-full text-xs">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Solutions Offered */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-beautyagent-medium-grey mb-1">Solutions</h4>
                <div className="flex flex-wrap gap-1">
                  {product.solutionsOffered.map((solution, index) => (
                    <span key={index} className="inline-block px-2 py-1 bg-beautyagent-off-white rounded-full text-xs">
                      {solution}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* How to Use */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-beautyagent-medium-grey mb-1">How to Use</h4>
                <p className="text-xs">{product.howToUse}</p>
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-4 mt-4">
            {/* Toggle details */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setExpanded(!expanded)}
              className="border-beautyagent-light-grey text-beautyagent-dark-grey hover:bg-beautyagent-light-grey"
            >
              {expanded ? "Show Less" : "Show Details"}
            </Button>
            
            {/* Shop button with region selection if needed */}
            <div className="flex items-center gap-2">
              <Button 
                className="bg-beautyagent-dark-grey hover:bg-beautyagent-deeper-grey text-white flex items-center gap-2 transition-colors"
                onClick={() => window.open(product.links.us, '_blank')}
                size="sm"
              >
                <span>Shop</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
              
              {product.links.eu && (
                <Button 
                  className="bg-beautyagent-deep-blue hover:bg-beautyagent-deep-blue/90 text-white px-2 text-xs h-8 w-8"
                  onClick={() => window.open(product.links.eu, '_blank')}
                  aria-label="Shop EU site"
                  title="EU Store"
                >
                  EU
                </Button>
              )}
            </div>
            
            {/* Save button */}
            <button 
              className="flex items-center justify-center p-2 rounded-full hover:bg-beautyagent-light-grey transition-colors duration-300"
              onClick={() => onToggleSave(product.id)}
              aria-label={product.saved ? "Remove from library" : "Save to library"}
            >
              {product.saved ? (
                <BookmarkCheck className="h-5 w-5 text-beautyagent-dark-grey fill-beautyagent-dark-grey transition-all duration-300" />
              ) : (
                <Bookmark className="h-5 w-5 text-beautyagent-dark-grey transition-all duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
