
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";
import DynamicLogo from './DynamicLogo';

type SkinConcern = {
  name: string;
  level: number;
  description: string;
};

type SkinResultsProps = {
  onViewRecommendations: () => void;
};

const SkinResults = ({ onViewRecommendations }: SkinResultsProps) => {
  // Mock skin analysis results
  const [results] = useState<SkinConcern[]>([
    {
      name: "Dryness",
      level: 65,
      description: "Analysis indicates moderate dryness, suggesting a need for targeted hydration strategies to restore balance and comfort."
    },
    {
      name: "Sun Damage",
      level: 45,
      description: "Early indicators of past UV exposure. Focused care with protective and restorative agents is advised for luminous health."
    },
    {
      name: "Fine Lines",
      level: 30,
      description: "Minimal visible signs of aging. Proactive preventative measures are key to maintaining skin's youthful vitality."
    },
    {
      name: "Oiliness",
      level: 20,
      description: "Analysis shows low oil production. This profile benefits from products designed to nourish and support the skin barrier without heaviness."
    }
  ]);

  // Animation states for results
  const [visibleResults, setVisibleResults] = useState<number[]>([]);
  
  // Animate results appearing one by one
  useEffect(() => {
    const timer = setTimeout(() => {
      results.forEach((_, index) => {
        setTimeout(() => {
          setVisibleResults(prev => [...prev, index]);
        }, index * 400);
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, [results.length]);

  const getLevelText = (level: number) => {
    if (level < 30) return "Low";
    if (level < 60) return "Moderate";
    return "Elevated";
  };

  const getLevelColorClass = (level: number) => {
    if (level < 30) return "bg-aurascan-teal";
    if (level < 60) return "bg-aurascan-cyan";
    return "bg-aurascan-violet";
  };

  const getLevelBgClass = (level: number) => {
    if (level < 30) return "bg-glass-teal text-aurascan-teal";
    if (level < 60) return "bg-glass-cyan text-aurascan-cyan";
    return "bg-glass-violet text-aurascan-violet";
  };

  return (
    <div className="flex flex-col h-full animate-fade-in font-space">
      <div className="flex-1 overflow-auto px-6 py-16 md:px-12 md:py-20 bg-gradient-light">
        <div className="max-w-5xl mx-auto">
          {/* Dynamic Logo */}
          <div className="mb-12">
            <DynamicLogo colorScheme="violet" size="lg" />
          </div>

          {/* Header */}
          <div className="relative mb-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-aurascan-dark-grey mb-6 leading-tight">
              Your <span className="violet-text">Skin Profile</span>
            </h1>
            <p className="text-aurascan-medium-grey max-w-2xl leading-relaxed text-lg">
              Discover the insights from your scan. Below is a detailed analysis of your key skin characteristics,
              forming the foundation for your personalized skincare protocol.
            </p>
          </div>
          
          {/* Results */}
          <div className="space-y-16">
            {results.map((concern, index) => (
              <div 
                key={index} 
                className={`relative grid grid-cols-1 md:grid-cols-12 gap-12 items-start frosted-card p-8 transition-all duration-500 ${visibleResults.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                {/* Label column */}
                <div className="md:col-span-4 lg:col-span-3">
                  <h3 className="text-2xl font-medium text-aurascan-dark-grey tracking-tight mb-3">{concern.name}</h3>
                  <div className={`inline-block px-4 py-1 text-sm font-semibold tracking-wider uppercase rounded-full ${getLevelBgClass(concern.level)}`}>
                    {getLevelText(concern.level)}
                  </div>
                </div>
                
                {/* Data column */}
                <div className="md:col-span-8 lg:col-span-9 relative">
                  {/* Progress visualization */}
                  <div className="mb-8 relative">
                    <Progress 
                      value={concern.level} 
                      className={`h-[3px] bg-gray-100 ${visibleResults.includes(index) ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 delay-300`}
                    />
                    <div 
                      className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 z-10 animate-pulse-slow ${getLevelColorClass(concern.level)}`}
                      style={{ 
                        left: `${concern.level}%`,
                        transition: 'left 1s ease-out',
                        boxShadow: `0 0 10px ${concern.level < 30 ? 'rgba(14,212,184,0.5)' : concern.level < 60 ? 'rgba(61,209,231,0.5)' : 'rgba(167,139,250,0.5)'}`,
                      }}
                    ></div>
                    <div className="absolute -bottom-5 left-0 text-xs text-aurascan-medium-grey font-medium">0%</div>
                    <div className="absolute -bottom-5 right-0 text-xs text-aurascan-medium-grey font-medium">100%</div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-base text-aurascan-medium-grey leading-relaxed tracking-wide max-w-3xl">
                    {concern.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Data visualization */}
          <div className="mt-28 mb-16 relative h-96 overflow-hidden rounded-lg frosted-card p-6 grid-lines">
            {/* Abstract visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Morphing central shape based on results */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                  <div className="morphing-shape--violet w-full h-full"></div>
                </div>
                
                {/* Rotating rings */}
                <div className="absolute inset-0 border border-aurascan-violet/40 rounded-full animate-rotate-slow" 
                     style={{ transformOrigin: 'center', animationDuration: '30s' }}></div>
                <div className="absolute inset-4 border border-aurascan-violet/30 rounded-full animate-rotate-slow" 
                     style={{ transformOrigin: 'center', animationDuration: '20s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-8 border border-aurascan-violet/20 rounded-full animate-rotate-slow" 
                     style={{ transformOrigin: 'center', animationDuration: '25s' }}></div>
                <div className="absolute inset-12 border border-aurascan-violet/10 rounded-full animate-rotate-slow" 
                     style={{ transformOrigin: 'center', animationDuration: '35s', animationDirection: 'reverse' }}></div>
                
                {/* Central luminous point */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-aurascan-violet shadow-violet animate-glow-violet z-10"></div>
                
                {/* Data points representing skin concerns */}
                {results.map((concern, i) => {
                  const angle = (i * 90) % 360;
                  const distance = 90 + concern.level * 0.5;
                  const x = Math.cos(angle * Math.PI / 180) * distance;
                  const y = Math.sin(angle * Math.PI / 180) * distance;
                  
                  const color = concern.level < 30 
                    ? 'border-aurascan-teal bg-aurascan-teal/10' 
                    : concern.level < 60 
                      ? 'border-aurascan-cyan bg-aurascan-cyan/10' 
                      : 'border-aurascan-violet bg-aurascan-violet/10';
                  
                  return (
                    <div 
                      key={i} 
                      className={`absolute border ${color}`}
                      style={{
                        width: `${30 + concern.level * 0.4}px`,
                        height: `${30 + concern.level * 0.4}px`,
                        borderRadius: '50%',
                        opacity: 0.8,
                        transform: `translate(${x}px, ${y}px)`,
                        left: 'calc(50% - 15px)',
                        top: 'calc(50% - 15px)',
                        animation: 'float 4s infinite ease-in-out',
                        animationDelay: `${i * 0.5}s`
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                        {concern.level}%
                      </div>
                    </div>
                  );
                })}

                {/* Animated particles */}
                {Array(15).fill(0).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-aurascan-violet/50 animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDuration: `${3 + Math.random() * 4}s`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Legend */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-8 text-xs">
              {["Dryness", "Sun Damage", "Fine Lines", "Oiliness"].map((label, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-aurascan-violet' : i === 1 ? 'bg-aurascan-cyan' : i === 2 ? 'bg-aurascan-teal' : 'bg-aurascan-teal'}`}></div>
                  <span className="text-aurascan-medium-grey">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Action button */}
      <div className="px-6 py-12 md:px-12 md:py-16 border-t border-aurascan-light-grey bg-white/70 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <Button 
            className="w-full md:w-auto button-violet py-7 px-10 flex items-center justify-center gap-4"
            onClick={onViewRecommendations}
          >
            <span className="tracking-wider">VIEW YOUR PERSONALIZED PROTOCOL</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkinResults;
