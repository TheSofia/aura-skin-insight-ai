import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, CameraOff, Image, Play, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import SkinTimeline from "@/components/skin/SkinTimeline";
import CameraGuide from "@/components/skin/CameraGuide";
import AIAnalysisTags from "@/components/skin/AIAnalysisTags";
import CustomCursor from "@/components/ui/CustomCursor";

const SkinMirror = () => {
  const [captureMode, setCaptureMode] = useState(false);
  const [captures, setCaptures] = useState<{ url: string; timestamp: Date; period: string }[]>([]);
  const [currentPeriod, setCurrentPeriod] = useState<"morning" | "afternoon" | "evening">("morning");
  const [selectedCapture, setSelectedCapture] = useState<{ url: string; timestamp: Date; period: string } | null>(null);
  const [progressPlayback, setProgressPlayback] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  
  // Determine time of day for automatic period selection
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setCurrentPeriod("morning");
    } else if (hour >= 12 && hour < 18) {
      setCurrentPeriod("afternoon");
    } else {
      setCurrentPeriod("evening");
    }
  }, []);
  
  // Handle camera activation with improved error handling
  const startCamera = async () => {
    setIsLoading(true);
    setCameraError(null);
    
    try {
      // Check if mediaDevices is supported
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Camera not supported on this device");
      }

      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: "user", 
          width: { ideal: 1280 }, 
          height: { ideal: 720 } 
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCaptureMode(true);
        toast.success("Camera activated", {
          description: "Position your face in the guide circle",
        });
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setCameraError(errorMessage);
      
      if (errorMessage.includes("Permission denied") || errorMessage.includes("NotAllowedError")) {
        toast.error("Camera access denied", {
          description: "Please allow camera access or try uploading a photo instead",
        });
      } else if (errorMessage.includes("NotFoundError") || errorMessage.includes("not supported")) {
        toast.error("Camera not available", {
          description: "No camera found. Please try uploading a photo instead",
        });
      } else {
        toast.error("Camera error", {
          description: "Unable to access camera. Please try uploading a photo instead",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle photo upload as alternative to camera
  const handlePhotoUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error("Invalid file type", {
        description: "Please select an image file (JPG, PNG, etc.)",
      });
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File too large", {
        description: "Please select an image smaller than 10MB",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result as string;
      const newCapture = {
        url: imageUrl,
        timestamp: new Date(),
        period: currentPeriod
      };
      
      // Add to captures state
      setCaptures(prev => [...prev, newCapture]);
      
      // Store in localStorage
      const storedCaptures = JSON.parse(localStorage.getItem('skinCaptures') || '[]');
      localStorage.setItem('skinCaptures', JSON.stringify([...storedCaptures, newCapture]));
      
      toast.success("Photo uploaded successfully", {
        description: `${currentPeriod.charAt(0).toUpperCase() + currentPeriod.slice(1)} skin snapshot added to your timeline`,
      });
      
      // Set the new capture as selected
      setSelectedCapture(newCapture);
    };
    
    reader.onerror = () => {
      toast.error("Upload failed", {
        description: "Unable to process the selected image. Please try again.",
      });
    };
    
    reader.readAsDataURL(file);
  };
  
  // Handle stopping the camera stream
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setCaptureMode(false);
      setCameraError(null);
    }
  };
  
  // Capture photo from video stream
  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        // Set canvas dimensions to match video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        // Draw video frame to canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Convert to data URL and save
        const imageUrl = canvas.toDataURL('image/jpeg');
        const newCapture = {
          url: imageUrl,
          timestamp: new Date(),
          period: currentPeriod
        };
        
        // Add to captures state
        setCaptures(prev => [...prev, newCapture]);
        
        // Store in localStorage
        const storedCaptures = JSON.parse(localStorage.getItem('skinCaptures') || '[]');
        localStorage.setItem('skinCaptures', JSON.stringify([...storedCaptures, newCapture]));
        
        toast.success("Skin capture saved", {
          description: `${currentPeriod.charAt(0).toUpperCase() + currentPeriod.slice(1)} skin snapshot added to your timeline`,
        });
        
        // Stop camera after capturing
        stopCamera();
        
        // Set the new capture as selected
        setSelectedCapture(newCapture);
      }
    }
  };
  
  // Generate a progress playback animation
  const generateProgressPlayback = () => {
    if (captures.length < 2) {
      toast.error("Not enough captures", {
        description: "You need at least 2 skin captures to generate a progress animation"
      });
      return;
    }
    
    setProgressPlayback(true);
    
    toast.success("Generating skin progress animation", {
      description: "Your skin journey visualization is being created"
    });
    
    // Simulate animation creation
    setTimeout(() => {
      setProgressPlayback(false);
      
      toast.success("Progress animation ready", {
        description: "Your skin has shown a 12% improvement in brightness over the last week"
      });
    }, 3000);
  };
  
  useEffect(() => {
    // Load captures from localStorage on component mount
    const storedCaptures = JSON.parse(localStorage.getItem('skinCaptures') || '[]');
    
    // Convert timestamp strings back to Date objects
    const formattedCaptures = storedCaptures.map((capture: any) => ({
      ...capture,
      timestamp: new Date(capture.timestamp)
    }));
    
    setCaptures(formattedCaptures);
    
    // Set the most recent capture as selected
    if (formattedCaptures.length > 0) {
      setSelectedCapture(formattedCaptures[0]);
    }
    
    // Cleanup function to stop camera when component unmounts
    return () => {
      stopCamera();
    };
  }, []);
  
  // Handle period selection
  const handlePeriodChange = (period: "morning" | "afternoon" | "evening") => {
    setCurrentPeriod(period);
  };
  
  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-beautyagent-off-white">
        <div className="container max-w-7xl mx-auto px-4 py-6">
          <div className="mb-6 flex justify-between items-center">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => navigate('/')}
                className="mr-3 hover-enhance"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-3xl font-light tracking-wider text-beautyagent-deeper-grey">
                Mirror My Skin
              </h1>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-6 md:col-span-2">
              <Card className="p-6 glass-card">
                <h2 className="text-xl mb-4 font-light tracking-wider">Today's Skin Capture</h2>
                
                <div className="flex space-x-4 mb-6">
                  <Button 
                    variant={currentPeriod === "morning" ? "default" : "outline"} 
                    onClick={() => handlePeriodChange("morning")}
                    className="flex-1 glass-button"
                  >
                    Morning
                  </Button>
                  <Button 
                    variant={currentPeriod === "afternoon" ? "default" : "outline"} 
                    onClick={() => handlePeriodChange("afternoon")}
                    className="flex-1 glass-button"
                  >
                    Afternoon
                  </Button>
                  <Button 
                    variant={currentPeriod === "evening" ? "default" : "outline"} 
                    onClick={() => handlePeriodChange("evening")}
                    className="flex-1 glass-button"
                  >
                    Evening
                  </Button>
                </div>
                
                <div className="relative aspect-video bg-beautyagent-light-grey rounded-lg overflow-hidden shadow-lg">
                  {captureMode ? (
                    <>
                      <video 
                        ref={videoRef} 
                        autoPlay 
                        playsInline 
                        className="w-full h-full object-cover"
                      />
                      <CameraGuide />
                    </>
                  ) : selectedCapture ? (
                    <div className="w-full h-full">
                      <img 
                        src={selectedCapture.url} 
                        alt="Skin capture" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <p className="text-white text-sm font-medium mb-1">
                          {new Date(selectedCapture.timestamp).toLocaleDateString()} - {selectedCapture.period}
                        </p>
                        <AIAnalysisTags 
                          imageUrl={selectedCapture.url} 
                          captureDate={new Date(selectedCapture.timestamp)} 
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center p-4">
                        <Image className="h-12 w-12 mx-auto mb-2 text-beautyagent-medium-grey" />
                        <p className="text-beautyagent-medium-grey">
                          Use the camera or upload a photo to capture your skin
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Display camera error if any */}
                  {cameraError && !captureMode && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <div className="text-center p-4 bg-white rounded-lg max-w-sm">
                        <p className="text-red-600 font-medium mb-2">Camera Error</p>
                        <p className="text-sm text-beautyagent-medium-grey mb-3">{cameraError}</p>
                        <Button onClick={handlePhotoUpload} className="glass-button" size="sm">
                          Upload Photo Instead
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* Hidden canvas for processing captures */}
                  <canvas ref={canvasRef} className="hidden" />
                  
                  {/* Hidden file input for photo upload */}
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*" 
                    onChange={handleFileChange}
                  />
                </div>
                
                <div className="flex justify-center mt-4 space-x-4">
                  {!captureMode ? (
                    <>
                      <Button 
                        onClick={startCamera} 
                        className="glass-button"
                        size="lg"
                        disabled={isLoading}
                      >
                        <Camera className="mr-2 h-4 w-4" />
                        {isLoading ? 'Starting...' : 'Start Camera'}
                      </Button>
                      
                      <Button 
                        onClick={handlePhotoUpload} 
                        variant="outline"
                        className="glass-button"
                        size="lg"
                      >
                        <Image className="mr-2 h-4 w-4" />
                        Upload Photo
                      </Button>
                      
                      {captures.length >= 2 && (
                        <Button 
                          onClick={generateProgressPlayback} 
                          className="glass-button"
                          size="lg"
                          disabled={progressPlayback}
                        >
                          <Play className="mr-2 h-4 w-4" />
                          {progressPlayback ? 'Generating...' : 'Progress Playback'}
                        </Button>
                      )}
                    </>
                  ) : (
                    <>
                      <Button 
                        onClick={stopCamera} 
                        variant="outline" 
                        className="glass-button"
                      >
                        <CameraOff className="mr-2 h-4 w-4" />
                        Cancel
                      </Button>
                      
                      <Button 
                        onClick={capturePhoto} 
                        className="glass-button hover:bg-beautyagent-rose-quartz hover:text-white"
                        size="lg"
                      >
                        <Camera className="mr-2 h-4 w-4" />
                        Capture
                      </Button>
                    </>
                  )}
                </div>
              </Card>
              
              <Card className="p-6 glass-card">
                <h2 className="text-xl mb-4 font-light tracking-wider">AI Skin Intelligence</h2>
                
                {selectedCapture ? (
                  <div className="space-y-4">
                    <div className="p-4 border border-beautyagent-light-grey rounded-lg bg-white/50">
                      <h3 className="font-medium mb-2">Analysis for {selectedCapture.period} capture</h3>
                      <p className="text-beautyagent-medium-grey text-sm mb-3">
                        Based on your recent images, BeautyAgent's AI has detected:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-beautyagent-rose-quartz-light flex items-center justify-center mr-2 mt-0.5 text-xs">
                            ✓
                          </div>
                          <span>Your skin shows excellent hydration in the morning, but tends to become drier by evening</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-beautyagent-rose-quartz-light flex items-center justify-center mr-2 mt-0.5 text-xs">
                            ✓
                          </div>
                          <span>There's a 15% improvement in skin tone evenness compared to last week</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-beautyagent-rose-quartz-light flex items-center justify-center mr-2 mt-0.5 text-xs">
                            ✓
                          </div>
                          <span>Your AM routine is effectively reducing redness throughout the day</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border border-beautyagent-light-grey rounded-lg bg-white/50">
                      <h3 className="font-medium mb-2">Recommendations</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-beautyagent-violet-titanium-glow flex items-center justify-center mr-2 mt-0.5 text-xs text-beautyagent-violet-titanium">
                            →
                          </div>
                          <span>Consider adding an extra hydrating step to your evening routine</span>
                        </li>
                        <li className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-beautyagent-violet-titanium-glow flex items-center justify-center mr-2 mt-0.5 text-xs text-beautyagent-violet-titanium">
                            →
                          </div>
                          <span>Your evening captures show signs of environmental stress - try adding an antioxidant serum</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <p className="text-beautyagent-medium-grey">
                    Take your first skin capture to receive personalized AI insights and recommendations.
                  </p>
                )}
              </Card>
            </div>
            
            <div className="md:col-span-1">
              <Card className="p-6 glass-card">
                <h2 className="text-xl mb-4 font-light tracking-wider flex items-center justify-between">
                  <span>Your Skin Timeline</span>
                  <span className="text-xs text-beautyagent-medium-grey font-normal">
                    {captures.length} captures
                  </span>
                </h2>
                
                <div className="mb-4">
                  <div className="h-1 bg-beautyagent-light-grey rounded-full w-full">
                    <div 
                      className="h-1 bg-gradient-to-r from-beautyagent-rose-quartz to-beautyagent-violet-titanium rounded-full" 
                      style={{ width: `${Math.min(captures.length * 5, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-beautyagent-medium-grey mt-1">
                    <span>Beginning</span>
                    <span>Current</span>
                  </div>
                </div>
                
                {captures.length > 0 ? (
                  <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                    {captures.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).map((capture, index) => (
                      <div 
                        key={index}
                        className={`relative cursor-pointer transition-all hover-enhance ${
                          selectedCapture && selectedCapture.timestamp === capture.timestamp ? 'ring-2 ring-beautyagent-violet-titanium ring-offset-2' : ''
                        }`}
                        onClick={() => setSelectedCapture(capture)}
                      >
                        <div className="aspect-square rounded-lg overflow-hidden">
                          <img 
                            src={capture.url} 
                            alt={`Skin capture ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                          <p className="text-white text-xs">
                            {new Date(capture.timestamp).toLocaleDateString()} - {capture.period}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-beautyagent-medium-grey">
                      No skin captures yet. Start your skin journey by taking your first photo.
                    </p>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkinMirror;
