
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: Product[];
  onToggleSave: (productId: string) => void;
};

const ProductList = ({ products, onToggleSave }: ProductListProps) => {
  return (
    <div className="space-y-6">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onToggleSave={onToggleSave}
        />
      ))}
    </div>
  );
};

export default ProductList;
