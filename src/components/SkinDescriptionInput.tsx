
import { useState, useRef, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

type SkinDescriptionInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  isProcessing: boolean;
};

const SkinDescriptionInput = ({ value, onChange, onSubmit, isProcessing }: SkinDescriptionInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !isProcessing) {
        onSubmit();
      }
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [value]);

  return (
    <div className={`w-full max-w-xl mx-auto mb-10 transition-all duration-500 notebook-textarea-container relative ${isFocused ? 'shadow-lg' : 'shadow-md'}`}>
      <div className={`relative rounded-md overflow-hidden transition-all duration-500 bg-white ${isFocused ? 'ring-1 ring-beautyagent-accent/30' : ''}`}>
        <Textarea
          ref={textareaRef}
          variant="notebook"
          placeholder="Tell us about your skin: type, concerns, goals..."
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="resize-none rounded-md p-5 pr-14 min-h-[140px] font-light text-base tracking-wide placeholder:text-beautyagent-medium-grey/70 placeholder:font-light focus-visible:ring-0 transition-all duration-300"
          disabled={isProcessing}
          style={{
            boxShadow: 'none',
            border: 'none',
          }}
        />
        <Button 
          type="button"
          onClick={() => value.trim() && onSubmit()}
          className={`absolute right-3 bottom-3 p-2 h-auto w-auto bg-transparent hover:bg-beautyagent-light-grey text-beautyagent-dark-grey transition-all duration-300 ${!value.trim() ? 'opacity-60' : 'opacity-100'}`}
          aria-label="Send"
          disabled={isProcessing || !value.trim()}
          animation="scale"
        >
          {isProcessing ? (
            <div className="h-5 w-5 border-2 border-t-beautyagent-accent border-r-beautyagent-accent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          ) : (
            <SendHorizontal className={`h-5 w-5 transition-transform duration-300 ${value.trim() ? 'text-beautyagent-accent' : ''}`} />
          )}
        </Button>
      </div>
      
      {/* Character count */}
      <div className={`absolute right-4 -bottom-6 text-xs text-beautyagent-medium-grey/70 transition-opacity duration-300 ${isFocused ? 'opacity-100' : 'opacity-0'}`}>
        {value.length > 0 && (
          <span>{value.length} character{value.length !== 1 ? 's' : ''}</span>
        )}
      </div>
      
      {/* Focus indicator line */}
      {isFocused && (
        <div className="absolute bottom-0 left-0 h-0.5 bg-beautyagent-accent/30 transition-all duration-700" 
             style={{ width: `${Math.min(value.length * 2, 100)}%` }}></div>
      )}
    </div>
  );
};

export default SkinDescriptionInput;
