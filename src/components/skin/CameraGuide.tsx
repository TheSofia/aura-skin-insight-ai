
import { useEffect, useState } from "react";

const CameraGuide = () => {
  const [scanning, setScanning] = useState(false);
  
  useEffect(() => {
    // Start scanning effect after a brief delay
    const timer = setTimeout(() => {
      setScanning(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Face outline guide */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border-2 border-beautyagent-rose-quartz opacity-80">
        {/* Inner pulsing circle */}
        <div className="absolute inset-1 rounded-full border border-beautyagent-rose-quartz-light opacity-40 animate-pulse"></div>
      </div>
      
      {/* Scanning effect */}
      {scanning && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute w-full h-3 bg-gradient-to-r from-transparent via-beautyagent-rose-quartz-glow to-transparent opacity-60 neural-wave" 
               style={{animation: "scanning 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"}}>
          </div>
        </div>
      )}
      
      {/* Corner guides */}
      <div className="absolute top-[20%] left-[20%] w-8 h-8 border-t-2 border-l-2 border-beautyagent-ultraviolet opacity-70"></div>
      <div className="absolute top-[20%] right-[20%] w-8 h-8 border-t-2 border-r-2 border-beautyagent-ultraviolet opacity-70"></div>
      <div className="absolute bottom-[20%] left-[20%] w-8 h-8 border-b-2 border-l-2 border-beautyagent-ultraviolet opacity-70"></div>
      <div className="absolute bottom-[20%] right-[20%] w-8 h-8 border-b-2 border-r-2 border-beautyagent-ultraviolet opacity-70"></div>
      
      {/* Instructions text */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-white text-sm px-4 py-2 bg-beautyagent-ultraviolet-light bg-opacity-50 rounded-full inline-block">
          Position your face within the circle
        </p>
      </div>
    </div>
  );
};

export default CameraGuide;
