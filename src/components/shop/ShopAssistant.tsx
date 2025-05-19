
import { useState } from "react";
import { Search, RefreshCw, SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShopAssistantProps {
  onSubmit: (input: string) => void;
  onClear: () => void;
  resultCount?: number;
  isFiltered: boolean;
}

const ShopAssistant = ({ 
  onSubmit, 
  onClear,
  resultCount = 0, 
  isFiltered 
}: ShopAssistantProps) => {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput("");
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-4 mb-8">
      <div 
        className={`glass-card-layered rounded-xl p-4 transition-all duration-300 ${
          isFocused ? 'shadow-glow-accent' : 'shadow-glow'
        }`}
      >
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-beautyagent-medium-grey" 
              size={18}
            />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full bg-transparent pl-10 pr-4 py-3 rounded-lg border border-transparent focus:border-beautyagent-accent/30 focus:outline-none placeholder:text-beautyagent-medium-grey/70 text-beautyagent-dark-grey"
              placeholder="Looking for something specific? Tell us what your skin needs..."
            />
          </div>
          <Button 
            type="submit"
            disabled={!input.trim()}
            className="rounded-lg bg-beautyagent-accent hover:bg-beautyagent-dark-orange text-white"
          >
            <SendHorizonal size={18} className="md:mr-2" />
            <span className="hidden md:inline">Ask BeautyAgent</span>
          </Button>
          
          {isFiltered && (
            <Button
              type="button"
              onClick={onClear}
              variant="outline"
              className="rounded-lg"
            >
              <RefreshCw size={16} className="mr-2" />
              Clear
            </Button>
          )}
        </form>
        
        {isFiltered && (
          <div className="mt-3 text-sm text-beautyagent-medium-grey">
            <p>
              {resultCount > 0 
                ? `Found ${resultCount} products matching your criteria.` 
                : "No products match your description. Try different keywords."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopAssistant;
