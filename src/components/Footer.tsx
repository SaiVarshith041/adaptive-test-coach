import { Brain, BookOpen, Mail, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient-primary">AI Tutor</h3>
                <p className="text-xs text-muted-foreground">Adaptive Learning Platform</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering students with AI-powered exam preparation tools for better learning outcomes.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="font-semibold">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#upload" className="hover:text-primary transition-colors">File Upload</a></li>
              <li><a href="#quiz" className="hover:text-primary transition-colors">AI Quizzes</a></li>
              <li><a href="#analysis" className="hover:text-primary transition-colors">Performance Analysis</a></li>
              <li><a href="#recommendations" className="hover:text-primary transition-colors">Study Plans</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Study Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Exam Tips</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get Started</h4>
            <p className="text-sm text-muted-foreground">
              Ready to transform your exam preparation?
            </p>
            <Button variant="hero" size="sm" className="w-full">
              <BookOpen className="mr-2 h-4 w-4" />
              Start Learning
            </Button>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 AI Tutor - Adaptive Learning Platform. Powered by advanced AI technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;