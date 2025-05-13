
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

type SkinDescriptionInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
};

const SkinDescriptionInput = ({ value, onChange, onSubmit }: SkinDescriptionInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-10 transition-all duration-300 notebook-textarea-container relative">
      <Textarea
        variant="notebook"
        placeholder="Tell us about your skin: type, concerns, goals..."
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className="resize-none rounded-md p-4 pr-12 h-32 font-light text-base placeholder:text-aurascan-medium-grey/70"
      />
      <Button 
        type="button"
        onClick={onSubmit}
        className="absolute right-3 bottom-3 p-2 h-auto w-auto bg-transparent hover:bg-aurascan-light-grey text-aurascan-dark-grey"
        aria-label="Send"
      >
        <SendHorizontal className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default SkinDescriptionInput;
