
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import { useEffect, useRef } from "react";

type ProductListProps = {
  products: Product[];
  onToggleSave: (productId: string) => void;
  isFiltered: boolean;
};

const ProductList = ({ products, onToggleSave, isFiltered }: ProductListProps) => {
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
        products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onToggleSave={onToggleSave}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
