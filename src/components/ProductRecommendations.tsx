
import { useState } from 'react';
import DynamicLogo from './DynamicLogo';
import ProductList from './ProductList';
import ProductLibrarySummary from './ProductLibrarySummary';
import SkinDescriptionInput from './SkinDescriptionInput';
import TypingIndicator from './TypingIndicator';
import { initialProducts } from '@/data/initialProducts';
import { useProductFiltering } from '@/hooks/useProductFiltering';
import './TypingIndicator.css';

type ProductRecommendationsProps = {
  isManualPath?: boolean;
};

const ProductRecommendations = ({ isManualPath = false }: ProductRecommendationsProps) => {
  const {
    filteredProducts,
    skinDescription,
    isProcessing,
    hasFiltered,
    isTyping,
    handleSkinDescriptionChange,
    handleProcessSkinDescription,
    toggleSaveProduct,
    getSavedProducts
  } = useProductFiltering(initialProducts);

  return (
    <div className="flex flex-col h-full animate-fade-in bg-white">
      <div className="flex-1 overflow-auto pb-6">
        <div className="p-8 md:p-12 flex justify-center">
          <DynamicLogo colorScheme="refined" animationStyle="cellular" size="md" showText={true} />
        </div>
        
        <div className="px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-clash font-light text-beautyagent-dark-grey mb-8">
              Your Personalized Protocol
            </h1>
            
            {/* Manual Input Text Area - always visible in this version */}
            <SkinDescriptionInput 
              value={skinDescription}
              onChange={handleSkinDescriptionChange}
              onSubmit={handleProcessSkinDescription}
              isProcessing={isProcessing}
            />
            
            {/* Live typing indicator component */}
            <TypingIndicator visible={isTyping && !isProcessing} />
          </div>
        </div>

        <div className="px-6 md:px-12 py-8">
          <div className="max-w-3xl mx-auto">
            {isProcessing ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-12 h-12 mb-4">
                  <div className="w-full h-full rounded-full border-2 border-t-beautyagent-accent border-r-beautyagent-accent border-b-transparent border-l-transparent animate-spin"></div>
                </div>
                <p className="text-beautyagent-dark-grey font-light">Analyzing your skin needs...</p>
              </div>
            ) : (
              <ProductList 
                products={filteredProducts}
                onToggleSave={toggleSaveProduct}
                isFiltered={hasFiltered}
              />
            )}
          </div>
        </div>
      </div>
      
      <ProductLibrarySummary savedProducts={getSavedProducts()} />
    </div>
  );
};

export default ProductRecommendations;
