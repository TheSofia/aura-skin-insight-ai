
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import { useEffect, useRef } from "react";

type ProductListProps = {
  products: Product[];
  onToggleSave: (productId: string) => void;
  isFiltered: boolean;
  matchedKeywords?: string[];
};

const ProductList = ({ products, onToggleSave, isFiltered, matchedKeywords = [] }: ProductListProps) => {
  const listRef = useRef<HTMLDivElement>(null);

  // Add animation effect when products are filtered
  useEffect(() => {
    if (isFiltered && listRef.current) {
      listRef.current.classList.add("animate-fade-in");
      setTimeout(() => {
        if (listRef.current) {
          listRef.current.classList.remove("animate-fade-in");
        }
      }, 500);
    }
  }, [products, isFiltered]);

  return (
    <div className="space-y-6" ref={listRef}>
      {products.length === 0 ? (
        <div className="p-8 text-center">
          <p className="text-beautyagent-dark-grey font-light">
            No products match your description. Try using different keywords.
          </p>
        </div>
      ) : (
        <>
          {isFiltered && matchedKeywords.length > 0 && (
            <div className="mb-4 p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-beautyagent-dark-grey">
                Showing products based on: {matchedKeywords.slice(0, 5).map((keyword, i) => (
                  <span key={i} className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                    {keyword}
                  </span>
                ))}
                {matchedKeywords.length > 5 && <span className="text-xs">and {matchedKeywords.length - 5} more terms</span>}
              </p>
            </div>
          )}
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onToggleSave={onToggleSave}
              matchedKeywords={matchedKeywords}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductList;
