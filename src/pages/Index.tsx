
import { useEffect } from "react";
import AppFlow from "@/components/AppFlow";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  // Effect to welcome users when they first arrive
  useEffect(() => {
    // Only show welcome message on initial load and at the landing page
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        toast("Welcome to BeautyAgent", {
          description: "Discover your personalized skincare journey",
          icon: "✨",
        });
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      <AppFlow />
      <Toaster />
    </>
  );
};

export default Index;
