
import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
  onToggleSave: (id: string) => void;
  isOpen: boolean;
}

const ProductDetail = ({ product, onClose, onToggleSave, isOpen }: ProductDetailProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) onClose();
    }}>
      <DialogContent className="max-w-3xl w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogTitle className="pr-8 text-xl md:text-2xl font-normal text-beautyagent-dark-grey">
          {product.productName}
        </DialogTitle>
        <DialogDescription className="text-beautyagent-medium-grey">
          {product.brand}
        </DialogDescription>
        
        <DialogClose className="absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100">
          <X size={18} />
        </DialogClose>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Product Image */}
          <div>
            <AspectRatio ratio={1/1} className="bg-gray-50 rounded-lg overflow-hidden">
              <div className={`absolute inset-0 transition-opacity duration-300 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
                {/* Placeholder/skeleton */}
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
              </div>
              <img 
                src={product.imageUrl || '/placeholder.svg'} 
                alt={product.productName}
                className="object-cover w-full h-full"
                onLoad={() => setImageLoaded(true)}
              />
            </AspectRatio>
          </div>
          
          {/* Product Details */}
          <div className="space-y-4">
            {/* Key Ingredients */}
            <div>
              <h4 className="text-base font-medium text-beautyagent-dark-grey mb-1">Key Ingredients</h4>
              <p className="text-beautyagent-medium-grey">
                {product.keyIngredients.join(", ")}
              </p>
            </div>
            
            {/* Best For */}
            <div>
              <h4 className="text-base font-medium text-beautyagent-dark-grey mb-1">Best For</h4>
              <div className="flex flex-wrap gap-1 mt-1">
                {product.bestFor.map((item, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Solutions Offered */}
            <div>
              <h4 className="text-base font-medium text-beautyagent-dark-grey mb-1">Solutions</h4>
              <ul className="list-disc pl-5 text-beautyagent-medium-grey">
                {product.solutionsOffered.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
            
            {/* How To Use */}
            {product.howToUse && (
              <div>
                <h4 className="text-base font-medium text-beautyagent-dark-grey mb-1">How To Use</h4>
                <p className="text-beautyagent-medium-grey">{product.howToUse}</p>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button 
                variant="outline"
                onClick={() => onToggleSave(product.id)}
                className={product.saved ? "border-beautyagent-accent text-beautyagent-accent" : ""}
              >
                {product.saved ? "Remove from Library" : "Add to Library"}
              </Button>
              
              <div className="flex gap-2">
                {product.links.us && (
                  <a 
                    href={product.links.us} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 bg-beautyagent-accent text-white rounded-md hover:bg-beautyagent-dark-orange"
                  >
                    <span>Shop US</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                {product.links.eu && (
                  <a 
                    href={product.links.eu} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 px-4 py-2 bg-beautyagent-accent text-white rounded-md hover:bg-beautyagent-dark-orange"
                  >
                    <span>Shop EU</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
