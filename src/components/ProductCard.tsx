
import { Button } from "@/components/ui/button";
import { ExternalLink, Bookmark, BookmarkCheck } from "lucide-react";
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  onToggleSave: (productId: string) => void;
};

const ProductCard = ({ product, onToggleSave }: ProductCardProps) => {
  return (
    <div 
      className="frosted-card overflow-hidden p-6 transition-all hover:shadow-lg hover:translate-y-[-2px]"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="text-sm text-aurascan-dark-grey font-light mb-1">{product.brand}</div>
          <h3 className="font-clash text-xl font-light mb-4 text-aurascan-dark-grey">{product.name}</h3>
          
          <div className="flex items-center gap-4">
            <Button 
              className="bg-aurascan-dark-grey hover:bg-aurascan-deeper-grey text-white flex items-center gap-2 transition-colors"
              onClick={() => window.open(product.url, '_blank')}
            >
              <span>Shop</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
            
            <button 
              className="flex items-center justify-center p-2 rounded-full hover:bg-aurascan-light-grey transition-colors duration-300"
              onClick={() => onToggleSave(product.id)}
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
  );
};

export default ProductCard;
