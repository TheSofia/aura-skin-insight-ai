
import React, { useEffect } from 'react';
import { Product } from '@/types/product';
import RecommendationCard from './RecommendationCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { AnimatePresence, motion } from 'framer-motion';

interface RecommendationsCarouselProps {
  products: Product[];
  recommendationReasons: Record<string, string>;
  onSaveProduct: (id: string) => void;
  isLoading?: boolean;
}

const RecommendationsCarousel = ({
  products,
  recommendationReasons,
  onSaveProduct,
  isLoading = false
}: RecommendationsCarouselProps) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12">
            <div className="w-full h-full rounded-full border-2 border-t-beautyagent-accent border-r-beautyagent-accent border-b-transparent border-l-transparent animate-spin"></div>
          </div>
          <p className="text-beautyagent-dark-grey font-light">Personalizing recommendations for you...</p>
        </div>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="text-center py-8">
        <p className="text-beautyagent-dark-grey">No recommendations found. Try providing more information about your skin needs.</p>
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: products.length > 3
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        <AnimatePresence>
          {products.map((product, index) => (
            <CarouselItem 
              key={product.id} 
              className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.06, // 60ms staggered delay
                  ease: [0.19, 1, 0.22, 1] // cubic-bezier for elegant easing
                }}
              >
                <RecommendationCard 
                  product={product} 
                  reason={recommendationReasons[product.id] || 'This product matches your skin needs'} 
                  onSave={onSaveProduct} 
                />
              </motion.div>
            </CarouselItem>
          ))}
        </AnimatePresence>
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex -left-4 bg-white/80 hover:bg-white border-beautyagent-violet-dust/20" />
      <CarouselNext className="hidden sm:flex -right-4 bg-white/80 hover:bg-white border-beautyagent-violet-dust/20" />
    </Carousel>
  );
};

export default RecommendationsCarousel;
