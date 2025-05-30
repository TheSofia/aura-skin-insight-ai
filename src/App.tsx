import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ShopPage from './pages/ShopPage';
import SkinDiary from './pages/SkinDiary';
import SkinMirror from './pages/SkinMirror';
import BeautyExchange from './pages/BeautyExchange';
import CustomProduct from './pages/CustomProduct';
import NotFound from './pages/NotFound';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-beautyagent-off-white">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/skin-diary" element={<SkinDiary />} />
          <Route path="/skin-mirror" element={<SkinMirror />} />
          <Route path="/beauty-exchange" element={<BeautyExchange />} />
          <Route path="/custom-product" element={<CustomProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
