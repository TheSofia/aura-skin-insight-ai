
import { Textarea } from "@/components/ui/textarea";

type SkinDescriptionInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const SkinDescriptionInput = ({ value, onChange }: SkinDescriptionInputProps) => {
  return (
    <div className="w-full max-w-2xl mb-10 transition-all duration-300 notebook-textarea-container">
      <Textarea
        variant="notebook"
        placeholder="Tell us about your skin: type, concerns, goals..."
        value={value}
        onChange={onChange}
        className="resize-none rounded-md p-4 h-32 font-light text-base placeholder:text-aurascan-medium-grey/70"
      />
    </div>
  );
};

export default SkinDescriptionInput;
