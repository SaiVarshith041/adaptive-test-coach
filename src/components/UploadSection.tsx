import { useState, useRef } from "react";
import { Upload, FileText, BookOpen, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const UploadSection = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload PDF, DOCX, or TXT files only.",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    setProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          toast({
            title: "File uploaded successfully!",
            description: "AI is now processing your study material...",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="upload" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Upload Your Study Material
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Support for PDF, DOCX, and TXT files. Our AI will process your content 
            and generate comprehensive exam-style questions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors">
            <CardContent className="p-12">
              {!uploading ? (
                <div className="text-center space-y-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Upload className="h-8 w-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Drop your files here</h3>
                    <p className="text-muted-foreground mb-6">
                      or click to browse from your computer
                    </p>
                  </div>
                  
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={triggerFileInput}
                    className="w-full sm:w-auto"
                  >
                    <Upload className="mr-2 h-5 w-5" />
                    Choose File
                  </Button>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.docx,.txt"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  
                  <div className="grid grid-cols-3 gap-4 pt-8">
                    <div className="text-center">
                      <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">PDF Files</p>
                    </div>
                    <div className="text-center">
                      <BookOpen className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <p className="text-sm font-medium">DOCX Files</p>
                    </div>
                    <div className="text-center">
                      <FileText className="h-8 w-8 text-accent mx-auto mb-2" />
                      <p className="text-sm font-medium">TXT Files</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Processing your file...</h3>
                    <p className="text-muted-foreground mb-6">
                      AI is analyzing your study material and generating questions
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Progress value={progress} className="w-full" />
                    <p className="text-sm text-muted-foreground">{progress}% complete</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;