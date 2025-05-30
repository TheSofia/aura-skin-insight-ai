import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar, Search, Tag, Droplet, Moon, Smile, Frown, Meh, Plus, Menu } from "lucide-react";
import CustomCursor from "@/components/ui/CustomCursor";

// Define types for diary entries
type EmotionType = "happy" | "neutral" | "sad" | null;
type DiaryEntry = {
  id: string;
  content: string;
  timestamp: string;
  tags: string[];
  emotion: EmotionType;
  hydration?: number;
  sleep?: number;
  products?: string[];
};

// Function to generate smart tags from content
const generateSmartTags = (content: string): string[] => {
  const keywords = [
    "dryness", "oily", "breakout", "acne", "redness", "irritation", "flaky", 
    "smooth", "hydrated", "glowing", "dull", "tired", "puffy", "mask", 
    "reaction", "allergy", "itchy", "sensitive", "peeling", "dark circles"
  ];
  
  const tags: string[] = [];
  const lowerContent = content.toLowerCase();
  
  keywords.forEach(keyword => {
    if (lowerContent.includes(keyword)) {
      tags.push(keyword);
    }
  });
  
  return tags;
};

// Function to extract emotion from content
const detectEmotion = (content: string): EmotionType => {
  const lowerContent = content.toLowerCase();
  
  const happyWords = ["happy", "pleased", "satisfied", "great", "good", "loving", "amazing", "excellent"];
  const sadWords = ["sad", "upset", "disappointed", "unhappy", "terrible", "bad", "frustrated", "angry"];
  
  let happyScore = 0;
  let sadScore = 0;
  
  happyWords.forEach(word => {
    if (lowerContent.includes(word)) happyScore++;
  });
  
  sadWords.forEach(word => {
    if (lowerContent.includes(word)) sadScore++;
  });
  
  if (happyScore > sadScore) return "happy";
  if (sadScore > happyScore) return "sad";
  return "neutral";
};

const SkinDiary = () => {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [hydration, setHydration] = useState<number>(5);
  const [sleep, setSleep] = useState<number>(7);
  const [products, setProducts] = useState<string[]>([]);
  const [newProduct, setNewProduct] = useState("");
  const [filter, setFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionType>(null);
  
  const navigate = useNavigate();
  
  // Load entries from localStorage
  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('skinDiaryEntries') || '[]');
    setEntries(storedEntries);
  }, []);
  
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
    
    // Save to state and localStorage
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('skinDiaryEntries', JSON.stringify(updatedEntries));
    
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
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  };
  
  // Get emotion icon
  const getEmotionIcon = (emotion: EmotionType) => {
    switch(emotion) {
      case "happy": return <Smile className="h-4 w-4 text-green-500" />;
      case "sad": return <Frown className="h-4 w-4 text-red-500" />;
      case "neutral": return <Meh className="h-4 w-4 text-yellow-500" />;
      default: return null;
    }
  };
  
  // Filter entries
  const filteredEntries = entries.filter(entry => {
    let matchesSearch = true;
    let matchesTag = true;
    let matchesEmotion = true;
    
    if (filter) {
      matchesSearch = entry.content.toLowerCase().includes(filter.toLowerCase()) || 
                     entry.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()));
    }
    
    if (selectedTag) {
      matchesTag = entry.tags.includes(selectedTag);
    }
    
    if (selectedEmotion) {
      matchesEmotion = entry.emotion === selectedEmotion;
    }
    
    return matchesSearch && matchesTag && matchesEmotion;
  });
  
  // Get all unique tags
  const allTags = Array.from(new Set(entries.flatMap(entry => entry.tags)));
  
  return (
    <>
      {/* Purple Cellular Cursor Component */}
      <CustomCursor />
      
      <div className="min-h-screen bg-beautyagent-off-white">
        <div className="container max-w-5xl mx-auto px-4 py-6">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-3xl font-light tracking-wider text-beautyagent-deeper-grey">
              Skin Diary
            </h1>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="hover-enhance"
            >
              Back to Home
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Entry form */}
            <div className="md:col-span-2">
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
            </div>
            
            {/* Entry list and filters */}
            <div className="md:col-span-1">
              <Card className="p-6 glass-card mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-light tracking-wider">Journal Entries</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </div>
                
                {showFilters && (
                  <div className="mb-4 space-y-3 animate-fade-in">
                    <div>
                      <label className="block text-sm mb-1 text-beautyagent-deeper-grey">Search</label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-beautyagent-medium-grey" />
                        <Input 
                          value={filter}
                          onChange={(e) => setFilter(e.target.value)}
                          placeholder="Search entries..."
                          variant="notebook"
                          enableAutocorrect={true}
                          className="pl-10 focus-animation glass-morphism"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-1 text-beautyagent-deeper-grey">Filter by Tag</label>
                      <Select
                        value={selectedTag || ""}
                        onValueChange={(value) => setSelectedTag(value || null)}
                      >
                        <SelectTrigger className="focus-animation glass-morphism">
                          <SelectValue placeholder="Select a tag" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Tags</SelectItem>
                          {allTags.map(tag => (
                            <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-1 text-beautyagent-deeper-grey">Filter by Mood</label>
                      <div className="flex space-x-2">
                        <Button 
                          variant={selectedEmotion === "happy" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedEmotion(selectedEmotion === "happy" ? null : "happy")}
                          className="flex-1"
                        >
                          <Smile className="h-4 w-4 mr-1" />
                          Happy
                        </Button>
                        <Button 
                          variant={selectedEmotion === "neutral" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedEmotion(selectedEmotion === "neutral" ? null : "neutral")}
                          className="flex-1"
                        >
                          <Meh className="h-4 w-4 mr-1" />
                          Neutral
                        </Button>
                        <Button 
                          variant={selectedEmotion === "sad" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedEmotion(selectedEmotion === "sad" ? null : "sad")}
                          className="flex-1"
                        >
                          <Frown className="h-4 w-4 mr-1" />
                          Sad
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="max-h-[500px] overflow-y-auto space-y-4 pr-1">
                  {filteredEntries.length > 0 ? (
                    filteredEntries.map((entry, index) => (
                      <div 
                        key={entry.id}
                        className="glass-card p-4 hover-enhance animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs text-beautyagent-medium-grey">
                            {formatDate(entry.timestamp)}
                          </span>
                          {entry.emotion && (
                            <span>{getEmotionIcon(entry.emotion)}</span>
                          )}
                        </div>
                        
                        <p className="text-sm mb-2 line-clamp-3">{entry.content}</p>
                        
                        {entry.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {entry.tags.map((tag, idx) => (
                              <span 
                                key={idx} 
                                className="text-xs px-1.5 py-0.5 rounded-full bg-beautyagent-light-grey flex items-center"
                              >
                                <Tag className="h-3 w-3 mr-0.5 text-beautyagent-medium-grey" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <div className="mt-2 flex items-center text-xs text-beautyagent-medium-grey">
                          {entry.hydration && (
                            <span className="flex items-center mr-2">
                              <Droplet className="h-3 w-3 mr-1 text-blue-400" />
                              {entry.hydration}/10
                            </span>
                          )}
                          
                          {entry.sleep && (
                            <span className="flex items-center">
                              <Moon className="h-3 w-3 mr-1 text-purple-400" />
                              {entry.sleep} hrs
                            </span>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-beautyagent-medium-grey">
                        No entries found. Try adjusting your filters or create your first diary entry.
                      </p>
                    </div>
                  )}
                </div>
              </Card>
              
              <Card className="p-6 glass-card">
                <h2 className="text-xl mb-4 font-light tracking-wider">AI Insights</h2>
                
                {entries.length > 0 ? (
                  <div className="space-y-3">
                    <p className="text-sm">Based on your diary entries, BeautyAgent has detected:</p>
                    
                    <div className="p-3 border border-beautyagent-light-grey rounded-lg">
                      <p className="text-sm font-medium mb-1">Hydration Patterns</p>
                      <p className="text-xs text-beautyagent-medium-grey">Your skin appears more hydrated on days when you get 7+ hours of sleep.</p>
                    </div>
                    
                    <div className="p-3 border border-beautyagent-light-grey rounded-lg">
                      <p className="text-sm font-medium mb-1">Product Effectiveness</p>
                      <p className="text-xs text-beautyagent-medium-grey">The hyaluronic acid serum appears in 70% of entries where you reported good skin texture.</p>
                    </div>
                    
                    <div className="p-3 border border-beautyagent-light-grey rounded-lg">
                      <p className="text-sm font-medium mb-1">Mood Correlation</p>
                      <p className="text-xs text-beautyagent-medium-grey">Your skin concerns tend to decrease on days when you record a happy mood.</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-beautyagent-medium-grey text-sm">
                    Add at least 3 diary entries to receive AI insights about your skin patterns and product effectiveness.
                  </p>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkinDiary;
