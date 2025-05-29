
import { useState, useEffect, useRef } from 'react';
import { Send, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
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
  const formRef = useRef<HTMLFormElement>(null);

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !isProcessing) {
      onSubmit();
    }
  };

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
        "w-full max-w-2xl mx-auto mb-8 p-6 bg-white rounded-lg transition-all duration-300 shadow-dermaagent-minimal",
        isFocused ? "shadow-dermaagent-soft ring-1 ring-dermaagent-charcoal-gray/20" : "",
        isProcessing ? "opacity-80" : ""
      )}
      style={{
        background: 'var(--dermaagent-pure-white)',
        fontFamily: "'IBM Plex Mono', monospace"
      }}
    >
      <div className="flex items-center mb-3">
        <Search 
          size={18} 
          className="mr-2 text-dermaagent-charcoal-gray" 
        />
        <label htmlFor="skin-description" className="text-sm text-dermaagent-graphite-black font-light tracking-wide">
          Describe your skin needs
        </label>
      </div>

      <div className="relative">
        <Textarea
          id="skin-description"
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="e.g., 'I have sensitive, dry skin with some redness' or 'Looking for vitamin C serums for brightening'"
          variant="notebook"
          enableAutocorrect={true}
          className="min-h-[80px] max-h-[150px] resize-none pr-12"
          rows={3}
          disabled={isProcessing}
        />

        <Button
          type="submit"
          disabled={!value.trim() || isProcessing}
          className={cn(
            "absolute bottom-3 right-3 p-2 rounded-full transition-all duration-200",
            "bg-dermaagent-charcoal-gray hover:bg-dermaagent-graphite-black text-white",
            (!value.trim() || isProcessing) ? "opacity-60 cursor-not-allowed" : ""
          )}
          size="icon"
        >
          <Send size={16} />
        </Button>
      </div>

      <div className="mt-3 text-xs text-dermaagent-charcoal-gray font-light tracking-wide">
        <p>Try: "acne-prone oily skin" or "anti-aging products with retinol"</p>
      </div>
    </form>
  );
};

export default SkinDescriptionInput;
