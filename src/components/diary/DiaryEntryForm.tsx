
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Calendar, Droplet, Moon, Plus } from "lucide-react";
import { DiaryEntry, generateSmartTags, detectEmotion } from "@/utils/skinDiaryUtils";

interface DiaryEntryFormProps {
  entries: DiaryEntry[];
  onSaveEntry: (newEntry: DiaryEntry) => void;
}

const DiaryEntryForm = ({ entries, onSaveEntry }: DiaryEntryFormProps) => {
  const [entry, setEntry] = useState("");
  const [hydration, setHydration] = useState<number>(5);
  const [sleep, setSleep] = useState<number>(7);
  const [products, setProducts] = useState<string[]>([]);
  const [newProduct, setNewProduct] = useState("");

  const handleSaveEntry = () => {
    if (!entry.trim()) {
      toast.error("Please write something in your diary entry");
      return;
    }
    
    // Generate smart tags
    const tags = generateSmartTags(entry);
    
    // Detect emotion
    const emotion = detectEmotion(entry);
    
    // Create new entry
    const now = new Date();
    const newEntry: DiaryEntry = {
      id: Date.now().toString(),
      content: entry,
      timestamp: now.toISOString(),
      tags,
      emotion,
      hydration,
      sleep,
      products: [...products]
    };
    
    onSaveEntry(newEntry);
    
    // Show success message
    toast.success("Diary entry saved", {
      description: "Your skin observations have been recorded"
    });
    
    // Reset form
    setEntry("");
    setProducts([]);
    setNewProduct("");
  };
  
  const addProduct = () => {
    if (newProduct.trim() && !products.includes(newProduct.trim())) {
      setProducts([...products, newProduct.trim()]);
      setNewProduct("");
    }
  };
  
  const removeProduct = (product: string) => {
    setProducts(products.filter(p => p !== product));
  };

  return (
    <Card className="p-6 glass-card mb-8">
      <h2 className="text-xl mb-4 font-light tracking-wider flex items-center">
        <Calendar className="mr-2 h-5 w-5 text-beautyagent-violet-titanium" />
        Today's Observations
      </h2>
      
      <Textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="How does your skin feel today? Note any changes, reactions to products, or factors that might be affecting your skin..."
        variant="notebook"
        enableAutocorrect={true}
        className="min-h-[150px] mb-4 focus-animation glass-morphism"
      />
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm mb-1 text-beautyagent-deeper-grey">Hydration Level</label>
          <div className="flex items-center">
            <Droplet className="h-4 w-4 text-blue-400 mr-2" />
            <input
              type="range"
              min="1"
              max="10"
              value={hydration}
              onChange={(e) => setHydration(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="ml-2 text-sm">{hydration}/10</span>
          </div>
        </div>
        
        <div>
          <label className="block text-sm mb-1 text-beautyagent-deeper-grey">Sleep Hours</label>
          <div className="flex items-center">
            <Moon className="h-4 w-4 text-purple-400 mr-2" />
            <input
              type="range"
              min="1"
              max="12"
              value={sleep}
              onChange={(e) => setSleep(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="ml-2 text-sm">{sleep} hrs</span>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm mb-1 text-beautyagent-deeper-grey">Products Used</label>
        <div className="flex items-center">
          <Input
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
            placeholder="Add a product you used today..."
            variant="notebook"
            enableAutocorrect={true}
            className="flex-grow focus-animation glass-morphism"
            onKeyDown={(e) => e.key === 'Enter' && addProduct()}
          />
          <Button 
            onClick={addProduct} 
            variant="outline"
            size="icon"
            className="ml-2"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        
        {products.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {products.map((product, idx) => (
              <span 
                key={idx} 
                className="text-xs px-2 py-1 rounded-full bg-beautyagent-light-grey flex items-center"
              >
                {product}
                <button 
                  className="ml-1 text-beautyagent-medium-grey hover:text-beautyagent-deep-grey"
                  onClick={() => removeProduct(product)}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="flex justify-end">
        <Button 
          onClick={handleSaveEntry} 
          className="glass-button hover:bg-beautyagent-violet-titanium hover:text-white"
        >
          Save Entry
        </Button>
      </div>
    </Card>
  );
};

export default DiaryEntryForm;
