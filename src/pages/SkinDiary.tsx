
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const SkinDiary = () => {
  const [entry, setEntry] = useState("");
  const navigate = useNavigate();
  
  const handleSaveEntry = () => {
    if (!entry.trim()) {
      toast.error("Please write something in your diary entry");
      return;
    }
    
    // For now, we'll store entries in localStorage
    // In a future implementation, this would connect to a backend
    const now = new Date();
    const newEntry = {
      id: Date.now().toString(),
      content: entry,
      timestamp: now.toISOString(),
      tags: [] // We'll implement smart tagging in the next iteration
    };
    
    const existingEntries = JSON.parse(localStorage.getItem('skinDiaryEntries') || '[]');
    localStorage.setItem('skinDiaryEntries', JSON.stringify([newEntry, ...existingEntries]));
    
    toast.success("Diary entry saved", {
      description: "Your skin observations have been recorded"
    });
    
    setEntry("");
  };
  
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
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
      
      <Card className="p-6 glass mb-8">
        <h2 className="text-xl mb-4 font-light tracking-wider">Today's Observations</h2>
        
        <Textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="How does your skin feel today? Note any changes, reactions to products, or factors that might be affecting your skin..."
          className="min-h-[150px] mb-4 focus-animation"
        />
        
        <div className="flex justify-end">
          <Button onClick={handleSaveEntry} className="biomorphic-button">
            Save Entry
          </Button>
        </div>
      </Card>
      
      <div className="text-center mb-8">
        <p className="text-beautyagent-medium-grey">
          This is a basic implementation of the Skin Diary feature. In the next phase, we'll add:
        </p>
        <ul className="text-left inline-block mt-2">
          <li className="mb-1">• Smart tagging of keywords</li>
          <li className="mb-1">• Timeline visualization of entries</li>
          <li className="mb-1">• Pattern detection and insights</li>
          <li className="mb-1">• Connection with product usage</li>
        </ul>
      </div>
    </div>
  );
};

export default SkinDiary;
