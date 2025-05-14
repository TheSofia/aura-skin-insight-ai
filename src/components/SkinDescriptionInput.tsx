
import { useState, useEffect, useRef } from 'react';
import { Send, Search } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type SkinDescriptionInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  isProcessing: boolean;
};

const SkinDescriptionInput = ({ 
  value, 
  onChange, 
  onSubmit, 
  isProcessing 
}: SkinDescriptionInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !isProcessing) {
      onSubmit();
    }
  };

  // Auto resize textarea based on content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const newHeight = Math.min(textarea.scrollHeight, 150);
      textarea.style.height = `${newHeight}px`;
    }
  }, [value]);

  // Handle keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Submit on Enter (without shift)
    if (e.key === 'Enter' && !e.shiftKey && value.trim()) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <form 
      ref={formRef}
      onSubmit={handleSubmit} 
      className={cn(
        "w-full max-w-2xl mx-auto mb-8 p-4 bg-white rounded-lg transition-all duration-300",
        isFocused ? "shadow-md ring-1 ring-beautyagent-accent/20" : "shadow-sm",
        isProcessing ? "opacity-80" : ""
      )}
    >
      <div className="flex items-center mb-2">
        <Search 
          size={18} 
          className="mr-2 text-beautyagent-medium-grey" 
        />
        <label htmlFor="skin-description" className="text-sm text-beautyagent-dark-grey font-light">
          Describe your skin needs
        </label>
      </div>

      <div className="relative">
        <textarea
          ref={textareaRef}
          id="skin-description"
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="e.g., 'I have sensitive, dry skin with some redness' or 'Looking for vitamin C serums for brightening'"
          className="w-full py-2 px-3 text-beautyagent-dark-grey resize-none bg-white border rounded-md focus:outline-none focus:ring-1 focus:ring-beautyagent-accent/30 focus:border-beautyagent-accent/50 min-h-[60px] max-h-[150px] overflow-y-auto"
          rows={2}
          disabled={isProcessing}
        />

        <Button
          type="submit"
          disabled={!value.trim() || isProcessing}
          className={cn(
            "absolute bottom-2 right-2 p-2 rounded-full bg-beautyagent-accent hover:bg-beautyagent-accent-dark text-white transition-all duration-200",
            (!value.trim() || isProcessing) ? "opacity-60 cursor-not-allowed" : ""
          )}
          size="icon"
        >
          <Send size={18} />
        </Button>
      </div>

      <div className="mt-2 text-xs text-beautyagent-medium-grey font-light">
        <p>Try: "acne-prone oily skin" or "anti-aging products with retinol"</p>
      </div>
    </form>
  );
};

export default SkinDescriptionInput;
