import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EngineSection from "@/components/EngineSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import AwsSection from "@/components/AwsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <EngineSection />
      <FeaturesGrid />
      <AwsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
