import { Upload, Brain, BarChart3, Target, FileText, Clock, Award, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Upload,
    title: "Smart File Processing",
    description: "Upload PDF, DOCX, or TXT files and get instant content analysis with multi-level summaries.",
    color: "primary"
  },
  {
    icon: Brain,
    title: "AI Quiz Generation",
    description: "Generate diverse question types including MCQ, True/False, Fill-in-blanks, and essay questions.",
    color: "secondary"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track your progress with detailed analysis of strengths, weaknesses, and improvement areas.",
    color: "success"
  },
  {
    icon: Target,
    title: "Personalized Study Plans",
    description: "Get AI-powered recommendations tailored to your learning patterns and weak areas.",
    color: "accent"
  },
  {
    icon: FileText,
    title: "Multiple Question Types",
    description: "Practice with 7 different question formats to prepare for any exam style.",
    color: "warning"
  },
  {
    icon: Clock,
    title: "Adaptive Timing",
    description: "Smart time allocation recommendations based on question difficulty and your performance.",
    color: "primary"
  },
  {
    icon: Award,
    title: "Exam Readiness Score",
    description: "Get a comprehensive readiness score with detailed breakdown of your preparation level.",
    color: "secondary"
  },
  {
    icon: Users,
    title: "Study Strategies",
    description: "Receive proven study techniques and exam strategies for optimal performance.",
    color: "success"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Powerful Features for
            <span className="text-gradient-primary block">Exam Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform provides comprehensive tools to enhance your study 
            experience and maximize your exam performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-12 h-12 bg-gradient-${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-card border-primary/20 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Why Choose AI Tutor?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">7+</div>
                  <p className="text-sm text-muted-foreground">Question Types</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">89%</div>
                  <p className="text-sm text-muted-foreground">Avg. Score Improvement</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-success mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">AI Availability</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;