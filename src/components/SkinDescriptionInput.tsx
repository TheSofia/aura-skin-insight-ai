
import { useState } from "react";
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
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto mb-10 transition-all duration-300 notebook-textarea-container relative">
      <Textarea
        variant="notebook"
        placeholder="Tell us about your skin: type, concerns, goals..."
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className="resize-none rounded-md p-4 pr-12 h-32 font-light text-base placeholder:text-beautyagent-medium-grey/70"
        disabled={isProcessing}
      />
      <Button 
        type="button"
        onClick={onSubmit}
        className="absolute right-3 bottom-3 p-2 h-auto w-auto bg-transparent hover:bg-beautyagent-light-grey text-beautyagent-dark-grey"
        aria-label="Send"
        disabled={isProcessing}
      >
        {isProcessing ? (
          <div className="h-5 w-5 border-2 border-t-beautyagent-accent border-r-beautyagent-accent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        ) : (
          <SendHorizontal className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};

export default SkinDescriptionInput;
