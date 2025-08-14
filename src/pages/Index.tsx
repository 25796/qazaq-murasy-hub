import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ContentSections from "@/components/ContentSections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ContentSections />
      <Footer />
    </div>
  );
};

export default Index;
