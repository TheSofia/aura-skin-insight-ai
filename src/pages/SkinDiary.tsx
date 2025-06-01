
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CustomCursor from "@/components/ui/CustomCursor";
import DiaryEntryForm from "@/components/diary/DiaryEntryForm";
import DiaryFilters from "@/components/diary/DiaryFilters";
import DiaryEntryList from "@/components/diary/DiaryEntryList";
import AIInsights from "@/components/diary/AIInsights";
import { DiaryEntry, EmotionType } from "@/utils/skinDiaryUtils";

const SkinDiary = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [filter, setFilter] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionType>(null);
  
  const navigate = useNavigate();
  
  // Load entries from localStorage
  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('skinDiaryEntries') || '[]');
    setEntries(storedEntries);
  }, []);
  
  const handleSaveEntry = (newEntry: DiaryEntry) => {
    // Save to state and localStorage
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('skinDiaryEntries', JSON.stringify(updatedEntries));
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
              <DiaryEntryForm 
                entries={entries} 
                onSaveEntry={handleSaveEntry}
              />
            </div>
            
            {/* Entry list and filters */}
            <div className="md:col-span-1">
              <Card className="p-6 glass-card mb-4">
                <DiaryFilters
                  filter={filter}
                  setFilter={setFilter}
                  selectedTag={selectedTag}
                  setSelectedTag={setSelectedTag}
                  selectedEmotion={selectedEmotion}
                  setSelectedEmotion={setSelectedEmotion}
                  allTags={allTags}
                />
                
                <DiaryEntryList entries={filteredEntries} />
              </Card>
              
              <AIInsights entries={entries} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkinDiary;
