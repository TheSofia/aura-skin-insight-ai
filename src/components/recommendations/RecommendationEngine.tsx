
import React, { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { useToast } from '@/hooks/use-toast';
import RecommendationsCarousel from './RecommendationsCarousel';
import SkinDescriptionInput from '@/components/SkinDescriptionInput';
import TypingIndicator from '@/components/TypingIndicator';
import { motion } from 'framer-motion';
import { useProductFiltering } from '@/hooks/useProductFiltering';
import { initialProducts } from '@/data/initialProducts';

interface RecommendationEngineProps {
  photoMode?: boolean;
  initialDescription?: string;
  photoUrl?: string;
}

const RecommendationEngine = ({ 
  photoMode = false, 
  initialDescription = '', 
  photoUrl 
}: RecommendationEngineProps) => {
  const { toast } = useToast();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  const {
    filteredProducts,
    skinDescription,
    isProcessing,
    hasFiltered,
    isTyping,
    matchedKeywords,
    handleSkinDescriptionChange,
    handleProcessSkinDescription,
    toggleSaveProduct,
    getSavedProducts,
    getRecommendationReasons
  } = useProductFiltering(initialProducts);

  // If initialized with a description, process it automatically
  useEffect(() => {
    if (initialDescription && isInitialLoad) {
      const timer = setTimeout(() => {
        handleProcessSkinDescription(initialDescription);
        setIsInitialLoad(false);
      }, 800);
      return () => clearTimeout(timer);
    }
    
    // Show welcome toast on initial load
    if (isInitialLoad && !initialDescription) {
      setTimeout(() => {
        toast({
          title: "Welcome to BeautyAgent",
          description: photoMode 
            ? "We're analyzing your skin photo to provide personalized recommendations" 
            : "Describe your skin concerns to get personalized product recommendations"
        });
        setIsInitialLoad(false);
      }, 800);
    }
  }, [isInitialLoad, initialDescription, photoMode, toast, handleProcessSkinDescription]);

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1]
      }
    }
  };

  return (
    <div className="flex flex-col h-full animate-fade-in">
      <div className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {photoMode ? (
            <div className="mb-8 text-center">
              {photoUrl && (
                <div className="mb-6 inline-block rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={photoUrl} 
                    alt="Your skin analysis" 
                    className="max-h-40 object-cover"
                  />
                </div>
              )}
              <motion.h2 
                className="text-2xl md:text-3xl font-clash font-light text-beautyagent-dark-grey mb-4"
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                Your Personalized Skin Protocol
              </motion.h2>
              {initialDescription && (
                <p className="text-beautyagent-medium-grey">
                  Based on your skin analysis: <span className="italic">{initialDescription}</span>
                </p>
              )}
            </div>
          ) : (
            <div className="max-w-5xl mx-auto text-center mb-8">
              <motion.h2 
                className="text-2xl md:text-3xl font-clash font-light text-beautyagent-dark-grey mb-6"
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                Tailored For Your Glow
              </motion.h2>
              
              {/* Manual Input Text Area */}
              <SkinDescriptionInput 
                value={skinDescription}
                onChange={handleSkinDescriptionChange}
                onSubmit={() => handleProcessSkinDescription()}
                isProcessing={isProcessing}
              />
              
              {/* Live typing indicator component */}
              <TypingIndicator visible={isTyping && !isProcessing} />
            </div>
          )}
        </div>
      </div>

      <div className="px-6 md:px-12 py-2 flex-1">
        <div className="max-w-6xl mx-auto">
          {isProcessing ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-12 h-12 mb-4">
                <div className="w-full h-full rounded-full border-2 border-t-beautyagent-accent border-r-beautyagent-accent border-b-transparent border-l-transparent animate-spin"></div>
              </div>
              <p className="text-beautyagent-dark-grey font-light">Analyzing your skin needs...</p>
            </div>
          ) : hasFiltered ? (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <RecommendationsCarousel 
                  products={filteredProducts}
                  recommendationReasons={getRecommendationReasons()}
                  onSaveProduct={toggleSaveProduct}
                />
              </motion.div>
              
              {/* Matched keywords display */}
              {matchedKeywords.length > 0 && (
                <motion.div
                  className="mt-8 p-4 bg-white/80 rounded-lg border border-beautyagent-violet-dust/10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-sm font-medium text-beautyagent-dark-grey mb-2">Why we recommended these products:</h3>
                  <div className="flex flex-wrap gap-2">
                    {matchedKeywords.slice(0, 8).map((keyword, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 rounded-full bg-beautyagent-plasma-white-light border border-beautyagent-violet-dust/20"
                      >
                        {keyword}
                      </span>
                    ))}
                    {matchedKeywords.length > 8 && (
                      <span className="text-xs text-beautyagent-medium-grey">+{matchedKeywords.length - 8} more</span>
                    )}
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            <div className="text-center py-8">
              {!photoMode && (
                <p className="text-beautyagent-medium-grey">
                  Describe your skin concerns above to get personalized recommendations.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendationEngine;
