
import { Tag, Droplet, Moon, Smile, Frown, Meh } from "lucide-react";
import { DiaryEntry, EmotionType, formatDate } from "@/utils/skinDiaryUtils";

interface DiaryEntryListProps {
  entries: DiaryEntry[];
}

const DiaryEntryList = ({ entries }: DiaryEntryListProps) => {
  // Get emotion icon
  const getEmotionIcon = (emotion: EmotionType) => {
    switch(emotion) {
      case "happy": return <Smile className="h-4 w-4 text-green-500" />;
      case "sad": return <Frown className="h-4 w-4 text-red-500" />;
      case "neutral": return <Meh className="h-4 w-4 text-yellow-500" />;
      default: return null;
    }
  };

  return (
    <div className="max-h-[500px] overflow-y-auto space-y-4 pr-1">
      {entries.length > 0 ? (
        entries.map((entry, index) => (
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
  );
};

export default DiaryEntryList;
