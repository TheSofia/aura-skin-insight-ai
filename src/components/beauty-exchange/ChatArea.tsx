
import { useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { MessageBubble } from "./MessageBubble";
import { MessageInput } from "./MessageInput";
import { Message, Channel } from "@/types/chat";

interface ChatAreaProps {
  activeChannel: string;
  channels: Channel[];
  messages: Message[];
  message: string;
  onMessageChange: (value: string) => void;
  onSendMessage: () => void;
  onAddReaction: (messageId: string, reaction: string) => void;
  onShareProduct: () => void;
  onShareEntry: () => void;
  formatTimestamp: (timestamp: string) => string;
}

export const ChatArea = ({
  activeChannel,
  channels,
  messages,
  message,
  onMessageChange,
  onSendMessage,
  onAddReaction,
  onShareProduct,
  onShareEntry,
  formatTimestamp
}: ChatAreaProps) => {
  const messageEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to bottom of messages on load or when new messages arrive
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <Card className="glass-card p-4 mb-4 flex-grow">
      <div className="mb-4 border-b border-beautyagent-light-grey pb-2 flex justify-between items-center">
        <h2 className="text-xl font-light tracking-wider flex items-center">
          <MessageSquare className="h-5 w-5 mr-2" />
          {channels.find(c => c.id === activeChannel)?.name || 'Chat'}
        </h2>
        <div className="text-sm text-beautyagent-medium-grey">
          {messages.length} messages
        </div>
      </div>
      
      <div className="overflow-y-auto h-[60vh] px-2">
        {messages.map((msg, index) => (
          <MessageBubble
            key={msg.id}
            message={msg}
            index={index}
            onAddReaction={onAddReaction}
            formatTimestamp={formatTimestamp}
          />
        ))}
        <div ref={messageEndRef} />
      </div>
      
      <MessageInput
        message={message}
        onMessageChange={onMessageChange}
        onSendMessage={onSendMessage}
        onShareProduct={onShareProduct}
        onShareEntry={onShareEntry}
      />
    </Card>
  );
};
