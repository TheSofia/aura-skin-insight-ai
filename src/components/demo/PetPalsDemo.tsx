import React from 'react';
import InteractivePetBox from '@/components/ui/InteractivePetBox';
import { Heart, PawPrint, Home, Calendar, Camera, Book, Stethoscope, MapPin } from 'lucide-react';

/**
 * Pet.Pals.Agent Demo Component - Cute & Playful Purple 3D Theme
 * 
 * Demonstrates the pet-themed interactive elements with:
 * - Horizontal lines only layout
 * - Sleek purple 3D option boxes
 * - Smaller, cuter Pet.Pals.Agent logo
 * - Removed Sign In/Get Started/Watch Demo elements
 */
const PetPalsDemo: React.FC = () => {
  const handleFeatureClick = (feature: string) => {
    console.log(`🐾 ${feature} clicked!`);
  };

  return (
    <div className="min-h-screen pet-horizontal-layout hide-auth-elements">
      {/* Pet.Pals.Agent Header */}
      <header className="p-6 text-center">
        <h1 className="pet-pals-logo pet-wiggle-animation mb-2">
          Pet.Pals.Agent
        </h1>
        <p className="text-purple-600 font-medium">
          Your AI companion for happy, healthy pets! 🐾
        </p>
      </header>

      <div className="max-w-6xl mx-auto p-8 space-y-12">
        
        {/* Main Pet Care Options - Sleek 3D Purple Boxes */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center text-purple-700 mb-8">
            Choose Your Pet Care Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InteractivePetBox
              variant="option"
              cute
              onClick={() => handleFeatureClick('Pet Health Monitor')}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                <Stethoscope size={32} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-purple-700 mb-2">Health Monitor</h3>
                <p className="text-purple-600 text-sm">Track your pet's health & wellness</p>
              </div>
            </InteractivePetBox>

            <InteractivePetBox
              variant="option"
              cute
              onClick={() => handleFeatureClick('Pet Activity Tracker')}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                <PawPrint size={32} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-purple-700 mb-2">Activity Tracker</h3>
                <p className="text-purple-600 text-sm">Monitor exercise & playtime</p>
              </div>
            </InteractivePetBox>

            <InteractivePetBox
              variant="option"
              cute
              onClick={() => handleFeatureClick('Pet Care Schedule')}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                <Calendar size={32} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-purple-700 mb-2">Care Schedule</h3>
                <p className="text-purple-600 text-sm">Never miss feeding or vet visits</p>
              </div>
            </InteractivePetBox>

            <InteractivePetBox
              variant="option"
              cute
              onClick={() => handleFeatureClick('Pet Photo Journal')}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                <Camera size={32} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-purple-700 mb-2">Photo Journal</h3>
                <p className="text-purple-600 text-sm">Capture precious moments</p>
              </div>
            </InteractivePetBox>
          </div>
        </section>

        {/* Quick Actions - Button Variants */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold text-center text-purple-700">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InteractivePetBox
              variant="button"
              onClick={() => handleFeatureClick('Add New Pet')}
              className="flex items-center justify-center space-x-2 py-4"
            >
              <Heart size={20} />
              <span>Add New Pet</span>
            </InteractivePetBox>

            <InteractivePetBox
              variant="button"
              onClick={() => handleFeatureClick('Emergency Vet')}
              className="flex items-center justify-center space-x-2 py-4"
            >
              <MapPin size={20} />
              <span>Find Emergency Vet</span>
            </InteractivePetBox>

            <InteractivePetBox
              variant="button"
              cute
              onClick={() => handleFeatureClick('Pet Tips')}
              className="flex items-center justify-center space-x-2 py-4"
            >
              <Book size={20} />
              <span>Daily Pet Tips</span>
            </InteractivePetBox>
          </div>
        </section>

        {/* Pet Care Cards */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold text-center text-purple-700">Your Pet Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InteractivePetBox
              variant="card"
              onClick={() => handleFeatureClick('Bella\'s Profile')}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                  <PawPrint size={24} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-purple-700">Bella (Dog)</h4>
                  <p className="text-purple-600 text-sm">Golden Retriever • 3 years old</p>
                </div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-purple-700 text-sm">
                  ✅ Fed today • 🚶 Walk completed • 💊 Next: Vitamin at 6 PM
                </p>
              </div>
            </InteractivePetBox>

            <InteractivePetBox
              variant="card"
              onClick={() => handleFeatureClick('Whiskers\'s Profile')}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-purple-100 rounded-full flex items-center justify-center">
                  <Home size={24} className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-purple-700">Whiskers (Cat)</h4>
                  <p className="text-purple-600 text-sm">Tabby • 5 years old</p>
                </div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-purple-700 text-sm">
                  ✅ Fed today • 🧸 Playtime needed • 🏥 Vet checkup next week
                </p>
              </div>
            </InteractivePetBox>
          </div>
        </section>

        {/* Custom CSS Usage Example */}
        <section className="bg-purple-50 p-8 rounded-2xl">
          <h4 className="font-bold text-lg text-purple-700 mb-4">Custom Implementation</h4>
          <p className="text-purple-600 mb-4 text-sm">
            Use the CSS classes directly for custom styling:
          </p>
          <div 
            className="pet-option-box cursor-pointer"
            data-interactive
            onClick={() => handleFeatureClick('custom implementation')}
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center">
                <Heart size={32} className="text-purple-600" />
              </div>
              <div>
                <h4 className="font-bold text-xl text-purple-700 mb-2">
                  Custom Pet Element
                </h4>
                <p className="text-purple-600">
                  This shows direct CSS class usage with custom styling for unique pet interactions!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Notes */}
        <section className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl">
          <h4 className="font-bold text-lg text-purple-700 mb-3">Pet.Pals.Agent Features</h4>
          <ul className="text-purple-600 space-y-2 text-sm">
            <li>🎨 Cute purple 3D styling with bouncy animations</li>
            <li>📱 Horizontal lines layout for clean notebook feel</li>
            <li>🐾 Smaller, cuter Pet.Pals.Agent logo with pet-friendly fonts</li>
            <li>🚫 Removed Sign In/Get Started/Watch Demo elements</li>
            <li>♿ Full accessibility with keyboard navigation</li>
            <li>✨ Hardware-accelerated 3D effects for smooth performance</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PetPalsDemo;