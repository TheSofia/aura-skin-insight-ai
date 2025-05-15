
import { useState, useEffect } from 'react';

type AIAnalysisTagsProps = {
  imageUrl: string;
  captureDate: Date;
};

const AIAnalysisTags = ({ imageUrl, captureDate }: AIAnalysisTagsProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Mock AI analysis based on the time of day
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate AI processing time
    const timer = setTimeout(() => {
      const hour = captureDate.getHours();
      const generatedTags = [];
      
      // Different tags based on time of day
      if (hour >= 5 && hour < 12) {
        // Morning tags
        generatedTags.push(...[
          'morning hydration',
          'slight puffiness',
          'even tone'
        ]);
      } else if (hour >= 12 && hour < 18) {
        // Afternoon tags
        generatedTags.push(...[
          'midday shine',
          'good elasticity',
          'minimal redness'
        ]);
      } else {
        // Evening tags
        generatedTags.push(...[
          'evening dryness',
          'relaxed texture',
          'slight fatigue visible'
        ]);
      }
      
      // Add random improvements or changes
      const improvements = [
        'improved brightness',
        'reduced redness',
        'better hydration',
        'smoother texture',
        'increased glow',
        'reduced inflammation'
      ];
      
      // Randomly select an improvement
      if (Math.random() > 0.5) {
        const randomImprovement = improvements[Math.floor(Math.random() * improvements.length)];
        generatedTags.push(randomImprovement);
      }
      
      setTags(generatedTags);
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [imageUrl, captureDate]);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-8 my-2">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-beautyagent-rose-quartz-light rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-beautyagent-rose-quartz-light rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-beautyagent-rose-quartz-light rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-wrap gap-2 my-2">
      {tags.map((tag, index) => (
        <span 
          key={index} 
          className="text-xs px-2 py-1 rounded-full bg-beautyagent-plasma-white-light border border-beautyagent-rose-quartz-light animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default AIAnalysisTags;
