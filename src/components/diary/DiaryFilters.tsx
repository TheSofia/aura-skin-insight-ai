
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Menu, Smile, Frown, Meh } from "lucide-react";
import { EmotionType } from "@/utils/skinDiaryUtils";

interface DiaryFiltersProps {
  filter: string;
  setFilter: (filter: string) => void;
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  selectedEmotion: EmotionType;
  setSelectedEmotion: (emotion: EmotionType) => void;
  allTags: string[];
}

const DiaryFilters = ({
  filter,
  setFilter,
  selectedTag,
  setSelectedTag,
  selectedEmotion,
  setSelectedEmotion,
  allTags
}: DiaryFiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
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
    </>
  );
};

export default DiaryFilters;
