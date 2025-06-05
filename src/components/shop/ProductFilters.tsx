
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ProductFilters = () => {
  const [expandedFilter, setExpandedFilter] = useState<string | null>("category");
  
  const toggleFilter = (filter: string) => {
    setExpandedFilter(expandedFilter === filter ? null : filter);
  };
  
  return (
    <div className="space-y-6 sticky top-24">
      <h3 className="text-lg font-medium text-beautyagent-dark-grey mb-4">Filters</h3>
      
      {/* Category Filter */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleFilter("category")}
          className="flex items-center justify-between w-full text-left mb-2 dermaagent-box-element hover-target transition-all duration-200 active:scale-[0.98] active:bg-gray-50 active:shadow-inner p-2 rounded"
        >
          <span className="font-medium text-beautyagent-dark-grey">Category</span>
          <ChevronDown 
            className={`transform transition-transform ${
              expandedFilter === "category" ? "rotate-180" : ""
            }`} 
            size={16} 
          />
        </button>
        
        {expandedFilter === "category" && (
          <div className="space-y-2 mt-3 pl-2 animate-accordion-down">
            <div className="flex items-center">
              <input type="checkbox" id="skincare" className="mr-2 dermaagent-box-element hover-target active:scale-[0.9] active:shadow-inner" />
              <label htmlFor="skincare" className="text-sm">Skincare</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="tools" className="mr-2 dermaagent-box-element hover-target active:scale-[0.9] active:shadow-inner" />
              <label htmlFor="tools" className="text-sm">Tools</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="supplements" className="mr-2 dermaagent-box-element hover-target active:scale-[0.9] active:shadow-inner" />
              <label htmlFor="supplements" className="text-sm">Supplements</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="premium" className="mr-2 dermaagent-box-element hover-target active:scale-[0.9] active:shadow-inner" />
              <label htmlFor="premium" className="text-sm">Premium</label>
            </div>
          </div>
        )}
      </div>
      
      {/* Concern Filter */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleFilter("concern")}
          className="flex items-center justify-between w-full text-left mb-2 dermaagent-box-element hover-target transition-all duration-200 active:scale-[0.98] active:bg-gray-50 active:shadow-inner p-2 rounded"
        >
          <span className="font-medium text-beautyagent-dark-grey">Concern</span>
          <ChevronDown 
            className={`transform transition-transform ${
              expandedFilter === "concern" ? "rotate-180" : ""
            }`} 
            size={16} 
          />
        </button>
        
        {expandedFilter === "concern" && (
          <div className="space-y-2 mt-3 pl-2 animate-accordion-down">
            <div className="flex items-center">
              <input type="checkbox" id="dryness" className="mr-2 dermaagent-box-element hover-target active:scale-[0.9] active:shadow-inner" />
              <label htmlFor="dryness" className="text-sm">Dryness</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="acne" className="mr-2 dermaagent-box-element hover-target active:scale-[0.9] active:shadow-inner" />
              <label htmlFor="acne" className="text-sm">Acne/Blemishes</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="aging" className="mr-2 dermaagent-box-element hover-target active:scale-[0.9] active:shadow-inner" />
              <label htmlFor="aging" className="text-sm">Signs of Aging</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="sensitivity" className="mr-2 dermaagent-box-element hover-target active:scale-[0.9] active:shadow-inner" />
              <label htmlFor="sensitivity" className="text-sm">Sensitivity</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="pigmentation" className="mr-2 dermaagent-box-element hover-target active:scale-[0.9] active:shadow-inner" />
              <label htmlFor="pigmentation" className="text-sm">Pigmentation</label>
            </div>
          </div>
        )}
      </div>
      
      {/* Routine Filter */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleFilter("routine")}
          className="flex items-center justify-between w-full text-left mb-2 dermaagent-box-element hover-target transition-all duration-200 active:scale-[0.98] active:bg-gray-50 active:shadow-inner p-2 rounded"
        >
          <span className="font-medium text-beautyagent-dark-grey">Routine</span>
          <ChevronDown 
            className={`transform transition-transform ${
              expandedFilter === "routine" ? "rotate-180" : ""
            }`} 
            size={16} 
          />
        </button>
        
        {expandedFilter === "routine" && (
          <div className="space-y-2 mt-3 pl-2 animate-accordion-down">
            <div className="flex items-center">
              <input type="checkbox" id="morning" className="mr-2 dermaagent-box-element hover-target active:scale-[0.9] active:shadow-inner" />
              <label htmlFor="morning" className="text-sm">Morning Ritual</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="evening" className="mr-2 dermaagent-box-element hover-target active:scale-[0.9] active:shadow-inner" />
              <label htmlFor="evening" className="text-sm">Evening Ritual</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="weekly" className="mr-2 dermaagent-box-element hover-target active:scale-[0.9] active:shadow-inner" />
              <label htmlFor="weekly" className="text-sm">Weekly Treatment</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="targeted" className="mr-2 dermaagent-box-element hover-target active:scale-[0.9] active:shadow-inner" />
              <label htmlFor="targeted" className="text-sm">Targeted Boosters</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilters;
