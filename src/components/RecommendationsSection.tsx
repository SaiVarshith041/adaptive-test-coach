import { Calendar, Clock, BookOpen, Target, Lightbulb, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const sampleRecommendations = {
  study_plan: [
    "Focus 30 minutes daily on Ecology using visual diagrams and mind maps",
    "Practice 15 Evolution MCQs every alternate day with detailed explanations",
    "Create flashcards for Plant Biology terminology and review weekly",
    "Schedule mock tests every weekend covering weak areas",
    "Join study groups for collaborative learning on challenging topics"
  ],
  exam_strategy: [
    "Start with Cell Biology questions to build early confidence",
    "Allocate 2 minutes per MCQ and 15 minutes for essay questions",
    "Mark difficult questions for review and attempt them at the end",
    "Use elimination method for MCQs when unsure",
    "Reserve last 15 minutes for reviewing all answers"
  ],
  motivation: "Progress is progress, no matter how small. Every question you practice brings you closer to success! 🌟"
};

const studyTechniques = [
  {
    icon: BookOpen,
    title: "Active Reading",
    description: "Summarize each chapter in your own words",
    color: "primary"
  },
  {
    icon: Target,
    title: "Spaced Repetition",
    description: "Review topics at increasing intervals",
    color: "secondary"
  },
  {
    icon: Lightbulb,
    title: "Practice Testing",
    description: "Regular quizzes improve long-term retention",
    color: "accent"
  }
];

const RecommendationsSection = () => {
  return (
    <section id="recommendations" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Personalized Study Recommendations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered study plans and strategies tailored to your learning patterns 
            and performance analysis.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Study Techniques */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {studyTechniques.map((technique, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`mx-auto w-12 h-12 bg-gradient-${technique.color} rounded-full flex items-center justify-center mb-4`}>
                    <technique.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{technique.title}</h3>
                  <p className="text-sm text-muted-foreground">{technique.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Study Plan */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-primary" />
                  Your Personalized Study Plan
                </CardTitle>
                <CardDescription>
                  Daily and weekly recommendations based on your weak areas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {sampleRecommendations.study_plan.map((plan, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-relaxed">{plan}</p>
                  </div>
                ))}
                
                <Button variant="academic" className="w-full mt-6">
                  <Calendar className="mr-2 h-4 w-4" />
                  Download Study Calendar
                </Button>
              </CardContent>
            </Card>

            {/* Exam Strategy */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-secondary" />
                  Exam Day Strategy
                </CardTitle>
                <CardDescription>
                  Time management and approach strategies for optimal performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {sampleRecommendations.exam_strategy.map((strategy, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-secondary/5 rounded-lg border border-secondary/10">
                    <div className="flex-shrink-0 w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-relaxed">{strategy}</p>
                  </div>
                ))}
                
                <Button variant="secondary" className="w-full mt-6">
                  <Target className="mr-2 h-4 w-4" />
                  Practice Exam Timer
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Motivation Card */}
          <Card className="bg-gradient-hero text-white shadow-elegant">
            <CardContent className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Stay Motivated!</h3>
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                {sampleRecommendations.motivation}
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <Badge variant="outline" className="border-white/30 text-white bg-white/10">
                  78% Ready
                </Badge>
                <Badge variant="outline" className="border-white/30 text-white bg-white/10">
                  3 Weeks to Go
                </Badge>
                <Badge variant="outline" className="border-white/30 text-white bg-white/10">
                  You've Got This!
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;