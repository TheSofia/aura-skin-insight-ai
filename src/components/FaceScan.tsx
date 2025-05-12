
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Upload, ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import DynamicLogo from './DynamicLogo';

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
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onBack}
          className="text-aurascan-medium-grey hover:bg-aurascan-cyan/10"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="ml-2 text-lg font-medium text-aurascan-dark-grey">Face Scan</h2>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 space-y-8">
        <div className="relative w-full max-w-md aspect-square rounded-lg frosted-card flex items-center justify-center overflow-hidden border-2 border-aurascan-light-grey/50">
          {imagePreview ? (
            <>
              <img 
                src={imagePreview} 
                alt="Face preview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
              
              {/* Scan grid overlay */}
              <div className="absolute inset-0 grid-lines pointer-events-none"></div>
            </>
          ) : (
            <div className="text-center p-6 grid grid-cols-1 gap-6 place-items-center">
              <DynamicLogo colorScheme="cyan" size="lg" />
              <div>
                <h3 className="text-2xl font-clash font-medium mb-2 text-aurascan-dark-grey">Capture Your Face</h3>
                <p className="text-aurascan-medium-grey">For precise skin analysis and personalized results</p>
              </div>
            </div>
          )}
          
          {/* Scan effect overlay */}
          {imagePreview && (
            <div className="absolute inset-0 pointer-events-none">
              {/* Scanning line effect */}
              <div className="absolute inset-x-0 top-0 h-full overflow-hidden">
                <div className="scan-line-cyan w-full animate-scanning"></div>
              </div>
              
              {/* Frame corners for sci-fi effect */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-aurascan-cyan opacity-80"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-aurascan-cyan opacity-80"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-aurascan-cyan opacity-80"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-aurascan-cyan opacity-80"></div>
            </div>
          )}
        </div>
        
        <div className="w-full max-w-md space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Button 
              className="flex items-center justify-center gap-2 frosted-card text-aurascan-dark-grey hover:bg-aurascan-cyan/10 py-6"
              onClick={handleUploadClick}
            >
              <Upload className="h-4 w-4" />
              <span>Upload Photo</span>
            </Button>
            <Button 
              className="flex items-center justify-center gap-2 frosted-card text-aurascan-dark-grey hover:bg-aurascan-cyan/10 py-6"
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
            className={`w-full py-6 ${imagePreview ? 'button-cyan' : 'bg-aurascan-light-grey text-aurascan-medium-grey cursor-not-allowed'}`}
            onClick={handleContinue}
            disabled={!imagePreview}
          >
            Continue to Analysis
          </Button>
        </div>
      </div>
      
      <div className="px-6 py-6">
        <p className="text-xs text-aurascan-medium-grey text-center">
          For best results, use good lighting and remove makeup. Your photo is used for analysis only and not permanently stored.
        </p>
      </div>
    </div>
  );
};

export default FaceScan;
