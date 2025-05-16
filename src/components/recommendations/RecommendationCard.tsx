
import React from 'react';
import { Product } from '@/types/product';
import { RippleButton } from '@/components/ui/ripple-button';
import { Heart, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface RecommendationCardProps {
  product: Product;
  reason: string;
  onSave: (id: string) => void;
}

const RecommendationCard = ({ product, reason, onSave }: RecommendationCardProps) => {
  const { toast } = useToast();
  const imageUrl = product.imageUrl || '/placeholder.svg';

  const handleSave = () => {
    onSave(product.id);
    toast({
      title: product.saved ? "Removed from your protocol" : "Added to your protocol",
      description: product.saved 
        ? `${product.productName} has been removed from your personalized protocol` 
        : `${product.productName} has been added to your personalized protocol`,
    });
  };

  return (
    <Card 
      className={cn(
        "glass-card hover:glass-card-highlight transition-all duration-300",
        "w-full max-w-xs h-full flex flex-col"
      )}
    >
      {/* Image Container */}
      <div className="p-4">
        <AspectRatio ratio={1/1} className="bg-gray-50/40 rounded-md overflow-hidden">
          <img 
            src={imageUrl} 
            alt={product.productName}
            className="object-cover w-full h-full transform transition-transform hover:scale-105 duration-300"
          />
        </AspectRatio>
      </div>
      
      {/* Content */}
      <div className="flex-1 p-4 pt-0 flex flex-col">
        <div className="flex flex-row justify-between items-start mb-1">
          <div>
            <h3 className="font-medium text-lg text-beautyagent-dark-grey">
              {product.productName}
            </h3>
            <p className="text-beautyagent-medium-grey font-light">
              {product.brand}
            </p>
          </div>
          <button 
            onClick={handleSave}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100/80 transition-colors"
            aria-label={product.saved ? "Remove from protocol" : "Add to protocol"}
          >
            <Heart 
              size={20} 
              className={cn(
                "transition-colors",
                product.saved ? "fill-red-500 text-red-500" : "text-gray-400" 
              )}
            />
          </button>
        </div>
        
        <div className="mt-1 flex-1">
          <p className="text-sm text-beautyagent-dark-grey font-light line-clamp-2">
            {product.useCase}
          </p>
        </div>
        
        {/* Recommendation Reason */}
        <div className="mt-3 p-2 bg-beautyagent-plasma-white-light/60 rounded-md border border-beautyagent-violet-dust/10">
          <p className="text-xs text-beautyagent-dark-grey italic">
            <span className="font-medium">Because:</span> {reason}
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="mt-4 flex gap-2 justify-between">
          <RippleButton 
            className="flex flex-1 items-center justify-center gap-1 py-2 bg-beautyagent-deep-blue text-white text-sm rounded-md hover:bg-beautyagent-deep-blue-dark"
            onClick={handleSave}
          >
            {product.saved ? 'Remove from Plan' : 'Add to My Plan'}
          </RippleButton>
          
          {product.links.us && (
            <RippleButton 
              className="flex items-center gap-1 px-3 py-2 bg-beautyagent-accent text-white text-sm rounded-md hover:bg-beautyagent-accent-dark"
              onClick={() => window.open(product.links.us, '_blank')}
            >
              <span>Shop</span>
              <ExternalLink size={14} />
            </RippleButton>
          )}
        </div>
      </div>
    </Card>
  );
};

export default RecommendationCard;
