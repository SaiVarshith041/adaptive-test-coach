import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UploadSection from "@/components/UploadSection";
import QuizSection from "@/components/QuizSection";
import AnalysisSection from "@/components/AnalysisSection";
import RecommendationsSection from "@/components/RecommendationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <UploadSection />
        <QuizSection />
        <AnalysisSection />
        <RecommendationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
