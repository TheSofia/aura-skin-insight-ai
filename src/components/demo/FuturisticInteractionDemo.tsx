import React from 'react';
import InteractiveFuturisticBox from '@/components/ui/InteractiveFuturisticBox';
import { Zap, Microscope, Sparkles, Clock } from 'lucide-react';

/**
 * Demo component showcasing futuristic interactions for dermo.agent
 * 
 * This component demonstrates various usage patterns of InteractiveFuturisticBox
 * and how they integrate with the existing dermo.agent design system.
 */
const FuturisticInteractionDemo: React.FC = () => {
  const handleAnalysisClick = () => {
    console.log('Starting skin analysis...');
  };

  const handleProductClick = () => {
    console.log('Opening product details...');
  };

  const handleFeatureClick = (feature: string) => {
    console.log(`Activating ${feature}...`);
  };

  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="dermoagent-headline text-3xl mb-4">
          Futuristic Interactions Demo
        </h2>
        <p className="dermoagent-ui-text-subtle">
          Experience the enhanced click interactions for dermo.agent
        </p>
      </div>

      {/* Button Variant Examples */}
      <section className="space-y-6">
        <h3 className="dermoagent-ui-text-medium text-xl">Primary Action Buttons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InteractiveFuturisticBox
            variant="button"
            enhanced
            onClick={handleAnalysisClick}
            className="flex items-center justify-center space-x-2"
          >
            <Microscope size={20} />
            <span className="dermoagent-ui-text-medium">Start Analysis</span>
          </InteractiveFuturisticBox>

          <InteractiveFuturisticBox
            variant="button"
            onClick={() => handleFeatureClick('recommendations')}
            className="flex items-center justify-center space-x-2"
          >
            <Sparkles size={20} />
            <span className="dermoagent-ui-text-medium">Get Recommendations</span>
          </InteractiveFuturisticBox>
        </div>
      </section>

      {/* Card Variant Examples */}
      <section className="space-y-6">
        <h3 className="dermoagent-ui-text-medium text-xl">Interactive Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InteractiveFuturisticBox
            variant="card"
            enhanced
            onClick={handleProductClick}
            className="text-center space-y-4"
          >
            <div className="w-12 h-12 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
              <Zap size={24} className="text-gray-600" />
            </div>
            <div>
              <h4 className="dermoagent-ui-text-medium text-lg mb-2">AI Analysis</h4>
              <p className="dermoagent-ui-text-subtle text-sm">
                Advanced skin analysis using machine learning algorithms
              </p>
            </div>
          </InteractiveFuturisticBox>

          <InteractiveFuturisticBox
            variant="card"
            onClick={() => handleFeatureClick('diary')}
            className="text-center space-y-4"
          >
            <div className="w-12 h-12 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
              <Clock size={24} className="text-gray-600" />
            </div>
            <div>
              <h4 className="dermoagent-ui-text-medium text-lg mb-2">Skin Diary</h4>
              <p className="dermoagent-ui-text-subtle text-sm">
                Track your skincare journey over time
              </p>
            </div>
          </InteractiveFuturisticBox>

          <InteractiveFuturisticBox
            variant="card"
            enhanced
            onClick={() => handleFeatureClick('custom-product')}
            className="text-center space-y-4"
          >
            <div className="w-12 h-12 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
              <Microscope size={24} className="text-gray-600" />
            </div>
            <div>
              <h4 className="dermoagent-ui-text-medium text-lg mb-2">Custom Product</h4>
              <p className="dermoagent-ui-text-subtle text-sm">
                Create personalized skincare solutions
              </p>
            </div>
          </InteractiveFuturisticBox>
        </div>
      </section>

      {/* Subtle Variant Examples */}
      <section className="space-y-6">
        <h3 className="dermoagent-ui-text-medium text-xl">Subtle Interactions</h3>
        <div className="space-y-3">
          <InteractiveFuturisticBox
            variant="subtle"
            onClick={() => handleFeatureClick('settings')}
            className="p-4 flex items-center justify-between"
          >
            <span className="dermoagent-ui-text">Account Settings</span>
            <span className="dermoagent-ui-text-subtle text-sm">→</span>
          </InteractiveFuturisticBox>

          <InteractiveFuturisticBox
            variant="subtle"
            onClick={() => handleFeatureClick('help')}
            className="p-4 flex items-center justify-between"
          >
            <span className="dermoagent-ui-text">Help & Support</span>
            <span className="dermoagent-ui-text-subtle text-sm">→</span>
          </InteractiveFuturisticBox>

          <InteractiveFuturisticBox
            variant="subtle"
            enhanced
            onClick={() => handleFeatureClick('premium')}
            className="p-4 flex items-center justify-between"
          >
            <span className="dermoagent-ui-text">Upgrade to Premium</span>
            <span className="dermoagent-ui-text-subtle text-sm">✨</span>
          </InteractiveFuturisticBox>
        </div>
      </section>

      {/* Custom Usage Example */}
      <section className="space-y-6">
        <h3 className="dermoagent-ui-text-medium text-xl">Custom Implementation</h3>
        <div className="p-6 bg-gray-50 rounded-lg">
          <p className="dermoagent-ui-text-subtle mb-4">
            For custom styling, you can combine the base class with your own styles:
          </p>
          <div 
            className="interactive-futuristic-box enhanced p-6 bg-white border rounded-lg cursor-pointer"
            data-interactive
            onClick={() => handleFeatureClick('custom')}
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center">
                <Sparkles size={32} className="text-cyan-600" />
              </div>
              <div>
                <h4 className="dermoagent-ui-text-medium text-xl mb-2">
                  Custom Futuristic Element
                </h4>
                <p className="dermoagent-ui-text-subtle">
                  This demonstrates using the CSS class directly with custom styling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Notes */}
      <section className="bg-blue-50 p-6 rounded-lg">
        <h4 className="dermoagent-ui-text-medium text-lg mb-3">Integration Notes</h4>
        <ul className="dermoagent-ui-text-subtle space-y-2 text-sm">
          <li>• All elements include <code>data-interactive</code> for CustomCursor recognition</li>
          <li>• Hardware-accelerated animations ensure smooth performance</li>
          <li>• Full keyboard accessibility with Enter/Space support</li>
          <li>• Reduced motion support for accessibility preferences</li>
          <li>• Enhanced variant adds animated border effects on click</li>
        </ul>
      </section>
    </div>
  );
};

export default FuturisticInteractionDemo;