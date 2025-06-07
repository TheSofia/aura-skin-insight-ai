
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Camera, BookOpen, Sparkles } from 'lucide-react';

interface EnhancedCallToActionProps {
  isVisible: boolean;
}

const EnhancedCallToAction: React.FC<EnhancedCallToActionProps> = ({ isVisible }) => {
  const navigate = useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setIsAnimated(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div className={`flex flex-col items-center gap-6 transition-all duration-1000 delay-700 ${
      isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}>
      {/* Primary CTA */}
      <Button
        onClick={() => navigate('/skin-mirror')}
        size="pill-lg"
        className="group relative overflow-hidden amazement-button bg-gradient-to-r from-dermoagent-primary-orange-red to-dermoagent-burnt-orange text-white hover:from-dermoagent-burnt-orange hover:to-dermoagent-primary-orange-red shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-normal tracking-wide min-h-[56px]"
        style={{
          fontFamily: 'var(--dermoagent-primary-font)',
          letterSpacing: 'var(--dermoagent-letter-spacing-heading)'
        }}
      >
        <Camera className="mr-3 h-5 w-5" />
        Begin Skin Analysis
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
      </Button>

      {/* Secondary CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => navigate('/skin-diary')}
          variant="outline"
          size="pill"
          className="amazement-button group relative border-dermoagent-light-gray hover:border-dermoagent-deep-purple/40 text-dermoagent-pale-black hover:text-dermoagent-deep-purple bg-white/90 backdrop-blur-sm hover:bg-dermoagent-ethereal-purple transition-all duration-300 min-h-[48px]"
          style={{
            fontFamily: 'var(--dermoagent-primary-font)',
            letterSpacing: 'var(--dermoagent-letter-spacing-body)'
          }}
        >
          <BookOpen className="mr-2 h-4 w-4" />
          Skin Diary
        </Button>

        <Button
          onClick={() => navigate('/custom-product')}
          variant="outline"
          size="pill"
          className="amazement-button group relative border-dermoagent-light-gray hover:border-dermoagent-deep-purple/40 text-dermoagent-pale-black hover:text-dermoagent-deep-purple bg-white/90 backdrop-blur-sm hover:bg-dermoagent-ethereal-purple transition-all duration-300 min-h-[48px]"
          style={{
            fontFamily: 'var(--dermoagent-primary-font)',
            letterSpacing: 'var(--dermoagent-letter-spacing-body)'
          }}
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Custom Lab
        </Button>
      </div>

      {/* Subtle description */}
      <p 
        className={`text-center text-dermoagent-dark-cool-grey max-w-md mx-auto transition-all duration-1000 delay-1000 ${
          isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{
          fontFamily: 'var(--dermoagent-primary-font)',
          letterSpacing: 'var(--dermoagent-letter-spacing-body)'
        }}
      >
        Experience personalized skincare intelligence powered by advanced cellular analysis
      </p>
    </div>
  );
};

export default EnhancedCallToAction;
