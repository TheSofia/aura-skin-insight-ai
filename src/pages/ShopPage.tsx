
import { useState } from "react";
import Header from "@/components/Header";
import ShopHero from "@/components/shop/ShopHero";
import ProductFilters from "@/components/shop/ProductFilters";
import ShopAssistant from "@/components/shop/ShopAssistant";
import ProductList from "@/components/ProductList";
import { initialProducts } from "@/data/initialProducts";
import ProductLibrarySummary from "@/components/ProductLibrarySummary";
import useProductState from "@/hooks/useProductState";

const ShopPage = () => {
  const { 
    products, 
    savedProducts, 
    filteredProducts, 
    matchedKeywords,
    isFiltered,
    handleSaveProduct,
    handleProcessInput,
    handleClearFilters
  } = useProductState(initialProducts);

  return (
    <div className="min-h-screen bg-beautyagent-white">
      <Header />
      
      <main className="px-4 pt-24 pb-16 md:px-6 lg:px-8">
        {/* Hero Section */}
        <ShopHero />
        
        {/* AI Assistant */}
        <ShopAssistant 
          onSubmit={handleProcessInput}
          onClear={handleClearFilters}
          resultCount={filteredProducts.length}
          isFiltered={isFiltered}
        />
        
        {/* Content Grid */}
        <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ProductFilters />
          </div>
          
          {/* Products Grid */}
          <div className="lg:col-span-3">
            {isFiltered && (
              <div className="mb-6 animate-fade-in">
                <h2 className="text-2xl font-light text-beautyagent-dark-grey mb-2">
                  {filteredProducts.length > 0 ? "Recommended Products" : "No Results"}
                </h2>
              </div>
            )}
            
            {/* Import and use the ProductList component */}
            <div className="space-y-6">
              {/* This will be populated with products based on filtering */}
              {/* We'll implement this component later */}
              <ProductList 
                products={isFiltered ? filteredProducts : products} 
                onToggleSave={handleSaveProduct}
                isFiltered={isFiltered}
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
