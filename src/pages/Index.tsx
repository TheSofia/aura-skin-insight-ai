
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AppFlow from "@/components/AppFlow";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Clock, Image } from "lucide-react";

const Index = () => {
  const location = useLocation();

  // Effect to welcome users when they first arrive
  useEffect(() => {
    // Only show welcome message on initial load and at the landing page
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        toast("Welcome to BeautyAgent 2100+", {
          description: "Your AI-powered skin intelligence ecosystem",
          icon: "✨",
        });
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div className="container max-w-5xl mx-auto">
      <div className="pt-8 pb-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-center tracking-wider text-beautyagent-deeper-grey mb-2">
          BeautyAgent <span className="text-beautyagent-violet-titanium">2100+</span>
        </h1>
        <p className="text-center text-beautyagent-medium-grey mb-8">
          Your AI-powered beauty ecosystem for the future of skincare
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 hover-enhance glass">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-beautyagent-rose-quartz-glow flex items-center justify-center">
                <Camera className="h-8 w-8 text-beautyagent-ultraviolet" />
              </div>
            </div>
            <h2 className="text-xl font-light tracking-wider text-center mb-2">Mirror My Skin</h2>
            <p className="text-beautyagent-medium-grey text-center mb-4">
              Track your skin's journey with AI-powered photo analysis and visualize changes over time.
            </p>
            <div className="flex justify-center">
              <Button asChild className="biomorphic-button">
                <Link to="/skin-mirror">
                  <Image className="mr-2 h-4 w-4" />
                  Open Skin Mirror
                </Link>
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 hover-enhance glass">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-beautyagent-violet-titanium-glow flex items-center justify-center">
                <Clock className="h-8 w-8 text-beautyagent-rose-quartz" />
              </div>
            </div>
            <h2 className="text-xl font-light tracking-wider text-center mb-2">Skin Diary</h2>
            <p className="text-beautyagent-medium-grey text-center mb-4">
              Record observations, track product reactions, and discover patterns in your skin's behavior.
            </p>
            <div className="flex justify-center">
              <Button asChild className="biomorphic-button">
                <Link to="/skin-diary">
                  <Clock className="mr-2 h-4 w-4" />
                  Open Skin Diary
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      <AppFlow />
      <Toaster />
    </div>
  );
};

export default Index;
