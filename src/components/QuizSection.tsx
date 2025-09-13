import { useState } from "react";
import { CheckCircle, XCircle, Clock, Target, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const sampleQuestions = [
  {
    id: 1,
    type: "mcq",
    difficulty: "medium",
    exam_weightage: "high",
    question: "What is the primary function of mitochondria in eukaryotic cells?",
    options: [
      "Protein synthesis",
      "Energy production (ATP synthesis)",
      "DNA replication",
      "Waste removal"
    ],
    answer: "Energy production (ATP synthesis)",
    explanation: "Mitochondria are known as the powerhouse of the cell, responsible for producing ATP through cellular respiration."
  },
  {
    id: 2,
    type: "true_false",
    difficulty: "easy",
    exam_weightage: "medium",
    question: "Photosynthesis can occur in both plants and animals.",
    answer: "False",
    explanation: "Photosynthesis only occurs in plants, algae, and some bacteria that contain chlorophyll."
  },
  {
    id: 3,
    type: "fill_blank",
    difficulty: "medium",
    exam_weightage: "high",
    question: "The process by which cells divide to produce gametes is called _______.",
    answer: "meiosis",
    explanation: "Meiosis is the type of cell division that produces gametes (sex cells) with half the chromosome number."
  }
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const question = sampleQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.answer;

  const handleAnswerSelect = (answer: string) => {
    if (showAnswer) return;
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    
    setShowAnswer(true);
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setShowAnswer(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "success";
      case "medium": return "warning";
      case "hard": return "destructive";
      default: return "secondary";
    }
  };

  const getWeightageColor = (weightage: string) => {
    switch (weightage) {
      case "high": return "destructive";
      case "medium": return "warning";
      case "low": return "success";
      default: return "secondary";
    }
  };

  return (
    <section id="quiz" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Interactive Quiz Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our AI-generated questions with instant feedback and detailed explanations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Quiz Progress */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Question {currentQuestion + 1} of {sampleQuestions.length}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-success" />
                    <span className="text-sm text-muted-foreground">Score: {score}/{answers.length}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className={`border-${getDifficultyColor(question.difficulty)}`}>
                    {question.difficulty}
                  </Badge>
                  <Badge variant="outline" className={`border-${getWeightageColor(question.exam_weightage)}`}>
                    {question.exam_weightage} weightage
                  </Badge>
                </div>
              </div>
              <Progress value={(currentQuestion + 1) / sampleQuestions.length * 100} className="h-2" />
            </CardContent>
          </Card>

          {/* Question Card */}
          <Card className="shadow-quiz">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Brain className="h-6 w-6 text-primary" />
                {question.type.toUpperCase()} Question
              </CardTitle>
              <CardDescription className="text-lg leading-relaxed">
                {question.question}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* MCQ Options */}
              {question.type === "mcq" && question.options && (
                <div className="space-y-3">
                  {question.options.map((option, index) => (
                    <Button
                      key={index}
                      variant="quiz"
                      className={`w-full text-left h-auto p-4 quiz-option ${
                        showAnswer
                          ? option === question.answer
                            ? "quiz-correct"
                            : option === selectedAnswer && option !== question.answer
                            ? "quiz-incorrect"
                            : ""
                          : selectedAnswer === option
                          ? "border-primary bg-primary/5"
                          : ""
                      }`}
                      onClick={() => handleAnswerSelect(option)}
                      disabled={showAnswer}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-primary">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        <span>{option}</span>
                        {showAnswer && option === question.answer && (
                          <CheckCircle className="h-5 w-5 text-success ml-auto" />
                        )}
                        {showAnswer && option === selectedAnswer && option !== question.answer && (
                          <XCircle className="h-5 w-5 text-destructive ml-auto" />
                        )}
                      </div>
                    </Button>
                  ))}
                </div>
              )}

              {/* True/False Options */}
              {question.type === "true_false" && (
                <div className="grid grid-cols-2 gap-4">
                  {["True", "False"].map((option) => (
                    <Button
                      key={option}
                      variant="quiz"
                      className={`quiz-option ${
                        showAnswer
                          ? option === question.answer
                            ? "quiz-correct"
                            : option === selectedAnswer && option !== question.answer
                            ? "quiz-incorrect"
                            : ""
                          : selectedAnswer === option
                          ? "border-primary bg-primary/5"
                          : ""
                      }`}
                      onClick={() => handleAnswerSelect(option)}
                      disabled={showAnswer}
                    >
                      {option}
                      {showAnswer && option === question.answer && (
                        <CheckCircle className="h-5 w-5 text-success ml-2" />
                      )}
                      {showAnswer && option === selectedAnswer && option !== question.answer && (
                        <XCircle className="h-5 w-5 text-destructive ml-2" />
                      )}
                    </Button>
                  ))}
                </div>
              )}

              {/* Fill in the blank */}
              {question.type === "fill_blank" && (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={selectedAnswer}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                    placeholder="Type your answer here..."
                    className="w-full p-3 border border-input rounded-md bg-background"
                    disabled={showAnswer}
                  />
                  {showAnswer && (
                    <div className={`p-3 rounded-md ${isCorrect ? "quiz-correct" : "quiz-incorrect"}`}>
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-success" />
                        ) : (
                          <XCircle className="h-5 w-5 text-destructive" />
                        )}
                        <span className="font-medium">
                          Correct answer: {question.answer}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Answer explanation */}
              {showAnswer && question.explanation && (
                <Card className="bg-muted/50 border-primary/20">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Explanation</h4>
                        <p className="text-sm text-muted-foreground">{question.explanation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Action buttons */}
              <div className="flex gap-4 pt-4">
                {!showAnswer ? (
                  <Button
                    variant="academic"
                    size="lg"
                    onClick={handleSubmit}
                    disabled={!selectedAnswer}
                    className="flex-1"
                  >
                    Submit Answer
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={handleNext}
                    className="flex-1"
                    disabled={currentQuestion === sampleQuestions.length - 1}
                  >
                    {currentQuestion === sampleQuestions.length - 1 ? "Quiz Complete" : "Next Question"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;