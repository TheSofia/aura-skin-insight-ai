
import { useState } from 'react';
import { Product } from '@/types/product';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProductCardProps {
  product: Product;
  onToggleSave: (id: string) => void;
  matchedKeywords?: string[];
}

const ProductCard = ({ product, onToggleSave, matchedKeywords = [] }: ProductCardProps) => {
  const [expanded, setExpanded] = useState(false);
  
  // Display image if available, otherwise show placeholder
  const imageUrl = product.imageUrl || '/placeholder.svg';
  
  // Highlight text if it contains any of the matched keywords
  const highlightIfMatch = (text: string) => {
    if (matchedKeywords.length === 0) return text;
    
    // Check if any keywords are found in this text (case insensitive)
    const lowercaseText = text.toLowerCase();
    const isMatched = matchedKeywords.some(keyword => 
      lowercaseText.includes(keyword.toLowerCase())
    );
    
    return isMatched ? 
      <span className="bg-yellow-100 px-1 rounded">{text}</span> : 
      text;
  };

  return (
    <div className={cn(
      "border rounded-lg overflow-hidden transition-all duration-300",
      expanded ? "shadow-md" : "shadow-sm hover:shadow-md"
    )}>
      <div className="flex flex-col md:flex-row">
        {/* Image Container */}
        <div className="md:w-1/3 lg:w-1/4 p-4 flex-shrink-0">
          <AspectRatio ratio={1/1} className="bg-gray-100 rounded-md overflow-hidden">
            <img 
              src={imageUrl} 
              alt={product.productName}
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
        
        {/* Content */}
        <div className="flex-1 p-4 md:pl-0">
          <div className="flex flex-row justify-between items-start">
            <div>
              <h3 className="font-medium text-lg text-beautyagent-dark-grey">
                {highlightIfMatch(product.productName)}
              </h3>
              <p className="text-beautyagent-medium-grey">
                {product.brand}
              </p>
            </div>
            <button 
              onClick={() => onToggleSave(product.id)}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100"
              aria-label={product.saved ? "Remove from library" : "Add to library"}
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
          
          <div className="mt-3">
            <p className="text-sm text-beautyagent-dark-grey">
              {highlightIfMatch(product.useCase)}
            </p>
          </div>
          
          {/* Best for badges */}
          <div className="mt-3 flex flex-wrap gap-1">
            {product.bestFor.slice(0, 3).map((item, i) => (
              <span key={i} className={cn(
                "text-xs px-2 py-1 rounded-full",
                matchedKeywords.some(kw => item.toLowerCase().includes(kw.toLowerCase())) 
                  ? "bg-teal-100 text-teal-800" 
                  : "bg-gray-100 text-gray-800"
              )}>
                {item}
              </span>
            ))}
            {product.bestFor.length > 3 && (
              <span className="text-xs text-gray-500">+{product.bestFor.length - 3} more</span>
            )}
          </div>
          
          {/* Expandable details */}
          {expanded && (
            <div className="mt-4 pt-4 border-t animate-fade-in">
              {/* Key Ingredients */}
              <div className="mb-3">
                <h4 className="text-sm font-medium text-beautyagent-dark-grey">Key Ingredients:</h4>
                <p className="text-sm text-beautyagent-medium-grey">
                  {product.keyIngredients.map((ingredient, i) => (
                    <span key={i}>
                      {i > 0 && ", "}
                      {highlightIfMatch(ingredient)}
                    </span>
                  ))}
                </p>
              </div>
              
              {/* Solutions Offered */}
              <div className="mb-3">
                <h4 className="text-sm font-medium text-beautyagent-dark-grey">Solutions:</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {product.solutionsOffered.map((solution, i) => (
                    <span 
                      key={i}
                      className={cn(
                        "text-xs px-2 py-1 rounded-full",
                        matchedKeywords.some(kw => solution.toLowerCase().includes(kw.toLowerCase())) 
                          ? "bg-blue-100 text-blue-800" 
                          : "bg-gray-100 text-gray-800"
                      )}
                    >
                      {solution}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* How to Use */}
              <div className="mb-3">
                <h4 className="text-sm font-medium text-beautyagent-dark-grey">How to Use:</h4>
                <p className="text-sm text-beautyagent-medium-grey">{product.howToUse}</p>
              </div>
              
              {/* Shop links */}
              <div className="mt-4 flex gap-2">
                {product.links.us && (
                  <a 
                    href={product.links.us} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-beautyagent-accent text-white text-sm rounded hover:bg-beautyagent-accent-dark"
                  >
                    Shop US
                  </a>
                )}
                {product.links.eu && (
                  <a 
                    href={product.links.eu} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-1 bg-beautyagent-accent text-white text-sm rounded hover:bg-beautyagent-accent-dark"
                  >
                    Shop EU
                  </a>
                )}
              </div>
            </div>
          )}
          
          {/* Show More/Less button */}
          <button 
            className="mt-3 text-sm text-beautyagent-accent hover:text-beautyagent-accent-dark"
            onClick={() => setExpanded(prev => !prev)}
          >
            {expanded ? "Show Less" : "Show Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
