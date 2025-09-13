import { Upload, Brain, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-learning.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                AI-Powered
                <span className="text-gradient-hero block">Exam Preparation</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Upload your study materials and get personalized quizzes, performance analysis, 
                and adaptive study recommendations powered by advanced AI.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="animate-pulse-soft">
                Start Learning
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="p-4 text-center border-primary/20">
                <Upload className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Upload Materials</p>
              </Card>
              <Card className="p-4 text-center border-secondary/20">
                <Brain className="h-8 w-8 text-secondary mx-auto mb-2" />
                <p className="text-sm font-medium">AI Analysis</p>
              </Card>
              <Card className="p-4 text-center border-success/20">
                <Target className="h-8 w-8 text-success mx-auto mb-2" />
                <p className="text-sm font-medium">Targeted Practice</p>
              </Card>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={heroImage}
                alt="Students learning with AI-powered platform"
                className="w-full h-[600px] object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating stats */}
            <Card className="absolute -bottom-6 -left-6 p-4 shadow-elegant">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-success" />
                <div>
                  <p className="text-2xl font-bold text-success">89%</p>
                  <p className="text-xs text-muted-foreground">Avg Score Improvement</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;