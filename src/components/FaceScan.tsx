
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Upload, ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type FaceScanProps = {
  onScanComplete: () => void;
  onBack: () => void;
};

const FaceScan = ({ onScanComplete, onBack }: FaceScanProps) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive"
      });
      return;
    }
    
    // Generate preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleContinue = () => {
    if (!imagePreview) {
      toast({
        title: "No image selected",
        description: "Please take or upload a photo of your face",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, we would send the image to the backend for processing
    onScanComplete();
  };

  return (
    <div className="flex flex-col h-full animate-fade-in">
      <div className="px-6 py-4 flex items-center">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="ml-2 text-lg font-medium">Face Scan</h2>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 space-y-6">
        <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden border-2 border-dashed border-aurascan-light-purple bg-aurascan-soft-purple/20 flex items-center justify-center">
          {imagePreview ? (
            <img 
              src={imagePreview} 
              alt="Face preview" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📷</div>
              <p className="text-aurascan-gray">Take or upload a photo of your face</p>
            </div>
          )}
        </div>
        
        <div className="w-full max-w-md space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button 
              className="flex items-center justify-center gap-2 bg-white border border-aurascan-light-purple text-aurascan-deep-purple hover:bg-aurascan-soft-purple/20"
              onClick={handleUploadClick}
            >
              <Upload className="h-4 w-4" />
              <span>Upload Photo</span>
            </Button>
            <Button 
              className="flex items-center justify-center gap-2 bg-white border border-aurascan-light-purple text-aurascan-deep-purple hover:bg-aurascan-soft-purple/20"
              onClick={() => {
                // In a real app, this would open the camera
                toast({
                  title: "Camera feature",
                  description: "This feature would open your camera in a real app"
                });
              }}
            >
              <Camera className="h-4 w-4" />
              <span>Take Photo</span>
            </Button>
          </div>
          
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*" 
            onChange={handleFileChange}
          />
          
          <Button
            className="w-full bg-aurascan-purple hover:bg-aurascan-purple/90 text-white"
            onClick={handleContinue}
            disabled={!imagePreview}
          >
            Continue
          </Button>
        </div>
      </div>
      
      <div className="px-6 py-4">
        <p className="text-xs text-aurascan-gray text-center">
          For best results, use good lighting and remove makeup. Your photo is used for analysis only and not permanently stored.
        </p>
      </div>
    </div>
  );
};

export default FaceScan;
