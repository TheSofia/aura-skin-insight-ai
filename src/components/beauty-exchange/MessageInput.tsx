
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Image } from "lucide-react";

interface MessageInputProps {
  message: string;
  onMessageChange: (value: string) => void;
  onSendMessage: () => void;
  onShareProduct: () => void;
  onShareEntry: () => void;
}

export const MessageInput = ({ 
  message, 
  onMessageChange, 
  onSendMessage, 
  onShareProduct, 
  onShareEntry 
}: MessageInputProps) => {
  return (
    <div className="mt-4">
      <div className="flex gap-2">
        <Input
          value={message}
          onChange={(e) => onMessageChange(e.target.value)}
          placeholder="Type your message..."
          variant="notebook"
          enableAutocorrect={true}
          className="flex-grow focus-animation"
          onKeyDown={(e) => e.key === 'Enter' && onSendMessage()}
        />
        <Button 
          onClick={onSendMessage}
          variant="default"
          className="glass-button"
          disabled={!message.trim()}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex gap-2 mt-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="text-xs flex-grow"
          onClick={onShareProduct}
        >
          Share Product
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="text-xs flex-grow"
          onClick={onShareEntry}
        >
          Share Diary Entry
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="text-xs"
        >
          <Image className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};
