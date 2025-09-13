import { TrendingUp, Target, Award, BookOpen, Brain, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const sampleAnalysis = {
  strengths: ["Cell Biology", "Genetics", "Molecular Biology"],
  weaknesses: ["Ecology", "Evolution", "Plant Biology"],
  exam_readiness_score: 78,
  performance_breakdown: [
    { topic: "Cell Biology", score: 92, questions: 12, category: "strength" },
    { topic: "Genetics", score: 85, questions: 8, category: "strength" },
    { topic: "Molecular Biology", score: 80, questions: 10, category: "strength" },
    { topic: "Ecology", score: 65, questions: 6, category: "weakness" },
    { topic: "Evolution", score: 58, questions: 7, category: "weakness" },
    { topic: "Plant Biology", score: 45, questions: 5, category: "weakness" },
  ]
};

const AnalysisSection = () => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "success";
    if (score >= 60) return "warning";
    return "destructive";
  };

  const getReadinessLevel = (score: number) => {
    if (score >= 85) return { level: "Excellent", color: "success", description: "You're well-prepared!" };
    if (score >= 70) return { level: "Good", color: "warning", description: "Almost ready, focus on weak areas" };
    if (score >= 50) return { level: "Needs Improvement", color: "destructive", description: "More practice required" };
    return { level: "Poor", color: "destructive", description: "Significant study needed" };
  };

  const readiness = getReadinessLevel(sampleAnalysis.exam_readiness_score);

  return (
    <section id="analysis" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Performance Analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get detailed insights into your learning progress with AI-powered analysis 
            and personalized recommendations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Exam Readiness Score */}
          <Card className="lg:col-span-1 shadow-elegant">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <CardTitle>Exam Readiness</CardTitle>
              <CardDescription>Overall preparation level</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div>
                <div className="text-4xl font-bold text-gradient-primary mb-2">
                  {sampleAnalysis.exam_readiness_score}%
                </div>
                <Badge variant="outline" className={`border-${readiness.color}`}>
                  {readiness.level}
                </Badge>
              </div>
              
              <Progress 
                value={sampleAnalysis.exam_readiness_score} 
                className="h-3"
              />
              
              <p className="text-sm text-muted-foreground">
                {readiness.description}
              </p>
            </CardContent>
          </Card>

          {/* Strengths & Weaknesses */}
          <Card className="lg:col-span-2 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                Strengths & Areas for Improvement
              </CardTitle>
              <CardDescription>
                Detailed breakdown of your performance across topics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Strengths */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-success flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Strong Areas
                  </h4>
                  <div className="space-y-3">
                    {sampleAnalysis.performance_breakdown
                      .filter(item => item.category === "strength")
                      .map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-success/10 rounded-lg border border-success/20">
                          <div>
                            <p className="font-medium">{item.topic}</p>
                            <p className="text-sm text-muted-foreground">{item.questions} questions</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-success">{item.score}%</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Weaknesses */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-warning flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Focus Areas
                  </h4>
                  <div className="space-y-3">
                    {sampleAnalysis.performance_breakdown
                      .filter(item => item.category === "weakness")
                      .map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-warning/10 rounded-lg border border-warning/20">
                          <div>
                            <p className="font-medium">{item.topic}</p>
                            <p className="text-sm text-muted-foreground">{item.questions} questions</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-warning">{item.score}%</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Chart */}
          <Card className="lg:col-span-3 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Brain className="h-6 w-6 text-primary" />
                Topic Performance Overview
              </CardTitle>
              <CardDescription>
                Visual representation of your performance across all topics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sampleAnalysis.performance_breakdown.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{item.topic}</span>
                        <Badge 
                          variant="outline" 
                          className={`border-${getScoreColor(item.score)} text-xs`}
                        >
                          {item.questions} questions
                        </Badge>
                      </div>
                      <span className={`font-bold text-${getScoreColor(item.score)}`}>
                        {item.score}%
                      </span>
                    </div>
                    <Progress 
                      value={item.score} 
                      className={`h-2 bg-${getScoreColor(item.score)}/10`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;