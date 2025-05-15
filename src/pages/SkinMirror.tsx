
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, CameraOff, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import SkinTimeline from "@/components/skin/SkinTimeline";
import CameraGuide from "@/components/skin/CameraGuide";

const SkinMirror = () => {
  const [captureMode, setCaptureMode] = useState(false);
  const [captures, setCaptures] = useState<{ url: string; timestamp: Date; period: string }[]>([]);
  const [currentPeriod, setCurrentPeriod] = useState<"morning" | "afternoon" | "evening">("morning");
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
  
  // Handle camera activation
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCaptureMode(true);
        toast("Camera activated", {
          description: "Position your face in the guide circle",
        });
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      toast.error("Camera access denied", {
        description: "Please allow camera access to use this feature",
      });
    }
  };
  
  // Handle stopping the camera stream
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setCaptureMode(false);
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
        
        // Store in localStorage (temporary solution before implementing proper backend)
        const storedCaptures = JSON.parse(localStorage.getItem('skinCaptures') || '[]');
        localStorage.setItem('skinCaptures', JSON.stringify([...storedCaptures, newCapture]));
        
        toast.success("Skin capture saved", {
          description: `${currentPeriod.charAt(0).toUpperCase() + currentPeriod.slice(1)} skin snapshot added to your timeline`,
        });
        
        // Stop camera after capturing
        stopCamera();
      }
    }
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
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-light tracking-wider text-beautyagent-deeper-grey">
          Mirror My Skin
        </h1>
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="hover-enhance"
        >
          Back to Home
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-6">
          <Card className="p-6 glass">
            <h2 className="text-xl mb-4 font-light tracking-wider">Today's Skin Capture</h2>
            
            <div className="flex space-x-4 mb-6">
              <Button 
                variant={currentPeriod === "morning" ? "default" : "outline"} 
                onClick={() => handlePeriodChange("morning")}
                className="flex-1 biomorphic-button"
              >
                Morning
              </Button>
              <Button 
                variant={currentPeriod === "afternoon" ? "default" : "outline"} 
                onClick={() => handlePeriodChange("afternoon")}
                className="flex-1 biomorphic-button"
              >
                Afternoon
              </Button>
              <Button 
                variant={currentPeriod === "evening" ? "default" : "outline"} 
                onClick={() => handlePeriodChange("evening")}
                className="flex-1 biomorphic-button"
              >
                Evening
              </Button>
            </div>
            
            <div className="relative aspect-video bg-beautyagent-light-grey rounded-lg overflow-hidden">
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
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-4">
                    <Image className="h-12 w-12 mx-auto mb-2 text-beautyagent-medium-grey" />
                    <p className="text-beautyagent-medium-grey">
                      Tap the camera button below to capture your skin
                    </p>
                  </div>
                </div>
              )}
              
              {/* Hidden canvas for processing captures */}
              <canvas ref={canvasRef} className="hidden" />
            </div>
            
            <div className="flex justify-center mt-4 space-x-4">
              {!captureMode ? (
                <Button 
                  onClick={startCamera} 
                  className="biomorphic-button"
                  size="lg"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Start Camera
                </Button>
              ) : (
                <>
                  <Button 
                    onClick={stopCamera} 
                    variant="outline" 
                    className="biomorphic-button"
                  >
                    <CameraOff className="mr-2 h-4 w-4" />
                    Cancel
                  </Button>
                  
                  <Button 
                    onClick={capturePhoto} 
                    className="biomorphic-button"
                    size="lg"
                  >
                    <Camera className="mr-2 h-4 w-4" />
                    Capture
                  </Button>
                </>
              )}
            </div>
          </Card>
          
          <Card className="p-6 glass">
            <h2 className="text-xl mb-4 font-light tracking-wider">Skin Intelligence</h2>
            <p className="text-beautyagent-medium-grey mb-4">
              Track your skin's changes over time to discover patterns and improve your skincare routine.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-beautyagent-rose-quartz-light flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-sm">✓</span>
                </div>
                <span>Take 3 photos daily (morning, afternoon, evening)</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-beautyagent-rose-quartz-light flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-sm">✓</span>
                </div>
                <span>Track effectiveness of products over time</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-beautyagent-rose-quartz-light flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-sm">✓</span>
                </div>
                <span>Identify patterns in skin hydration and texture</span>
              </li>
            </ul>
          </Card>
        </div>
        
        <div>
          <SkinTimeline captures={captures} />
        </div>
      </div>
    </div>
  );
};

export default SkinMirror;
