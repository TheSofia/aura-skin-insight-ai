
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Product } from "@/types/product";

type ProductLibrarySummaryProps = {
  savedProducts: Product[];
};

const ProductLibrarySummary = ({ savedProducts }: ProductLibrarySummaryProps) => {
  const { toast } = useToast();
  
  return (
    <div className="p-6 md:p-8 border-t border-beautyagent-light-grey">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div>
            <h3 className="text-base font-light text-beautyagent-dark-grey">
              {savedProducts.length === 0 
                ? "Library" 
                : `Library (${savedProducts.length})`}
            </h3>
          </div>
          
          {savedProducts.length > 0 && (
            <Button 
              className="bg-beautyagent-dark-grey text-white hover:bg-beautyagent-deeper-grey transition-all"
              onClick={() => {
                toast({
                  title: "View saved products",
                  description: "In a complete app, this would navigate to your saved products library."
                });
              }}
            >
              View Library
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductLibrarySummary;
