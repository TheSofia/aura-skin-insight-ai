
import { Avatar } from "@/components/ui/avatar";
import { Heart } from "lucide-react";
import { Message } from "@/types/chat";

interface MessageBubbleProps {
  message: Message;
  index: number;
  onAddReaction: (messageId: string, reaction: string) => void;
  formatTimestamp: (timestamp: string) => string;
}

export const MessageBubble = ({ message, index, onAddReaction, formatTimestamp }: MessageBubbleProps) => {
  return (
    <div 
      className={`mb-4 ${message.user.id === 'you' ? 'ml-auto max-w-[80%]' : 'mr-auto max-w-[80%]'}`}
    >
      <div 
        className={`glass-card p-3 animate-chat-bubble ${
          message.user.id === 'you' 
            ? 'bg-beautyagent-light-grey border-beautyagent-light-grey ml-auto' 
            : 'bg-white border-white'
        }`}
        style={{animationDelay: `${index * 0.1}s`}}
      >
        <div className="flex items-center mb-1">
          <Avatar className="h-6 w-6 mr-2">
            <img src={message.user.avatar} alt={message.user.name} />
          </Avatar>
          <span className="text-sm font-medium">
            {message.user.id === 'you' ? 'You' : message.user.name}
          </span>
          <span className="text-xs text-beautyagent-medium-grey ml-2">
            {formatTimestamp(message.timestamp)}
          </span>
        </div>
        <p className="text-sm">{message.text}</p>
        
        {/* Reactions */}
        {message.reactions.length > 0 && (
          <div className="flex gap-1 mt-2">
            {[...new Set(message.reactions)].map((reaction) => (
              <button 
                key={reaction} 
                className="bg-beautyagent-light-grey/50 rounded-full px-2 py-0.5 text-xs"
                onClick={() => onAddReaction(message.id, reaction)}
              >
                {reaction} {message.reactions.filter(r => r === reaction).length}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Reaction buttons */}
      <div className="flex justify-end mt-1 gap-1">
        <button 
          className="text-beautyagent-medium-grey hover:text-beautyagent-accent transition-colors"
          onClick={() => onAddReaction(message.id, '❤️')}
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
