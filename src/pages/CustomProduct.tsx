import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, MessageSquare, ArrowLeft, Sparkles, BeakerIcon, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import CustomCursor from '@/components/ui/CustomCursor';
import EnhancedCellularBackground from '@/components/landing/EnhancedCellularBackground';

type CustomProductStep = 'intro' | 'scan-choice' | 'scanning' | 'scan-results' | 'chatbox' | 'formulation' | 'proposal';

type SkinAnalysis = {
  needs: string[];
  severity: 'mild' | 'moderate' | 'significant';
  recommendations: string[];
};

const CustomProduct = () => {
  const [currentStep, setCurrentStep] = useState<CustomProductStep>('intro');
  const [skinAnalysis, setSkinAnalysis] = useState<SkinAnalysis | null>(null);
  const [userNotes, setUserNotes] = useState('');
  const [customFormulation, setCustomFormulation] = useState<any>(null);
  const [skipScan, setSkipScan] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleStartScan = () => {
    setSkipScan(false);
    setCurrentStep('scanning');
    
    // Simulate scan process
    setTimeout(() => {
      const mockAnalysis: SkinAnalysis = {
        needs: ['Dehydration', 'Fine Lines', 'Uneven Tone', 'T-Zone Oiliness'],
        severity: 'moderate',
        recommendations: ['Hyaluronic Acid', 'Peptides', 'Vitamin C', 'Niacinamide']
      };
      setSkinAnalysis(mockAnalysis);
      setCurrentStep('scan-results');
    }, 3000);
  };

  const handleSkipToChat = () => {
    setSkipScan(true);
    setCurrentStep('chatbox');
  };

  const handleContinueToChat = () => {
    setCurrentStep('chatbox');
  };

  const handleSubmitNotes = () => {
    if (!userNotes.trim() && !skinAnalysis) {
      toast({
        title: "Input required",
        description: "Please describe your skin needs or take a face scan",
        variant: "destructive"
      });
      return;
    }

    setCurrentStep('formulation');
    
    // Simulate formulation generation
    setTimeout(() => {
      const mockFormulation = {
        id: `CUSTOM-${Date.now()}`,
        name: "Your Personalized Serum",
        type: "Custom Multi-Active Serum",
        targetedNeeds: skinAnalysis?.needs || ['Custom formulated based on your notes'],
        keyIngredients: [
          "3% Hyaluronic Acid Complex",
          "2% Advanced Peptide Blend", 
          "15% Vitamin C Derivative",
          "5% Niacinamide"
        ],
        concentration: "Moderate-High Potency",
        texture: "Lightweight, fast-absorbing serum",
        price: 79, // Changed from 89 to 79 euros
        labTime: "7-10 business days"
      };
      setCustomFormulation(mockFormulation);
      setCurrentStep('proposal');
    }, 2500);
  };

  const renderIntroStep = () => (
    <div className="text-center max-w-2xl mx-auto">
      <div className="mb-8">
        <BeakerIcon className="w-16 h-16 mx-auto mb-4 text-dermoagent-deep-purple animate-neural-pulse" />
        <h1 className="text-4xl font-light tracking-wider text-beautyagent-graphite-black mb-4">
          Create Your Custom Product
        </h1>
        <p className="text-beautyagent-charcoal-gray text-lg font-light">
          Our AI lab creates personalized skincare formulations based on your unique skin analysis and preferences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="p-6 amazement-interactive-box hover-elevation-enhanced cursor-pointer micro-interaction-sparkle" onClick={() => setCurrentStep('scan-choice')}>
          <Camera className="w-12 h-12 mx-auto mb-4 text-dermoagent-deep-purple" />
          <h3 className="text-xl font-light mb-2">Face Scan Analysis</h3>
          <p className="text-sm text-beautyagent-charcoal-gray">
            Advanced AI analysis of your skin for precise formulation
          </p>
        </Card>

        <Card className="p-6 amazement-interactive-box hover-elevation-enhanced cursor-pointer micro-interaction-sparkle" onClick={handleSkipToChat}>
          <MessageSquare className="w-12 h-12 mx-auto mb-4 text-dermoagent-deep-purple" />
          <h3 className="text-xl font-light mb-2">Describe Your Needs</h3>
          <p className="text-sm text-beautyagent-charcoal-gray">
            Tell us about your skin concerns and goals
          </p>
        </Card>
      </div>
    </div>
  );

  const renderScanChoice = () => (
    <div className="text-center max-w-xl mx-auto">
      <h2 className="text-2xl font-light mb-6">Face Scan Analysis</h2>
      <p className="text-beautyagent-charcoal-gray mb-8">
        For optimal results, ensure good lighting and a clean face
      </p>
      
      <div className="space-y-4">
        <Button onClick={handleStartScan} className="w-full amazement-button" size="lg">
          <Camera className="mr-2 h-5 w-5" />
          Start Face Scan
        </Button>
        
        <Button onClick={handleSkipToChat} variant="outline" className="w-full amazement-button">
          Skip to Manual Input
        </Button>
      </div>
    </div>
  );

  const renderScanning = () => (
    <div className="text-center max-w-xl mx-auto">
      <div className="relative w-80 h-80 mx-auto mb-6 bg-dermoagent-ethereal-purple rounded-lg overflow-hidden amazement-interactive-box">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-neural-pulse">
            <Camera className="w-16 h-16 text-dermoagent-deep-purple" />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="scan-line-cyan w-full animate-scanning"></div>
        </div>
        {/* Enhanced scanning visualization */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-dermoagent-muted-violet cellular-drift-purple-enhanced"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.6
              }}
            />
          ))}
        </div>
      </div>
      
      <h3 className="text-xl font-light mb-2">Analyzing Your Skin...</h3>
      <p className="text-beautyagent-charcoal-gray">
        Our AI is detecting your unique skin characteristics
      </p>
    </div>
  );

  const renderScanResults = () => (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-light text-center mb-8">Skin Analysis Complete</h2>
      
      <Card className="p-6 amazement-interactive-box mb-6">
        <h3 className="text-lg font-light mb-4 flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-dermoagent-deep-purple animate-neural-pulse" />
          Detected Skin Needs
        </h3>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
          {skinAnalysis?.needs.map((need, index) => (
            <div key={index} className="p-3 bg-dermoagent-light-purple rounded-lg amazement-interactive-box hover-elevation-enhanced">
              <span className="text-sm font-light">{need}</span>
            </div>
          ))}
        </div>
        
        <div className="border-t border-dermoagent-light-purple pt-4 futuristic-data-line">
          <h4 className="font-light mb-2">Recommended Active Ingredients:</h4>
          <p className="text-sm text-beautyagent-charcoal-gray">
            {skinAnalysis?.recommendations.join(', ')}
          </p>
        </div>
      </Card>
      
      <div className="text-center">
        <Button onClick={handleContinueToChat} className="amazement-button" size="lg">
          Continue to Personalization
        </Button>
      </div>
    </div>
  );

  const renderChatbox = () => (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-light text-center mb-6">
        {skipScan ? 'Describe Your Skin Needs' : 'Add Your Personal Notes'}
      </h2>
      
      {!skipScan && skinAnalysis && (
        <Card className="p-4 amazement-interactive-box mb-6">
          <p className="text-sm text-beautyagent-charcoal-gray">
            Based on your scan: {skinAnalysis.needs.join(', ')}
          </p>
        </Card>
      )}
      
      <Card className="p-6 amazement-interactive-box">
        <Textarea
          value={userNotes}
          onChange={(e) => setUserNotes(e.target.value)}
          placeholder={skipScan 
            ? "e.g., 'I have sensitive, dry skin with some redness and want gentle hydration with anti-aging benefits'"
            : "Add any specific preferences, allergies, or concerns not detected in the scan..."
          }
          variant="notebook"
          enableAutocorrect={true}
          className="min-h-[120px] mb-4 amazement-input"
        />
        
        <div className="flex justify-between">
          <Button 
            onClick={() => setCurrentStep(skipScan ? 'intro' : 'scan-results')} 
            variant="outline" 
            className="amazement-button"
          >
            Back
          </Button>
          <Button onClick={handleSubmitNotes} className="amazement-button">
            Create My Formulation
          </Button>
        </div>
      </Card>
    </div>
  );

  const renderFormulation = () => (
    <div className="text-center max-w-xl mx-auto">
      <div className="mb-6">
        <div className="animate-neural-pulse mb-4">
          <BeakerIcon className="w-16 h-16 mx-auto text-dermoagent-deep-purple" />
        </div>
        <h3 className="text-xl font-light mb-2">Creating Your Custom Formulation...</h3>
        <p className="text-beautyagent-charcoal-gray">
          Our lab AI is designing your personalized product
        </p>
      </div>
      
      <div className="space-y-2 text-sm text-beautyagent-charcoal-gray">
        <p>✓ Analyzing skin requirements</p>
        <p>✓ Selecting optimal ingredients</p>
        <p>✓ Calculating precise concentrations</p>
        <p className="animate-neural-pulse">→ Finalizing formulation...</p>
      </div>
      
      {/* Enhanced formulation visualization */}
      <div className="mt-8 relative">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-dermoagent-ethereal-purple cellular-cluster-formation-enhanced"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 60 + 20}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>
    </div>
  );

  const renderProposal = () => (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-light text-center mb-8">Your Custom Formulation</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Card className="p-6 amazement-product-card mb-6">
            <div className="text-center mb-6">
              <div className="w-32 h-40 mx-auto bg-gradient-to-b from-dermoagent-light-purple to-dermoagent-ethereal-purple rounded-lg flex items-center justify-center mb-4 amazement-interactive-box">
                <BeakerIcon className="w-12 h-12 text-dermoagent-deep-purple animate-neural-pulse" />
              </div>
              <h3 className="text-xl font-light">{customFormulation?.name}</h3>
              <p className="text-sm text-beautyagent-charcoal-gray">{customFormulation?.type}</p>
            </div>
            
            <div className="text-center">
              <p className="text-2xl font-light text-beautyagent-graphite-black mb-2">
                €{customFormulation?.price}
              </p>
              <p className="text-xs text-beautyagent-charcoal-gray">
                Lab creation: {customFormulation?.labTime}
              </p>
            </div>
          </Card>
        </div>
        
        <div>
          <Card className="p-6 amazement-interactive-box mb-6">
            <h4 className="font-light mb-4">Targeted Needs:</h4>
            <div className="space-y-2 mb-6">
              {customFormulation?.targetedNeeds.map((need: string, index: number) => (
                <div key={index} className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-dermoagent-deep-purple rounded-full mr-3 animate-neural-pulse"></span>
                  {need}
                </div>
              ))}
            </div>
            
            <h4 className="font-light mb-4">Key Ingredients:</h4>
            <div className="space-y-2">
              {customFormulation?.keyIngredients.map((ingredient: string, index: number) => (
                <div key={index} className="text-sm p-2 bg-dermoagent-light-purple rounded amazement-interactive-box">
                  {ingredient}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Button onClick={() => setCurrentStep('chatbox')} variant="outline" className="amazement-button">
          Refine Needs
        </Button>
        <Button 
          onClick={() => {
            toast({
              title: "Custom product ordered!",
              description: "Your personalized formulation will be created in our lab"
            });
            navigate('/shop');
          }} 
          className="amazement-button micro-interaction-sparkle"
          size="lg"
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Order Custom Product
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Enhanced Cellular Background */}
      <EnhancedCellularBackground isVisible={true} intensity="moderate" showDataStreams={true} />
      
      {/* Cellular Cursor Component */}
      <CustomCursor />
      
      <div className="min-h-screen bg-dermoagent-pure-white amazement-page">
        <div className="container max-w-6xl mx-auto px-4 py-8 relative z-10">
          <div className="mb-8 flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/')}
              className="mr-3 amazement-button"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <div className="flex items-center space-x-8">
                {(['intro', 'scan-choice', 'scanning', 'scan-results'] as CustomProductStep[]).includes(currentStep) && (
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${currentStep !== 'intro' ? 'bg-dermoagent-deep-purple animate-neural-pulse' : 'bg-beautyagent-light-grey'}`}></div>
                    <span className="text-sm">Scan</span>
                  </div>
                )}
                {(['chatbox'] as CustomProductStep[]).includes(currentStep) && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-dermoagent-deep-purple animate-neural-pulse"></div>
                    <span className="text-sm">Personalize</span>
                  </div>
                )}
                {(['formulation', 'proposal'] as CustomProductStep[]).includes(currentStep) && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-dermoagent-deep-purple animate-neural-pulse"></div>
                    <span className="text-sm">Formulation</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="min-h-[60vh] flex items-center justify-center">
            {currentStep === 'intro' && renderIntroStep()}
            {currentStep === 'scan-choice' && renderScanChoice()}
            {currentStep === 'scanning' && renderScanning()}
            {currentStep === 'scan-results' && renderScanResults()}
            {currentStep === 'chatbox' && renderChatbox()}
            {currentStep === 'formulation' && renderFormulation()}
            {currentStep === 'proposal' && renderProposal()}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomProduct;
