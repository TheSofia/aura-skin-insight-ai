
import { useState } from "react";
import Header from "@/components/Header";
import ShopHero from "@/components/shop/ShopHero";
import ProductFilters from "@/components/shop/ProductFilters";
import ShopAssistant from "@/components/shop/ShopAssistant";
import ProductList from "@/components/ProductList";
import { initialProducts } from "@/data/initialProducts";
import ProductLibrarySummary from "@/components/ProductLibrarySummary";
import { useProductFiltering } from "@/hooks/useProductFiltering";

const ShopPage = () => {
  const { 
    products, 
    filteredProducts,
    hasFiltered,
    matchedKeywords,
    toggleSaveProduct,
    handleProcessSkinDescription,
    getSavedProducts
  } = useProductFiltering(initialProducts);
  
  // Get saved products
  const savedProducts = getSavedProducts();

  return (
    <div className="min-h-screen bg-white">
      <Header currentStep={0} />
      
      <main className="px-4 pt-24 pb-16 md:px-6 lg:px-8">
        {/* Hero Section */}
        <ShopHero />
        
        {/* AI Assistant */}
        <ShopAssistant 
          onSubmit={handleProcessSkinDescription}
          onClear={() => handleProcessSkinDescription("")}
          resultCount={filteredProducts.length}
          isFiltered={hasFiltered}
        />
        
        {/* Content Grid */}
        <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ProductFilters />
          </div>
          
          {/* Products Grid */}
          <div className="lg:col-span-3">
            {hasFiltered && (
              <div className="mb-6 animate-fade-in">
                <h2 className="text-2xl font-light text-gray-800 mb-2 dermaagent-headline">
                  {filteredProducts.length > 0 ? "Recommended Products" : "No Results"}
                </h2>
              </div>
            )}
            
            <div className="space-y-6">
              <ProductList 
                products={hasFiltered ? filteredProducts : products} 
                onToggleSave={toggleSaveProduct}
                isFiltered={hasFiltered}
                matchedKeywords={matchedKeywords}
              />
            </div>
          </div>
        </div>
      </main>
      
      {/* Product Library Summary Footer */}
      <ProductLibrarySummary savedProducts={savedProducts} />
    </div>
  );
};

export default ShopPage;
