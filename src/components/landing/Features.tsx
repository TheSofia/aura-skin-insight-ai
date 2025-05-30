import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ShoppingBag, BookOpen, Camera, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Sparkles,
      title: "AI Skin Analysis",
      description: "Advanced face scanning technology analyzes your unique skin needs with precision",
      action: "Start Analysis",
      route: "/custom-product"
    },
    {
      icon: ShoppingBag,
      title: "Curated Beauty Shop",
      description: "Discover premium skincare products selected by our AI based on your skin profile",
      action: "Browse Shop",
      route: "/shop"
    },
    {
      icon: BookOpen,
      title: "Personalized Skin Diary",
      description: "Track your skincare journey and monitor your progress with ease",
      action: "Start Journaling",
      route: "/skin-diary"
    },
    {
      icon: Camera,
      title: "Virtual Skin Mirror",
      description: "Visualize your skin's potential and get real-time feedback on your routine",
      action: "Open Mirror",
      route: "/skin-mirror"
    },
    {
      icon: Users,
      title: "Beauty Exchange Community",
      description: "Connect with fellow skincare enthusiasts and share your experiences",
      action: "Join Community",
      route: "/beauty-exchange"
    }
  ];

  return (
    <section className="py-12">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-light tracking-wider text-center mb-8 text-beautyagent-deeper-grey">
          Explore BeautyAgent Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 glass-card hover:shadow-lg transition-all">
              <feature.icon className="w-8 h-8 mb-4 text-beautyagent-violet-titanium" />
              <h3 className="text-xl font-light mb-2">{feature.title}</h3>
              <p className="text-sm text-beautyagent-charcoal-gray mb-4">{feature.description}</p>
              <Button onClick={() => navigate(feature.route)} className="glass-button">
                {feature.action}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
