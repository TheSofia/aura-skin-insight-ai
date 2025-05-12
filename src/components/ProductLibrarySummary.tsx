
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Product } from "@/types/product";

type ProductLibrarySummaryProps = {
  savedProducts: Product[];
};

const ProductLibrarySummary = ({ savedProducts }: ProductLibrarySummaryProps) => {
  const { toast } = useToast();
  
  return (
    <div className="p-6 md:p-12 border-t border-aurascan-light-grey">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-aurascan-dark-grey mb-1">Your Product Library</h3>
            <p className="text-aurascan-medium-grey text-sm font-light">
              {savedProducts.length === 0 
                ? "You haven't saved any products yet" 
                : `You have ${savedProducts.length} saved products`}
            </p>
          </div>
          
          {savedProducts.length > 0 && (
            <Button 
              className="bg-aurascan-dark-grey text-white hover:bg-aurascan-dark-grey/90 transition-all duration-300"
              onClick={() => {
                toast({
                  title: "View saved products",
                  description: "In a complete app, this would navigate to your saved products library."
                });
              }}
            >
              View Saved Products
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductLibrarySummary;
