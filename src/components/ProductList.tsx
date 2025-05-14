import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

type ProductListProps = {
  products: Product[];
  onToggleSave: (productId: string) => void;
  isFiltered: boolean;
  matchedKeywords?: string[];
};

const ProductList = ({ products, onToggleSave, isFiltered, matchedKeywords = [] }: ProductListProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [sortOption, setSortOption] = useState<string>("relevance");
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(products);

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

  // Handle sorting
  useEffect(() => {
    let sortedProducts = [...products];
    
    switch (sortOption) {
      case "brand":
        sortedProducts.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      case "name":
        sortedProducts.sort((a, b) => a.productName.localeCompare(b.productName));
        break;
      // For relevance - we keep the order as-is since the filteredProducts are already sorted by relevance
      default:
        break;
    }
    
    setDisplayedProducts(sortedProducts);
  }, [products, sortOption]);

  // Group products by brand for better organization when numerous
  const getBrandGroups = () => {
    const groups: Record<string, Product[]> = {};
    
    displayedProducts.forEach(product => {
      if (!groups[product.brand]) {
        groups[product.brand] = [];
      }
      groups[product.brand].push(product);
    });
    
    return groups;
  };

  const brandGroups = getBrandGroups();
  const shouldGroupByBrand = displayedProducts.length > 12 && sortOption === "brand";

  return (
    <div className="space-y-6" ref={listRef}>
      {displayedProducts.length === 0 ? (
        <div className="p-8 text-center">
          <div className="flex flex-col items-center justify-center">
            <Search className="h-12 w-12 text-gray-300 mb-4" />
            <p className="text-beautyagent-dark-grey font-light">
              No products match your description. Try using different keywords.
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Filter info and sort controls */}
          <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
            <div>
              {isFiltered && matchedKeywords.length > 0 && (
                <div className="p-2 rounded-md">
                  <p className="text-sm text-beautyagent-dark-grey">
                    <span className="font-medium">Found {displayedProducts.length} products</span> based on:&nbsp;
                    {matchedKeywords.slice(0, 5).map((keyword, i) => (
                      <span key={i} className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        {keyword}
                      </span>
                    ))}
                    {matchedKeywords.length > 5 && <span className="text-xs">and {matchedKeywords.length - 5} more terms</span>}
                  </p>
                </div>
              )}
            </div>
            
            <div className="flex items-center">
              <span className="text-sm text-beautyagent-dark-grey mr-2">Sort by:</span>
              <div className="relative inline-block">
                <select
                  value={sortOption}
                  onChange={e => setSortOption(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-md py-1 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-beautyagent-accent"
                >
                  <option value="relevance">Relevance</option>
                  <option value="brand">Brand</option>
                  <option value="name">Product Name</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
          
          {/* Product cards */}
          {shouldGroupByBrand ? (
            // Grouped by brand view for better organization when many products
            Object.entries(brandGroups).map(([brand, brandProducts]) => (
              <div key={brand} className="mb-8">
                <h2 className="text-xl font-light text-beautyagent-dark-grey mb-4 border-b pb-2">{brand}</h2>
                <div className="space-y-6">
                  {brandProducts.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onToggleSave={onToggleSave}
                      matchedKeywords={matchedKeywords}
                    />
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Standard list view
            <div className="space-y-6">
              {displayedProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onToggleSave={onToggleSave}
                  matchedKeywords={matchedKeywords}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
