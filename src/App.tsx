
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "@/components/ui/CustomCursor";
import Index from "./pages/Index";
import SkinMirror from "./pages/SkinMirror";
import SkinDiary from "./pages/SkinDiary";
import BeautyExchange from "./pages/BeautyExchange";
import ShopPage from "./pages/ShopPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="dermaagent-soft-paper-white min-h-screen">
        {/* Global Custom Cellular Cursor */}
        <CustomCursor />
        
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/skin-mirror" element={<SkinMirror />} />
            <Route path="/skin-diary" element={<SkinDiary />} />
            <Route path="/beauty-exchange" element={<BeautyExchange />} />
            <Route path="/shop" element={<ShopPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
